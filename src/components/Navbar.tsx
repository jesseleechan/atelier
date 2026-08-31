import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS } from '../data/content';

interface NavbarProps {
  onOpenConsultation: () => void;
  currentPath: string;
  onNavigate: (href: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  currentPath,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHome = currentPath === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    onNavigate(href);
  };

  return (
    <>
      <header
        className={`atelier-nav ${isScrolled ? 'atelier-nav--scrolled' : ''} ${!isHome ? 'atelier-nav--interior' : ''}`}
      >
        <div className="atelier-nav__inner">
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              handleNavClick('/');
            }}
            className="atelier-nav__logo"
            aria-label="Atelier 87 home"
          >
            ATELIER 87°
          </a>

          <nav className="atelier-nav__links" aria-label="Primary navigation">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = link.href === '/'
                ? currentPath === '/'
                : currentPath.startsWith(link.href);

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`atelier-nav__link ${isActive ? 'atelier-nav__link--active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            className="atelier-nav__menu-button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="atelier-mobile-navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="atelier-mobile-menu">
          <nav
            id="atelier-mobile-navigation"
            className="atelier-mobile-menu__nav"
            aria-label="Mobile navigation"
          >
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(link.href);
                }}
                className="atelier-mobile-menu__link"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="atelier-outline-button atelier-mobile-menu__button"
            >
              Schedule consultation
            </button>
          </nav>
        </div>
      )}
    </>
  );
};
