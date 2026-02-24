
export async function resolveChatContext(pathname) {

  if (pathname.startsWith("/roadmap")) {
    return {
      scope: "ROADMAP",
      instruction:
        "Answer only using the roadmap content. Explain concepts step-by-step and interview-focused.",
    };
  }


  if (pathname.startsWith("/core")) {
    return {
      scope: "CORE_CS",
      instruction:
        "Answer core CS interview questions like OS, DBMS, OOPS, Networking with examples.",
    };
  }

  if (pathname.startsWith("/prep")) {
    return {
      scope: "DSA",
      instruction:
        "Answer using DSA concepts. Focus on problem-solving, patterns, and complexity.",
    };
  }

  if (pathname.startsWith("/notes")) {
    return {
      scope: "NOTES",
      instruction:
        "Help user understand their saved notes, optimize approaches, and explain time/space complexity.",
    };
  }

  return {
    scope: "GENERAL",
    instruction:
      "Please ask user to in which context they want help: roadmap, core CS, DSA, or notes.",
  };
}


