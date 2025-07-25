import { Link } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-32 w-20 h-20 bg-white/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-white/8 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span>{t('hero.title1')}</span><br />
              <span className="text-3xl md:text-5xl font-medium opacity-90">{t('hero.title2')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/get-started"
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all hover-lift"
                data-testid="hero-cta-primary"
              >
                {t('hero.ctaPrimary')}
              </Link>
              <Link
                href="/about-us"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all"
                data-testid="hero-cta-secondary"
              >
                {t('hero.ctaSecondary')}
              </Link>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white" data-testid="stat-companies">500+</div>
                <div className="text-white/80">{t('hero.stat1')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white" data-testid="stat-hours">50k+</div>
                <div className="text-white/80">{t('hero.stat2')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white" data-testid="stat-uptime">99.9%</div>
                <div className="text-white/80">{t('hero.stat3')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-white text-2xl"></i>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {t('features.title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('features.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1: Chatbot AI */}
            <div className="bg-slate-50 rounded-2xl p-8 hover-lift" data-testid="feature-chatbot">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-robot text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('features.chatbot.title')}</h3>
              <p className="text-slate-600 leading-relaxed">{t('features.chatbot.description')}</p>
            </div>

            {/* Feature 2: Process Automation */}
            <div className="bg-slate-50 rounded-2xl p-8 hover-lift" data-testid="feature-automation">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-cogs text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('features.automation.title')}</h3>
              <p className="text-slate-600 leading-relaxed">{t('features.automation.description')}</p>
            </div>

            {/* Feature 3: Content Creation */}
            <div className="bg-slate-50 rounded-2xl p-8 hover-lift" data-testid="feature-content">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-magic text-2xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('features.content.title')}</h3>
              <p className="text-slate-600 leading-relaxed">{t('features.content.description')}</p>
            </div>

            {/* Feature 4: Data Analysis */}
            <div className="bg-slate-50 rounded-2xl p-8 hover-lift" data-testid="feature-analytics">
              <div className="w-16 h-16 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-2xl text-cyan-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('features.analytics.title')}</h3>
              <p className="text-slate-600 leading-relaxed">{t('features.analytics.description')}</p>
            </div>

            {/* Feature 5: Training & Consultation */}
            <div className="bg-slate-50 rounded-2xl p-8 hover-lift" data-testid="feature-training">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-graduation-cap text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('features.training.title')}</h3>
              <p className="text-slate-600 leading-relaxed">{t('features.training.description')}</p>
            </div>

            {/* Feature 6: Open Source */}
            <div className="bg-slate-50 rounded-2xl p-8 hover-lift" data-testid="feature-opensource">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-code-branch text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('features.opensource.title')}</h3>
              <p className="text-slate-600 leading-relaxed">{t('features.opensource.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quy trình triển khai HDT AI
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Từ tư vấn đến triển khai và đào tạo, chúng tôi đồng hành cùng bạn trong từng bước
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center" data-testid="process-step-1">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Tư vấn & Phân tích</h3>
              <p className="text-slate-300">
                Đánh giá nhu cầu và xây dựng lộ trình AI phù hợp với doanh nghiệp
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center" data-testid="process-step-2">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Thiết kế Giải pháp</h3>
              <p className="text-slate-300">
                Phát triển và tùy chỉnh các công cụ AI theo yêu cầu cụ thể
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center" data-testid="process-step-3">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Triển khai & Tích hợp</h3>
              <p className="text-slate-300">
                Cài đặt và tích hợp hệ thống AI vào quy trình làm việc hiện tại
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center" data-testid="process-step-4">
              <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Đào tạo & Hỗ trợ</h3>
              <p className="text-slate-300">
                Đào tạo đội ngũ sử dụng và cung cấp hỗ trợ dài hạn
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sẵn sàng bắt đầu hành trình AI?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Hãy để HDT AI đồng hành cùng bạn xây dựng tương lai thông minh
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-started"
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all hover-lift"
              data-testid="cta-primary"
            >
              Bắt đầu miễn phí
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all"
              data-testid="cta-secondary"
            >
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
