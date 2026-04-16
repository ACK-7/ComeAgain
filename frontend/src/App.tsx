import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Destination from './pages/Destination';
import AboutUs from './pages/AboutUs';
import VisionMission from './pages/VisionMission';
import Team from './pages/Team';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <BackToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/services" element={<Services />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about/vision-mission" element={<VisionMission />} />
        <Route path="/about/our-team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
