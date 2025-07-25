import { Link } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Đổi mới',
      description: 'Luôn tiên phong trong việc ứng dụng công nghệ AI mới nhất để giải quyết các thách thức thực tế.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Hiệu quả',
      description: 'Tối ưu hóa quy trình và tăng năng suất là ưu tiên hàng đầu trong mọi giải pháp chúng tôi cung cấp.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Hợp tác',
      description: 'Xây dựng mối quan hệ đối tác lâu dài dựa trên sự tin tưởng và cùng phát triển.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: 'fas fa-users',
      title: 'Con người là trung tâm',
      description: 'Mọi sản phẩm và dịch vụ đều hướng tới việc cải thiện trải nghiệm và chất lượng cuộc sống.',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const team = [
    {
      name: 'Nguyễn Văn A',
      title: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
      description: 'Chuyên gia AI với hơn 15 năm kinh nghiệm trong lĩnh vực công nghệ và khởi nghiệp.',
      linkedin: '#'
    },
    {
      name: 'Trần Thị B',
      title: 'CTO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
      description: 'Tiến sĩ Machine Learning, dẫn dắt đội ngũ kỹ thuật phát triển các giải pháp AI tiên tiến.',
      linkedin: '#'
    },
    {
      name: 'Lê Văn C',
      title: 'Head of Business Development',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
      description: 'Chuyên gia chiến lược kinh doanh, giúp doanh nghiệp tận dụng tối đa sức mạnh của AI.',
      linkedin: '#'
    }
  ];

  const timeline = [
    {
      year: '2022',
      title: 'Thành lập HDT AI',
      description: 'Ra đời với sứ mệnh democratize AI cho doanh nghiệp Việt Nam'
    },
    {
      year: '2023',
      title: 'Phát triển sản phẩm đầu tiên',
      description: 'Ra mắt nền tảng chatbot AI đầu tiên dành cho SME'
    },
    {
      year: '2024',
      title: 'Mở rộng quy mô',
      description: 'Phục vụ hơn 500 doanh nghiệp và ra mắt gói Enterprise'
    },
    {
      year: '2025',
      title: 'Tầm nhìn tương lai',
      description: 'Mở rộng ra khu vực và phát triển AI platform tổng hợp'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Về HDT AI
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {t('company.mission')}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Tầm nhìn</h3>
                  <p className="text-slate-600">{t('company.vision')}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Sứ mệnh</h3>
                  <p className="text-slate-600">{t('company.mission')}</p>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="HDT AI office with modern technology"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Giá trị cốt lõi
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Những nguyên tắc định hướng mọi hoạt động và quyết định của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group" data-testid={`value-${index + 1}`}>
                <div className={`w-20 h-20 ${value.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <i className={`${value.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Hành trình phát triển
            </h2>
            <p className="text-xl text-slate-600">
              Từ những ngày đầu khởi nghiệp đến việc trở thành đối tác AI tin cậy
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200"></div>
            
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`} data-testid={`timeline-${index + 1}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{event.year}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{event.title}</h3>
                      <p className="text-slate-600">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Đội ngũ lãnh đạo
            </h2>
            <p className="text-xl text-slate-600">
              Những người định hướng tương lai của HDT AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group" data-testid={`team-member-${index + 1}`}>
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                    <a
                      href={member.linkedin}
                      className="text-white hover:text-blue-300 transition-colors"
                      data-testid={`team-member-${index + 1}-linkedin`}
                    >
                      <i className="fab fa-linkedin text-2xl"></i>
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-semibold mb-4">{member.title}</div>
                <p className="text-slate-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Lĩnh vực hoạt động chính
            </h2>
            <p className="text-xl text-slate-600">
              Các mảng kinh doanh cốt lõi của HDT AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg" data-testid="business-area-1">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-cogs text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Tư vấn & triển khai giải pháp AI</h3>
              <p className="text-slate-600 mb-4">
                Chatbot bán hàng, trợ lý ảo, tự động hóa quy trình, phân tích dữ liệu.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Tư vấn chiến lược AI
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Triển khai chatbot thông minh
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Tự động hóa quy trình kinh doanh
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg" data-testid="business-area-2">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-laptop-code text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Phát triển sản phẩm AI</h3>
              <p className="text-slate-600 mb-4">
                Phần mềm thông minh, công cụ tạo nội dung, xử lý hình ảnh – giọng nói.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Ứng dụng AI custom
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Công cụ tạo nội dung AI
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Xử lý đa phương tiện
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg" data-testid="business-area-3">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-graduation-cap text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Đào tạo AI ứng dụng</h3>
              <p className="text-slate-600 mb-4">
                Giúp cá nhân và doanh nghiệp làm chủ công cụ AI nhanh chóng, hiệu quả.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Khóa học AI thực tiễn
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Đào tạo doanh nghiệp
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Workshop & Seminar
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg" data-testid="business-area-4">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-code-branch text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Nghiên cứu & phát triển mã nguồn mở</h3>
              <p className="text-slate-600 mb-4">
                Góp phần xây dựng tương lai công nghệ bền vững.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Open source AI tools
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Community contributions
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Research publications
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Cùng HDT AI xây dựng tương lai AI
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Tham gia hành trình chuyển đổi số với đội ngũ chuyên gia AI hàng đầu
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/careers"
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all hover-lift"
              data-testid="about-careers-cta"
            >
              Tham gia đội ngũ
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all"
              data-testid="about-contact-cta"
            >
              Liên hệ hợp tác
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
