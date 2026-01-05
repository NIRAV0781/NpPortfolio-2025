import { MapPin, Briefcase, Code2, CheckCircle2 } from 'lucide-react';

const About = () => {
    const infoCards = [
        { icon: MapPin, label: 'Location', value: 'Ahmedabad, Gujrat, India' },
        { icon: Briefcase, label: 'Experience', value: 'Fresher' },
        { icon: Code2, label: 'Main Stack', value: 'React.js' },
        { icon: CheckCircle2, label: 'Availability', value: 'Available' },
    ];

    return (
        <section id="about" className="py-24 px-6">
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold text-center mb-16">
                    About <span className="bg-blue-600 bg-clip-text text-transparent">Me</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">My Story</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                            My professional journey began in February 2025 at Tops Technologies, where I immersed myself in Front-end Development with a focus on React. During this time, I built a strong foundation by working on various hands-on projects that honed my skills in creating dynamic and responsive user interfaces.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                            Currently, I am working as a Front-end Developer at Vahlay Consulting. I am passionate about crafting seamless web experiences and am constantly exploring new technologies to deliver high-quality, scalable solutions. My goal is to combine technical expertise with creative design to build impactful digital products.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {infoCards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
                            >
                                <card.icon className="w-10 h-10 text-blue-500 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h4 className="text-gray-500 text-sm mb-2">{card.label}</h4>
                                <p className="text-gray-900 dark:text-white font-semibold text-lg">{card.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
