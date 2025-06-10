import React from 'react';
import { Users, Award, Target, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with innovative IT solutions that drive digital transformation and sustainable growth.',
    },
    {
      icon: Lightbulb,
      title: 'Our Vision',
      description: 'To be the leading technology partner that shapes the future of business through cutting-edge solutions.',
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Excellence, innovation, integrity, and customer-centricity guide everything we do.',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A diverse group of passionate professionals dedicated to delivering exceptional results.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">We Are</span>
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Rizconect Solutions is a forward-thinking technology company founded with the vision of 
                bridging the gap between complex IT challenges and innovative solutions. With over a decade 
                of experience, we've helped hundreds of businesses transform their digital landscape.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of certified professionals brings deep expertise in cloud computing, artificial 
                intelligence, cybersecurity, and custom software development. We don't just provide 
                services – we build lasting partnerships that drive your business forward.
              </p>
              <div className="flex items-center space-x-8 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-teal-500 rounded"></div>
            <div className="space-y-12">
              {[
                { year: '2014', title: 'Founded', description: 'Started with a vision to revolutionize IT services' },
                { year: '2017', title: 'Cloud Expansion', description: 'Became AWS and Azure certified partner' },
                { year: '2020', title: 'AI Integration', description: 'Launched artificial intelligence solutions' },
                { year: '2024', title: 'Market Leader', description: 'Recognized as top IT solutions provider' },
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h4>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-white border-4 border-blue-500 rounded-full"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}