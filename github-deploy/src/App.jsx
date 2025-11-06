import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NeuralBackground from './components/NeuralBackground';
import Homepage from './components/Homepage';
import PreDecisionWorkspace from './components/PreDecisionWorkspace';
import DecisionCanvas from './components/DecisionCanvas';
import PostDecisionWorkspace from './components/PostDecisionWorkspace';
import AboutUs from './components/AboutUs';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import DemoFlow from './components/DemoFlow';
import SingleScreenInterface from './components/SingleScreenInterface';
import DetailedWorkflowDemo from './components/DetailedWorkflowDemo';
import DecisionIntelligenceDemo from './components/DecisionIntelligenceDemo';

function App() {
  return (
    <Router>
      <div className="min-h-screen text-white relative">
        <NeuralBackground />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/pre-decision" element={<PreDecisionWorkspace />} />
            <Route path="/decision-canvas" element={<DecisionCanvas />} />
            <Route path="/post-decision" element={<PostDecisionWorkspace />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo-flow" element={<DemoFlow />} />
            <Route path="/single-screen" element={<SingleScreenInterface />} />
            <Route path="/detailed-workflow" element={<DetailedWorkflowDemo />} />
            <Route path="/decision-intelligence-demo" element={<DecisionIntelligenceDemo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
