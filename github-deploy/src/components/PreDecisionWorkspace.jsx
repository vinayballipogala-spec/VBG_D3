import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Brain, 
  Search, 
  Database, 
  Target, 
  Zap, 
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Users,
  BarChart3,
  Plus,
  Filter,
  Download
} from 'lucide-react';

const PreDecisionWorkspace = () => {
  const [evidenceData, setEvidenceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setEvidenceData({
        evidence: [
          {
            id: 'EVD_001',
            source: 'Internal CRM',
            type: 'Customer Data',
            confidence: 0.95,
            relevance: 0.88,
            description: 'Customer churn analysis for Q4 2024',
            dataPoints: 1247,
            lastUpdated: '2 hours ago'
          },
          {
            id: 'EVD_002',
            source: 'Market Research',
            type: 'External Data',
            confidence: 0.82,
            relevance: 0.91,
            description: 'Competitive analysis and market trends',
            dataPoints: 156,
            lastUpdated: '4 hours ago'
          },
          {
            id: 'EVD_003',
            source: 'Support Tickets',
            type: 'Operational Data',
            confidence: 0.89,
            relevance: 0.76,
            description: 'Customer support escalation patterns',
            dataPoints: 2341,
            lastUpdated: '1 hour ago'
          }
        ],
        hypotheses: [
          {
            id: 'HYP_001',
            statement: 'Customer churn is primarily caused by poor onboarding experience',
            confidence: 0.73,
            status: 'Testing',
            evidence: ['EVD_001', 'EVD_003']
          },
          {
            id: 'HYP_002',
            statement: 'Competitive pressure is driving customer dissatisfaction',
            confidence: 0.68,
            status: 'Testing',
            evidence: ['EVD_002']
          }
        ],
        marketSignals: [
          {
            signal: 'Market Growth',
            impact: 'Positive',
            confidence: 0.87,
            description: 'Market growing at 15% YoY with enterprise adoption increasing'
          },
          {
            signal: 'Competitive Pressure',
            impact: 'Negative',
            confidence: 0.75,
            description: '3 new competitors entered the market in Q4'
          }
        ]
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="neural-text text-2xl font-bold mb-4">Gathering Intelligence...</div>
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-sm border-b border-blue-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="neural-text text-xl font-bold">DecisionIntelligence OS</Link>
              <nav className="hidden md:flex space-x-6">
                <Link to="/dashboard" className="text-gray-300 hover:text-blue-400 transition-colors">Dashboard</Link>
                <Link to="/pre-decision" className="text-blue-400 border-b-2 border-blue-400 pb-1">Pre-Decision</Link>
                <Link to="/decision-canvas" className="text-gray-300 hover:text-blue-400 transition-colors">Decision Canvas</Link>
                <Link to="/post-decision" className="text-gray-300 hover:text-blue-400 transition-colors">Post-Decision</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <Plus className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <Link 
          to="/dashboard" 
          className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Link>

        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="neural-border rounded-lg p-3">
              <Brain className="h-8 w-8 text-blue-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Pre-Decision Workspace</h1>
              <p className="text-gray-400">Evidence gathering, hypothesis testing, and market signal analysis</p>
            </div>
          </div>
        </motion.div>

        {/* Evidence Gathering */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Evidence Gathering</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search evidence..."
                  className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Filter className="h-4 w-4" />
                <span className="text-sm">Filter</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Download className="h-4 w-4" />
                <span className="text-sm">Export</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {evidenceData?.evidence.map((item, index) => (
              <motion.div
                key={item.id}
                className="neural-border rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="neural-border rounded-lg p-2">
                      <Database className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.source}</h3>
                      <p className="text-sm text-gray-400">{item.type}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">{item.lastUpdated}</span>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Confidence</span>
                    <span className="text-green-400">{(item.confidence * 100).toFixed(0)}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Relevance</span>
                    <span className="text-blue-400">{(item.relevance * 100).toFixed(0)}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Data Points</span>
                    <span className="text-purple-400">{item.dataPoints.toLocaleString()}</span>
                  </div>
                </div>
                
                <button className="w-full text-blue-400 hover:text-blue-300 transition-colors text-sm">
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hypothesis Testing */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Hypothesis Testing</h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              <Plus className="h-4 w-4 mr-2 inline" />
              New Hypothesis
            </button>
          </div>

          <div className="space-y-4">
            {evidenceData?.hypotheses.map((hypothesis, index) => (
              <motion.div
                key={hypothesis.id}
                className="neural-border rounded-xl p-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{hypothesis.statement}</h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-gray-400">Confidence: <span className="text-blue-400">{(hypothesis.confidence * 100).toFixed(0)}%</span></span>
                      <span className="text-gray-400">Status: <span className="text-yellow-400">{hypothesis.status}</span></span>
                      <span className="text-gray-400">Evidence: <span className="text-purple-400">{hypothesis.evidence.length} sources</span></span>
                    </div>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    <Target className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button className="text-green-400 hover:text-green-300 transition-colors text-sm">
                    <CheckCircle className="h-4 w-4 mr-1 inline" />
                    Validate
                  </button>
                  <button className="text-red-400 hover:text-red-300 transition-colors text-sm">
                    <AlertTriangle className="h-4 w-4 mr-1 inline" />
                    Refute
                  </button>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                    <BarChart3 className="h-4 w-4 mr-1 inline" />
                    Analyze
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Market Signals */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Market Signals</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Zap className="h-4 w-4" />
              <span>Real-time monitoring</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {evidenceData?.marketSignals.map((signal, index) => (
              <motion.div
                key={index}
                className="neural-border rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">{signal.signal}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    signal.impact === 'Positive' 
                      ? 'text-green-400 bg-green-500/20' 
                      : 'text-red-400 bg-red-500/20'
                  }`}>
                    {signal.impact}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{signal.description}</p>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Confidence</span>
                  <span className="text-blue-400">{(signal.confidence * 100).toFixed(0)}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div 
          className="neural-border rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6">Ready for Decision Phase?</h2>
          <p className="text-gray-300 mb-6">
            You've gathered comprehensive evidence and tested key hypotheses. 
            Ready to move to the Decision Canvas for collaborative decision-making?
          </p>
          <div className="flex items-center space-x-4">
            <Link 
              to="/decision-canvas" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:neural-glow"
            >
              Move to Decision Canvas
            </Link>
            <button className="border border-gray-600 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all">
              Save as Draft
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PreDecisionWorkspace;



