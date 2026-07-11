---
title: Auto Git identity by SSH host
description: Automatically configure the correct Git commit identity and signing key based on the SSH host used by a repository remote.
pubDate: 2026-06-19
created: 2026-06-19T17:18
tags:
  - git
  - ssh
  - automation
  - productivity
---

Small Git lifehack I wish I had set up earlier 👇

If you use the same Git hosting provider with multiple identities — for example, one personal GitHub account and one company GitHub account — SSH config solves only half of the problem.

It can choose the correct SSH key:

```ssh
Host github.com-company
  HostName github.com
  User git
  IdentityFile ~/.ssh/company

Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/personal
```

But Git commit identity is separate.

So even if cloning and authentication work correctly, you can still accidentally commit with the wrong:

- `user.name`
- `user.email`
- signing key

The trick: use a global Git template hook.

Git can copy hooks into every newly cloned repository. A `post-checkout` hook can inspect the remote URL and write repository-local config automatically.

Abstract version:

```bash
# one-time setup
git config --global init.templateDir ~/.git-templates
mkdir -p ~/.git-templates/hooks
```

```bash
# ~/.git-templates/hooks/post-checkout
#!/usr/bin/env bash
set -euo pipefail

remote_url="$(git config --get remote.origin.url || true)"

case "$remote_url" in
  git@github.com-company:*|ssh://git@github.com-company/*)
    git config --local user.name "Company Name"
    git config --local user.email "you@company.com"
    git config --local user.signingkey "~/.ssh/company.pub"
    ;;

  git@github.com:*|ssh://git@github.com/*)
    git config --local user.name "Personal Name"
    git config --local user.email "you@example.com"
    git config --local user.signingkey "~/.ssh/personal.pub"
    ;;
esac
```

Then make it executable:

```bash
chmod +x ~/.git-templates/hooks/post-checkout
```

Now, when I clone:

```bash
git clone git@github.com-company:org/repo.git
```

Git automatically writes the correct local identity into that repository’s `.git/config`.

And when I clone:

```bash
git clone git@github.com:me/repo.git
```

it writes my personal identity instead.

## Why not use `includeIf hasconfig:remote.*.url`?

Because it is not a post-clone action and does not write local config. It can be useful after a repository exists, but during the initial clone the remote URL is not always available at the moment Git evaluates configuration.

A template hook is more explicit: clone first, inspect the URL, and write local config.

Tiny automation, but it removes an entire class of annoying mistakes.
