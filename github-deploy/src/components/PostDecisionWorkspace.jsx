import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  BarChart3, 
  Target, 
  TrendingUp, 
  TrendingDown,
  CheckCircle,
  AlertTriangle,
  Clock,
  Users,
  Zap,
  Brain,
  Activity,
  Download,
  RefreshCw
} from 'lucide-react';

const PostDecisionWorkspace = () => {
  const [trackingData, setTrackingData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTrackingData({
        decision: {
          id: 'DEC_001',
          title: 'Customer Retention Strategy Q1 2025',
          status: 'Implemented',
          implementationDate: 'March 20, 2025',
          expectedCompletion: 'June 20, 2025'
        },
        kpis: [
          {
            name: 'Customer Churn Rate',
            target: '15%',
            current: '18%',
            trend: 'down',
            progress: 0.73,
            status: 'On Track'
          },
          {
            name: 'Customer Health Score',
            target: '80%',
            current: '76%',
            trend: 'up',
            progress: 0.85,
            status: 'On Track'
          },
          {
            name: 'Retention Rate',
            target: '85%',
            current: '82%',
            trend: 'up',
            progress: 0.91,
            status: 'On Track'
          },
          {
            name: 'Customer Satisfaction',
            target: '90%',
            current: '87%',
            trend: 'up',
            progress: 0.67,
            status: 'Behind'
          }
        ],
        milestones: [
          {
            id: 'MIL_001',
            name: 'Implement Health Monitoring System',
            status: 'Completed',
            completionDate: 'April 5, 2025',
            description: 'Deployed proactive customer health monitoring dashboard'
          },
          {
            id: 'MIL_002',
            name: 'Launch Retention Campaigns',
            status: 'In Progress',
            completionDate: 'May 15, 2025',
            description: 'Rolling out personalized retention campaigns to high-risk customers'
          },
          {
            id: 'MIL_003',
            name: 'Train Customer Success Team',
            status: 'Pending',
            completionDate: 'June 1, 2025',
            description: 'Complete training on new retention strategies and tools'
          }
        ],
        outcomes: {
          successes: [
            'Reduced churn rate by 12% in first month',
            'Improved customer health scores by 8%',
            'Increased customer satisfaction by 5%'
          ],
          challenges: [
            'Implementation took 2 weeks longer than expected',
            'Some customers resistant to new monitoring approach',
            'Training program needs refinement'
          ],
          learnings: [
            'Early customer communication is crucial for adoption',
            'Phased rollout reduces resistance',
            'Regular feedback loops improve implementation'
          ]
        },
        nextActions: [
          'Complete customer success team training',
          'Refine monitoring alerts based on feedback',
          'Plan Q2 retention strategy based on learnings'
        ]
      });
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'On Track': return 'text-green-400 bg-green-500/20';
      case 'Behind': return 'text-yellow-400 bg-yellow-500/20';
      case 'At Risk': return 'text-red-400 bg-red-500/20';
      case 'Completed': return 'text-green-400 bg-green-500/20';
      case 'In Progress': return 'text-blue-400 bg-blue-500/20';
      case 'Pending': return 'text-gray-400 bg-gray-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getTrendIcon = (trend) => {
    return trend === 'up' ? 
      <TrendingUp className="h-4 w-4 text-green-400" /> : 
      <TrendingDown className="h-4 w-4 text-red-400" />;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="neural-text text-2xl font-bold mb-4">Tracking Implementation...</div>
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
                <Link to="/pre-decision" className="text-gray-300 hover:text-blue-400 transition-colors">Pre-Decision</Link>
                <Link to="/decision-canvas" className="text-gray-300 hover:text-blue-400 transition-colors">Decision Canvas</Link>
                <Link to="/post-decision" className="text-blue-400 border-b-2 border-blue-400 pb-1">Post-Decision</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <RefreshCw className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <Download className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <Link 
          to="/decision-canvas" 
          className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Decision Canvas
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
              <BarChart3 className="h-8 w-8 text-blue-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Post-Decision Workspace</h1>
              <p className="text-gray-400">Implementation tracking, outcome analysis, and learning capture</p>
            </div>
          </div>
        </motion.div>

        {/* Implementation Overview */}
        <motion.div 
          className="neural-border rounded-xl p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold mb-6">Implementation Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Decision</h3>
              <p className="text-gray-300">{trackingData?.decision.title}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Implementation Date</h3>
              <p className="text-gray-300">{trackingData?.decision.implementationDate}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Expected Completion</h3>
              <p className="text-gray-300">{trackingData?.decision.expectedCompletion}</p>
            </div>
          </div>
        </motion.div>

        {/* KPI Tracking */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">KPI Tracking</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Activity className="h-4 w-4" />
              <span>Real-time monitoring</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trackingData?.kpis.map((kpi, index) => (
              <motion.div
                key={index}
                className="neural-border rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">{kpi.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(kpi.status)}`}>
                    {kpi.status}
                  </span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Current</span>
                    <span className="text-2xl font-bold neural-text">{kpi.current}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Target</span>
                    <span className="text-gray-300">{kpi.target}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Trend</span>
                    <div className="flex items-center space-x-1">
                      {getTrendIcon(kpi.trend)}
                      <span className="text-sm text-gray-300">{kpi.trend}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-gray-300">{(kpi.progress * 100).toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${kpi.progress * 100}%` }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Milestones */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6">Implementation Milestones</h2>
          <div className="space-y-4">
            {trackingData?.milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                className="neural-border rounded-xl p-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="neural-border rounded-lg p-2">
                      <Target className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{milestone.name}</h3>
                      <p className="text-gray-400 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(milestone.status)}`}>
                    {milestone.status}
                  </span>
                </div>
                
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Due: {milestone.completionDate}</span>
                  {milestone.status === 'Completed' && (
                    <span>Completed: {milestone.completionDate}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Outcomes Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Successes */}
          <motion.div
            className="neural-border rounded-xl p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="neural-border rounded-lg p-2">
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>
              <h2 className="text-xl font-bold">Successes</h2>
            </div>
            
            <div className="space-y-3">
              {trackingData?.outcomes.successes.map((success, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{success}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Challenges */}
          <motion.div
            className="neural-border rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="neural-border rounded-lg p-2">
                <AlertTriangle className="h-6 w-6 text-yellow-400" />
              </div>
              <h2 className="text-xl font-bold">Challenges</h2>
            </div>
            
            <div className="space-y-3">
              {trackingData?.outcomes.challenges.map((challenge, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <AlertTriangle className="h-4 w-4 text-yellow-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{challenge}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Learnings */}
          <motion.div
            className="neural-border rounded-xl p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="neural-border rounded-lg p-2">
                <Brain className="h-6 w-6 text-purple-400" />
              </div>
              <h2 className="text-xl font-bold">Learnings</h2>
            </div>
            
            <div className="space-y-3">
              {trackingData?.outcomes.learnings.map((learning, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Brain className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{learning}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Next Actions */}
        <motion.div 
          className="neural-border rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h2 className="text-2xl font-bold mb-6">Next Actions</h2>
          <div className="space-y-3 mb-6">
            {trackingData?.nextActions.map((action, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{action}</span>
              </div>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:neural-glow">
              Update Progress
            </button>
            <button className="border border-gray-600 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all">
              Generate Report
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PostDecisionWorkspace;



