import { useCallback, useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ContactPage } from './pages/ContactPage';
import { ConsultationModal } from './components/ConsultationModal';
import { PROJECTS } from './data/content';
import { COLLECTION_PRODUCTS } from './data/products';
import type { FurnitureCategory, InvestmentTier } from './data/content';

const normalizePath = (pathname: string) => {
  if (pathname === '/') return pathname;
  return pathname.replace(/\/+$/, '') || '/';
};

const PAGE_TITLES: Record<string, string> = {
  '/': 'ATELIER 87° | Interior Design & Architecture',
  '/about': 'About | ATELIER 87°',
  '/services': 'Services | ATELIER 87°',
  '/projects': 'Projects | ATELIER 87°',
  '/collection': 'The Collection | ATELIER 87°',
  '/contact': 'Contact | ATELIER 87°',
};

const getPageTitle = (pathname: string) => {
  if (pathname.startsWith('/projects/')) {
    const projectSlug = decodeURIComponent(pathname.slice('/projects/'.length));
    const project = PROJECTS.find((item) => item.slug === projectSlug);
    return project ? `${project.title} | ATELIER 87°` : 'Page not found | ATELIER 87°';
  }

  if (pathname.startsWith('/collection/')) {
    const productSlug = decodeURIComponent(pathname.slice('/collection/'.length));
    const product = COLLECTION_PRODUCTS.find((item) => item.slug === productSlug);
    return product ? `${product.title} | ATELIER 87°` : 'Page not found | ATELIER 87°';
  }

  return PAGE_TITLES[pathname] ?? 'Page not found | ATELIER 87°';
};

export function App() {
  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname));
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<InvestmentTier | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<FurnitureCategory | null>(null);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(normalizePath(window.location.pathname));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    document.title = getPageTitle(currentPath);
  }, [currentPath]);

  const navigate = useCallback((href: string) => {
    const nextPath = normalizePath(href);

    if (nextPath === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    window.history.pushState({}, '', nextPath);
    setCurrentPath(nextPath);
  }, [currentPath]);

  const handleOpenConsultation = (tier?: InvestmentTier) => {
    if (tier) setSelectedTier(tier);
    setConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setConsultationOpen(false);
    setSelectedTier(null);
  };

  const handleSelectCategory = (category: FurnitureCategory) => {
    setSelectedCategory(category);
    navigate('/collection');
  };

  const renderPage = () => {
    if (currentPath.startsWith('/projects/')) {
      const projectSlug = decodeURIComponent(currentPath.slice('/projects/'.length));
      const project = PROJECTS.find((item) => item.slug === projectSlug);

      if (project) {
        return (
          <ProjectDetailPage
            project={project}
            onNavigate={navigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        );
      }
    }

    if (currentPath.startsWith('/collection/')) {
      const productSlug = decodeURIComponent(currentPath.slice('/collection/'.length));
      const product = COLLECTION_PRODUCTS.find((item) => item.slug === productSlug);

      if (product) {
        return (
          <ProductDetailPage
            product={product}
            onNavigate={navigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        );
      }
    }

    switch (currentPath) {
      case '/':
        return (
          <HomePage
            onOpenConsultation={() => handleOpenConsultation()}
            onSelectTier={handleOpenConsultation}
            onSelectCategory={handleSelectCategory}
            onOpenStory={() => navigate('/about')}
          />
        );
      case '/about':
        return <AboutPage onOpenConsultation={() => handleOpenConsultation()} />;
      case '/services':
        return <ServicesPage onOpenConsultation={() => handleOpenConsultation()} />;
      case '/projects':
        return (
          <ProjectsPage
            onNavigate={navigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        );
      case '/collection':
        return (
          <ShopPage
            onNavigate={navigate}
            onOpenConsultation={() => handleOpenConsultation()}
            selectedCategory={selectedCategory}
          />
        );
      case '/contact':
        return <ContactPage />;
      default:
        return (
          <main id="main-content" className="atelier-not-found">
            <p className="about-eyebrow">404 / Page not found</p>
            <h1>This room is still on the drawing board.</h1>
            <p>The page you requested does not exist or may have moved.</p>
            <button type="button" onClick={() => navigate('/')}>
              Return home
            </button>
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-atelier-bg flex flex-col font-sans selection:bg-atelier-taupe selection:text-atelier-dark">
      <a className="atelier-skip-link" href="#main-content">Skip to main content</a>

      <Navbar
        onOpenConsultation={() => handleOpenConsultation()}
        currentPath={currentPath}
        onNavigate={navigate}
      />

      <div className="flex-grow">{renderPage()}</div>

      <Footer onNavigate={navigate} />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={handleCloseConsultation}
        initialTier={selectedTier}
      />
    </div>
  );
}

export default App;
