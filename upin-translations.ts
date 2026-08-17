export type Locale = "en" | "ms" | "ha" | "yo" | "ja" | "ar" | "zh";

export const locales: Locale[] = ["en", "ms", "ha", "yo", "ja", "ar", "zh"];

export const localeMeta: Record<
  Locale,
  { label: string; nativeLabel: string; flag: string; dir: "ltr" | "rtl" }
> = {
  en: { label: "English", nativeLabel: "English", flag: "EN", dir: "ltr" },
  ms: { label: "Malay", nativeLabel: "Bahasa Melayu", flag: "MS", dir: "ltr" },
  ha: { label: "Hausa", nativeLabel: "Hausa", flag: "HA", dir: "ltr" },
  yo: { label: "Yoruba", nativeLabel: "Yorùbá", flag: "YO", dir: "ltr" },
  ja: { label: "Japanese", nativeLabel: "日本語", flag: "JA", dir: "ltr" },
  ar: { label: "Arabic", nativeLabel: "العربية", flag: "AR", dir: "rtl" },
  zh: { label: "Chinese", nativeLabel: "中文", flag: "ZH", dir: "ltr" },
};

export type Translation = {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    openSource: string;
    writing: string;
    design: string;
    testimonials: string;
    contact: string;
    menu: string;
  };
  hero: {
    badge: string;
    greeting: string;
    name: string;
    akaLabel: string;
    brandName: string;
    title: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    availability: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    scroll: string;
  };
  terminal: {
    title: string;
    subtitle: string;
    prompt: string;
    welcome: string;
    helpLine1: string;
    helpLine2: string;
    commands: {
      help: string;
      about: string;
      skills: string;
      projects: string;
      experience: string;
      contact: string;
      clear: string;
      whoami: string;
      ls: string;
      social: string;
    };
    outputs: {
      whoami: string;
      ls: string;
      social: string;
      unknown: string;
    };
    placeholder: string;
  };
  about: {
    badge: string;
    heading: string;
    p1: string;
    p2: string;
    p3: string;
    highlights: { label: string; value: string }[];
    coreTitle: string;
    coreDesc: string;
    coreItems: { title: string; desc: string }[];
  };
  skills: {
    badge: string;
    heading: string;
    subheading: string;
    categories: {
      frontend: { title: string; items: string[] };
      design: { title: string; items: string[] };
      state: { title: string; items: string[] };
      components: { title: string; items: string[] };
      tooling: { title: string; items: string[] };
      languages: { title: string; items: string[] };
    };
  };
  projects: {
    badge: string;
    heading: string;
    subheading: string;
    viewCode: string;
    viewLive: string;
    caseStudy: string;
    role: string;
    impact: string;
    tech: string;
    featured: string;
    confidential: string;
    comingSoon: string;
    items: {
      name: string;
      tagline: string;
      description: string;
      role: string;
      impact: string;
      tech: string[];
      image?: string;
      gradient?: string;
      confidential?: boolean;
      comingSoon?: boolean;
      githubUrl?: string;
      liveUrl?: string;
    }[];
  };
  experience: {
    badge: string;
    heading: string;
    subheading: string;
    items: {
      role: string;
      company: string;
      period: string;
      description: string;
      achievements: string[];
    }[];
  };
  openSource: {
    badge: string;
    heading: string;
    subheading: string;
    reposLabel: string;
    starsLabel: string;
    contribsLabel: string;
    repos: {
      name: string;
      description: string;
      language: string;
      stars: string;
    }[];
    viewGithub: string;
  };
  writing: {
    badge: string;
    heading: string;
    subheading: string;
    readMore: string;
    articles: {
      title: string;
      excerpt: string;
      date: string;
      readTime: string;
      tag: string;
    }[];
  };
  testimonials: {
    badge: string;
    heading: string;
    subheading: string;
    items: {
      quote: string;
      name: string;
      role: string;
    }[];
  };
  contact: {
    badge: string;
    heading: string;
    subheading: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    orText: string;
    emailMe: string;
    bookCall: string;
    downloadResume: string;
    followTitle: string;
  };
  footer: {
    tagline: string;
    quote: string;
    builtWith: string;
    rights: string;
    backToTop: string;
    quickLinks: string;
    connect: string;
  };
};

