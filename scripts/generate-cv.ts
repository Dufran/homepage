import { createWriteStream } from 'node:fs'
import { mkdir, rename } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import PDFDocument from 'pdfkit'
import {
  coaxProjects,
  cvProfile,
  cvSkillGroups,
  domains,
  type Project,
  planeksProjects,
  sebnProjects,
  workExperiences,
} from '../src/data/portfolio'

const outputPath = resolve('public/OleksandrKorolCV.pdf')
const temporaryPath = `${outputPath}.tmp`
const pageMargin = 46
const textColor = '#202124'
const mutedColor = '#555b61'
const ruleColor = '#aeb4b9'

const projectsByCompany = {
  'COAX Software': coaxProjects,
  PLANEKS: planeksProjects,
  SEBN: sebnProjects,
} satisfies Record<(typeof workExperiences)[number]['company'], Project[]>

const allProjects = [...planeksProjects, ...coaxProjects, ...sebnProjects]
const selectedProjects = [...allProjects]
  .sort((left, right) => right.start.getTime() - left.start.getTime())
  .slice(0, 5)

const formatDate = (date?: Date) => {
  if (!date) {
    return 'Present'
  }
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  return `${month}/${date.getUTCFullYear()}`
}

const generateCv = async () => {
  await mkdir(dirname(outputPath), { recursive: true })

  const document = new PDFDocument({
    bufferPages: true,
    info: {
      Author: cvProfile.name,
      CreationDate: new Date(),
      Keywords: cvSkillGroups.flatMap((group) => group.skills).join(', '),
      Subject: `Resume for ${cvProfile.name}, ${cvProfile.title}`,
      Title: `${cvProfile.name} - CV`,
    },
    margins: { bottom: 52, left: pageMargin, right: pageMargin, top: 42 },
    size: 'A4',
    tagged: true,
  })
  const output = createWriteStream(temporaryPath)
  document.pipe(output)

  const contentWidth = document.page.width - pageMargin * 2

  const ensureSpace = (height: number) => {
    if (document.y + height > document.page.height - document.page.margins.bottom) {
      document.addPage()
    }
  }

  const sectionHeading = (title: string) => {
    ensureSpace(34)
    document.x = pageMargin
    document.moveDown(0.45)
    document
      .font('Helvetica-Bold')
      .fontSize(11)
      .fillColor(textColor)
      .text(title.toUpperCase(), pageMargin, document.y, { width: contentWidth })
    document
      .moveTo(pageMargin, document.y + 2)
      .lineTo(pageMargin + contentWidth, document.y + 2)
      .strokeColor(ruleColor)
      .lineWidth(0.7)
      .stroke()
    document.moveDown(0.55)
  }

  const bullet = (text: string) => {
    ensureSpace(22)
    const y = document.y
    document
      .font('Helvetica')
      .fontSize(9)
      .fillColor(textColor)
      .text('•', pageMargin + 4, y, { width: 10 })
    document.text(text, pageMargin + 17, y, { lineGap: 1.5, width: contentWidth - 17 })
    document.x = pageMargin
    document.moveDown(0.18)
  }

  const writeRoleHeading = (role: string, company: string, dates: string) => {
    ensureSpace(90)
    const y = document.y
    document
      .font('Helvetica-Bold')
      .fontSize(10.5)
      .fillColor(textColor)
      .text(`${role} | ${company}`, pageMargin, y, { width: contentWidth - 125 })
    document
      .font('Helvetica')
      .fontSize(9)
      .fillColor(mutedColor)
      .text(dates, pageMargin + contentWidth - 125, y + 1, { align: 'right', width: 125 })
    document.x = pageMargin
    document.y = Math.max(document.y, y + 14)
  }

  // Header
  const headerY = document.y
  document.font('Helvetica-Bold').fontSize(22).fillColor(textColor).text(cvProfile.name)
  document.font('Helvetica').fontSize(11).fillColor(mutedColor).text(cvProfile.title)
  document.moveDown(0.35)
  document
    .font('Helvetica')
    .fontSize(8.5)
    .fillColor(textColor)
    .text(
      `${cvProfile.email} | ${cvProfile.website} | ${cvProfile.linkedIn} | ${cvProfile.github}`,
      pageMargin,
      document.y,
      { lineGap: 1, width: contentWidth }
    )
  document.y = Math.max(document.y, headerY + 52)

  sectionHeading('Professional summary')
  document
    .font('Helvetica')
    .fontSize(9.5)
    .fillColor(textColor)
    .text(cvProfile.professionalSummary, { lineGap: 2 })

  sectionHeading('Technical skills')
  for (const group of cvSkillGroups) {
    ensureSpace(18)
    document
      .font('Helvetica-Bold')
      .fontSize(9)
      .fillColor(textColor)
      .text(`${group.label}: `, { continued: true })
      .font('Helvetica')
      .text(group.skills.join(', '), { lineGap: 1.5 })
    document.moveDown(0.18)
  }

  sectionHeading('Professional experience')
  for (const experience of workExperiences) {
    const companyProjects = projectsByCompany[experience.company]
    writeRoleHeading(
      experience.role,
      experience.company,
      `${formatDate(experience.start)} - ${formatDate(experience.end)}`
    )
    document
      .font('Helvetica')
      .fontSize(9)
      .fillColor(textColor)
      .text(experience.description, pageMargin, document.y, {
        lineGap: 1.5,
        width: contentWidth,
      })
    document.moveDown(0.2)
    for (const responsibility of experience.responsibilities) {
      bullet(responsibility)
    }

    const companyDomains = [...new Set(companyProjects.flatMap((project) => project.domain ?? []))]
    const portfolioSummary =
      companyDomains.length > 0
        ? `Commercial portfolio: ${companyProjects.length} projects across ${companyDomains.join(', ')}.`
        : `Commercial portfolio: ${companyProjects.length} projects.`
    bullet(portfolioSummary)
    document.moveDown(0.35)
  }

  sectionHeading('Selected project experience')
  for (const project of selectedProjects) {
    ensureSpace(32)
    const technologies =
      project.technologies?.map((technology) => technology.label).slice(0, 10) ?? []
    document
      .font('Helvetica-Bold')
      .fontSize(9.2)
      .fillColor(textColor)
      .text(project.name, { continued: true })
      .font('Helvetica')
      .fillColor(mutedColor)
      .text(
        ` | ${project.domain ?? 'Commercial software'} | ${formatDate(project.start)} - ${formatDate(project.end)}`
      )
    if (technologies.length > 0) {
      document
        .font('Helvetica')
        .fontSize(8.5)
        .fillColor(textColor)
        .text(`Technologies: ${technologies.join(', ')}`, { lineGap: 1 })
    }
    document.moveDown(0.35)
  }

  sectionHeading('Additional information')
  document
    .font('Helvetica-Bold')
    .fontSize(9)
    .fillColor(textColor)
    .text('Languages: ', { continued: true })
    .font('Helvetica')
    .text(cvProfile.languages.join(', '))
  document
    .font('Helvetica-Bold')
    .text('Industry domains: ', { continued: true })
    .font('Helvetica')
    .text(domains.join(', '))

  const pageRange = document.bufferedPageRange()
  for (let index = pageRange.start; index < pageRange.start + pageRange.count; index += 1) {
    document.switchToPage(index)
    document.page.margins.bottom = 20
    document
      .font('Helvetica')
      .fontSize(8)
      .fillColor(mutedColor)
      .text(
        `Oleksandr Korol | Page ${index + 1} of ${pageRange.count}`,
        pageMargin,
        document.page.height - 34,
        {
          align: 'center',
          lineBreak: false,
          width: contentWidth,
        }
      )
  }

  document.end()
  await new Promise<void>((resolvePromise, rejectPromise) => {
    output.on('finish', resolvePromise)
    output.on('error', rejectPromise)
  })
  await rename(temporaryPath, outputPath)
}

generateCv().catch((error: unknown) => {
  const message = error instanceof Error ? (error.stack ?? error.message) : String(error)
  process.stderr.write(`${message}\n`)
  process.exitCode = 1
})
