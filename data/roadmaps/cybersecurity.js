export const cyberSecurityRoadmap = {
  slug: "cybersecurity",
  title: "Cyber Security Roadmap (Beginner → Interview-Ready)",
  description: "A fundamentals-first cybersecurity roadmap focused on real attack vectors, defense mechanisms, and interview expectations at product-based companies.",
  phases: [
    {
      phase: "Phase 1: Computer, OS & Networking Foundations",
      goal: "Build absolute fundamentals required to understand how systems get attacked and defended.",
      topics: [
        {
          name: "How Computers Work",
          explanation: "Understand CPU, memory, storage, and how programs execute on a machine.",
          interview: "Interviewers test whether you understand what actually happens when a program runs.",
          difficulty: "Easy",
          references: [
            "https://www.computerhope.com/jargon/c/computer.htm",
            "https://www.cs.cmu.edu/~213/"
          ]
        },
        {
          name: "Operating System Basics",
          explanation: "OS manages processes, memory, files, and permissions.",
          interview: "Common trap: not understanding user vs kernel space.",
          difficulty: "Easy",
          references: [
            "https://www.geeksforgeeks.org/operating-systems/",
            "https://pages.cs.wisc.edu/~remzi/OSTEP/"
          ]
        },
        {
          name: "Networking Fundamentals",
          explanation: "Covers IP, ports, DNS, TCP/UDP, and basic packet flow.",
          interview: "Very common: explain how data moves from one machine to another.",
          difficulty: "Easy",
          references: [
            "https://www.cloudflare.com/learning/network-layer/what-is-a-computer-network/",
            "https://www.khanacademy.org/computing/computer-science/internet-intro"
          ]
        }
      ]
    },
    {
      phase: "Phase 2: Security Basics & Threat Landscape",
      goal: "Understand what security means and how systems are commonly attacked.",
      topics: [
        {
          name: "Core Security Principles",
          explanation: "CIA triad: Confidentiality, Integrity, and Availability.",
          interview: "Interviewers often ask to explain CIA with real-world examples.",
          difficulty: "Easy",
          references: [
            "https://www.cisa.gov/cybersecurity",
            "https://www.ibm.com/topics/cia-triad"
          ]
        },
        {
          name: "Types of Cyber Attacks",
          explanation: "Malware, phishing, brute force, and social engineering attacks.",
          interview: "Interviewers test awareness of common real-world attacks.",
          difficulty: "Easy",
          references: [
            "https://www.kaspersky.com/resource-center/threats",
            "https://www.crowdstrike.com/cybersecurity-101/"
          ]
        },
        {
          name: "Threat Modeling",
          explanation: "Identifying assets, threats, and attack surfaces.",
          interview: "Often tested by asking how you would secure a system.",
          difficulty: "Medium",
          references: [
            "https://owasp.org/www-community/Threat_Modeling",
            "https://learn.microsoft.com/security/engineering/threat-modeling"
          ]
        }
      ]
    },
    {
      phase: "Phase 3: Application & Web Security",
      goal: "Secure applications against common vulnerabilities.",
      topics: [
        {
          name: "Web Application Basics",
          explanation: "Understand HTTP, cookies, sessions, and authentication flow.",
          interview: "Interviewers test request-response flow and session handling.",
          difficulty: "Medium",
          references: [
            "https://developer.mozilla.org/en-US/docs/Web/HTTP",
            "https://portswigger.net/web-security"
          ]
        },
        {
          name: "OWASP Top 10",
          explanation: "Most critical web application security risks.",
          interview: "Very common rejection area if OWASP Top 10 is weak.",
          difficulty: "Medium",
          references: [
            "https://owasp.org/www-project-top-ten/",
            "https://portswigger.net/web-security/learning-path"
          ]
        },
        {
          name: "Authentication & Authorization Security",
          explanation: "Securing login systems, tokens, and access control.",
          interview: "Interviewers test JWT flaws, session fixation, and access leaks.",
          difficulty: "Hard",
          references: [
            "https://cheatsheetseries.owasp.org/",
            "https://jwt.io/introduction"
          ]
        }
      ]
    },
    {
      phase: "Phase 4: Network & Infrastructure Security",
      goal: "Protect systems, servers, and networks from attacks.",
      topics: [
        {
          name: "Firewalls & Network Segmentation",
          explanation: "Firewalls control traffic; segmentation limits blast radius.",
          interview: "Interviewers ask how you would secure internal networks.",
          difficulty: "Medium",
          references: [
            "https://www.cloudflare.com/learning/security/what-is-a-firewall/",
            "https://www.cisco.com/c/en/us/products/security/what-is-network-security.html"
          ]
        },
        {
          name: "Encryption & Cryptography Basics",
          explanation: "Encryption protects data in transit and at rest.",
          interview: "Common trap: confusing hashing with encryption.",
          difficulty: "Hard",
          references: [
            "https://www.khanacademy.org/computing/computer-science/cryptography",
            "https://www.cloudflare.com/learning/ssl/what-is-encryption/"
          ]
        },
        {
          name: "Cloud Security Fundamentals",
          explanation: "Shared responsibility model and cloud attack surfaces.",
          interview: "Interviewers test understanding of cloud misconfigurations.",
          difficulty: "Hard",
          references: [
            "https://aws.amazon.com/security/",
            "https://cloud.google.com/security"
          ]
        }
      ]
    },
    {
      phase: "Phase 5: Detection, Monitoring & Incident Response",
      goal: "Detect attacks and respond effectively to incidents.",
      topics: [
        {
          name: "Logging & Monitoring",
          explanation: "Logs help detect anomalies and investigate incidents.",
          interview: "Interviewers test how you detect suspicious behavior.",
          difficulty: "Hard",
          references: [
            "https://www.elastic.co/what-is/siem",
            "https://www.splunk.com/en_us/solutions/what-is-siem.html"
          ]
        },
        {
          name: "Incident Response Process",
          explanation: "Steps to detect, contain, eradicate, and recover from attacks.",
          interview: "Often tested with breach-handling scenarios.",
          difficulty: "Hard",
          references: [
            "https://www.cisa.gov/incident-response",
            "https://www.sans.org/incident-response/"
          ]
        },
        {
          name: "Vulnerability Assessment",
          explanation: "Identify and prioritize security weaknesses.",
          interview: "Interviewers test scanning vs penetration testing differences.",
          difficulty: "Hard",
          references: [
            "https://owasp.org/www-community/Vulnerability_Scanning_Tools",
            "https://nvd.nist.gov/"
          ]
        }
      ]
    },
    {
      phase: "Phase 6: Security Engineering & Interviews",
      goal: "Think like a security engineer and clear cybersecurity interviews.",
      topics: [
        {
          name: "Secure System Design",
          explanation: "Design systems with security built in from the start.",
          interview: "Interviewers test trade-offs and defense-in-depth thinking.",
          difficulty: "Hard",
          references: [
            "https://martinfowler.com/articles/security-design.html",
            "https://owasp.org/www-project-top-ten/"
          ]
        },
        {
          name: "Ethical Hacking & Penetration Testing",
          explanation: "Simulating attacks to find vulnerabilities responsibly.",
          interview: "Interviewers test methodology, not hacking tricks.",
          difficulty: "Hard",
          references: [
            "https://www.offensive-security.com/",
            "https://www.hackthebox.com/"
          ]
        },
        {
          name: "Cyber Security Interview Patterns",
          explanation: "Combines OS, networking, application security, and scenarios.",
          interview: "Interviewers value reasoning and real-world thinking.",
          difficulty: "Hard",
          references: [
            "https://www.sans.org/blog/",
            "https://www.coursera.org/articles/cybersecurity-interview-questions"
          ]
        }
      ]
    }
  ]
};
