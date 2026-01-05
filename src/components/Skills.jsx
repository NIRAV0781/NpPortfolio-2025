const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'],
        },
        {
            title: 'Backend',
            skills: ['Node.js'],
        },
        {
            title: 'Tools & Others',
            skills: ['Git', 'VS Code',"Lovable.ai","ChatGPT", 'Webpack', 'Vite', "Google Antigravity"],
        },
    ];

    const coreSkills = [
        { name: 'React Development', level: 80 },
        { name: 'UI/UX Design', level: 60 },
        { name: 'JavaScript', level: 75 },
        { name: 'Responsive Design', level: 75 },
    ];

    return (
        <section id="skills" className="py-24 px-6 bg-gray-50/50 dark:bg-gray-900/30">
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold text-center mb-16">
                    Skills & <span className="bg-blue-600 bg-clip-text text-transparent">Tech Stack</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{category.title}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/30 rounded-full text-sm font-medium text-blue-600 dark:text-blue-300 hover:border-blue-400 hover:scale-105 transition-all duration-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <h3 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Core Competencies</h3>
                    <div className="space-y-6">
                        {coreSkills.map((skill, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 dark:text-gray-300 font-medium">{skill.name}</span>
                                    <span className="text-blue-500 dark:text-blue-400 font-semibold">{skill.level}%</span>
                                </div>
                                <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
