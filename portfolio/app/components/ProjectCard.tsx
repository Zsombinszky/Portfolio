import React from 'react'
import ProjectCarousel from "@/app/components/ProjectCarousel";

interface Technology {
    name: string;
    logo: string;
}

interface Image {
    image: string;
    alt: string;
}

interface Project {
    id: number;
    title: string;
    description: string;
    images: Image[];
    technologies: Technology[];
    link: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({project}) => {
    return (
        <div
            className="bg-white dark:bg-darkModeLightGray rounded-lg shadow-lg overflow-hidden transition-colors duration-500 ease-in-out">
            <div>
                <ProjectCarousel images={project.images}/>
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold text-darkGray dark:text-lightGray mb-2">
                    {project.title}
                </h3>
                <p className="text-sm text-darkGray dark:text-lightGray mb-4">
                    {project.description}
                </p>
                <div>
                    {project.technologies.map((technology) => (
                        <div key={technology.name} className="flex items-center">
                            <img src={technology.logo} alt={technology.name} className="w-6 h-6 mr-2"/>
                            <span className="text-sm text-darkGray dark:text-lightGray">{technology.name}</span>
                        </div>
                    ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                   className="text-lightCoral hover:text-lightOrange transition-colors duration-300 font-medium">
                    View Project
                </a>
            </div>
        </div>
    )
}
export default ProjectCard
