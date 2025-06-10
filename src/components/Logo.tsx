import React from 'react';
import { Zap, Globe, Cloud } from 'lucide-react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center relative overflow-hidden group">
          {/* Animated background pulse */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
          
          {/* Main icon with rotation */}
          <Zap className="w-6 h-6 text-white relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
          
          {/* Floating decorative elements */}
          <Cloud className="w-3 h-3 text-blue-200 absolute top-1 right-1 opacity-60 animate-bounce" style={{ animationDelay: '0.5s' }} />
          <Globe className="w-3 h-3 text-teal-200 absolute bottom-1 left-1 opacity-60 animate-bounce" style={{ animationDelay: '1s' }} />
        </div>
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-bold text-gray-900 leading-tight">
            Rizconect
          </span>
          <span className="text-sm text-blue-600 font-medium -mt-1">
            Solutions
          </span>
        </div>
      )}
    </div>
  );
}