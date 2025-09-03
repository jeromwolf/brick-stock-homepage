const Mission = () => {
  const values = [
    {
      title: '혁신',
      icon: '💡',
      description: '최신 AI 기술을 활용하여 금융 서비스의 새로운 기준을 만들어갑니다'
    },
    {
      title: '신뢰',
      icon: '🤝',
      description: '투명하고 정확한 정보로 고객과의 신뢰를 최우선으로 합니다'
    },
    {
      title: '전문성',
      icon: '🎯',
      description: '금융과 AI 분야의 최고 전문가들이 함께 만드는 솔루션'
    },
    {
      title: '접근성',
      icon: '🌐',
      description: '모든 투자자가 쉽게 사용할 수 있는 직관적인 플랫폼'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Mission Statement */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">우리의 미션</h2>
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-2xl">
              <p className="text-xl text-gray-800 leading-relaxed">
                &ldquo;AI 기술의 민주화를 통해 모든 투자자에게 <br />
                <span className="font-semibold gradient-text">전문가 수준의 금융 인사이트</span>를 제공하고,<br />
                더 공정하고 효율적인 금융 시장을 만들어갑니다.&rdquo;
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12">핵심 가치</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-4xl">{value.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold mb-6">우리의 비전</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              OntoTrade는 AI가 인간의 투자 결정을 대체하는 것이 아닌, 
              더 나은 의사결정을 위한 강력한 도구가 되는 미래를 꿈꿉니다. 
              우리는 기술과 인간의 전문성이 조화롭게 결합된 
              새로운 금융 생태계를 만들어가고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;