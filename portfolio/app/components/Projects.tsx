import React from 'react'
import ProjectCard from "@/app/components/ProjectCard";

const projects = [
    {
        id: 1,
        title: "Project One",
        description: "A brief description of project one.",
        images: [
            {
                image: "/images/cameleoncase1.jpg",
                alt: "Users can upload pictures and design phone cases."
            },
            {
                image: "/images/cameleoncase2.jpg",
                alt: "Users can upload pictures and design phone cases."
            },
            {
                image: "/images/cameleoncase3.jpg",
                alt: "Users can upload pictures and design phone cases."
            }
        ],
        technologies: [
            {
                name: "Next.js",
                logo: "/logos/next.svg"
            },
            {
                name: "TypeScript",
                logo: "/logos/typescript.svg"
            },
            {
                name: "TailwindCSS",
                logo: "/logos/tailwindcss.svg"
            },

        ],
        link: "https://example1.com"
    },
    {
        id: 2,
        title: "Project Two",
        description: "A brief description of project two.",
        images: [
            {
                image: "/images/cameleoncase1.jpg",
                alt: "Users can upload pictures and design phone cases."
            },
            {
                image: "/images/cameleoncase2.jpg",
                alt: "Users can upload pictures and design phone cases."
            },
            {
                image: "/images/cameleoncase3.jpg",
                alt: "Users can upload pictures and design phone cases."
            }
        ],
        technologies: [
            {
                name: "Next.js",
                logo: "/logos/next.svg"
            },
            {
                name: "TypeScript",
                logo: "/logos/typescript.svg"
            },
            {
                name: "TailwindCSS",
                logo: "/logos/tailwindcss.svg"
            },

        ],
        link: "https://example2.com"
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects"
                 className="bg-lightGray dark:bg-darkModeGray p-6 md:p-12 lg:p-24 xl:p-32 transition-colors duration-500 ease-in-out">
            {projects.map((project) => (
                <ProjectCard project={project}/>
            ))}
        </section>
    )
}
export default Projects
