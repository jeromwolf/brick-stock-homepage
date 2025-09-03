import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          지금 바로 AI 금융의 미래를 경험하세요
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
          OntoTrade의 강력한 AI 솔루션으로 더 스마트한 투자 결정을 내리세요.
          지금 무료로 시작할 수 있습니다.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/demo"
            className="px-8 py-4 bg-white text-primary-600 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover-scale"
          >
            무료 체험 시작하기
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg border-2 border-white hover-scale"
          >
            영업팀 문의하기
          </Link>
        </div>

        <p className="mt-8 text-sm opacity-75">
          신용카드 없이 바로 시작 • 14일 무료 체험 • 언제든 취소 가능
        </p>
      </div>
    </section>
  );
};

export default CTA;