import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Target, 
  Users, 
  MessageCircle, 
  CheckCircle,
  AlertTriangle,
  Clock,
  Brain,
  Zap,
  BarChart3,
  Plus,
  Send,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';

const DecisionCanvas = () => {
  const [decisionData, setDecisionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setDecisionData({
        decision: {
          id: 'DEC_001',
          title: 'Customer Retention Strategy Q1 2025',
          description: 'Should we implement a comprehensive churn prevention program for our enterprise customers?',
          status: 'In Progress',
          owner: 'Sarah Johnson, VP Customer Success',
          stakeholders: [
            { name: 'Sarah Johnson', role: 'VP Customer Success', status: 'Approved' },
            { name: 'Mike Chen', role: 'CEO', status: 'Pending' },
            { name: 'Lisa Rodriguez', role: 'CTO', status: 'Reviewing' },
            { name: 'David Kim', role: 'Head of Product', status: 'Pending' }
          ],
          timeline: 'Decision needed by March 15, 2025'
        },
        aiRecommendations: [
          {
            recommendation: 'Implement proactive customer health monitoring',
            confidence: 0.89,
            expectedImpact: 'High',
            reasoning: 'Based on causal analysis, early detection prevents 73% of churn'
          },
          {
            recommendation: 'Launch personalized retention campaigns',
            confidence: 0.82,
            expectedImpact: 'Medium',
            reasoning: 'Similar decisions show 45% improvement in retention rates'
          }
        ],
        discussion: [
          {
            id: 1,
            author: 'Sarah Johnson',
            role: 'VP Customer Success',
            timestamp: '2 hours ago',
            content: 'Based on our analysis, I believe we should prioritize the proactive monitoring approach. The data shows this has the highest ROI.',
            reactions: { like: 3, disagree: 0 }
          },
          {
            id: 2,
            author: 'Mike Chen',
            role: 'CEO',
            timestamp: '1 hour ago',
            content: 'I agree with Sarah. However, we need to consider the implementation timeline. Can we roll this out in phases?',
            reactions: { like: 2, disagree: 0 }
          },
          {
            id: 3,
            author: 'Lisa Rodriguez',
            role: 'CTO',
            timestamp: '30 minutes ago',
            content: 'From a technical perspective, we can implement the monitoring system in 6 weeks. The phased approach makes sense.',
            reactions: { like: 4, disagree: 0 }
          }
        ],
        simulation: {
          scenarios: [
            {
              name: 'Full Implementation',
              successProbability: 0.78,
              expectedROI: 2.3,
              timeline: '12 weeks'
            },
            {
              name: 'Phased Approach',
              successProbability: 0.85,
              expectedROI: 2.1,
              timeline: '16 weeks'
            },
            {
              name: 'Minimal Investment',
              successProbability: 0.65,
              expectedROI: 1.4,
              timeline: '8 weeks'
            }
          ]
        }
      });
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved': return 'text-green-400 bg-green-500/20';
      case 'Pending': return 'text-yellow-400 bg-yellow-500/20';
      case 'Reviewing': return 'text-blue-400 bg-blue-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'High': return 'text-red-400';
      case 'Medium': return 'text-yellow-400';
      case 'Low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="neural-text text-2xl font-bold mb-4">Loading Decision Canvas...</div>
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
                <Link to="/decision-canvas" className="text-blue-400 border-b-2 border-blue-400 pb-1">Decision Canvas</Link>
                <Link to="/post-decision" className="text-gray-300 hover:text-blue-400 transition-colors">Post-Decision</Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <Link 
          to="/pre-decision" 
          className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Pre-Decision
        </Link>

        {/* Decision Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="neural-border rounded-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="neural-border rounded-lg p-3">
                  <Target className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{decisionData?.decision.title}</h1>
                  <p className="text-gray-400">Decision ID: {decisionData?.decision.id}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-400">Status</span>
                <div className="text-lg font-semibold text-blue-400">{decisionData?.decision.status}</div>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg mb-6">{decisionData?.decision.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Decision Owner</h3>
                <p className="text-gray-300">{decisionData?.decision.owner}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Timeline</h3>
                <p className="text-gray-300">{decisionData?.decision.timeline}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Discussion Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* AI Recommendations */}
            <motion.div
              className="neural-border rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="neural-border rounded-lg p-2">
                  <Brain className="h-6 w-6 text-purple-400" />
                </div>
                <h2 className="text-xl font-bold">AI Recommendations</h2>
              </div>

              <div className="space-y-4">
                {decisionData?.aiRecommendations.map((rec, index) => (
                  <div key={index} className="neural-border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold">{rec.recommendation}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        rec.expectedImpact === 'High' 
                          ? 'text-red-400 bg-red-500/20' 
                          : 'text-yellow-400 bg-yellow-500/20'
                      }`}>
                        {rec.expectedImpact} Impact
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{rec.reasoning}</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Confidence</span>
                      <span className="text-blue-400">{(rec.confidence * 100).toFixed(0)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Discussion Thread */}
            <motion.div
              className="neural-border rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="neural-border rounded-lg p-2">
                  <MessageCircle className="h-6 w-6 text-green-400" />
                </div>
                <h2 className="text-xl font-bold">Discussion</h2>
              </div>

              <div className="space-y-4 mb-6">
                {decisionData?.discussion.map((comment, index) => (
                  <div key={comment.id} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {comment.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-semibold">{comment.author}</span>
                        <span className="text-gray-400 text-sm">{comment.role}</span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-400 text-sm">{comment.timestamp}</span>
                      </div>
                      <p className="text-gray-300 mb-3">{comment.content}</p>
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 text-gray-400 hover:text-green-400 transition-colors">
                          <ThumbsUp className="h-4 w-4" />
                          <span className="text-sm">{comment.reactions.like}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-400 hover:text-red-400 transition-colors">
                          <ThumbsDown className="h-4 w-4" />
                          <span className="text-sm">{comment.reactions.disagree}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Comment */}
              <div className="border-t border-gray-700 pt-4">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">You</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Add your thoughts..."
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 resize-none"
                      rows={3}
                    />
                    <div className="flex justify-end mt-3">
                      <button 
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                        disabled={!newComment.trim()}
                      >
                        <Send className="h-4 w-4" />
                        <span>Send</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Stakeholders */}
            <motion.div
              className="neural-border rounded-xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="neural-border rounded-lg p-2">
                  <Users className="h-6 w-6 text-blue-400" />
                </div>
                <h2 className="text-xl font-bold">Stakeholders</h2>
              </div>

              <div className="space-y-3">
                {decisionData?.decision.stakeholders.map((stakeholder, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm">{stakeholder.name}</div>
                      <div className="text-xs text-gray-400">{stakeholder.role}</div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(stakeholder.status)}`}>
                      {stakeholder.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Scenario Simulation */}
            <motion.div
              className="neural-border rounded-xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="neural-border rounded-lg p-2">
                  <BarChart3 className="h-6 w-6 text-purple-400" />
                </div>
                <h2 className="text-xl font-bold">Scenario Analysis</h2>
              </div>

              <div className="space-y-4">
                {decisionData?.simulation.scenarios.map((scenario, index) => (
                  <div key={index} className="neural-border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">{scenario.name}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Success Probability</span>
                        <span className="text-green-400">{(scenario.successProbability * 100).toFixed(0)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Expected ROI</span>
                        <span className="text-blue-400">{scenario.expectedROI}x</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Timeline</span>
                        <span className="text-purple-400">{scenario.timeline}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Decision Actions */}
            <motion.div
              className="neural-border rounded-xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-xl font-bold mb-6">Decision Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all">
                  <CheckCircle className="h-5 w-5 mr-2 inline" />
                  Approve Decision
                </button>
                <button className="w-full border border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 py-3 rounded-lg font-semibold transition-all">
                  <Clock className="h-5 w-5 mr-2 inline" />
                  Request More Info
                </button>
                <button className="w-full border border-red-500 text-red-400 hover:bg-red-500/10 py-3 rounded-lg font-semibold transition-all">
                  <AlertTriangle className="h-5 w-5 mr-2 inline" />
                  Reject Decision
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Next Steps */}
        <motion.div 
          className="mt-8 neural-border rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6">Ready for Implementation?</h2>
          <p className="text-gray-300 mb-6">
            Once all stakeholders have approved the decision, you can move to the Post-Decision 
            workspace to track implementation and outcomes.
          </p>
          <div className="flex items-center space-x-4">
            <Link 
              to="/post-decision" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:neural-glow"
            >
              Move to Post-Decision
            </Link>
            <button className="border border-gray-600 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all">
              Save Progress
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DecisionCanvas;



