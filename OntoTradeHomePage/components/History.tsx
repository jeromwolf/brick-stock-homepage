'use client';

const History = () => {
  const milestones = [
    {
      year: '2022',
      quarter: 'Q1',
      title: 'OntoTrade 설립',
      description: 'AI 기반 금융 솔루션 스타트업으로 시작',
      highlight: true
    },
    {
      year: '2022',
      quarter: 'Q3',
      title: 'Pre-Seed 투자 유치',
      description: '20억원 규모 초기 투자 유치 성공'
    },
    {
      year: '2023',
      quarter: 'Q1',
      title: 'FluxNews 베타 출시',
      description: 'AI 실시간 뉴스 분석 플랫폼 베타 서비스 시작'
    },
    {
      year: '2023',
      quarter: 'Q2',
      title: 'Series A 투자 유치',
      description: '100억원 규모 시리즈 A 투자 유치',
      highlight: true
    },
    {
      year: '2023',
      quarter: 'Q4',
      title: 'A2A 플랫폼 출시',
      description: '멀티 에이전트 투자 분석 시스템 정식 출시'
    },
    {
      year: '2024',
      quarter: 'Q1',
      title: '글로벌 진출',
      description: '일본, 싱가포르 시장 진출 및 현지 파트너십 체결'
    },
    {
      year: '2024',
      quarter: 'Q2',
      title: 'OntoTrade Platform 출시',
      description: '통합 금융 분석 플랫폼 정식 서비스 시작',
      highlight: true
    },
    {
      year: '2024',
      quarter: 'Q3',
      title: '사용자 10,000명 돌파',
      description: '누적 사용자 10,000명 달성 및 MAU 지속 성장'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">우리의 여정</h2>
          <p className="text-xl text-gray-600">
            끊임없는 혁신으로 성장해온 OntoTrade의 발자취
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

            {/* Milestones */}
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start mb-8">
                {/* Timeline Dot */}
                <div className={`absolute left-8 w-4 h-4 rounded-full transform -translate-x-1/2 ${
                  milestone.highlight 
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 ring-4 ring-primary-100' 
                    : 'bg-gray-400'
                }`}></div>

                {/* Content */}
                <div className="ml-20 flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-sm font-semibold text-gray-500">
                      {milestone.year} {milestone.quarter}
                    </span>
                    <h3 className={`text-xl font-semibold ${
                      milestone.highlight ? 'gradient-text' : 'text-gray-900'
                    }`}>
                      {milestone.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}

            {/* Future */}
            <div className="relative flex items-start">
              <div className="absolute left-8 w-4 h-4 rounded-full transform -translate-x-1/2 bg-gray-300 animate-pulse"></div>
              <div className="ml-20 flex-1">
                <h3 className="text-xl font-semibold text-gray-400 mb-2">
                  The Future
                </h3>
                <p className="text-gray-500">
                  글로벌 No.1 AI 금융 플랫폼을 향한 여정은 계속됩니다...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;