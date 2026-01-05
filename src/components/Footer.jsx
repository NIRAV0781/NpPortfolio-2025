import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
                        © {currentYear} Nirav Prajapati. Built with ❤️ and a lot of Logics.
                    </p>

                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/NIRAV0781"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nirav-prajapati-714661289/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="mailto:nirav0781@gmail.com"
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
