export const networking = {
  slug: "networking",
  title: "Computer Networks",
  description:
    "A complete interview-focused Computer Networks question bank covering networking fundamentals, protocols, OSI/TCP-IP models, and real-world system behavior tested in product-based companies.",

  phases: [
    {
      level: "Beginner",
      questions: [
        {
          question: "What is a computer network?",
          answer:
            "A computer network is a collection of interconnected devices that communicate with each other to share data and resources. Networks enable communication, resource sharing, and scalability.",
          interviewer:
            "They test whether you understand networking beyond just the internet.",
          references: ["https://www.geeksforgeeks.org/basics-computer-networking/"],
        },
        {
          question: "Why do we need computer networks?",
          answer:
            "Networks allow data sharing, resource sharing, communication, and centralized management, which are not possible with standalone systems.",
          interviewer:
            "They often compare single systems vs networked systems.",
          references: ["https://www.geeksforgeeks.org/advantages-and-disadvantages-of-computer-network/"],
        },
        {
          question: "What is a node?",
          answer:
            "A node is any device connected to a network that can send, receive, or forward data.",
          interviewer:
            "Basic terminology clarity.",
          references: ["https://www.geeksforgeeks.org/nodes-in-computer-network/"],
        },
        {
          question: "What is a link?",
          answer:
            "A link is a communication channel that connects two nodes in a network.",
          interviewer:
            "Physical vs logical link understanding.",
          references: ["https://www.geeksforgeeks.org/data-communication-basics/"],
        },
        {
          question: "What is bandwidth?",
          answer:
            "Bandwidth is the maximum data transfer capacity of a network connection per unit time.",
          interviewer:
            "They test confusion between bandwidth and speed.",
          references: ["https://www.geeksforgeeks.org/difference-between-bandwidth-and-throughput/"],
        },
        {
          question: "What is latency?",
          answer:
            "Latency is the time taken for data to travel from source to destination.",
          interviewer:
            "Often confused with bandwidth.",
          references: ["https://www.geeksforgeeks.org/network-latency/"],
        },
        {
          question: "What is throughput?",
          answer:
            "Throughput is the actual amount of data successfully transmitted over a network.",
          interviewer:
            "Real-world performance metric.",
          references: ["https://www.geeksforgeeks.org/difference-between-bandwidth-and-throughput/"],
        },
        {
          question: "What is a protocol?",
          answer:
            "A protocol is a set of rules that define how data is transmitted and received over a network.",
          interviewer:
            "Foundation of networking.",
          references: ["https://www.geeksforgeeks.org/network-protocols/"],
        },
        {
          question: "What is the Internet?",
          answer:
            "The Internet is a global network of interconnected networks that communicate using TCP/IP.",
          interviewer:
            "They expect protocol mention.",
          references: ["https://www.geeksforgeeks.org/what-is-internet/"],
        },
        {
          question: "What is an IP address?",
          answer:
            "An IP address uniquely identifies a device on a network.",
          interviewer:
            "IPv4 vs IPv6 follow-up.",
          references: ["https://www.geeksforgeeks.org/ip-addressing-introduction/"],
        },

        {
          question: "What is IPv4?",
          answer:
            "IPv4 is a 32-bit addressing scheme allowing around 4.3 billion unique addresses.",
          interviewer:
            "Address exhaustion discussion.",
          references: ["https://www.geeksforgeeks.org/introduction-to-ipv4/"],
        },
        {
          question: "What is IPv6?",
          answer:
            "IPv6 is a 128-bit addressing scheme designed to overcome IPv4 limitations.",
          interviewer:
            "Why IPv6 exists.",
          references: ["https://www.geeksforgeeks.org/ipv6-introduction/"],
        },
        {
          question: "What is MAC address?",
          answer:
            "A MAC address is a hardware identifier assigned to network interfaces.",
          interviewer:
            "Layer 2 vs Layer 3 distinction.",
          references: ["https://www.geeksforgeeks.org/mac-address-in-computer-network/"],
        },
        {
          question: "What is a LAN?",
          answer:
            "LAN is a network that covers a small geographical area like an office or home.",
          interviewer:
            "Basic network types.",
          references: ["https://www.geeksforgeeks.org/types-of-area-networks-lan-man-and-wan/"],
        },
        {
          question: "What is a WAN?",
          answer:
            "WAN covers a large geographical area and connects multiple LANs.",
          interviewer:
            "Internet as WAN.",
          references: ["https://www.geeksforgeeks.org/types-of-area-networks-lan-man-and-wan/"],
        },
        {
          question: "What is a router?",
          answer:
            "A router forwards packets between different networks.",
          interviewer:
            "Layer identification.",
          references: ["https://www.geeksforgeeks.org/router-in-computer-network/"],
        },
        {
          question: "What is a switch?",
          answer:
            "A switch forwards frames within a LAN using MAC addresses.",
          interviewer:
            "Switch vs hub.",
          references: ["https://www.geeksforgeeks.org/difference-between-hub-and-switch/"],
        },
        {
          question: "What is a hub?",
          answer:
            "A hub broadcasts data to all connected devices without filtering.",
          interviewer:
            "Why hubs are obsolete.",
          references: ["https://www.geeksforgeeks.org/difference-between-hub-and-switch/"],
        },
        {
          question: "What is a packet?",
          answer:
            "A packet is a unit of data transmitted over a network.",
          interviewer:
            "Packet vs frame.",
          references: ["https://www.geeksforgeeks.org/what-is-packet/"],
        },
        {
          question: "What is a frame?",
          answer:
            "A frame is a data unit at the data link layer.",
          interviewer:
            "Layer mapping.",
          references: ["https://www.geeksforgeeks.org/data-link-layer/"],
        },
        {
          question: "What is topology?",
          answer:
            "Topology defines how nodes are arranged in a network.",
          interviewer:
            "Star, bus, mesh basics.",
          references: ["https://www.geeksforgeeks.org/network-topologies/"],
        },
        {
          question: "What is star topology?",
          answer:
            "All devices connect to a central node.",
          interviewer:
            "Failure point discussion.",
          references: ["https://www.geeksforgeeks.org/star-topology/"],
        },
        {
          question: "What is bus topology?",
          answer:
            "All devices share a single communication line.",
          interviewer:
            "Collision discussion.",
          references: ["https://www.geeksforgeeks.org/bus-topology/"],
        },
        {
          question: "What is mesh topology?",
          answer:
            "Each device connects to multiple other devices.",
          interviewer:
            "Reliability vs cost.",
          references: ["https://www.geeksforgeeks.org/mesh-topology/"],
        },
        {
          question: "What is network security?",
          answer:
            "Network security protects data and systems from unauthorized access.",
          interviewer:
            "High-level awareness.",
          references: ["https://www.geeksforgeeks.org/network-security/"],
        }
      ],
    },

    {
      level: "Intermediate",
      questions: [
        {
          question: "Explain OSI model.",
          answer:
            "OSI model has 7 layers that standardize network communication from physical transmission to application services.",
          interviewer:
            "Layer-by-layer clarity.",
          references: ["https://www.geeksforgeeks.org/open-systems-interconnection-model-osi/"],
        },
        {
          question: "Explain TCP/IP model.",
          answer:
            "TCP/IP is a practical 4-layer model used in real networks.",
          interviewer:
            "Mapping with OSI.",
          references: ["https://www.geeksforgeeks.org/tcp-ip-model/"],
        },
        {
          question: "Difference between OSI and TCP/IP?",
          answer:
            "OSI is conceptual; TCP/IP is practical and widely implemented.",
          interviewer:
            "Layer abstraction clarity.",
          references: ["https://www.geeksforgeeks.org/difference-between-osi-and-tcp-ip-model/"],
        },
        {
          question: "What is TCP?",
          answer:
            "TCP is a connection-oriented, reliable transport protocol.",
          interviewer:
            "Reliability mechanisms.",
          references: ["https://www.geeksforgeeks.org/transmission-control-protocol-tcp/"],
        },
        {
          question: "What is UDP?",
          answer:
            "UDP is a connectionless, unreliable but fast transport protocol.",
          interviewer:
            "Use cases like streaming.",
          references: ["https://www.geeksforgeeks.org/user-datagram-protocol-udp/"],
        },

        {
          question: "Difference between TCP and UDP?",
          answer:
            "TCP ensures reliability and order; UDP prioritizes speed.",
          interviewer:
            "Real-world examples.",
          references: ["https://www.geeksforgeeks.org/difference-between-tcp-and-udp/"],
        },
        {
          question: "What is three-way handshake?",
          answer:
            "TCP connection establishment using SYN, SYN-ACK, and ACK.",
          interviewer:
            "Very common question.",
          references: ["https://www.geeksforgeeks.org/tcp-3-way-handshake-process/"],
        },
        {
          question: "What is flow control?",
          answer:
            "Flow control ensures sender does not overwhelm receiver.",
          interviewer:
            "Window size concepts.",
          references: ["https://www.geeksforgeeks.org/flow-control-in-computer-networks/"],
        },
        {
          question: "What is congestion control?",
          answer:
            "Congestion control prevents network overload.",
          interviewer:
            "Slow start, congestion avoidance.",
          references: ["https://www.geeksforgeeks.org/congestion-control-in-computer-networks/"],
        },
        {
          question: "What is ARP?",
          answer:
            "ARP maps IP addresses to MAC addresses.",
          interviewer:
            "Layer crossing protocol.",
          references: ["https://www.geeksforgeeks.org/address-resolution-protocol-arp/"],
        },

        {
          question: "What is DNS?",
          answer:
            "DNS resolves domain names to IP addresses.",
          interviewer:
            "Resolution flow.",
          references: ["https://www.geeksforgeeks.org/domain-name-system-dns/"],
        },
        {
          question: "What is HTTP?",
          answer:
            "HTTP is a stateless application-layer protocol for web communication.",
          interviewer:
            "Stateless nature.",
          references: ["https://www.geeksforgeeks.org/http-full-form/"],
        },
        {
          question: "What is HTTPS?",
          answer:
            "HTTPS secures HTTP using encryption.",
          interviewer:
            "TLS explanation.",
          references: ["https://www.geeksforgeeks.org/https-full-form/"],
        },
        {
          question: "What is FTP?",
          answer:
            "FTP transfers files between client and server.",
          interviewer:
            "Active vs passive.",
          references: ["https://www.geeksforgeeks.org/file-transfer-protocol-ftp/"],
        },
        {
          question: "What is SMTP?",
          answer:
            "SMTP sends emails between servers.",
          interviewer:
            "Mail flow understanding.",
          references: ["https://www.geeksforgeeks.org/simple-mail-transfer-protocol-smtp/"],
        },

        {
          question: "What is POP3?",
          answer:
            "POP3 retrieves emails from a mail server.",
          interviewer:
            "POP vs IMAP.",
          references: ["https://www.geeksforgeeks.org/pop3-protocol/"],
        },
        {
          question: "What is IMAP?",
          answer:
            "IMAP synchronizes emails across devices.",
          interviewer:
            "Stateful protocol.",
          references: ["https://www.geeksforgeeks.org/internet-message-access-protocol-imap/"],
        },
        {
          question: "What is subnetting?",
          answer:
            "Subnetting divides a network into smaller networks.",
          interviewer:
            "Address efficiency.",
          references: ["https://www.geeksforgeeks.org/subnetting-in-computer-network/"],
        },
        {
          question: "What is CIDR?",
          answer:
            "CIDR allows flexible IP address allocation.",
          interviewer:
            "Prefix notation.",
          references: ["https://www.geeksforgeeks.org/classless-inter-domain-routing-cidr/"],
        },
        {
          question: "What is NAT?",
          answer:
            "NAT translates private IPs to public IPs.",
          interviewer:
            "IPv4 conservation.",
          references: ["https://www.geeksforgeeks.org/network-address-translation-nat/"],
        },

        {
          question: "What is firewall?",
          answer:
            "Firewall monitors and controls network traffic.",
          interviewer:
            "Network security basics.",
          references: ["https://www.geeksforgeeks.org/firewall-in-computer-network/"],
        },
        {
          question: "What is proxy server?",
          answer:
            "Proxy acts as an intermediary between client and server.",
          interviewer:
            "Security & caching.",
          references: ["https://www.geeksforgeeks.org/proxy-server/"],
        },
        {
          question: "What is VPN?",
          answer:
            "VPN creates a secure tunnel over public networks.",
          interviewer:
            "Remote access.",
          references: ["https://www.geeksforgeeks.org/virtual-private-network-vpn/"],
        },
        {
          question: "What is load balancing?",
          answer:
            "Load balancing distributes traffic across servers.",
          interviewer:
            "High availability.",
          references: ["https://www.geeksforgeeks.org/load-balancing-in-computer-network/"],
        },
        {
          question: "What is socket?",
          answer:
            "Socket is an endpoint for communication between processes.",
          interviewer:
            "Programming crossover.",
          references: ["https://www.geeksforgeeks.org/socket-programming-in-computer-network/"],
        }
      ],
    },

    {
      level: "Hard",
      questions: [
        {
          question: "Explain TCP congestion control phases.",
          answer:
            "Includes slow start, congestion avoidance, fast retransmit, and fast recovery.",
          interviewer:
            "Deep TCP internals.",
          references: ["https://www.geeksforgeeks.org/tcp-congestion-control/"],
        },
        {
          question: "What is head-of-line blocking?",
          answer:
            "Delay caused by blocked packets in ordered protocols.",
          interviewer:
            "HTTP/2 relevance.",
          references: ["https://www.cloudflare.com/learning/performance/what-is-head-of-line-blocking/"],
        },
        {
          question: "What is HTTP/2?",
          answer:
            "HTTP/2 improves performance via multiplexing and header compression.",
          interviewer:
            "Modern web protocol.",
          references: ["https://www.cloudflare.com/learning/performance/http2/"],
        },
        {
          question: "What is HTTP/3?",
          answer:
            "HTTP/3 uses QUIC over UDP for reduced latency.",
          interviewer:
            "UDP-based reliability.",
          references: ["https://www.cloudflare.com/learning/performance/what-is-http3/"],
        },
        {
          question: "What is QUIC?",
          answer:
            "QUIC is a transport protocol built on UDP with reduced latency.",
          interviewer:
            "Next-gen transport.",
          references: ["https://www.cloudflare.com/learning/protocols/quic/"],
        },

        {
          question: "Explain TLS handshake.",
          answer:
            "TLS handshake establishes encryption keys securely.",
          interviewer:
            "Security internals.",
          references: ["https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/"],
        },
        {
          question: "What is SYN flood?",
          answer:
            "A DoS attack exploiting TCP handshake.",
          interviewer:
            "Security awareness.",
          references: ["https://www.geeksforgeeks.org/syn-flood-attack/"],
        },
        {
          question: "What is packet sniffing?",
          answer:
            "Capturing packets from a network.",
          interviewer:
            "Security risks.",
          references: ["https://www.geeksforgeeks.org/packet-sniffing/"],
        },
        {
          question: "Explain routing algorithms.",
          answer:
            "Routing algorithms determine best paths for packet delivery.",
          interviewer:
            "Distance vs link state.",
          references: ["https://www.geeksforgeeks.org/routing-algorithms-in-computer-network/"],
        },
        {
          question: "What is RIP?",
          answer:
            "RIP is a distance-vector routing protocol.",
          interviewer:
            "Hop count limitation.",
          references: ["https://www.geeksforgeeks.org/routing-information-protocol-rip/"],
        },

        {
          question: "What is OSPF?",
          answer:
            "OSPF is a link-state routing protocol.",
          interviewer:
            "Enterprise networks.",
          references: ["https://www.geeksforgeeks.org/open-shortest-path-first-ospf/"],
        },
        {
          question: "What is BGP?",
          answer:
            "BGP routes data between autonomous systems.",
          interviewer:
            "Internet backbone.",
          references: ["https://www.geeksforgeeks.org/border-gateway-protocol-bgp/"],
        },
        {
          question: "What is MTU?",
          answer:
            "MTU is the maximum packet size supported by a network.",
          interviewer:
            "Fragmentation issues.",
          references: ["https://www.geeksforgeeks.org/maximum-transmission-unit-mtu/"],
        },
        {
          question: "What is fragmentation?",
          answer:
            "Breaking packets into smaller units.",
          interviewer:
            "IP layer behavior.",
          references: ["https://www.geeksforgeeks.org/fragmentation-in-networking/"],
        },
        {
          question: "What is jitter?",
          answer:
            "Variation in packet delay.",
          interviewer:
            "Real-time communication.",
          references: ["https://www.geeksforgeeks.org/jitter-in-networking/"],
        },

        {
          question: "What is anycast?",
          answer:
            "Routing traffic to the nearest server.",
          interviewer:
            "CDN concept.",
          references: ["https://www.cloudflare.com/learning/cdn/glossary/anycast/"],
        },
        {
          question: "Explain CDN.",
          answer:
            "CDN distributes content across geographically dispersed servers.",
          interviewer:
            "Performance optimization.",
          references: ["https://www.cloudflare.com/learning/cdn/what-is-a-cdn/"],
        },
        {
          question: "What is network partition?",
          answer:
            "Loss of connectivity between parts of a network.",
          interviewer:
            "Distributed systems.",
          references: ["https://www.geeksforgeeks.org/network-partition/"],
        },
        {
          question: "Explain backpressure.",
          answer:
            "Mechanism to slow down senders during congestion.",
          interviewer:
            "Flow control depth.",
          references: ["https://www.geeksforgeeks.org/backpressure-in-networking/"],
        },
        {
          question: "How does networking impact system design?",
          answer:
            "Latency, bandwidth, and failures influence architecture decisions.",
          interviewer:
            "System-level thinking.",
          references: ["https://www.geeksforgeeks.org/networking-in-system-design/"],
        }
      ],
    }
  ],
};
