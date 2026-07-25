# .specs — pins, not documents

Since engine **v0.6.0** ([ADR-0002](https://github.com/DMCSoftMX/archetype_claude/blob/main/docs/adr/0002-specs-en-comentarios-de-issues.md))
the spec is a **comment on the issue**, not a file. `specify` posts a canonical comment marked
`<!-- agent-spec:<n> -->`; you edit it inline to approve or correct it.

This folder holds only one **pin per issue**, `.specs/<issue#>.ref`, which `implement` writes and
commits alongside the code:

```sh
source=issue-comment
issue=<issue#>
comment_id=<id of the spec comment>
spec_sha256=<sha256 of the comment body the code was written against>
captured=<timestamp>
```

The **`spec_sha256`** is the point: a content hash of the spec comment at implementation time. That
pin is what lets `spec-guard` detect drift — it re-fetches the pinned comment, re-hashes it, and if
the hash no longer matches (someone edited the spec after the code was written) **every open code PR
for that issue goes red** until someone looks at it again. That is intentional.

Don't hand-edit these files. If a PR needs to re-pin, re-run `claude-implement`, or tick the
*"linked spec is still accurate"* box in the PR body.

## The flow

- **`specify`** → posts the spec as the issue's canonical comment; you read/edit it — your checkpoint
  on intent, before a line of code exists.
- **`claude-implement`** (or **`@claude`**) → the agent reads the spec comment, implements, and
  commits the code + the pin → PR → gates → you merge. **Fail-closed:** with no spec comment and no
  `no-spec` label, `implement` stops instead of guessing from the issue body.
- **Heavy work:** add **`plan`** in between for a deep design comment (`<!-- agent-plan:<n> -->`).

Small, obvious fixes skip straight to `claude-implement` on a `no-spec` issue.

> No extra secrets: everything runs in this repo with the default `GITHUB_TOKEN`. The loop only needs
> `CLAUDE_CODE_OAUTH_TOKEN`.
