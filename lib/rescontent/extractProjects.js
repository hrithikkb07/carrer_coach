export function extractProjects(resumeText) {
  const lines = resumeText.split("\n").map(l => l.trim()).filter(Boolean);
  const projects = [];

  let current = null;

  for (const line of lines) {
    if (/project/i.test(line) && line.length < 50) {
      if (current) projects.push(current);
      current = { name: line, description: "" };
    } else if (current) {
      current.description += line + " ";
    }
  }

  if (current) projects.push(current);

  return projects.slice(0, 3);
}
