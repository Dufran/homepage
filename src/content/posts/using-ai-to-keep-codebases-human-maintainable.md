---
title: Use AI to make codebases easier for humans, not just bigger
description: A tech-debt audit skill that uses AI to find duplication, cognitive complexity, stale dependencies, and safer simplification opportunities before producing an actionable handoff.
pubDate: 2026-07-17
created: 2026-07-17T17:42
tags:
  - ai
  - technical-debt
  - code-quality
  - developer-experience
  - maintainability
---

AI has made it dramatically cheaper to add code. It can generate another endpoint, abstraction, integration, test fixture, or compatibility layer in minutes.

But making code cheaper to produce does not make it cheaper to understand.

A codebase can grow faster than a team’s ability to maintain a useful mental model of it. Repeated patterns drift apart. Layers accumulate. Dependencies age. A simple behavior starts requiring five files and several wrappers to explain. Eventually, AI is no longer an accelerator—it becomes a requirement for navigating complexity that AI helped create.

That is not the outcome I want from AI-assisted development.

There is a fitting *Star Wars* analogy here. AI was supposed to bring balance to software development—not leave codebases in a state where only AI can work with them. Like any analogy, it is imperfect, but it captures the inversion of the original promise.

I want to use AI in both directions: not only to build features, but also to continuously refine the system so it remains understandable to humans. To support that workflow, I created a reusable [tech-debt audit skill](https://github.com/Dufran/.pi/blob/main/agent/skills/tech-debt-audit/SKILL.md).

## The goal: preserve human ownership

The skill starts from a simple principle:

> AI should help reduce the amount of context a human needs—not justify adding unlimited context because an AI can process it.

The objective is not to chase an abstract idea of “clean code,” maximize lint scores, or refactor everything into reusable helpers. It is to identify concrete places where the implementation creates unnecessary maintenance cost and turn those findings into bounded action items.

A healthy result is a codebase where a developer can still:

- trace important behavior without asking an agent to summarize every call chain;
- make a local change without discovering hidden coupling across unrelated modules;
- understand why an abstraction exists and what boundary it represents;
- rely on types and tools to expose mistakes early;
- upgrade or replace a dependency without first reconstructing years of accidental integration detail.

AI remains useful in that environment, but humans retain the ability to reason about the system directly.

## What the skill audits

The audit uses several focused, read-only subagent roles. Each role gathers evidence from the repository, and a final synthesis step converts validated findings into an implementation handoff.

### 1. Meaningful duplication

Not all repetition is technical debt. Two similar blocks can be easier to maintain separately when they belong to different domains or are likely to evolve independently.

The audit therefore looks beyond identical text. It searches for repeated business rules, validation, transformations, queries, control flow, and parallel implementations that create change-coupling risk. A DRY finding must cite multiple concrete occurrences and explain why consolidation would be safer than keeping the logic local.

It also looks in the opposite direction: existing generic helpers that are harder to understand than the repeated code they replaced.

### 2. Cognitive complexity and implementation depth

Some code is technically organized but still difficult to follow. The behavior may be spread across factories, callbacks, decorators, inheritance, middleware, event handlers, configuration, and pass-through wrappers.

The skill identifies hotspots such as:

- deeply nested branching and high decision density;
- long functions with mixed responsibilities;
- boolean flags that create several hidden modes;
- implicit state changes and temporal coupling;
- exception-driven control flow;
- abstraction chains with only one real implementation;
- speculative extension points and premature generalization;
- behavior that requires excessive navigation to answer “what happens here?”

The recommendation is not automatically “extract another abstraction.” The preferred fix is the smallest change that reduces total cognitive load: clearer names, guard clauses, explicit state transitions, less indirection, separated orchestration and domain logic, or one stable domain abstraction.

If an abstraction adds more concepts, files, parameters, or navigation than it removes, the audit should reject it.

### 3. Dependency and API currency

“Latest” and “appropriate” are not the same thing.

The audit compares declared and resolved dependency versions with the latest relevant stable versions, but it also accounts for runtime compatibility, support policy, peer dependencies, LTS choices, framework constraints, and migration risk.

It checks actual API usage for deprecated methods, legacy configuration, compatibility shims, ignored warnings, and old integration patterns. Claims must be verified against authoritative documentation, release notes, registries, source repositories, migration guides, or static-analysis output—not model memory.

The resulting dependency matrix distinguishes between:

- current;
- behind but acceptable;
- actionable update;
- blocked;
- unknown.

This avoids turning every version difference into churn.

### 4. Library alternatives, developer experience, and type safety

An existing dependency may work while still imposing a high long-term cost. The skill can investigate alternatives for strategically important direct libraries: core infrastructure, highly coupled packages, weakly typed integrations, or dependencies with maintenance concerns.

It compares a small number of credible options, always including “keep the current library” as the baseline. Alternatives are evaluated for:

- API ergonomics and configuration burden;
- documentation and diagnostics;
- IDE and tooling support;
- testability and debugging experience;
- first-party types and strict-mode compatibility;
- generic precision, inference, and nullability modeling;
- runtime validation where it matters;
- casts, ignores, `Any`, or other untyped boundaries;
- maintenance health and ecosystem fit;
- compatibility, migration cost, and lock-in.

Each option receives a disposition: `keep`, `adopt`, `pilot`, `watch`, or `reject`. A newer or more popular library does not automatically win. If the benefit cannot be demonstrated without hands-on work, the correct recommendation is a bounded pilot with success and rollback criteria.

## Why the audit is read-only

The skill separates discovery from implementation intentionally.

Broad audits involve judgment. A subagent might find an apparent duplicate that encodes an important domain distinction, or recommend a major dependency upgrade without understanding a compatibility constraint. Allowing the same exploratory process to rewrite code immediately would turn uncertain findings into an uncontrolled refactor.

Instead, the workflow:

1. records the repository scope and current working-tree state;
2. launches bounded, read-only discovery agents;
3. validates high-impact findings against actual call sites, configuration, and authoritative sources;
4. merges duplicates and rejects weak candidates;
5. writes one implementation handoff document;
6. confirms that no source or dependency files changed.

This keeps the audit safe to run against an active repository and leaves prioritization with the project owner.

## The handoff is the product

A list of observations is not enough. “This function is complex” or “replace this library” gives the next developer another research task, not an action item.

The skill produces numbered findings such as `TD-001`, each with:

- priority, confidence, and relative effort;
- repository evidence and affected code paths;
- the maintenance or correctness cost;
- a bounded recommended change;
- implementation steps;
- observable acceptance criteria;
- focused validation commands;
- migration risks and rollback options;
- dependencies, blockers, and required decisions.

Cognitive-complexity findings include a before-and-after responsibility sketch. Dependency findings include authoritative sources and verification timestamps. Alternative recommendations include migration prerequisites and a proof-of-concept plan.

Low-confidence ideas, unresolved decisions, and oversized changes stay outside the executable action plan. The document is marked `implementation-ready` only when its prioritized items can be taken forward without repeating discovery.

## How to use it

The skill can be invoked with a broad repository request:

```text
Use the tech-debt-audit skill to audit this repository and write an implementation handoff.
```

For a large codebase, a narrower request is usually more useful:

```text
Use the tech-debt-audit skill to audit the billing and subscription packages.
Focus on cognitive complexity, duplicated business rules, and the type safety
of third-party integrations. Write an implementation handoff, but do not
modify source or dependency files.
```

The result should not be treated as a command to implement everything. It is evidence for triage. Teams can select a coherent batch, approve its boundaries, implement it through a single writer, and validate the result before moving to the next batch.

## Use AI as a codebase gardener

Feature development naturally adds concepts. Some are essential; others are scaffolding, duplication, compatibility code, or abstractions whose original assumptions no longer hold.

Without deliberate refinement, codebases mostly move in one direction: they accumulate.

AI makes that tendency more dangerous because it can keep producing plausible code after the architecture has exceeded what a person can comfortably understand. The answer is not to avoid AI. It is to give AI an explicit counterbalancing role:

```text
Build capability
      ↓
Audit complexity and dependencies
      ↓
Validate evidence
      ↓
Simplify or clarify
      ↓
Return a smaller mental model to humans
```

The long-term measure of successful AI-assisted engineering should not be how much code the model can generate. It should be whether the resulting system remains safe for a human to understand, change, and own.

The complete skill is available in my [.pi repository on GitHub](https://github.com/Dufran/.pi/blob/main/agent/skills/tech-debt-audit/SKILL.md).
