export const devopsRoadmap = {
  slug: "devops",
  title: "DevOps Engineer Roadmap (Beginner → Interview-Ready)",
  description: "A fundamentals-first DevOps roadmap focused on real production systems, automation, and reliability expected in product-based company interviews.",
  phases: [
    {
      phase: "Phase 1: Linux, Networking & Core Foundations",
      goal: "Build strong system fundamentals required for any DevOps role.",
      topics: [
        {
          name: "Linux Basics",
          explanation: "Linux is the primary OS used on servers; you must understand files, processes, and permissions.",
          interview: "Interviewers test basic commands, process management, and permission issues.",
          difficulty: "Easy",
          references: [
            "https://linuxcommand.org/",
            "https://www.redhat.com/sysadmin/linux-basics"
          ]
        },
        {
          name: "Networking Fundamentals",
          explanation: "Covers IP, ports, DNS, TCP vs UDP, and how machines communicate.",
          interview: "Very common: explain how a request reaches a server and where it can fail.",
          difficulty: "Easy",
          references: [
            "https://www.cloudflare.com/learning/network-layer/what-is-a-computer-network/",
            "https://aws.amazon.com/what-is/networking/"
          ]
        },
        {
          name: "How the Web Works",
          explanation: "Understand HTTP, HTTPS, request/response lifecycle, and status codes.",
          interview: "Interviewers ask this to filter out candidates with shallow knowledge.",
          difficulty: "Easy",
          references: [
            "https://developer.mozilla.org/en-US/docs/Web/HTTP",
            "https://web.dev/howbrowserswork/"
          ]
        }
      ]
    },
    {
      phase: "Phase 2: Version Control & Automation Basics",
      goal: "Learn how teams collaborate and automate repetitive work.",
      topics: [
        {
          name: "Git Fundamentals",
          explanation: "Git tracks code changes and enables collaboration across teams.",
          interview: "Interviewers test branching, rebasing vs merging, and conflict resolution.",
          difficulty: "Easy",
          references: [
            "https://git-scm.com/doc",
            "https://www.atlassian.com/git/tutorials"
          ]
        },
        {
          name: "Shell Scripting Basics",
          explanation: "Shell scripts automate routine tasks on servers.",
          interview: "Often tested by asking how you’d automate backups or deployments.",
          difficulty: "Medium",
          references: [
            "https://www.gnu.org/software/bash/manual/",
            "https://linuxconfig.org/bash-scripting-tutorial-for-beginners"
          ]
        },
        {
          name: "CI/CD Concepts",
          explanation: "CI/CD automates build, test, and deployment pipelines.",
          interview: "Interviewers ask you to design a simple CI/CD flow.",
          difficulty: "Medium",
          references: [
            "https://www.redhat.com/en/topics/devops/what-is-ci-cd",
            "https://docs.github.com/en/actions"
          ]
        }
      ]
    },
    {
      phase: "Phase 3: Containers & Container Orchestration",
      goal: "Package applications and manage them reliably at scale.",
      topics: [
        {
          name: "Docker Fundamentals",
          explanation: "Docker packages applications with dependencies into containers.",
          interview: "Common trap: confusing containers with virtual machines.",
          difficulty: "Medium",
          references: [
            "https://docs.docker.com/get-started/",
            "https://www.docker.com/resources/what-container/"
          ]
        },
        {
          name: "Container Networking & Volumes",
          explanation: "Understand how containers communicate and persist data.",
          interview: "Interviewers test real-world issues like data loss and networking bugs.",
          difficulty: "Medium",
          references: [
            "https://docs.docker.com/network/",
            "https://docs.docker.com/storage/"
          ]
        },
        {
          name: "Kubernetes Basics",
          explanation: "Kubernetes manages containerized applications across clusters.",
          interview: "Very common rejection area if concepts like pods and services are unclear.",
          difficulty: "Hard",
          references: [
            "https://kubernetes.io/docs/concepts/",
            "https://kubernetes.io/docs/tutorials/"
          ]
        }
      ]
    },
    {
      phase: "Phase 4: Cloud & Infrastructure as Code",
      goal: "Provision and manage infrastructure in a scalable, repeatable way.",
      topics: [
        {
          name: "Cloud Fundamentals",
          explanation: "Learn compute, storage, networking, and managed services in the cloud.",
          interview: "Interviewers test trade-offs between cloud services.",
          difficulty: "Medium",
          references: [
            "https://aws.amazon.com/what-is-cloud-computing/",
            "https://cloud.google.com/learn/what-is-cloud-computing"
          ]
        },
        {
          name: "Infrastructure as Code (IaC)",
          explanation: "IaC allows you to define infrastructure using code instead of manual setup.",
          interview: "Often tested via Terraform workflow and state management.",
          difficulty: "Hard",
          references: [
            "https://developer.hashicorp.com/terraform/docs",
            "https://www.terraform.io/intro"
          ]
        },
        {
          name: "Configuration Management",
          explanation: "Ensures systems stay in the desired state automatically.",
          interview: "Interviewers ask how you manage consistency across servers.",
          difficulty: "Hard",
          references: [
            "https://docs.ansible.com/",
            "https://www.puppet.com/docs"
          ]
        }
      ]
    },
    {
      phase: "Phase 5: Monitoring, Reliability & Security",
      goal: "Operate systems reliably and handle failures in production.",
      topics: [
        {
          name: "Monitoring & Logging",
          explanation: "Monitoring detects issues; logging helps debug them.",
          interview: "Interviewers test how you’d detect and respond to outages.",
          difficulty: "Hard",
          references: [
            "https://prometheus.io/docs/introduction/overview/",
            "https://www.elastic.co/what-is/elk-stack"
          ]
        },
        {
          name: "Reliability & Incident Management",
          explanation: "Systems must recover quickly from failures without data loss.",
          interview: "Common trap: vague answers without concrete failure scenarios.",
          difficulty: "Hard",
          references: [
            "https://sre.google/sre-book/",
            "https://aws.amazon.com/builders-library/"
          ]
        },
        {
          name: "DevOps Security Basics",
          explanation: "Security must be integrated into pipelines and infrastructure.",
          interview: "Interviewers test OWASP awareness and secret management.",
          difficulty: "Hard",
          references: [
            "https://owasp.org/www-project-top-ten/",
            "https://cheatsheetseries.owasp.org/"
          ]
        }
      ]
    },
    {
      phase: "Phase 6: System Design & DevOps Interviews",
      goal: "Think like a production DevOps engineer and clear interviews.",
      topics: [
        {
          name: "System Design for DevOps",
          explanation: "Design deployment and infrastructure for real-world systems.",
          interview: "Interviewers test clarity, trade-offs, and failure handling.",
          difficulty: "Hard",
          references: [
            "https://github.com/donnemartin/system-design-primer",
            "https://martinfowler.com/articles/architecture.html"
          ]
        },
        {
          name: "Scalability & Cost Optimization",
          explanation: "Balance performance, reliability, and cloud costs.",
          interview: "Often tested via scaling scenarios and cost trade-offs.",
          difficulty: "Hard",
          references: [
            "https://aws.amazon.com/architecture/well-architected/",
            "https://cloud.google.com/architecture"
          ]
        },
        {
          name: "DevOps Interview Patterns",
          explanation: "Combines Linux, cloud, containers, and reliability thinking.",
          interview: "Interviewers value reasoning and production experience over tools.",
          difficulty: "Hard",
          references: [
            "https://github.com/bregman-arie/devops-exercises",
            "https://roadmap.sh/devops"
          ]
        }
      ]
    }
  ]
};
