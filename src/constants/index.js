import { starbucks, } from "../assets/images";

import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: redux,
        name: "Redux-Toolkit",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: 'https://api.whatsapp.com/send?phone=9036400498',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/BhargavaTejaN?tab=repositories',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/bhargava-teja-narasani-753615217/',
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Temenos",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "DEC 2021 - DEC 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const projects = [
    {
        iconUrl: snapgram,
        theme: 'btn-back-green',
        name: 'SnapThreads',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        liveLink: 'https://snap-threads.vercel.app/signin',
        gitLink: 'https://github.com/BhargavaTejaN/SnapThreads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Tour & Tavel',
        description: 'Designed and built a mobile app for finding Tours, Booking The Tours and Give Reviews.',
        liveLink: 'https://voluble-daifuku-a090e6.netlify.app/login',
        gitLink: 'https://github.com/BhargavaTejaN/Tour-and-travel',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram App',
        description: 'Built a complete Replica of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        liveLink: 'https://threads-sand-one.vercel.app/sign-in?redirect_url=https%3A%2F%2Fthreads-sand-one.vercel.app%2F',
        gitLink: 'https://github.com/BhargavaTejaN/Threads/tree/main/myapp',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Pokemon',
        description: 'Developed a web application for Pokemens, Comapring the Pokemon, Adding To our Fav List.',
        liveLink: 'https://64d3a9c31932317737f1045a--cozy-mermaid-bd647c.netlify.app/pokemon/1',
        gitLink: 'https://github.com/BhargavaTejaN/Pokemon/tree/main/myapp',

    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Powered Prompts Application',
        description: 'Which is An Open-Source AI Propmting Tool For Modern World To Discover, Create, and Share Creative Prompts',
        liveLink: 'https://propmtopia-nextjs.vercel.app/',
        gitLink: 'https://github.com/BhargavaTejaN/Promptopia-crud-nextjs/tree/main/myapp',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'File Manager',
        description: 'Which is An Online File Manager To Store Our Files, Pics, Documents And Folder Build FireBase as The Backend',
        liveLink: 'https://cloud-file-manager-lime.vercel.app/login',
        gitLink: 'https://github.com/BhargavaTejaN/cloud-file-manager/tree/main/myapp',
    },
];