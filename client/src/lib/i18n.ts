export const translations = {
  vi: {
    // Navigation
    'nav.home': 'Trang chủ',
    'nav.enterprise': 'Doanh nghiệp',
    'nav.pricing': 'Bảng giá',
    'nav.customers': 'Khách hàng',
    'nav.about': 'Về chúng tôi',
    'nav.blog': 'Blog',
    'nav.careers': 'Tuyển dụng',
    'nav.contact': 'Liên hệ',
    'nav.docs': 'Tài liệu',
    'nav.login': 'Đăng nhập',
    'nav.getStarted': 'Bắt đầu',

    // Hero Section
    'hero.title1': 'HDT AI',
    'hero.title2': 'Giải pháp Trí tuệ Nhân tạo Tiên phong',
    'hero.description': 'Tăng tốc hiệu suất – tiết kiệm chi phí – đột phá sáng tạo với đội ngũ AI chuyên nghiệp của bạn',
    'hero.ctaPrimary': 'Bắt đầu miễn phí',
    'hero.ctaSecondary': 'Tìm hiểu thêm',
    'hero.stat1': 'Doanh nghiệp tin tưởng',
    'hero.stat2': 'Giờ AI tiết kiệm',
    'hero.stat3': 'Thời gian hoạt động',

    // Features
    'features.title': 'Sức mạnh AI đặc biệt của HDT',
    'features.description': 'Từ tự động hóa quy trình đến phân tích dữ liệu thông minh, HDT AI mang đến giải pháp toàn diện cho mọi doanh nghiệp',
    'features.chatbot.title': 'Chatbot AI thông minh',
    'features.chatbot.description': 'Tư vấn bán hàng và hỗ trợ khách hàng 24/7 với độ chính xác cao, giảm tải công việc cho đội ngũ nhân sự.',
    'features.automation.title': 'Tự động hóa quy trình',
    'features.automation.description': 'Tối ưu hóa luồng công việc với Make, Google Sheets, Gmail và các công cụ tích hợp thông minh.',
    'features.content.title': 'Tạo nội dung AI',
    'features.content.description': 'Sản xuất video, hình ảnh, và nội dung marketing chuyên nghiệp với công nghệ AI tiên tiến.',
    'features.analytics.title': 'Phân tích dữ liệu',
    'features.analytics.description': 'Trích xuất thông tin chiến lược từ big data để đưa ra quyết định kinh doanh thông minh.',
    'features.training.title': 'Đào tạo & Tư vấn',
    'features.training.description': 'Đào tạo đội ngũ ứng dụng AI hiệu quả với các khóa học từ cơ bản đến nâng cao.',
    'features.opensource.title': 'Mã nguồn mở',
    'features.opensource.description': 'Phát triển các công cụ AI mã nguồn mở, góp phần xây dựng cộng đồng công nghệ bền vững.',

    // Company Info
    'company.vision': 'Trở thành đơn vị tiên phong trong việc đưa AI ứng dụng sâu vào công việc và đời sống tại Việt Nam và khu vực.',
    'company.mission': 'Biến trí tuệ nhân tạo thành công cụ thực tiễn, dễ dùng, dễ áp dụng cho mọi người – từ cá nhân nhỏ lẻ đến doanh nghiệp lớn.',
    'company.values': 'Đổi mới – Hiệu quả – Hợp tác – Con người là trung tâm.',

    // Common
    'common.readMore': 'Đọc thêm',
    'common.learnMore': 'Tìm hiểu thêm',
    'common.getStarted': 'Bắt đầu',
    'common.contact': 'Liên hệ',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.enterprise': 'Enterprise',
    'nav.pricing': 'Pricing',
    'nav.customers': 'Customers',
    'nav.about': 'About Us',
    'nav.blog': 'Blog',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact',
    'nav.docs': 'Docs',
    'nav.login': 'Login',
    'nav.getStarted': 'Get Started',

    // Hero Section
    'hero.title1': 'HDT AI',
    'hero.title2': 'Pioneer AI Solutions',
    'hero.description': 'Boost productivity – save costs – breakthrough innovation with your professional AI team',
    'hero.ctaPrimary': 'Start Free',
    'hero.ctaSecondary': 'Learn More',
    'hero.stat1': 'Trusted Businesses',
    'hero.stat2': 'AI Hours Saved',
    'hero.stat3': 'Uptime',

    // Features
    'features.title': 'HDT\'s Exceptional AI Power',
    'features.description': 'From process automation to intelligent data analysis, HDT AI delivers comprehensive solutions for every business',
    'features.chatbot.title': 'Smart AI Chatbot',
    'features.chatbot.description': 'Sales consulting and 24/7 customer support with high accuracy, reducing workload for your team.',
    'features.automation.title': 'Process Automation',
    'features.automation.description': 'Optimize workflows with Make, Google Sheets, Gmail and smart integration tools.',
    'features.content.title': 'AI Content Creation',
    'features.content.description': 'Produce professional videos, images, and marketing content with advanced AI technology.',
    'features.analytics.title': 'Data Analytics',
    'features.analytics.description': 'Extract strategic insights from big data to make intelligent business decisions.',
    'features.training.title': 'Training & Consulting',
    'features.training.description': 'Train teams to use AI effectively with courses from basic to advanced levels.',
    'features.opensource.title': 'Open Source',
    'features.opensource.description': 'Develop open source AI tools, contributing to building a sustainable technology community.',

    // Company Info
    'company.vision': 'To become a pioneer in bringing AI deep into work and life in Vietnam and the region.',
    'company.mission': 'Transform artificial intelligence into practical, easy-to-use, easy-to-apply tools for everyone – from small individuals to large enterprises.',
    'company.values': 'Innovation – Efficiency – Collaboration – People-Centered.',

    // Common
    'common.readMore': 'Read More',
    'common.learnMore': 'Learn More',
    'common.getStarted': 'Get Started',
    'common.contact': 'Contact',
  }
};

export type Language = 'vi' | 'en';
export type TranslationKey = keyof typeof translations.vi;
