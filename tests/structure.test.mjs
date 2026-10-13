import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync} from 'node:fs';
test('documents, références et packages de démarrage présents',()=>{for(const path of ['AGENTS.md','PROMPT_CODEX.md','ARCHITECTURE.md','references/reference-02-city.png','apps/web/src/main.tsx','packages/rules/src/index.ts']) assert.ok(existsSync(path),path)});
