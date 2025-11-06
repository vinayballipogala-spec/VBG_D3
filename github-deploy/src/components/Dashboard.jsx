import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Shield,
  Plus,
  ArrowRight,
  Activity,
  CheckCircle,
  AlertTriangle,
  Clock,
  Zap,
  Database,
  Settings,
  Bell
} from 'lucide-react';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to get dashboard data
    setTimeout(() => {
      setDashboardData({
        totalDecisions: 147,
        activeDecisions: 23,
        successRate: 0.87,
        intelligenceModules: {
          customerIntelligence: {
            status: 'active',
            accuracy: 0.94,
            insightsGenerated: 342,
            lastUpdate: '2 minutes ago'
          },
          productIntelligence: {
            status: 'coming_soon',
            eta: 'Q2 2026'
          },
          financialIntelligence: {
            status: 'coming_soon',
            eta: 'Q3 2026'
          },
          operationsIntelligence: {
            status: 'planned',
            eta: 'Q1 2027'
          },
          marketIntelligence: {
            status: 'planned',
            eta: 'Q3 2027'
          },
          strategicIntelligence: {
            status: 'planned',
            eta: '2028'
          }
        },
        recentActivity: [
          {
            type: 'decision_created',
            title: 'Customer Retention Strategy Q1',
            timestamp: '2 hours ago',
            status: 'active'
          },
          {
            type: 'analysis_completed',
            title: 'Churn Prediction Analysis',
            timestamp: '4 hours ago',
            status: 'completed'
          },
          {
            type: 'integration_sync',
            title: 'Salesforce data synchronized',
            timestamp: '6 hours ago',
            status: 'success'
          },
          {
            type: 'insight_generated',
            title: 'High-risk customer identified',
            timestamp: '8 hours ago',
            status: 'alert'
          }
        ],
        keyMetrics: {
          churnPredictionAccuracy: 0.94,
          healthScoreAverage: 0.78,
          expansionOpportunities: 23,
          riskAlerts: 7
        }
      });
      setLoading(false);
    }, 1000);
  }, []);

  const intelligenceModules = [
    {
      id: 'customer',
      title: 'Customer Intelligence',
      description: 'Predict churn, optimize retention, and maximize customer lifetime value',
      icon: Users,
      status: 'active',
      accuracy: 0.94,
      insights: 342,
      link: '/customer-intelligence'
    },
    {
      id: 'product',
      title: 'Product Intelligence',
      description: 'Understand feature adoption, optimize product roadmap, and drive engagement',
      icon: Target,
      status: 'coming_soon',
      eta: 'Q2 2026',
      link: null
    },
    {
      id: 'financial',
      title: 'Financial Intelligence',
      description: 'Forecast revenue, optimize pricing, and analyze financial performance',
      icon: TrendingUp,
      status: 'coming_soon',
      eta: 'Q3 2026',
      link: null
    },
    {
      id: 'operations',
      title: 'Operations Intelligence',
      description: 'Optimize processes, allocate resources, and improve operational efficiency',
      icon: BarChart3,
      status: 'planned',
      eta: 'Q1 2027',
      link: null
    },
    {
      id: 'market',
      title: 'Market Intelligence',
      description: 'Analyze competition, identify opportunities, and track market trends',
      icon: Shield,
      status: 'planned',
      eta: 'Q3 2027',
      link: null
    },
    {
      id: 'strategic',
      title: 'Strategic Intelligence',
      description: 'Plan long-term strategy, evaluate M&A opportunities, and drive transformation',
      icon: Brain,
      status: 'planned',
      eta: '2028',
      link: null
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-500/20';
      case 'coming_soon': return 'text-blue-400 bg-blue-500/20';
      case 'planned': return 'text-gray-400 bg-gray-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'decision_created': return <Plus className="h-4 w-4 text-blue-400" />;
      case 'analysis_completed': return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'integration_sync': return <Database className="h-4 w-4 text-purple-400" />;
      case 'insight_generated': return <AlertTriangle className="h-4 w-4 text-yellow-400" />;
      default: return <Activity className="h-4 w-4 text-gray-400" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="neural-text text-2xl font-bold mb-4">Loading Intelligence Dashboard...</div>
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
                <Link to="/dashboard" className="text-blue-400 border-b-2 border-blue-400 pb-1">Dashboard</Link>
                <Link to="/pre-decision" className="text-gray-300 hover:text-blue-400 transition-colors">Pre-Decision</Link>
                <Link to="/decision-canvas" className="text-gray-300 hover:text-blue-400 transition-colors">Decision Canvas</Link>
                <Link to="/post-decision" className="text-gray-300 hover:text-blue-400 transition-colors">Post-Decision</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold mb-2">Intelligence Dashboard</h1>
          <p className="text-gray-400">Monitor your decision intelligence ecosystem and track performance across all modules.</p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="neural-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="neural-border rounded-lg p-3">
                <Brain className="h-6 w-6 text-blue-400" />
              </div>
              <span className="text-2xl font-bold neural-text">{dashboardData?.totalDecisions}</span>
            </div>
            <h3 className="font-semibold mb-1">Total Decisions</h3>
            <p className="text-sm text-gray-400">Across all phases</p>
          </div>

          <div className="neural-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="neural-border rounded-lg p-3">
                <Activity className="h-6 w-6 text-green-400" />
              </div>
              <span className="text-2xl font-bold neural-text">{dashboardData?.activeDecisions}</span>
            </div>
            <h3 className="font-semibold mb-1">Active Decisions</h3>
            <p className="text-sm text-gray-400">Currently in progress</p>
          </div>

          <div className="neural-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="neural-border rounded-lg p-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>
              <span className="text-2xl font-bold neural-text">{(dashboardData?.successRate * 100).toFixed(0)}%</span>
            </div>
            <h3 className="font-semibold mb-1">Success Rate</h3>
            <p className="text-sm text-gray-400">Decision outcomes</p>
          </div>

          <div className="neural-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="neural-border rounded-lg p-3">
                <Zap className="h-6 w-6 text-purple-400" />
              </div>
              <span className="text-2xl font-bold neural-text">{dashboardData?.keyMetrics?.churnPredictionAccuracy * 100}%</span>
            </div>
            <h3 className="font-semibold mb-1">AI Accuracy</h3>
            <p className="text-sm text-gray-400">Churn prediction</p>
          </div>
        </motion.div>

        {/* Intelligence Modules */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Intelligence Modules</h2>
            <Link 
              to="/customer-intelligence" 
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
            >
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {intelligenceModules.map((module, index) => {
              const Icon = module.icon;
              return (
                <motion.div
                  key={module.id}
                  className={`neural-border rounded-xl p-6 transition-all ${
                    module.status === 'active' ? 'hover:neural-glow cursor-pointer' : 'opacity-75'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  whileHover={module.status === 'active' ? { scale: 1.02 } : {}}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="neural-border rounded-lg p-3">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(module.status)}`}>
                      {module.status === 'active' ? 'Active' : module.eta}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2">{module.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{module.description}</p>
                  
                  {module.status === 'active' ? (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Accuracy</span>
                        <span className="text-green-400">{(module.accuracy * 100).toFixed(0)}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Insights Generated</span>
                        <span className="text-blue-400">{module.insights}</span>
                      </div>
                      <Link 
                        to={module.link}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm mt-3"
                      >
                        View Details <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <Clock className="h-8 w-8 text-gray-500 mx-auto mb-2" />
                      <p className="text-gray-500 text-sm">Coming Soon</p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Recent Activity & Decision Workflow */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <motion.div 
            className="neural-border rounded-xl p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="font-semibold text-lg mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {dashboardData?.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white">{activity.title}</p>
                    <p className="text-xs text-gray-400">{activity.timestamp}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activity.status === 'success' ? 'text-green-400 bg-green-500/20' :
                    activity.status === 'alert' ? 'text-yellow-400 bg-yellow-500/20' :
                    activity.status === 'active' ? 'text-blue-400 bg-blue-500/20' :
                    'text-gray-400 bg-gray-500/20'
                  }`}>
                    {activity.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Decision Workflow */}
          <motion.div 
            className="neural-border rounded-xl p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-semibold text-lg mb-6">Decision Workflow</h3>
            <div className="space-y-4">
              <Link 
                to="/pre-decision" 
                className="flex items-center justify-between p-4 neural-border rounded-lg hover:neural-glow transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <div className="neural-border rounded-lg p-2">
                    <Brain className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Pre-Decision Workspace</h4>
                    <p className="text-sm text-gray-400">Evidence gathering & analysis</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </Link>

              <Link 
                to="/decision-canvas" 
                className="flex items-center justify-between p-4 neural-border rounded-lg hover:neural-glow transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <div className="neural-border rounded-lg p-2">
                    <Target className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Decision Canvas</h4>
                    <p className="text-sm text-gray-400">Collaborative decision-making</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </Link>

              <Link 
                to="/post-decision" 
                className="flex items-center justify-between p-4 neural-border rounded-lg hover:neural-glow transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <div className="neural-border rounded-lg p-2">
                    <BarChart3 className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Post-Decision Workspace</h4>
                    <p className="text-sm text-gray-400">Execution & outcome tracking</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="font-semibold text-lg mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/pre-decision" 
              className="neural-border rounded-xl p-6 hover:neural-glow transition-all group"
            >
              <div className="flex items-center space-x-4">
                <div className="neural-border rounded-lg p-3">
                  <Plus className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Create New Decision</h4>
                  <p className="text-sm text-gray-400">Start a new decision process</p>
                </div>
              </div>
            </Link>

            <Link 
              to="/customer-intelligence" 
              className="neural-border rounded-xl p-6 hover:neural-glow transition-all group"
            >
              <div className="flex items-center space-x-4">
                <div className="neural-border rounded-lg p-3">
                  <Users className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Customer Analysis</h4>
                  <p className="text-sm text-gray-400">Run churn prediction analysis</p>
                </div>
              </div>
            </Link>

            <Link 
              to="/decision-canvas" 
              className="neural-border rounded-xl p-6 hover:neural-glow transition-all group"
            >
              <div className="flex items-center space-x-4">
                <div className="neural-border rounded-lg p-3">
                  <Settings className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Configure Integrations</h4>
                  <p className="text-sm text-gray-400">Manage external connections</p>
                </div>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;



