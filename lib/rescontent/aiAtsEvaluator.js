import { generateAI } from "@/lib/gemini";

export async function aiEvaluateATS({
  resumeText,
  extractedSkills,
  extractedProjects,
  jobDescription
}) {
  const prompt = `
You are an advanced ATS evaluator used by top tech recruiters.

Evaluate the resume against the job description.
Be STRICT but FAIR. Do NOT hallucinate skills.

Resume Skills:
${extractedSkills.join(", ")}

Projects:
${extractedProjects.join("\n")}

Job Description:
${jobDescription}

Return ONLY valid JSON in this exact structure:

{
  "overall_summary": "2–3 lines summary",
  "strength_level": "Strong | Moderate | Weak",
  "skills": {
    "strong": [],
    "partial": [],
    "missing": []
  },
  "projects": [
    {
      "name": "Project name",
      "relevance": "High | Medium | Low",
      "good": [],
      "missing": [],
      "suggestions": []
    }
  ],
  "experience": {
    "rating": "Strong | Moderate | Weak",
    "missing_points": [],
    "suggestions": []
  },
  "resume_checklist": []
}
`;

  return generateAI(prompt, { expectJson: true });
}
