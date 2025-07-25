import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    serviceType: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: 'contact@hdtai.com',
      description: 'Gửi email cho chúng tôi bất kỳ lúc nào'
    },
    {
      icon: 'fas fa-phone',
      title: 'Điện thoại',
      content: '+84 123 456 789',
      description: 'Liên hệ trực tiếp trong giờ làm việc'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Địa chỉ',
      content: 'Hà Nội, Việt Nam',
      description: 'Đến thăm văn phòng của chúng tôi'
    },
    {
      icon: 'fas fa-clock',
      title: 'Giờ làm việc',
      content: '8:00 - 18:00',
      description: 'Thứ 2 - Thứ 6 (GMT+7)'
    }
  ];

  const serviceTypes = [
    { value: 'general', label: 'Tư vấn chung' },
    { value: 'chatbot', label: 'Chatbot AI' },
    { value: 'automation', label: 'Tự động hóa quy trình' },
    { value: 'training', label: 'Đào tạo AI' },
    { value: 'enterprise', label: 'Giải pháp Enterprise' },
    { value: 'partnership', label: 'Hợp tác kinh doanh' },
    { value: 'support', label: 'Hỗ trợ kỹ thuật' }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Liên hệ với HDT AI
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Chúng tôi sẵn sàng hỗ trợ và tư vấn giải pháp AI phù hợp nhất cho doanh nghiệp của bạn
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Gửi tin nhắn cho chúng tôi
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Họ và tên *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="contact-name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="contact-email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                        Công ty
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="contact-company"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 mb-2">
                        Loại dịch vụ quan tâm
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="contact-service-type"
                      >
                        {serviceTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Chủ đề *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      data-testid="contact-subject"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Tin nhắn *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Mô tả chi tiết nhu cầu của bạn..."
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      data-testid="contact-message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
                    data-testid="contact-submit"
                  >
                    Gửi tin nhắn
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Thông tin liên hệ
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start" data-testid={`contact-info-${index + 1}`}>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <i className={`${info.icon} text-blue-600`}></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">{info.title}</h4>
                        <p className="text-slate-900 mb-1">{info.content}</p>
                        <p className="text-slate-600 text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Theo dõi chúng tôi</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors" data-testid="social-facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors" data-testid="social-linkedin">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors" data-testid="social-twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors" data-testid="social-youtube">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <i className="fas fa-clock text-green-600 mr-2"></i>
                  <h4 className="font-semibold text-green-900">Thời gian phản hồi</h4>
                </div>
                <p className="text-green-800 text-sm">
                  Chúng tôi cam kết phản hồi trong vòng 24 giờ làm việc. Các trường hợp khẩn cấp sẽ được ưu tiên xử lý.
                </p>
              </div>
            </div>
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
              Những thông tin bạn có thể cần biết trước khi liên hệ
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm" data-testid="faq-1">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Tôi có cần kiến thức kỹ thuật để sử dụng dịch vụ của HDT AI không?
              </h3>
              <p className="text-slate-600">
                Không cần thiết. Chúng tôi cung cấp giải pháp AI thân thiện với người dùng và hỗ trợ đầy đủ trong quá trình triển khai và sử dụng.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm" data-testid="faq-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Thời gian triển khai một dự án AI thường là bao lâu?
              </h3>
              <p className="text-slate-600">
                Tùy thuộc vào quy mô và độ phức tạp của dự án. Các giải pháp cơ bản như chatbot có thể triển khai trong 2-4 tuần, dự án phức tạp hơn có thể mất 2-6 tháng.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm" data-testid="faq-3">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                HDT AI có hỗ trợ sau khi triển khai không?
              </h3>
              <p className="text-slate-600">
                Có, chúng tôi cung cấp hỗ trợ kỹ thuật, bảo trì hệ thống và đào tạo người dùng. Các gói dịch vụ khác nhau có mức độ hỗ trợ tương ứng.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm" data-testid="faq-4">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Dữ liệu của công ty tôi có được bảo mật không?
              </h3>
              <p className="text-slate-600">
                Bảo mật dữ liệu là ưu tiên hàng đầu của HDT AI. Chúng tôi tuân thủ các tiêu chuẩn bảo mật quốc tế và ký cam kết bảo mật thông tin với tất cả khách hàng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Bắt đầu hành trình AI ngay hôm nay
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Đội ngũ chuyên gia HDT AI sẵn sàng tư vấn và hỗ trợ bạn
          </p>
          <a
            href="tel:+84123456789"
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all hover-lift inline-block"
            data-testid="contact-phone-cta"
          >
            <i className="fas fa-phone mr-2"></i>
            Gọi ngay: +84 123 456 789
          </a>
        </div>
      </section>
    </div>
  );
}
