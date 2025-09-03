'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: 10000, suffix: '+', label: '활성 사용자', duration: 2000 },
  { value: 500, suffix: 'M+', label: '일일 분석 데이터', duration: 2500 },
  { value: 99.9, suffix: '%', label: '서비스 가동률', duration: 3000 },
  { value: 24, suffix: '/7', label: '고객 지원', duration: 1500 },
];

const CountUp = ({ end, duration, suffix }: { end: number; duration: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const startValue = 0;
      
      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        setCount(Math.floor(progress * (end - startValue) + startValue));
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(updateCount);
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref}>
      <span className="text-5xl font-bold gradient-text">
        {count}
        {suffix}
      </span>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            신뢰할 수 있는 <span className="gradient-text">성과</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            OntoTrade는 수많은 투자자와 기업이 신뢰하는 금융 AI 플랫폼입니다
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <CountUp end={stat.value} duration={stat.duration} suffix={stat.suffix} />
              <p className="text-gray-600 mt-2 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;