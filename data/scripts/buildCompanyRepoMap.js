import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

/* ---------------------------------------
   PATHS
---------------------------------------- */

const ROOT = process.cwd();

const CSV_DIR = path.join(
  ROOT,
  "data",
  "external-data",
  "leetcode-company-wise-problems-2022",
  "companies"
);

const OUTPUT_DIR = path.join(ROOT, "data", "generated");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "companyRepoMap.js");

/* ---------------------------------------
   HELPERS
---------------------------------------- */

const normalize = (str = "") =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

/* ---------------------------------------
   BUILD
---------------------------------------- */

function buildCompanyRepoMap() {
  if (!fs.existsSync(CSV_DIR)) {
    throw new Error(`❌ CSV directory not found: ${CSV_DIR}`);
  }

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const files = fs.readdirSync(CSV_DIR).filter(f => f.endsWith(".csv"));
  const result = {};

  for (const file of files) {
    const company = file.replace(".csv", "").toLowerCase();
    const content = fs.readFileSync(path.join(CSV_DIR, file), "utf-8");

    const records = parse(content, {
      delimiter: ",",
      skip_empty_lines: true,
      relax_quotes: true,
      relax_column_count: true,
      trim: true,
      columns: header =>
        header.map(h => h.toLowerCase().trim())
    });

    result[company] = records
      .map(row => {
        const name = row.problem_name;
        const link = row.problem_link;

        if (!name || !link) return null;

        return {
          title: name,
          link,
          occurrences: Number(row.num_occur) || 0,
          key: normalize(name)
        };
      })
      .filter(Boolean);
  }

  fs.writeFileSync(
    OUTPUT_FILE,
    `// AUTO-GENERATED — DO NOT EDIT
// Source: leetcode-company-wise-problems-2022 (CSV)

export const COMPANY_REPO_MAP = ${JSON.stringify(result, null, 2)};
`,
    "utf-8"
  );

  console.log("✅ companyRepoMap.js generated successfully");
  console.log("📦 Companies:", Object.keys(result).length);
}

/* ---------------------------------------
   RUN
---------------------------------------- */

buildCompanyRepoMap();
