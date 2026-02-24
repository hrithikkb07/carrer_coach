import { COMPANY_REPO_MAP } from "@/data/generated/companyRepoMap";
import { getCompanyProgress } from "@/actions/questionProgress";
import CompanyListClient from "./CompanyListClient";

export default async function CompanyListPage() {
  const progressMap = await getCompanyProgress();
  const companies = Object.keys(COMPANY_REPO_MAP);

  return (
    <CompanyListClient
      companies={companies}
      companiesMap={COMPANY_REPO_MAP}
      progressMap={progressMap}
    />
  );
}
