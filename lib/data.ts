export interface Project {
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    tags: string[];

    features?: string[];
    techStack?: string[];
}

export const projects: Project[] = [
    {
        slug: "tcrs-tenant-compliance",
        title: "TCRS - Tenant Compliance Reporting Tool",
        shortDescription: "Automated compliance reporting tool for multi-tenant cloud environments.",
        fullDescription: "The TCRS - Tenant Compliance Reporting Tool is a comprehensive solution designed to automate the compliance reporting process for large-scale, multi-tenant cloud environments. It integrates directly with cloud providers to gather real-time configuration data and compares it against established security baselines and regulatory standards.",
        tags: ["Python", "Azure", "Compliance"],
        features: [
            "Automated daily compliance scans",
            "Multi-tenant support with granular reporting",
            "Integration with Azure Policy and Graph API",
            "Customizable compliance frameworks"
        ],
        techStack: ["Python", "Azure Functions", "PostgresDB", "Open Policy Agent", "Rego", "Power BI"],

    },
    {
        slug: "cross-tenant-migration",
        title: "Cross-Tenant Migration Orchestrator",
        shortDescription: "Automation script to move Identity workloads and data across tenants.",
        fullDescription: "Leveraging Microsoft's preview to CTIM, this project involved developing a custom automation script to orchestrate the movement of Identity workloads and data across tenants. It handles the complexities of cross-tenant migration, ensuring data integrity and seamless transition of identity assets.",
        tags: ["PowerShell", "CTIM", "Identity"],
        features: [
            "Automated Identity workload migration",
            "Cross-tenant data movement",
            "Integration with Microsoft CTIM preview",
            "PowerShell-based orchestration"
        ],
        techStack: ["PowerShell", "Microsoft CTIM", "Azure AD", "Scripting"],

    },
    {
        slug: "agentless-nac",
        title: "Agentless NAC System",
        shortDescription: "Network Access Control system that operates without agent installation.",
        fullDescription: "This Agentless Network Access Control (NAC) system provides visibility and control over devices connecting to the network without requiring software agents. It utilizes passive traffic analysis and active probing techniques to fingerprint devices, assess their security posture, and enforce access policies.",
        tags: ["Network Security", "Python", "Scapy"],
        features: [
            "Device fingerprinting and classification",
            "Passive traffic analysis",
            "Automated VLAN assignment",
            "Rogue device detection"
        ],
        techStack: ["Python", "Scapy", "Linux (iptables)", "Docker"],

    },
    {
        slug: "ssh-attack-analyzer",
        title: "SSH Attack Pattern Analyzer",
        shortDescription: "Log analysis tool that identifies brute-force patterns.",
        fullDescription: "This tool analyzes SSH authentication logs to identify brute-force attack patterns and coordinate distributed attacks. It dynamically updates firewall rules to block malicious IP addresses in real-time and shares threat intelligence across managed nodes.",
        tags: ["Python", "Log Analysis", "Linux"],
        features: [
            "Real-time log parsing",
            "Brute-force pattern recognition",
            "Dynamic firewall (iptables) updates",
            "Geo-IP analysis of attackers"
        ],
        techStack: ["Python", "Regex", "Linux Systemd", "SQLite"],

    },
    {
        slug: "ai-content-detection",
        title: "AI-Based Explicit Content Detection",
        shortDescription: "Content moderation system using computer vision.",
        fullDescription: "A scalable content moderation system that leverages computer vision models to detect and flag explicit or inappropriate content in user-uploaded media. It is designed to integrate with existing content management systems to automate the moderation workflow.",
        tags: ["AI/ML", "Python", "OpenCV"],
        features: [
            "Real-time image and video analysis",
            "High-accuracy classification models",
            "API for easy integration",
            "Admin dashboard for manual review"
        ],
        techStack: ["Python", "TensorFlow/Keras", "OpenCV", "FastAPI"],

    },
];
