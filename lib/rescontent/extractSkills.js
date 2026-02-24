import { SKILL_MAP } from "./atsSkills";

export function extractSkills(text) {
  const normalized = text.toLowerCase();
  const found = new Set();

  for (const [skill, variants] of Object.entries(SKILL_MAP)) {
    for (const v of variants) {
      if (normalized.includes(v)) {
        found.add(skill);
        break;
      }
    }
  }

  return [...found];
}
