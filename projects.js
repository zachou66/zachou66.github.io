/* =============================================================================
   portfolio data  —  THIS IS THE ONLY FILE YOU NEED TO EDIT.

   No build step. Edit, save, then commit + push (or just refresh locally).

   Three things live here:
     1) SITE      — your name, headline, and contact links
     2) SECTIONS  — the three section headings (rename the wording if you like)
     3) PROJECTS  — your projects, grouped by section id

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
  name:     "Zachary Ouldsfiya",            // <-- edit if this isn't right
  role:     "Junior Systems Administrator / Cloud IT",
  blurb:    "I build, break, and document homelabs to learn cloud and Windows infrastructure hands-on. Currently looking for a junior sysadmin / cloud support role.",
  location: "",                              // optional, e.g. "Remote · UK"
  email:    "ouldsfiyazachary@gmail.com",
  github:   "https://github.com/zachou66",
  linkedin: ""                               // optional, e.g. "https://www.linkedin.com/in/you"
};

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
      title:       "Active Directory Homelab",
      description: "Stood up a Windows Server domain controller with users, OUs, and Group Policy in a virtualized lab.",
      tags:        ["Windows Server", "Active Directory", "Group Policy", "DNS", "PowerShell"],
      repo:        "https://github.com/zachou66/active-directory-homelab"
    },
    {
      // EXAMPLE — replace with your own, or delete this block.
      title:       "Entra ID / Azure AD Lab",
      description: "Configured cloud identities, groups, and conditional access in a Microsoft Entra tenant.",
      tags:        ["Azure", "Entra ID", "Conditional Access", "MFA"],
      repo:        ""
    }
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
