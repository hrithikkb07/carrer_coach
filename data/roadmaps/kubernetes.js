export const kubernetesRoadmap = {
  slug: "kubernetes",
  title: "Kubernetes Roadmap (Beginner → Interview-Ready)",
  description: "A production-grade Kubernetes roadmap focused on real cluster behavior, failure handling, and concepts tested in DevOps and platform engineering interviews.",
  phases: [
    {
      phase: "Phase 1: Container & Cluster Foundations",
      goal: "Understand why Kubernetes exists and the problems it solves.",
      topics: [
        {
          name: "Why Kubernetes Exists",
          explanation: "Kubernetes solves problems of deploying, scaling, and managing containers reliably.",
          interview: "Interviewers ask what problems Docker alone cannot solve.",
          difficulty: "Easy",
          references: [
            "https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/",
            "https://www.cncf.io/blog/2019/08/19/what-is-kubernetes/"
          ]
        },
        {
          name: "Containers vs Virtual Machines",
          explanation: "Containers share the OS kernel, while VMs virtualize hardware.",
          interview: "Common trap: saying containers are lighter without explaining why.",
          difficulty: "Easy",
          references: [
            "https://www.docker.com/resources/what-container/",
            "https://cloud.google.com/learn/what-are-containers"
          ]
        },
        {
          name: "Kubernetes Architecture",
          explanation: "Kubernetes is built with a control plane and worker nodes.",
          interview: "Interviewers test understanding of control plane responsibilities.",
          difficulty: "Easy",
          references: [
            "https://kubernetes.io/docs/concepts/architecture/",
            "https://kubernetes.io/docs/reference/command-line-tools-reference/"
          ]
        }
      ]
    },
    {
      phase: "Phase 2: Core Kubernetes Objects",
      goal: "Learn the fundamental building blocks used in every cluster.",
      topics: [
        {
          name: "Pods",
          explanation: "A Pod is the smallest deployable unit in Kubernetes.",
          interview: "Interviewers ask why Pods exist instead of running containers directly.",
          difficulty: "Medium",
          references: [
            "https://kubernetes.io/docs/concepts/workloads/pods/",
            "https://kubernetes.io/docs/tutorials/kubernetes-basics/explore/explore-intro/"
          ]
        },
        {
          name: "ReplicaSets and Deployments",
          explanation: "Ensure the desired number of Pods are running and updated safely.",
          interview: "Common trap: confusing Deployment with ReplicaSet responsibilities.",
          difficulty: "Medium",
          references: [
            "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
            "https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/"
          ]
        },
        {
          name: "Services",
          explanation: "Services provide stable networking for Pods.",
          interview: "Interviewers test ClusterIP vs NodePort vs LoadBalancer.",
          difficulty: "Medium",
          references: [
            "https://kubernetes.io/docs/concepts/services-networking/service/",
            "https://kubernetes.io/docs/tutorials/services/"
          ]
        }
      ]
    },
    {
      phase: "Phase 3: Configuration, Storage & Networking",
      goal: "Manage configuration, data, and internal communication correctly.",
      topics: [
        {
          name: "ConfigMaps and Secrets",
          explanation: "Used to inject configuration and sensitive data into Pods.",
          interview: "Interviewers test secret handling and security implications.",
          difficulty: "Medium",
          references: [
            "https://kubernetes.io/docs/concepts/configuration/configmap/",
            "https://kubernetes.io/docs/concepts/configuration/secret/"
          ]
        },
        {
          name: "Volumes and Persistent Storage",
          explanation: "Volumes allow Pods to store data beyond their lifecycle.",
          interview: "Common trap: assuming Pod restarts preserve local data.",
          difficulty: "Medium",
          references: [
            "https://kubernetes.io/docs/concepts/storage/volumes/",
            "https://kubernetes.io/docs/concepts/storage/persistent-volumes/"
          ]
        },
        {
          name: "Kubernetes Networking Basics",
          explanation: "Every Pod gets its own IP and can communicate directly.",
          interview: "Interviewers test CNI understanding and service routing.",
          difficulty: "Hard",
          references: [
            "https://kubernetes.io/docs/concepts/services-networking/",
            "https://www.cncf.io/blog/2019/04/19/kubernetes-networking-demystified/"
          ]
        }
      ]
    },
    {
      phase: "Phase 4: Scheduling, Scaling & Reliability",
      goal: "Ensure workloads run efficiently and recover from failures.",
      topics: [
        {
          name: "Scheduler & Node Selection",
          explanation: "Scheduler decides where Pods run based on resources and constraints.",
          interview: "Interviewers ask about taints, tolerations, and affinity.",
          difficulty: "Hard",
          references: [
            "https://kubernetes.io/docs/concepts/scheduling-eviction/",
            "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/"
          ]
        },
        {
          name: "Horizontal Pod Autoscaling",
          explanation: "Automatically scales Pods based on metrics.",
          interview: "Common trap: scaling without understanding resource limits.",
          difficulty: "Hard",
          references: [
            "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/",
            "https://kubernetes.io/docs/concepts/workloads/autoscaling/"
          ]
        },
        {
          name: "Health Checks and Self-Healing",
          explanation: "Liveness and readiness probes keep applications healthy.",
          interview: "Interviewers test failure scenarios and restart loops.",
          difficulty: "Hard",
          references: [
            "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/",
            "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/"
          ]
        }
      ]
    },
    {
      phase: "Phase 5: Security, Observability & Operations",
      goal: "Operate Kubernetes securely in production environments.",
      topics: [
        {
          name: "RBAC and Access Control",
          explanation: "RBAC controls who can access Kubernetes resources.",
          interview: "Common rejection area due to weak security explanations.",
          difficulty: "Hard",
          references: [
            "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
            "https://kubernetes.io/docs/concepts/security/"
          ]
        },
        {
          name: "Monitoring and Logging",
          explanation: "Monitoring tracks metrics; logging helps debug issues.",
          interview: "Interviewers test how you detect and debug outages.",
          difficulty: "Hard",
          references: [
            "https://kubernetes.io/docs/tasks/debug/debug-cluster/",
            "https://prometheus.io/docs/introduction/overview/"
          ]
        },
        {
          name: "Upgrades and Cluster Maintenance",
          explanation: "Clusters must be upgraded safely without downtime.",
          interview: "Interviewers test rolling upgrades and failure handling.",
          difficulty: "Hard",
          references: [
            "https://kubernetes.io/docs/tasks/administer-cluster/cluster-upgrade/",
            "https://kubernetes.io/docs/concepts/cluster-administration/"
          ]
        }
      ]
    },
    {
      phase: "Phase 6: Kubernetes System Design & Interviews",
      goal: "Think like a platform engineer and clear Kubernetes interviews.",
      topics: [
        {
          name: "Designing Production Kubernetes Clusters",
          explanation: "Design clusters for high availability and fault tolerance.",
          interview: "Interviewers test trade-offs and real-world design decisions.",
          difficulty: "Hard",
          references: [
            "https://kubernetes.io/docs/setup/best-practices/",
            "https://aws.amazon.com/eks/best-practices/"
          ]
        },
        {
          name: "Failure Scenarios and Debugging",
          explanation: "Handle node failures, Pod crashes, and networking issues.",
          interview: "Common trap: theoretical answers without real scenarios.",
          difficulty: "Hard",
          references: [
            "https://kubernetes.io/docs/tasks/debug/",
            "https://learnk8s.io/troubleshooting-deployments"
          ]
        },
        {
          name: "Kubernetes Interview Patterns",
          explanation: "Interviews test reasoning, not memorization of kubectl commands.",
          interview: "Interviewers expect you to explain decisions clearly.",
          difficulty: "Hard",
          references: [
            "https://github.com/bregman-arie/devops-exercises",
            "https://roadmap.sh/kubernetes"
          ]
        }
      ]
    }
  ]
};
