
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <svg viewBox="0 0 100 80" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0D2F6B" />
            <stop offset="100%" stopColor="#4A90E2" />
          </linearGradient>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#F0E68C" />
          </linearGradient>
        </defs>
        
        <path d="M50 75 C 30 75, 10 60, 10 50 C 10 65, 30 78, 50 78 C 70 78, 90 65, 90 50 C 90 60, 70 75, 50 75 Z" fill="url(#blueGradient)" opacity="0.8"/>
        <path d="M10 50 L 10 20 C 10 10, 20 5, 50 5 C 80 5, 90 10, 90 20 L 90 50 L 50 75 L 10 50 Z" stroke="url(#blueGradient)" strokeWidth="2" fill="white"/>
        <path d="M50 70 L 15 50 L 15 22 C 15 15, 25 10, 50 10 C 75 10, 85 15, 85 22 L 85 50 L 50 70 Z" fill="url(#blueGradient)"/>

        <circle cx="50" cy="35" r="15" fill="url(#goldGradient)"/>
        <path d="M50,20 v30 M35,35 h30 M38,25 l24,20 M38,45 l24,-20" stroke="#FFF" strokeWidth="0.5" opacity="0.5"/>

        <path d="M55 40 Q 70 20, 95 10" stroke="url(#goldGradient)" strokeWidth="5" fill="none" strokeLinecap="round"/>
        <path d="M95 10 L 90 20 M 95 10 L 85 12" stroke="url(#goldGradient)" strokeWidth="5" fill="none" strokeLinecap="round"/>
      </svg>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-rada-blue">RADA <span className="text-rada-gold">International</span></span>
        <span className="text-xs text-gray-500 -mt-1">Ranking & Accreditation Development Academy</span>
      </div>
    </div>
  );
};

export default Logo;
