import { useState } from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';

export default function Pricing() {
  const { t } = useLanguage();
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Gói Cơ bản',
      description: 'Phù hợp cho startup và SME',
      monthlyPrice: '5.000.000',
      annualPrice: '50.000.000',
      features: [
        'Chatbot AI cơ bản',
        'Tự động hóa 5 quy trình',
        'Hỗ trợ email',
        'Báo cáo hằng tháng',
        '1GB storage',
        'Tích hợp cơ bản'
      ],
      popular: false,
      testId: 'plan-basic'
    },
    {
      name: 'Gói Chuyên nghiệp',
      description: 'Phù hợp cho doanh nghiệp trung bình',
      monthlyPrice: '15.000.000',
      annualPrice: '150.000.000',
      features: [
        'Chatbot AI nâng cao',
        'Tự động hóa không giới hạn',
        'Tạo nội dung AI',
        'Phân tích dữ liệu',
        'Hỗ trợ 24/7',
        '10GB storage',
        'API access',
        'Custom integrations'
      ],
      popular: true,
      testId: 'plan-pro'
    },
    {
      name: 'Gói Doanh nghiệp',
      description: 'Giải pháp tùy chỉnh toàn diện',
      monthlyPrice: 'Liên hệ',
      annualPrice: 'Liên hệ',
      features: [
        'AI tùy chỉnh hoàn toàn',
        'Tích hợp hệ thống hiện tại',
        'Đào tạo onsite',
        'Dedicated support team',
        'SLA đảm bảo',
        'Unlimited storage',
        'On-premise deployment',
        'Advanced security'
      ],
      popular: false,
      testId: 'plan-enterprise'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Gói dịch vụ phù hợp mọi quy mô
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Từ startup đến doanh nghiệp lớn, chúng tôi có giải pháp tối ưu cho bạn
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-3 ${!isAnnual ? 'text-slate-900 font-semibold' : 'text-slate-600'}`}>
              Hằng tháng
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-blue-600' : 'bg-slate-300'
              }`}
              data-testid="billing-toggle"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${isAnnual ? 'text-slate-900 font-semibold' : 'text-slate-600'}`}>
              Hằng năm
            </span>
            {isAnnual && (
              <span className="ml-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                Tiết kiệm 17%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 border hover-lift relative ${
                  plan.popular 
                    ? 'border-2 border-blue-600 shadow-xl' 
                    : 'border border-slate-200 shadow-lg'
                }`}
                data-testid={plan.testId}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Phổ biến
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    {plan.monthlyPrice === 'Liên hệ' ? (
                      <span>Liên hệ</span>
                    ) : (
                      <>
                        <span>
                          {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-xl text-slate-600 font-normal">
                          ₫/{isAnnual ? 'năm' : 'tháng'}
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-slate-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.name === 'Gói Doanh nghiệp' ? '/contact' : '/get-started'}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors text-center block ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : plan.name === 'Gói Doanh nghiệp'
                      ? 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                  data-testid={`${plan.testId}-cta`}
                >
                  {plan.name === 'Gói Doanh nghiệp' ? 'Liên hệ tư vấn' : `Chọn ${plan.name.toLowerCase()}`}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Câu hỏi thường gặp
            </h2>
            <p className="text-xl text-slate-600">
              Những thông tin bạn cần biết về dịch vụ HDT AI
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm" data-testid="faq-1">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Tôi có thể thay đổi gói dịch vụ không?
              </h3>
              <p className="text-slate-600">
                Có, bạn có thể nâng cấp hoặc hạ cấp gói dịch vụ bất kỳ lúc nào. Thay đổi sẽ có hiệu lực từ chu kỳ thanh toán tiếp theo.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm" data-testid="faq-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Có thời gian dùng thử miễn phí không?
              </h3>
              <p className="text-slate-600">
                Có, chúng tôi cung cấp 14 ngày dùng thử miễn phí cho tất cả các gói dịch vụ. Bạn có thể hủy bất kỳ lúc nào trong thời gian này.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm" data-testid="faq-3">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Dữ liệu của tôi có được bảo mật không?
              </h3>
              <p className="text-slate-600">
                Chúng tôi áp dụng các tiêu chuẩn bảo mật cao nhất, bao gồm mã hóa end-to-end và tuân thủ các quy định về bảo vệ dữ liệu quốc tế.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm" data-testid="faq-4">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Tôi có được hỗ trợ kỹ thuật không?
              </h3>
              <p className="text-slate-600">
                Tất cả các gói dịch vụ đều bao gồm hỗ trợ kỹ thuật. Gói Chuyên nghiệp có hỗ trợ 24/7, gói Doanh nghiệp có dedicated support team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Bắt đầu hành trình AI của bạn ngay hôm nay
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Dùng thử miễn phí 14 ngày, không cần thẻ tín dụng
          </p>
          <Link
            href="/get-started"
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all hover-lift"
            data-testid="pricing-final-cta"
          >
            Bắt đầu dùng thử miễn phí
          </Link>
        </div>
      </section>
    </div>
  );
}
