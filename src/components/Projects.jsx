import { ExternalLink, Github } from 'lucide-react';
import Rtphoto from "../assets/Rtphoto.png"
import ptphoto from "../assets/Pasteappimage.png"

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-featured online shopping platform with payment integration and real-time inventory management.',
            tech: ['JavaScript'],
            liveUrl: 'https://java-script-redtrigger.vercel.app/',
            image: Rtphoto,
        },
        {
            title: 'Paste App',
            description: 'Collaborative workspace for teams to manage projects, tasks, and deadlines with real-time updates.',
            tech: ['React.js'],
            liveUrl: 'https://mypasteapp-eight.vercel.app/',
            image: ptphoto,
        },
    ];

    return (
        <section id="projects" className="py-24 px-6">
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold text-center mb-16">
                    Featured <span className="bg-blue-600 bg-clip-text text-transparent">Projects</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-600 dark:text-blue-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.liveUrl}
                                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                                    >
                                        <ExternalLink size={18} />
                                        View Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
