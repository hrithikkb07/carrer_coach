export const frontendRoadmap = {
  slug: "frontend",
  title: "Frontend Developer Roadmap (Beginner → Interview-Ready)",
  description: "A fundamentals-first roadmap designed to build strong frontend engineers who can pass real product-based interviews.",
  phases: [
    {
      phase: "Phase 1: Web & Programming Foundations",
      goal: "Understand how the web works and learn core building blocks from absolute scratch.",
      topics: [
        {
          name: "How the Web Works",
          explanation: "Learn what happens when you type a URL: DNS lookup, HTTP request, server response, and browser rendering.",
          interview: "Interviewers ask you to explain the end-to-end flow of loading a website and common misconceptions around client vs server.",
          difficulty: "Easy",
          references: [
            "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work",
            "https://web.dev/howbrowserswork/"
          ]
        },
        {
          name: "HTML Basics",
          explanation: "HTML defines the structure and meaning of web content using elements like headings, links, images, and forms.",
          interview: "You may be asked to build semantic HTML or explain why semantic tags matter for accessibility and SEO.",
          difficulty: "Easy",
          references: [
            "https://developer.mozilla.org/en-US/docs/Web/HTML",
            "https://html.spec.whatwg.org/"
          ]
        },
        {
          name: "CSS Fundamentals",
          explanation: "CSS controls layout, colors, spacing, and responsiveness of HTML elements on the page.",
          interview: "Interviewers test box model understanding, specificity, and why styles sometimes don’t apply.",
          difficulty: "Easy",
          references: [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://web.dev/learn/css/"
          ]
        },
        {
          name: "JavaScript Basics",
          explanation: "JavaScript adds logic and interactivity using variables, functions, conditions, and loops.",
          interview: "Expect basic coding questions and explanations of how JavaScript runs in the browser.",
          difficulty: "Easy",
          references: [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            "https://javascript.info/"
          ]
        }
      ]
    },
    {
      phase: "Phase 2: Core JavaScript & Browser Internals",
      goal: "Build strong JavaScript fundamentals and understand browser behavior deeply.",
      topics: [
        {
          name: "JavaScript Execution Model",
          explanation: "JavaScript runs single-threaded using the call stack, event loop, and task queues.",
          interview: "Common interview trap: explaining async behavior without understanding the event loop.",
          difficulty: "Medium",
          references: [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop",
            "https://web.dev/event-loop/"
          ]
        },
        {
          name: "Scope, Closures, and Hoisting",
          explanation: "These define how variables are accessed and remembered during function execution.",
          interview: "Interviewers use tricky code snippets to test real understanding of scope and closures.",
          difficulty: "Medium",
          references: [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
            "https://javascript.info/closure"
          ]
        },
        {
          name: "Asynchronous JavaScript",
          explanation: "Async code uses callbacks, promises, and async/await to handle non-blocking operations.",
          interview: "You may be asked to convert promise chains to async/await or debug async bugs.",
          difficulty: "Medium",
          references: [
            "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous",
            "https://javascript.info/async"
          ]
        },
        {
          name: "DOM Manipulation",
          explanation: "The DOM represents the page structure that JavaScript can read and modify.",
          interview: "Interviewers test performance issues caused by inefficient DOM updates.",
          difficulty: "Medium",
          references: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
            "https://web.dev/dom/"
          ]
        }
      ]
    },
    {
      phase: "Phase 3: Modern CSS & Responsive Design",
      goal: "Create production-quality, responsive, and accessible UIs.",
      topics: [
        {
          name: "Flexbox and Grid",
          explanation: "Modern layout systems used to align and structure responsive designs.",
          interview: "You may be asked to choose between Flexbox vs Grid for a layout and justify it.",
          difficulty: "Medium",
          references: [
            "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout",
            "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"
          ]
        },
        {
          name: "Responsive Design",
          explanation: "Design adapts to different screen sizes using media queries and fluid layouts.",
          interview: "Interviewers test mobile-first thinking and common breakpoint mistakes.",
          difficulty: "Medium",
          references: [
            "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
            "https://web.dev/responsive-web-design-basics/"
          ]
        },
        {
          name: "Accessibility (a11y)",
          explanation: "Accessibility ensures websites work for users with disabilities.",
          interview: "Often tested via semantic HTML, ARIA roles, and keyboard navigation questions.",
          difficulty: "Medium",
          references: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility",
            "https://www.w3.org/WAI/fundamentals/accessibility-intro/"
          ]
        }
      ]
    },
    {
      phase: "Phase 4: React & Modern Frontend Development",
      goal: "Build scalable frontend applications using modern frameworks.",
      topics: [
        {
          name: "React Fundamentals",
          explanation: "React builds UIs using components, props, and state.",
          interview: "Interviewers test component thinking and state flow rather than syntax.",
          difficulty: "Medium",
          references: [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        },
        {
          name: "State Management",
          explanation: "State controls data flow in applications using hooks and predictable patterns.",
          interview: "Common trap: unnecessary global state or incorrect state lifting.",
          difficulty: "Medium",
          references: [
            "https://react.dev/learn/state-a-components-memory",
            "https://redux.js.org/introduction/getting-started"
          ]
        },
        {
          name: "Side Effects and Data Fetching",
          explanation: "Handle API calls, subscriptions, and lifecycle logic cleanly.",
          interview: "Interviewers test useEffect misuse and dependency array mistakes.",
          difficulty: "Hard",
          references: [
            "https://react.dev/learn/synchronizing-with-effects",
            "https://tanstack.com/query/latest"
          ]
        }
      ]
    },
    {
      phase: "Phase 5: Performance, Architecture & Interview Readiness",
      goal: "Think like a senior frontend engineer and pass product-based interviews.",
      topics: [
        {
          name: "Performance Optimization",
          explanation: "Improve load time and runtime using memoization, code splitting, and lazy loading.",
          interview: "Interviewers ask how to diagnose slow apps and avoid premature optimization.",
          difficulty: "Hard",
          references: [
            "https://web.dev/performance/",
            "https://react.dev/learn/optimizing-performance"
          ]
        },
        {
          name: "Frontend Architecture",
          explanation: "Organize code for scalability, reusability, and maintainability.",
          interview: "You may be asked to design a frontend for a real-world product scenario.",
          difficulty: "Hard",
          references: [
            "https://martinfowler.com/articles/frontend-architecture.html",
            "https://react.dev/learn/thinking-in-react"
          ]
        },
        {
          name: "Frontend Interview Patterns",
          explanation: "Common patterns include component design, debugging, and real-world tradeoffs.",
          interview: "Interviewers focus on reasoning, not memorization or frameworks.",
          difficulty: "Hard",
          references: [
            "https://frontendinterviewhandbook.com/",
            "https://www.patterns.dev/"
          ]
        }
      ]
    }
  ]
};
