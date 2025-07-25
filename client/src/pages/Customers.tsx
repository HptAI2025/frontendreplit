import { Link } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';

export default function Customers() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Nguyễn Văn A',
      title: 'CEO, TechCorp Vietnam',
      company: 'TechCorp Vietnam',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
      quote: 'HDT AI đã giúp chúng tôi tăng hiệu suất bán hàng 300% chỉ sau 3 tháng triển khai chatbot. Khách hàng rất hài lòng với dịch vụ hỗ trợ 24/7.',
      rating: 5,
      results: ['300% tăng doanh thu', '70% giảm thời gian phản hồi', '95% hài lòng khách hàng']
    },
    {
      name: 'Trần Thị B',
      title: 'COO, Digital Solutions',
      company: 'Digital Solutions',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
      quote: 'Giải pháp tự động hóa của HDT AI đã tiết kiệm cho chúng tôi 40 giờ làm việc mỗi tuần. ROI rất ấn tượng!',
      rating: 5,
      results: ['40 giờ/tuần tiết kiệm', '250% ROI trong 6 tháng', '85% giảm lỗi thủ công']
    },
    {
      name: 'Lê Văn C',
      title: 'IT Manager, StartupX',
      company: 'StartupX',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
      quote: 'Đào tạo AI của HDT rất thực tiễn. Nhân viên chúng tôi nhanh chóng thành thạo và áp dụng vào công việc hằng ngày.',
      rating: 5,
      results: ['100% nhân viên được đào tạo', '60% tăng năng suất', '90% áp dụng thành công']
    }
  ];

  const caseStudies = [
    {
      company: 'VietBank',
      industry: 'Ngân hàng',
      challenge: 'Xử lý khối lượng lớn yêu cầu khách hàng',
      solution: 'Chatbot AI tư vấn tài chính 24/7',
      results: ['80% giảm thời gian chờ', '95% độ chính xác', '200% tăng satisfaction'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400'
    },
    {
      company: 'EcommViet',
      industry: 'Thương mại điện tử',
      challenge: 'Cá nhân hóa trải nghiệm mua sắm',
      solution: 'AI recommendation engine và chatbot bán hàng',
      results: ['150% tăng conversion', '30% tăng AOV', '70% tăng retention'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400'
    },
    {
      company: 'ManufacturePro',
      industry: 'Sản xuất',
      challenge: 'Tối ưu hóa quy trình sản xuất',
      solution: 'AI predictive maintenance và quality control',
      results: ['40% giảm downtime', '25% tiết kiệm chi phí', '99.5% quality rate'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Khách hàng nói gì về HDT AI
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Hơn 500 doanh nghiệp đã tin tưởng và đạt được kết quả ấn tượng với giải pháp AI của chúng tôi
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="customer-stat-1">
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <div className="text-slate-600">Doanh nghiệp tin tưởng</div>
            </div>
            <div className="text-center" data-testid="customer-stat-2">
              <div className="text-4xl font-bold text-green-600">98%</div>
              <div className="text-slate-600">Khách hàng hài lòng</div>
            </div>
            <div className="text-center" data-testid="customer-stat-3">
              <div className="text-4xl font-bold text-purple-600">300%</div>
              <div className="text-slate-600">ROI trung bình</div>
            </div>
            <div className="text-center" data-testid="customer-stat-4">
              <div className="text-4xl font-bold text-cyan-600">24/7</div>
              <div className="text-slate-600">Hỗ trợ liên tục</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Câu chuyện thành công từ khách hàng
            </h2>
            <p className="text-xl text-slate-600">
              Những kết quả thực tế mà HDT AI mang lại cho doanh nghiệp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover-lift" data-testid={`testimonial-${index + 1}`}>
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
                <p className="text-slate-700 mb-6 italic">"{testimonial.quote}"</p>
                
                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Kết quả đạt được:</h4>
                  <ul className="space-y-2">
                    {testimonial.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-slate-600 text-sm">{testimonial.title}</div>
                    <div className="text-slate-500 text-xs">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Case Studies chi tiết
            </h2>
            <p className="text-xl text-slate-600">
              Tìm hiểu cách HDT AI giải quyết thách thức thực tế của doanh nghiệp
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`} data-testid={`case-study-${index + 1}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img 
                    src={study.image}
                    alt={`${study.company} case study`}
                    className="rounded-2xl shadow-lg w-full h-auto"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-4">
                      <h3 className="text-2xl font-bold text-slate-900">{study.company}</h3>
                      <span className="ml-4 bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Thách thức:</h4>
                        <p className="text-slate-600">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Giải pháp:</h4>
                        <p className="text-slate-600">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Kết quả:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="bg-slate-50 rounded-lg p-4 text-center">
                              <div className="text-lg font-bold text-blue-600">{result.split(' ')[0]}</div>
                              <div className="text-sm text-slate-600">{result.split(' ').slice(1).join(' ')}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Coverage */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Phục vụ đa ngành nghề
            </h2>
            <p className="text-xl text-slate-600">
              HDT AI đã được triển khai thành công tại nhiều lĩnh vực khác nhau
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: 'fas fa-university', name: 'Ngân hàng & Tài chính', count: '120+' },
              { icon: 'fas fa-shopping-cart', name: 'Thương mại điện tử', count: '89+' },
              { icon: 'fas fa-industry', name: 'Sản xuất', count: '75+' },
              { icon: 'fas fa-graduation-cap', name: 'Giáo dục', count: '65+' },
              { icon: 'fas fa-heartbeat', name: 'Y tế', count: '45+' },
              { icon: 'fas fa-car', name: 'Logistics', count: '38+' },
              { icon: 'fas fa-home', name: 'Bất động sản', count: '32+' },
              { icon: 'fas fa-utensils', name: 'F&B', count: '28+' }
            ].map((industry, index) => (
              <div key={index} className="text-center group" data-testid={`industry-${index + 1}`}>
                <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <i className={`${industry.icon} text-2xl text-blue-600`}></i>
                </div>
                <div className="text-lg font-bold text-blue-600">{industry.count}</div>
                <div className="text-sm text-slate-600">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Gia nhập cộng đồng khách hàng HDT AI
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Cùng hàng trăm doanh nghiệp khác đã chọn HDT AI để chuyển đổi số
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-started"
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all hover-lift"
              data-testid="customers-cta-primary"
            >
              Bắt đầu miễn phí
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all"
              data-testid="customers-cta-secondary"
            >
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
