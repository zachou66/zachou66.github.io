/* =============================================================================
   portfolio data  —  THIS IS THE ONLY FILE YOU NEED TO EDIT.

   No build step. Edit, save, then commit + push (or just refresh locally).

   What lives here:
     1) SITE      — your name, headline, and contact links
     2) CERTS     — certifications shown as a row under your header
     3) SKILLS    — the skills grid
     4) SECTIONS  — the three section headings (rename the wording if you like)
     5) PROJECTS  — your projects, grouped by section id

   --- To ADD a project --------------------------------------------------------
   Copy one { ... } block inside the right section list and edit the fields:

     title       : project name (keep it short)
     description : ONE line — what it does / what you did
     tags        : list of tech or skills, e.g. ["Azure", "PowerShell"]
     repo        : link to the repo or write-up.  Use "" to hide the button.

   Mind the commas: every project block ends with a comma, except the last one
   in a list is also fine to have a trailing comma.
   ============================================================================= */

const SITE = {
  name:     "Zachary Ouldsfiya",
  role:     "Junior Systems Administrator / Cloud IT",
  blurb:    "Recent BS in Information Technology (System Administration) from UMass Boston. I build production-style Windows and cloud infrastructure in the lab — Active Directory, PowerShell automation, GPO hardening, and Microsoft 365 / Intune. Looking for a junior sysadmin or cloud support role.",
  location: "",                              // optional, e.g. "Boston, MA"
  email:    "ouldsfiyazachary@gmail.com",
  github:   "https://github.com/zachou66",
  linkedin: "",                              // <-- ADD your LinkedIn URL, e.g. "https://www.linkedin.com/in/you"
  resume:   ""                               // <-- set to "resume.pdf" after you add your PDF file to this folder
};

// Certifications — shown as a row under your header.
//   status: ""  = earned    ·    "In progress" / "Planned" = small label next to it
const CERTS = [
  { name: "CompTIA Security+",                    status: "" },
  { name: "Microsoft AZ-900: Azure Fundamentals", status: "In progress" }
  // Add more, e.g.:
  // ,{ name: "AWS Certified Cloud Practitioner", status: "Planned" }
];

// Skills snapshot — a scannable grid, grouped by area. Edit freely.
const SKILLS = [
  { group: "Windows / Server",        items: ["Windows Server 2022", "Active Directory", "Group Policy", "DNS / DHCP", "AGDLP model"] },
  { group: "Cloud / Identity",        items: ["Microsoft 365", "Entra ID", "Entra Connect (hybrid)", "Azure fundamentals"] },
  { group: "Endpoint",                items: ["Intune / MDM", "Windows 11", "Hybrid Azure AD Join", "Compliance policy"] },
  { group: "Scripting & Automation",  items: ["PowerShell", "Git", "Idempotent scripting", "NTFS ACLs"] },
  { group: "Practices",               items: ["dcdiag / gpresult verification", "Troubleshooting & triage", "Documentation"] }
];

// Section ids must match the keys used in PROJECTS below.
const SECTIONS = [
  {
    id:    "azure",
    title: "Azure / Windows Server",
    blurb: "Identity, directory services, and server infrastructure — on-prem and in the Microsoft cloud."
  },
  {
    id:    "aws",
    title: "AWS",
    blurb: "Compute, storage, and networking on Amazon Web Services."
  },
  {
    id:    "endpoint",
    title: "Windows / Endpoint",
    blurb: "Device management, automation, and day-to-day support for Windows endpoints."
  }
];

const PROJECTS = {

  // ---- Azure / Windows Server ----------------------------------------------
  azure: [
    {
      title:       "Enterprise Windows Server Infrastructure Lab",
      description: "End-to-end Windows Server 2022 build: Active Directory (AGDLP), PowerShell user provisioning, CIS-aligned GPO hardening, and Microsoft 365 hybrid identity with Intune.",
      tags:        ["Windows Server", "Active Directory", "PowerShell", "Group Policy", "Entra ID", "Intune"],
      repo:        "https://github.com/zachou66/active-directory-homelab"
    },
    {
      title:       "Cloud Identity & Access Lab (Entra ID)",
      description: "Cloud-only Microsoft Entra ID lab: idempotent Graph PowerShell user provisioning, MFA and Conditional Access (report-only first), self-service password reset, and SAML SSO to a SaaS app.",
      tags:        ["Entra ID", "Conditional Access", "MFA", "Graph PowerShell", "SAML SSO"],
      repo:        "https://github.com/zachou66/cloud-identity-lab"
    }
    // To add another project, copy this template, uncomment it, and fill it in:
    // ,{
    //   title:       "Project name",
    //   description: "One line on what it does / what you did.",
    //   tags:        ["Azure", "PowerShell"],
    //   repo:        "https://github.com/zachou66/your-repo"
    // }
  ],

  // ---- AWS ------------------------------------------------------------------
  aws: [
    {
      // EXAMPLE — replace with your own, or delete this block.
      title:       "Static Site on S3 + CloudFront",
      description: "Hosted a static website on S3 behind a CloudFront CDN with HTTPS.",
      tags:        ["AWS", "S3", "CloudFront", "IAM"],
      repo:        ""
    },
    {
      // EXAMPLE — replace with your own, or delete this block.
      title:       "EC2 Web Server",
      description: "Launched and hardened a Linux EC2 instance behind a security group serving a web app.",
      tags:        ["AWS", "EC2", "VPC", "Linux"],
      repo:        ""
    }
  ],

  // ---- Windows / Endpoint ---------------------------------------------------
  endpoint: [
    {
      // EXAMPLE — replace with your own, or delete this block.
      title:       "Intune Device Enrollment Lab",
      description: "Enrolled and managed Windows 11 devices with compliance and configuration policies in Intune.",
      tags:        ["Intune", "MDM", "Windows 11", "Compliance"],
      repo:        ""
    },
    {
      // EXAMPLE — replace with your own, or delete this block.
      title:       "PowerShell Endpoint Inventory",
      description: "Script that collects hardware, OS, and installed-software inventory across machines into a CSV.",
      tags:        ["PowerShell", "Automation", "Reporting"],
      repo:        ""
    }
  ]

};
