import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/hooks/useLanguage';
import hdtLogo from '@assets/Thiết kế chưa có tên_1753485335802.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/enterprise', label: t('nav.enterprise') },
    { href: '/pricing', label: t('nav.pricing') },
    { href: '/customers', label: t('nav.customers') },
    { href: '/about-us', label: t('nav.about') },
    { href: '/blog', label: t('nav.blog') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3" data-testid="logo-link">
            <img 
              src={hdtLogo} 
              alt="HDT AI Logo" 
              className="w-10 h-10 rounded-lg object-contain"
            />
            <span className="text-xl font-bold text-slate-900">HDT AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors font-medium ${
                  location === item.href
                    ? 'text-blue-600'
                    : 'text-slate-700 hover:text-blue-600'
                }`}
                data-testid={`nav-${item.href.slice(1) || 'home'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & Actions */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Link
              href="/login"
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              data-testid="nav-login"
            >
              {t('nav.login')}
            </Link>
            <Link
              href="/get-started"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              data-testid="nav-get-started"
            >
              {t('nav.getStarted')}
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/20"
              data-testid="mobile-menu-button"
            >
              <i className="fas fa-bars text-slate-700"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-slate-700 hover:text-blue-600 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`mobile-nav-${item.href.slice(1) || 'home'}`}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t pt-3 mt-3">
              <Link
                href="/login"
                className="block text-slate-700 hover:text-blue-600 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="mobile-nav-login"
              >
                {t('nav.login')}
              </Link>
              <Link
                href="/get-started"
                className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mt-2 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="mobile-nav-get-started"
              >
                {t('nav.getStarted')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
