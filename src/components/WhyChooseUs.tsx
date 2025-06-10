import React from 'react';
import { CheckCircle, Clock, Shield, Users, Zap, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: CheckCircle,
      title: 'Proven Track Record',
      description: 'Over 500 successful projects with 99.9% client satisfaction rate and industry-leading results.',
      stats: '99.9% Success Rate',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring to ensure your systems run smoothly.',
      stats: '24/7 Availability',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Military-grade security protocols and compliance with international standards.',
      stats: 'SOC 2 Certified',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with extensive experience in cutting-edge technologies.',
      stats: '50+ Experts',
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Fast implementation with minimal downtime using proven methodologies.',
      stats: '50% Faster Delivery',
    },
    {
      icon: HeartHandshake,
      title: 'Partnership Approach',
      description: 'We work as your technology partner, not just a service provider.',
      stats: 'Long-term Partnerships',
    },
  ];

  return (
    <section id="why-choose" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Rizconect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine technical expertise with business acumen to deliver solutions that drive real results for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{reason.description}</p>
                    <div className="inline-block bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {reason.stats}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonial Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                ))}
              </div>
              <blockquote className="text-2xl font-medium text-gray-900 mb-6 leading-relaxed">
                "Rizconect Solutions transformed our entire IT infrastructure. Their expertise in cloud migration 
                saved us 40% in operational costs while improving our system performance dramatically."
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">John Davis</div>
                  <div className="text-gray-600">CTO, TechCorp Inc.</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { metric: '40%', label: 'Cost Reduction' },
                { metric: '3x', label: 'Performance Boost' },
                { metric: '99.9%', label: 'Uptime Achieved' },
                { metric: '2 Weeks', label: 'Migration Time' },
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}