export const operatingSystems = {
  slug: "operating-systems",
  title: "Operating Systems",
  description:
    "A complete interview-focused Operating Systems question bank covering processes, threads, scheduling, memory management, synchronization, and real-world OS behavior tested heavily in product-based companies.",

  phases: [
    {
      level: "Beginner",
      questions: [
        {
          question: "What is an Operating System?",
          answer:
            "An Operating System (OS) is system software that acts as an interface between users and computer hardware. It manages resources such as CPU, memory, storage, and I/O devices while providing services needed to run applications efficiently and securely.",
          interviewer:
            "They want to see if you view OS as a resource manager, not just software.",
          references: ["https://www.geeksforgeeks.org/operating-systems/"],
        },
        {
          question: "Why do we need an Operating System?",
          answer:
            "Without an OS, applications would need to manage hardware directly, which is complex and error-prone. The OS abstracts hardware details, enables multitasking, ensures security, and manages resource sharing among multiple programs.",
          interviewer:
            "They test understanding of abstraction and resource management.",
          references: ["https://www.geeksforgeeks.org/functions-of-operating-system/"],
        },
        {
          question: "What are the main functions of an OS?",
          answer:
            "Core functions include process management, memory management, file system management, I/O handling, security, and scheduling. Together these ensure stable and efficient system operation.",
          interviewer:
            "They expect concrete examples for each function.",
          references: ["https://www.geeksforgeeks.org/functions-of-operating-system/"],
        },
        {
          question: "What is a process?",
          answer:
            "A process is a program in execution. It includes the program code, current activity, stack, heap, and allocated system resources. Multiple processes can run the same program independently.",
          interviewer:
            "They test clarity between program vs process.",
          references: ["https://www.geeksforgeeks.org/process-in-operating-system/"],
        },
        {
          question: "What is a thread?",
          answer:
            "A thread is the smallest unit of execution within a process. Threads share the same memory space of a process but execute independently, enabling concurrency.",
          interviewer:
            "They test process vs thread distinction.",
          references: ["https://www.geeksforgeeks.org/thread-in-operating-system/"],
        },
        {
          question: "Difference between process and thread?",
          answer:
            "Processes have separate memory spaces and higher overhead, while threads share memory and are lightweight. Threads communicate faster but require careful synchronization.",
          interviewer:
            "They look for performance and isolation trade-offs.",
          references: ["https://www.geeksforgeeks.org/difference-between-process-and-thread/"],
        },
        {
          question: "What is multitasking?",
          answer:
            "Multitasking allows multiple processes to share CPU time by rapidly switching between them, creating an illusion of parallelism.",
          interviewer:
            "They test time-sharing understanding.",
          references: ["https://www.geeksforgeeks.org/multitasking-operating-system/"],
        },
        {
          question: "What is multiprogramming?",
          answer:
            "Multiprogramming keeps multiple programs in memory to maximize CPU utilization by switching when one waits for I/O.",
          interviewer:
            "They test CPU utilization logic.",
          references: ["https://www.geeksforgeeks.org/multiprogramming-operating-system/"],
        },
        {
          question: "What is time sharing?",
          answer:
            "Time sharing allocates CPU time slices to processes, ensuring responsive interaction for users.",
          interviewer:
            "They test scheduling basics.",
          references: ["https://www.geeksforgeeks.org/time-sharing-operating-system/"],
        },
        {
          question: "What is kernel?",
          answer:
            "The kernel is the core part of the OS that directly interacts with hardware and manages system resources.",
          interviewer:
            "They test user vs kernel space understanding.",
          references: ["https://www.geeksforgeeks.org/kernel-in-operating-system/"],
        },

        {
          question: "What is user mode and kernel mode?",
          answer:
            "User mode restricts direct hardware access for safety, while kernel mode allows full system access for OS operations.",
          interviewer:
            "They test system security boundaries.",
          references: ["https://www.geeksforgeeks.org/user-mode-and-kernel-mode/"],
        },
        {
          question: "What is system call?",
          answer:
            "System calls provide a controlled way for user programs to request services from the kernel.",
          interviewer:
            "They test OS–application interaction.",
          references: ["https://www.geeksforgeeks.org/system-call-in-operating-system/"],
        },
        {
          question: "What is context switching?",
          answer:
            "Context switching saves the state of one process and restores another, allowing multitasking.",
          interviewer:
            "They test overhead awareness.",
          references: ["https://www.geeksforgeeks.org/context-switch-in-operating-system/"],
        },
        {
          question: "What is CPU scheduling?",
          answer:
            "CPU scheduling decides which process gets CPU time when multiple processes are ready.",
          interviewer:
            "They expect scheduling goals.",
          references: ["https://www.geeksforgeeks.org/cpu-scheduling-in-operating-systems/"],
        },
        {
          question: "What is a scheduling queue?",
          answer:
            "Scheduling queues store processes in different states such as ready, waiting, and running.",
          interviewer:
            "They test lifecycle understanding.",
          references: ["https://www.geeksforgeeks.org/scheduling-queues-operating-system/"],
        },
        {
          question: "What is a ready state?",
          answer:
            "Ready state means the process is waiting for CPU allocation.",
          interviewer:
            "State transition clarity.",
          references: ["https://www.geeksforgeeks.org/process-states-in-operating-system/"],
        },
        {
          question: "What is a blocked state?",
          answer:
            "Blocked state occurs when a process waits for I/O or an event.",
          interviewer:
            "They test wait conditions.",
          references: ["https://www.geeksforgeeks.org/process-states-in-operating-system/"],
        },
        {
          question: "What is throughput?",
          answer:
            "Throughput measures how many processes complete per unit time.",
          interviewer:
            "Scheduling metric understanding.",
          references: ["https://www.geeksforgeeks.org/cpu-scheduling-criteria/"],
        },
        {
          question: "What is turnaround time?",
          answer:
            "Turnaround time is total time from submission to completion of a process.",
          interviewer:
            "Performance metrics.",
          references: ["https://www.geeksforgeeks.org/cpu-scheduling-criteria/"],
        },
        {
          question: "What is waiting time?",
          answer:
            "Waiting time is the total time a process waits in the ready queue.",
          interviewer:
            "Scheduling calculations.",
          references: ["https://www.geeksforgeeks.org/cpu-scheduling-criteria/"],
        },
        {
          question: "What is response time?",
          answer:
            "Response time is the time taken to first respond after a request.",
          interviewer:
            "Interactive systems focus.",
          references: ["https://www.geeksforgeeks.org/cpu-scheduling-criteria/"],
        },
        {
          question: "What is a daemon process?",
          answer:
            "Daemon processes run in the background providing system services.",
          interviewer:
            "Real-world OS examples.",
          references: ["https://www.geeksforgeeks.org/daemon-process/"],
        },
        {
          question: "What is booting?",
          answer:
            "Booting is the process of starting a computer and loading the OS into memory.",
          interviewer:
            "System startup knowledge.",
          references: ["https://www.geeksforgeeks.org/booting-process-in-operating-system/"],
        },
        {
          question: "What is interrupt?",
          answer:
            "An interrupt is a signal that temporarily halts CPU execution to handle urgent events.",
          interviewer:
            "Hardware–software interaction.",
          references: ["https://www.geeksforgeeks.org/interrupts-in-operating-system/"],
        },
        {
          question: "What is polling?",
          answer:
            "Polling repeatedly checks device status instead of waiting for interrupts.",
          interviewer:
            "Efficiency trade-offs.",
          references: ["https://www.geeksforgeeks.org/polling-in-operating-system/"],
        }
      ],
    },

    {
      level: "Intermediate",
      questions: [
        {
          question: "Explain process states and transitions.",
          answer:
            "Processes move between states such as new, ready, running, waiting, and terminated based on CPU scheduling and I/O events.",
          interviewer:
            "They test lifecycle understanding.",
          references: ["https://www.geeksforgeeks.org/process-states-in-operating-system/"],
        },
        {
          question: "Explain FCFS scheduling.",
          answer:
            "FCFS schedules processes in arrival order. It is simple but can cause long waiting times.",
          interviewer:
            "They test disadvantages.",
          references: ["https://www.geeksforgeeks.org/first-come-first-serve-scheduling/"],
        },
        {
          question: "Explain SJF scheduling.",
          answer:
            "SJF schedules processes with the shortest execution time first, minimizing average waiting time.",
          interviewer:
            "Starvation issue.",
          references: ["https://www.geeksforgeeks.org/shortest-job-first-sjf-scheduling/"],
        },
        {
          question: "Explain Round Robin scheduling.",
          answer:
            "Round Robin assigns fixed time slices to processes in cyclic order, ensuring fairness.",
          interviewer:
            "Time quantum trade-off.",
          references: ["https://www.geeksforgeeks.org/round-robin-scheduling/"],
        },
        {
          question: "What is priority scheduling?",
          answer:
            "Processes are scheduled based on priority values.",
          interviewer:
            "Starvation and aging.",
          references: ["https://www.geeksforgeeks.org/priority-scheduling/"],
        },

        {
          question: "What is starvation?",
          answer:
            "Starvation occurs when a process never gets CPU due to scheduling bias.",
          interviewer:
            "Fairness understanding.",
          references: ["https://www.geeksforgeeks.org/starvation-in-operating-system/"],
        },
        {
          question: "What is aging?",
          answer:
            "Aging increases priority of waiting processes to prevent starvation.",
          interviewer:
            "Scheduling improvement.",
          references: ["https://www.geeksforgeeks.org/starvation-in-operating-system/"],
        },
        {
          question: "What is deadlock?",
          answer:
            "Deadlock occurs when processes wait indefinitely for resources held by each other.",
          interviewer:
            "Classic OS question.",
          references: ["https://www.geeksforgeeks.org/deadlock-in-operating-system/"],
        },
        {
          question: "What are deadlock conditions?",
          answer:
            "Mutual exclusion, hold and wait, no preemption, and circular wait.",
          interviewer:
            "Conditions recall + explanation.",
          references: ["https://www.geeksforgeeks.org/deadlock-in-operating-system/"],
        },
        {
          question: "Deadlock prevention vs avoidance?",
          answer:
            "Prevention breaks conditions; avoidance predicts safe states.",
          interviewer:
            "Banker’s algorithm follow-up.",
          references: ["https://www.geeksforgeeks.org/deadlock-prevention/"],
        },

        {
          question: "What is semaphore?",
          answer:
            "Semaphore is a synchronization tool to control access to shared resources.",
          interviewer:
            "Binary vs counting.",
          references: ["https://www.geeksforgeeks.org/semaphores-in-operating-system/"],
        },
        {
          question: "What is mutex?",
          answer:
            "Mutex ensures mutual exclusion for critical sections.",
          interviewer:
            "Mutex vs semaphore.",
          references: ["https://www.geeksforgeeks.org/mutex-lock-for-linux-thread-synchronization/"],
        },
        {
          question: "What is critical section?",
          answer:
            "Code section accessing shared resources that must not be executed concurrently.",
          interviewer:
            "Race condition risk.",
          references: ["https://www.geeksforgeeks.org/critical-section-problem/"],
        },
        {
          question: "What is race condition?",
          answer:
            "Race condition occurs when outcome depends on execution order of threads.",
          interviewer:
            "Concurrency bugs.",
          references: ["https://www.geeksforgeeks.org/race-condition-in-operating-system/"],
        },
        {
          question: "What is memory management?",
          answer:
            "Memory management allocates and deallocates memory efficiently among processes.",
          interviewer:
            "Fragmentation awareness.",
          references: ["https://www.geeksforgeeks.org/memory-management-in-operating-system/"],
        },

        {
          question: "What is paging?",
          answer:
            "Paging divides memory into fixed-size pages to avoid fragmentation.",
          interviewer:
            "Logical vs physical memory.",
          references: ["https://www.geeksforgeeks.org/paging-in-operating-system/"],
        },
        {
          question: "What is segmentation?",
          answer:
            "Segmentation divides memory based on logical units like code and data.",
          interviewer:
            "Paging vs segmentation.",
          references: ["https://www.geeksforgeeks.org/segmentation-in-operating-system/"],
        },
        {
          question: "What is virtual memory?",
          answer:
            "Virtual memory allows execution of processes larger than physical memory.",
          interviewer:
            "Demand paging.",
          references: ["https://www.geeksforgeeks.org/virtual-memory-in-operating-system/"],
        },
        {
          question: "What is page fault?",
          answer:
            "Page fault occurs when requested page is not in memory.",
          interviewer:
            "Page replacement follow-up.",
          references: ["https://www.geeksforgeeks.org/page-fault-in-operating-system/"],
        },
        {
          question: "What is thrashing?",
          answer:
            "Thrashing happens when system spends more time paging than executing.",
          interviewer:
            "Performance collapse.",
          references: ["https://www.geeksforgeeks.org/thrashing-in-operating-system/"],
        }
      ],
    },

    {
      level: "Hard",
      questions: [
        {
          question: "Explain page replacement algorithms.",
          answer:
            "Algorithms like FIFO, LRU, and Optimal decide which page to evict to minimize faults.",
          interviewer:
            "Algorithm trade-offs.",
          references: ["https://www.geeksforgeeks.org/page-replacement-algorithms-in-operating-system/"],
        },
        {
          question: "Explain LRU internally.",
          answer:
            "LRU replaces the page not used for the longest time using timestamps or stacks.",
          interviewer:
            "Implementation detail.",
          references: ["https://www.geeksforgeeks.org/least-recently-used-lru-page-replacement-algorithm/"],
        },
        {
          question: "What is Banker’s algorithm?",
          answer:
            "It avoids deadlock by ensuring system remains in a safe state.",
          interviewer:
            "Deadlock avoidance.",
          references: ["https://www.geeksforgeeks.org/bankers-algorithm-in-operating-system/"],
        },
        {
          question: "Explain demand paging.",
          answer:
            "Pages are loaded only when required, reducing memory usage.",
          interviewer:
            "Lazy loading concept.",
          references: ["https://www.geeksforgeeks.org/demand-paging/"],
        },
        {
          question: "Explain copy-on-write.",
          answer:
            "Memory pages are copied only when modified.",
          interviewer:
            "Fork optimization.",
          references: ["https://www.geeksforgeeks.org/copy-on-write/"],
        },

        {
          question: "Explain kernel data structures.",
          answer:
            "Kernel uses structures like process tables, page tables, and queues.",
          interviewer:
            "Internal OS view.",
          references: ["https://www.geeksforgeeks.org/process-table-and-page-table/"],
        },
        {
          question: "Explain I/O buffering.",
          answer:
            "Buffers smooth speed mismatch between devices and CPU.",
          interviewer:
            "Performance tuning.",
          references: ["https://www.geeksforgeeks.org/io-buffering/"],
        },
        {
          question: "Explain spooling.",
          answer:
            "Spooling queues I/O operations to optimize device usage.",
          interviewer:
            "Printer example.",
          references: ["https://www.geeksforgeeks.org/spooling-in-operating-system/"],
        },
        {
          question: "What is NUMA?",
          answer:
            "NUMA optimizes memory access for multi-processor systems.",
          interviewer:
            "Hardware awareness.",
          references: ["https://www.geeksforgeeks.org/non-uniform-memory-access-numa/"],
        },
        {
          question: "What is SMP?",
          answer:
            "SMP allows processors to share memory equally.",
          interviewer:
            "CPU architecture.",
          references: ["https://www.geeksforgeeks.org/symmetric-multiprocessing/"],
        },

        {
          question: "Explain scheduling in multi-core systems.",
          answer:
            "Schedulers balance load across cores to improve throughput.",
          interviewer:
            "Parallelism awareness.",
          references: ["https://www.geeksforgeeks.org/multi-processor-scheduling/"],
        },
        {
          question: "Explain real-time operating systems.",
          answer:
            "RTOS guarantees strict timing constraints.",
          interviewer:
            "Hard vs soft RTOS.",
          references: ["https://www.geeksforgeeks.org/real-time-operating-system-rtos/"],
        },
        {
          question: "Explain priority inversion.",
          answer:
            "Low-priority process blocks high-priority process.",
          interviewer:
            "Mutex inheritance.",
          references: ["https://www.geeksforgeeks.org/priority-inversion/"],
        },
        {
          question: "Explain memory-mapped files.",
          answer:
            "Files mapped to memory for faster I/O.",
          interviewer:
            "Performance optimization.",
          references: ["https://www.geeksforgeeks.org/memory-mapped-files/"],
        },
        {
          question: "Explain journaling file systems.",
          answer:
            "Journaling logs changes before committing to disk.",
          interviewer:
            "Crash consistency.",
          references: ["https://www.geeksforgeeks.org/journaling-file-system/"],
        },

        {
          question: "Explain inode.",
          answer:
            "Inode stores metadata about files.",
          interviewer:
            "Linux internals.",
          references: ["https://www.geeksforgeeks.org/inode-in-operating-system/"],
        },
        {
          question: "Explain fork and exec.",
          answer:
            "Fork creates process; exec replaces process image.",
          interviewer:
            "Process creation.",
          references: ["https://www.geeksforgeeks.org/fork-system-call/"],
        },
        {
          question: "What is zombie process?",
          answer:
            "Zombie process has completed execution but not cleaned up.",
          interviewer:
            "Process lifecycle.",
          references: ["https://www.geeksforgeeks.org/zombie-process/"],
        },
        {
          question: "What is orphan process?",
          answer:
            "Orphan process continues after parent terminates.",
          interviewer:
            "Process hierarchy.",
          references: ["https://www.geeksforgeeks.org/orphan-process/"],
        },
        {
          question: "How OS concepts apply in system design?",
          answer:
            "Concurrency, memory, and scheduling affect scalability and reliability.",
          interviewer:
            "System-level thinking.",
          references: ["https://www.geeksforgeeks.org/operating-system-in-system-design/"],
        }
      ],
    }
  ],
};
