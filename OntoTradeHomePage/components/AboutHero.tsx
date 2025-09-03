'use client';

import { useEffect, useState } from 'react';

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            AI로 금융의 미래를<br />
            <span className="gradient-text">함께 만들어갑니다</span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-gray-700 mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            OntoTrade는 최첨단 AI 기술로 금융 투자의 패러다임을 혁신하고,<br />
            모든 투자자가 더 나은 결정을 내릴 수 있도록 돕습니다.
          </p>

          <div className={`flex flex-wrap justify-center gap-8 text-center transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div>
              <h3 className="text-4xl font-bold gradient-text mb-2">2022</h3>
              <p className="text-gray-600">설립년도</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold gradient-text mb-2">50+</h3>
              <p className="text-gray-600">금융 AI 전문가</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold gradient-text mb-2">10K+</h3>
              <p className="text-gray-600">활성 사용자</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;