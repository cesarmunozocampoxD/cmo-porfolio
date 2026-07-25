## What changes
<!-- Brief summary of the change -->

## Related issue
Closes #

## Definition of done
<!-- Items tagged (required) BLOCK merge until checked — the `pr-gate` check enforces it. Tick
     only what is actually true: this attestation is auditable. CI green is a separate required
     check, not a box here. -->
- [ ] Acceptance criteria in the linked issue/spec are all met (required)
- [ ] Runtime behavior was verified by hand, is fully covered by CI, or is N/A — CI does not run the app (required)
- [ ] No secrets or credentials in the code (required)
- [ ] The linked spec is still accurate — tick this if `spec-guard` reports the spec moved and you
      have confirmed the code still satisfies it (the spec lives in the specs repo; you can't update
      it from here — fix it there and re-run `claude-implement` to re-pin)
- [ ] Follows the conventions in CLAUDE.md
