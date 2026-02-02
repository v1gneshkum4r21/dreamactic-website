import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Showcase from './pages/Showcase';
import './index.css';
import './App.css';

// Services
import Work from './pages/services/Work';
import ServicePage from './pages/services/ServicePage';
import Enterprise from './pages/services/Enterprise';

// Products
import Platform from './pages/products/Platform';
import Solutions from './pages/products/Solutions';
import Agentic from './pages/products/Agentic';

// More
import About from './pages/more/About';
import Resources from './pages/more/Resources';
import Support from './pages/more/Support';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/showcase" element={<Showcase />} />

            {/* Services Routes */}
            <Route path="/services/work" element={<Work />} />
            <Route path="/services/service" element={<ServicePage />} />
            <Route path="/services/enterprise" element={<Enterprise />} />

            {/* Products Routes */}
            <Route path="/products/platform" element={<Platform />} />
            <Route path="/products/solutions" element={<Solutions />} />
            <Route path="/products/agentic" element={<Agentic />} />

            {/* More Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/support" element={<Support />} />

            <Route path="*" element={<div className="placeholder-page"><h1>Page Not Found</h1><p>The requested page could not be found.</p></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
