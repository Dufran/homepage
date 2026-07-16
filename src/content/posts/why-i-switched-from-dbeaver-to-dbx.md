---
title: Why I switched from DBeaver to DBX
description: My first impressions of DBX—a lightweight database client with broad database support, smooth AI integration, MCP, and Codex CLI support.
pubDate: 2026-07-16
created: 2026-07-16T06:10
tags:
  - databases
  - dbx
  - ai
  - developer-tools
  - open-source
---

I recently tried [DBX](https://github.com/t8y2/dbx), and my first impression has been very positive.

It is an open-source, cross-platform client that supports more than 60 databases while keeping the application at around 20 MB. More importantly, it addresses several things that had started to bother me about DBeaver: its resource footprint, paid restrictions around some database types, and an AI workflow that never felt fully integrated.

## A much smaller memory footprint

The resource-usage comparison was difficult to ignore. In a quick process snapshot on my Mac, I saw the following numbers:

| Application | Memory | Threads |
| --- | ---: | ---: |
| DBX | 56 MB | 18 |
| DBeaver | 458 MB | 58 |

DBeaver was using more than eight times as much memory. This was not a controlled benchmark, so the numbers should be treated as a point-in-time observation rather than a universal result. Still, they clearly illustrate the substantial runtime overhead of DBeaver's JVM-based architecture in my setup.

There are valid reasons to build desktop software on the JVM, but that trade-off becomes noticeable for an application that stays open throughout the working day. DBX feels much closer to what I want from a frequently used database client: fast, focused, and light on system resources.

## More database types without another subscription

DBeaver Community works well with many SQL databases, but the support I wanted for databases such as Redis and MongoDB requires one of its paid editions.

DBX supports Redis, MongoDB, and dozens of other databases out of the box. That matters because I would rather use one lightweight client across different projects than pay to unlock individual categories of data sources.

Combined with the lower resource usage, this was one of the main reasons I decided to jump ship and give DBX a try.

## AI that feels like part of the workflow

I had previously tried the AI functionality added to DBeaver, but the experience felt cumbersome. It seemed more like an extra feature placed on top of the existing interface than a natural part of writing and exploring SQL.

The integration in DBX feels much smoother. The assistant works directly in the SQL editor and can help generate, explain, optimize, and fix queries without forcing me to move context between separate tools.

DBX also provides an MCP server, allowing AI coding tools to access database schemas and query tools through connections already configured in the application. This makes the database client part of a broader development workflow instead of an isolated desktop tool.

## Codex CLI and my existing OpenAI subscription

One of my favorite details is the support for Codex CLI as an AI provider. After signing in separately with `codex login`, I can use my existing OpenAI subscription instead of configuring an API key and paying for API usage separately.

Through the DBX MCP server, Codex CLI can work with the database schema and query tools exposed by DBX. For me, this is both more convenient and more practical than maintaining another AI configuration exclusively for a database client.

This is how AI integration should feel: not like a feature bolted onto an existing product, but like a natural extension of the development workflow.

## First impression

DBX combines the qualities that made me curious enough to switch:

- a small application and low memory usage;
- support for more than 60 databases, including Redis and MongoDB;
- a smoother built-in AI experience;
- MCP integration for external AI tools;
- Codex CLI support that works with my existing OpenAI subscription.

It is still an early impression rather than a long-term review, but DBX already feels like a refreshing alternative to heavier database clients.

You can find the project on [GitHub](https://github.com/t8y2/dbx) or visit the [DBX website](https://dbxio.com).
