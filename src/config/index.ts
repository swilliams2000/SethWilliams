import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Seth Williams — Emerging Tech Engineer | AI, ML, & Decentralized Systems",
  author: "Seth Williams",
  description:
    "Versatile Software and Chemical Engineer based in Orlando, FL, exploring AI/ML, blockchain, and full-stack development",
  lang: "en",
  siteLogo: "/Seth-Small.jpg",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
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
        "Built <strong>digital twins</strong> of new production lines using <strong>Emulate3D</strong>, testing <strong>control logic</strong> and buffer strategies, reducing potential downtime by <strong>30%</strong> before physical installation.",
      "Developed <strong>Python scripts</strong> to automate simulation parameter updates (downtime, cycle times, scrap), saving <strong>20+ hours per week</strong> of manual data entry.",
      "Integrated simulation results with <strong>SQL databases</strong> to track KPIs like throughput, uptime, and material flow efficiency, increasing model-based predictions’ accuracy by <strong>25%</strong>.",
      "Collaborated with controls engineers to validate simulation data against real-time <strong>PLC signals</strong>, reducing discrepancies between simulated and actual line performance by <strong>15%</strong>."
      ],
    },
    {
      company: "211 Tampa Bay Cares",
      position: "Data Analyst/Software Engineer",
      startDate: "January 2023",
      endDate: "July 2023",
      summary: [
         "Designed and deployed a <strong>mobile app in Flutter</strong> for Android and iOS, increasing volunteer engagement by <strong>40%</strong> and reducing service request response time by <strong>25%</strong>.",
      "Implemented <strong>biometric authentication</strong> and <strong>data encryption</strong>, improving data security and lowering unauthorized access incidents by <strong>30%</strong>.",
      "Created <strong>data visualization dashboards</strong> for management, enabling faster allocation of resources and improving operational efficiency by <strong>20%</strong>.",
      "Analyzed service request data to identify trends, contributing to a <strong>15%</strong> increase in program outreach effectiveness."
      ],
    },
    {
      company: "Mars",
      position: "Data Science Intern",
      startDate: "May 2022",
      endDate: "August 2022",
      summary: [
        "Designed Python-based <strong>data pipelines</strong> to clean and process sensor data from high-speed packaging lines, handling over <strong>2 million data points per week</strong>.",
      "Applied <strong>machine learning models</strong> to predict scrap rates, reducing material waste by <strong>12%</strong> on targeted lines.",
      "Built <strong>Power BI dashboards</strong> to visualize downtime, buffer usage, and yield trends, increasing visibility for operations leadership and supporting <strong>data-driven decision-making</strong>.",
      "Conducted statistical analysis recommending parameter adjustments that reduced waste variability by <strong>18%</strong>."
      ],
    },
    {
      company: "Raytheon",
      position: "Software Engineer Intern",
      startDate: "May 2021",
      endDate: "August 2021",
      summary:[
       "Developed <strong>C# and .NET applications</strong> to automate report generation, saving engineers <strong>10+ hours weekly</strong> on manual reporting.",
      "Built a <strong>web-based dashboard (React + Node)</strong> to visualize real-time metrics from test equipment, improving engineer accessibility and reducing issue detection time by <strong>25%</strong>.",
      "Integrated software tools with <strong>MSSQL databases</strong>, cutting manual data entry by <strong>50%</strong> and improving cross-team collaboration.",
      "Wrote <strong>unit tests with XUnit</strong>, improving software reliability and reducing post-deployment defects by <strong>15%</strong>."
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
    {
      name: "Arduino Wall Sensing Robot",
      summary: "Built and programmed an Arduino robot to autonomously avoid obstacles, teaching hands-on STEM skills for the Girl Scouts of America.",
      image: "/Robot.jpg",
    },
  ],
about: {
  intro: `
    Hey, I’m Seth Williams 👋. I’m a Project Manager at <strong>Forge Battery</strong>, 
    working on digital twin and manufacturing initiatives. On the side, I contribute to AI/ML 
    for science projects with <strong>Hugging Face</strong>. I’m also pursuing a part-time 
    Master’s in Software Engineering at Georgia Tech.
  `,
  skills: [
    "Python",
    "Full-Stack Development",
    "DevOps & Infastructure",
    "Cloud Computing",
    "Web Development",
  ],
  bio: `
    When Im not coding, you'll find me playing volleyball, soccer, tennis, hiking, and making cooking youtube videos
    `,
    image: "/Seth-Big.jpg",
  },
};

// #5755ff
