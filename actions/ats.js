"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";
import { extractTextFromPDF } from "@/lib/ocr";
import { extractSkills } from "@/lib/rescontent/extractSkills";
import { extractProjects } from "@/lib/rescontent/extractProjects";
import { aiEvaluateATS } from "@/lib/rescontent/aiAtsEvaluator";
import { checkATSRateLimit } from "@/lib/rateLimit";


export async function analyzeATS(formData) {

  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId },
  });

  if (!user) throw new Error("User not found");

  try {
    await checkATSRateLimit(user.id);
  } 
  catch (err) {
    if (err.code === "RATE_LIMIT") {
      return { error: "RATE_LIMIT" };
    }
    throw err;
  }

  const resumeFile = formData.get("resume");
  const jdText = formData.get("jdText") || "";

  if (!resumeFile || resumeFile.size === 0) {
    throw new Error("Resume required");
  }

  // ---------- OCR to extract text from resume----------
const resumeText = await extractTextFromPDF(resumeFile);
  const jobDescription = jdText;

  // 🔹 Extract structured info
  const skills = extractSkills(resumeText);
  const projects = extractProjects(resumeText);

  // 🔹 AI evaluation
  const sectionReport = await aiEvaluateATS({
    resumeText,
    extractedSkills: skills,
    extractedProjects: projects,
    jobDescription
  });

  // 🔹 Score calculation (AI-weighted)
  const scoreMap = { Strong: 85, Moderate: 70, Weak: 55 };
  const score = scoreMap[sectionReport.strength_level] ?? 60;

  const report = await db.atsReport.create({
    data: {
      userId: user.id,
      resumeText,
      jobDescription,
      score,
      matchedKeywords: sectionReport.skills.strong,
      missingKeywords: sectionReport.skills.missing,
      recommendations: sectionReport.overall_summary,
      sectionReport
    }
  });

  return { reportId: report.id };
}

// ---------- DELETE ATS REPORT ----------

export async function deleteAtsReport(reportId) {
  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId },
  });
  if (!user) throw new Error("User not found");

  const report = await db.atsReport.findUnique({
    where: { id: reportId },
  });

  // 🔐 Security check
  if (!report || report.userId !== user.id) {
    throw new Error("Not allowed");
  }

  await db.atsReport.delete({
    where: { id: reportId },
  });

  return { success: true };
}