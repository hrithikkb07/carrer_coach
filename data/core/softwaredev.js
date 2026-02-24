export const softwareEngineering = {
  slug: "software-engineering",
  title: "Software Engineering",
  description:
    "A complete interview-focused Software Engineering question bank covering SDLC, design principles, testing, maintainability, and real-world engineering trade-offs expected in product-based companies.",

  phases: [
    {
      level: "Beginner",
      questions: [
        {
          question: "What is Software Engineering?",
          answer:
            "Software Engineering is a disciplined approach to designing, developing, testing, deploying, and maintaining software systems. It focuses not only on writing code, but on building reliable, scalable, and maintainable systems that solve real business problems.",
          interviewer:
            "They test whether you see software as a long-term system, not just code.",
          references: ["https://www.geeksforgeeks.org/software-engineering/"],
        },
        {
          question: "Why is Software Engineering important?",
          answer:
            "As software grows in size and complexity, ad-hoc coding becomes unreliable. Software Engineering introduces structure, processes, and best practices that reduce failures, improve collaboration, and ensure long-term maintainability.",
          interviewer:
            "They look for understanding beyond 'it helps build software'.",
          references: ["https://www.geeksforgeeks.org/importance-of-software-engineering/"],
        },
        {
          question: "What is SDLC?",
          answer:
            "SDLC (Software Development Life Cycle) defines the phases involved in building software, from requirements gathering to maintenance. It provides a structured approach to reduce risk and improve quality.",
          interviewer:
            "They often ask you to explain phases with real examples.",
          references: ["https://www.geeksforgeeks.org/software-development-life-cycle-sdlc/"],
        },
        {
          question: "Explain the phases of SDLC.",
          answer:
            "Typical SDLC phases include requirement analysis, design, implementation, testing, deployment, and maintenance. Each phase has a clear goal and helps catch issues early before they become expensive to fix.",
          interviewer:
            "They test if you understand why each phase exists.",
          references: ["https://www.geeksforgeeks.org/software-development-life-cycle-sdlc/"],
        },
        {
          question: "What is a requirement?",
          answer:
            "A requirement describes what the system should do or how it should behave. Clear requirements reduce ambiguity and rework during development.",
          interviewer:
            "They test functional vs non-functional clarity.",
          references: ["https://www.geeksforgeeks.org/software-requirement/"],
        },
        {
          question: "What are functional requirements?",
          answer:
            "Functional requirements describe specific behaviors or functions of the system, such as user login or data processing.",
          interviewer:
            "They test ability to give real examples.",
          references: ["https://www.geeksforgeeks.org/functional-requirements-in-software-engineering/"],
        },
        {
          question: "What are non-functional requirements?",
          answer:
            "Non-functional requirements define quality attributes such as performance, scalability, security, and usability. These often decide system success in production.",
          interviewer:
            "They test system thinking, not feature thinking.",
          references: ["https://www.geeksforgeeks.org/non-functional-requirements-in-software-engineering/"],
        },
        {
          question: "What is software design?",
          answer:
            "Software design translates requirements into a blueprint that guides development. It defines architecture, components, and interactions.",
          interviewer:
            "They test design vs coding understanding.",
          references: ["https://www.geeksforgeeks.org/software-design/"],
        },
        {
          question: "What is software architecture?",
          answer:
            "Software architecture defines the high-level structure of a system, including components, communication, and constraints. It influences scalability and maintainability.",
          interviewer:
            "They test difference between design and architecture.",
          references: ["https://www.geeksforgeeks.org/software-architecture/"],
        },
        {
          question: "What is modularity?",
          answer:
            "Modularity divides a system into independent, manageable components. It improves readability, testing, and parallel development.",
          interviewer:
            "They test maintainability thinking.",
          references: ["https://www.geeksforgeeks.org/modularity-in-software-engineering/"],
        },

        {
          question: "What is cohesion?",
          answer:
            "Cohesion measures how closely related the responsibilities of a module are. High cohesion indicates a well-focused module.",
          interviewer:
            "They test design quality understanding.",
          references: ["https://www.geeksforgeeks.org/cohesion-in-software-engineering/"],
        },
        {
          question: "What is coupling?",
          answer:
            "Coupling measures dependency between modules. Lower coupling improves flexibility and reduces impact of changes.",
          interviewer:
            "They test impact analysis skills.",
          references: ["https://www.geeksforgeeks.org/coupling-in-software-engineering/"],
        },
        {
          question: "What is software testing?",
          answer:
            "Software testing verifies that a system meets requirements and behaves correctly. It helps catch defects early and ensures reliability.",
          interviewer:
            "They test attitude towards quality.",
          references: ["https://www.geeksforgeeks.org/software-testing/"],
        },
        {
          question: "What is unit testing?",
          answer:
            "Unit testing validates individual components in isolation to catch bugs early and simplify debugging.",
          interviewer:
            "They test testing mindset.",
          references: ["https://www.geeksforgeeks.org/unit-testing-software-testing/"],
        },
        {
          question: "What is integration testing?",
          answer:
            "Integration testing checks interactions between modules to ensure they work together correctly.",
          interviewer:
            "They test system-level thinking.",
          references: ["https://www.geeksforgeeks.org/integration-testing-software-testing/"],
        },
        {
          question: "What is system testing?",
          answer:
            "System testing validates the complete system against requirements in an environment similar to production.",
          interviewer:
            "They test full-flow understanding.",
          references: ["https://www.geeksforgeeks.org/system-testing/"],
        },
        {
          question: "What is regression testing?",
          answer:
            "Regression testing ensures new changes do not break existing functionality.",
          interviewer:
            "They test release-cycle awareness.",
          references: ["https://www.geeksforgeeks.org/regression-testing/"],
        },
        {
          question: "What is debugging?",
          answer:
            "Debugging is the process of identifying and fixing defects in software.",
          interviewer:
            "They test problem-solving mindset.",
          references: ["https://www.geeksforgeeks.org/debugging-in-software-engineering/"],
        },
        {
          question: "What is documentation?",
          answer:
            "Documentation records system design, usage, and decisions to support maintenance and onboarding.",
          interviewer:
            "They test long-term thinking.",
          references: ["https://www.geeksforgeeks.org/software-documentation/"],
        },
        {
          question: "What is maintenance?",
          answer:
            "Maintenance involves updating software to fix bugs, improve performance, or adapt to changes.",
          interviewer:
            "They test awareness of post-release reality.",
          references: ["https://www.geeksforgeeks.org/software-maintenance/"],
        },

        {
          question: "What is software reliability?",
          answer:
            "Reliability measures how consistently a system performs without failure over time.",
          interviewer:
            "They test production readiness thinking.",
          references: ["https://www.geeksforgeeks.org/software-reliability/"],
        },
        {
          question: "What is scalability?",
          answer:
            "Scalability is a system’s ability to handle growth in users or data without degradation.",
          interviewer:
            "They test system evolution thinking.",
          references: ["https://www.geeksforgeeks.org/scalability-in-software-engineering/"],
        },
        {
          question: "What is maintainability?",
          answer:
            "Maintainability measures how easily software can be modified or extended.",
          interviewer:
            "They test code quality perspective.",
          references: ["https://www.geeksforgeeks.org/maintainability-in-software-engineering/"],
        },
        {
          question: "What is portability?",
          answer:
            "Portability refers to how easily software can run across different environments.",
          interviewer:
            "They test cross-platform thinking.",
          references: ["https://www.geeksforgeeks.org/portability-in-software-engineering/"],
        },
        {
          question: "What is software quality?",
          answer:
            "Software quality measures how well a system meets user needs, reliability, and performance expectations.",
          interviewer:
            "They test holistic thinking.",
          references: ["https://www.geeksforgeeks.org/software-quality/"],
        }
      ],
    },

    {
      level: "Intermediate",
      questions: [
        {
          question: "Explain Waterfall model.",
          answer:
            "Waterfall is a linear SDLC model where each phase is completed before the next begins. It works well when requirements are stable but struggles with change.",
          interviewer:
            "They test suitability analysis.",
          references: ["https://www.geeksforgeeks.org/waterfall-model/"],
        },
        {
          question: "Explain Agile methodology.",
          answer:
            "Agile focuses on iterative development, frequent feedback, and adaptability. It prioritizes working software over rigid plans.",
          interviewer:
            "They test real-world adaptability.",
          references: ["https://www.geeksforgeeks.org/agile-methodology/"],
        },
        {
          question: "Difference between Agile and Waterfall?",
          answer:
            "Waterfall is sequential and rigid; Agile is iterative and flexible. Agile handles changing requirements better.",
          interviewer:
            "They test project selection thinking.",
          references: ["https://www.geeksforgeeks.org/difference-between-agile-and-waterfall-model/"],
        },
        {
          question: "What is Scrum?",
          answer:
            "Scrum is an Agile framework that uses sprints, standups, and defined roles to deliver incremental value.",
          interviewer:
            "They test team-process understanding.",
          references: ["https://www.geeksforgeeks.org/scrum-software-development/"],
        },
        {
          question: "What is technical debt?",
          answer:
            "Technical debt is the cost of choosing quick solutions over proper design, leading to future maintenance burden.",
          interviewer:
            "They test engineering maturity.",
          references: ["https://martinfowler.com/bliki/TechnicalDebt.html"],
        },

        // 20 more intermediate omitted for brevity in explanation but INCLUDED
        {
          question: "What is refactoring?",
          answer:
            "Refactoring improves code structure without changing behavior.",
          interviewer:
            "Clean code mindset.",
          references: ["https://refactoring.guru/refactoring"],
        },
        {
          question: "What is version control?",
          answer:
            "Version control tracks code changes and supports collaboration.",
          interviewer:
            "Team workflow.",
          references: ["https://www.geeksforgeeks.org/version-control-systems/"],
        },
        {
          question: "What is CI/CD?",
          answer:
            "CI/CD automates testing and deployment to improve delivery speed and reliability.",
          interviewer:
            "Modern dev practices.",
          references: ["https://www.geeksforgeeks.org/continuous-integration-continuous-delivery/"],
        },
        {
          question: "What is code review?",
          answer:
            "Code review improves code quality, knowledge sharing, and defect detection.",
          interviewer:
            "Collaboration mindset.",
          references: ["https://www.geeksforgeeks.org/code-review/"],
        },
        {
          question: "What is design pattern?",
          answer:
            "Design patterns are reusable solutions to common design problems.",
          interviewer:
            "Pattern literacy.",
          references: ["https://refactoring.guru/design-patterns"],
        },

        {
          question: "What is MVC?",
          answer:
            "MVC separates concerns into Model, View, and Controller.",
          interviewer:
            "Architecture basics.",
          references: ["https://www.geeksforgeeks.org/mvc-design-pattern/"],
        },
        {
          question: "What is layered architecture?",
          answer:
            "Layered architecture organizes code into horizontal layers.",
          interviewer:
            "Separation of concerns.",
          references: ["https://www.geeksforgeeks.org/layered-architecture/"],
        },
        {
          question: "What is API?",
          answer:
            "API allows systems to communicate via defined interfaces.",
          interviewer:
            "Integration understanding.",
          references: ["https://www.geeksforgeeks.org/api-full-form/"],
        },
        {
          question: "What is REST?",
          answer:
            "REST is an architectural style for building scalable APIs.",
          interviewer:
            "Web systems understanding.",
          references: ["https://www.geeksforgeeks.org/rest-api-introduction/"],
        },
        {
          question: "What is idempotency?",
          answer:
            "Idempotent operations produce the same result when repeated.",
          interviewer:
            "API design.",
          references: ["https://www.geeksforgeeks.org/idempotent-http-methods/"],
        },

        {
          question: "What is logging?",
          answer:
            "Logging records system events to help debugging and monitoring.",
          interviewer:
            "Production readiness.",
          references: ["https://www.geeksforgeeks.org/logging-in-software-engineering/"],
        },
        {
          question: "What is monitoring?",
          answer:
            "Monitoring tracks system health and performance over time.",
          interviewer:
            "Ops awareness.",
          references: ["https://www.geeksforgeeks.org/system-monitoring/"],
        },
        {
          question: "What is SLA?",
          answer:
            "SLA defines service performance expectations.",
          interviewer:
            "Reliability thinking.",
          references: ["https://www.geeksforgeeks.org/service-level-agreement-sla/"],
        },
        {
          question: "What is rollback?",
          answer:
            "Rollback reverts system to a stable state after failure.",
          interviewer:
            "Deployment safety.",
          references: ["https://www.geeksforgeeks.org/rollback-in-software-engineering/"],
        },
        {
          question: "What is feature toggle?",
          answer:
            "Feature toggles control feature availability without redeploying.",
          interviewer:
            "Safe releases.",
          references: ["https://martinfowler.com/articles/feature-toggles.html"],
        },

        {
          question: "What is code smell?",
          answer:
            "Code smells indicate potential design issues.",
          interviewer:
            "Code quality awareness.",
          references: ["https://martinfowler.com/bliki/CodeSmell.html"],
        },
        {
          question: "What is YAGNI?",
          answer:
            "YAGNI discourages building unused features.",
          interviewer:
            "Overengineering trap.",
          references: ["https://martinfowler.com/bliki/Yagni.html"],
        },
        {
          question: "What is KISS principle?",
          answer:
            "Keep It Simple promotes clarity and maintainability.",
          interviewer:
            "Design discipline.",
          references: ["https://www.geeksforgeeks.org/kiss-principle-in-software-engineering/"],
        },
        {
          question: "What is DRY?",
          answer:
            "DRY avoids duplication by reusing logic.",
          interviewer:
            "Maintainability check.",
          references: ["https://www.geeksforgeeks.org/dry-dont-repeat-yourself-principle/"],
        },
        {
          question: "What is documentation debt?",
          answer:
            "Missing or outdated documentation increases future cost.",
          interviewer:
            "Long-term thinking.",
          references: ["https://martinfowler.com/bliki/DocumentationDebt.html"],
        }
      ],
    },

    {
      level: "Hard",
      questions: [
        {
          question: "How do you design software for scalability?",
          answer:
            "Scalability requires stateless services, efficient data access, caching, and horizontal scaling strategies.",
          interviewer:
            "System-level thinking.",
          references: ["https://www.geeksforgeeks.org/scalability-in-software-engineering/"],
        },
        {
          question: "How do you manage technical debt?",
          answer:
            "By prioritizing refactoring, tracking debt explicitly, and balancing speed with quality.",
          interviewer:
            "Engineering leadership.",
          references: ["https://martinfowler.com/bliki/TechnicalDebt.html"],
        },
        {
          question: "What makes a system maintainable?",
          answer:
            "Clear design, good documentation, modular code, and consistent practices.",
          interviewer:
            "Long-term ownership.",
          references: ["https://www.geeksforgeeks.org/maintainability-in-software-engineering/"],
        },
        {
          question: "How do you handle production failures?",
          answer:
            "By monitoring, rollback, root cause analysis, and preventive fixes.",
          interviewer:
            "On-call readiness.",
          references: ["https://sre.google/sre-book/incident-management/"],
        },
        {
          question: "Explain trade-offs between speed and quality.",
          answer:
            "Short-term speed may increase long-term cost; good engineers balance both.",
          interviewer:
            "Judgment test.",
          references: ["https://martinfowler.com/articles/designDead.html"],
        },

        {
          question: "How do you evaluate architecture decisions?",
          answer:
            "By analyzing scalability, cost, complexity, and future change.",
          interviewer:
            "Decision-making maturity.",
          references: ["https://martinfowler.com/architecture/"],
        },
        {
          question: "What is failure tolerance?",
          answer:
            "Failure tolerance ensures systems continue operating despite component failures.",
          interviewer:
            "Resilience mindset.",
          references: ["https://www.geeksforgeeks.org/fault-tolerance-in-software-engineering/"],
        },
        {
          question: "What is observability?",
          answer:
            "Observability enables understanding system behavior using logs, metrics, and traces.",
          interviewer:
            "Production debugging.",
          references: ["https://www.geeksforgeeks.org/observability-in-software-engineering/"],
        },
        {
          question: "How does software engineering differ in startups vs enterprises?",
          answer:
            "Startups optimize speed; enterprises optimize reliability and scale.",
          interviewer:
            "Context awareness.",
          references: ["https://martinfowler.com/articles/designDead.html"],
        },
        {
          question: "When should you rewrite vs refactor?",
          answer:
            "Rewrite only when refactoring cannot address fundamental issues.",
          interviewer:
            "Risk assessment.",
          references: ["https://martinfowler.com/bliki/Rewrite.html"],
        },

        {
          question: "What is Conway’s Law?",
          answer:
            "System design mirrors team communication structure.",
          interviewer:
            "Org-architecture awareness.",
          references: ["https://martinfowler.com/bliki/ConwaysLaw.html"],
        },
        {
          question: "How do you prevent overengineering?",
          answer:
            "By building only what is needed and iterating based on feedback.",
          interviewer:
            "Pragmatism.",
          references: ["https://martinfowler.com/bliki/Yagni.html"],
        },
        {
          question: "What is evolutionary architecture?",
          answer:
            "Architecture that supports incremental change.",
          interviewer:
            "Long-term adaptability.",
          references: ["https://martinfowler.com/articles/evolutionary-architecture.html"],
        },
        {
          question: "What is socio-technical system?",
          answer:
            "Systems involving both technical and human factors.",
          interviewer:
            "Real-world systems.",
          references: ["https://martinfowler.com/articles/architecture.html"],
        },
        {
          question: "How do you ensure code quality at scale?",
          answer:
            "Using reviews, testing, automation, and standards.",
          interviewer:
            "Team leadership.",
          references: ["https://www.geeksforgeeks.org/code-quality/"],
        },

        {
          question: "What is reliability engineering?",
          answer:
            "Focuses on building systems that fail gracefully and recover quickly.",
          interviewer:
            "SRE overlap.",
          references: ["https://sre.google/sre-book/"],
        },
        {
          question: "How does testing strategy evolve with system size?",
          answer:
            "Larger systems rely more on automation and integration tests.",
          interviewer:
            "Scale awareness.",
          references: ["https://martinfowler.com/testing/"],
        },
        {
          question: "What is system entropy?",
          answer:
            "Gradual degradation of system structure over time.",
          interviewer:
            "Architecture decay.",
          references: ["https://martinfowler.com/bliki/TechnicalDebt.html"],
        },
        {
          question: "What defines a good engineer?",
          answer:
            "Strong fundamentals, judgment, ownership, and communication.",
          interviewer:
            "Cultural fit.",
          references: ["https://www.geeksforgeeks.org/software-engineer-skills/"],
        },
        {
          question: "How do you grow as a software engineer?",
          answer:
            "By learning fundamentals, reflecting on mistakes, and building systems.",
          interviewer:
            "Growth mindset.",
          references: ["https://martinfowler.com/"],
        }
      ],
    }
  ],
};
