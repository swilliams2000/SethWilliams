import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Seth Williams — Emerging Tech Engineer | AI, ML, & Decentralized Systems",
  author: "Seth Williams",
  description:
    "Versatile Software and Chemical Engineer based in Orlando, FL, exploring AI/ML, blockchain, and full-stack development",
  lang: "en",
  siteLogo: "/Seth-Small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/seth-m-williams/" },
    { text: "Github", href: "https://github.com/swilliams2000" },
    { text: "Youtube", href: "https://www.youtube.com/@sethwilliams8033" },
    { text: "Hugging Face", href: "https://huggingface.co/SWilliams20" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Seth Williams",
    specialty: "ML & Blockchain Engineer",
    summary:
      "Versatile Software and Chemical Engineer based in Orlando, FL, exploring AI/ML, blockchain, and full-stack development",
    email: "sethcooliemon4@gmail.com",
  },
  experience: [
    {
      company: "Forge Nano",
      position: "Simulation Engineer",
      startDate: "July 2023",
      endDate: "Present",
      summary: [
        "Implemented advanced memory management and code optimization techniques, resulting in a reduction in application load time by 40% and a decrease in crashes by 25%. This significantly improved user experience and increased user retention by 20%.",
        "I led a team of developers in building and integrating new features using Jetpack Android components such as LiveData and ViewModel. This enabled us to build scalable and maintainable applications, reducing the crash rate by 20% and speeding up the time to delivery of new features by 15%.",
        "Integrated Google Pay for in-app purchases, resulting in a 35% increase in mobile transaction revenue. Additionally, implemented Firebase Analytics to gain insights into user behavior, enabling data-driven optimizations and a 30% increase in user retention.",
      ],
    },
    {
      company: "211 Tampa Bay Cares",
      position: "Data Analyst/Software Engineer",
      startDate: "January 2023",
      endDate: "July 2023",
      summary: [
        "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
        "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.",
      ],
    },
    {
      company: "Mars",
      position: "Data Science Intern",
      startDate: "Feb 2017",
      endDate: "May 2018",
      summary: [
        "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
        "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.",
      ],
    },
    {
      company: "Raytheon",
      position: "Software Engineer Intern",
      startDate: "Jun 2015",
      endDate: "Oct 2016",
      summary:[
        "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
        "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.",
      ],
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Howdy, I’m Seth Williams, a passionate machine learning and blockchain developer exploring how intelligent systems and decentralized technologies can transform the way we live and work. I’m focused on building scalable, secure, and innovative solutions that push the boundaries of what’s possible in these fast-moving fields.

      My foundation in chemical engineering gives me a unique perspective on solving complex problems, combining analytical thinking with practical, real world applications. By bridging my engineering background with my software experience, I aim to create impactful technologies that are both creative and grounded in strong technical rigor.
    `,
    image: "/Seth-Big.jpg",
  },
};

// #5755ff
