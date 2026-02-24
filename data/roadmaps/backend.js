export const backendRoadmap = {
  slug: "backend",
  title: "Backend Developer Roadmap (Beginner → Interview-Ready)",
  description: "A backend-first roadmap focused on core CS fundamentals, APIs, databases, and system design expected in product-based interviews.",
  phases: [
    {
      phase: "Phase 1: Programming & Web Foundations",
      goal: "Start from zero and understand how backend systems communicate and execute code.",
      topics: [
        {
          name: "How the Web Works",
          explanation: "Explains how clients, servers, DNS, HTTP requests, and responses work together.",
          interview: "Interviewers commonly ask what happens when a client hits an API endpoint.",
          difficulty: "Easy",
          references: [
            "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work",
            "https://web.dev/howbrowserswork/"
          ]
        },
        {
          name: "Programming Fundamentals",
          explanation: "Core concepts like variables, functions, loops, conditionals, and data types.",
          interview: "Interviewers test logic building and edge-case handling.",
          difficulty: "Easy",
          references: [
            "https://en.wikipedia.org/wiki/Computer_programming",
            "https://javascript.info/first-steps"
          ]
        },
        {
          name: "HTTP & REST Basics",
          explanation: "HTTP defines how data is transferred between client and server using requests and responses.",
          interview: "Frequently tested via HTTP methods, status codes, and idempotency.",
          difficulty: "Easy",
          references: [
            "https://developer.mozilla.org/en-US/docs/Web/HTTP",
            "https://restfulapi.net/"
          ]
        }
      ]
    },
    {
      phase: "Phase 2: Backend Language & Runtime Internals",
      goal: "Understand how backend code executes and handles concurrency.",
      topics: [
        {
          name: "Runtime & Execution Model",
          explanation: "Explains how backend runtimes execute code and manage memory and threads.",
          interview: "Interviewers test understanding of blocking vs non-blocking execution.",
          difficulty: "Medium",
          references: [
            "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/",
            "https://docs.oracle.com/javase/specs/"
          ]
        },
        {
          name: "Asynchronous Programming",
          explanation: "Handles concurrent tasks using async mechanisms instead of blocking threads.",
          interview: "Common trap: confusing concurrency with parallelism.",
          difficulty: "Medium",
          references: [
            "https://javascript.info/async",
            "https://docs.oracle.com/javase/tutorial/essential/concurrency/"
          ]
        },
        {
          name: "Error Handling & Logging",
          explanation: "Proper error handling prevents crashes and aids debugging in production.",
          interview: "Interviewers test structured error handling and logging strategy.",
          difficulty: "Medium",
          references: [
            "https://12factor.net/logs",
            "https://martinfowler.com/articles/exception-handling.html"
          ]
        }
      ]
    },
    {
      phase: "Phase 3: API Development & Security",
      goal: "Build secure, maintainable, and scalable APIs.",
      topics: [
        {
          name: "RESTful API Design",
          explanation: "Designing clean APIs with proper resource modeling and versioning.",
          interview: "Interviewers ask you to design APIs and spot bad REST practices.",
          difficulty: "Medium",
          references: [
            "https://restfulapi.net/",
            "https://developer.mozilla.org/en-US/docs/Glossary/REST"
          ]
        },
        {
          name: "Authentication & Authorization",
          explanation: "Authentication verifies identity; authorization controls access.",
          interview: "Common rejection area due to weak security understanding.",
          difficulty: "Hard",
          references: [
            "https://jwt.io/introduction",
            "https://owasp.org/www-project-top-ten/"
          ]
        },
        {
          name: "API Security Best Practices",
          explanation: "Protect APIs from common threats like injection and data leaks.",
          interview: "Interviewers test awareness of OWASP risks.",
          difficulty: "Hard",
          references: [
            "https://owasp.org/www-project-api-security/",
            "https://cheatsheetseries.owasp.org/"
          ]
        }
      ]
    },
    {
      phase: "Phase 4: Databases & Data Modeling",
      goal: "Store, query, and optimize data reliably.",
      topics: [
        {
          name: "Relational Databases & SQL",
          explanation: "Structured data storage using tables, relations, and queries.",
          interview: "Interviewers test joins, indexing, and normalization.",
          difficulty: "Medium",
          references: [
            "https://www.postgresql.org/docs/",
            "https://dev.mysql.com/doc/"
          ]
        },
        {
          name: "NoSQL Databases",
          explanation: "Schema-flexible databases optimized for scalability.",
          interview: "Interviewers ask when NoSQL is better than SQL.",
          difficulty: "Medium",
          references: [
            "https://www.mongodb.com/docs/",
            "https://aws.amazon.com/nosql/"
          ]
        },
        {
          name: "Transactions & Consistency",
          explanation: "Ensures data correctness using ACID principles.",
          interview: "Common trap: misunderstanding isolation levels.",
          difficulty: "Hard",
          references: [
            "https://jepsen.io/consistency",
            "https://www.postgresql.org/docs/current/transaction-iso.html"
          ]
        }
      ]
    },
    {
      phase: "Phase 5: Scalability, Performance & Caching",
      goal: "Design backend systems that scale under real traffic.",
      topics: [
        {
          name: "Caching Strategies",
          explanation: "Caching improves performance by avoiding repeated computation or queries.",
          interview: "Interviewers test cache invalidation strategies.",
          difficulty: "Hard",
          references: [
            "https://redis.io/docs/latest/",
            "https://aws.amazon.com/caching/"
          ]
        },
        {
          name: "Load Handling & Concurrency",
          explanation: "Backend systems must handle multiple requests efficiently.",
          interview: "Interviewers ask about race conditions and bottlenecks.",
          difficulty: "Hard",
          references: [
            "https://cloud.google.com/architecture/load-balancing-overview",
            "https://martinfowler.com/articles/patterns-of-distributed-systems/"
          ]
        },
        {
          name: "Performance Optimization",
          explanation: "Improving response time and throughput using profiling and tuning.",
          interview: "Interviewers test how to debug slow APIs.",
          difficulty: "Hard",
          references: [
            "https://web.dev/performance/",
            "https://use-the-index-luke.com/"
          ]
        }
      ]
    },
    {
      phase: "Phase 6: System Design & Production Readiness",
      goal: "Think like a senior backend engineer and pass system design interviews.",
      topics: [
        {
          name: "Basic System Design",
          explanation: "Designing backend systems using services, databases, and caches.",
          interview: "Interviewers test clarity, trade-offs, and fundamentals.",
          difficulty: "Hard",
          references: [
            "https://github.com/donnemartin/system-design-primer",
            "https://martinfowler.com/articles/architecture.html"
          ]
        },
        {
          name: "Reliability & Fault Tolerance",
          explanation: "Systems should handle failures gracefully without downtime.",
          interview: "Common rejection area due to shallow failure-handling answers.",
          difficulty: "Hard",
          references: [
            "https://aws.amazon.com/builders-library/",
            "https://sre.google/sre-book/"
          ]
        },
        {
          name: "Backend Interview Patterns",
          explanation: "Combines coding, API design, databases, and system thinking.",
          interview: "Interviewers value reasoning over framework knowledge.",
          difficulty: "Hard",
          references: [
            "https://github.com/checkcheckzz/system-design-interview",
            "https://leetcode.com/"
          ]
        }
      ]
    }
  ]
};
