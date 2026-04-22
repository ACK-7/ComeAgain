import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';

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
const Gallery = lazy(() => import('./pages/Gallery'));
const PackageDetail = lazy(() => import('./pages/PackageDetail'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-brand-green/20 border-t-brand-green rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <BackToTop />
      <WhatsAppButton />
      <Navbar />
      <div className="pt-24">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/services" element={<Services />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/package/:slug" element={<PackageDetail />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/about/vision-mission" element={<VisionMission />} />
            <Route path="/about/our-team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
