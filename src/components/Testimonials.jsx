import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'CEO, Tech Innovations Inc.',
            quote:
                'Working with [Your Name] has been an absolute pleasure. Their attention to detail and ability to translate complex requirements into elegant solutions is exceptional.',
        },
        {
            name: 'Michael Chen',
            role: 'Product Manager, Creative Digital',
            quote:
                'An incredibly talented developer who consistently delivers high-quality work on time. Their expertise in React and modern web technologies is truly impressive.',
        },
        {
            name: 'Emily Rodriguez',
            role: 'Design Lead, StartUp Ventures',
            quote:
                'The best frontend developer I\'ve worked with. They bridge the gap between design and development seamlessly, always ensuring pixel-perfect implementations.',
        },
    ];

    return (
        <section id="testimonials" className="py-24 px-6">
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold text-center mb-16">
                    What People <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Say</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
                        >
                            <Quote className="w-12 h-12 text-blue-500 dark:text-blue-400 mb-6 opacity-50" />
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                                <h4 className="text-gray-900 dark:text-white font-bold text-lg">{testimonial.name}</h4>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
