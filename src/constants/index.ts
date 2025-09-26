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
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
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
    title: "Work",
    link: null,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Web Designer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
      "Working with Anup has been a pleasure. He has a strong grasp of modern development practices and always shows initiative in solving problems efficiently. His ability to learn quickly and collaborate with the team made our projects smoother and more successful. I could always rely on him to deliver quality work on time.",
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
    name: "Autocion App",
    description:
      "App that allows users to book mechanic from your phone to your door step.",
    tags: [
      {
        name: "react native",
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
    source_code_link: "https://github.com/just-Anup?tab=repositories",
  },
  {
    name: "Grap a Coffee",
    description:
      "A responsive app use for ordering coffee on your table in your favourite cafe.",
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
    image: project2,
    source_code_link: "https://github.com/just-Anup?tab=repositories",
  },
  {
    name: "Nagalinks E-commerce",
    description:
      "A responsive e-commerce web application that allows users to buy authentic Naga handloom products online at reasonable prices.",
    tags: [
      {
        name: "react",
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
    source_code_link: "https://github.com/just-Anup?tab=repositories",
  },
  {
    name: "Studio walling",
    description:
      "A responsive portfolio website that showcases the work of an architect and interior designer, highlighting their projects and services.",
    tags: [
      {
        name: "nextjs",
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
    source_code_link: "https://github.com/just-Anup?tab=repositories",

  },
  {
    name: "Digi pay",
    description:
      "A digital payment app that allows users to send and receive money instantly, pay bills, and manage their finances securely from their mobile devices.",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/just-Anup?tab=repositories",
  },
  {
    name: "pikalo",
    description:
      "A online movie booking app that allows users to book movie tickets, view showtimes, and explore nearby theaters with ease.",
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
    source_code_link: "https://github.com/just-Anup?tab=repositories",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "",
  },
  {
    name: "Linkedin",
    icon: linkedin,
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
