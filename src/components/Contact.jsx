import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="py-24 px-6 bg-gray-50/50 dark:bg-gray-900/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-5xl font-bold text-center mb-6">
                    Let's Work <span className="bg-blue-600 bg-clip-text text-transparent">Together</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-center text-lg mb-16 max-w-2xl mx-auto">
                    Have a project in mind or just want to chat? I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Mail className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email</h3>
                                <a href="mailto:your.email@example.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                    nirav0781@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Location</h3>
                                <p className="text-gray-600 dark:text-gray-400">Ahmedabad, Gujrat, India</p>
                            </div>
                        </div>

                        <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Quick Response</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                I typically respond within 24 hours during business days. For urgent matters, feel free to reach out via email directly.
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-6 py-4 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-gray-900 dark:text-white"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-6 py-4 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-gray-900 dark:text-white"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-6 py-4 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-gray-900 dark:text-white"
                                placeholder="What's this about?"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="6"
                                className="w-full px-6 py-4 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-gray-900 dark:text-white resize-none"
                                placeholder="Tell me about your Company..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full px-8 py-4 bg-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <Send size={20} />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
