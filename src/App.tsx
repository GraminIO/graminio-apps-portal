import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Footer } from "./components/footer";
import Blog from "./components/Blog"; // Blog component import
import GetStarted from "./components/GetStarted"; // The new page for Get Started
import ComputerVision from "./components/ComputerVision"; // Import for Computer Vision page
import DocumentTransformation from "./components/DocumentTransformation"; // Import for Document Transformation page
import TailoredAISolution from "./components/TailoredAISolution"; // Import for Tailored AI Solution page
import EmbracingAi from "./components/EmbracingAi";
import AI2024 from "./components/AI2024"; // Import AI2024 component
import ComputerVision1 from "./components/ComputerVision1"; // Import ComputerVision1 component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // React Router imports
import "./App.css"; // App-wide CSS

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route
          path="/"
          element={
            <div>
              <Navigation />
              <Header />
              <Features />
              <About />
              <Services />
              <Gallery />
              {/* <Contact data={landingPageData.Contact} /> */}
              <Footer />
            </div>
          }
        />

        {/* Blog Page Route */}
        <Route path="/blog" element={<Blog />} />

        {/* About Page Route */}
        <Route path="/about" element={<About />} />

        {/* Get Started Page Route */}
        <Route path="/get-started" element={<GetStarted />} />

        {/* Service Pages */}
        <Route path="/computer-vision" element={<ComputerVision />} />
        <Route
          path="/document-transformation"
          element={<DocumentTransformation />}
        />
        <Route path="/tailored-ai-solution" element={<TailoredAISolution />} />

        {/* Blog Post Routes */}
        <Route path="/blog/ai-trends-2024" element={<AI2024 />} />
        <Route path="/blog/EmbracingAi" element={<EmbracingAi />} />
        <Route path="/blog/computer-vision1" element={<ComputerVision1 />} />
      </Routes>
    </Router>
  );
};

export default App;
