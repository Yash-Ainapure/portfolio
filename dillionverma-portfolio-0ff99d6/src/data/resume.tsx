import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Yash Ainapure",
  initials: "DV",
  url: "https://dillion.io",
  location: "Kolhapur ,Maharashtra",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "A passionate 3rd-year B.Tech Computer Science student with a love for coding, skilled in web and app development, driven by a desire to create impactful digital solutions.",
  summary:
    "Hello! I\'m Yash Ainapure, an aspiring computer science professional currently pursuing my Bachelor of Technology in Computer Science and Engineering at Dr. D.Y. Patil College of Engineering and Technology in Kolhapur. \n\n I have a deep passion for developing innovative solutions and have built a strong foundation in programming languages like C, C++, JavaScript, and Java. My experience extends to frameworks such as ReactJS, Express, and Node.js, as well as database management systems and tools like Git and GitHub. \n\n At the Sibic Incubation Center, I had the opportunity to work as a ReactJS developer on a real-world Inventory Management System (IMS) project. This experience significantly enhanced my practical skills and deepened my understanding of the field. \n\n With a blend of technical skills and practical experience, I’m excited about the future and eager to contribute to the ever-evolving world of computer science and software development.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "firebase",
    "Java",
    "spring boot",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
    // { href: "#", icon: PencilLine, label: "Notes" }, 
  ],
  contact: {
    email: "ainapureyash2@gmail.com",
    tel: "+91 7028925507",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Yash-Ainapure/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yash-ainapure-3aa050270",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Yash_Ainapure",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "SIBIC Incubation center",
      href: "https://sibic.in/",
      badges: [],
      location: "on-site",
      title: "reactJs intern",
      logoUrl: "/sibic.png",
      start: "June 2024",
      end: "present",
      description:
        "At the Sibic Incubation Center, I got the opportunity to work as a ReactJS developer on a real-world Inventory Management System (IMS) project. This experience significantly enhanced my practical skills and deepened my understanding of the field.",
    },
    {
      company: "Infogrow",
      badges: [],
      href: "https://infogrow.in/",
      location: "onsite",
      title: "Javascript Intern",
      logoUrl: "/infogrow.png",
      start: "May 2022",
      end: "July 2022",
      description:
        "learnt a lot in this internship which leveraged me to study more frameworks of js",
    },
        {
      company: "Freelancer",
      badges: [],
      title: "Software Engineer",
      start: " ",
      end: "present",
      description:
        "Developed multiple Andorid applications for students megaprojects,also developed a management website in react for a Wholesale seller",
    },
  ],
  education: [
    {
      school: "Dr.D.Y.Patil College of Engineering and Technology",
      href: "https://coek.dypgroup.edu.in/",
      degree: "B.Tech in Computer Science",
      logoUrl: "/dypEngg.png",
      start: "2023",
      end: "2026*",
    },
    {
      school: "Dr.D.Y.Polytechnic",
      href: "https://dypp.dypgroup.edu.in/",
      degree: "Diploma",
      logoUrl: "/dypEngg.png",
      start: "2020",
      end: "2023",
    },
    {
      school: "R.S.E.M.S",
      href: "http://www.rsems.edu.in/global/",
      degree: "schooling",
      logoUrl: "/school.png",
      start: "*",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
  ],
} as const;
