import { Navigation } from "./components/Navigation";
import { Dashboard } from "./components/Dashboard";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import Blog from "./components/Blog";
import GetStarted from "./components/GetStarted";
import ComputerVision from "./components/Services/ComputerVision";
import DocumentTransformation from "./components/Services/DocumentTransformation";
import TailoredAISolution from "./components/Services/TailoredAISolution";
import EmbracingAi from "./components/Blogs/EmbracingAi";
import AI2024 from "./components/Blogs/AI2024";
import ComputerVision1 from "./components/Blogs/ComputerVision1";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={ <Dashboard /> } />
        <Route path="/about" element={<About />} />

        <Route path="/computer-vision" element={<ComputerVision />} />
        <Route path="/document-transformation" element={<DocumentTransformation />} />
        <Route path="/tailored-ai-solution" element={<TailoredAISolution />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/ai-trends-2024" element={<AI2024 />} />
        <Route path="/blog/EmbracingAi" element={<EmbracingAi />} />
        <Route path="/blog/computer-vision1" element={<ComputerVision1 />} />

        <Route path="/contactus" element={<GetStarted />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
