import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NeuralBackground from './components/NeuralBackground';
import Homepage from './components/Homepage';
import PreDecisionWorkspace from './components/PreDecisionWorkspace';
import DecisionCanvas from './components/DecisionCanvas';
import PostDecisionWorkspace from './components/PostDecisionWorkspace';
import AboutUs from './components/AboutUs';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Demo from './components/Demo';
import DataIngestionDetail from './components/DataIngestionDetail';
import CausalIntelligenceDetail from './components/CausalIntelligenceDetail';
import DecisionCanvasDetail from './components/DecisionCanvasDetail';
import DecisionTrackingDetail from './components/DecisionTrackingDetail';
import DemoFlow from './components/DemoFlow';
import SingleScreenInterface from './components/SingleScreenInterface';
import DetailedWorkflowDemo from './components/DetailedWorkflowDemo';
import DecisionIntelligenceDemo from './components/DecisionIntelligenceDemo';
import PharmaPrototype from './components/PharmaPrototype';
import PitchDeck from './components/PitchDeck';
import { useLocation } from 'react-router-dom';

function AppContent() {
  const location = useLocation();
  const isPitchDeck = location.pathname === '/pitch-deck';

  return (
    <div className="min-h-screen text-white relative">
      {!isPitchDeck && <NeuralBackground />}
      <div className="relative z-10">
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/pre-decision" element={<PreDecisionWorkspace />} />
            <Route path="/decision-canvas" element={<DecisionCanvas />} />
            <Route path="/post-decision" element={<PostDecisionWorkspace />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/data-ingestion" element={<DataIngestionDetail />} />
            <Route path="/causal-intelligence" element={<CausalIntelligenceDetail />} />
            <Route path="/decision-canvas-detail" element={<DecisionCanvasDetail />} />
            <Route path="/decision-tracking" element={<DecisionTrackingDetail />} />
            <Route path="/demo-flow" element={<DemoFlow />} />
            <Route path="/single-screen" element={<SingleScreenInterface />} />
            <Route path="/detailed-workflow" element={<DetailedWorkflowDemo />} />
            <Route path="/decision-intelligence-demo" element={<DecisionIntelligenceDemo />} />
            <Route path="/prototype" element={<PharmaPrototype />} />
            <Route path="/pitch-deck" element={<PitchDeck />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
