export const systemDesign = {
  slug: "system-design",
  title: "System Design (Core Fundamentals)",
  description:
    "Interview-focused core system design questions covering scalability, reliability, consistency, caching, load balancing, and real-world trade-offs expected in product-based companies.",

  phases: [
    {
      level: "Beginner",
      questions: [
        {
          question: "What is system design?",
          answer:
            "System design is the process of defining the architecture, components, data flow, and trade-offs of a software system to meet functional and non-functional requirements like scalability, reliability, and performance.",
          interviewer:
            "They check if you understand design as decision-making, not diagram drawing.",
          references: ["https://www.geeksforgeeks.org/system-design-tutorial/"],
        },
        {
          question: "Why is system design important?",
          answer:
            "Good system design ensures a system can scale, remain reliable under load, and be maintainable over time. Poor design leads to bottlenecks, outages, and expensive rewrites.",
          interviewer:
            "They test long-term thinking.",
          references: ["https://www.geeksforgeeks.org/system-design-interview-guide/"],
        },
        {
          question: "What are functional requirements?",
          answer:
            "Functional requirements describe what the system should do, such as user login, search, or messaging.",
          interviewer:
            "They test clarity before design.",
          references: ["https://www.geeksforgeeks.org/functional-requirements-in-software-engineering/"],
        },
        {
          question: "What are non-functional requirements?",
          answer:
            "Non-functional requirements define system qualities like latency, availability, scalability, and security, which often dominate design decisions.",
          interviewer:
            "They expect you to prioritize NFRs early.",
          references: ["https://www.geeksforgeeks.org/non-functional-requirements-in-software-engineering/"],
        },
        {
          question: "What is scalability?",
          answer:
            "Scalability is the ability of a system to handle increased load by adding resources without degrading performance.",
          interviewer:
            "They expect vertical vs horizontal discussion.",
          references: ["https://www.geeksforgeeks.org/scalability-in-system-design/"],
        },
        {
          question: "What is availability?",
          answer:
            "Availability measures the percentage of time a system remains operational and accessible.",
          interviewer:
            "They often ask about SLAs.",
          references: ["https://www.geeksforgeeks.org/high-availability-in-system-design/"],
        },
        {
          question: "What is reliability?",
          answer:
            "Reliability refers to a system’s ability to perform correctly over time without failure.",
          interviewer:
            "They test failure-handling mindset.",
          references: ["https://www.geeksforgeeks.org/reliability-in-system-design/"],
        },
        {
          question: "What is latency?",
          answer:
            "Latency is the time taken for a request to be processed end-to-end.",
          interviewer:
            "They test real-user experience awareness.",
          references: ["https://www.geeksforgeeks.org/latency-vs-throughput/"],
        },
        {
          question: "What is throughput?",
          answer:
            "Throughput measures how many requests a system can handle per unit time.",
          interviewer:
            "They test capacity thinking.",
          references: ["https://www.geeksforgeeks.org/latency-vs-throughput/"],
        },
        {
          question: "What is a bottleneck?",
          answer:
            "A bottleneck is a component that limits overall system performance.",
          interviewer:
            "They test optimization mindset.",
          references: ["https://www.geeksforgeeks.org/performance-bottleneck/"],
        },

        {
          question: "What is vertical scaling?",
          answer:
            "Vertical scaling increases capacity by adding more power to a single machine.",
          interviewer:
            "Limits discussion.",
          references: ["https://www.geeksforgeeks.org/scalability-in-system-design/"],
        },
        {
          question: "What is horizontal scaling?",
          answer:
            "Horizontal scaling adds more machines to distribute load.",
          interviewer:
            "Preferred for large systems.",
          references: ["https://www.geeksforgeeks.org/scalability-in-system-design/"],
        },
        {
          question: "What is a monolithic architecture?",
          answer:
            "A monolith is a single deployable unit containing all components.",
          interviewer:
            "Pros vs cons expected.",
          references: ["https://www.geeksforgeeks.org/monolithic-architecture/"],
        },
        {
          question: "What is client-server architecture?",
          answer:
            "Client-server separates requesters from providers of services.",
          interviewer:
            "Foundational architecture.",
          references: ["https://www.geeksforgeeks.org/client-server-model/"],
        },
        {
          question: "What is statelessness?",
          answer:
            "Stateless systems do not store client session state on the server.",
          interviewer:
            "Scalability advantage.",
          references: ["https://www.geeksforgeeks.org/statelessness-in-system-design/"],
        },
        {
          question: "What is stateful system?",
          answer:
            "Stateful systems store session data on the server.",
          interviewer:
            "Scaling challenges.",
          references: ["https://www.geeksforgeeks.org/stateful-and-stateless-architecture/"],
        },
        {
          question: "What is redundancy?",
          answer:
            "Redundancy duplicates components to improve availability.",
          interviewer:
            "Failure tolerance.",
          references: ["https://www.geeksforgeeks.org/redundancy-in-system-design/"],
        },
        {
          question: "What is failover?",
          answer:
            "Failover switches to a backup system on failure.",
          interviewer:
            "High availability systems.",
          references: ["https://www.geeksforgeeks.org/failover-in-system-design/"],
        },
        {
          question: "What is fault tolerance?",
          answer:
            "Fault tolerance allows systems to continue functioning despite failures.",
          interviewer:
            "Resilience mindset.",
          references: ["https://www.geeksforgeeks.org/fault-tolerance-in-system-design/"],
        },
        {
          question: "What is replication?",
          answer:
            "Replication maintains multiple copies of data or services.",
          interviewer:
            "Consistency trade-offs.",
          references: ["https://www.geeksforgeeks.org/data-replication-in-dbms/"],
        },
        {
          question: "What is consistency?",
          answer:
            "Consistency ensures all users see the same data.",
          interviewer:
            "CAP theorem precursor.",
          references: ["https://www.geeksforgeeks.org/consistency-in-system-design/"],
        },
        {
          question: "What is partition tolerance?",
          answer:
            "Partition tolerance allows systems to operate despite network failures.",
          interviewer:
            "Distributed systems basics.",
          references: ["https://www.geeksforgeeks.org/cap-theorem-in-system-design/"],
        },
        {
          question: "What is eventual consistency?",
          answer:
            "System becomes consistent over time after updates.",
          interviewer:
            "NoSQL relevance.",
          references: ["https://www.geeksforgeeks.org/eventual-consistency/"],
        },
        {
          question: "What is strong consistency?",
          answer:
            "All reads reflect the latest write immediately.",
          interviewer:
            "Latency vs consistency.",
          references: ["https://www.geeksforgeeks.org/consistency-models-in-distributed-systems/"],
        }
      ],
    },

    {
      level: "Intermediate",
      questions: [
        {
          question: "What is load balancing?",
          answer:
            "Load balancing distributes traffic across servers to improve availability and performance.",
          interviewer:
            "Single point of failure discussion.",
          references: ["https://www.geeksforgeeks.org/load-balancing-in-system-design/"],
        },
        {
          question: "Types of load balancers?",
          answer:
            "Layer 4 and Layer 7 load balancers.",
          interviewer:
            "Routing logic.",
          references: ["https://www.geeksforgeeks.org/load-balancing-in-system-design/"],
        },
        {
          question: "What is caching?",
          answer:
            "Caching stores frequently accessed data in fast storage to reduce latency.",
          interviewer:
            "Cache placement matters.",
          references: ["https://www.geeksforgeeks.org/caching-in-system-design/"],
        },
        {
          question: "Cache invalidation strategies?",
          answer:
            "TTL, write-through, write-back, and cache eviction policies.",
          interviewer:
            "One of the hardest problems.",
          references: ["https://www.geeksforgeeks.org/cache-invalidation-strategies/"],
        },
        {
          question: "What is CDN?",
          answer:
            "CDN serves content from geographically closer servers.",
          interviewer:
            "Latency reduction.",
          references: ["https://www.geeksforgeeks.org/content-delivery-network-cdn/"],
        },

        {
          question: "What is database sharding?",
          answer:
            "Sharding splits data across databases to scale writes.",
          interviewer:
            "Shard key importance.",
          references: ["https://www.geeksforgeeks.org/sharding-in-system-design/"],
        },
        {
          question: "What is database replication?",
          answer:
            "Replication copies data across nodes for fault tolerance.",
          interviewer:
            "Read scaling.",
          references: ["https://www.geeksforgeeks.org/data-replication-in-dbms/"],
        },
        {
          question: "What is read replica?",
          answer:
            "Read replicas offload read traffic from primary DB.",
          interviewer:
            "Consistency lag.",
          references: ["https://www.geeksforgeeks.org/database-replication/"],
        },
        {
          question: "What is write-heavy vs read-heavy system?",
          answer:
            "Read-heavy focuses on caching; write-heavy focuses on sharding.",
          interviewer:
            "Workload analysis.",
          references: ["https://www.geeksforgeeks.org/system-design-workloads/"],
        },
        {
          question: "What is message queue?",
          answer:
            "Message queues decouple producers and consumers.",
          interviewer:
            "Async processing.",
          references: ["https://www.geeksforgeeks.org/message-queue-in-system-design/"],
        },

        {
          question: "What is asynchronous processing?",
          answer:
            "Async processing allows tasks to run independently.",
          interviewer:
            "Latency optimization.",
          references: ["https://www.geeksforgeeks.org/asynchronous-processing/"],
        },
        {
          question: "What is backpressure?",
          answer:
            "Backpressure slows producers when consumers are overloaded.",
          interviewer:
            "System stability.",
          references: ["https://www.geeksforgeeks.org/backpressure-in-system-design/"],
        },
        {
          question: "What is rate limiting?",
          answer:
            "Rate limiting controls request frequency.",
          interviewer:
            "Abuse prevention.",
          references: ["https://www.geeksforgeeks.org/rate-limiting-in-system-design/"],
        },
        {
          question: "What is API gateway?",
          answer:
            "API gateway manages routing, authentication, and throttling.",
          interviewer:
            "Microservices entry point.",
          references: ["https://www.geeksforgeeks.org/api-gateway/"],
        },
        {
          question: "What is service discovery?",
          answer:
            "Service discovery allows services to find each other dynamically.",
          interviewer:
            "Dynamic systems.",
          references: ["https://www.geeksforgeeks.org/service-discovery/"],
        },

        {
          question: "What is distributed locking?",
          answer:
            "Distributed locks coordinate access across nodes.",
          interviewer:
            "Race conditions.",
          references: ["https://www.geeksforgeeks.org/distributed-lock/"],
        },
        {
          question: "What is idempotency?",
          answer:
            "Idempotent operations produce same result on retries.",
          interviewer:
            "Retry-safe APIs.",
          references: ["https://www.geeksforgeeks.org/idempotent-operations/"],
        },
        {
          question: "What is quorum?",
          answer:
            "Quorum ensures majority agreement.",
          interviewer:
            "Consistency models.",
          references: ["https://www.geeksforgeeks.org/quorum-consensus/"],
        },
        {
          question: "What is data consistency lag?",
          answer:
            "Delay between write and read visibility.",
          interviewer:
            "Replication trade-off.",
          references: ["https://www.geeksforgeeks.org/eventual-consistency/"],
        },
        {
          question: "What is write amplification?",
          answer:
            "Writes causing multiple disk operations.",
          interviewer:
            "Storage systems.",
          references: ["https://www.geeksforgeeks.org/write-amplification/"],
        },

        {
          question: "What is read amplification?",
          answer:
            "Single read requiring multiple disk reads.",
          interviewer:
            "Performance analysis.",
          references: ["https://www.geeksforgeeks.org/read-amplification/"],
        },
        {
          question: "What is CAP theorem?",
          answer:
            "Distributed systems can guarantee only two of Consistency, Availability, and Partition tolerance.",
          interviewer:
            "Foundational theory.",
          references: ["https://www.geeksforgeeks.org/cap-theorem-in-system-design/"],
        },
        {
          question: "What is BASE?",
          answer:
            "BASE prioritizes availability and eventual consistency.",
          interviewer:
            "NoSQL models.",
          references: ["https://www.geeksforgeeks.org/base-model-in-system-design/"],
        },
        {
          question: "What is ACID vs BASE?",
          answer:
            "ACID prioritizes consistency; BASE prioritizes availability.",
          interviewer:
            "Trade-off thinking.",
          references: ["https://www.geeksforgeeks.org/acid-vs-base/"],
        },
        {
          question: "What is distributed transaction?",
          answer:
            "Transaction spanning multiple services or databases.",
          interviewer:
            "Failure complexity.",
          references: ["https://www.geeksforgeeks.org/distributed-transactions/"],
        }
      ],
    },

    {
      level: "Hard",
      questions: [
        {
          question: "Explain two-phase commit.",
          answer:
            "2PC ensures atomic commits across distributed systems.",
          interviewer:
            "Blocking issues.",
          references: ["https://www.geeksforgeeks.org/two-phase-commit-protocol/"],
        },
        {
          question: "Explain Saga pattern.",
          answer:
            "Saga manages distributed transactions using compensating actions.",
          interviewer:
            "Microservices consistency.",
          references: ["https://www.geeksforgeeks.org/saga-pattern/"],
        },
        {
          question: "What is split-brain?",
          answer:
            "Split-brain occurs when nodes act independently after network partition.",
          interviewer:
            "Cluster failures.",
          references: ["https://www.geeksforgeeks.org/split-brain-problem/"],
        },
        {
          question: "What is leader election?",
          answer:
            "Leader election selects a coordinator among nodes.",
          interviewer:
            "Distributed coordination.",
          references: ["https://www.geeksforgeeks.org/leader-election-in-distributed-system/"],
        },
        {
          question: "What is consensus?",
          answer:
            "Consensus ensures nodes agree on a single value.",
          interviewer:
            "Raft/Paxos awareness.",
          references: ["https://www.geeksforgeeks.org/consensus-algorithms/"],
        },

        {
          question: "Explain Raft at high level.",
          answer:
            "Raft ensures consistency via leader-based replication.",
          interviewer:
            "Conceptual clarity.",
          references: ["https://raft.github.io/"],
        },
        {
          question: "Explain Paxos at high level.",
          answer:
            "Paxos achieves consensus despite failures.",
          interviewer:
            "Theory-heavy.",
          references: ["https://www.geeksforgeeks.org/paxos-algorithm/"],
        },
        {
          question: "What is eventual vs strong consistency trade-off?",
          answer:
            "Strong consistency increases latency; eventual improves availability.",
          interviewer:
            "CAP trade-off.",
          references: ["https://www.geeksforgeeks.org/consistency-models-in-distributed-systems/"],
        },
        {
          question: "What is hot partition?",
          answer:
            "Uneven access causing overload.",
          interviewer:
            "Sharding pitfalls.",
          references: ["https://www.geeksforgeeks.org/hot-spot-in-system-design/"],
        },
        {
          question: "What is request hedging?",
          answer:
            "Sending parallel requests to reduce tail latency.",
          interviewer:
            "Latency optimization.",
          references: ["https://www.geeksforgeeks.org/tail-latency/"],
        },

        {
          question: "What is tail latency?",
          answer:
            "High latency experienced by slowest requests.",
          interviewer:
            "User experience.",
          references: ["https://www.geeksforgeeks.org/tail-latency/"],
        },
        {
          question: "What is circuit breaker?",
          answer:
            "Circuit breaker prevents cascading failures.",
          interviewer:
            "Resilience pattern.",
          references: ["https://www.geeksforgeeks.org/circuit-breaker-pattern/"],
        },
        {
          question: "What is bulkhead pattern?",
          answer:
            "Bulkheads isolate failures.",
          interviewer:
            "Fault isolation.",
          references: ["https://www.geeksforgeeks.org/bulkhead-pattern/"],
        },
        {
          question: "What is graceful degradation?",
          answer:
            "System continues with reduced functionality.",
          interviewer:
            "User-first design.",
          references: ["https://www.geeksforgeeks.org/graceful-degradation/"],
        },
        {
          question: "What is chaos engineering?",
          answer:
            "Testing systems by inducing failures.",
          interviewer:
            "Resilience testing.",
          references: ["https://www.geeksforgeeks.org/chaos-engineering/"],
        },

        {
          question: "What is observability in system design?",
          answer:
            "Ability to understand system behavior via metrics, logs, and traces.",
          interviewer:
            "Production readiness.",
          references: ["https://www.geeksforgeeks.org/observability-in-system-design/"],
        },
        {
          question: "How do you design for high availability?",
          answer:
            "Using redundancy, failover, load balancing, and monitoring.",
          interviewer:
            "Real-world thinking.",
          references: ["https://www.geeksforgeeks.org/high-availability-in-system-design/"],
        },
        {
          question: "How do you estimate capacity?",
          answer:
            "By estimating traffic, storage, and growth trends.",
          interviewer:
            "Numbers-based design.",
          references: ["https://www.geeksforgeeks.org/capacity-planning-in-system-design/"],
        },
        {
          question: "How do you handle data migrations at scale?",
          answer:
            "Using backward compatibility and phased rollout.",
          interviewer:
            "Zero-downtime focus.",
          references: ["https://www.geeksforgeeks.org/database-migration-strategies/"],
        },
        {
          question: "How does system design differ for startups vs big companies?",
          answer:
            "Startups optimize speed; large companies optimize reliability.",
          interviewer:
            "Context awareness.",
          references: ["https://martinfowler.com/articles/designDead.html"],
        }
      ],
    }
  ],
};
