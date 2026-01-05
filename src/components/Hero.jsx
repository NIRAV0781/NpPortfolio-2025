import { Github, Linkedin, Mail, Dribbble } from 'lucide-react';
import mtphoto from '../assets/NiravProfile.jpg'

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                            Hi, I'm <span className="bg-blue-600 bg-clip-text text-transparent">Nirav </span>
                            <br />
                            I build modern web experiences.
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                            A passionate frontend developer who transforms complex problems into elegant, user-friendly digital solutions. I specialize in creating seamless experiences that users love.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="#projects"
                                className="px-8 py-4 bg-blue-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                            >
                                View My Work
                            </a>
                            <a
                                href="/NiravResume-Jan2026.pdf"
                                download="Nirav-CV.pdf"
                                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 rounded-full font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300 hover:scale-105"
                            >
                                Download CV
                            </a>
                        </div>
                        <div className="flex gap-6 pt-6">
                            <a
                                href="https://github.com/NIRAV0781"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                            >
                                <Github size={28} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/nirav-prajapati-714661289/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                            >
                                <Linkedin size={28} />
                            </a>
                            <a
                                href="mailto:your.email@example.com"
                                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                            >
                                <Mail size={28} />
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-10 animate-pulse"></div>
                            <div className="relative w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center text-8xl font-bold text-gray-700">
                                        <img src={mtphoto} alt="No Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
