import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Analytics from './components/Analytics';
import CustomSafariModal from './components/CustomSafariModal';
import PackageBookingModal from './components/PackageBookingModal';
import { CurrencyProvider } from './context/CurrencyContext';
import { CustomSafariModalProvider } from './context/CustomSafariModalContext';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Packages = lazy(() => import('./pages/Packages'));
const Destination = lazy(() => import('./pages/Destination'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const VisionMission = lazy(() => import('./pages/VisionMission'));
const Team = lazy(() => import('./pages/Team'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Gallery = lazy(() => import('./pages/Gallery'));
const PackageDetail = lazy(() => import('./pages/PackageDetail'));
const GuideDetail = lazy(() => import('./pages/GuideDetail'));
const GorillaPermitsGuide = lazy(() => import('./pages/GorillaPermitsGuide'));
const SafariCostEstimator = lazy(() => import('./pages/SafariCostEstimator'));
const BestTimeToVisit = lazy(() => import('./pages/BestTimeToVisit'));
const PlanMyTrip = lazy(() => import('./pages/PlanMyTrip'));

// Dedicated High-Value SEO Pillars
const UgandaSafaris = lazy(() => import('./pages/UgandaSafaris'));
const BwindiGorillaTrekking = lazy(() => import('./pages/BwindiGorillaTrekking'));
const QueenElizabethSafaris = lazy(() => import('./pages/QueenElizabethSafaris'));
const MurchisonFallsSafaris = lazy(() => import('./pages/MurchisonFallsSafaris'));
const KibaleChimpanzeeSafaris = lazy(() => import('./pages/KibaleChimpanzeeSafaris'));
const UgandaWildlifeSafaris = lazy(() => import('./pages/UgandaWildlifeSafaris'));
const CarHireUganda = lazy(() => import('./pages/CarHireUganda'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-brand-green/20 border-t-brand-green rounded-full animate-spin"></div>
  </div>
);

const ContentWrapper = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={isHome ? '' : 'pt-24 lg:pt-28'}>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/services" element={<Services />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/package/:slug" element={<PackageDetail />} />
          <Route path="/guides/:slug" element={<GuideDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/our-team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-a-quote" element={<Contact />} />
          
          {/* High-Intent SEO & Lead Generation Hubs */}
          <Route path="/uganda-safaris" element={<UgandaSafaris />} />
          <Route path="/bwindi-gorilla-trekking" element={<BwindiGorillaTrekking />} />
          <Route path="/queen-elizabeth-national-park-safaris" element={<QueenElizabethSafaris />} />
          <Route path="/murchison-falls-safaris" element={<MurchisonFallsSafaris />} />
          <Route path="/kibale-chimpanzee-safaris" element={<KibaleChimpanzeeSafaris />} />
          <Route path="/uganda-wildlife-safaris" element={<UgandaWildlifeSafaris />} />
          <Route path="/car-hire-uganda" element={<CarHireUganda />} />
          <Route path="/uganda-car-hire" element={<CarHireUganda />} />
          <Route path="/plan-my-trip" element={<PlanMyTrip />} />
          <Route path="/custom-safari" element={<PlanMyTrip />} />
          <Route path="/gorilla-permits-guide" element={<GorillaPermitsGuide />} />
          <Route path="/safari-cost-calculator" element={<SafariCostEstimator />} />
          <Route path="/best-time-to-visit-uganda" element={<BestTimeToVisit />} />
        </Routes>
      </Suspense>
    </div>
  );
};

function App() {
  return (
    <CurrencyProvider>
      <CustomSafariModalProvider>
        <Router>
          <Analytics />
          <ScrollToTop />
          <BackToTop />
          <WhatsAppButton />
          <Navbar />
          <CustomSafariModal />
          <PackageBookingModal />
          <ContentWrapper />
        </Router>
      </CustomSafariModalProvider>
    </CurrencyProvider>
  );
}

export default App;
