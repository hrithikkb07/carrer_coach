import { COMPANY_PROFILES } from "./companyProfiles";
import { selectQuestionsForCompany } from "./questionSelector";
import { COMPANY_QUESTION_BANK } from "./companyQuestionBank";

export const companies = [
  { name: "Amazon", slug: "amazon" },
  { name: "Google", slug: "google" },
  { name: "Walmart", slug: "walmart" },
  { name: "Flipkart", slug: "flipkart" },
  { name: "Microsoft", slug: "microsoft" },
  { name: "Meta", slug: "meta" },
  { name: "Adobe", slug: "adobe" },
  { name: "Salesforce", slug: "salesforce" },
  { name: "Uber", slug: "uber" },
  { name: "LinkedIn", slug: "linkedin" },
  { name: "Twitter", slug: "twitter" },
  { name: "Snapchat", slug: "snapchat" },
  { name: "Apple", slug: "apple" }

].map(company => {
  const profile = COMPANY_PROFILES[company.slug];
  const companyBank = COMPANY_QUESTION_BANK[company.slug] ?? {};

  return {
    ...company,
    topics: {
      Arrays: selectQuestionsForCompany(
        companyBank.Arrays ?? [],
        company.slug,
        profile
      ),

      DynamicProgramming: selectQuestionsForCompany(
        companyBank.DynamicProgramming ?? [],
        company.slug,
        profile
      ),

      Stacks: selectQuestionsForCompany(
        companyBank.Stacks ?? [],
        company.slug,
        profile
      ),

      Recursion: selectQuestionsForCompany(
        companyBank.Recursion ?? [],
        company.slug,
        profile
      ),

      Strings: selectQuestionsForCompany(
        companyBank.Strings ?? [],
        company.slug,
        profile
      ),

      Graphs: selectQuestionsForCompany(
        companyBank.Graphs ?? [],
        company.slug,
        profile
      ),

      Trees: selectQuestionsForCompany(
        companyBank.Trees ?? [],
        company.slug,
        profile
      ),

      HashMap: selectQuestionsForCompany(
        companyBank.HashMap ?? [],
        company.slug,
        profile
      ),

      Queue: selectQuestionsForCompany(
        companyBank.Queue ?? [],
        company.slug,
        profile
      ),
      SlidingWindow: selectQuestionsForCompany(
        companyBank.SlidingWindow ?? [],
        company.slug,
        profile
      ),
      Matrix: selectQuestionsForCompany(
        companyBank.Matrix ?? [],
        company.slug,
        profile 
      ),
      LinkedList: selectQuestionsForCompany(
        companyBank.LinkedList ?? [],
        company.slug,
        profile
      ),
      Greedy: selectQuestionsForCompany(
        companyBank.Greedy ?? [],
        company.slug,
        profile
      ),
      Design: selectQuestionsForCompany(
        companyBank.Design ?? [],
        company.slug,
        profile
      ),
      BinarySearch: selectQuestionsForCompany(
        companyBank.BinarySearch ?? [],
        company.slug,
        profile
      ),
      Trie: selectQuestionsForCompany(
        companyBank.Trie ?? [],
        company.slug,
        profile
      ),
      Backtracking: selectQuestionsForCompany(
        companyBank.Backtracking ?? [],
        company.slug,
        profile
      ),
      Heap: selectQuestionsForCompany(
        companyBank.Heap ?? [],
        company.slug,
        profile
      ),
      Interval: selectQuestionsForCompany(
        companyBank.Interval ?? [],
        company.slug,
        profile
      ),
      Math: selectQuestionsForCompany(
        companyBank.Math ?? [],
        company.slug,
        profile
      ),
    }
  };
});
