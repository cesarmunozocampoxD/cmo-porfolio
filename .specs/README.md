# .specs — pointers, not documents

Since engine **v0.5.0** ([ADR-0001](https://github.com/DMCSoftMX/archetype_claude/blob/main/docs/adr/0001-specs-en-repo-dedicado.md))
the specs do **not** live here. A code repo versions code; the specs live in
[`cesarmunozocampoxD/specs`](https://github.com/cesarmunozocampoxD/specs).

This folder holds only one **pointer per issue**, `.specs/<issue#>.ref`, which `implement` writes
and commits alongside the code:

```sh
repo=cesarmunozocampoxD/specs
path=specs/cmo-porfolio/<issue#>-<slug>/spec.md
issue=<issue#>
sha=<commit sha of the spec the code was written against>
```

The **`sha`** is the point. The path is derivable from the issue number; the exact spec version the
code was written against is not. That pin is what lets `spec-guard` detect drift: if someone
corrects the spec and merges it, the head moves, the pin stops matching, and **every open code PR
for that issue goes red** until someone looks at it again. That is intentional.

Don't hand-edit these files. If a PR needs to re-pin, re-run `claude-implement`, or tick the
*"linked spec is still accurate"* box in the PR body.

## The flow

- **`specify`** → writes `spec.md` and opens a PR **in the specs repo**; you merge it — that's your
  checkpoint on intent, before a line of code exists.
- **`claude-implement`** (or **`@claude`**) → the agent reads the spec by reference, implements, and
  commits the code + the pin → PR → gates → you merge.
- **Heavy work:** add **`plan`** in between for a deep `plan.md` + `tasks.md` (also in the specs
  repo, next to the spec).

Small, obvious fixes skip straight to `claude-implement` (no spec).

> Requires the secrets `LOOP_APP_ID` and `LOOP_APP_PRIVATE_KEY` — the default `GITHUB_TOKEN` cannot
> reach another repo. See [`SETUP.md`](../SETUP.md).
