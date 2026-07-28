/**
 * ============================================================
 *  PORTFOLIO DATA CONFIGURATION
 * ============================================================
 *  Edit this file to update ALL content on the portfolio.
 *  No need to touch HTML or other JS files.
 *
 *  INSTRUCTIONS:
 *  - To add a project:   push a new object into `projects`
 *  - To add a skill:     push into the appropriate category
 *  - To add experience:  push a new object into `experience`
 *  - To change personal info: edit the `personal` section
 * ============================================================
 */

const PORTFOLIO_DATA = {

  /* ── Personal Information ───────────────────────────────── */
  personal: {
    firstName: "Hirmas",
    lastName: "Qiemsa",
    fullName: "Hirmas Qiemsa Nafi Nurhusna",
    titles: [
      "Junior Web Programmer",
      "Laravel Developer",
      "PHP Enthusiast",
      "Problem Solver"
    ],
    summary:
      "Junior Web Programmer with specialization in PHP and Laravel, experienced in developing end-to-end web information systems. Proficient in managing relational databases, optimizing business process automation, and possessing foundational knowledge of network infrastructure and hardware maintenance. Demonstrates strong problem-solving capabilities and excellent adaptability in dynamic work environments.",
    location: "Tegal, Central Java, Indonesia",
    email: "hirmasn9@gmail.com",
    phone: "+6285876909228",
    photo: "assets/images/profile.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/hirmas-nafi/",
      github: "https://github.com/HirmasQiemsa",
      whatsapp: "https://wa.me/6285876909228"
    },
    resumeUrl: "#" // Add your resume download link here
  },

  /* ── Technical Skills ───────────────────────────────────── */
  skills: [
    {
      category: "Programming Languages",
      icon: "code",
      items: [
        { name: "PHP",        level: 85 },
        { name: "JavaScript", level: 70 },
        { name: "SQL",        level: 75 },
        { name: "Python",     level: 55 },
        { name: "Java",       level: 55 }
      ]
    },
    {
      category: "Frameworks",
      icon: "layers",
      items: [
        { name: "Laravel",   level: 85 },
        { name: "Bootstrap", level: 75 },
        { name: "Tailwind",  level: 65 }
      ]
    },
    {
      category: "Tools & Infrastructure",
      icon: "tool",
      items: [
        { name: "MySQL",             level: 80 },
        { name: "Git & GitHub",      level: 75 },
        { name: "Postman",           level: 70 },
        { name: "LAN Configuration", level: 65 },
        { name: "RJ45 Crimping",     level: 60 }
      ]
    },
    {
      category: "Languages",
      icon: "globe",
      items: [
        { name: "Indonesian", level: 100 },
        { name: "English",    level: 65 }
      ]
    }
  ],

  /* ── Professional Experience ────────────────────────────── */
  experience: [
    {
      title: "Youth Empowerment Division — Internship",
      company: "DISPORA Semarang",
      period: "Sep 2024 – Oct 2024",
      description: [
        "Managed administrative data for various city-level youth events.",
        "Coordinated event schedules and systematically documented activities."
      ]
    },
    {
      title: "Gerakan Nasional 1000 Startup Digital",
      company: "MSIB Batch 6",
      period: "Feb 2024 – Jun 2024",
      description: [
        "Developed Minimum Viable Product (MVP) as part of development team, focusing on implementing core features and basic functionality of a children's nutrition application.",
        "Collaborated intensively in cross-functional teams (Hustler, Hipster, Hacker) to formulate business strategy and design system architecture."
      ]
    }
  ],

  /* ── Projects ───────────────────────────────────────────── */
  projects: [
    {
      name: "e-Sewa",
      subtitle: "Facility Rental Information System",
      description:
        "Web-based rental management system developed using Laravel and MySQL, with focus on optimizing business processes and feature management through Scrum methodology.",
      techStack: ["Laravel", "MySQL", "Bootstrap", "PHP"],
      image: "assets/images/project-esewa.jpg",
      github: "#",
      demo: "#"
    }
    /*
     * ── Add more projects below ──────────────────────────
     * Copy this template and fill in your details:
     *
     * {
     *   name: "Project Name",
     *   subtitle: "Short Tagline",
     *   description: "What this project does...",
     *   techStack: ["Tech1", "Tech2"],
     *   image: "assets/images/project-name.jpg",
     *   github: "https://github.com/...",
     *   demo: "https://..."
     * }
     */
  ],

  /* ── Education ──────────────────────────────────────────── */
  education: [
    {
      school: "Universitas Dian Nuswantoro",
      location: "Semarang",
      degree: "Bachelor of Computer Science",
      gpa: "3.38",
      credits: "145",
      period: "Sep 2021 – Feb 2026",
      coursework: [
        "Web-Based Programming",
        "Database Management",
        "Object-Oriented Programming (Java)",
        "Computer Networks",
        "LAN Configuration",
        "RJ45 Crimping (Straight & Cross)"
      ]
    }
  ],

  /* ── Navigation Labels ──────────────────────────────────── */
  navigation: [
    { label: "Home",       href: "#hero" },
    { label: "About",      href: "#about" },
    { label: "Skills",     href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects",   href: "#projects" },
    { label: "Education",  href: "#education" },
    { label: "Contact",    href: "#contact" }
  ]
};
