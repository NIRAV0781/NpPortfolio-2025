import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Senior Frontend Developer',
      organization: 'Tech Innovations Inc.',
      duration: '2022 - Present',
      points: [
        'Led development of scalable React applications serving 100K+ users',
        'Mentored junior developers and conducted code reviews',
        'Improved application performance by 40% through optimization',
      ],
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      organization: 'Creative Digital Agency',
      duration: '2020 - 2022',
      points: [
        'Built responsive websites and web applications for diverse clients',
        'Collaborated with designers to implement pixel-perfect UI designs',
        'Integrated REST APIs and third-party services',
      ],
    },
    {
      type: 'work',
      title: 'Junior Web Developer',
      organization: 'StartUp Ventures',
      duration: '2019 - 2020',
      points: [
        'Developed and maintained company website and internal tools',
        'Worked with modern JavaScript frameworks and libraries',
        'Participated in agile development processes',
      ],
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      organization: 'University of Technology',
      duration: '2015 - 2019',
      points: [
        'Graduated with Honors (GPA: 3.8/4.0)',
        'Specialized in Web Development and User Interface Design',
        'Led university coding club and organized hackathons',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-gray-50/50 dark:bg-gray-900/30">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Experience & <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Education</span>
        </h2>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div
                    className={`bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {exp.type === 'work' ? (
                        <Briefcase className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                      ) : (
                        <GraduationCap className="w-6 h-6 text-purple-500 dark:text-purple-400" />
                      )}
                      <span className="text-blue-500 dark:text-blue-400 font-semibold">{exp.duration}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">{exp.organization}</p>
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {exp.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute left-8 md:left-1/2 top-8 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-950"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
