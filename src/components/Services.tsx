import React from 'react';
import { Cloud, Shield, GraduationCap, Code, Brain, Settings } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'AWS and Azure native cloud solutions with scalable architecture and seamless migration services.',
      features: ['AWS/Azure Migration', 'Cloud Architecture', 'Cost Optimization', 'Disaster Recovery'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Settings,
      title: 'Managed IT Services',
      description: 'Comprehensive IT infrastructure management with 24/7 monitoring and proactive support.',
      features: ['Network Management', '24/7 Monitoring', 'Help Desk Support', 'System Maintenance'],
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: GraduationCap,
      title: 'IT Training',
      description: 'Professional certification courses and corporate training programs for technology advancement.',
      features: ['Cloud Certifications', 'Corporate Training', 'Skill Development', 'Hands-on Labs'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Code,
      title: 'Web & App Development',
      description: 'Custom web applications and mobile solutions built with modern technologies and frameworks.',
      features: ['Web Development', 'Mobile Apps', 'API Integration', 'UI/UX Design'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'AI-powered solutions including machine learning, automation, and intelligent data analytics.',
      features: ['ML Solutions', 'Process Automation', 'Data Analytics', 'AI Consulting'],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving cyber threats.',
      features: ['Security Audits', 'Threat Detection', 'Compliance', 'Security Training'],
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT services designed to accelerate your business growth and digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-2 transform duration-300 flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}