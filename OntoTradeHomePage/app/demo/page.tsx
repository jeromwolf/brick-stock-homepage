'use client';

import { useState } from 'react';

export default function DemoPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    name: '',
    email: '',
    company: '',
    position: '',
    // Step 2
    solutions: [] as string[],
    useCase: '',
    // Step 3
    teamSize: '',
    timeline: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (solution: string) => {
    const solutions = formData.solutions.includes(solution)
      ? formData.solutions.filter(s => s !== solution)
      : [...formData.solutions, solution];
    
    setFormData({ ...formData, solutions });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo request:', formData);
    alert('데모 신청이 완료되었습니다. 영업팀에서 곧 연락드리겠습니다.');
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="pt-20 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">무료 데모 신청</h1>
            <p className="text-xl text-gray-600">
              OntoTrade의 강력한 AI 금융 솔루션을 직접 체험해보세요
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= num 
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white' 
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    {num}
                  </div>
                  {num < 3 && (
                    <div className={`w-full h-1 mx-2 ${
                      step > num ? 'bg-primary-600' : 'bg-gray-300'
                    }`} style={{ width: '100px' }}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm">
              <span className={step >= 1 ? 'text-primary-600 font-medium' : 'text-gray-500'}>
                기본 정보
              </span>
              <span className={step >= 2 ? 'text-primary-600 font-medium' : 'text-gray-500'}>
                관심 솔루션
              </span>
              <span className={step >= 3 ? 'text-primary-600 font-medium' : 'text-gray-500'}>
                추가 정보
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">기본 정보를 입력해주세요</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      회사명 *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      직책
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
                  >
                    다음 단계
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Solutions */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">관심있는 솔루션을 선택해주세요</h2>
                
                <div className="space-y-4">
                  {[
                    { id: 'fluxnews', name: 'FluxNews', desc: 'AI 실시간 뉴스 영향력 분석' },
                    { id: 'a2a', name: 'A2A Sentiment Analysis', desc: 'AI 멀티 에이전트 투자 분석' },
                    { id: 'platform', name: 'OntoTrade Platform', desc: '통합 금융 분석 플랫폼' }
                  ].map(solution => (
                    <label key={solution.id} className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.solutions.includes(solution.id)}
                        onChange={() => handleCheckboxChange(solution.id)}
                        className="mt-1 w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                      />
                      <div>
                        <h3 className="font-semibold">{solution.name}</h3>
                        <p className="text-sm text-gray-600">{solution.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    주요 사용 목적
                  </label>
                  <textarea
                    name="useCase"
                    rows={4}
                    value={formData.useCase}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="어떤 목적으로 솔루션을 사용하실 예정인지 간단히 설명해주세요"
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium"
                  >
                    이전 단계
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
                  >
                    다음 단계
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Additional Info */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">추가 정보를 입력해주세요</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      팀 규모
                    </label>
                    <select
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">선택하세요</option>
                      <option value="1-10">1-10명</option>
                      <option value="11-50">11-50명</option>
                      <option value="51-200">51-200명</option>
                      <option value="201+">201명 이상</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      도입 시기
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">선택하세요</option>
                      <option value="immediate">즉시</option>
                      <option value="1-3months">1-3개월 내</option>
                      <option value="3-6months">3-6개월 내</option>
                      <option value="6months+">6개월 이상</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    예산 범위
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">선택하세요</option>
                    <option value="under-10m">1,000만원 미만</option>
                    <option value="10m-50m">1,000만원 - 5,000만원</option>
                    <option value="50m-100m">5,000만원 - 1억원</option>
                    <option value="over-100m">1억원 이상</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    추가 요청사항
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="데모에서 특별히 확인하고 싶은 기능이나 요청사항이 있다면 알려주세요"
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium"
                  >
                    이전 단계
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
                  >
                    데모 신청하기
                  </button>
                </div>
              </div>
            )}
          </form>

          {/* Benefits */}
          <div className="mt-12 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">데모를 통해 경험할 수 있는 것들</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-semibold mb-2">실제 데이터 분석</h4>
                <p className="text-sm text-gray-600">
                  실시간 데이터로 AI 분석 성능을 직접 확인
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">💡</span>
                </div>
                <h4 className="font-semibold mb-2">맞춤형 컨설팅</h4>
                <p className="text-sm text-gray-600">
                  귀사에 최적화된 솔루션 활용 방안 제시
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold mb-2">ROI 분석</h4>
                <p className="text-sm text-gray-600">
                  도입 시 예상되는 효과와 수익성 분석
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}