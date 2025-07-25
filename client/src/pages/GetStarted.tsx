import { useState } from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';

export default function GetStarted() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    fullName: '',
    email: '',
    company: '',
    jobTitle: '',
    
    // Step 2: Business Needs
    companySize: '',
    industry: '',
    currentChallenges: [],
    
    // Step 3: AI Interests
    interestedServices: [],
    budget: '',
    timeline: '',
    
    // Step 4: Account Setup
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    subscribeTo: false
  });

  const companySize = [
    { value: '1-10', label: '1-10 nhân viên' },
    { value: '11-50', label: '11-50 nhân viên' },
    { value: '51-200', label: '51-200 nhân viên' },
    { value: '201-1000', label: '201-1000 nhân viên' },
    { value: '1000+', label: 'Hơn 1000 nhân viên' }
  ];

  const industries = [
    { value: 'technology', label: 'Công nghệ' },
    { value: 'finance', label: 'Tài chính - Ngân hàng' },
    { value: 'retail', label: 'Bán lẻ - Thương mại' },
    { value: 'manufacturing', label: 'Sản xuất' },
    { value: 'healthcare', label: 'Y tế' },
    { value: 'education', label: 'Giáo dục' },
    { value: 'real-estate', label: 'Bất động sản' },
    { value: 'other', label: 'Khác' }
  ];

  const challenges = [
    { value: 'customer-support', label: 'Hỗ trợ khách hàng chưa hiệu quả' },
    { value: 'manual-processes', label: 'Quá nhiều quy trình thủ công' },
    { value: 'data-analysis', label: 'Khó khăn trong phân tích dữ liệu' },
    { value: 'content-creation', label: 'Tạo nội dung tốn thời gian' },
    { value: 'lead-generation', label: 'Thiếu khách hàng tiềm năng' },
    { value: 'cost-optimization', label: 'Cần tối ưu chi phí vận hành' }
  ];

  const services = [
    { value: 'chatbot', label: 'Chatbot AI thông minh' },
    { value: 'automation', label: 'Tự động hóa quy trình' },
    { value: 'content-ai', label: 'Tạo nội dung bằng AI' },
    { value: 'data-analytics', label: 'Phân tích dữ liệu AI' },
    { value: 'training', label: 'Đào tạo AI ứng dụng' },
    { value: 'custom-ai', label: 'Giải pháp AI tùy chỉnh' }
  ];

  const budgetRanges = [
    { value: 'under-5m', label: 'Dưới 5 triệu VNĐ/tháng' },
    { value: '5m-15m', label: '5-15 triệu VNĐ/tháng' },
    { value: '15m-30m', label: '15-30 triệu VNĐ/tháng' },
    { value: '30m-100m', label: '30-100 triệu VNĐ/tháng' },
    { value: 'over-100m', label: 'Hơn 100 triệu VNĐ/tháng' },
    { value: 'discuss', label: 'Cần thảo luận thêm' }
  ];

  const timelines = [
    { value: 'immediate', label: 'Ngay lập tức' },
    { value: '1-month', label: 'Trong 1 tháng' },
    { value: '3-months', label: 'Trong 3 tháng' },
    { value: '6-months', label: 'Trong 6 tháng' },
    { value: 'planning', label: 'Đang lên kế hoạch' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleMultiSelect = (category: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [category]: prev[category as keyof typeof prev].includes(value)
        ? (prev[category as keyof typeof prev] as string[]).filter((item: string) => item !== value)
        : [...(prev[category as keyof typeof prev] as string[]), value]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic
    console.log('Registration submitted:', formData);
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    { number: 1, title: 'Thông tin cơ bản', icon: 'fas fa-user' },
    { number: 2, title: 'Nhu cầu kinh doanh', icon: 'fas fa-building' },
    { number: 3, title: 'Quan tâm về AI', icon: 'fas fa-brain' },
    { number: 4, title: 'Tạo tài khoản', icon: 'fas fa-check' }
  ];

  return (
    <div className="min-h-screen pt-16 bg-slate-50">
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <i className="fas fa-brain text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold text-slate-900">HDT AI</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Bắt đầu hành trình AI của bạn
            </h1>
            <p className="text-xl text-slate-600">
              Hãy cho chúng tôi biết về doanh nghiệp để tư vấn giải pháp phù hợp nhất
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-4 mb-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                    currentStep >= step.number 
                      ? 'bg-blue-600 border-blue-600 text-white' 
                      : 'bg-white border-slate-300 text-slate-400'
                  }`}>
                    <i className={step.icon}></i>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-1 mx-4 ${
                      currentStep > step.number ? 'bg-blue-600' : 'bg-slate-300'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                {steps[currentStep - 1].title}
              </h2>
              <p className="text-slate-600">Bước {currentStep} / {steps.length}</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <div className="space-y-6" data-testid="step-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
                        Họ và tên *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="fullName"
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
                        data-testid="email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                        Tên công ty *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="company"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="jobTitle" className="block text-sm font-medium text-slate-700 mb-2">
                        Chức vụ
                      </label>
                      <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="jobTitle"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Business Needs */}
              {currentStep === 2 && (
                <div className="space-y-6" data-testid="step-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companySize" className="block text-sm font-medium text-slate-700 mb-2">
                        Quy mô công ty *
                      </label>
                      <select
                        id="companySize"
                        name="companySize"
                        required
                        value={formData.companySize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="companySize"
                      >
                        <option value="">Chọn quy mô</option>
                        {companySize.map((size) => (
                          <option key={size.value} value={size.value}>
                            {size.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-slate-700 mb-2">
                        Ngành nghề *
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        required
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="industry"
                      >
                        <option value="">Chọn ngành nghề</option>
                        {industries.map((industry) => (
                          <option key={industry.value} value={industry.value}>
                            {industry.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-4">
                      Thách thức hiện tại của doanh nghiệp (chọn nhiều) *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {challenges.map((challenge) => (
                        <div key={challenge.value} className="flex items-center">
                          <input
                            type="checkbox"
                            id={challenge.value}
                            checked={formData.currentChallenges.includes(challenge.value)}
                            onChange={() => handleMultiSelect('currentChallenges', challenge.value)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                            data-testid={`challenge-${challenge.value}`}
                          />
                          <label htmlFor={challenge.value} className="ml-2 text-slate-700">
                            {challenge.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: AI Interests */}
              {currentStep === 3 && (
                <div className="space-y-6" data-testid="step-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-4">
                      Dịch vụ AI quan tâm (chọn nhiều) *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <div key={service.value} className="flex items-center">
                          <input
                            type="checkbox"
                            id={service.value}
                            checked={formData.interestedServices.includes(service.value)}
                            onChange={() => handleMultiSelect('interestedServices', service.value)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                            data-testid={`service-${service.value}`}
                          />
                          <label htmlFor={service.value} className="ml-2 text-slate-700">
                            {service.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
                        Ngân sách dự kiến *
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        required
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="budget"
                      >
                        <option value="">Chọn mức ngân sách</option>
                        {budgetRanges.map((budget) => (
                          <option key={budget.value} value={budget.value}>
                            {budget.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">
                        Thời gian mong muốn triển khai *
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        required
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="timeline"
                      >
                        <option value="">Chọn thời gian</option>
                        {timelines.map((timeline) => (
                          <option key={timeline.value} value={timeline.value}>
                            {timeline.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Account Setup */}
              {currentStep === 4 && (
                <div className="space-y-6" data-testid="step-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                        Mật khẩu *
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="password"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-2">
                        Xác nhận mật khẩu *
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        required
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="confirmPassword"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        required
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded mt-1"
                        data-testid="agreeToTerms"
                      />
                      <label htmlFor="agreeToTerms" className="ml-2 text-slate-700">
                        Tôi đồng ý với{' '}
                        <Link href="/terms" className="text-blue-600 hover:text-blue-700">
                          Điều khoản sử dụng
                        </Link>{' '}
                        và{' '}
                        <Link href="/privacy" className="text-blue-600 hover:text-blue-700">
                          Chính sách bảo mật
                        </Link>{' '}
                        của HDT AI *
                      </label>
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="subscribeTo"
                        name="subscribeTo"
                        checked={formData.subscribeTo}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded mt-1"
                        data-testid="subscribeTo"
                      />
                      <label htmlFor="subscribeTo" className="ml-2 text-slate-700">
                        Tôi muốn nhận tin tức và cập nhật sản phẩm mới từ HDT AI
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-slate-200">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    currentStep === 1
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                  data-testid="prev-step"
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  Quay lại
                </button>

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    data-testid="next-step"
                  >
                    Tiếp tục
                    <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    data-testid="submit-registration"
                  >
                    <i className="fas fa-check mr-2"></i>
                    Tạo tài khoản
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Already have account */}
          <div className="text-center mt-8">
            <p className="text-slate-600">
              Đã có tài khoản?{' '}
              <Link href="/login" className="text-blue-600 font-semibold hover:text-blue-700" data-testid="login-link">
                Đăng nhập ngay
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
