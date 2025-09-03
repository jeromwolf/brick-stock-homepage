'use client';

import { useState } from 'react';
import Link from 'next/link';

const solutionDetails = {
  fluxnews: {
    title: 'FluxNews',
    subtitle: 'AI 실시간 뉴스 영향력 분석 플랫폼',
    description: '글로벌 뉴스가 투자에 미치는 영향을 실시간으로 분석하여 즉각적인 인사이트를 제공합니다.',
    longDescription: `FluxNews는 GPT-4와 FinBERT를 활용하여 전 세계 뉴스를 실시간으로 수집하고 분석합니다. 
    특히 한국의 모빌리티 및 로보틱스 기업에 특화된 분석을 제공하며, 기업 간 네트워크 관계를 
    시각화하여 뉴스가 미치는 파급효과를 한눈에 파악할 수 있습니다.`,
    keyFeatures: [
      {
        title: '실시간 뉴스 수집',
        description: '전 세계 주요 뉴스 소스에서 24/7 뉴스를 수집하고 분석합니다',
        icon: '🌐'
      },
      {
        title: 'AI 감성 분석',
        description: 'GPT-4와 FinBERT를 활용한 정확한 감성 분석 및 영향력 평가',
        icon: '🤖'
      },
      {
        title: '기업 네트워크 시각화',
        description: '기업 간 관계를 그래프로 시각화하여 영향력 전파 경로 파악',
        icon: '🔗'
      },
      {
        title: '스마트 알림',
        description: '중요도에 따른 맞춤형 알림으로 중요한 뉴스를 놓치지 않습니다',
        icon: '🔔'
      }
    ],
    techStack: ['Next.js 14', 'FastAPI', 'PostgreSQL', 'OpenAI GPT-4', 'WebSocket'],
    benefits: [
      '투자 결정에 필요한 시간 80% 단축',
      '뉴스 기반 리스크 조기 감지',
      '데이터 기반의 객관적인 투자 인사이트',
      '24/7 자동화된 모니터링'
    ]
  },
  a2a: {
    title: 'A2A Sentiment Analysis',
    subtitle: 'AI 멀티 에이전트 투자 분석 시스템',
    description: '여러 AI 에이전트가 협업하여 다양한 데이터 소스를 종합 분석하는 차세대 투자 분석 플랫폼입니다.',
    longDescription: `A2A는 뉴스, 소셜미디어, 기업공시 등 다양한 데이터를 수집하고, 각 데이터의 신뢰도에 
    따라 가중치를 부여하여 분석합니다. 여러 AI 모델(Gemini, OpenAI 등)을 활용하여 
    전문가 수준의 투자 리포트를 자동으로 생성합니다.`,
    keyFeatures: [
      {
        title: '다중 데이터 소스',
        description: '뉴스, Twitter, SEC 공시 등 다양한 소스에서 데이터 수집',
        icon: '📊'
      },
      {
        title: '가중치 기반 분석',
        description: '데이터 신뢰도에 따른 차별화된 가중치 적용',
        icon: '⚖️'
      },
      {
        title: 'AI 에이전트 협업',
        description: '특화된 여러 AI 에이전트가 협업하여 종합 분석',
        icon: '🤝'
      },
      {
        title: '자동 리포트 생성',
        description: 'HTML 형식의 전문적인 투자 분석 리포트 자동 생성',
        icon: '📑'
      }
    ],
    techStack: ['Python', 'FastAPI', 'Multiple AI Models', 'Microservices', 'WebSocket'],
    benefits: [
      '종합적인 360도 투자 분석',
      '편향되지 않은 객관적 분석',
      '실시간 리스크 평가',
      '전문가 수준의 분석 리포트'
    ]
  },
  platform: {
    title: 'OntoTrade Platform',
    subtitle: '통합 금융 분석 플랫폼',
    description: '모든 OntoTrade 솔루션을 하나로 통합한 엔터프라이즈급 금융 분석 플랫폼입니다.',
    longDescription: `OntoTrade Platform은 FluxNews와 A2A를 비롯한 모든 솔루션을 통합하여 
    원스톱 금융 분석 환경을 제공합니다. 실시간 대시보드, 포트폴리오 관리, 
    AI 예측 모델 등 투자에 필요한 모든 기능을 제공합니다.`,
    keyFeatures: [
      {
        title: '통합 대시보드',
        description: '모든 데이터와 인사이트를 한눈에 볼 수 있는 대시보드',
        icon: '📈'
      },
      {
        title: '포트폴리오 관리',
        description: 'AI 기반 포트폴리오 최적화 및 리스크 관리',
        icon: '💼'
      },
      {
        title: 'API 통합',
        description: '기존 시스템과의 원활한 통합을 위한 RESTful API',
        icon: '🔌'
      },
      {
        title: '커스터마이징',
        description: '기업별 맞춤형 설정 및 화이트라벨 지원',
        icon: '⚙️'
      }
    ],
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Kubernetes'],
    benefits: [
      '모든 투자 도구를 하나의 플랫폼에서',
      '엔터프라이즈급 보안 및 안정성',
      '무제한 확장 가능한 클라우드 아키텍처',
      '24/7 전문가 지원'
    ]
  }
};

const SolutionDetail = () => {
  const [activeTab, setActiveTab] = useState<'fluxnews' | 'a2a' | 'platform'>('fluxnews');
  const solution = solutionDetails[activeTab];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            우리의 <span className="gradient-text">솔루션</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            OntoTrade는 AI 기술을 활용하여 금융 투자의 모든 단계에서 
            필요한 인사이트와 도구를 제공합니다
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(solutionDetails).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as keyof typeof solutionDetails)}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {solutionDetails[key as keyof typeof solutionDetails].title}
            </button>
          ))}
        </div>

        {/* Solution Content */}
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{solution.title}</h2>
            <p className="text-2xl text-gray-700 mb-6">{solution.subtitle}</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{solution.longDescription}</p>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">주요 기능</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solution.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <span className="text-4xl">{feature.icon}</span>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">기대 효과</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {solution.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">기술 스택</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {solution.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg"
              >
                무료 데모 신청
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-primary-600 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg border-2 border-primary-600"
              >
                도입 문의
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionDetail;