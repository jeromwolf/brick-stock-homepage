'use client';

const Team = () => {
  const teamMembers = [
    {
      name: '김정우',
      role: 'CEO & Co-Founder',
      description: '前 골드만삭스 퀀트 트레이더, MIT 컴퓨터공학 박사',
      expertise: ['AI/ML', '퀀트 트레이딩', '금융공학']
    },
    {
      name: '이서연',
      role: 'CTO & Co-Founder',
      description: '前 구글 AI 리서치 엔지니어, 스탠포드 AI Lab',
      expertise: ['딥러닝', 'NLP', '분산시스템']
    },
    {
      name: '박민준',
      role: 'Head of Product',
      description: '前 삼성증권 디지털금융본부, 연세대 경영학',
      expertise: ['제품전략', 'UX/UI', '금융서비스']
    },
    {
      name: '최은지',
      role: 'Head of AI Research',
      description: '前 네이버 AI Lab, KAIST 전산학 박사',
      expertise: ['자연어처리', '감성분석', 'AI 모델링']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">우리 팀</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            금융과 AI 분야 최고의 전문가들이 모여<br />
            혁신적인 금융 솔루션을 만들어갑니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">
                  {member.name.charAt(0)}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
              <p className="text-primary-600 font-medium text-center mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm text-center mb-4">{member.description}</p>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {member.expertise.map((skill, idx) => (
                  <span key={idx} className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">함께 성장할 인재를 찾습니다</h3>
            <p className="text-gray-700 mb-6">
              OntoTrade와 함께 금융 AI의 미래를 만들어갈<br />
              열정적인 인재를 기다립니다
            </p>
            <a
              href="/careers"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              채용 정보 보기
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;