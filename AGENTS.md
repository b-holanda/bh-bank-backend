# AGENTS.md

## Projeto

A small fintech backend using microservices approach, this project uses NestJS that a modern framework and can handle high volume of requests

## 1. Think Before Coding

Do not assume. Do not hide confusion. Surface tradeoffs.

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist and the choice changes behavior, present them.
- If a simpler approach exists, prefer it unless the user asked for the broader version.
- If something is unclear enough to make implementation risky, stop and ask.
- If the answer can be discovered from the repo, inspect first instead of asking.

## 2. Simplicity First

Write the minimum code that solves the problem. Add nothing speculative.

- No features beyond what was asked.
- No abstractions for single-use code.
- No flexibility or configurability that was not requested.
- No broad error handling for scenarios the system cannot actually reach.
- If a change feels large, look for a smaller local design before continuing.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

Touch only what the task requires. Clean up only your own mess.

When editing existing code:

- Do not improve adjacent code, comments, or formatting just because you saw it.
- Do not refactor things that are not part of the task.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it instead of deleting it.

When your changes create orphans:

- Remove imports, variables, functions, files, and tests that your changes made unused.
- Do not remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

Define success criteria. Loop until verified.

Transform tasks into verifiable goals:

- "Add validation" -> "Write tests for invalid inputs, then make them pass"
- "Fix the bug" -> "Write a test that reproduces it, then make it pass"
- "Refactor X" -> "Ensure relevant tests pass before and after"

For multi-step tasks, state a brief plan:

```text
1. [Step] -> verify: [check]
2. [Step] -> verify: [check]
3. [Step] -> verify: [check]
```

Strong success criteria let you loop independently. Weak criteria such as "make it work" require clarification or a concrete reproduction.

## 5. Verify Reality

Prefer evidence over confident narration.

- Run the smallest relevant test, typecheck, linter, build, or reproduction command.
- If verification is unavailable, say exactly what was not run and why.
- Inspect actual files and current diffs before claiming what changed.
- Treat generated code, dependency APIs, and config behavior as things to verify, not remember.

## 6. Preserve User Work

Assume uncommitted changes belong to the user unless you know you made them.

- Check the worktree before broad edits.
- Do not revert, overwrite, or reformat unrelated changes.
- If user changes overlap with your target area, work with them.
- Escalate only when the overlap makes the requested change unsafe or ambiguous.