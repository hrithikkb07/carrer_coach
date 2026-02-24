export const fullstackRoadmap = {
  slug: "fullstack",
  title: "Full Stack Developer Roadmap (Beginner → Interview-Ready)",
  description: "A complete end-to-end roadmap covering frontend, backend, databases, and system fundamentals expected in product-based interviews.",
  phases: [
    {
      phase: "Phase 1: Web & Programming Foundations",
      goal: "Start from zero and understand how the web and basic programming concepts work.",
      topics: [
        {
          name: "How the Web Works",
          explanation: "Covers how browsers, servers, DNS, HTTP requests, and responses work together.",
          interview: "Interviewers ask you to explain what happens when you enter a URL in the browser.",
          difficulty: "Easy",
          references: [
            "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work",
            "https://web.dev/howbrowserswork/"
          ]
        },
        {
          name: "HTML Fundamentals",
          explanation: "HTML provides the structure of a webpage using semantic elements.",
          interview: "Often tested via semantic HTML questions and accessibility basics.",
          difficulty: "Easy",
          references: [
            "https://developer.mozilla.org/en-US/docs/Web/HTML",
            "https://html.spec.whatwg.org/"
          ]
        },
        {
          name: "CSS Fundamentals",
          explanation: "CSS styles the UI and controls layout, spacing, and responsiveness.",
          interview: "Interviewers test box model, specificity, and layout debugging.",
          difficulty: "Easy",
          references: [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://web.dev/learn/css/"
          ]
        },
        {
          name: "Programming with JavaScript",
          explanation: "JavaScript enables logic, conditions, loops, and functions in web apps.",
          interview: "Basic logic problems and understanding of JS behavior are tested.",
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
      goal: "Build strong JavaScript foundations and understand browser execution deeply.",
      topics: [
        {
          name: "Execution Context & Event Loop",
          explanation: "JavaScript runs using call stack, event loop, and task queues.",
          interview: "Common rejection area if async behavior is misunderstood.",
          difficulty: "Medium",
          references: [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop",
            "https://web.dev/event-loop/"
          ]
        },
        {
          name: "Closures and Scope",
          explanation: "Closures allow functions to remember variables from their creation scope.",
          interview: "Interviewers use tricky closure-based code snippets.",
          difficulty: "Medium",
          references: [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
            "https://javascript.info/closure"
          ]
        },
        {
          name: "Asynchronous JavaScript",
          explanation: "Handles non-blocking tasks using callbacks, promises, and async/await.",
          interview: "You may be asked to refactor promise chains or debug async bugs.",
          difficulty: "Medium",
          references: [
            "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous",
            "https://javascript.info/async"
          ]
        },
        {
          name: "DOM & Browser APIs",
          explanation: "DOM allows JavaScript to read and manipulate webpage structure.",
          interview: "Interviewers test performance and reflow-related issues.",
          difficulty: "Medium",
          references: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
            "https://web.dev/dom/"
          ]
        }
      ]
    },
    {
      phase: "Phase 3: Frontend Frameworks & UI Engineering",
      goal: "Build scalable frontend applications with modern tooling.",
      topics: [
        {
          name: "React Fundamentals",
          explanation: "Component-based UI development using state and props.",
          interview: "Interviewers test component design and data flow clarity.",
          difficulty: "Medium",
          references: [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        },
        {
          name: "State & Side Effects",
          explanation: "Managing UI state and side effects using hooks.",
          interview: "Common trap: misuse of useEffect and overusing global state.",
          difficulty: "Medium",
          references: [
            "https://react.dev/learn/synchronizing-with-effects",
            "https://redux.js.org/introduction/getting-started"
          ]
        },
        {
          name: "Frontend Performance & UX",
          explanation: "Optimizing rendering, loading, and user experience.",
          interview: "Interviewers ask how to improve slow frontend applications.",
          difficulty: "Hard",
          references: [
            "https://web.dev/performance/",
            "https://react.dev/learn/optimizing-performance"
          ]
        }
      ]
    },
    {
      phase: "Phase 4: Backend Development & APIs",
      goal: "Understand server-side development and API design.",
      topics: [
        {
          name: "Node.js Fundamentals",
          explanation: "Node.js allows JavaScript to run on the server using an event-driven model.",
          interview: "Interviewers test understanding of non-blocking I/O.",
          difficulty: "Medium",
          references: [
            "https://nodejs.org/en/docs",
            "https://nodejs.dev/en/learn/"
          ]
        },
        {
          name: "RESTful APIs",
          explanation: "REST defines how clients and servers communicate using HTTP.",
          interview: "Often tested via API design and HTTP status code questions.",
          difficulty: "Medium",
          references: [
            "https://developer.mozilla.org/en-US/docs/Glossary/REST",
            "https://restfulapi.net/"
          ]
        },
        {
          name: "Authentication & Authorization",
          explanation: "Controls who can access which resources using tokens and sessions.",
          interview: "Interviewers test security understanding and common auth mistakes.",
          difficulty: "Hard",
          references: [
            "https://jwt.io/introduction",
            "https://owasp.org/www-project-top-ten/"
          ]
        }
      ]
    },
    {
      phase: "Phase 5: Databases & Data Modeling",
      goal: "Design and work with data efficiently and safely.",
      topics: [
        {
          name: "Relational Databases",
          explanation: "Structured data storage using tables, relations, and SQL.",
          interview: "Interviewers test joins, indexing, and normalization.",
          difficulty: "Medium",
          references: [
            "https://dev.mysql.com/doc/",
            "https://www.postgresql.org/docs/"
          ]
        },
        {
          name: "NoSQL Databases",
          explanation: "Flexible schema databases optimized for scalability.",
          interview: "Interviewers ask when to use NoSQL vs SQL.",
          difficulty: "Medium",
          references: [
            "https://www.mongodb.com/docs/",
            "https://aws.amazon.com/nosql/"
          ]
        },
        {
          name: "Database Performance & Indexing",
          explanation: "Indexes improve query performance at the cost of write overhead.",
          interview: "Frequently tested using real query optimization scenarios.",
          difficulty: "Hard",
          references: [
            "https://use-the-index-luke.com/",
            "https://www.postgresql.org/docs/current/indexes.html"
          ]
        }
      ]
    },
    {
      phase: "Phase 6: System Design & Interview Readiness",
      goal: "Think like a product engineer and clear full-stack interviews.",
      topics: [
        {
          name: "Basic System Design",
          explanation: "Design scalable systems using components like load balancers and caches.",
          interview: "Interviewers test trade-offs and clarity, not buzzwords.",
          difficulty: "Hard",
          references: [
            "https://github.com/donnemartin/system-design-primer",
            "https://martinfowler.com/articles/architecture.html"
          ]
        },
        {
          name: "Scalability & Reliability",
          explanation: "Ensure systems handle growth and failures gracefully.",
          interview: "Common rejection area due to shallow scalability understanding.",
          difficulty: "Hard",
          references: [
            "https://aws.amazon.com/architecture/well-architected/",
            "https://cloud.google.com/architecture"
          ]
        },
        {
          name: "Full Stack Interview Patterns",
          explanation: "Combines frontend, backend, and database reasoning.",
          interview: "Interviewers focus on decision-making and fundamentals.",
          difficulty: "Hard",
          references: [
            "https://frontendinterviewhandbook.com/",
            "https://github.com/checkcheckzz/system-design-interview"
          ]
        }
      ]
    }
  ]
};
