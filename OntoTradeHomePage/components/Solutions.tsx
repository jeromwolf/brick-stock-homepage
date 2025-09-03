'use client';

import Link from 'next/link';
import Image from 'next/image';

const solutions = [
  {
    id: 'fluxnews',
    title: 'FluxNews',
    subtitle: 'AI 실시간 뉴스 영향력 분석',
    description: '글로벌 뉴스가 한국 모빌리티 및 로보틱스 기업에 미치는 영향을 실시간으로 분석합니다',
    features: [
      'GPT-4 기반 뉴스 분석',
      '기업 네트워크 시각화',
      '영향력 점수 (0.0-1.0)',
      '스마트 알림 시스템'
    ],
    color: 'from-blue-500 to-cyan-500',
    image: '/images/fluxnews-preview.png'
  },
  {
    id: 'a2a',
    title: 'A2A Sentiment Analysis',
    subtitle: 'AI 멀티 에이전트 투자 분석',
    description: '여러 AI 에이전트가 협업하여 뉴스, 소셜미디어, 기업공시를 종합 분석합니다',
    features: [
      '다중 데이터 소스 분석',
      '가중치 기반 신뢰도 평가',
      'HTML 투자 리포트 생성',
      '대화형 인터페이스'
    ],
    color: 'from-purple-500 to-pink-500',
    image: '/images/a2a-preview.png'
  },
  {
    id: 'platform',
    title: 'OntoTrade Platform',
    subtitle: '통합 금융 분석 플랫폼',
    description: '모든 금융 데이터와 AI 인사이트를 하나의 플랫폼에서 관리하고 분석합니다',
    features: [
      '실시간 데이터 대시보드',
      '포트폴리오 관리',
      'AI 예측 모델',
      'API 통합 지원'
    ],
    color: 'from-green-500 to-teal-500',
    image: '/images/platform-preview.png'
  }
];

const Solutions = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            우리의 <span className="gradient-text">솔루션</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            각 분야에 특화된 AI 금융 솔루션으로 비즈니스를 혁신하세요
          </p>
        </div>

        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>
                    {solution.title}
                  </h3>
                  <p className="text-xl text-gray-700 font-medium">{solution.subtitle}</p>
                </div>
                
                <p className="text-gray-600 text-lg">{solution.description}</p>
                
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <svg className={`w-6 h-6 bg-gradient-to-r ${solution.color} bg-clip-text text-transparent flex-shrink-0 mt-0.5`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex space-x-4">
                  <Link
                    href={`/solutions#${solution.id}`}
                    className={`px-6 py-3 bg-gradient-to-r ${solution.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium`}
                  >
                    자세히 보기
                  </Link>
                  <Link
                    href="/demo"
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-all duration-300 font-medium"
                  >
                    데모 신청
                  </Link>
                </div>
              </div>
              
              <div className="flex-1">
                <div className={`relative bg-gradient-to-br ${solution.color} p-1 rounded-2xl`}>
                  <div className="bg-white rounded-xl p-8">
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400 text-lg">Solution Preview</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;