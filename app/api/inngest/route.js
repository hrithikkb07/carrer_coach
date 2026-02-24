import { serve } from "inngest/next";

import { inngest } from "@/lib/inngest/client";
import { generateIndustryInsights } from "@/lib/inngest/function";

// copied code from inngest function file

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [generateIndustryInsights], // this is name of the function exported from function.js  which is generateIndustryInsights
});
