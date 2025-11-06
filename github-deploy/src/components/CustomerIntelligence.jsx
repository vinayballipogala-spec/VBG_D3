import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft,
  Users,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Brain,
  Target,
  Zap,
  BarChart3,
  Activity,
  Database,
  RefreshCw,
  Download,
  Filter,
  Search
} from 'lucide-react';

const CustomerIntelligence = () => {
  const [analysisData, setAnalysisData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    // Simulate API call to get customer intelligence data
    setTimeout(() => {
      setAnalysisData({
        overview: {
          totalCustomers: 1247,
          churnRiskHigh: 89,
          churnRiskMedium: 234,
          churnRiskLow: 924,
          avgHealthScore: 0.78,
          expansionOpportunities: 156,
          accuracy: 0.94
        },
        churnAnalysis: {
          highRiskCustomers: [
            {
              id: 'CUST_001',
              name: 'TechCorp Solutions',
              industry: 'Technology',
              arr: 125000,
              churnProbability: 0.87,
              healthScore: 0.34,
              keyFactors: ['Low product usage', 'Support ticket spike', 'Contract renewal soon'],
              lastActivity: '5 days ago',
              recommendedActions: ['Schedule executive call', 'Offer product training', 'Provide usage analytics']
            },
            {
              id: 'CUST_002',
              name: 'DataFlow Inc',
              industry: 'Data Analytics',
              arr: 89000,
              churnProbability: 0.82,
              healthScore: 0.41,
              keyFactors: ['Decreased FTE count', 'Support escalation', 'Competitor evaluation'],
              lastActivity: '3 days ago',
              recommendedActions: ['Executive alignment', 'Competitive analysis', 'Custom solution proposal']
            }
          ],
          causalInsights: [
            {
              factor: 'Product Usage Frequency',
              impact: 'High',
              confidence: 0.91,
              causalStrength: 0.78,
              description: 'Customers with <30% feature adoption have 4.2x higher churn risk',
              recommendation: 'Focus on onboarding and feature adoption campaigns'
            },
            {
              factor: 'Support Ticket Volume',
              impact: 'High',
              confidence: 0.89,
              causalStrength: 0.73,
              description: 'Support tickets >5/month correlate with 85% churn probability',
              recommendation: 'Implement proactive support and self-service options'
            },
            {
              factor: 'Payment History',
              impact: 'Medium',
              confidence: 0.82,
              causalStrength: 0.65,
              description: 'Late payments increase churn risk by 2.1x',
              recommendation: 'Review payment terms and offer flexible options'
            }
          ]
        },
        expansionAnalysis: {
          opportunities: [
            {
              id: 'EXP_001',
              customer: 'GrowthTech Ltd',
              currentARR: 45000,
              potentialARR: 85000,
              expansionProbability: 0.78,
              keyIndicators: ['Usage growth 40%', 'Team expansion', 'Feature requests'],
              recommendedActions: ['Present enterprise features', 'Schedule expansion call', 'Offer pilot program']
            }
          ]
        }
      });
      setLoading(false);
    }, 1500);
  }, []);

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'High': return 'text-red-400 bg-red-500/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'Low': return 'text-green-400 bg-green-500/20';
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
          <div className="neural-text text-2xl font-bold mb-4">Analyzing Customer Intelligence...</div>
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
                <Link to="/customer-intelligence" className="text-blue-400 border-b-2 border-blue-400 pb-1">Customer Intelligence</Link>
                <Link to="/pre-decision" className="text-gray-300 hover:text-blue-400 transition-colors">Pre-Decision</Link>
                <Link to="/decision-canvas" className="text-gray-300 hover:text-blue-400 transition-colors">Decision Canvas</Link>
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
              <Users className="h-8 w-8 text-blue-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Customer Intelligence</h1>
              <p className="text-gray-400">Causal analysis and predictive insights for customer success</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="neural-border rounded-lg p-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
            </div>
            <span className="text-sm text-gray-400">Model Accuracy: {(analysisData?.overview?.accuracy * 100).toFixed(0)}%</span>
            <span className="text-gray-600">•</span>
            <span className="text-sm text-gray-400">Last Updated: 2 minutes ago</span>
          </div>
        </motion.div>

        {/* Overview Metrics */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="neural-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="neural-border rounded-lg p-3">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <span className="text-2xl font-bold neural-text">{analysisData?.overview?.totalCustomers}</span>
            </div>
            <h3 className="font-semibold mb-1">Total Customers</h3>
            <p className="text-sm text-gray-400">Active accounts</p>
          </div>

          <div className="neural-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="neural-border rounded-lg p-3">
                <AlertTriangle className="h-6 w-6 text-red-400" />
              </div>
              <span className="text-2xl font-bold neural-text">{analysisData?.overview?.churnRiskHigh}</span>
            </div>
            <h3 className="font-semibold mb-1">High Risk</h3>
              <p className="text-sm text-gray-400">Churn probability &gt;70%</p>
          </div>

          <div className="neural-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="neural-border rounded-lg p-3">
                <TrendingUp className="h-6 w-6 text-green-400" />
              </div>
              <span className="text-2xl font-bold neural-text">{analysisData?.overview?.expansionOpportunities}</span>
            </div>
            <h3 className="font-semibold mb-1">Expansion Opportunities</h3>
            <p className="text-sm text-gray-400">Growth potential identified</p>
          </div>

          <div className="neural-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="neural-border rounded-lg p-3">
                <BarChart3 className="h-6 w-6 text-purple-400" />
              </div>
              <span className="text-2xl font-bold neural-text">{(analysisData?.overview?.avgHealthScore * 100).toFixed(0)}%</span>
            </div>
            <h3 className="font-semibold mb-1">Avg Health Score</h3>
            <p className="text-sm text-gray-400">Customer health average</p>
          </div>
        </motion.div>

        {/* Causal Insights */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Causal Insights</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Brain className="h-4 w-4" />
              <span>Powered by DoWhy & CausalNex</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {analysisData?.churnAnalysis?.causalInsights.map((insight, index) => (
              <motion.div
                key={index}
                className="neural-border rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">{insight.factor}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${getRiskColor(insight.impact)}`}>
                    {insight.impact} Impact
                  </span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Confidence</span>
                    <span className="text-blue-400">{(insight.confidence * 100).toFixed(0)}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Causal Strength</span>
                    <span className="text-purple-400">{(insight.causalStrength * 100).toFixed(0)}%</span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{insight.description}</p>
                
                <div className="neural-border rounded-lg p-3 bg-blue-500/5">
                  <p className="text-blue-400 text-sm font-medium">💡 Recommendation</p>
                  <p className="text-gray-300 text-sm mt-1">{insight.recommendation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* High Risk Customers */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">High Risk Customers</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search customers..."
                  className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Filter className="h-4 w-4" />
                <span className="text-sm">Filter</span>
              </button>
            </div>
          </div>

          <div className="neural-border rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900/50">
                  <tr>
                    <th className="text-left p-4 font-medium text-gray-300">Customer</th>
                    <th className="text-left p-4 font-medium text-gray-300">Industry</th>
                    <th className="text-left p-4 font-medium text-gray-300">ARR</th>
                    <th className="text-left p-4 font-medium text-gray-300">Churn Risk</th>
                    <th className="text-left p-4 font-medium text-gray-300">Health Score</th>
                    <th className="text-left p-4 font-medium text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {analysisData?.churnAnalysis?.highRiskCustomers.map((customer, index) => (
                    <motion.tr
                      key={customer.id}
                      className="border-t border-gray-800 hover:bg-gray-900/30 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.1 * index }}
                    >
                      <td className="p-4">
                        <div>
                          <div className="font-medium text-white">{customer.name}</div>
                          <div className="text-sm text-gray-400">{customer.id}</div>
                        </div>
                      </td>
                      <td className="p-4 text-gray-300">{customer.industry}</td>
                      <td className="p-4 text-gray-300">${customer.arr.toLocaleString()}</td>
                      <td className="p-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${getRiskColor('High')}`}>
                          {(customer.churnProbability * 100).toFixed(0)}%
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-red-400 h-2 rounded-full" 
                              style={{ width: `${customer.healthScore * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-300">{(customer.healthScore * 100).toFixed(0)}%</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <button 
                          className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                          onClick={() => setSelectedCustomer(customer)}
                        >
                          View Details
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Customer Detail Modal */}
        {selectedCustomer && (
          <motion.div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedCustomer(null)}
          >
            <motion.div 
              className="neural-border rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto bg-black"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">{selectedCustomer.name}</h3>
                <button 
                  onClick={() => setSelectedCustomer(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-2">Key Metrics</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Churn Probability</span>
                      <span className="text-red-400">{(selectedCustomer.churnProbability * 100).toFixed(0)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Health Score</span>
                      <span className="text-yellow-400">{(selectedCustomer.healthScore * 100).toFixed(0)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">ARR</span>
                      <span className="text-green-400">${selectedCustomer.arr.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Risk Factors</h4>
                  <div className="space-y-2">
                    {selectedCustomer.keyFactors.map((factor, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <AlertTriangle className="h-4 w-4 text-red-400" />
                        <span className="text-sm text-gray-300">{factor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Recommended Actions</h4>
                <div className="space-y-2">
                  {selectedCustomer.recommendedActions.map((action, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 neural-border rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-4">
                <button 
                  onClick={() => setSelectedCustomer(null)}
                  className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  Close
                </button>
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Create Action Plan
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CustomerIntelligence;
