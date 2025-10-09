# Copilot / AI Agent Instructions for this repository

This repository currently contains no discoverable project files in the workspace snapshot provided to the agent. Use this document as a live template: update the sections below after inspecting the real repository tree locally if any items are missing or outdated.

Goal for AI coding agents
- Help contributors by making focused, safe code changes: small PRs, obey existing styles, and prefer non-destructive edits.

What I (the AI agent) must gather first
- Project language and manifest files (e.g., `package.json`, `pyproject.toml`, `requirements.txt`, `Pipfile`, `Cargo.toml`) to determine build/test commands.
- Top-level README and CONTRIBUTING.md for contributor conventions.
- Source tree (e.g., `src/`, `app/`, `backend/`, `frontend/`) to understand architecture.
- CI workflows (`.github/workflows/*`) to learn test and release steps.

High-value things to discover (explicit checks)
- Main entrypoints (e.g., `src/index.ts`, `manage.py`, `app.py`, `main.go`).
- How to run tests and linters; prefer project scripts over guessing defaults.
- Any generated-code directories to avoid editing (e.g., `gen/`, `build/`, `dist/`).
- Environment file patterns (`.env`, `.env.sample`) and whether secrets are expected in CI.
- Database migrations or fixtures (`migrations/`, `prisma/`, `alembic/`).

Repository-specific conventions (update after repo inspection)
- Source layout: note whether the project prefers `src/` or top-level modules.
- Testing style: unit vs integration separation (folders named `tests/unit`, `tests/integration`).
- Naming conventions for services, modules, and React components (if present).

Architecture guidance (how to quickly form a mental model)
- Find and open the top-level README then the directory where server and client live. Look for folders named `server`, `api`, `web`, `client`, `worker`.
- Trace a simple request path: HTTP entrypoint -> routing -> controller -> service -> data layer. Write this mapping in the PR description when making API changes.

Build / Test / Debug workflows
- Prefer CI scripts from `.github/workflows` or the project manifest (e.g., `npm test`, `make test`, `pytest`).
- If no scripts exist, run the language's standard test runner conservatively and report any missing dev deps.
- When adding a new test, run the smallest focused test locally and avoid touching unrelated snapshots.

Integration points to check before editing
- External services (Auth providers, payment gateways, third-party APIs): find client wrappers and mock them in tests.
- Database connections or message brokers: prefer to use in-memory/test databases and existing fixtures.
- Generated clients (OpenAPI/GraphQL/Protobuf): do not edit generated code; update source definitions instead.

Code change patterns and PR guidance
- Keep changes small and self-contained. Each PR should include:
  - What changed and why (one-paragraph summary).
  - How to run the affected code or tests locally.
  - Any migration or rollout notes.
- If changing public APIs, add a changelog entry and bump any version constants found in `package.json` or similar manifests.

Files and locations to prefer/avoid
- Prefer editing files under `src/`, `lib/`, or `app/` depending on language conventions.
- Avoid editing `node_modules/`, `venv/`, `dist/`, `build/`, or other generated folders.

Examples to include in PR descriptions (fill with actual paths once repo is inspected)
- "To reproduce: run `npm run test` then execute `node src/cli.js --example`"
- "Endpoint flow: `server/index.js` -> `routes/user.js` -> `services/userService.js` -> `models/userModel.js`"

When you're unsure
- Ask for the repository's README or for the maintainer to point at the primary entrypoint.
- Open a small draft PR labeled `wip` and request feedback rather than making large speculative changes.

Assumptions made by this template
- The snapshot provided to the agent did not include repository files. This file intentionally leaves placeholders and instructions for discovery. Replace placeholders with real paths and commands after inspecting the real workspace.

Next steps for a human maintainer
- Update this file in-place with concrete commands and key file paths (build/test commands, main entrypoints, CI workflows).
- If you want more automated help, add `AGENT.md` with explicit agent policies (allowed file paths, CI tokens to avoid, sensitive areas).

If anything here is unclear or you want this tailored to your project's language/framework, tell me which files to inspect or paste your README and I'll update this file with concrete examples.
