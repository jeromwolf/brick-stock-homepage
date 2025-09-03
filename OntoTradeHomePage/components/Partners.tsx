const Partners = () => {
  const partners = [
    { name: 'KB국민은행', category: '금융 파트너' },
    { name: '신한금융투자', category: '금융 파트너' },
    { name: 'Microsoft Azure', category: '기술 파트너' },
    { name: 'AWS', category: '기술 파트너' },
    { name: 'OpenAI', category: 'AI 파트너' },
    { name: '서울대학교 AI연구원', category: '연구 파트너' }
  ];

  const investors = [
    { name: 'Future Play', type: 'VC' },
    { name: 'KB Investment', type: 'VC' },
    { name: 'Kakao Ventures', type: 'VC' },
    { name: 'IMM Investment', type: 'VC' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">파트너 & 투자사</h2>
          <p className="text-xl text-gray-600">
            신뢰할 수 있는 파트너들과 함께 성장합니다
          </p>
        </div>

        {/* Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">파트너사</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="h-16 flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg"></div>
                </div>
                <h4 className="font-semibold text-gray-900">{partner.name}</h4>
                <p className="text-sm text-gray-500 mt-1">{partner.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Investors */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">투자사</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {investors.map((investor, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="h-16 flex items-center justify-center mb-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full"></div>
                </div>
                <h4 className="font-semibold text-gray-900">{investor.name}</h4>
                <p className="text-sm text-gray-500 mt-1">{investor.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">파트너십 문의</h3>
            <p className="text-gray-600 mb-6">
              OntoTrade와 함께 금융 AI의 미래를 만들어가실<br />
              파트너사를 찾고 있습니다
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
            >
              파트너십 문의하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;