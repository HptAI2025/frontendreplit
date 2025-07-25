import { Link } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';

export default function Enterprise() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              HDT AI cho Doanh nghiệp
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Giải pháp AI toàn diện được thiết kế riêng cho nhu cầu và quy mô của doanh nghiệp lớn
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
              data-testid="enterprise-contact-cta"
            >
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Tùy chỉnh hoàn toàn theo nhu cầu
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Mỗi doanh nghiệp đều có những thách thức riêng. HDT AI Enterprise cung cấp giải pháp được thiết kế riêng biệt cho từng tổ chức.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start" data-testid="enterprise-feature-1">
                  <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                  <span>Tích hợp sâu với hệ thống hiện tại của doanh nghiệp</span>
                </li>
                <li className="flex items-start" data-testid="enterprise-feature-2">
                  <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                  <span>Bảo mật cấp doanh nghiệp với kiểm soát truy cập chi tiết</span>
                </li>
                <li className="flex items-start" data-testid="enterprise-feature-3">
                  <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                  <span>Hỗ trợ 24/7 với đội ngũ chuyên gia dedicated</span>
                </li>
                <li className="flex items-start" data-testid="enterprise-feature-4">
                  <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                  <span>SLA cam kết với thời gian uptime 99.9%</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Enterprise team collaboration"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Các trường hợp sử dụng phổ biến
            </h2>
            <p className="text-xl text-slate-600">
              HDT AI Enterprise đã được triển khai thành công tại nhiều ngành nghề khác nhau
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg" data-testid="use-case-1">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-building text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Ngân hàng & Tài chính</h3>
              <p className="text-slate-600">
                Tự động hóa quy trình phê duyệt, phân tích rủi ro và hỗ trợ khách hàng 24/7 với độ chính xác cao.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg" data-testid="use-case-2">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-shopping-cart text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Thương mại điện tử</h3>
              <p className="text-slate-600">
                Cá nhân hóa trải nghiệm mua sắm, dự đoán nhu cầu và tối ưu hóa chuỗi cung ứng.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg" data-testid="use-case-3">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-industry text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Sản xuất</h3>
              <p className="text-slate-600">
                Bảo trì dự đoán, kiểm soát chất lượng tự động và tối ưu hóa hiệu suất sản xuất.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Quy trình triển khai Enterprise
            </h2>
            <p className="text-xl text-slate-600">
              Phương pháp tiếp cận có hệ thống đảm bảo triển khai thành công
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-testid="implementation-step-1">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Đánh giá & Lập kế hoạch</h3>
              <p className="text-slate-600">
                Phân tích chi tiết hạ tầng hiện tại và xác định các cơ hội cải thiện
              </p>
            </div>

            <div className="text-center" data-testid="implementation-step-2">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Phát triển & Thử nghiệm</h3>
              <p className="text-slate-600">
                Xây dựng POC và thử nghiệm trong môi trường controlled
              </p>
            </div>

            <div className="text-center" data-testid="implementation-step-3">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Triển khai từng giai đoạn</h3>
              <p className="text-slate-600">
                Roll-out theo từng phase để đảm bảo không gián đoạn hoạt động
              </p>
            </div>

            <div className="text-center" data-testid="implementation-step-4">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Tối ưu & Mở rộng</h3>
              <p className="text-slate-600">
                Theo dõi hiệu suất và mở rộng quy mô theo nhu cầu thực tế
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Sẵn sàng chuyển đổi doanh nghiệp với AI?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Liên hệ với đội ngũ chuyên gia để được tư vấn giải pháp phù hợp
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all hover-lift"
            data-testid="enterprise-final-cta"
          >
            Đặt lịch tư vấn miễn phí
          </Link>
        </div>
      </section>
    </div>
  );
}
