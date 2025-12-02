// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  whatapp1,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "WhatsApp",
    link: "https://wa.link/utbheb",
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "github",
    title: "GitHub",
    link: "https://github.com/just-Anup?tab=repositories",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AI Agent For Businesses ",
    icon: mobile,
  },
  {
    title: "Web Designer",
    icon: backend,
  },
  {
    title: "Ai Workflow ",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "React Native",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Next JS",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Web Developer",
    company_name: "Techicynics",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Create a Ecommerce website for Nagalinks. This website is for selling naga artisen products online all over Nagaland district.",
      "Create a Protforlio website for Netherland client who is a architect and interior designer.",
      "Create a tourism website for Techicynics . This website is for promoting tourism in Nagaland.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Techicynics",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Design & Create an App for Autocion PVT LTD. This app is for booking mechanic from your phone to your door step",

    ],
  },

] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Working with Teju  has been a pleasure. He has a strong grasp of modern development practices and always shows initiative in solving problems efficiently. His ability to learn quickly and collaborate with the team made our projects smoother and more successful. I could always rely on him to deliver quality work on time.",
    name: "Bipothung M Humsoe",
    designation: "Cheif Developer",
    company: "Techicynics",
  
  },
  {
    testimonial:
      "I approached Techicynics to build my e-commerce website, and the result exceeded my expectations. He designed a user-friendly, responsive platform that has helped me attract more customers and boost sales. I highly recommend his services to anyone looking for reliable web development.",
    name: "Alozo Sumi",
    designation: "Founder",
    company: "Nagalinks",

  },
  {
    testimonial:
      "I needed a personal portfolio website to showcase my work, and Anup delivered exactly what I envisioned. The design is clean, modern, and perfectly highlights my skills. He listened carefully to my requirements, suggested great improvements, and ensured the site was completed on time. I’m extremely satisfied with his work",
    name: "walling",
    designation: "Architect & Interior Designer",
    company: "Studio Walling",

  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Quickflow",
    description:
      "Quickflow is an open-source Notion-style workspace built with Next.js, Convex, Clerk, and TailwindCSS. It allows users to create, edit, and collaborate on documents in real time with a clean and minimal interface.",
    tags: [
      {
        name: "Next.js, Convex, Clerk, and TailwindCSS.",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    live_site_link: "https://quickflow.vercel.app",
    source_code_link: "https://quickflow.vercel.app",
  },
  {
    name: "ProfilePress",
    description:
      "ProfilePress is a LinkedIn-to-portfolio generator that allows users to transform their professional profiles into sleek personal websites. It features customizable templates, one-click Vercel deploy, and editable sections for bio, projects, and skills.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image:project2 ,
    live_site_link: "https://profilepress.vercel.app",
    source_code_link: "https://profilepress.vercel.app",
  },
  {
    name: "Blockify",
    description:
      "Blockify is a minimalist portfolio and blog builder powered by Next.js and Vercel. It enables users to build visually appealing sites with content blocks and smooth UI transitions",
    tags: [
      {
        name: "Blockify",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    live_site_link: "https://blockify-kohl.vercel.app",
    source_code_link: "https://blockify-kohl.vercel.app",

  },
  {
    name: "Airstay",
    description:
      "Hotel booking website built with ReactJs, TailwindCSS, Typescript, Express.js backend, MongoDB, and Firebase (for image storage).",
    tags: [
      {
        name: "ReactJs, TailwindCSS, Typescript, Express.js backend",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    live_site_link: "https://airstay.vercel.app",
    source_code_link: "https://airstay.vercel.app",

  },
  {
    name: "Estatery",
    description:
      "Responsive real estate website using NextJS, TailwindCSS, Sanity.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    live_site_link: "https://estatery.vercel.app",
    source_code_link: "https://estatery.vercel.app",
  },
  {
    name: "MovieSpace",
    description:
      "ReactJS website that fetches and displays movie data using IMDB API.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    live_site_link: "https://movie-space.netlify.app",
    source_code_link: "https://movie-space.netlify.app",
  },

  {
    name: "NextGen - Waitlist",
    description:
      "Responsive landing page built with NextJS, TailwindCSS, Framer Motion, with modern aesthetics.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project7,
    live_site_link: "https://nextgen-nocode.vercel.app",
    source_code_link: "https://nextgen-nocode.vercel.app",
  },


  {
    name: "Task Manager",
    description:
      "CRUD application with Node.js, Express.js, MongoDB.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project8,
    live_site_link: "https://task-list-ivory.vercel.app",
    source_code_link: "https://task-list-ivory.vercel.app",
  },


  {
    name: "NFT Preview Card Component",
    description:
      "UI component created with HTML and CSS.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project9,
    live_site_link: "https://nft-preview-card-component-nickk.netlify.app",
    source_code_link: "https://nft-preview-card-component-nickk.netlify.app",
  },

  {
    name: "QR Code Component",
    description:
      "Stylish QR code UI built with HTML and CSS.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project10,
    live_site_link: "https://qr-code-component-nickk.netlify.app",
    source_code_link: "https://qr-code-component-nickk.netlify.app",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "",
  },
  {
    name: "Whatsapp",
    icon: whatapp1,
    link: "https://www.linkedin.com/in/sanidhyy",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/just-Anup?tab=repositories",
  },
] as const;
