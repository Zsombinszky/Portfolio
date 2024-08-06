import React from 'react';

const technologies = [
    {
        category: 'Frontend',
        items: [
            {name: 'Javascript', logo: '/logos/javascript.svg'},
            {name: 'Node.js', logo: '/logos/nodejs.svg'},
            {name: 'React', logo: '/logos/react.svg'},
            {name: 'TailwindCSS', logo: '/logos/tailwindcss.svg'},
        ],
    },
    {
        category: 'Backend',
        items: [
            {name: 'Java', logo: '/logos/java.svg'},
            {name: 'Spring Boot', logo: '/logos/springboot.svg'},
        ],
    },
    {
        category: 'Database',
        items: [
            {name: 'MongoDB', logo: '/logos/mongodb.svg'},
            {name: 'PostgreSQL', logo: '/logos/postgresql.svg'},
        ]
    }
];

const Technologies: React.FC = () => {
    return (
        <div id={"technologies"}
             className="bg-lightGray dark:bg-darkModeGray mt-6 md:mt-12 lg:mt-16 p-6 md:p-12 lg:p-24 xl:p-32">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-darkGray dark:text-lightGray mb-12 text-center">
                    Technologies I Use
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {technologies.map((tech) => (
                        <div key={tech.category}
                             className="bg-white dark:bg-darkModeLightGray p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-darkGray dark:text-lightGray mb-4">
                                {tech.category}
                            </h3>
                            <ul>
                                {tech.items.map((item) => (
                                    <li key={item.name} className="flex items-center mb-4">
                                        <img src={item.logo} alt={item.name} className="w-8 h-8 mr-4"/>
                                        <span className="text-lg text-darkGray dark:text-lightGray">{item.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Technologies;