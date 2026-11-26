import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Analytics from './components/Analytics';
import Home from './pages/Home';
const CustomSafariModal = lazy(() => import('./components/CustomSafariModal'));
const PackageBookingModal = lazy(() => import('./components/PackageBookingModal'));
import { CurrencyProvider } from './context/CurrencyContext';
import { CustomSafariModalProvider, useCustomSafariModal } from './context/CustomSafariModalContext';
import { AdminAuthProvider } from './admin/context/AdminAuthContext';
import { AdminThemeProvider } from './admin/context/AdminThemeContext';

// Lazy load public pages for better performance
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

// Admin Dashboard Components & Pages
const AdminLayout = lazy(() =>
  import('./admin/components/AdminLayout').then((m) => ({ default: m.AdminLayout }))
);
const AdminLogin = lazy(() => import('./admin/pages/AdminLogin'));
const AdminDashboard = lazy(() => import('./admin/pages/AdminDashboard'));
const AdminInquiries = lazy(() => import('./admin/pages/AdminInquiries'));
const AdminPackages = lazy(() => import('./admin/pages/AdminPackages'));
const AdminFleet = lazy(() => import('./admin/pages/AdminFleet'));
const AdminBlog = lazy(() => import('./admin/pages/AdminBlog'));
const AdminReviews = lazy(() => import('./admin/pages/AdminReviews'));
const AdminSubscribers = lazy(() => import('./admin/pages/AdminSubscribers'));
const AdminTourismNews = lazy(() => import('./admin/pages/AdminTourismNews'));
const AdminStaff = lazy(() => import('./admin/pages/AdminStaff'));
const AdminGallery = lazy(() => import('./admin/pages/AdminGallery'));
const AdminSettings = lazy(() => import('./admin/pages/AdminSettings'));
const AdminSystemHealth = lazy(() => import('./admin/pages/AdminSystemHealth'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-brand-green/20 border-t-brand-green rounded-full animate-spin"></div>
  </div>
);

const AppContent = () => {
  const location = useLocation();
  const { isOpen, isBookingOpen } = useCustomSafariModal();
  const isAdmin = location.pathname.startsWith('/admin');
  const isHome = location.pathname === '/';

  return (
    <>
      {/* Public elements only rendered on public pages */}
      {!isAdmin && (
        <>
          <ScrollToTop />
          <BackToTop />
          <WhatsAppButton />
          <Navbar />
          <Suspense fallback={null}>
            {isOpen && <CustomSafariModal />}
            {isBookingOpen && <PackageBookingModal />}
          </Suspense>
        </>
      )}

      {/* Main page content wrapper */}
      <div className={isAdmin || isHome ? '' : 'pt-24 lg:pt-28'}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Public Routes */}
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
            <Route
              path="/queen-elizabeth-national-park-safaris"
              element={<QueenElizabethSafaris />}
            />
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

            {/* Admin Dashboard Protected Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="inquiries" element={<AdminInquiries />} />
              <Route path="packages" element={<AdminPackages />} />
              <Route path="fleet" element={<AdminFleet />} />
              <Route path="blog" element={<AdminBlog />} />
              <Route path="gallery" element={<AdminGallery />} />
              <Route path="reviews" element={<AdminReviews />} />
              <Route path="subscribers" element={<AdminSubscribers />} />
              <Route path="tourism-news" element={<AdminTourismNews />} />
              <Route path="staff" element={<AdminStaff />} />
              <Route path="settings" element={<AdminSettings />} />
              <Route path="system-health" element={<AdminSystemHealth />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

function App() {
  return (
    <AdminAuthProvider>
      <AdminThemeProvider>
        <CurrencyProvider>
          <CustomSafariModalProvider>
            <Router>
              <Analytics />
              <AppContent />
            </Router>
          </CustomSafariModalProvider>
        </CurrencyProvider>
      </AdminThemeProvider>
    </AdminAuthProvider>
  );
}

export default App;