export const translations: Record<Locale, Translation> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      openSource: "Open Source",
      writing: "Writing",
      design: "Design",
      testimonials: "Testimonials",
      contact: "Contact",
      menu: "Menu",
    },
    hero: {
      badge: "Available for select engagements",
      greeting: "Hello, I'm",
      name: "Abdullah Yusuf",
      akaLabel: "known as",
      brandName: "Upin",
      title: "Frontend Engineer & UI/UX Designer",
      tagline:
        "I design and build beautiful, accessible interfaces. From Figma wireframes to pixel-perfect React, I craft products users love.",
      ctaPrimary: "View My Work",
      ctaSecondary: "Open Terminal",
      availability: "Open to frontend & design roles",
      stat1Label: "Frontend",
      stat2Label: "Designs",
      stat3Label: "Contributions",
      scroll: "Scroll to explore",
    },
    terminal: {
      title: "Interactive Terminal",
      subtitle:
        "This isn't a portfolio. It's a shell. Type a command and explore. every section is a file you can read.",
      prompt: "upin@portfolio:~$",
      welcome:
        "Welcome to Upin's interactive portfolio terminal. Type 'help' to see available commands.",
      helpLine1: "Available commands:",
      helpLine2: "Tip: commands are case-insensitive. Try 'whoami' to start.",
      commands: {
        help: "Show this help message",
        about: "Read about.md",
        skills: "List skills.json",
        projects: "List projects/",
        experience: "Show experience.log",
        contact: "Print contact.vcf",
        clear: "Clear the terminal",
        whoami: "Who am I?",
        ls: "List directory contents",
        social: "Show social links",
      },
      outputs: {
        whoami:
          "Abdullah Yusuf (Upin). Frontend Engineer & UI/UX Designer with 5+ years designing and shipping accessible interfaces. I turn Figma wireframes into pixel-perfect React products.",
        ls: "about.md skills.json projects/ experience.log contact.vcf social.txt",
        social:
          "GitHub: github.com/mitchoder07 · LinkedIn: linkedin.com/in/mitchoder07 · X: x.com/mitchoder07 · Dribbble: dribbble.com/mitchoder07 · Figma: figma.com/@mitchoder07 · Email: olaniyiaremu2003@gmail.com",
        unknown: "command not found. Type 'help' for available commands.",
      },
      placeholder: "Type a command and press Enter...",
    },
    about: {
      badge: "About",
      heading: "Designer who codes. Engineer who designs.",
      p1: "I'm Abdullah Yusuf, known as Upin. A frontend engineer and UI/UX designer who has spent the last five years turning ideas into interfaces users love. My work lives at the intersection of design and code: I sketch wireframes in Figma in the morning, build them in React by afternoon, and polish the animations by evening. I believe great products come from engineers who understand design and designers who understand code.",
      p2: "What sets me apart is that I own both sides. I've designed design systems and implemented them in production. I've built analytics dashboards with Recharts, multi-step forms with validation, and PWAs that work offline. Whether it's making a button feel right or architecting a component library, I bring the same craft.",
      p3: "When I'm not shipping, I'm learning. I write about design systems and frontend architecture, mentor aspiring developers, and contribute to open source. I believe the best frontend engineers are obsessive about details. This portfolio is my attempt to show you what that obsession looks like.",
      highlights: [
        { label: "Years frontend", value: "5+" },
        { label: "Figma designs", value: "20+" },
        { label: "Components built", value: "50+" },
      ],
      coreTitle: "What I bring to the table.",
      coreDesc: "Design and engineering, shipped together.",
      coreItems: [
        { title: "Design Systems", desc: "Color tokens, typography scales, spacing systems, and component libraries shipped to production." },
        { title: "Frontend Architecture", desc: "Next.js App Router, route groups, server components, and folder structures that scale." },
        { title: "Responsive Design", desc: "Mobile-first layouts that look intentional on every breakpoint, not just stacked." },
        { title: "Data Visualization", desc: "Recharts dashboards, custom gauges, and accessible charts that tell a story." },
        { title: "Accessibility", desc: "WCAG-compliant patterns, semantic HTML, keyboard navigation, and screen-reader care." },
        { title: "Performance", desc: "PWA, code-splitting, image optimization, and Core Web Vitals in the green." },
      ],
    },
    skills: {
      badge: "Skills",
      heading: "Design and code, end to end.",
      subheading:
        "I don't have a 'side' of the stack. I own the whole surface, from Figma to the browser. Here's what I reach for daily.",
      categories: {
        frontend: {
          title: "Frontend",
          items: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Tailwind CSS 4",
            "Framer Motion",
            "Three.js",
            "Vite",
            "HTML5",
            "CSS3",
            "JavaScript",
          ],
        },
        design: {
          title: "Design",
          items: [
            "Figma",
            "Design Systems",
            "Wireframing",
            "Prototyping",
            "Color Theory",
            "Typography",
            "Spacing Systems",
            "Component Libraries",
            "Accessibility",
            "Responsive Design",
          ],
        },
        state: {
          title: "State & Data",
          items: [
            "Zustand",
            "React Context API",
            "TanStack Query",
            "Recharts",
            "React Hook Form",
            "Zod",
          ],
        },
        components: {
          title: "Components",
          items: [
            "shadcn/ui",
            "Radix UI",
            "Custom Components",
            "Dialogs",
            "Dropdowns",
            "Sheets",
            "Accordions",
            "Forms",
          ],
        },
        tooling: {
          title: "Tooling",
          items: [
            "Git",
            "GitHub Actions",
            "Vercel",
            "PWA",
            "SEO/Metadata API",
            "Print CSS",
            "Dark Mode",
            "Storybook",
          ],
        },
        languages: {
          title: "Programming Languages",
          items: [
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Python",
            "SQL",
            "Bash",
          ],
        },
      },
    },
    projects: {
      badge: "Selected Work",
      heading: "Projects designed, built, and shipped.",
      subheading:
        "A curated selection of products I've designed and built. from education platforms to e-commerce marketplaces. Each one taught me something new.",
      viewCode: "View Code",
      viewLive: "Live Demo",
      caseStudy: "Case Study",
      role: "Role",
      impact: "Impact",
      tech: "Tech",
      featured: "Featured",
      confidential: "Confidential",
      comingSoon: "Coming Soon",
      items: [
        {
          name: "Al-Bashir Academy LMS Portal",
          tagline: "Production education platform with design system, analytics, and PWA",
          description:
            "A full-featured Learning Management System for Al-Bashir Academy. Built the entire frontend: design system (color tokens, typography, spacing), course management, quiz builder, analytics dashboards with Recharts, multi-step forms, and PWA support. This is a confidential client project.",
          role: "Frontend Engineer & UI/UX Designer",
          impact: "Full design system, 50+ reusable components, mobile-first responsive",
          tech: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "Zustand", "TanStack Query", "Recharts"],
          gradient: "linear-gradient(135deg, #006633 0%, #D4AF37 50%, #1a1a2e 100%)",
          confidential: true,
        },
        {
          name: "Rafaab",
          tagline: "Premium e-commerce marketplace with AI shopping assistant",
          description:
            "A premium e-commerce marketplace built to outshine Jumia and AliExpress. Features an AI shopping assistant called Rafi, flash sales with live countdowns, full order tracking with visual timelines, a seller dashboard, and Paystack payment integration. Distinctive gold-amulet brand identity across 8 product categories.",
          role: "Frontend Engineer & UI/UX Designer",
          impact: "AI assistant, flash sales, real-time tracking, Paystack payments",
          tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion", "Paystack"],
          image: "/portfolio-images/rafaab.png",
          githubUrl: "https://github.com/mitchoder07/rafaab",
          liveUrl: "https://rafaab.vercel.app/",
        },
        {
          name: "Your Studio — Logo Portfolio",
          tagline: "Dark-editorial logo portfolio with 74 brand marks, real-time filtering, and lightbox viewer",
          description:
            "A dark-editorial logo portfolio web app cataloging 74 brand marks across 13 industries and 8 design styles. Built with Next.js 16 and TypeScript, it features a masonry grid, real-time filtering by industry and style, live search, a full-screen lightbox with keyboard navigation, and dark/light theme toggle. Each logo is served as an auto-centered 1024×1024 image with palette swatches, brief, and concept notes. This project is coming soon — full case study in progress.",
          role: "Frontend Engineer & UI/UX Designer",
          impact: "74 logos, 13 industries, 8 styles, masonry grid, lightbox, theme toggle",
          tech: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "Lucide", "next-themes"],
          gradient: "linear-gradient(135deg, #0a0a0a 0%, #D4AF37 50%, #1a1a2e 100%)",
          comingSoon: true,
        },
        {
          name: "Baca",
          tagline: "Quran study tool with word-by-word analysis",
          description:
            "A Quran study web app that lets users read, listen, and learn with word-by-word breakdowns. Built with semantic HTML, accessible navigation, and a reading mode that respects focus. Designed the layout mobile-first.",
          role: "Frontend Engineer & UI/UX Designer",
          impact: "Word-by-word reader, audio playback, accessible study flow",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/islam-baca.png",
          githubUrl: "https://github.com/mitchoder07/baca-Al-qur-an",
          liveUrl: "https://baca-al-qur-an.onrender.com/",
        },
        {
          name: "Crypto Vault",
          tagline: "AES-256 encryption in the browser",
          description:
            "A client-side encryption vault that encrypts and decrypts secrets with AES-256, fully in the browser. Zero data leaves the device. Designed the UX around trust: clear states, copy-to-clipboard, and zero-confusion empty states.",
          role: "Frontend Engineer & UI/UX Designer",
          impact: "Zero-server encryption, clean key-management UX",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/crypto-vault.jpeg",
          githubUrl: "https://github.com/mitchoder07/cryptoVault",
          liveUrl: "https://crypto-vauult.vercel.app/",
        },
        {
          name: "Similarity Checker",
          tagline: "Multi-algorithm plagiarism checker with visual gauge",
          description:
            "A plagiarism checker that runs multiple text-similarity algorithms and renders results on a visual gauge. Includes a citation assistant that suggests proper attribution. Designed the comparison UI and the gauge component from scratch.",
          role: "Frontend Engineer & UI/UX Designer",
          impact: "Multi-algorithm scoring, visual gauge, citation assistant",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/similarity-checker.jpeg",
          githubUrl: "https://github.com/mitchoder07/similarity-checker",
          liveUrl: "https://similarity-checker-five.vercel.app/",
        },
        {
          name: "Cyber Bot",
          tagline: "Ask anything about cybersecurity, get instant answers",
          description:
            "A cybersecurity Q&A bot that gives instant answers on common security topics. Designed the conversational UI, the suggested-prompts pattern, and the readable answer cards. Built mobile-first with keyboard-friendly input.",
          role: "Frontend Engineer & UI/UX Designer",
          impact: "Instant answers, suggested prompts, readable response cards",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/cyber-bot.jpg",
          githubUrl: "https://github.com/mitchoder07/cyber-bot",
          liveUrl: "https://cyber-bot-zeta.vercel.app/",
        },
        {
          name: "Cyber-Words Guess",
          tagline: "Guess the cyber word game",
          description:
            "A word-guessing game built around cybersecurity terms. Designed the game loop, the on-screen keyboard, and the color-coded feedback states. Shipped as a single-page app with smooth state transitions.",
          role: "Frontend Engineer & UI/UX Designer",
          impact: "Game loop, on-screen keyboard, color-coded feedback",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/cyber-words.jpg",
          githubUrl: "https://github.com/mitchoder07/word-guessing-game",
          liveUrl: "https://word-guessing-game-nine.vercel.app/",
        },
        {
          name: "Kopi",
          tagline: "Coffee shop landing page with menu, gallery, and reviews",
          description:
            "A modern coffee-shop landing page with a hero section, menu showcase, customer reviews, photo gallery, and a working contact form. Designed the warm, cafe-inspired visual identity and built it mobile-first.",
          role: "Frontend Engineer & UI/UX Designer",
          impact: "Menu showcase, photo gallery, reviews section, contact form",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/kopi.png",
          githubUrl: "https://github.com/mitchoder07/coffee-shop",
          liveUrl: "https://coffee-kopi.vercel.app/",
        },
      ],
    },
    experience: {
      badge: "Experience",
      heading: "Five years of designing, building, and shipping.",
      subheading:
        "From freelance engagements to NYSC service. Each role taught me a different facet of the craft.",
      items: [
        {
          role: "Freelance Frontend Engineer",
          company: "Self-employed",
          period: "2024 - Present",
          description:
            "Building production web apps with Next.js, TypeScript, Tailwind. Led the Al-Bashir Academy platform frontend.",
          achievements: [
            "Shipped Al-Bashir Academy LMS with full design system and PWA",
            "Built 50+ reusable components used across client projects",
          ],
        },
        {
          role: "Freelance UI/UX Designer",
          company: "Self-employed",
          period: "2023 - Present",
          description:
            "Designing digital products in Figma. Design systems, wireframes, prototypes.",
          achievements: [
            "Delivered 20+ Figma designs across fintech, e-commerce, and education",
            "Built reusable design systems with color, typography, and spacing tokens",
            "Ran usability tests that informed key product decisions",
          ],
        },
        {
          role: "IT Support & Frontend Developer",
          company: "FUHSI (NYSC)",
          period: "2025",
          description:
            "IT support at Federal University of Health Sciences, Ila. Built internal tooling and supported staff.",
          achievements: [
            "Resolved helpdesk tickets for staff and students",
            "Built small internal web tools for admissions workflows",
            "Documented IT procedures for the team",
          ],
        },
        {
          role: "Frontend Engineering Journey",
          company: "Self-taught",
          period: "2021 - 2023",
          description:
            "Started learning HTML, CSS, JavaScript. Built personal projects and grew into React and Next.js.",
          achievements: [
            "Shipped personal projects including Baca and Crypto Vault",
            "Learned React, TypeScript, and Tailwind through real builds",
            "Contributed to small open-source repositories",
          ],
        },
        {
          role: "AI Intern",
          company: "AI4FS, Summit University",
          period: "2023",
          description:
            "AI for Females in STEM internship. Explored AI fundamentals and applied them to small projects.",
          achievements: [
            "Completed applied AI curriculum with mentorship",
            "Built small ML demos with Python",
            "Presented final project to cohort",
          ],
        },
      ],
    },
    openSource: {
      badge: "Open Source",
      heading: "Giving back to the craft.",
      subheading:
        "Open source is how the industry levels up. I contribute, maintain, and document. because someone did it for me first.",
      reposLabel: "Public repos",
      starsLabel: "GitHub stars",
      contribsLabel: "Contributions / year",
      repos: [
        {
          name: "rafaab",
          description: "Premium e-commerce marketplace with AI shopping assistant. Paystack, flash sales, real-time tracking.",
          language: "TypeScript",
          stars: "1",
        },
        {
          name: "baca-Al-qur-an",
          description: "Quran study web app with word-by-word analysis and accessible reading mode.",
          language: "JavaScript",
          stars: "1",
        },
        {
          name: "cryptoVault",
          description: "Client-side AES-256 encryption vault. Zero data leaves the device.",
          language: "JavaScript",
          stars: "0",
        },
        {
          name: "similarity-checker",
          description: "Multi-algorithm plagiarism checker with visual gauge and citation assistant.",
          language: "JavaScript",
          stars: "1",
        },
      ],
      viewGithub: "View GitHub Profile",
    },
    writing: {
      badge: "Design",
      heading: "Case studies from the design file.",
      subheading:
        "Selected design work, process notes, and UI explorations from Figma to production.",
      readMore: "View case study",
      articles: [
        {
          title: "Rafaab: Premium E-Commerce Reimagined",
          excerpt:
            "A gold-amulet brand identity meets AI-powered shopping. Flash sales with live countdowns, visual order tracking, and a seller dashboard that makes Jumia look ancient.",
          date: "2026-06-10",
          readTime: "Figma Case Study",
          tag: "E-Commerce",
        },
        {
          title: "Al-Bashir Academy LMS: Education Platform Design System",
          excerpt:
            "From color tokens to production dashboards. A full design system for a university LMS with green-gold branding, analytics dashboards, and PWA-ready mobile flows.",
          date: "2026-04-15",
          readTime: "Figma Case Study",
          tag: "Design System",
        },
        {
          title: "Flyers: High-Impact Promotional Design",
          excerpt:
            "Bold typography, striking color blocking, and print-ready layouts. A series of promotional flyers designed to grab attention in under 2 seconds.",
          date: "2026-02-20",
          readTime: "Figma Case Study",
          tag: "Graphic Design",
        },
        {
          title: "Portfolio v1: Pick a color, crack a code",
          excerpt:
            "This old portfolio lets you splash any color you like across the screen. And my birthday? Locked behind a password wall – go on, take a guess! (Hint: it is not 1234.).",
          date: "2026-01-05",
          readTime: "Figma Case Study",
          tag: "Web Design",
        },
      ],
    },
    testimonials: {
      badge: "Testimonials",
      heading: "What people I've worked with say.",
      subheading:
        "Receipts. Because a portfolio without them is just a résumé with a domain name.",
      items: [
      ],
    },
    contact: {
      badge: "Contact",
      heading: "Let's build something worth shipping.",
      subheading:
        "I'm currently open to frontend engineering roles, UI/UX design contracts, and select project work. Tell me what you're building.",
      nameLabel: "Your name",
      emailLabel: "Email address",
      messageLabel: "Your message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Tell me about your project, role, or idea...",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent. I'll get back to you within 48 hours.",
      orText: "or",
      emailMe: "Email me directly",
      bookCall: "Book a 30-min intro call",
      downloadResume: "Download résumé",
      followTitle: "Find me elsewhere",
    },
    footer: {
      tagline: "Frontend Engineer & UI/UX Designer. Builder. Shipper.",
      quote: "Great interfaces, like great warriors, are forged through a thousand quiet iterations no one ever sees.",
      builtWith: "Designed & built with care. Next.js, TypeScript, Tailwind CSS, Figma.",
      rights: "All rights reserved.",
      backToTop: "Back to top",
      quickLinks: "Quick Links",
      connect: "Connect",
    },
  },

  ms: {
    nav: {
      home: "Laman Utama",
      about: "Tentang",
      skills: "Kemahiran",
      projects: "Projek",
      experience: "Pengalaman",
      openSource: "Sumber Terbuka",
      writing: "Penulisan",
      design: "Reka Bentuk",
      testimonials: "Testimoni",
      contact: "Hubungi",
      menu: "Menu",
    },
    hero: {
      badge: "Terbuka untuk kerja terpilih",
      greeting: "Helo, saya",
      name: "Abdullah Yusuf",
      akaLabel: "dikenali sebagai",
      brandName: "Upin",
      title: "Jurutera Frontend & Pereka UI/UX",
      tagline:
        "Saya merekabentuk dan membina antara muka yang cantik dan boleh diakses. Dari wireframe Figma ke React yang sempurna piksel, saya mencipta produk yang disukai pengguna.",
      ctaPrimary: "Lihat Kerja Saya",
      ctaSecondary: "Buka Terminal",
      availability: "Terbuka untuk peranan frontend & reka bentuk",
      stat1Label: "Frontend",
      stat2Label: "Reka Bentuk",
      stat3Label: "Sumbangan",
      scroll: "Tatal untuk terokai",
    },
    terminal: {
      title: "Terminal Interaktif",
      subtitle:
        "Ini bukan portfolio. Ini shell. Taip arahan dan terokai. setiap bahagian adalah fail yang boleh dibaca.",
      prompt: "upin@portfolio:~$",
      welcome:
        "Selamat datang ke terminal portfolio interaktif Upin. Taip 'help' untuk melihat arahan yang tersedia.",
      helpLine1: "Arahan tersedia:",
      helpLine2: "Tip: arahan tidak sensitif huruf. Cuba 'whoami' untuk mula.",
      commands: {
        help: "Tunjuk mesej bantuan ini",
        about: "Baca about.md",
        skills: "Senarai skills.json",
        projects: "Senarai projects/",
        experience: "Tunjuk experience.log",
        contact: "Cetak contact.vcf",
        clear: "Kosongkan terminal",
        whoami: "Siapa saya?",
        ls: "Senarai kandungan direktori",
        social: "Tunjuk pautan sosial",
      },
      outputs: {
        whoami:
          "Abdullah Yusuf (Upin). Jurutera Frontend & Pereka UI/UX dengan 5+ tahun merekabentuk dan menghantar antara muka boleh diakses. Saya menukar wireframe Figma kepada produk React yang sempurna piksel.",
        ls: "about.md skills.json projects/ experience.log contact.vcf social.txt",
        social:
          "GitHub: github.com/mitchoder07 · LinkedIn: linkedin.com/in/mitchoder07 · X: x.com/mitchoder07 · Dribbble: dribbble.com/mitchoder07 · Figma: figma.com/@mitchoder07 · Email: olaniyiaremu2003@gmail.com",
        unknown: "arahan tidak dijumpai. Taip 'help' untuk arahan tersedia.",
      },
      placeholder: "Taip arahan dan tekan Enter...",
    },
    about: {
      badge: "Tentang",
      heading: "Pereka yang mengekod. Jurutera yang merekabentuk.",
      p1: "Saya Abdullah Yusuf, dikenali sebagai Upin. Jurutera frontend dan pereka UI/UX yang telah menghabiskan lima tahun lalu menukar idea menjadi antara muka yang disukai pengguna. Kerja saya berada di persimpangan reka bentuk dan kod: saya melakar wireframe dalam Figma pada waktu pagi, membina mereka dalam React pada waktu petang, dan menggilap animasi pada waktu malam. Saya percaya produk hebat datang dari jurutera yang memahami reka bentuk dan pereka yang memahami kod.",
      p2: "Apa yang membezakan saya adalah saya memiliki kedua-dua belah pihak. Saya telah merekabentuk sistem reka bentuk dan melaksanakannya dalam production. Saya telah membina papan pemuka analitik dengan Recharts, borang pelbagai langkah dengan pengesahan, dan PWA yang berfungsi luar talian. Sama ada menjadikan butang terasa betul atau mereka bentuk pustaka komponen, saya membawa kerajinan yang sama.",
      p3: "Apabila saya tidak menghantar, saya belajar. Saya menulis tentang sistem reka bentuk dan senibina frontend, membimbing pembangun bercita-cita, dan menyumbang kepada sumber terbuka. Saya percaya jurutera frontend terbaik obses terhadap butiran. Portfolio ini adalah cubaan saya untuk menunjukkan kepada anda bagaimana rupa obses itu.",
      highlights: [
        { label: "Tahun frontend", value: "5+" },
        { label: "Reka Figma", value: "20+" },
        { label: "Komponen dibina", value: "50+" },
      ],
      coreTitle: "Apa yang saya bawa.",
      coreDesc: "Reka bentuk dan kejuruteraan, dihantar bersama.",
      coreItems: [
        { title: "Sistem Reka Bentuk", desc: "Token warna, skala tipografi, sistem jarak, dan pustaka komponen dihantar ke production." },
        { title: "Senibina Frontend", desc: "Next.js App Router, kumpulan laluan, komponen pelayan, dan struktur folder yang berskala." },
        { title: "Reka Bentuk Responsif", desc: "Tataletak mobile-first yang kelihatan disengajakan pada setiap breakpoint, bukan sekadar bertindan." },
        { title: "Visualisasi Data", desc: "Papan pemuda Recharts, tolok tersuai, dan carta boleh capai yang menceritakan kisah." },
        { title: "Kebolehcapaian", desc: "Corak pematuhan WCAG, HTML semantik, navigasi papan kekunci, dan penjagaan pembaca skrin." },
        { title: "Prestasi", desc: "PWA, pemisahan kod, pengoptimuman imej, dan Core Web Vitals dalam hijau." },
      ],
    },
    skills: {
      badge: "Kemahiran",
      heading: "Reka bentuk dan kod, hujung ke hujung.",
      subheading:
        "Saya tidak ada 'sebelah' stack. Saya memiliki keseluruhan permukaan, dari Figma ke pelayar. Inilah yang saya gunakan setiap hari.",
      categories: {
        frontend: {
          title: "Frontend",
          items: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Tailwind CSS 4",
            "Framer Motion",
            "Three.js",
            "Vite",
            "HTML5",
            "CSS3",
            "JavaScript",
          ],
        },
        design: {
          title: "Reka Bentuk",
          items: [
            "Figma",
            "Sistem Reka Bentuk",
            "Wireframing",
            "Prototaip",
            "Teori Warna",
            "Tipografi",
            "Sistem Jarak",
            "Pustaka Komponen",
            "Kebolehcapaian",
            "Reka Bentuk Responsif",
          ],
        },
        state: {
          title: "State & Data",
          items: [
            "Zustand",
            "React Context API",
            "TanStack Query",
            "Recharts",
            "React Hook Form",
            "Zod",
          ],
        },
        components: {
          title: "Komponen",
          items: [
            "shadcn/ui",
            "Radix UI",
            "Komponen Tersuai",
            "Dialog",
            "Dropdown",
            "Sheets",
            "Akordion",
            "Borang",
          ],
        },
        tooling: {
          title: "Alatan",
          items: [
            "Git",
            "GitHub Actions",
            "Vercel",
            "PWA",
            "SEO/Metadata API",
            "Print CSS",
            "Mod Gelap",
            "Storybook",
          ],
        },
        languages: {
          title: "Bahasa Pengaturcaraan",
          items: [
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Python",
            "SQL",
            "Bash",
          ],
        },
      },
    },
    projects: {
      badge: "Kerja Terpilih",
      heading: "Projek yang direka, dibina, dan dihantar.",
      subheading:
        "Pilihan produk yang saya reka dan bina. dari platform pendidikan ke pasaran e-dagang. Setiap satu mengajar saya sesuatu yang baru.",
      viewCode: "Lihat Kod",
      viewLive: "Demo Langsung",
      caseStudy: "Kajian Kes",
      role: "Peranan",
      impact: "Impak",
      tech: "Teknologi",
      featured: "Pilihan",
      confidential: "Sulit",
      comingSoon: "Akan Datang",
      items: [
        {
          name: "Al-Bashir Academy LMS Portal",
          tagline: "Platform pendidikan production dengan sistem reka bentuk, analitik, dan PWA",
          description:
            "Sistem Pengurusan Pembelajaran penuh untuk Al-Bashir Academy. Membina keseluruhan frontend: sistem reka bentuk (token warna, tipografi, jarak), pengurusan kursus, pembina kuiz, papan pemuda analitik dengan Recharts, borang pelbagai langkah, dan sokongan PWA. Ini adalah projek pelanggan sulit.",
          role: "Jurutera Frontend & Pereka UI/UX",
          impact: "Sistem reka bentuk penuh, 50+ komponen boleh guna semula, responsif mobile-first",
          tech: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "Zustand", "TanStack Query", "Recharts"],
          gradient: "linear-gradient(135deg, #006633 0%, #D4AF37 50%, #1a1a2e 100%)",
          confidential: true,
        },
        {
          name: "Rafaab",
          tagline: "Pasaran e-dagang premium dengan pembantu beli-belah AI",
          description:
            "Pasaran e-dagang premium yang dibina untuk mengatasi Jumia dan AliExpress. Ciri pembantu beli-belah AI bernama Rafi, jualan kilat dengan hitung turun langsung, penjejakan pesanan penuh dengan garis masa visual, papan pemuda penjual, dan integrasi pembayaran Paystack. Identiti cicin emas yang tersendiri merentasi 8 kategori produk.",
          role: "Jurutera Frontend & Pereka UI/UX",
          impact: "Pembantu AI, jualan kilat, penjejakan masa nyata, pembayaran Paystack",
          tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion", "Paystack"],
          image: "/portfolio-images/rafaab.png",
          githubUrl: "https://github.com/mitchoder07/rafaab",
          liveUrl: "https://rafaab.vercel.app/",
        },
        {
          name: "Your Studio — Portfolio Logo",
          tagline: "Portfolio logo editorial gelap dengan 74 jenama, penapisan masa nyata, dan pemapar lightbox",
          description:
            "Aplikasi web portfolio logo berkonsepkan editorial gelap yang mengkatalogkan 74 jenama merentas 13 industri dan 8 gaya reka bentuk. Dibina dengan Next.js 16 dan TypeScript, ia menampilkan grid masonry, penapisan masa nyata mengikut industri dan gaya, carian langsung, lightbox skrin penuh dengan navigasi papan kekunci, dan toggel tema gelap/terang. Setiap logo dioptimumkan sebagai imej 1024×1024 yang disentratkan secara automatik dengan swatch palet, ringkasan, dan nota konsep. Projek ini akan datang tidak lama lagi.",
          role: "Jurutera Frontend & Pereka UI/UX",
          impact: "74 logo, 13 industri, 8 gaya, grid masonry, lightbox, toggel tema",
          tech: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "Lucide", "next-themes"],
          gradient: "linear-gradient(135deg, #0a0a0a 0%, #D4AF37 50%, #1a1a2e 100%)",
          comingSoon: true,
        },
        {
          name: "Baca",
          tagline: "Alat kajian Quran dengan analisis perkataan-demi-perkataan",
          description:
            "Apl web kajian Quran yang membolehkan pengguna membaca, mendengar, dan belajar dengan pecahan perkataan-demi-perkataan. Dibina dengan HTML semantik, navigasi boleh capai, dan mod membaca yang menghormati fokus. Tataletak direka mobile-first.",
          role: "Jurutera Frontend & Pereka UI/UX",
          impact: "Pembaca perkataan-demi-perkataan, main balik audio, aliran kajian boleh capai",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/islam-baca.png",
          githubUrl: "https://github.com/mitchoder07/baca-Al-qur-an",
          liveUrl: "https://baca-al-qur-an.onrender.com/",
        },
        {
          name: "Crypto Vault",
          tagline: "Penyulitan AES-256 dalam pelayar",
          description:
            "Peti penyulitan sisi-klien yang menyulitkan dan menyahsulit rahsia dengan AES-256, sepenuhnya dalam pelayar. Tiada data meninggalkan peranti. UX direka sekitar kepercayaan: keadaan jelas, salin-ke-papan keratan, dan keadaan kosong tanpa kekeliruan.",
          role: "Jurutera Frontend & Pereka UI/UX",
          impact: "Penyulitan tanpa pelayan, UX pengurusan kunci yang bersih",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/crypto-vault.jpeg",
          githubUrl: "https://github.com/mitchoder07/cryptoVault",
          liveUrl: "https://crypto-vauult.vercel.app/",
        },
        {
          name: "Similarity Checker",
          tagline: "Pemeriksa plagiarisme pelbagai-algoritma dengan tolok visual",
          description:
            "Pemeriksa plagiarisme yang menjalankan pelbagai algoritma persamaan teks dan memaparkan keputusan pada tolok visual. Termasuk pembantu petikan yang mencadangkan atribusi yang betul. UI perbandingan dan komponen tolok direka dari awal.",
          role: "Jurutera Frontend & Pereka UI/UX",
          impact: "Pemarkahan pelbagai-algoritma, tolok visual, pembantu petikan",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/similarity-checker.jpeg",
          githubUrl: "https://github.com/mitchoder07/similarity-checker",
          liveUrl: "https://similarity-checker-five.vercel.app/",
        },
        {
          name: "Cyber Bot",
          tagline: "Tanya apa-apa tentang keselamatan siber, dapatkan jawapan serta-merta",
          description:
            "Bot soal-jawab keselamatan siber yang memberikan jawapan serta-merta tentang topik keselamatan biasa. UI perbualan, corak cadangan, dan kad jawapan yang boleh dibaca direka. Dibina mobile-first dengan input mesra papan kekunci.",
          role: "Jurutera Frontend & Pereka UI/UX",
          impact: "Jawapan serta-merta, cadangan, kad respons boleh dibaca",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/cyber-bot.jpg",
          githubUrl: "https://github.com/mitchoder07/cyber-bot",
          liveUrl: "https://cyber-bot-zeta.vercel.app/",
        },
        {
          name: "Cyber-Words Guess",
          tagline: "Permainan teka perkataan siber",
          description:
            "Permainan menebak perkataan dibina sekitar istilah keselamatan siber. Gelung permainan, papan kekunci atas-skrin, dan keadaan maklum balas berwarna-warni direka. Dihantar sebagai aplikasi halaman-tunggal dengan peralihan keadaan yang lancar.",
          role: "Jurutera Frontend & Pereka UI/UX",
          impact: "Gelung permainan, papan kekunci atas-skrin, maklum balas berwarna-warni",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/cyber-words.jpg",
          githubUrl: "https://github.com/mitchoder07/word-guessing-game",
          liveUrl: "https://word-guessing-game-nine.vercel.app/",
        },
        {
          name: "Kopi",
          tagline: "Coffee shop landing page with menu, gallery, and reviews",
          description:
            "A modern coffee-shop landing page with a hero section, menu showcase, customer reviews, photo gallery, and a working contact form. Designed the warm, cafe-inspired visual identity and built it mobile-first.",
          role: "Frontend Engineer & UI/UX Designer",
          impact: "Menu showcase, photo gallery, reviews section, contact form",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/kopi.png",
          githubUrl: "https://github.com/mitchoder07/coffee-shop",
          liveUrl: "https://coffee-kopi.vercel.app/",
        },
      ],
    },
    experience: {
      badge: "Pengalaman",
      heading: "Lima tahun merekabentuk, membina, dan menghantar.",
      subheading:
        "Dari kerja freelance ke perkhidmatan NYSC. Setiap peranan mengajar saya aspek berbeza kerajinan.",
      items: [
        {
          role: "Jurutera Frontend Freelance",
          company: "Mandiri",
          period: "2024 - Kini",
          description:
            "Membina aplikasi web production dengan Next.js, TypeScript, Tailwind. Memimpin frontend platform Al-Bashir Academy.",
          achievements: [
            "Menghantar Al-Bashir Academy LMS dengan sistem reka bentuk penuh dan PWA",
            "Membina 50+ komponen boleh guna semula digunakan merentasi projek pelanggan",
          ],
        },
        {
          role: "Pereka UI/UX Freelance",
          company: "Mandiri",
          period: "2023 - Kini",
          description:
            "Merekabentuk produk digital dalam Figma. Sistem reka bentuk, wireframe, prototaip.",
          achievements: [
            "Menyampaikan 20+ reka Figma merentasi fintech, e-dagang, dan pendidikan",
            "Membina sistem reka bentuk boleh guna semula dengan token warna, tipografi, dan jarak",
            "Menjalankan ujian kebolehgunaan yang mempengaruhi keputusan produk utama",
          ],
        },
        {
          role: "Sokongan IT & Pembangun Frontend",
          company: "FUHSI (NYSC)",
          period: "2025",
          description:
            "Sokongan IT di Federal University of Health Sciences, Ila. Membina alatan dalaman dan menyokong staf.",
          achievements: [
            "Menyelesaikan tiket helpdesk untuk staf dan pelajar",
            "Membina alatan web dalaman kecil untuk aliran kerja kemasukan",
            "Mendokumenkan prosedur IT untuk pasukan",
          ],
        },
        {
          role: "Perjalanan Kejuruteraan Frontend",
          company: "Belajar-sendiri",
          period: "2021 - 2023",
          description:
            "Mula belajar HTML, CSS, JavaScript. Membina projek peribadi dan berkembang ke React dan Next.js.",
          achievements: [
            "Menghantar projek peribadi termasuk Baca dan Crypto Vault",
            "Belajar React, TypeScript, dan Tailwind melalui binaan sebenar",
            "Menyumbang kepada repositori sumber terbuka kecil",
          ],
        },
        {
          role: "Pelatih AI",
          company: "AI4FS, Summit University",
          period: "2023",
          description:
            "Latihan AI for Females in STEM. Meneroka asas AI dan mengaplikasikannya ke projek kecil.",
          achievements: [
            "Menyempurnakan kurikulum AI aplikasi dengan bimbingan",
            "Membina demo ML kecil dengan Python",
            "Membentangkan projek akhir kepada kohort",
          ],
        },
      ],
    },
    openSource: {
      badge: "Sumber Terbuka",
      heading: "Memberi kembali kepada kerajinan.",
      subheading:
        "Sumber terbuka adalah cara industri meningkatkan tahap. Saya menyumbang, mengekalkan, dan mendokumenkan. kerana seseorang melakukannya untuk saya dahulu.",
      reposLabel: "Repo awam",
      starsLabel: "Bintang GitHub",
      contribsLabel: "Sumbangan / tahun",
      repos: [
        {
          name: "rafaab",
          description: "Pasaran e-dagang premium dengan pembantu beli-belah AI. Paystack, jualan kilat, penjejakan masa nyata.",
          language: "TypeScript",
          stars: "1",
        },
        {
          name: "baca-Al-qur-an",
          description: "Apl web kajian Quran dengan analisis perkataan-demi-perkataan dan mod membaca boleh capai.",
          language: "JavaScript",
          stars: "1",
        },
        {
          name: "cryptoVault",
          description: "Peti penyulitan AES-256 sisi-klien. Tiada data meninggalkan peranti.",
          language: "JavaScript",
          stars: "0",
        },
        {
          name: "similarity-checker",
          description: "Pemeriksa plagiarisme pelbagai-algoritma dengan tolok visual dan pembantu petikan.",
          language: "JavaScript",
          stars: "1",
        },
      ],
      viewGithub: "Lihat Profil GitHub",
    },
    writing: {
      badge: "Reka Bentuk",
      heading: "Kajian kes dari fail reka bentuk.",
      subheading:
        "Kerja reka bentuk terpilih, nota proses, dan penjelajahan UI dari Figma ke production.",
      readMore: "Lihat kajian kes",
      articles: [
        {
          title: "Rafaab: E-Dagang Premium Diubah Suai",
          excerpt:
            "Identiti jenama emas-amulet bertemu beli-belah AI. Jualan kilat dengan kiraan detik langsung, penjejakan pesanan visual, dan dashboard penjual.",
          date: "2026-06-10",
          readTime: "Kajian Kes Figma",
          tag: "E-Dagang",
        },
        {
          title: "Al-Bashir Academy LMS: Sistem Reka Bentuk Platform Pendidikan",
          excerpt:
            "Dari token warna ke dashboard produksi. Sistem reka bentuk penuh untuk LMS universiti dengan jenama hijau-emas, dashboard analitik, dan aliran mudah alih.",
          date: "2026-04-15",
          readTime: "Kajian Kes Figma",
          tag: "Sistem Reka Bentuk",
        },
        {
          title: "Flyer: Reka Bentuk Promosi Berimpak Tinggi",
          excerpt:
            "Tipografi berani, penyekat warna mencolok, dan susun atur sedia cetak. Siri flyer promosi yang direka untuk menarik perhatian dalam kurang 2 saat.",
          date: "2026-02-20",
          readTime: "Kajian Kes Figma",
          tag: "Reka Bentuk Grafik",
        },
        {
          title: "Portfolio v1: Pilih warna, teka kod",
          excerpt:
            "Portfolio lama ni bagi awak bebas pilih apa-apa warna untuk hiasan skrin. Hari jadi saya? Terkunci di sebalik dinding kata laluan – jom cuba teka! (Petunjuk: bukan 1234.).",
          date: "2026-01-05",
          readTime: "Kajian Kes Figma",
          tag: "Reka Bentuk Web",
        },
      ],
    },
    testimonials: {
      badge: "Testimoni",
      heading: "Apa kata orang yang pernah saya bekerja dengan mereka.",
      subheading:
        "Resit. Kerana portfolio tanpa mereka hanyalah resume dengan nama domain.",
      items: [
      ],
    },
    contact: {
      badge: "Hubungi",
      heading: "Mari bina sesuatu yang berbaloi untuk dihantar.",
      subheading:
        "Saya sedang terbuka untuk peranan jurutera frontend, kontrak reka bentuk UI/UX, dan kerja projek terpilih. Beritahu saya apa yang anda bina.",
      nameLabel: "Nama anda",
      emailLabel: "Alamat emel",
      messageLabel: "Mesej anda",
      namePlaceholder: "Nama anda",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Beritahu saya tentang projek, peranan, atau idea anda...",
      send: "Hantar Mesej",
      sending: "Menghantar...",
      success: "Mesej dihantar. Saya akan kembali kepada anda dalam 48 jam.",
      orText: "atau",
      emailMe: "Emel saya terus",
      bookCall: "Tempah panggilan intro 30-minit",
      downloadResume: "Muat turun resume",
      followTitle: "Cari saya di tempat lain",
    },
    footer: {
      tagline: "Jurutera Frontend & Pereka UI/UX. Pembina. Penghantar.",
      quote: "Great interfaces, like great warriors, are forged through a thousand quiet iterations no one ever sees.",
      builtWith: "Direka & dibina dengan penuh perhatian. Next.js, TypeScript, Tailwind CSS, Figma.",
      rights: "Hak cipta terpelihara.",
      backToTop: "Kembali ke atas",
      quickLinks: "Pautan Pantas",
      connect: "Sambung",
    },
  },

  ha: {
    nav: {
      home: "Gida",
      about: "Game da",
      skills: "Kwarewa",
      projects: "Ayyuka",
      experience: "Kwarewar Aiki",
      openSource: "Tushen Buɗe",
      writing: "Rubutu",
      design: "Tsari",
      testimonials: "Shaidu",
      contact: "Tuntuɓar",
      menu: "Menu",
    },
    hero: {
      badge: "Bude don zaɓaɓɓun ayyuka",
      greeting: "Sannu, ni",
      name: "Abdullah Yusuf",
      akaLabel: "wanda aka sani da",
      brandName: "Upin",
      title: "Injiniyan Frontend & Mai Tsara UI/UX",
      tagline:
        "Ina tsara da gina kyakkyawar mu'amala mai sauyin shiga. Daga wireframe na Figma zuwa React mai cikakken pixel, ina ƙirƙirar samfurin da masu amfani ke so.",
      ctaPrimary: "Duba Aikina",
      ctaSecondary: "Bude Tasha",
      availability: "Bude don mukaman frontend & tsarawa",
      stat1Label: "Frontend",
      stat2Label: "Tsare-tsare",
      stat3Label: "Gudunmawa",
      scroll: "Sauƙaƙa don bincika",
    },
    terminal: {
      title: "Tasha Mai Hulɗa",
      subtitle:
        "Wannan ba portfolio ba ne. Shi kebul ne. Rubuta umarni ka bincika. kowane sashe fayil ne da za ka iya karantawa.",
      prompt: "upin@portfolio:~$",
      welcome:
        "Barka da zuwa tasha portfolio mai hulɗa ta Upin. Rubuta 'help' don ganin umarnin da ke akwai.",
      helpLine1: "Umarni da ke akwai:",
      helpLine2: "Tip: umarni ba sa nuna girma. Gwada 'whoami' don farawa.",
      commands: {
        help: "Nuna wannan saƙon taimako",
        about: "Karanta about.md",
        skills: "Jerin skills.json",
        projects: "Jerin projects/",
        experience: "Nuna experience.log",
        contact: "Bugawa contact.vcf",
        clear: "Share tasha",
        whoami: "Wanene ni?",
        ls: "Jerin abubuwan da ke cikin directory",
        social: "Nuna hanyoyin sadarwar jama'a",
      },
      outputs: {
        whoami:
          "Abdullah Yusuf (Upin). Injiniyan Frontend & Mai Tsara UI/UX da shekaru 5+ na tsara da tura mu'amala mai sauyin shiga. Ina canza wireframe na Figma zuwa samfurin React mai cikakken pixel.",
        ls: "about.md skills.json projects/ experience.log contact.vcf social.txt",
        social:
          "GitHub: github.com/mitchoder07 · LinkedIn: linkedin.com/in/mitchoder07 · X: x.com/mitchoder07 · Dribbble: dribbble.com/mitchoder07 · Figma: figma.com/@mitchoder07 · Email: olaniyiaremu2003@gmail.com",
        unknown: "umarni ba a same ba. Rubuta 'help' don umarnin da ke akwai.",
      },
      placeholder: "Rubuta umarni ka danna Enter...",
    },
    about: {
      badge: "Game da",
      heading: "Mai tsara da ke rubuta lamba. Injiniya da ke tsara.",
      p1: "Ni Abdullah Yusuf (Upin) ne. Injiniyan frontend da mai tsara UI/UX wanda ya kwashe shekaru biyar na ƙarshe canza ra'ayi zuwa mu'amala da masu amfani ke so. Aikina yana tsakanin tsarawa da lamba: ina tsara wireframe a Figma da safe, ina gina su a React da yamma, kuma ina ƙirƙirar motsa-motsi da dare. Na gaskata samfurin da kyau injiniyoyi suka gina waɗanda suka fahimta tsarawa kuma masu tsara waɗanda suka fahimta lamba.",
      p2: "Abin da ya banbance ni shine ni na duka ɓangarorin biyu. Na tsara tsarin tsara lamba kuma na aiwatar da su a production. Na gina pano na analitik da Recharts, fomu mai matakai da yawa da tabbatarwa, da PWA da ke aiki ba tare da intanet ba. Ko yin maɓalli jin daɗi ko gina tsarin ɓangaren laburare, ina kawo irin wannan ƙwarewa.",
      p3: "Lokacin da ban tura ba, ina koyo. Ina rubutu game da tsarin tsara da gine-ginen frontend, ina ba da shawara ga masu haɓaka, kuma ina ba da gudummawa ga tushen buɗe. Na gaskia injiniyoyin frontend mafi kyau suna da yawa game da cikakkun bayanai. Wannan portfolio ƙoƙatina ne na nuna muku yadda wannan kwarin gwiwa ke kama.",
      highlights: [
        { label: "Shekaru frontend", value: "5+" },
        { label: "Tsara Figma", value: "20+" },
        { label: "Abubuwan da aka gina", value: "50+" },
      ],
      coreTitle: "Abin da na kawo.",
      coreDesc: "Tsarawa da injiniya, an kawo tare.",
      coreItems: [
        { title: "Tsarin Tsara Lamba", desc: "Token na launi, sikelin rubutu, tsarin tazara, da ɗakunan karatu na ɓangarorin da aka kawo production." },
        { title: "Gine-ginen Frontend", desc: "Next.js App Router, ƙungiyoyin hanya, ɓangarorin uba, da tsarin babban fayil da ke girma." },
        { title: "Tsarin Da Ya Dace", desc: "Tsarin mobile-first da ke nuna ganganci a kowane breakpoint, ba wai aka jinge ba." },
        { title: "Nunin Bayani", desc: "Pano na Recharts, ma'auni na musamman, da zane-zane masu sauyin shiga da ke faɗin labari." },
        { title: "Sauyin Shiga", desc: "Tsarin WCAG, HTML na ma'ana, kewayawar maɓalli, da kulawar mai karanta allo." },
        { title: "Aiki", desc: "PWA, raba-lamba, inganta hoto, da Core Web Vitals cikin kore." },
      ],
    },
    skills: {
      badge: "Kwarewa",
      heading: "Tsara da lamba, daga ƙarshe zuwa ƙarshe.",
      subheading:
        "Bana da 'ɓangare' na stack. Na mallaki duka fuskoki, daga Figma zuwa bincike. Ga abin da nake kaiwa kullum.",
      categories: {
        frontend: {
          title: "Frontend",
          items: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Tailwind CSS 4",
            "Framer Motion",
            "Three.js",
            "Vite",
            "HTML5",
            "CSS3",
            "JavaScript",
          ],
        },
        design: {
          title: "Tsara",
          items: [
            "Figma",
            "Tsarin Tsara",
            "Wireframing",
            "Prototype",
            "Ka'idar Launi",
            "Rubutu",
            "Tsarin Tazara",
            "Ɗakunan karatu na Ɓangarorin",
            "Sauyin Shiga",
            "Tsari Mai Daidaituwa",
          ],
        },
        state: {
          title: "State & Bayani",
          items: [
            "Zustand",
            "React Context API",
            "TanStack Query",
            "Recharts",
            "React Hook Form",
            "Zod",
          ],
        },
        components: {
          title: "Abubuwan",
          items: [
            "shadcn/ui",
            "Radix UI",
            "Abubuwan na Musamman",
            "Tattaunawa",
            "Dropdowns",
            "Sheets",
            "Accordions",
            "Fomu",
          ],
        },
        tooling: {
          title: "Kayan Aiki",
          items: [
            "Git",
            "GitHub Actions",
            "Vercel",
            "PWA",
            "SEO/Metadata API",
            "Print CSS",
            "Yanayin Duhu",
            "Storybook",
          ],
        },
        languages: {
          title: "Harsunan Shirye-shirye",
          items: [
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Python",
            "SQL",
            "Bash",
          ],
        },
      },
    },
    projects: {
      badge: "Ayyuka da aka Zaɓa",
      heading: "Ayyuka da aka tsara, aka gina, aka tura.",
      subheading:
        "Zaɓin kayan da na tsara da kownan. daga manhajojin ilimi zuwa kasuwannin e-commerce. Kowanne ya koya min wani abu.",
      viewCode: "Duba Lamba",
      viewLive: "Demo kai tsaye",
      caseStudy: "Nazari Kan Harka",
      role: "Matsayi",
      impact: "Tasiri",
      tech: "Teknoloji",
      featured: "Da aka zaɓa",
      confidential: "Sirri",
      comingSoon: "Yana Zuwa Nan baba da daɗewa",
      items: [
        {
          name: "Al-Bashir Academy LMS Portal",
          tagline: "Manhajar ilimi ta production tare da tsarin tsara, analitik, da PWA",
          description:
            "Tsarin Kula da Koyo mai cikakke don Al-Bashir Academy. Na gina dukkan frontend: tsarin tsara (token na launi, rubutu, tazara), kula da kwas, gina quiz, pano na analitik da Recharts, fomu mai matakai, da goyon bayan PWA. Wannan aikin abokin ciniki ne na sirri.",
          role: "Injiniyan Frontend & Mai Tsara UI/UX",
          impact: "Tsarin tsara cikakke, 50+ abubuwa masu amfani da suka daba, amsa ta mobile-first",
          tech: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "Zustand", "TanStack Query", "Recharts"],
          gradient: "linear-gradient(135deg, #006633 0%, #D4AF37 50%, #1a1a2e 100%)",
          confidential: true,
        },
        {
          name: "Rafaab",
          tagline: "Kasuwar e-commerce mai kyau tare da mataimakin sayayya na AI",
          description:
            "Kasuwar e-commerce mai kyau da aka gina don kayata Jumia da AliExpress. Tana da mataimakin sayayya na AI mai suna Rafi, siye mai sauri da kidaya ta kai tsaye, cikakken bin diddigin oda da zane-zane na lokaci, pano na mai siyarwa, da haɗin biyan kuɗi na Paystack. Sunan zobe na zinariya a duk rukunoni 8.",
          role: "Injiniyan Frontend & Mai Tsara UI/UX",
          impact: "Mataimakin AI, siye mai sauri, bin diddigin a lokaci gaskiya, biyan Paystack",
          tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion", "Paystack"],
          image: "/portfolio-images/rafaab.png",
          githubUrl: "https://github.com/mitchoder07/rafaab",
          liveUrl: "https://rafaab.vercel.app/",
        },
        {
          name: "Your Studio — Tarihin Logo",
          tagline: "Tarihin logo mai tsarin duhu na editorial tare da alamomin kasuwanci 74, tacewa a lokaci guda, da mai kallon lightbox",
          description:
            "Aikace-aikacen yanar gizo na tarihin logo mai tsarin duhu wanda yake ƗirƗirar jerin alamomin kasuwanci 74 a fadin masana’untu 13 da salo na tsari 8. An gina shi da Next.js 16 da TypeScript, yana da grid masonry, tacewa a lokaci guda bisa masana’untu da salo, bincike kai tsaye, lightbox na cikakken allo tare da kewayawa ta keyboard, da canza tsarin duhu/haske. Kowane logo an inganta shi azaman hoton 1024×1024 wanda aka daidaita kansa. Wannan aikin yana zuwa nan ba da daɗewa.",
          role: "Injiniyan Frontend & Mai Tsara UI/UX",
          impact: "Logo 74, masana’untu 13, salo 8, grid masonry, lightbox, canza tsari",
          tech: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "Lucide", "next-themes"],
          gradient: "linear-gradient(135deg, #0a0a0a 0%, #D4AF37 50%, #1a1a2e 100%)",
          comingSoon: true,
        },
        {
          name: "Baca",
          tagline: "Kayan aikin nazarin Alqur'ani tare da nazarin kalma-da-kalma",
          description:
            "Aplikacin yanar gizo na nazarin Alqur'ani wanda ke bawa masu amfani damar karantawa, sauraro, da koyo tare da nazarin kalma-da-kalma. An gina shi da HTML na ma'ana, kewayawa mai sauyin shiga, da yanayin karantawa da ya dace da hankali. An tsara tsari mobile-first.",
          role: "Injiniyan Frontend & Mai Tsara UI/UX",
          impact: "Karantawa kalma-da-kalma, kunna sauti, tsarin karantawa mai sauyin shiga",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/islam-baca.png",
          githubUrl: "https://github.com/mitchoder07/baca-Al-qur-an",
          liveUrl: "https://baca-al-qur-an.onrender.com/",
        },
        {
          name: "Crypto Vault",
          tagline: "Rufewar AES-256 a cikin bincike",
          description:
            "Tsarin rufewa na gefen-abokan ciniki wanda ke rufewa da buɗewa asiri da AES-256, gabaɗaya a cikin bincike. Babu bayanan da ke barin na'urar. An tsara UX game da amincewa: yanayi mai haske, kwafi-zuwa-clipboard, da yanayi maras komai ba tare da rudani ba.",
          role: "Injiniyan Frontend & Mai Tsara UI/UX",
          impact: "Rufewa ba tare da uba ba, UX na kula da maɓallai mai tsabta",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/crypto-vault.jpeg",
          githubUrl: "https://github.com/mitchoder07/cryptoVault",
          liveUrl: "https://crypto-vauult.vercel.app/",
        },
        {
          name: "Similarity Checker",
          tagline: "Mai duba sata da yawa-algorithm da ma'auni na gani",
          description:
            "Mai duba sata wanda ke gudanar da algorithms da yawa na kamanceceniya da rubutu kuma yana nuna sakamako akan ma'auni na gani. Ya haɗa da mataimakin da ke ba da shawarar daɗaɗɗen bayani. An tsara UI na kwatanta da kuma ɓangaren ma'auni daga farko.",
          role: "Injiniyan Frontend & Mai Tsara UI/UX",
          impact: "Tsari mai yawa-algorithm, ma'auni na gani, mataimakin daɗaɗɗen bayani",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/similarity-checker.jpeg",
          githubUrl: "https://github.com/mitchoder07/similarity-checker",
          liveUrl: "https://similarity-checker-five.vercel.app/",
        },
        {
          name: "Cyber Bot",
          tagline: "Tambaya kome game da tsaron yanar gizo, sami amsa nan take",
          description:
            "Bot na tambaya da amsa na tsaron yanar gizo wanda ke ba da amsa nan take akan batutuwan tsaro na yau da kullun. An tsara UI na tattaunawa, tsarin shawarwari, da katunan amsa masu karantawa. An gina shi mobile-first da maɓalli mai saukin kewayawa.",
          role: "Injiniyan Frontend & Mai Tsara UI/UX",
          impact: "Amsa nan take, shawarwari, katunan amsa masu karantawa",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/cyber-bot.jpg",
          githubUrl: "https://github.com/mitchoder07/cyber-bot",
          liveUrl: "https://cyber-bot-zeta.vercel.app/",
        },
        {
          name: "Cyber-Words Guess",
          tagline: "Wasan ƙidaya kalmar siber",
          description:
            "Wasan ƙidaya kalma da aka gina game da kalmomin tsaron yanar gizo. An tsara tsarin wasan, maɓallan allo, da yanayin amsa mai launi. An tura shi a matsayin manhaja guda tare da sauyin yanayi mai santsi.",
          role: "Injiniyan Frontend & Mai Tsara UI/UX",
          impact: "Tsarin wasan, maɓallan allo, amsa mai launi",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/cyber-words.jpg",
          githubUrl: "https://github.com/mitchoder07/word-guessing-game",
          liveUrl: "https://word-guessing-game-nine.vercel.app/",
        },
        {
          name: "Kopi",
          tagline: "Coffee shop landing page with menu, gallery, and reviews",
          description:
            "A modern coffee-shop landing page with a hero section, menu showcase, customer reviews, photo gallery, and a working contact form. Designed the warm, cafe-inspired visual identity and built it mobile-first.",
          role: "Frontend Engineer & UI/UX Designer",
          impact: "Menu showcase, photo gallery, reviews section, contact form",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/kopi.png",
          githubUrl: "https://github.com/mitchoder07/coffee-shop",
          liveUrl: "https://coffee-kopi.vercel.app/",
        },
      ],
    },
    experience: {
      badge: "Kwarewa",
      heading: "Shekaru biyar na tsarawa, gini, da tura.",
      subheading:
        "Daga ayyukan freelance zuwa hidimar NYSC. Kowane matsayi ya koya min wani sashi na fasaha.",
      items: [
        {
          role: "Injiniyan Frontend Freelance",
          company: "Kai",
          period: "2024 - Yanzu",
          description:
            "Gina manhajojin yanar gizo na production da Next.js, TypeScript, Tailwind. Jagoran frontend na dandalin Al-Bashir Academy.",
          achievements: [
            "Tura Al-Bashir Academy LMS da cikakken tsarin tsara da PWA",
            "Gina 50+ abubuwa masu amfani da suka daba a aikin abokan ciniki",
          ],
        },
        {
          role: "Mai Tsara UI/UX Freelance",
          company: "Kai",
          period: "2023 - Yanzu",
          description:
            "Tsara samfurin dijital a Figma. Tsarin tsara, wireframe, prototype.",
          achievements: [
            "Bayar da 20+ tsara Figma a fadin fintech, e-commerce, da ilimi",
            "Gina tsarin tsara mai amfani da token na launi, rubutu, da tazara",
            "Gudanar da gwajin amfani wanda ya shafi yanke shawara na samfur",
          ],
        },
        {
          role: "Sahim IT & Mai Haɓaka Frontend",
          company: "FUHSI (NYSC)",
          period: "2025",
          description:
            "Sahim IT a Federal University of Health Sciences, Ila. Gina ƙananan kayan aikin cikin gida da goyon bayan ma'aikata.",
          achievements: [
            "Warware tikitocin helpdesk na ma'aikata da ɗalibai",
            "Gina ƙananan kayan aikin yanar gizo na cikin gida don aikin shiga",
            "Rubuta tsarin IT ga ƙungiyar",
          ],
        },
        {
          role: "Tafiyar Injiniyantakin Frontend",
          company: "Koyar da kai",
          period: "2021 - 2023",
          description:
            "Fara koyo da HTML, CSS, JavaScript. Gina ayyukan kansa kuma girma zuwa React da Next.js.",
          achievements: [
            "Tura ayyukan kansa ciki har da Baca da Crypto Vault",
            "Koyi React, TypeScript, da Tailwind ta hanyar ginin gaske",
            "Ba da gudummawa ga ƙananan tushen buɗe",
          ],
        },
        {
          role: "Matasha AI",
          company: "AI4FS, Jami'ar Summit",
          period: "2023",
          description:
            "Horarwa na AI for Females in STEM. Bincika tushen AI kuma aiwatar da su ga ƙananan ayyuka.",
          achievements: [
            "Kammala tsarin karatun AI na aiki da jagora",
            "Gina ƙananan demo na ML da Python",
            "Gabatar da aikin ƙarshe ga kohort",
          ],
        },
      ],
    },
    openSource: {
      badge: "Tushen Buɗe",
      heading: "Mayar da ita ga fasaha.",
      subheading:
        "Tushen buɗe shine yadda masana'antu ke tasowa. Ina bayar da gudummawa, kula, da rubuta takardun. domin wani ya yi min shi da farko.",
      reposLabel: "Repo na jama'a",
      starsLabel: "Taurari GitHub",
      contribsLabel: "Gudummawa / shekara",
      repos: [
        {
          name: "rafaab",
          description: "Kasuwar e-commerce mai kyau tare da mataimakin sayayya na AI. Paystack, siye mai sauri, bin diddigin a lokaci gaskiya.",
          language: "TypeScript",
          stars: "1",
        },
        {
          name: "baca-Al-qur-an",
          description: "Aplikacin yanar gizo na nazarin Alqur'ani tare da nazarin kalma-da-kalma da yanayin karantawa mai sauyin shiga.",
          language: "JavaScript",
          stars: "1",
        },
        {
          name: "cryptoVault",
          description: "Tsarin rufewa na AES-256 na gefen-abokan ciniki. Babu bayanan da ke barin na'urar.",
          language: "JavaScript",
          stars: "0",
        },
        {
          name: "similarity-checker",
          description: "Mai duba sata da yawa-algorithm tare da ma'auni na gani da mataimakin daɗaɗɗen bayani.",
          language: "JavaScript",
          stars: "1",
        },
      ],
      viewGithub: "Duba Bayanin GitHub",
    },
    writing: {
      badge: "Tsari",
      heading: "Kararran abubuwa daga fayil din tsari.",
      subheading:
        "Zaɓaɓɓen aikin tsari, bayanin tsari, da binciken UI daga Figma zuwa production.",
      readMore: "Duba kararran abubuwa",
      articles: [
        {
          title: "Rafaab: E-Commerce na Musamman Da Sake Tsara",
          excerpt:
            "Salar asalin zinariya tare da sayayya ta AI. Sayar da cikin gaggawa da kira lokaci, bin diddigin odar gani, da dashboard na mai sayarwa.",
          date: "2026-06-10",
          readTime: "Kararran Figma",
          tag: "E-Commerce",
        },
        {
          title: "Al-Bashir Academy LMS: Tsarin Tsarin Dandamalin Ilimi",
          excerpt:
            "Daga token na launi zuwa dashboard na samarwa. Cikakken tsarin tsari don LMS na jami'a da salar kore-zinariya, dashboard na analitik, da kwararun wayar hannu.",
          date: "2026-04-15",
          readTime: "Kararran Figma",
          tag: "Tsarin Tsari",
        },
        {
          title: "Flyer: Tsarin Talla Mai Tasiri Sosai",
          excerpt:
            "Rubutu mai karfi, toshe launi mai ban sha'awa, da tsari shirye don bugawa. Jerin tallan da aka tsara don kama hankali a kasa da dakika 2.",
          date: "2026-02-20",
          readTime: "Kararran Figma",
          tag: "Tsarin Zane",
        },
        {
          title: "Portfolio v1: Zaɓi launi, fasa lambar sirri",
          excerpt:
            "Wannan tsohon portfolio yana ba ka damar canza kowane launi da kake so a kan allo. Kuma ranar haifuwa ta? A kulle take da kalmar sirri – ka gwada! (Alamar: ba 1234 ba.)",
          date: "2026-01-05",
          readTime: "Kararran Figma",
          tag: "Tsarin Yanar Gizo",
        },
      ],
    },
    testimonials: {
      badge: "Shaidu",
      heading: "Abin da mutanen da na yi aiki tare da su ke cewa.",
      subheading:
        "Kwatancen. Domin portfolio ba tare da su resume ne kawai tare da sunan yanki.",
      items: [
      ],
    },
    contact: {
      badge: "Tuntuɓar",
      heading: "Bari mu gina wani abu mai daraja turawa.",
      subheading:
        "A halin yanzu ina bude don mukaman injiniyan frontend, kwangilolin tsara UI/UX, da zaɓaɓɓen aikin aiki. Faɗa min abin da kake gina.",
      nameLabel: "Sunanka",
      emailLabel: "Adireshin imel",
      messageLabel: "Saƙonka",
      namePlaceholder: "Sunanka",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Faɗa min game da aikinka, matsayi, ko ra'ayi...",
      send: "Aika Saƙo",
      sending: "Ana aikawa...",
      success: "Saƙon aka aika. Zan dawo maka cikin awanni 48.",
      orText: "ko",
      emailMe: "Imel ni kai tsaye",
      bookCall: "Book kiran intro na minti 30",
      downloadResume: "Sauke resume",
      followTitle: "Sani ni wani wuri",
    },
    footer: {
      tagline: "Injiniyan Frontend & Mai Tsara UI/UX. Mai ginawa. Mai turawa.",
      quote: "Great interfaces, like great warriors, are forged through a thousand quiet iterations no one ever sees.",
      builtWith: "An tsara & ginawa da kulawa. Next.js, TypeScript, Tailwind CSS, Figma.",
      rights: "Dukkan haƙƙoƙin an tanada.",
      backToTop: "Komawa sama",
      quickLinks: "Hanyoyi Masu Sauri",
      connect: "Haɗa",
    },
  },

  yo: {
    nav: {
      home: "Ilé",
      about: "Nípa",
      skills: "Ọgbọ́n",
      projects: "Iṣẹ́",
      experience: "Ìrírí",
      openSource: "Orísun Ìmọ̀",
      writing: "Kíkọ",
      design: "Àkóónú",
      testimonials: "Ẹ̀rín",
      contact: "Ìbámu",
      menu: "Atẹ",
    },
    hero: {
      badge: "Ṣíṣe fún iṣẹ́ tí a yàn",
      greeting: "Ẹ n lẹ́, mo jẹ́",
      name: "Abdullah Yusuf",
      akaLabel: "tí a mọ̀ sí",
      brandName: "Upin",
      title: "Onímọ̀-Ẹrọ Frontend & Aláṣẹ UI/UX",
      tagline:
        "Mo n ṣètò àti kọ́ àwọn ìjápọ̀ tó rẹwà àti tó wúlò fún ìwọlé. Láti inú wireframe Figma sí React tó yé tán, mo ń ṣẹ̀dá ọjà tí àwọn olùlò fẹ́ràn.",
      ctaPrimary: "Wo Iṣẹ́ Mi",
      ctaSecondary: "Ṣí Tẹ́mínálì",
      availability: "Ṣíṣe fún ipò frontend & ìdààkọ́",
      stat1Label: "Frontend",
      stat2Label: "Àwọ̀n Ìdà",
      stat3Label: "Awọn Ìfilọlẹ",
      scroll: "Yọ fún ìwárí",
    },
    terminal: {
      title: "Tẹ́mínálì Ìfarahàn",
      subtitle:
        "Èyí kì í ṣe portfolio. Ó jẹ́ shẹ́lì. Tẹ àṣẹ kí o wárí. gbogbo abala jẹ́ fáìlì tí o lè kà.",
      prompt: "upin@portfolio:~$",
      welcome:
        "Káàbọ̀ sí tẹ́mínálì portfolio ìfarahàn Upin. Tẹ 'help' láti rí àwọn àṣẹ tó wà.",
      helpLine1: "Àwọn àṣẹ tó wà:",
      helpLine2: "Ìmọ̀ràn: àwọn àṣẹ kò ṣe pàtàkì bẹ́bẹ̀. Gbìyànjú 'whoami' láti bẹ̀rẹ̀.",
      commands: {
        help: "Fíhàn ìrànwọ́ yìí",
        about: "Ka about.md",
        skills: "Atokọ skills.json",
        projects: "Atokọ projects/",
        experience: "Fíhàn experience.log",
        contact: "Ìwé contact.vcf",
        clear: "Pa tẹ́mínálì mọ́",
        whoami: "Ta ni èmi?",
        ls: "Atokọ àwọn nkan inú directory",
        social: "Fíhàn àwọn ìjápọ̀ ayélujára",
      },
      outputs: {
        whoami:
          "Abdullah Yusuf (Upin). Onímọ̀-Ẹrọ Frontend & Aláṣẹ UI/UX pẹ̀lú ọdún 5+ n ṣètò àti fí ìjápọ̀ tó wúlò fún ìwọlé rán. Mo n yí wireframe Figma di ọjà React tó yé tán.",
        ls: "about.md skills.json projects/ experience.log contact.vcf social.txt",
        social:
          "GitHub: github.com/mitchoder07 · LinkedIn: linkedin.com/in/mitchoder07 · X: x.com/mitchoder07 · Dribbble: dribbble.com/mitchoder07 · Figma: figma.com/@mitchoder07 · Email: olaniyiaremu2003@gmail.com",
        unknown: "àṣẹ kò rí. Tẹ 'help' fún àwọn àṣẹ tó wà.",
      },
      placeholder: "Tẹ àṣẹ kí o tẹ Enter...",
    },
    about: {
      badge: "Nípa",
      heading: "Aláṣẹ tó ń kọ́ kóòdù. Onímọ̀-ẹrọ tó ń ṣètò.",
      p1: "Mo jẹ́ Abdullah Yusuf, bíbí Upin. Onímọ̀-ẹrọ frontend àti aláṣẹ UI/UX tí ó ti lo ọdún márùn-ún tó kọjá n yí ìbèèrè di àwọn ìjápọ̀ tí àwọn olùlò fẹ́ràn. Iṣẹ́ mi wà láàárín ìdà àti kóòdù: mo ń kòwé wireframe ní Figma ní òwúrọ̀, mo ń kọ́ wọn ní React ní ọ̀sán, àti mo ń ṣ'àfẹ́fẹ́ ìrìn ní alẹ́. Mo gbagbọ pé ọ̀rọ̀ ẹ̀yìn tó dára ń wá láti ọ̀dọ̀ àwọn onímọ̀-ẹrọ tó yé ìdà àti àwọn aláṣẹ tó yé kóòdù.",
      p2: "Èyí tó yà mí sótọ̀ ní pé mo ní ẹ̀gbẹ́ méjèèjì. Mo ti ṣètò àwọn ọ̀nà ìdà àti mo ti fi wọ́n ṣẹ́ nínú production. Mo ti kọ́ àwọn pano analítíìkì pẹ̀lú Recharts, àwọn fọọmu mẹ́jẹ-mẹ́jẹ pẹ̀lú ìfẹ̀rílẹ̀, àti àwọn PWA tó ń ṣiṣẹ́ láìsí ayélujára. Bóyá ó jẹ́ ṣíṣe bọtíní tó dára tàbí kíkọ́ ilé-ìkọ́ ẹ̀rọ, mo mú ìmọ̀-ẹrọ kanna wá.",
      p3: "Nígbà tí n kò ń rán, mo ń kọ́. Mo ń kọ̀wé nípa àwọn ọ̀nà ìdà àti àkóónú frontend, mo ń ṣàkóbá fún àwọn onímọ̀-ẹrọ tó ń bẹ̀rẹ̀, àti mo ń ṣe ìrànwọ́ sí orísun ìmọ̀. Mo gbagbọ pé àwọn onímọ̀-ẹrọ frontend tó dára jù jẹ́ àwọn tó ń ṣàkíyèsi àwọn nkan kéékèèké. Portfolio yìí ni ìgbìyànjú mi láti fihàn ọ̀wọ́ irúfẹ́ àkíyèsí yẹn.",
      highlights: [
        { label: "Ọdún frontend", value: "5+" },
        { label: "Àwọn ìdà Figma", value: "20+" },
        { label: "Àwọn ọ̀ṣọ́ tó kọ́", value: "50+" },
      ],
      coreTitle: "Èyí tí mo mú wá.",
      coreDesc: "Ìdà àti ìmọ̀-ẹrọ, a fi rán pọ̀.",
      coreItems: [
        { title: "Àwọn Ọ̀nà Ìdà", desc: "Àwọn tóǹù launì, sikelì kíkọ̀, ọ̀nà tàrà, àti ilé-ikawe ẹ̀yìn tó ń bọ̀ láti inú production." },
        { title: "Àkóónú Frontend", desc: "Next.js App Router, ẹgbẹ̀ lọ́nà, ọ̀ṣọ́ sẹ́fà, àti àkóónú fóòdà tó ń tòrò." },
        { title: "Ìdà Tó Dára", desc: "Àwọn àkóónú mobile-first tó ń farahàn tó rí tàn lórí gbogbo breakpoint, kì í ṣe ìdàkọ̀róná." },
        { title: "Ìfihàn Dátà", desc: "Àwọn pano Recharts, àwọn góòjí àdánì, àti àwọn ọ̀nà tó wúlò fún ìwọlé tó ń sọ ìtàn." },
        { title: "Ìmọ̀-Wọlé", desc: "Àwọn ọ̀nà WCAG, HTML òtítọ́, kewaye pínpín, àti àkíyèsí olùkà álóò." },
        { title: "Iṣẹ́", desc: "PWA, pínyà-kóòdù, ìmúdára àwòrán, àti Core Web Vitals níhìn-àrò." },
      ],
    },
    skills: {
      badge: "Ọgbọ́n",
      heading: "Ìdà àti kóòdù, láti òpin sí òpin.",
      subheading:
        "N kò ní 'ẹgbẹ́' stack. Mo ní gbogbo ìho, láti Figma sí bincike. Èyí ní mo máa ń fọwọ́ lọ́ọ̀dẹ̀ lójoojúmọ́.",
      categories: {
        frontend: {
          title: "Frontend",
          items: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Tailwind CSS 4",
            "Framer Motion",
            "Three.js",
            "Vite",
            "HTML5",
            "CSS3",
            "JavaScript",
          ],
        },
        design: {
          title: "Ìdà",
          items: [
            "Figma",
            "Àwọn Ọ̀nà Ìdà",
            "Wireframing",
            "Prototyping",
            "Ọ̀rọ̀ Àwọ̀",
            "Kíkọ̀",
            "Àwọn Ọ̀nà Tàrà",
            "Ilé-ikawe Ẹ̀yìn",
            "Ìmọ̀-Wọlé",
            "Ìdà Tó Dára",
          ],
        },
        state: {
          title: "State & Dátà",
          items: [
            "Zustand",
            "React Context API",
            "TanStack Query",
            "Recharts",
            "React Hook Form",
            "Zod",
          ],
        },
        components: {
          title: "Àwọn Ẹ̀yìn",
          items: [
            "shadcn/ui",
            "Radix UI",
            "Àwọn Ẹ̀yìn Àdánì",
            "Àwọn Ọ̀rọ̀-sọ̀rọ̀",
            "Àwọn Dropdown",
            "Àwọn Sheet",
            "Àwọn Accordion",
            "Àwọn Fọọmu",
          ],
        },
        tooling: {
          title: "Àwọn Ohun Èlò",
          items: [
            "Git",
            "GitHub Actions",
            "Vercel",
            "PWA",
            "SEO/Metadata API",
            "Print CSS",
            "Ẹ̀yín Dúdú",
            "Storybook",
          ],
        },
        languages: {
          title: "Àwọn Èdè Ìkọ̀wé",
          items: [
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Python",
            "SQL",
            "Bash",
          ],
        },
      },
    },
    projects: {
      badge: "Iṣẹ́ Tí a Yàn",
      heading: "Àwọn iṣẹ́ tó dà, tó kọ́, tó rán.",
      subheading:
        "Àtòjọ àwọn ọjà tí mo ti dà àti kọ́. láti inú àwọn manhajarì-ẹ̀kọ́ sí àwọn kasuwannan e-commerce. Ọ̀kọ̀ọ̀kan wọn kọ́ mi nkan tuntun.",
      viewCode: "Wo Kóòdù",
      viewLive: "Demo Live",
      caseStudy: "Ìwádìí Iṣẹ́",
      role: "Ipò",
      impact: "Ìbámu",
      tech: "Teknọ́lọ́jì",
      featured: "Tí a yàn",
      confidential: "Ìkọ́kọ́",
      items: [
        {
          name: "Al-Bashir Academy LMS Portal",
          tagline: "Manhaja ẹ̀kọ́ production pẹ̀lú ọ̀nà ìdà, analítíìkì, àti PWA",
          description:
            "Ọ̀nà Kòntíròò Kíkọ́-Ẹ̀kọ́ fún Al-Bashir Academy. Mo kọ́ gbogbo frontend: ọ̀nà ìdà (tóǹù launì, kíkọ̀, tàrà), ìkòwé kọ́ọ̀ṣì, kíkọ́ quiz, àwọn pano analítíìkì pẹ̀lú Recharts, àwọn fọọmu mẹ́jẹ-mẹ́jẹ, àti àtìlẹ́yìn PWA. Èyí jẹ́ iṣẹ́ oníṣẹ́-àṣẹ ìkọ́kọ́.",
          role: "Onímọ̀-Ẹrọ Frontend & Aláṣẹ UI/UX",
          impact: "Ọ̀nà ìdà tó yé, 50+ àwọn ẹ̀yìn tó lò, ìdà mobile-first",
          tech: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "Zustand", "TanStack Query", "Recharts"],
          gradient: "linear-gradient(135deg, #006633 0%, #D4AF37 50%, #1a1a2e 100%)",
          confidential: true,
        },
        {
          name: "Rafaab",
          tagline: "Kasuwan e-commerce tó yé pẹ̀lú olùrànwọ́ ríra AI",
          description:
            "Kasuwan e-commerce tó yé tó kọ́ láti fi Jumia àti AliExpress lẹ́yìn. Ó ní olùrànwọ́ ríra AI tó ń jẹ́ Rafi, títà kínní pẹ̀lú ìkànnì-gba, ìtẹ̀lé-ọ̀nà ọ̀dọ̀ kínní pẹ̀lú àwọn gólòìì àsìkò, pano olùtà, àti ìdásílẹ̀ owó Paystack. Ìdánìmọ̀ fìtà-gòò láti oríṣiríṣi 8.",
          role: "Onímọ̀-Ẹrọ Frontend & Aláṣẹ UI/UX",
          impact: "Olùrànwọ́ AI, títà kínní, ìtẹ̀lé àkókò-gidi, owó Paystack",
          tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion", "Paystack"],
          image: "/portfolio-images/rafaab.png",
          githubUrl: "https://github.com/mitchoder07/rafaab",
          liveUrl: "https://rafaab.vercel.app/",
        },
        {
          name: "Your Studio — Àkọ́jọ́pọ̀ Logo",
          tagline: "Àkọ́jọ́pọ̀ logo alẹ́ẹ́kùú tí ó ní àmì ọ́kọ́ 74, ìyípadà lásìkò gidi, àti olùwo lightbox",
          description:
            "Aplikasyon wẹ́ẹ́bù àkọ́jọ́pọ̀ logo tí ó ní ìrísí alẹ́ẹ́kùú tí ó ń kójọ́ àwọ̀n àmì ọ́kọ́ 74 káríaká àwọ̀n òwò 13 àti àwọ̀n ìrísí àyàwò 8. A ṣẹ́ àkọ́sílẹ́ rẹ̀ pẹ̀lù Next.js 16 àti TypeScript, ó ní Íànwò masonry grid, ìyípadà lásìkò gidi, wádìí làì ní Íààmù̀, lightbox tí ó gboò léèkún pẹ̀lù ìtọ́nisọ́nà keyboard, àti ìyípadà ìrísí alẹ́ẹ́kùú/ìmọ́lẹ̀. Kọ̀ọ̀kan logo wà ní ìmúdàrà gẹ́gẹ́bíi àwọ̀rán 1024×1024. Wọ̀n yìí á bọ́ làìpẹ́.",
          role: "Oníṣẹ́ Frontend & Atúnṣe UI/UX",
          impact: "Logo 74, òwò 13, ìrísí 8, grid masonry, lightbox, ìyípadà ìrísí",
          tech: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "Lucide", "next-themes"],
          gradient: "linear-gradient(135deg, #0a0a0a 0%, #D4AF37 50%, #1a1a2e 100%)",
          comingSoon: true,
        },
        {
          name: "Baca",
          tagline: "Ohun èlò ẹ̀kọ́ Quran pẹ̀lú ìtupalẹ̀ ọ̀rọ̀-lọ́rọ̀",
          description:
            "Aplikáǹsì wẹ́ẹ̀bù ẹ̀kọ́ Quran tó ń fún àwọn olùlò láti kà, gbọ́, àti kọ́ pẹ̀lú ìyípadà ọ̀rọ̀-lọ́rọ̀. A kọ́ pẹ̀lú HTML òtítọ́, kewaye tó wúlò fún ìwọlé, àti ọ̀nà kíkà tó ń gbé ìfòkàn-sí. A ṣètò ìlẹ̀rọ̀ mobile-first.",
          role: "Onímọ̀-Ẹrọ Frontend & Aláṣẹ UI/UX",
          impact: "Àkọ́yẹ́wé ọ̀rọ̀-lọ́rọ̀, ìkó-orin, ìlọ ẹ̀kọ́ tó wúlò",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/islam-baca.png",
          githubUrl: "https://github.com/mitchoder07/baca-Al-qur-an",
          liveUrl: "https://baca-al-qur-an.onrender.com/",
        },
        {
          name: "Crypto Vault",
          tagline: "Ìdásóní AES-256 nínú bincike",
          description:
            "Àpò ìdásóní ẹ̀gbẹ́-oníṣẹ́ tó ń dásóní àti ṣíṣe àwọn asírí pẹ̀lú AES-256, gbangba nínú bincike. Kò sí dátà tó ń kúrò lórí ẹ̀rọ. A ṣètò UX lórí ìgbẹ́kẹ̀lé: àwọn ìpín tó yé, dá-kóòpì-sí-clipboard, àti àwọn ìpín asọ̀-làyọ láìsí ìdàrò.",
          role: "Onímọ̀-Ẹrọ Frontend & Aláṣẹ UI/UX",
          impact: "Ìdásóní láìsí sẹ́fà, UX ìṣàkóso pínpín tó mọ́",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/crypto-vault.jpeg",
          githubUrl: "https://github.com/mitchoder07/cryptoVault",
          liveUrl: "https://crypto-vauult.vercel.app/",
        },
        {
          name: "Similarity Checker",
          tagline: "Olùdájọ́ jíjàgídíjàcan pẹ̀lú algorithm púpọ̀ àti góòjí àríyànjà",
          description:
            "Olùdájọ́ jíjàgídíjàcan tó ń ṣiṣẹ́ àwọn algorithm púpọ̀ ìdájọ́-ìdàkejì ọ̀rọ̀ àti tó ń sọ àbájáde lórí góòjí àríyànjà. Ó ní olùrànwọ́ ìdásílẹ̀ ìrọ̀rùn tó ń dábọ̀ ìdámọ̀ràn tó yẹ. A ṣètò UI ìdájọ́ àti ọ̀ṣọ́ góòjí láti ìbẹ̀rẹ̀.",
          role: "Onímọ̀-Ẹrọ Frontend & Aláṣẹ UI/UX",
          impact: "Ìdámọ̀ràn algorithm-púpọ̀, góòjí àríyànjà, olùrànwọ́ ìdásílẹ̀",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/similarity-checker.jpeg",
          githubUrl: "https://github.com/mitchoder07/similarity-checker",
          liveUrl: "https://similarity-checker-five.vercel.app/",
        },
        {
          name: "Cyber Bot",
          tagline: "Béèrè kí nkan bíi àbò sáìbà, gba àhùnpò lásìkò",
          description:
            "Bot Q&A àbò sáìbà tó ń fún ni àhùnpò lásìkò lórí àwọn ọ̀rọ̀ àbò wọ́pọ̀. A ṣètò UI ìbámu-ọ̀rọ̀, ọ̀nà àbá-àfọ́jú, àti àwọn káàdì àhùnpò tó rọrùn láti kà. A kọ́ mobile-first pẹ̀lú ìbámu pínpín-rọrùn.",
          role: "Onímọ̀-Ẹrọ Frontend & Aláṣẹ UI/UX",
          impact: "Àhùnpò lásìkò, àbá-àfọ́jú, àwọn káàdì àhùnpò tó rọrùn",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/cyber-bot.jpg",
          githubUrl: "https://github.com/mitchoder07/cyber-bot",
          liveUrl: "https://cyber-bot-zeta.vercel.app/",
        },
        {
          name: "Cyber-Words Guess",
          tagline: "Eré ìròyìn ọ̀rọ̀ sáìbà",
          description:
            "Eré ìròyìn ọ̀rọ̀ tó kọ́ lórí àwọn ọ̀rọ̀ àbò sáìbà. A ṣètò ìlò eré, kíbọọdù lórí-èróò, àti àwọn ìpín àhùnpò àwọ̀. A fi rán gẹ́gẹ́ bíi àpò-ojú-kan pẹ̀lú ìyípadà ìpín rírọ.",
          role: "Onímọ̀-Ẹrọ Frontend & Aláṣẹ UI/UX",
          impact: "Ìlò eré, kíbọọdù lórí-èróò, àhùnpò àwọ̀",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/cyber-words.jpg",
          githubUrl: "https://github.com/mitchoder07/word-guessing-game",
          liveUrl: "https://word-guessing-game-nine.vercel.app/",
        },
        {
          name: "Kopi",
          tagline: "Coffee shop landing page with menu, gallery, and reviews",
          description:
            "A modern coffee-shop landing page with a hero section, menu showcase, customer reviews, photo gallery, and a working contact form. Designed the warm, cafe-inspired visual identity and built it mobile-first.",
          role: "Frontend Engineer & UI/UX Designer",
          impact: "Menu showcase, photo gallery, reviews section, contact form",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/kopi.png",
          githubUrl: "https://github.com/mitchoder07/coffee-shop",
          liveUrl: "https://coffee-kopi.vercel.app/",
        },
      ],
    },
    experience: {
      badge: "Ìrírí",
      heading: "Ọdún márùn-ún kíkọ́, fífi rán, àti ìṣàkóso.",
      subheading:
        "Láti inú àwọn iṣẹ́ freelance sí ìṣẹ́ NYSC. Ipò kọ̀ọ̀kan kọ́ mi ọ̀nà ìmọ̀-ẹrọ tó yàtọ̀.",
      items: [
        {
          role: "Onímọ̀-Ẹrọ Frontend Freelance",
          company: "Fúnra-ra",
          period: "2024 - Lọ́wọ́lọ́wọ́",
          description:
            "Kíkọ́ àwọn àpó wẹ́ẹ̀bù production pẹ̀lú Next.js, TypeScript, Tailwind. Mo jẹ́ olùṣàkóso frontend pátákó Al-Bashir Academy.",
          achievements: [
            "Fi Al-Bashir Academy LMS rán pẹ̀lú ọ̀nà ìdà tó yé àti PWA",
            "Kọ́ 50+ àwọn ẹ̀yìn tó lò láàrín àwọn iṣẹ́ oníṣẹ́",
          ],
        },
        {
          role: "Aláṣẹ UI/UX Freelance",
          company: "Fúnra-ra",
          period: "2023 - Lọ́wọ́lọ́wọ́",
          description:
            "Ṣètò àwọn ọjà díjítálì ní Figma. Àwọn ọ̀nà ìdà, àwọn wireframe, àwọn prototype.",
          achievements: [
            "Pèsè 20+ àwọn ìdà Figma láàrín fintech, e-commerce, àti ẹ̀kọ́",
            "Kọ́ àwọn ọ̀nà ìdà tó lò pẹ̀lú tóǹù launì, kíkọ̀, àti tàrà",
            "Ṣe àyẹ̀wò ìmọ̀-lò tó fa ìpinnu ọjà pàtàkì",
          ],
        },
        {
          role: "Ìtìlẹ́yìn IT & Olùdàgbà-sókè Frontend",
          company: "FUHSI (NYSC)",
          period: "2025",
          description:
            "Ìtìlẹ́yìn IT ní Federal University of Health Sciences, Ila. Kíkọ́ àwọn ohun èlò inú àti ìtìlẹ́yìn àwọn osiṣẹ́.",
          achievements: [
            "Yí ọ̀rọ̀ àwọn tìkẹ́ẹ̀tì helpdesk fún àwọn osiṣẹ́ àti àwọn akẹ́kọ̀ọ́",
            "Kọ́ àwọn ohun èlò wẹ́ẹ̀bù inú kéèké fún àwọn iṣẹ́-ṣíṣe kíkọ̀-wọlé",
            "Kọ̀wé àwọn ìlànà IT fún ẹgbẹ́",
          ],
        },
        {
          role: "Ìrìn-Ajò Kíkọ́-Ẹrọ Frontend",
          company: "Mo-kọ́-ra-mi",
          period: "2021 - 2023",
          description:
            "Bẹ̀rẹ̀ kíkọ́ HTML, CSS, JavaScript. Kọ́ àwọn iṣẹ́ fúnra-ra àti dàgbà-sókè sí React àti Next.js.",
          achievements: [
            "Fi àwọn iṣẹ́ fúnra-ra rán pẹ̀lú Baca àti Crypto Vault",
            "Kọ́ React, TypeScript, àti Tailwind nípa kíkọ́ àdání",
            "Ṣe ìrànwọ́ sí àwọn ilé-ìkọ́ orísun ìmọ̀ kéèké",
          ],
        },
        {
          role: "Akẹ́kọ̀ọ́ AI",
          company: "AI4FS, Yunifásítì Summit",
          period: "2023",
          description:
            "Ilé-ìkọ́ AI for Females in STEM. Mo wá kó nipa àkósóní AI àti lo ó fún àwọn iṣẹ́ kéèké.",
          achievements: [
            "Parí ẹ̀kọ́ AI àdání pẹ̀lú ìmọ̀ràn",
            "Kọ́ àwọn demo ML kéèké pẹ̀lú Python",
            "Ṣàfihàn iṣẹ́ ìkẹyìn sí ẹgbẹ́",
          ],
        },
      ],
    },
    openSource: {
      badge: "Orísun Ìmọ̀",
      heading: "Fífún ìmọ̀-ẹrọ padà.",
      subheading:
        "Orísun ìmọ̀ ni ọ̀nà tí àwọn ile-iṣẹ ń dàgbà-sókè. Mo ń ṣe ìrànwọ́, bámú, àti kọ̀wé. nítorí wọn ṣe fún mi tẹ́lẹ̀.",
      reposLabel: "Àwọn repo gbogbo-ènìyàn",
      starsLabel: "Àwọn ìràwọ̀ GitHub",
      contribsLabel: "Àwọn ìrànwọ́ / ọdún",
      repos: [
        {
          name: "rafaab",
          description: "Kasuwan e-commerce tó yé pẹ̀lú olùrànwọ́ ríra AI. Paystack, títà kínní, ìtẹ̀lé àkókò-gidi.",
          language: "TypeScript",
          stars: "1",
        },
        {
          name: "baca-Al-qur-an",
          description: "Aplikáǹsì wẹ́ẹ̀bù ẹ̀kọ́ Quran pẹ̀lú ìtupalẹ̀ ọ̀rọ̀-lọ́rọ̀ àti ọ̀nà kíkà tó wúlò.",
          language: "JavaScript",
          stars: "1",
        },
        {
          name: "cryptoVault",
          description: "Àpò ìdásóní AES-256 ẹ̀gbẹ́-oníṣẹ́. Kò sí dátà tó ń kúrò lórí ẹ̀rọ.",
          language: "JavaScript",
          stars: "0",
        },
        {
          name: "similarity-checker",
          description: "Olùdájọ́ jíjàgídíjàcan algorithm-púpọ̀ pẹ̀lú góòjí àríyànjà àti olùrànwọ́ ìdásílẹ̀.",
          language: "JavaScript",
          stars: "1",
        },
      ],
      viewGithub: "Wo Ìwé GitHub",
    },
    writing: {
      badge: "Àkóónú",
      heading: "Àwọn ìdànjáde láti inú fáìlì àkóónú.",
      subheading:
        "Àwọn iṣẹ́ àkóónú tí a yàn, ìrànwọ́ ìmọ̀, àti ìwárí UI láti Figma sí production.",
      readMore: "Wo ìdànjáde",
      articles: [
        {
          title: "Rafaab: E-Commerce Alákọ̀bájẹ́ Tí A Tún Ṣe",
          excerpt:
            "Ìdánimọ̀ wúrà pẹ̀lú ìràwọ́ AI. Títà kíkankín pẹ̀lú ìkànnì, ìtọ́sọ́nà ìràpadà, àti dashboard olùtà.",
          date: "2026-06-10",
          readTime: "Ìdànjáde Figma",
          tag: "E-Commerce",
        },
        {
          title: "Al-Bashir Academy LMS: Ètò Àkóónú Dandamali Ẹ̀kọ́",
          excerpt:
            "Láti tóǹù launì sí dashboard iṣelọpọ. Ètò àkóónú kíkankín fún LMS yunifásítì pẹ̀lú wúrà-eṣó, dashboard analitik, àti kwararoyé mobile.",
          date: "2026-04-15",
          readTime: "Ìdànjáde Figma",
          tag: "Ètò Àkóónú",
        },
        {
          title: "Flyer: Àkóónú Títà Tó Ni Ìpa",
          excerpt:
            "Kíkọ̀ gígùn, ìpì launì tó ṣàyẹ̀wò, àti àkóónú tó yẹ fún ìtẹ̀. Àkójọ́pọ̀ flyer tí a ṣe láti mú àkíyèsí nínú ìsẹ́jú 2.",
          date: "2026-02-20",
          readTime: "Ìdànjáde Figma",
          tag: "Àkóónú Kíkọ̀",
        },
        {
          title: "Portfolio v1: Yan awọ, pa koodu",
          excerpt:
            "Portfolio atijọ yii jẹ ki o yan eyikeyi awọ ti o fẹ lori iboju. Ọjọ-ibi mi? Ti pa mọ lẹhin odi ọrọigbaniwọle – ma gbiyanju lati sọ! (Amọ: kii ṣe 1234.)",
          date: "2026-01-05",
          readTime: "Ìdànjáde Figma",
          tag: "Àkóónú Web",
        },
      ],
    },
    testimonials: {
      badge: "Ẹ̀rín",
      heading: "Ìró tí àwọn tó ti bá mi ṣiṣẹ́ ń sọ.",
      subheading:
        "Ìwé-ẹ̀rí. Nítorí portfolio láìsí wọn, résumé ni pẹ̀lú orúkọ ìdáná.",
      items: [
      ],
    },
    contact: {
      badge: "Ìbámu",
      heading: "Ẹ jẹ́ ká bẹ̀rẹ̀ ohun tó yẹ ká rán.",
      subheading:
        "Lọ́wọ́lọ́wọ́ mo wà fún àwọn ipò onímọ̀-ẹrọ frontend, àwọn ìdásílẹ̀ UI/UX, àti iṣẹ́ àdání tó a yàn. Sọ fún mi ohun tó ń bẹ̀.",
      nameLabel: "Orúkọ rẹ",
      emailLabel: "Adírẹ́sì emaili",
      messageLabel: "Àṣẹ́ rẹ",
      namePlaceholder: "Orúkọ rẹ",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Sọ fún mi nípa iṣẹ́ rẹ, ipò, tàbí ìrònú...",
      send: "Fi Àṣẹ́ Rán",
      sending: "Ìfí-rán...",
      success: "Àṣẹ́ rán. Mo ó dáhùn pẹ̀lú rẹ láìjẹ́ gba àwọ̀ 48.",
      orText: "tàbí",
      emailMe: "Emaili mi lọ́wọ́-dọ́tọ́",
      bookCall: "Pè pẹ̀lú ọ̀pọ̀-mínítì 30",
      downloadResume: "Gbà résumé",
      followTitle: "Rí mi níbi mìíràn",
    },
    footer: {
      tagline: "Onímọ̀-Ẹrọ Frontend & Aláṣẹ UI/UX. Oníkọ́. Onífí-rán.",
      quote: "Great interfaces, like great warriors, are forged through a thousand quiet iterations no one ever sees.",
      builtWith: "A ṣètò & kọ́ pẹ̀lú ìtọ́jú. Next.js, TypeScript, Tailwind CSS, Figma.",
      rights: "Gbogbo ẹ̀tọ̀ dábàbà.",
      backToTop: "Padà sí òkè",
      quickLinks: "Àwọn Ìjápọ̀ Yara",
      connect: "Dá pọ̀",
    },
  },

  ja: {
    nav: {
      home: "ホーム",
      about: "私について",
      skills: "スキル",
      projects: "プロジェクト",
      experience: "経歴",
      openSource: "オープンソース",
      writing: "執筆",
      design: "デザイン",
      testimonials: "推薦の声",
      contact: "お問い合わせ",
      menu: "メニュー",
    },
    hero: {
      badge: "厳選された案件の依頼を受付中",
      greeting: "こんにちは、",
      name: "Abdullah Yusuf",
      akaLabel: "通称",
      brandName: "Upin",
      title: "フロントエンドエンジニア & UI/UXデザイナー",
      tagline:
        "美しくアクセシブルなインターフェースを設計・構築します。FigmaのワイヤーフレームからピクセルパーフェクトなReactまで、ユーザーが愛するプロダクトを作ります。",
      ctaPrimary: "作品を見る",
      ctaSecondary: "ターミナルを開く",
      availability: "フロントエンド & デザインの役職募集中",
      stat1Label: "フロントエンド",
      stat2Label: "デザイン",
      stat3Label: "Contributions",
      scroll: "スクロールして探検",
    },
    terminal: {
      title: "インタラクティブターミナル",
      subtitle:
        "これはポートフォリオではありません。シェルです。コマンドを入力して探検してください. 各セクションは読めるファイルです。",
      prompt: "upin@portfolio:~$",
      welcome:
        "Upinのインタラクティブポートフォリオターミナルへようこそ。「help」と入力すると使用可能なコマンドが表示されます。",
      helpLine1: "使用可能なコマンド:",
      helpLine2: "ヒント: コマンドは大文字小文字を区別しません。「whoami」から始めてみてください。",
      commands: {
        help: "このヘルプメッセージを表示",
        about: "about.mdを読む",
        skills: "skills.jsonを一覧表示",
        projects: "projects/を一覧表示",
        experience: "experience.logを表示",
        contact: "contact.vcfを印刷",
        clear: "ターミナルをクリア",
        whoami: "私は誰?",
        ls: "ディレクトリの内容を一覧表示",
        social: "ソーシャルリンクを表示",
      },
      outputs: {
        whoami:
          "Abdullah Yusuf (Upin). フロントエンドエンジニア & UI/UXデザイナー。5年以上アクセシブルなインターフェースを設計・リリース。FigmaのワイヤーフレームをピクセルパーフェクトなReactプロダクトに変換します。",
        ls: "about.md skills.json projects/ experience.log contact.vcf social.txt",
        social:
          "GitHub: github.com/mitchoder07 · LinkedIn: linkedin.com/in/mitchoder07 · X: x.com/mitchoder07 · Dribbble: dribbble.com/mitchoder07 · Figma: figma.com/@mitchoder07 · Email: olaniyiaremu2003@gmail.com",
        unknown: "コマンドが見つかりません。「help」と入力して使用可能なコマンドを確認してください。",
      },
      placeholder: "コマンドを入力してEnterを押してください...",
    },
    about: {
      badge: "私について",
      heading: "コードを書くデザイナー。デザインするエンジニア。",
      p1: "私はAbdullah Yusuf、Upinとして知られています。過去5年間、アイデアをユーザーが愛するインターフェースに変えてきたフロントエンドエンジニア兼UI/UXデザイナーです。私の仕事はデザインとコードの交点にあります。朝にFigmaでワイヤーフレームを描き、午後にReactで構築し、夕方にアニメーションを磨きます。偉大なプロダクトはデザインを理解するエンジニアとコードを理解するデザイナーから生まれると信じています。",
      p2: "私を際立たせるのは、両側を所有していることです。デザインシステムを設計し、本番で実装してきました。Rechartsを使った分析ダッシュボード、バリデーション付きの多段階フォーム、オフラインで動くPWAを構築してきました。ボタンの手触りからコンポーネントライブラリの設計まで、同じ職人技を持ち込みます。",
      p3: "出荷していない時は、学んでいます。デザインシステムとフロントエンドアーキテクチャについて書き、志ある開発者をメンターし、オープンソースに貢献しています。最高のフロントエンドエンジニアは詳細に執着すると信じています。このポートフォリオは、その執着がどのようなものかをお見せする試みです。",
      highlights: [
        { label: "フロントエンド年数", value: "5+" },
        { label: "Figmaデザイン", value: "20+" },
        { label: "構築コンポーネント", value: "50+" },
      ],
      coreTitle: "私がもたらすもの。",
      coreDesc: "デザインとエンジニアリング、一緒に届けます。",
      coreItems: [
        { title: "デザインシステム", desc: "カラートークン、タイポグラフィスケール、スペーシングシステム、本番リリース済みのコンポーネントライブラリ。" },
        { title: "フロントエンドアーキテクチャ", desc: "Next.js App Router、ルートグループ、サーバーコンポーネント、スケールするフォルダ構造。" },
        { title: "レスポンシブデザイン", desc: "全ブレークポイントで意図的に見えるモバイルファーストレイアウト、単なる積み上げではない。" },
        { title: "データ可視化", desc: "Rechartsダッシュボード、カスタムゲージ、ストーリーを語るアクセシブルなチャート。" },
        { title: "アクセシビリティ", desc: "WCAG準拠パターン、セマンティックHTML、キーボードナビ、スクリーンリーダー配慮。" },
        { title: "パフォーマンス", desc: "PWA、コード分割、画像最適化、緑のCore Web Vitals。" },
      ],
    },
    skills: {
      badge: "スキル",
      heading: "デザインとコード、エンドツーエンド。",
      subheading:
        "スタックの「側」はありません。Figmaからブラウザまで、全表面を所有しています。これが毎日使っているものです。",
      categories: {
        frontend: {
          title: "フロントエンド",
          items: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Tailwind CSS 4",
            "Framer Motion",
            "Three.js",
            "Vite",
            "HTML5",
            "CSS3",
            "JavaScript",
          ],
        },
        design: {
          title: "デザイン",
          items: [
            "Figma",
            "デザインシステム",
            "ワイヤーフレーミング",
            "プロトタイピング",
            "カラー理論",
            "タイポグラフィ",
            "スペーシングシステム",
            "コンポーネントライブラリ",
            "アクセシビリティ",
            "レスポンシブデザイン",
          ],
        },
        state: {
          title: "状態 & データ",
          items: [
            "Zustand",
            "React Context API",
            "TanStack Query",
            "Recharts",
            "React Hook Form",
            "Zod",
          ],
        },
        components: {
          title: "コンポーネント",
          items: [
            "shadcn/ui",
            "Radix UI",
            "カスタムコンポーネント",
            "ダイアログ",
            "ドロップダウン",
            "シート",
            "アコーディオン",
            "フォーム",
          ],
        },
        tooling: {
          title: "ツール",
          items: [
            "Git",
            "GitHub Actions",
            "Vercel",
            "PWA",
            "SEO/Metadata API",
            "Print CSS",
            "ダークモード",
            "Storybook",
          ],
        },
        languages: {
          title: "プログラミング言語",
          items: [
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Python",
            "SQL",
            "Bash",
          ],
        },
      },
    },
    projects: {
      badge: "選考作品",
      heading: "設計・構築・リリースされたプロジェクト。",
      subheading:
        "私が設計・構築したプロダクトの厳選. 教育プラットフォームからEコマース市場まで。それぞれが私に新しいことを教えてくれました。",
      viewCode: "コードを見る",
      viewLive: "ライブデモ",
      caseStudy: "ケーススタディ",
      role: "役割",
      impact: "インパクト",
      tech: "技術",
      featured: "注目",
      confidential: "機密",
      comingSoon: "近日公開",
      items: [
        {
          name: "Al-Bashir Academy LMS Portal",
          tagline: "デザインシステム、分析、PWAを備えた本番教育プラットフォーム",
          description:
            "Al-Bashir Academy向けのフル機能LMS。フロントエンド全体を構築: デザインシステム（カラートークン、タイポグラフィ、スペーシング）、コース管理、クイズビルダー、Recharts分析ダッシュボード、多段階フォーム、PWAサポート。これは機密クライアントプロジェクトです。",
          role: "フロントエンドエンジニア & UI/UXデザイナー",
          impact: "完全なデザインシステム、50以上の再利用可能コンポーネント、モバイルファーストレスポンシブ",
          tech: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "Zustand", "TanStack Query", "Recharts"],
          gradient: "linear-gradient(135deg, #006633 0%, #D4AF37 50%, #1a1a2e 100%)",
          confidential: true,
        },
        {
          name: "Rafaab",
          tagline: "AIショッピングアシスタント付きプレミアムEコマース市場",
          description:
            "JumiaとAliExpressを凌駕するために構築されたプレミアムEコマース市場。RafiというAIショッピングアシスタント、ライブカウントダウン付きフラッシュセール、ビジュアルタイムライン付きの完全な注文追跡、セラーダッシュボード、Paystack決済統合を備えています。8つの製品カテゴリーにわたる distinctive な金のアミュレットブランドアイデンティティ。",
          role: "フロントエンドエンジニア & UI/UXデザイナー",
          impact: "AIアシスタント、フラッシュセール、リアルタイム追跡、Paystack決済",
          tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion", "Paystack"],
          image: "/portfolio-images/rafaab.png",
          githubUrl: "https://github.com/mitchoder07/rafaab",
          liveUrl: "https://rafaab.vercel.app/",
        },
        {
          name: "Your Studio — ロゴポートフォリオ",
          tagline: "74のブランドマーク、リアルタイムフィルタリング、ライトボックスビューアーを持つダークエディトリアルロゴポートフォリオ",
          description:
            "13の業界と8つのデザインスタイルにわたる74のブランドマークをカタログ化した、ダークエディトリアルスタイルのロゴポートフォリオWebアプリ。Next.js 16とTypeScriptで構築され、メーソンリーグリッド、リアルタイムフィルタリング、ライブ検索、キーボードナビゲーション付きの全画面ライトボックス、ダーク/ライトテーマトグルを備えています。各ロゴは自動センタリングされた1024×1024画像として最適化されています。このプロジェクトは近日公開予定です。",
          role: "フロントエンドエンジニア & UI/UXデザイナー",
          impact: "74ロゴ、13業界、8スタイル、メーソンリーグリッド、ライトボックス、テーマトグル",
          tech: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "Lucide", "next-themes"],
          gradient: "linear-gradient(135deg, #0a0a0a 0%, #D4AF37 50%, #1a1a2e 100%)",
          comingSoon: true,
        },
        {
          name: "Baca",
          tagline: "単語ごとの分析を備えたクルアーン学習ツール",
          description:
            "単語ごとの内訳で読み、聞き、学べるクルアーン学習Webアプリ。セマンティックHTML、アクセシブルなナビゲーション、集中を尊重する読書モードで構築。モバイルファーストでレイアウトを設計。",
          role: "フロントエンドエンジニア & UI/UXデザイナー",
          impact: "単語ごとのリーダー、オーディオ再生、アクセシブルな学習フロー",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/islam-baca.png",
          githubUrl: "https://github.com/mitchoder07/baca-Al-qur-an",
          liveUrl: "https://baca-al-qur-an.onrender.com/",
        },
        {
          name: "Crypto Vault",
          tagline: "ブラウザ内のAES-256暗号化",
          description:
            "ブラウザ内で完全にAES-256でシークレットの暗号化と復号を行うクライアントサイド暗号化ボールト。デバイスからデータが外に出ません。信頼を軸にUXを設計: 明確な状態、クリップボードへのコピー、混乱のない空状態。",
          role: "フロントエンドエンジニア & UI/UXデザイナー",
          impact: "サーバーレス暗号化、クリーンなキー管理UX",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/crypto-vault.jpeg",
          githubUrl: "https://github.com/mitchoder07/cryptoVault",
          liveUrl: "https://crypto-vauult.vercel.app/",
        },
        {
          name: "Similarity Checker",
          tagline: "ビジュアルゲージ付きマルチアルゴリズム盗作チェッカー",
          description:
            "複数のテキスト類似度アルゴリズムを実行し、結果をビジュアルゲージに表示する盗作チェッカー。適切な帰属を提案する引用アシスタントを含む。比較UIとゲージコンポーネントをゼロから設計。",
          role: "フロントエンドエンジニア & UI/UXデザイナー",
          impact: "マルチアルゴリズムスコアリング、ビジュアルゲージ、引用アシスタント",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/similarity-checker.jpeg",
          githubUrl: "https://github.com/mitchoder07/similarity-checker",
          liveUrl: "https://similarity-checker-five.vercel.app/",
        },
        {
          name: "Cyber Bot",
          tagline: "サイバーセキュリティについて何でも聞いて、即座に回答を得る",
          description:
            "一般的なセキュリティトピックについて即座に回答を提供するサイバーセキュリティQ&Aボット。会話UI、提案プロンプトパターン、読みやすい回答カードを設計。キーボードフレンドリーな入力でモバイルファースト構築。",
          role: "フロントエンドエンジニア & UI/UXデザイナー",
          impact: "即座の回答、提案プロンプト、読みやすい応答カード",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/cyber-bot.jpg",
          githubUrl: "https://github.com/mitchoder07/cyber-bot",
          liveUrl: "https://cyber-bot-zeta.vercel.app/",
        },
        {
          name: "Cyber-Words Guess",
          tagline: "サイバーワード推しゲーム",
          description:
            "サイバーセキュリティ用語を中心に構築された単語推しゲーム。ゲームループ、オンスクリーンキーボード、色分けされたフィードバック状態を設計。スムーズな状態遷移を持つシングルページアプリとしてリリース。",
          role: "フロントエンドエンジニア & UI/UXデザイナー",
          impact: "ゲームループ、オンスクリーンキーボード、色分けフィードバック",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/cyber-words.jpg",
          githubUrl: "https://github.com/mitchoder07/word-guessing-game",
          liveUrl: "https://word-guessing-game-nine.vercel.app/",
        },
        {
          name: "Kopi",
          tagline: "Coffee shop landing page with menu, gallery, and reviews",
          description:
            "A modern coffee-shop landing page with a hero section, menu showcase, customer reviews, photo gallery, and a working contact form. Designed the warm, cafe-inspired visual identity and built it mobile-first.",
          role: "Frontend Engineer & UI/UX Designer",
          impact: "Menu showcase, photo gallery, reviews section, contact form",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/kopi.png",
          githubUrl: "https://github.com/mitchoder07/coffee-shop",
          liveUrl: "https://coffee-kopi.vercel.app/",
        },
      ],
    },
    experience: {
      badge: "経歴",
      heading: "設計・構築・リードの5年間。",
      subheading:
        "フリーランスの案件からNYSCサービスまで。各役割が職務の異なる側面を教えてくれました。",
      items: [
        {
          role: "フリーランスフロントエンドエンジニア",
          company: "自営",
          period: "2024 - 現在",
          description:
            "Next.js、TypeScript、Tailwindで本番Webアプリを構築。Al-Bashir Academyのフロントエンドをリード。",
          achievements: [
            "完全なデザインシステムとPWAでAl-Bashir Academy LMSをリリース",
            "クライアントプロジェクトで再利用される50以上のコンポーネントを構築",
          ],
        },
        {
          role: "フリーランスUI/UXデザイナー",
          company: "自営",
          period: "2023 - 現在",
          description:
            "Figmaでデジタルプロダクトを設計。デザインシステム、ワイヤーフレーム、プロトタイプ。",
          achievements: [
            "フィンテック、Eコマース、教育で20以上のFigmaデザインを納品",
            "カラー、タイポグラフィ、スペーシングトークンで再利用可能なデザインシステムを構築",
            "主要なプロダクト意思決定を導くユーザビリティテストを実施",
          ],
        },
        {
          role: "ITサポート & フロントエンド開発者",
          company: "FUHSI (NYSC)",
          period: "2025",
          description:
            "Federal University of Health Sciences, IlaでのITサポート。社内ツールを構築しスタッフをサポート。",
          achievements: [
            "スタッフと学生のヘルプデスクチケットを解決",
            "入試ワークフロー用の小さな社内Webツールを構築",
            "チーム向けにIT手順を文書化",
          ],
        },
        {
          role: "フロントエンドエンジニアリングの旅",
          company: "独学",
          period: "2021 - 2023",
          description:
            "HTML、CSS、JavaScriptの学習を開始。個人プロジェクトを構築し、ReactとNext.jsに成長。",
          achievements: [
            "BacaとCrypto Vaultを含む個人プロジェクトをリリース",
            "実際の構築を通じてReact、TypeScript、Tailwindを学習",
            "小さなオープンソースリポジトリに貢献",
          ],
        },
        {
          role: "AIインターン",
          company: "AI4FS, Summit University",
          period: "2023",
          description:
            "AI for Females in STEMインターンシップ。AIの基礎を探求し、小さなプロジェクトに適用。",
          achievements: [
            "メンターシップ付きの応用AIカリキュラムを完了",
            "Pythonで小さなMLデモを構築",
            "コホートに最終プロジェクトを発表",
          ],
        },
      ],
    },
    openSource: {
      badge: "オープンソース",
      heading: "職人技に還元する。",
      subheading:
        "オープンソースは業界がレベルアップする方法です。私は貢献し、メンテナンスし、ドキュメントを書きます. 最初に私のために誰かがやってくれたからです。",
      reposLabel: "公開リポジトリ",
      starsLabel: "GitHubスター",
      contribsLabel: "年間貢献",
      repos: [
        {
          name: "rafaab",
          description: "AIショッピングアシスタント付きプレミアムEコマース市場。Paystack、フラッシュセール、リアルタイム追跡。",
          language: "TypeScript",
          stars: "1",
        },
        {
          name: "baca-Al-qur-an",
          description: "単語ごとの分析とアクセシブルな読書モードを備えたクルアーン学習Webアプリ。",
          language: "JavaScript",
          stars: "1",
        },
        {
          name: "cryptoVault",
          description: "クライアントサイドAES-256暗号化ボールト。デバイスからデータが外に出ない。",
          language: "JavaScript",
          stars: "0",
        },
        {
          name: "similarity-checker",
          description: "ビジュアルゲージと引用アシスタント付きマルチアルゴリズム盗作チェッカー。",
          language: "JavaScript",
          stars: "1",
        },
      ],
      viewGithub: "GitHubプロフィールを見る",
    },
    writing: {
      badge: "デザイン",
      heading: "デザインファイルからのケーススタディ。",
      subheading:
        "厳選されたデザイン作品、プロセスノート、Figmaから本番までのUI探索。",
      readMore: "ケーススタディを見る",
      articles: [
        {
          title: "Rafaab: プレミアムECの再構築",
          excerpt:
            "金色のアミュレットブランドアイデンティティとAIショッピングの融合。ライブカウントダウン付きフラッシュセール、視覚的注文追跡、セラーダッシュボード。",
          date: "2026-06-10",
          readTime: "Figmaケーススタディ",
          tag: "EC",
        },
        {
          title: "Al-Bashir Academy LMS: 教育プラットフォームのデザインシステム",
          excerpt:
            "カラートークンから本番ダッシュボードまで。緑と金のブランディング、分析ダッシュボード、PWA対応モバイルフローを備えた大学LMSの完全なデザインシステム。",
          date: "2026-04-15",
          readTime: "Figmaケーススタディ",
          tag: "デザインシステム",
        },
        {
          title: "Flyers: 高インパクトのプロモーションデザイン",
          excerpt:
            "大胆なタイポグラフィ、鮮やかな色のブロック、印刷対応レイアウト。2秒以内に注目を集めるプロモーションフライヤーシリーズ。",
          date: "2026-02-20",
          readTime: "Figmaケーススタディ",
          tag: "グラフィックデザイン",
        },
        {
          title: "Portfolio v1: 色を選んで、コードを解読",
          excerpt:
            "この旧ポートフォリオでは、画面に好きな色を自由に散りばめられます。私の誕生日？パスワードの壁の向こうに隠れています – さあ、推測してみて！ (ヒント: 1234じゃないよ。)",
          date: "2026-01-05",
          readTime: "Figmaケーススタディ",
          tag: "Webデザイン",
        },
      ],
    },
    testimonials: {
      badge: "推薦の声",
      heading: "一緒に働いた人々の言葉。",
      subheading:
        "証拠。それらのないポートフォリオは、ドメイン名を持つレジュメに過ぎません。",
      items: [
      ],
    },
    contact: {
      badge: "お問い合わせ",
      heading: "出荷する価値のあるものを一緒に作りましょう。",
      subheading:
        "現在、フロントエンドエンジニアリングの役職、UI/UXデザイン契約、厳選されたプロジェクトワークにオープンです。何を構築しているか教えてください。",
      nameLabel: "お名前",
      emailLabel: "メールアドレス",
      messageLabel: "メッセージ",
      namePlaceholder: "お名前",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "プロジェクト、ポジション、アイデアについて教えてください...",
      send: "メッセージを送信",
      sending: "送信中...",
      success: "メッセージが送信されました。48時間以内に返信します。",
      orText: "または",
      emailMe: "直接メールする",
      bookCall: "30分の初回通話を予約",
      downloadResume: "履歴書をダウンロード",
      followTitle: "他の場所で見つけてください",
    },
    footer: {
      tagline: "フロントエンドエンジニア & UI/UXデザイナー。ビルダー。シッパー。",
      quote: "Great interfaces, like great warriors, are forged through a thousand quiet iterations no one ever sees.",
      builtWith: "丁寧に設計・構築。Next.js、TypeScript、Tailwind CSS、Figma。",
      rights: "全著作権所有。",
      backToTop: "トップに戻る",
      quickLinks: "クイックリンク",
      connect: "つながる",
    },
  },

  ar: {
    nav: {
      home: "الرئيسية",
      about: "نبذة",
      skills: "المهارات",
      projects: "المشاريع",
      experience: "الخبرة",
      openSource: "المصدر المفتوح",
      writing: "الكتابة",
      design: "التصميم",
      testimonials: "التوصيات",
      contact: "تواصل",
      menu: "القائمة",
    },
    hero: {
      badge: "متاح لمشاريع مختارة",
      greeting: "مرحباً، أنا",
      name: "عبد الله يوسف",
      akaLabel: "المعروف بـ",
      brandName: "Upin",
      title: "مهندس واجهات أمامية & مصمم UI/UX",
      tagline:
        "أصمم وأبني واجهات جميلة يسهل الوصول إليها. من مخططات Figma إلى React بدقة البكسل، أصنع منتجات يحبها المستخدمون.",
      ctaPrimary: "شاهد أعمالي",
      ctaSecondary: "افتح الطرفية",
      availability: "منفتح على أدوار الواجهة الأمامية والتصميم",
      stat1Label: "الواجهة الأمامية",
      stat2Label: "التصاميم",
      stat3Label: "المساهمات",
      scroll: "مرر للاستكشاف",
    },
    terminal: {
      title: "طرفية تفاعلية",
      subtitle:
        "هذه ليست معرض أعمال. إنها صدفة. اكتب أمراً واستكشف. كل قسم هو ملف يمكنك قراءته.",
      prompt: "upin@portfolio:~$",
      welcome:
        "مرحباً بك في طرفية معرض Upin التفاعلي. اكتب 'help' لرؤية الأوامر المتاحة.",
      helpLine1: "الأوامر المتاحة:",
      helpLine2: "نصيحة: الأوامر غير حساسة لحالة الأحرف. جرب 'whoami' للبدء.",
      commands: {
        help: "اعرض رسالة المساعدة هذه",
        about: "اقرأ about.md",
        skills: "اعرض skills.json",
        projects: "اعرض projects/",
        experience: "اعرض experience.log",
        contact: "اطبع contact.vcf",
        clear: "امسح الطرفية",
        whoami: "من أنا؟",
        ls: "اعرض محتويات الدليل",
        social: "اعرض روابط التواصل",
      },
      outputs: {
        whoami:
          "عبد الله يوسف (Upin). مهندس واجهات أمامية & مصمم UI/UX بخبرة 5+ سنوات في تصميم وتسليم واجهات يسهل الوصول إليها. أحول مخططات Figma إلى منتجات React بدقة البكسل.",
        ls: "about.md skills.json projects/ experience.log contact.vcf social.txt",
        social:
          "GitHub: github.com/mitchoder07 · LinkedIn: linkedin.com/in/mitchoder07 · X: x.com/mitchoder07 · Dribbble: dribbble.com/mitchoder07 · Figma: figma.com/@mitchoder07 · Email: olaniyiaremu2003@gmail.com",
        unknown: "الأمر غير موجود. اكتب 'help' للأوامر المتاحة.",
      },
      placeholder: "اكتب أمراً واضغط Enter...",
    },
    about: {
      badge: "نبذة",
      heading: "مصمم يكتب الكود. مهندس يصمم.",
      p1: "أنا عبد الله يوسف (Upin). مهندس واجهات أمامية ومصمم UI/UX قضى السنوات الخمس الماضية في تحويل الأفكار إلى واجهات يحبها المستخدمون. عملي يعيش عند تقاطع التصميم والكود: أرسم المخططات في Figma في الصباح، أبنيها في React بعد الظهر، وأصقل الحركات في المساء. أؤمن أن المنتجات العظيمة تأتي من مهندسين يفهمون التصميم ومصممين يفهمون الكود.",
      p2: "ما يميزني هو أنني أمتلك الجانبين. لقد صممت أنظمة تصميم ونفذتها في الإنتاج. بنيت لوحات تحليلات بـ Recharts، نماذج متعددة الخطوات مع التحقق، وتطبيقات PWA تعمل دون اتصال. سواء كان الأمر جعل زر يشعر بالصحة أو تصميم مكتبة مكونات، أجلب نفس الحرفية.",
      p3: "عندما لا أكون أطلق المنتجات، أكون أتعلم. أكتب عن أنظمة التصميم ومعمارية الواجهة الأمامية، أرشد المطورين الطموحين، وأساهم في المصدر المفتوح. أؤمن أن أفضل مهندسي الواجهة الأمامية مهووسون بالتفاصيل. هذا المعرض هو محاولتي لإظهار كيف يبدو هذا الهوس.",
      highlights: [
        { label: "سنوات الواجهة الأمامية", value: "5+" },
        { label: "تصاميم Figma", value: "20+" },
        { label: "مكونات مبنية", value: "50+" },
      ],
      coreTitle: "ما أقدمه.",
      coreDesc: "التصميم والهندسة، مسلّمة معاً.",
      coreItems: [
        { title: "أنظمة التصميم", desc: "رموز الألوان، مقاييس الطباعة، أنظمة المسافات، ومكتبات المكونات المُسلّمة للإنتاج." },
        { title: "معمارية الواجهة الأمامية", desc: "Next.js App Router، مجموعات المسارات، مكونات الخادم، وهياكل مجلدات تتوسع." },
        { title: "التصميم المتجاوب", desc: "تخطيطات mobile-first تبدو مقصودة عند كل نقطة توقف، وليست مجرد مكدسة." },
        { title: "تصور البيانات", desc: "لوحات Recharts، مقاييس مخصصة، ورسوم بيانية يسهل الوصول إليها تروي قصة." },
        { title: "إمكانية الوصول", desc: "أنماط متوافقة مع WCAG، HTML دلالي، تنقل بلوحة المفاتيح، وعناية بقارئ الشاشة." },
        { title: "الأداء", desc: "PWA، تقسيم الكود، تحسين الصور، ومؤشرات Core Web Vitals في الأخضر." },
      ],
    },
    skills: {
      badge: "المهارات",
      heading: "التصميم والكود، من البداية للنهاية.",
      subheading:
        "ليس لدي 'جانب' من المكدس. أمتلك السطح كله، من Figma إلى المتصفح. هذا ما أستخدمه يومياً.",
      categories: {
        frontend: {
          title: "الواجهة الأمامية",
          items: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Tailwind CSS 4",
            "Framer Motion",
            "Three.js",
            "Vite",
            "HTML5",
            "CSS3",
            "JavaScript",
          ],
        },
        design: {
          title: "التصميم",
          items: [
            "Figma",
            "أنظمة التصميم",
            "المخططات السلكية",
            "النماذج الأولية",
            "نظرية الألوان",
            "الطباعة",
            "أنظمة المسافات",
            "مكتبات المكونات",
            "إمكانية الوصول",
            "التصميم المتجاوب",
          ],
        },
        state: {
          title: "الحالة والبيانات",
          items: [
            "Zustand",
            "React Context API",
            "TanStack Query",
            "Recharts",
            "React Hook Form",
            "Zod",
          ],
        },
        components: {
          title: "المكونات",
          items: [
            "shadcn/ui",
            "Radix UI",
            "مكونات مخصصة",
            "حوارات",
            "قوائم منسدلة",
            "أوراق",
            "أكورديون",
            "نماذج",
          ],
        },
        tooling: {
          title: "الأدوات",
          items: [
            "Git",
            "GitHub Actions",
            "Vercel",
            "PWA",
            "SEO/Metadata API",
            "Print CSS",
            "الوضع الداكن",
            "Storybook",
          ],
        },
        languages: {
          title: "لغات البرمجة",
          items: [
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Python",
            "SQL",
            "Bash",
          ],
        },
      },
    },
    projects: {
      badge: "أعمال مختارة",
      heading: "مشاريع صُممت، بُنيت، وأُطلقت.",
      subheading:
        "مجموعة منتقاة من المنتجات التي صممتها وبنيتها. من منصات التعليم إلى أسواق التجارة الإلكترونية. كل واحد علّمني شيئاً جديداً.",
      viewCode: "عرض الكود",
      viewLive: "عرض مباشر",
      caseStudy: "دراسة حالة",
      role: "الدور",
      impact: "الأثر",
      tech: "التقنيات",
      featured: "مميز",
      confidential: "سري",
      comingSoon: "قريباً",
      items: [
        {
          name: "Al-Bashir Academy LMS Portal",
          tagline: "منصة تعليم إنتاجية مع نظام تصميم وتحليلات وPWA",
          description:
            "نظام إدارة تعلم كامل الميزات لأكاديمية Al-Bashir Academy. بنيت الواجهة الأمامية بالكامل: نظام تصميم (رموز الألوان، الطباعة، المسافات)، إدارة المقررات، منشئ الاختبارات، لوحات التحليلات مع Recharts، نماذج متعددة الخطوات، ودعم PWA. هذا مشروع عميل سري.",
          role: "مهندس واجهات أمامية & مصمم UI/UX",
          impact: "نظام تصميم كامل، 50+ مكون قابل لإعادة الاستخدام، تصميم متجاوب mobile-first",
          tech: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "Zustand", "TanStack Query", "Recharts"],
          gradient: "linear-gradient(135deg, #006633 0%, #D4AF37 50%, #1a1a2e 100%)",
          confidential: true,
        },
        {
          name: "Rafaab",
          tagline: "سوق تجارة إلكترونية فاخرة مع مساعد تسوق AI",
          description:
            "سوق تجارة إلكترونية فاخرة بُني ليتفوق على Jumia و AliExpress. يتميز بمساعد تسوق AI يسمى Rafi، مبيعات سريعة مع عد تنازلي مباشر، تتبع طلبات كامل مع خطوط زمنية مرئية، لوحة تحكم للبائعين، وتكامل دفع Paystack. هوية علامة تميمة ذهبية مميزة عبر 8 فئات منتجات.",
          role: "مهندس واجهات أمامية & مصمم UI/UX",
          impact: "مساعد AI، مبيعات سريعة، تتبع فوري، مدفوعات Paystack",
          tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion", "Paystack"],
          image: "/portfolio-images/rafaab.png",
          githubUrl: "https://github.com/mitchoder07/rafaab",
          liveUrl: "https://rafaab.vercel.app/",
        },
        {
          name: "استوديو الخاص بك — معرض الشعارات",
          tagline: "معرض شعارات بأسلوب تحريري داكن مع 74 علامة تجارية، تصفية فورية، وعارض صندوق ضوئي",
          description:
            "تطبيق ويب لمعرض الشعارات بأسلوب تحريري داكن يفهرس 74 علامة تجارية عبر 13 صناعة و 8 أنماط تصميم. تم بناؤه باستخدام Next.js 16 و TypeScript، ويتميز بتخطيط شبكي ماسونري، وتصفية فورية حسب الصناعة والنمط، وبحث مباشر، وصندوق ضوئي بملء الشاشة مع تنقل بلوحة المفاتيح، والتبديل بين الوضع الداكن والفاتح. هذا المشروع قادم قريباً.",
          role: "مهندس الواجهة الأمامية & مصمم UI/UX",
          impact: "74 شعارا، 13 صناعة، 8 أنماط، شبكة ماسونري، صندوق ضوئي، تبديل السمة",
          tech: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "Lucide", "next-themes"],
          gradient: "linear-gradient(135deg, #0a0a0a 0%, #D4AF37 50%, #1a1a2e 100%)",
          comingSoon: true,
        },
        {
          name: "Baca",
          tagline: "أداة دراسة القرآن مع تحليل كلمة بكلمة",
          description:
            "تطبيق ويب لدراسة القرآن يتيح للمستخدمين القراءة والاستماع والتعلم مع تفكيك كلمة بكلمة. بُني بـ HTML دلالي، تنقل يسهل الوصول إليه، ووضع قراءة يحترم التركيز. صُمم التخطيط mobile-first.",
          role: "مهندس واجهات أمامية & مصمم UI/UX",
          impact: "قارئ كلمة بكلمة، تشغيل صوتي، تدفق دراسة يسهل الوصول إليه",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/islam-baca.png",
          githubUrl: "https://github.com/mitchoder07/baca-Al-qur-an",
          liveUrl: "https://baca-al-qur-an.onrender.com/",
        },
        {
          name: "Crypto Vault",
          tagline: "تشفير AES-256 في المتصفح",
          description:
            "خزنة تشفير من جانب العميل تشفر وتفك تشفير الأسرار بـ AES-256، بالكامل في المتصفح. لا تغادر أي بيانات الجهاز. صُمم UX حول الثقة: حالات واضحة، نسخ إلى الحافظة، وحالات فارغة بلا ارتباك.",
          role: "مهندس واجهات أمامية & مصمم UI/UX",
          impact: "تشفير بلا خادم، UX نظيف لإدارة المفاتيح",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/crypto-vault.jpeg",
          githubUrl: "https://github.com/mitchoder07/cryptoVault",
          liveUrl: "https://crypto-vauult.vercel.app/",
        },
        {
          name: "Similarity Checker",
          tagline: "مدقق انتحال متعدد الخوارزميات مع مقياس مرئي",
          description:
            "مدحق انتحال يشغل خوارزميات تشابه نصي متعددة ويعرض النتائج على مقياس مرئي. يتضمن مساعد استشهاد يقترح الإسناد المناسب. صُمم واجهة المقارنة ومكون المقياس من الصفر.",
          role: "مهندس واجهات أمامية & مصمم UI/UX",
          impact: "تسجيل متعدد الخوارزميات، مقياس مرئي، مساعد استشهاد",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/similarity-checker.jpeg",
          githubUrl: "https://github.com/mitchoder07/similarity-checker",
          liveUrl: "https://similarity-checker-five.vercel.app/",
        },
        {
          name: "Cyber Bot",
          tagline: "اسأل أي شيء عن الأمن السيبراني، احصل على إجابات فورية",
          description:
            "روبوت أسئلة وأجوبة للأمن السيبراني يعطي إجابات فورية عن مواضيع الأمن الشائعة. صُمم واجهة المحادثة، نمط الاقتراحات، وبطاقات الإجابات القابلة للقراءة. بُني mobile-first مع إدخال صديق للوحة المفاتيح.",
          role: "مهندس واجهات أمامية & مصمم UI/UX",
          impact: "إجابات فورية، اقتراحات، بطاقات استجابة قابلة للقراءة",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/cyber-bot.jpg",
          githubUrl: "https://github.com/mitchoder07/cyber-bot",
          liveUrl: "https://cyber-bot-zeta.vercel.app/",
        },
        {
          name: "Cyber-Words Guess",
          tagline: "لعبة تخمين كلمة الأمن السيبراني",
          description:
            "لعبة تخمين كلمات بُنيت حول مصطلحات الأمن السيبراني. صُمم حلقة اللعبة، لوحة المفاتيح على الشاشة، وحالات التغذية الراجعة المرمزة بالألوان. أُطلقت كتطبيق صفحة واحدة مع انتقالات حالة سلسة.",
          role: "مهندس واجهات أمامية & مصمم UI/UX",
          impact: "حلقة اللعبة، لوحة مفاتيح على الشاشة، تغذية راجعة ملونة",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/cyber-words.jpg",
          githubUrl: "https://github.com/mitchoder07/word-guessing-game",
          liveUrl: "https://word-guessing-game-nine.vercel.app/",
        },
        {
          name: "Kopi",
          tagline: "Coffee shop landing page with menu, gallery, and reviews",
          description:
            "A modern coffee-shop landing page with a hero section, menu showcase, customer reviews, photo gallery, and a working contact form. Designed the warm, cafe-inspired visual identity and built it mobile-first.",
          role: "Frontend Engineer & UI/UX Designer",
          impact: "Menu showcase, photo gallery, reviews section, contact form",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/kopi.png",
          githubUrl: "https://github.com/mitchoder07/coffee-shop",
          liveUrl: "https://coffee-kopi.vercel.app/",
        },
      ],
    },
    experience: {
      badge: "الخبرة",
      heading: "خمس سنوات من التصميم والبناء والإطلاق.",
      subheading:
        "من عقود العمل الحر إلى خدمة NYSC. كل دور علّمني جانباً مختلفاً من الحرفة.",
      items: [
        {
          role: "مهندس واجهات أمامية حر",
          company: "عمل ذاتي",
          period: "2024 - حتى الآن",
          description:
            "بناء تطبيقات ويب إنتاجية مع Next.js، TypeScript، Tailwind. قُدت واجهة منصة Al-Bashir Academy.",
          achievements: [
            "أطلقت Al-Bashir Academy LMS مع نظام تصميم كامل وPWA",
            "بنيت 50+ مكون قابل لإعادة الاستخدام عبر مشاريع العملاء",
          ],
        },
        {
          role: "مصمم UI/UX حر",
          company: "عمل ذاتي",
          period: "2023 - حتى الآن",
          description:
            "تصميم منتجات رقمية في Figma. أنظمة تصميم، مخططات سلكية، نماذج أولية.",
          achievements: [
            "سلّمت 20+ تصميم Figma عبر fintech والتجارة الإلكترونية والتعليم",
            "بنيت أنظمة تصميم قابلة لإعادة الاستخدام مع رموز الألوان والطباعة والمسافات",
            "أجريت اختبارات قابلية استخدام أثّرت على قرارات المنتج الرئيسية",
          ],
        },
        {
          role: "دعم IT ومطور واجهات أمامية",
          company: "FUHSI (NYSC)",
          period: "2025",
          description:
            "دعم IT في Federal University of Health Sciences, Ila. بنيت أدوات داخلية ودعمت الموظفين.",
          achievements: [
            "حلّمت تذاكر مكتب المساعدة للموظفين والطلاب",
            "بنيت أدوات ويب داخلية صغيرة لسير عمل القبول",
            "وثّقت إجراءات IT للفريق",
          ],
        },
        {
          role: "رحلة هندسة الواجهة الأمامية",
          company: "تعلم ذاتي",
          period: "2021 - 2023",
          description:
            "بدأت بتعلم HTML، CSS، JavaScript. بنيت مشاريع شخصية ونمت إلى React و Next.js.",
          achievements: [
            "أطلقت مشاريع شخصية بما فيها Baca و Crypto Vault",
            "تعلمت React، TypeScript، و Tailwind عبر بناء حقيقي",
            "ساهمت في مستودعات مفتوحة المصدر صغيرة",
          ],
        },
        {
          role: "متدرب AI",
          company: "AI4FS, جامعة Summit",
          period: "2023",
          description:
            "تدريب AI for Females in STEM. استكشفت أساسيات AI وطبّقتها على مشاريع صغيرة.",
          achievements: [
            "أكملت منهج AI تطبيقي مع إرشاد",
            "بنيت عروض ML صغيرة بـ Python",
            "قدمت المشروع النهائي للفوج",
          ],
        },
      ],
    },
    openSource: {
      badge: "المصدر المفتوح",
      heading: "العطاء للحرفة.",
      subheading:
        "المصدر المفتوح هو كيف تتطور الصناعة. أساهم وأحافظ وأوثّق. لأن شخصاً ما فعل ذلك من أجلي أولاً.",
      reposLabel: "مستودعات عامة",
      starsLabel: "نجوم GitHub",
      contribsLabel: "مساهمات / سنة",
      repos: [
        {
          name: "rafaab",
          description: "سوق تجارة إلكترونية فاخرة مع مساعد تسوق AI. Paystack، مبيعات سريعة، تتبع فوري.",
          language: "TypeScript",
          stars: "1",
        },
        {
          name: "baca-Al-qur-an",
          description: "تطبيق ويب لدراسة القرآن مع تحليل كلمة بكلمة ووضع قراءة يسهل الوصول إليه.",
          language: "JavaScript",
          stars: "1",
        },
        {
          name: "cryptoVault",
          description: "خزنة تشفير AES-256 من جانب العميل. لا تغادر البيانات الجهاز.",
          language: "JavaScript",
          stars: "0",
        },
        {
          name: "similarity-checker",
          description: "مدقق انتحال متعدد الخوارزميات مع مقياس مرئي ومساعد استشهاد.",
          language: "JavaScript",
          stars: "1",
        },
      ],
      viewGithub: "عرض ملف GitHub",
    },
    writing: {
      badge: "التصميم",
      heading: "دراسات حالة من ملف التصميم.",
      subheading:
        "أعمال تصميم مختارة وملاحظات العملية واستكشافات الواجهة من Figma إلى الإنتاج.",
      readMore: "عرض دراسة الحالة",
      articles: [
        {
          title: "Rafaab: إعادة تصور التجارة الإلكترونية الفاخرة",
          excerpt:
            "هوية علامة تجارية بتميمة ذهبية تلتقي بالتسوق الذكي. مبيعات سريعة بعدادات مباشرة، تتبع طلبات مرئي، ولوحة تحكم للبائعين.",
          date: "2026-06-10",
          readTime: "دراسة حالة Figma",
          tag: "تجارة إلكترونية",
        },
        {
          title: "Al-Bashir Academy LMS: نظام تصميم منصة التعليم",
          excerpt:
            "من رموز الألوان إلى لوحات الإنتاج. نظام تصميم كامل لمنصة LMS جامعية بهوية خضراء-ذهبية، لوحات تحليلات، وتدفقات جوال جاهزة PWA.",
          date: "2026-04-15",
          readTime: "دراسة حالة Figma",
          tag: "نظام تصميم",
        },
        {
          title: "Flyers: تصميم ترويجي عالي التأثير",
          excerpt:
            "طباعة جريئة، كتل ألوان لافتة، وتخطيطات جاهزة للطباعة. سلسلة flyer مصممة لجذب الانتباه في أقل من ثانيتين.",
          date: "2026-02-20",
          readTime: "دراسة حالة Figma",
          tag: "تصميم جرافيك",
        },
        {
          title: "المحفظة الإصدار 1: اختر لوناً، افك شفرة",
          excerpt:
            "هذه المحفظة القديمة تتيح لك اختيار أي لون تحبه على الشاشة. وعيد ميلادي؟ مخلف وراء جدار كلمة مرور – هيا، خمّن! (تلميح: ليس 1234.)RTL.",
          date: "2026-01-05",
          readTime: "دراسة حالة Figma",
          tag: "تصميم ويب",
        },
      ],
    },
    testimonials: {
      badge: "التوصيات",
      heading: "ما يقوله من عملت معهم.",
      subheading:
        "إيصالات. لأن معرض أعمال بدونها هو مجرد سيرة ذاتية باسم نطاق.",
      items: [
      ],
    },
    contact: {
      badge: "تواصل",
      heading: "لنبنِ شيئاً يستحق الإطلاق.",
      subheading:
        "حالياً منفتح على أدوار هندسة الواجهة الأمامية، عقود تصميم UI/UX، وعمل مشاريع مختار. أخبرني ماذا تبني.",
      nameLabel: "اسمك",
      emailLabel: "البريد الإلكتروني",
      messageLabel: "رسالتك",
      namePlaceholder: "اسمك",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "أخبرني عن مشروعك أو دورك أو فكرتك...",
      send: "إرسال الرسالة",
      sending: "جارٍ الإرسال...",
      success: "تم إرسال الرسالة. سأرد عليك خلال 48 ساعة.",
      orText: "أو",
      emailMe: "راسلني مباشرة",
      bookCall: "احجز مكالمة تعريفية 30 دقيقة",
      downloadResume: "تحميل السيرة الذاتية",
      followTitle: "تجدني في مكان آخر",
    },
    footer: {
      tagline: "مهندس واجهات أمامية & مصمم UI/UX. باني. مسلّم.",
      quote: "Great interfaces, like great warriors, are forged through a thousand quiet iterations no one ever sees.",
      builtWith: "صُمم وبُني بعناية. Next.js، TypeScript، Tailwind CSS، Figma.",
      rights: "جميع الحقوق محفوظة.",
      backToTop: "العودة للأعلى",
      quickLinks: "روابط سريعة",
      connect: "تواصل",
    },
  },

  zh: {
    nav: {
      home: "首页",
      about: "关于",
      skills: "技能",
      projects: "项目",
      experience: "经历",
      openSource: "开源",
      writing: "写作",
      design: "设计",
      testimonials: "推荐",
      contact: "联系",
      menu: "菜单",
    },
    hero: {
      badge: "接受精选委托",
      greeting: "你好,我是",
      name: "Abdullah Yusuf",
      akaLabel: "又名",
      brandName: "Upin",
      title: "前端工程师 & UI/UX 设计师",
      tagline:
        "我设计并构建美观、可访问的界面。从 Figma 线框到像素级完美的 React,我打造用户喜爱的产品。",
      ctaPrimary: "查看作品",
      ctaSecondary: "打开终端",
      availability: "接受前端与设计职位",
      stat1Label: "前端",
      stat2Label: "设计",
      stat3Label: "贡献",
      scroll: "滚动探索",
    },
    terminal: {
      title: "交互式终端",
      subtitle:
        "这不是作品集。这是一个 shell。输入命令来探索. 每个章节都是你可以读取的文件。",
      prompt: "upin@portfolio:~$",
      welcome:
        "欢迎来到 Upin 的交互式作品集终端。输入 'help' 查看可用命令。",
      helpLine1: "可用命令:",
      helpLine2: "提示: 命令不区分大小写。试试 'whoami' 开始。",
      commands: {
        help: "显示此帮助信息",
        about: "读取 about.md",
        skills: "列出 skills.json",
        projects: "列出 projects/",
        experience: "显示 experience.log",
        contact: "打印 contact.vcf",
        clear: "清空终端",
        whoami: "我是谁?",
        ls: "列出目录内容",
        social: "显示社交链接",
      },
      outputs: {
        whoami:
          "Abdullah Yusuf(Upin)。前端工程师 & UI/UX 设计师,5年以上设计与交付可访问界面的经验。我把 Figma 线框转化为像素级完美的 React 产品。",
        ls: "about.md skills.json projects/ experience.log contact.vcf social.txt",
        social:
          "GitHub: github.com/mitchoder07 · LinkedIn: linkedin.com/in/mitchoder07 · X: x.com/mitchoder07 · Dribbble: dribbble.com/mitchoder07 · Figma: figma.com/@mitchoder07 · Email: olaniyiaremu2003@gmail.com",
        unknown: "命令未找到。输入 'help' 查看可用命令。",
      },
      placeholder: "输入命令并按 Enter...",
    },
    about: {
      badge: "关于",
      heading: "会写代码的设计师。会设计的工程师。",
      p1: "我是 Abdullah Yusuf,又名 Upin。一名前端工程师和 UI/UX 设计师,过去五年一直在把想法变成用户喜爱的界面。我的工作在设计与代码的交汇处:早上在 Figma 画线框,下午用 React 实现,傍晚打磨动画。我相信伟大的产品来自懂设计的工程师和懂代码的设计师。",
      p2: "让我与众不同的是我同时拥有两面。我设计过设计系统并在生产中实现它们。我用 Recharts 构建分析仪表板,构建带验证的多步表单,以及离线可用的 PWA。无论是让按钮手感对、还是架构组件库,我都带来同样的工艺。",
      p3: "不交付产品的时候,我在学习。我写关于设计系统和前端架构的文章,指导有志开发者,贡献开源。我相信最好的前端工程师对细节有执念。这个作品集是我尝试向你展示这种执念的样子。",
      highlights: [
        { label: "前端年数", value: "5+" },
        { label: "Figma 设计", value: "20+" },
        { label: "构建组件", value: "50+" },
      ],
      coreTitle: "我能带来什么。",
      coreDesc: "设计与工程,一起交付。",
      coreItems: [
        { title: "设计系统", desc: "颜色令牌、排版尺度、间距系统,以及交付到生产的组件库。" },
        { title: "前端架构", desc: "Next.js App Router、路由组、服务器组件,以及可扩展的文件夹结构。" },
        { title: "响应式设计", desc: "移动优先的布局,在每个断点都看起来是有意为之,而不是简单堆叠。" },
        { title: "数据可视化", desc: "Recharts 仪表板、自定义仪表,以及会讲故事的可达图表。" },
        { title: "可访问性", desc: "WCAG 合规模式、语义 HTML、键盘导航,以及屏幕阅读器关怀。" },
        { title: "性能", desc: "PWA、代码分割、图像优化,以及绿色 Core Web Vitals。" },
      ],
    },
    skills: {
      badge: "技能",
      heading: "设计与代码,端到端。",
      subheading:
        "我没有技术栈的'一面'。我拥有整个表面,从 Figma 到浏览器。这是我每天使用的。",
      categories: {
        frontend: {
          title: "前端",
          items: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Tailwind CSS 4",
            "Framer Motion",
            "Three.js",
            "Vite",
            "HTML5",
            "CSS3",
            "JavaScript",
          ],
        },
        design: {
          title: "设计",
          items: [
            "Figma",
            "设计系统",
            "线框图",
            "原型设计",
            "色彩理论",
            "排版",
            "间距系统",
            "组件库",
            "可访问性",
            "响应式设计",
          ],
        },
        state: {
          title: "状态与数据",
          items: [
            "Zustand",
            "React Context API",
            "TanStack Query",
            "Recharts",
            "React Hook Form",
            "Zod",
          ],
        },
        components: {
          title: "组件",
          items: [
            "shadcn/ui",
            "Radix UI",
            "自定义组件",
            "对话框",
            "下拉菜单",
            "Sheet",
            "折叠面板",
            "表单",
          ],
        },
        tooling: {
          title: "工具链",
          items: [
            "Git",
            "GitHub Actions",
            "Vercel",
            "PWA",
            "SEO/Metadata API",
            "Print CSS",
            "暗色模式",
            "Storybook",
          ],
        },
        languages: {
          title: "编程语言",
          items: [
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Python",
            "SQL",
            "Bash",
          ],
        },
      },
    },
    projects: {
      badge: "精选作品",
      heading: "设计、构建并交付的项目。",
      subheading:
        "我设计与构建的精选产品. 从教育平台到电商市场。每一个都教会我新东西。",
      viewCode: "查看代码",
      viewLive: "在线演示",
      caseStudy: "案例研究",
      role: "角色",
      impact: "影响",
      tech: "技术",
      featured: "精选",
      confidential: "机密",
      comingSoon: "即将推出",
      items: [
        {
          name: "Al-Bashir Academy LMS Portal",
          tagline: "生产级教育平台,带设计系统、分析和 PWA",
          description:
            "为 Al-Bashir Academy 构建的全功能学习管理系统。构建了整个前端:设计系统(颜色令牌、排版、间距)、课程管理、测验构建器、Recharts 分析仪表板、多步表单和 PWA 支持。这是一个机密客户项目。",
          role: "前端工程师 & UI/UX 设计师",
          impact: "完整设计系统,50+ 可复用组件,移动优先响应式",
          tech: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "Zustand", "TanStack Query", "Recharts"],
          gradient: "linear-gradient(135deg, #006633 0%, #D4AF37 50%, #1a1a2e 100%)",
          confidential: true,
        },
        {
          name: "Rafaab",
          tagline: "带 AI 购物助手的高端电商市场",
          description:
            "为超越 Jumia 和 AliExpress 而构建的高端电商市场。包含名为 Rafi 的 AI 购物助手、带实时倒计时的闪购、带可视化时间线的完整订单跟踪、卖家仪表板,以及 Paystack 支付集成。在 8 个产品类别中保持独特的金色护身符品牌识别。",
          role: "前端工程师 & UI/UX 设计师",
          impact: "AI 助手、闪购、实时跟踪、Paystack 支付",
          tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion", "Paystack"],
          image: "/portfolio-images/rafaab.png",
          githubUrl: "https://github.com/mitchoder07/rafaab",
          liveUrl: "https://rafaab.vercel.app/",
        },
        {
          name: "Your Studio — 标志作品集",
          tagline: "暗色编辑风格的标志作品集，含74个品牌标志、实时筛选和灯箱查看器",
          description:
            "一个暗色编辑风格的标志作品集网页应用，收录了74个品牌标志，涵盖13个行业和8种设计风格。使用 Next.js 16 和 TypeScript 构建，具有砌体网格布局、实时筛选、即时搜索、带键盘导航的全屏灯箱和深色/浅色主题切换。每个标志都优化为自动居中的1024×1024图像。此项目即将推出。",
          role: "前端工程师 & UI/UX 设计师",
          impact: "74个标志、13个行业、8种风格、砌体网格、灯箱、主题切换",
          tech: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "Lucide", "next-themes"],
          gradient: "linear-gradient(135deg, #0a0a0a 0%, #D4AF37 50%, #1a1a2e 100%)",
          comingSoon: true,
        },
        {
          name: "Baca",
          tagline: "带逐词分析的古兰经学习工具",
          description:
            "一个古兰经学习 Web 应用,让用户可以逐词分解阅读、聆听和学习。用语义 HTML、可访问导航,以及尊重焦点的阅读模式构建。布局以移动优先设计。",
          role: "前端工程师 & UI/UX 设计师",
          impact: "逐词阅读器、音频播放、可访问学习流程",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/islam-baca.png",
          githubUrl: "https://github.com/mitchoder07/baca-Al-qur-an",
          liveUrl: "https://baca-al-qur-an.onrender.com/",
        },
        {
          name: "Crypto Vault",
          tagline: "浏览器中的 AES-256 加密",
          description:
            "一个客户端加密金库,完全在浏览器中用 AES-256 加密和解密机密。零数据离开设备。围绕信任设计 UX:清晰状态、复制到剪贴板、零混乱的空状态。",
          role: "前端工程师 & UI/UX 设计师",
          impact: "零服务器加密,干净的密钥管理 UX",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/crypto-vault.jpeg",
          githubUrl: "https://github.com/mitchoder07/cryptoVault",
          liveUrl: "https://crypto-vauult.vercel.app/",
        },
        {
          name: "Similarity Checker",
          tagline: "带可视化仪表的多算法抄袭检测器",
          description:
            "一个运行多种文本相似度算法并在可视化仪表上呈现结果的抄袭检测器。包含建议正确归属性的引用助手。从零设计了比较 UI 和仪表组件。",
          role: "前端工程师 & UI/UX 设计师",
          impact: "多算法评分、可视化仪表、引用助手",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/similarity-checker.jpeg",
          githubUrl: "https://github.com/mitchoder07/similarity-checker",
          liveUrl: "https://similarity-checker-five.vercel.app/",
        },
        {
          name: "Cyber Bot",
          tagline: "问任何关于网络安全的问题,获得即时答案",
          description:
            "一个网络安全问答机器人,就常见安全话题给出即时答案。设计了对话式 UI、建议提示模式,以及可读的答案卡片。以键盘友好的输入移动优先构建。",
          role: "前端工程师 & UI/UX 设计师",
          impact: "即时答案、建议提示、可读响应卡片",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/cyber-bot.jpg",
          githubUrl: "https://github.com/mitchoder07/cyber-bot",
          liveUrl: "https://cyber-bot-zeta.vercel.app/",
        },
        {
          name: "Cyber-Words Guess",
          tagline: "猜网络安全词汇游戏",
          description:
            "围绕网络安全术语构建的猜词游戏。设计了游戏循环、屏幕键盘,以及颜色编码的反馈状态。以平滑状态过渡的单页应用交付。",
          role: "前端工程师 & UI/UX 设计师",
          impact: "游戏循环、屏幕键盘、颜色编码反馈",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/cyber-words.jpg",
          githubUrl: "https://github.com/mitchoder07/word-guessing-game",
          liveUrl: "https://word-guessing-game-nine.vercel.app/",
        },
        {
          name: "Kopi",
          tagline: "Coffee shop landing page with menu, gallery, and reviews",
          description:
            "A modern coffee-shop landing page with a hero section, menu showcase, customer reviews, photo gallery, and a working contact form. Designed the warm, cafe-inspired visual identity and built it mobile-first.",
          role: "Frontend Engineer & UI/UX Designer",
          impact: "Menu showcase, photo gallery, reviews section, contact form",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "/portfolio-images/kopi.png",
          githubUrl: "https://github.com/mitchoder07/coffee-shop",
          liveUrl: "https://coffee-kopi.vercel.app/",
        },
      ],
    },
    experience: {
      badge: "经历",
      heading: "五年设计、构建与交付。",
      subheading:
        "从自由职业到 NYSC 服务。每个角色都教会我手艺的不同层面。",
      items: [
        {
          role: "自由职业前端工程师",
          company: "自雇",
          period: "2024 - 至今",
          description:
            "用 Next.js、TypeScript、Tailwind 构建生产 Web 应用。领导 Al-Bashir Academy 前端。",
          achievements: [
            "交付带完整设计系统和 PWA 的 Al-Bashir Academy LMS",
            "构建 50+ 跨客户项目复用的组件",
          ],
        },
        {
          role: "自由职业 UI/UX 设计师",
          company: "自雇",
          period: "2023 - 至今",
          description:
            "在 Figma 中设计数字产品。设计系统、线框、原型。",
          achievements: [
            "跨金融科技、电商和教育交付 20+ Figma 设计",
            "构建带颜色、排版和间距令牌的可复用设计系统",
            "运行影响关键产品决策的可用性测试",
          ],
        },
        {
          role: "IT 支持 & 前端开发者",
          company: "FUHSI (NYSC)",
          period: "2025",
          description:
            "在 Federal University of Health Sciences, Ila 担任 IT 支持。构建内部工具并支持员工。",
          achievements: [
            "解决员工和学生的帮助台工单",
            "为招生工作流构建小型内部 Web 工具",
            "为团队记录 IT 流程",
          ],
        },
        {
          role: "前端工程之旅",
          company: "自学",
          period: "2021 - 2023",
          description:
            "开始学习 HTML、CSS、JavaScript。构建个人项目并成长为 React 和 Next.js。",
          achievements: [
            "交付个人项目,包括 Baca 和 Crypto Vault",
            "通过真实构建学习 React、TypeScript 和 Tailwind",
            "为小型开源仓库做贡献",
          ],
        },
        {
          role: "AI 实习生",
          company: "AI4FS, Summit 大学",
          period: "2023",
          description:
            "AI for Females in STEM 实习。探索 AI 基础并应用到小项目。",
          achievements: [
            "在有导师指导下完成应用 AI 课程",
            "用 Python 构建小型 ML 演示",
            "向同期展示最终项目",
          ],
        },
      ],
    },
    openSource: {
      badge: "开源",
      heading: "回馈手艺。",
      subheading:
        "开源是行业提升的方式。我贡献、维护和文档化. 因为有人先为我做了。",
      reposLabel: "公开仓库",
      starsLabel: "GitHub 星标",
      contribsLabel: "年度贡献",
      repos: [
        {
          name: "rafaab",
          description: "带 AI 购物助手的高端电商市场。Paystack、闪购、实时跟踪。",
          language: "TypeScript",
          stars: "1",
        },
        {
          name: "baca-Al-qur-an",
          description: "带逐词分析和可访问阅读模式的古兰经学习 Web 应用。",
          language: "JavaScript",
          stars: "1",
        },
        {
          name: "cryptoVault",
          description: "客户端 AES-256 加密金库。零数据离开设备。",
          language: "JavaScript",
          stars: "0",
        },
        {
          name: "similarity-checker",
          description: "带可视化仪表和引用助手的多算法抄袭检测器。",
          language: "JavaScript",
          stars: "1",
        },
      ],
      viewGithub: "查看 GitHub 主页",
    },
    writing: {
      badge: "设计",
      heading: "来自设计文件的案例研究。",
      subheading:
        "精选设计作品、流程笔记和从Figma到生产的UI探索。",
      readMore: "查看案例研究",
      articles: [
        {
          title: "Rafaab: 高端电商的重新构想",
          excerpt:
            "金色护身符品牌标识与AI购物相遇。限时抢购带实时倒计时、可视化订单追踪和卖家仪表板。",
          date: "2026-06-10",
          readTime: "Figma案例研究",
          tag: "电商",
        },
        {
          title: "Al-Bashir Academy LMS: 教育平台设计系统",
          excerpt:
            "从颜色令牌到生产仪表板。为大学LMS打造的完整设计系统，绿金品牌、分析仪表板和PWA就绪的移动流程。",
          date: "2026-04-15",
          readTime: "Figma案例研究",
          tag: "设计系统",
        },
        {
          title: "Flyers: 高冲击力推广设计",
          excerpt:
            "大胆排版、醒目色块、印刷就绪的布局。一系列旨在2秒内抓住注意力的推广传单。",
          date: "2026-02-20",
          readTime: "Figma案例研究",
          tag: "平面设计",
        },
        {
          title: "作品集 v1：选颜色，破密码",
          excerpt:
            "这个旧版作品集让你随意在屏幕上泼洒任何颜色。我的生日？被密码墙锁着呢 – 来猜猜看吧！（提示：不是1234。）",
          date: "2026-01-05",
          readTime: "Figma案例研究",
          tag: "网页设计",
        },
      ],
    },
    testimonials: {
      badge: "推荐",
      heading: "与我共事过的人怎么说。",
      subheading:
        "证据。因为没有它们的简历只是带域名的简历。",
      items: [
      ],
    },
    contact: {
      badge: "联系",
      heading: "让我们一起构建值得交付的东西。",
      subheading:
        "我目前对前端工程职位、UI/UX 设计合同和精选项目工作持开放态度。告诉我你在构建什么。",
      nameLabel: "你的名字",
      emailLabel: "电子邮箱",
      messageLabel: "你的留言",
      namePlaceholder: "你的名字",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "告诉我你的项目、职位或想法...",
      send: "发送留言",
      sending: "发送中...",
      success: "留言已发送。我会在 48 小时内回复。",
      orText: "或",
      emailMe: "直接发邮件给我",
      bookCall: "预约 30 分钟介绍电话",
      downloadResume: "下载简历",
      followTitle: "在别处找到我",
    },
    footer: {
      tagline: "前端工程师 & UI/UX 设计师。构建者。交付者。",
      quote: "Great interfaces, like great warriors, are forged through a thousand quiet iterations no one ever sees.",
      builtWith: "用心设计与构建。Next.js、TypeScript、Tailwind CSS、Figma。",
      rights: "保留所有权利。",
      backToTop: "回到顶部",
      quickLinks: "快速链接",
      connect: "连接",
    },
  },
};
