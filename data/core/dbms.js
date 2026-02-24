export const dbms = {
  slug: "dbms",
  title: "Database Management Systems (DBMS)",
  description:
    "A complete interview-focused DBMS question bank covering fundamentals, SQL, transactions, indexing, and system-level database design for product-based companies.",

  phases: [
    {
      level: "Beginner",
      questions: [
        {
          question: "What is DBMS?",
          answer:
            "A Database Management System (DBMS) is software that allows users to store, retrieve, update, and manage data efficiently. It abstracts low-level data storage details and provides structured access to data.",
          interviewer:
            "They test whether you understand DBMS as a system, not just a storage tool.",
          references: ["https://www.geeksforgeeks.org/dbms/"],
        },
        {
          question: "Why do we need a DBMS?",
          answer:
            "DBMS solves problems of data redundancy, inconsistency, security, and concurrent access that occur in file-based systems.",
          interviewer:
            "They often compare DBMS with file systems.",
          references: ["https://www.geeksforgeeks.org/file-system-vs-dbms/"],
        },
        {
          question: "What is data redundancy?",
          answer:
            "Data redundancy occurs when the same data is stored multiple times unnecessarily, leading to wasted space and inconsistency.",
          interviewer:
            "They test understanding of normalization motivation.",
          references: ["https://www.geeksforgeeks.org/data-redundancy-in-dbms/"],
        },
        {
          question: "What is data inconsistency?",
          answer:
            "Data inconsistency happens when redundant copies of data do not match after updates.",
          interviewer:
            "They expect real-world examples.",
          references: ["https://www.geeksforgeeks.org/data-inconsistency-in-dbms/"],
        },
        {
          question: "What is a database?",
          answer:
            "A database is an organized collection of related data stored electronically for efficient access and management.",
          interviewer:
            "Basic clarity check.",
          references: ["https://www.geeksforgeeks.org/database/"],
        },
        {
          question: "What is a table?",
          answer:
            "A table is a structured format of data consisting of rows and columns representing records and attributes.",
          interviewer:
            "They test relational thinking.",
          references: ["https://www.geeksforgeeks.org/relational-model-in-dbms/"],
        },
        {
          question: "What is a primary key?",
          answer:
            "A primary key uniquely identifies each record in a table and cannot be NULL or duplicated.",
          interviewer:
            "They test uniqueness and constraint rules.",
          references: ["https://www.geeksforgeeks.org/primary-key-in-dbms/"],
        },
        {
          question: "What is a foreign key?",
          answer:
            "A foreign key creates a relationship between two tables by referencing the primary key of another table.",
          interviewer:
            "They test referential integrity.",
          references: ["https://www.geeksforgeeks.org/foreign-key-in-dbms/"],
        },
        {
          question: "What is SQL?",
          answer:
            "SQL (Structured Query Language) is used to interact with relational databases for querying and managing data.",
          interviewer:
            "They expect command categories.",
          references: ["https://www.geeksforgeeks.org/sql-tutorial/"],
        },
        {
          question: "What are DDL commands?",
          answer:
            "DDL commands define database structure, such as CREATE, ALTER, and DROP.",
          interviewer:
            "They test command classification.",
          references: ["https://www.geeksforgeeks.org/sql-ddl-dql-dml-dcl-tcl-commands/"],
        },

        /* 15 more beginner */
        {
          question: "What are DML commands?",
          answer:
            "DML commands manipulate data inside tables, such as INSERT, UPDATE, and DELETE.",
          interviewer:
            "Difference between structure vs data.",
          references: ["https://www.geeksforgeeks.org/sql-ddl-dql-dml-dcl-tcl-commands/"],
        },
        {
          question: "What is a schema?",
          answer:
            "A schema defines the logical structure of a database.",
          interviewer:
            "Logical vs physical structure.",
          references: ["https://www.geeksforgeeks.org/schema-in-dbms/"],
        },
        {
          question: "What is NULL?",
          answer:
            "NULL represents missing or unknown data.",
          interviewer:
            "NULL vs zero confusion.",
          references: ["https://www.geeksforgeeks.org/sql-null-values/"],
        },
        {
          question: "What is a view?",
          answer:
            "A view is a virtual table created using a SQL query.",
          interviewer:
            "Security and abstraction use cases.",
          references: ["https://www.geeksforgeeks.org/views-in-sql/"],
        },
        {
          question: "What is DBMS vs RDBMS?",
          answer:
            "RDBMS follows relational model with tables and relationships, while DBMS is more generic.",
          interviewer:
            "Relational constraints clarity.",
          references: ["https://www.geeksforgeeks.org/difference-between-dbms-and-rdbms/"],
        },
        {
          question: "What is a record?",
          answer:
            "A record represents a single row in a table.",
          interviewer:
            "Terminology check.",
          references: ["https://www.geeksforgeeks.org/records-in-dbms/"],
        },
        {
          question: "What is an attribute?",
          answer:
            "An attribute represents a column in a table.",
          interviewer:
            "Basic relational terms.",
          references: ["https://www.geeksforgeeks.org/attributes-in-dbms/"],
        },
        {
          question: "What is data independence?",
          answer:
            "Data independence allows changes in schema without affecting applications.",
          interviewer:
            "Logical vs physical independence.",
          references: ["https://www.geeksforgeeks.org/data-independence-in-dbms/"],
        },
        {
          question: "What is relational model?",
          answer:
            "Relational model organizes data into tables with defined relationships.",
          interviewer:
            "Foundation of SQL databases.",
          references: ["https://www.geeksforgeeks.org/relational-model-in-dbms/"],
        },
        {
          question: "What is domain?",
          answer:
            "Domain defines permissible values for an attribute.",
          interviewer:
            "Constraint understanding.",
          references: ["https://www.geeksforgeeks.org/domain-in-dbms/"],
        },
        {
          question: "What is entity?",
          answer:
            "An entity represents a real-world object stored in the database.",
          interviewer:
            "ER modeling basics.",
          references: ["https://www.geeksforgeeks.org/entity-relationship-model/"],
        },
        {
          question: "What is entity set?",
          answer:
            "Entity set is a collection of similar entities.",
          interviewer:
            "ER diagram clarity.",
          references: ["https://www.geeksforgeeks.org/entity-relationship-model/"],
        },
        {
          question: "What is ER model?",
          answer:
            "ER model visually represents entities and relationships in a database.",
          interviewer:
            "Design-stage modeling.",
          references: ["https://www.geeksforgeeks.org/entity-relationship-model/"],
        },
        {
          question: "What is cardinality?",
          answer:
            "Cardinality defines how many entities participate in a relationship.",
          interviewer:
            "1:1, 1:N, M:N clarity.",
          references: ["https://www.geeksforgeeks.org/cardinality-in-dbms/"],
        },
        {
          question: "What is degree of relation?",
          answer:
            "Degree represents the number of attributes in a table.",
          interviewer:
            "Relational terminology.",
          references: ["https://www.geeksforgeeks.org/degree-of-a-relation-in-dbms/"],
        }
      ],
    },

    {
      level: "Intermediate",
      questions: [
        {
          question: "What is normalization?",
          answer:
            "Normalization organizes data to reduce redundancy and improve data integrity.",
          interviewer:
            "They test why normalization is needed.",
          references: ["https://www.geeksforgeeks.org/normalization-in-dbms/"],
        },
        {
          question: "Explain 1NF.",
          answer:
            "1NF removes repeating groups and ensures atomic values.",
          interviewer:
            "Atomicity understanding.",
          references: ["https://www.geeksforgeeks.org/first-normal-form-1nf/"],
        },
        {
          question: "Explain 2NF.",
          answer:
            "2NF removes partial dependency on composite keys.",
          interviewer:
            "Composite key clarity.",
          references: ["https://www.geeksforgeeks.org/second-normal-form-2nf/"],
        },
        {
          question: "Explain 3NF.",
          answer:
            "3NF removes transitive dependencies.",
          interviewer:
            "Dependency chains.",
          references: ["https://www.geeksforgeeks.org/third-normal-form-3nf/"],
        },
        {
          question: "What is BCNF?",
          answer:
            "BCNF is a stronger version of 3NF ensuring every determinant is a candidate key.",
          interviewer:
            "Advanced normalization.",
          references: ["https://www.geeksforgeeks.org/boyce-codd-normal-form-bcnf/"],
        },

        /* 20 more intermediate */
        {
          question: "What is functional dependency?",
          answer:
            "Functional dependency defines a relationship between attributes.",
          interviewer:
            "Normalization base.",
          references: ["https://www.geeksforgeeks.org/functional-dependency-in-dbms/"],
        },
        {
          question: "What is candidate key?",
          answer:
            "Candidate keys uniquely identify records and can become primary keys.",
          interviewer:
            "Key classification.",
          references: ["https://www.geeksforgeeks.org/candidate-key-in-dbms/"],
        },
        {
          question: "What is super key?",
          answer:
            "A super key uniquely identifies records but may include extra attributes.",
          interviewer:
            "Minimality concept.",
          references: ["https://www.geeksforgeeks.org/super-key-in-dbms/"],
        },
        {
          question: "What is join?",
          answer:
            "Join combines rows from multiple tables based on a related column.",
          interviewer:
            "Join type clarity.",
          references: ["https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/"],
        },
        {
          question: "Types of joins?",
          answer:
            "Inner, Left, Right, Full, and Cross joins.",
          interviewer:
            "Real query usage.",
          references: ["https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/"],
        },

        {
          question: "What is indexing?",
          answer:
            "Indexing improves query performance by reducing disk access.",
          interviewer:
            "Performance trade-offs.",
          references: ["https://www.geeksforgeeks.org/indexing-in-databases/"],
        },
        {
          question: "What is clustered index?",
          answer:
            "Clustered index determines physical order of data.",
          interviewer:
            "Only one allowed.",
          references: ["https://www.geeksforgeeks.org/clustered-and-non-clustered-index/"],
        },
        {
          question: "What is non-clustered index?",
          answer:
            "Non-clustered index stores pointers to actual data.",
          interviewer:
            "Multiple allowed.",
          references: ["https://www.geeksforgeeks.org/clustered-and-non-clustered-index/"],
        },
        {
          question: "What is transaction?",
          answer:
            "A transaction is a sequence of operations performed as a single unit.",
          interviewer:
            "ACID concept.",
          references: ["https://www.geeksforgeeks.org/transaction-in-dbms/"],
        },
        {
          question: "What is ACID?",
          answer:
            "Atomicity, Consistency, Isolation, Durability ensure reliable transactions.",
          interviewer:
            "Very common question.",
          references: ["https://www.geeksforgeeks.org/acid-properties-in-dbms/"],
        },

        {
          question: "What is deadlock?",
          answer:
            "Deadlock occurs when transactions wait indefinitely for each other.",
          interviewer:
            "Concurrency issues.",
          references: ["https://www.geeksforgeeks.org/deadlock-in-dbms/"],
        },
        {
          question: "What is concurrency control?",
          answer:
            "Concurrency control ensures correct execution of transactions in multi-user systems.",
          interviewer:
            "Race condition handling.",
          references: ["https://www.geeksforgeeks.org/concurrency-control-in-dbms/"],
        },
        {
          question: "What is serializability?",
          answer:
            "Serializability ensures concurrent execution gives same result as serial execution.",
          interviewer:
            "Correctness test.",
          references: ["https://www.geeksforgeeks.org/serializability-in-dbms/"],
        },
        {
          question: "What is lock?",
          answer:
            "Locks prevent concurrent conflicts during data access.",
          interviewer:
            "Shared vs exclusive.",
          references: ["https://www.geeksforgeeks.org/lock-based-protocol-in-dbms/"],
        },
        {
          question: "What is checkpoint?",
          answer:
            "Checkpoint saves DB state to reduce recovery time.",
          interviewer:
            "Recovery optimization.",
          references: ["https://www.geeksforgeeks.org/checkpoint-in-dbms/"],
        },
        {
          question: "What is recovery?",
          answer:
            "Recovery restores database to a consistent state after failure.",
          interviewer:
            "Crash handling.",
          references: ["https://www.geeksforgeeks.org/database-recovery/"],
        },
        {
          question: "What is log-based recovery?",
          answer:
            "Uses logs to undo or redo transactions during recovery.",
          interviewer:
            "Durability check.",
          references: ["https://www.geeksforgeeks.org/log-based-recovery-in-dbms/"],
        },
        {
          question: "What is shadow paging?",
          answer:
            "Uses shadow copies instead of logs for recovery.",
          interviewer:
            "Alternative recovery.",
          references: ["https://www.geeksforgeeks.org/shadow-paging-in-dbms/"],
        },
        {
          question: "What is trigger?",
          answer:
            "Trigger executes automatically on data modification events.",
          interviewer:
            "Automation use cases.",
          references: ["https://www.geeksforgeeks.org/sql-trigger/"],
        },
        {
          question: "What is stored procedure?",
          answer:
            "Stored procedures are precompiled SQL blocks stored in DB.",
          interviewer:
            "Performance & security.",
          references: ["https://www.geeksforgeeks.org/sql-stored-procedures/"],
        }
      ],
    },

    {
      level: "Hard",
      questions: [
        {
          question: "Why is indexing not always good?",
          answer:
            "Indexes improve reads but slow down writes and consume storage.",
          interviewer:
            "Trade-off thinking.",
          references: ["https://use-the-index-luke.com/"],
        },
        {
          question: "Explain isolation levels.",
          answer:
            "Isolation levels define visibility of uncommitted data.",
          interviewer:
            "Dirty read, phantom read.",
          references: ["https://www.geeksforgeeks.org/isolation-levels-in-dbms/"],
        },
        {
          question: "What is dirty read?",
          answer:
            "Reading uncommitted data from another transaction.",
          interviewer:
            "Isolation test.",
          references: ["https://www.geeksforgeeks.org/dirty-read-in-dbms/"],
        },
        {
          question: "What is phantom read?",
          answer:
            "Re-executing a query returns new rows.",
          interviewer:
            "Isolation nuance.",
          references: ["https://www.geeksforgeeks.org/phantom-read-in-dbms/"],
        },
        {
          question: "What is two-phase locking?",
          answer:
            "Ensures serializability by separating lock acquisition and release.",
          interviewer:
            "Concurrency protocol.",
          references: ["https://www.geeksforgeeks.org/two-phase-locking-protocol/"],
        },

        /* 15 more hard */
        {
          question: "Explain CAP theorem.",
          answer:
            "A distributed system cannot guarantee Consistency, Availability, and Partition tolerance simultaneously.",
          interviewer:
            "System design crossover.",
          references: ["https://www.geeksforgeeks.org/cap-theorem-in-dbms/"],
        },
        {
          question: "Explain eventual consistency.",
          answer:
            "System becomes consistent over time.",
          interviewer:
            "NoSQL relevance.",
          references: ["https://www.geeksforgeeks.org/eventual-consistency-in-distributed-systems/"],
        },
        {
          question: "What is sharding?",
          answer:
            "Sharding splits data across multiple machines.",
          interviewer:
            "Scalability test.",
          references: ["https://www.geeksforgeeks.org/sharding-in-databases/"],
        },
        {
          question: "What is replication?",
          answer:
            "Replication maintains multiple copies of data.",
          interviewer:
            "Fault tolerance.",
          references: ["https://www.geeksforgeeks.org/data-replication-in-dbms/"],
        },
        {
          question: "Explain write-ahead logging.",
          answer:
            "Logs are written before data is modified to ensure durability.",
          interviewer:
            "Crash recovery.",
          references: ["https://www.geeksforgeeks.org/write-ahead-logging-wal-in-dbms/"],
        },
        {
          question: "What is cost-based optimizer?",
          answer:
            "Chooses query plans based on estimated execution cost.",
          interviewer:
            "Query optimization.",
          references: ["https://www.geeksforgeeks.org/query-optimization-in-dbms/"],
        },
        {
          question: "What is B+ tree?",
          answer:
            "Balanced tree used for indexing in databases.",
          interviewer:
            "Index internals.",
          references: ["https://www.geeksforgeeks.org/b-tree-set-1-introduction-2/"],
        },
        {
          question: "Explain normalization vs denormalization.",
          answer:
            "Normalization improves consistency; denormalization improves performance.",
          interviewer:
            "Trade-off analysis.",
          references: ["https://www.geeksforgeeks.org/denormalization-in-dbms/"],
        },
        {
          question: "What is OLTP?",
          answer:
            "OLTP handles transactional workloads.",
          interviewer:
            "Workload classification.",
          references: ["https://www.geeksforgeeks.org/oltp-vs-olap/"],
        },
        {
          question: "What is OLAP?",
          answer:
            "OLAP handles analytical workloads.",
          interviewer:
            "Analytics systems.",
          references: ["https://www.geeksforgeeks.org/oltp-vs-olap/"],
        },
        {
          question: "What is MVCC?",
          answer:
            "Multi-Version Concurrency Control maintains multiple versions of data.",
          interviewer:
            "Modern DB internals.",
          references: ["https://www.geeksforgeeks.org/multiversion-concurrency-control-mvcc/"],
        },
        {
          question: "Explain database scaling strategies.",
          answer:
            "Scaling can be vertical or horizontal.",
          interviewer:
            "System design overlap.",
          references: ["https://www.geeksforgeeks.org/database-scaling/"],
        },
        {
          question: "What is query plan?",
          answer:
            "Execution strategy chosen by optimizer.",
          interviewer:
            "Performance debugging.",
          references: ["https://www.geeksforgeeks.org/query-processing-in-dbms/"],
        },
        {
          question: "What is hot spot problem?",
          answer:
            "Uneven load on certain data shards.",
          interviewer:
            "Scalability pitfall.",
          references: ["https://www.geeksforgeeks.org/hot-spot-in-dbms/"],
        },
        {
          question: "When should you denormalize?",
          answer:
            "When read performance outweighs update consistency needs.",
          interviewer:
            "Real-world trade-offs.",
          references: ["https://www.geeksforgeeks.org/denormalization-in-dbms/"],
        }
      ],
    }
  ],
};
