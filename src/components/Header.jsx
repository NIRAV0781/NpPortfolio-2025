import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = ({ isDarkMode, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
                }`}
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#home" className="text-2xl font-bold bg-blue-600 bg-clip-text text-transparent">
                        Nirav Prajapati
                    </a>

                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors duration-200 relative group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-4 py-4 bg-white/95 dark:bg-gray-900/95 rounded-lg backdrop-blur-md shadow-xl">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="block px-4 py-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded transition-all duration-200"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
