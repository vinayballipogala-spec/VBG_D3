import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Database, 
  Zap, 
  Brain, 
  Target, 
  TrendingUp, 
  RefreshCw,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Clock,
  Activity,
  BarChart3,
  Settings,
  MessageCircle,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

const DemoFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [demoData, setDemoData] = useState(null);

  const steps = [
    {
      id: 'signup',
      title: 'Client Signup',
      description: 'New client signs up for DecisionIntelligence OS',
      icon: Users,
      color: 'blue',
      duration: 3000
    },
    {
      id: 'data_integration',
      title: 'Data Integration',
      description: 'Airbyte connects CRM, payments, and external APIs',
      icon: Database,
      color: 'green',
      duration: 4000
    },
    {
      id: 'causal_analysis',
      title: 'Causal Analysis',
      description: 'DoWhy/CausalNex analyzes customer data for insights',
      icon: Brain,
      color: 'purple',
      duration: 3500
    },
    {
      id: 'decision_making',
      title: 'Decision Making',
      description: 'AI recommendations + human collaboration',
      icon: Target,
      color: 'yellow',
      duration: 4000
    },
    {
      id: 'implementation',
      title: 'Implementation',
      description: 'Decisions executed and tracked in real-time',
      icon: Zap,
      color: 'red',
      duration: 3000
    },
    {
      id: 'outcome_tracking',
      title: 'Outcome Tracking',
      description: 'Results measured and analyzed',
      icon: BarChart3,
      color: 'indigo',
      duration: 3500
    },
    {
      id: 'model_retraining',
      title: 'Model Retraining',
      description: 'AI learns from decision outcomes',
      icon: RefreshCw,
      color: 'pink',
      duration: 3000
    }
  ];

  useEffect(() => {
    // Initialize demo data
    setDemoData({
      client: {
        name: 'TechCorp Solutions',
        industry: 'B2B SaaS',
        employees: 150,
        arr: 2500000,
        signupDate: '2025-01-15'
      },
      integrations: {
        salesforce: { status: 'connected', records: 1247, lastSync: '2 min ago' },
        stripe: { status: 'connected', records: 3421, lastSync: '1 min ago' },
        hubspot: { status: 'connected', records: 892, lastSync: '3 min ago' },
        crunchbase: { status: 'connected', records: 156, lastSync: '5 min ago' }
      },
      causalInsights: [
        { factor: 'Product Usage', impact: 0.73, confidence: 0.89 },
        { factor: 'Support Tickets', impact: 0.68, confidence: 0.82 },
        { factor: 'Payment History', impact: 0.82, confidence: 0.91 }
      ],
      decisions: [
        { id: 1, title: 'Customer Retention Strategy', status: 'implemented', outcome: 'success' },
        { id: 2, title: 'Product Feature Prioritization', status: 'in_progress', outcome: null },
        { id: 3, title: 'Pricing Optimization', status: 'planned', outcome: null }
      ],
      outcomes: {
        churnReduction: 23,
        revenueIncrease: 15,
        customerSatisfaction: 8
      },
      modelPerformance: {
        accuracy: 94.2,
        improvement: 2.1,
        lastRetrained: '2025-01-18'
      }
    });
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, steps[currentStep]?.duration || 3000);
      return () => clearTimeout(timer);
    }
  }, [isPlaying, currentStep, steps]);

  const getStepColor = (color) => {
    const colors = {
      blue: 'text-blue-400 bg-blue-500/20',
      green: 'text-green-400 bg-green-500/20',
      purple: 'text-purple-400 bg-purple-500/20',
      yellow: 'text-yellow-400 bg-yellow-500/20',
      red: 'text-red-400 bg-red-500/20',
      indigo: 'text-indigo-400 bg-indigo-500/20',
      pink: 'text-pink-400 bg-pink-500/20'
    };
    return colors[color] || colors.blue;
  };

  const renderStepContent = () => {
    const step = steps[currentStep];
    if (!step || !demoData) return null;

    switch (step.id) {
      case 'signup':
        return (
          <div className="space-y-6">
            <div className="neural-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">New Client Onboarding</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-400">Company</label>
                  <div className="text-lg font-semibold">{demoData.client.name}</div>
                </div>
                <div>
                  <label className="text-sm text-gray-400">Industry</label>
                  <div className="text-lg font-semibold">{demoData.client.industry}</div>
                </div>
                <div>
                  <label className="text-sm text-gray-400">ARR</label>
                  <div className="text-lg font-semibold">${demoData.client.arr.toLocaleString()}</div>
                </div>
                <div>
                  <label className="text-sm text-gray-400">Employees</label>
                  <div className="text-lg font-semibold">{demoData.client.employees}</div>
                </div>
              </div>
            </div>
            <div className="neural-border rounded-xl p-6">
              <h4 className="font-semibold mb-3">Onboarding Checklist</h4>
              <div className="space-y-2">
                {['Account Setup', 'Data Access Permissions', 'Integration Configuration', 'Team Training'].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'data_integration':
        return (
          <div className="space-y-6">
            <div className="neural-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Data Integration Status</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(demoData.integrations).map(([key, integration]) => (
                  <div key={key} className="neural-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold capitalize">{key}</h4>
                      <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                        {integration.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {integration.records.toLocaleString()} records
                    </div>
                    <div className="text-xs text-gray-500">
                      Last sync: {integration.lastSync}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="neural-border rounded-xl p-6">
              <h4 className="font-semibold mb-3">Data Flow Visualization</h4>
              <div className="flex items-center justify-between">
                {['CRM', 'Payments', 'Support', 'External APIs'].map((source, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-12 h-12 neural-border rounded-lg flex items-center justify-center mb-2">
                      <Database className="h-6 w-6 text-blue-400" />
                    </div>
                    <span className="text-sm text-gray-400">{source}</span>
                    {index < 3 && <ArrowRight className="h-4 w-4 text-gray-500 mx-2" />}
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <div className="neural-border rounded-lg p-3 inline-block">
                  <span className="text-blue-400 font-semibold">Airbyte Orchestration</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'causal_analysis':
        return (
          <div className="space-y-6">
            <div className="neural-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Causal Analysis Results</h3>
              <div className="space-y-4">
                {demoData.causalInsights.map((insight, index) => (
                  <div key={index} className="neural-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{insight.factor}</h4>
                      <span className="text-sm text-blue-400">
                        {(insight.impact * 100).toFixed(0)}% impact
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${insight.impact * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-400">
                      Confidence: {(insight.confidence * 100).toFixed(0)}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="neural-border rounded-xl p-6">
              <h4 className="font-semibold mb-3">AI Engine Status</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400">DoWhy</div>
                  <div className="text-sm text-gray-400">Causal Inference</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">CausalNex</div>
                  <div className="text-sm text-gray-400">Graph Analysis</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">PyWhy</div>
                  <div className="text-sm text-gray-400">Validation</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'decision_making':
        return (
          <div className="space-y-6">
            <div className="neural-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Decision Canvas</h3>
              <div className="space-y-4">
                {demoData.decisions.map((decision, index) => (
                  <div key={decision.id} className="neural-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{decision.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        decision.status === 'implemented' ? 'bg-green-500/20 text-green-400' :
                        decision.status === 'in_progress' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {decision.status}
                      </span>
                    </div>
                    {decision.outcome && (
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-sm text-gray-300">Outcome: {decision.outcome}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="neural-border rounded-xl p-6">
              <h4 className="font-semibold mb-3">AI Recommendations</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Brain className="h-5 w-5 text-purple-400 mt-1" />
                  <div>
                    <div className="font-medium">Implement proactive customer health monitoring</div>
                    <div className="text-sm text-gray-400">Confidence: 89%</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Brain className="h-5 w-5 text-purple-400 mt-1" />
                  <div>
                    <div className="font-medium">Launch personalized retention campaigns</div>
                    <div className="text-sm text-gray-400">Confidence: 82%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'implementation':
        return (
          <div className="space-y-6">
            <div className="neural-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Implementation Tracking</h3>
              <div className="space-y-4">
                <div className="neural-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Customer Health Monitoring</h4>
                    <span className="text-green-400 text-sm">✓ Completed</span>
                  </div>
                  <div className="text-sm text-gray-400">Deployed proactive monitoring dashboard</div>
                </div>
                <div className="neural-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Retention Campaigns</h4>
                    <span className="text-yellow-400 text-sm">In Progress</span>
                  </div>
                  <div className="text-sm text-gray-400">Rolling out to high-risk customers</div>
                </div>
                <div className="neural-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Team Training</h4>
                    <span className="text-gray-400 text-sm">Scheduled</span>
                  </div>
                  <div className="text-sm text-gray-400">Training program starts next week</div>
                </div>
              </div>
            </div>
            <div className="neural-border rounded-xl p-6">
              <h4 className="font-semibold mb-3">Real-time Execution</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Activity className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-gray-300">Monitoring 1,247 customer accounts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Activity className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-gray-300">Sending 23 retention emails</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Activity className="h-4 w-4 text-purple-400" />
                  <span className="text-sm text-gray-300">Updating 156 health scores</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'outcome_tracking':
        return (
          <div className="space-y-6">
            <div className="neural-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Outcome Analysis</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="neural-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{demoData.outcomes.churnReduction}%</div>
                  <div className="text-sm text-gray-400">Churn Reduction</div>
                </div>
                <div className="neural-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">{demoData.outcomes.revenueIncrease}%</div>
                  <div className="text-sm text-gray-400">Revenue Increase</div>
                </div>
                <div className="neural-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">{demoData.outcomes.customerSatisfaction}%</div>
                  <div className="text-sm text-gray-400">Satisfaction Boost</div>
                </div>
              </div>
            </div>
            <div className="neural-border rounded-xl p-6">
              <h4 className="font-semibold mb-3">Success Metrics</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Customer Retention Rate</span>
                  <span className="text-green-400 font-semibold">87% → 94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Average Health Score</span>
                  <span className="text-blue-400 font-semibold">72% → 80%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Support Ticket Volume</span>
                  <span className="text-red-400 font-semibold">-31%</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'model_retraining':
        return (
          <div className="space-y-6">
            <div className="neural-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Model Performance</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="neural-border rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">{demoData.modelPerformance.accuracy}%</div>
                  <div className="text-sm text-gray-400">Current Accuracy</div>
                </div>
                <div className="neural-border rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400">+{demoData.modelPerformance.improvement}%</div>
                  <div className="text-sm text-gray-400">Improvement</div>
                </div>
              </div>
            </div>
            <div className="neural-border rounded-xl p-6">
              <h4 className="font-semibold mb-3">Learning Loop</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <RefreshCw className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Incorporating 1,247 new decision outcomes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <RefreshCw className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">Updating causal relationships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <RefreshCw className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">Refining prediction models</span>
                </div>
              </div>
            </div>
            <div className="neural-border rounded-xl p-6">
              <h4 className="font-semibold mb-3">Next Cycle Predictions</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Expected Accuracy</span>
                  <span className="text-green-400 font-semibold">96.3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">New Insights</span>
                  <span className="text-blue-400 font-semibold">12 factors</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Retraining Date</span>
                  <span className="text-purple-400 font-semibold">Jan 25, 2025</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-black/80 backdrop-blur-sm border-b border-blue-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="neural-text text-xl font-bold">DecisionIntelligence OS - Demo Flow</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>
              <button
                onClick={() => setCurrentStep(0)}
                className="flex items-center space-x-2 border border-gray-600 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Reset</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;
              
              return (
                <div key={step.id} className="flex flex-col items-center">
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      isActive ? 'neural-glow' : ''
                    } ${isCompleted ? 'bg-green-500/20' : 'neural-border'}`}
                    animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                  >
                    <Icon className={`h-6 w-6 ${
                      isActive ? 'text-white' : 
                      isCompleted ? 'text-green-400' : 'text-gray-400'
                    }`} />
                  </motion.div>
                  <div className="mt-2 text-center">
                    <div className={`text-sm font-medium ${
                      isActive ? 'text-white' : 
                      isCompleted ? 'text-green-400' : 'text-gray-400'
                    }`}>
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {step.duration / 1000}s
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-6 left-1/2 w-full h-0.5 bg-gray-700 -z-10">
                      <motion.div
                        className="h-full bg-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: isCompleted ? '100%' : isActive ? '50%' : '0%' }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Current Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="neural-border rounded-xl p-8"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className={`neural-border rounded-lg p-3 ${getStepColor(steps[currentStep]?.color)}`}>
                {(() => {
                  const Icon = steps[currentStep]?.icon;
                  return Icon ? <Icon className="h-8 w-8" /> : null;
                })()}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{steps[currentStep]?.title}</h2>
                <p className="text-gray-400">{steps[currentStep]?.description}</p>
              </div>
            </div>
            
            {renderStepContent()}
          </motion.div>
        </AnimatePresence>

        {/* Technical Architecture Overview */}
        <div className="mt-8 neural-border rounded-xl p-8">
          <h3 className="text-xl font-bold mb-6">Technical Architecture Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="neural-border rounded-lg p-4">
              <h4 className="font-semibold mb-3">Data Layer</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Database className="h-4 w-4 text-blue-400" />
                  <span>Airbyte Orchestration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Database className="h-4 w-4 text-green-400" />
                  <span>PostgreSQL Database</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Database className="h-4 w-4 text-purple-400" />
                  <span>Redis Cache</span>
                </div>
              </div>
            </div>
            
            <div className="neural-border rounded-lg p-4">
              <h4 className="font-semibold mb-3">AI/ML Layer</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Brain className="h-4 w-4 text-blue-400" />
                  <span>DoWhy Causal Inference</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Brain className="h-4 w-4 text-green-400" />
                  <span>CausalNex Graph Analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Brain className="h-4 w-4 text-purple-400" />
                  <span>XGBoost Predictions</span>
                </div>
              </div>
            </div>
            
            <div className="neural-border rounded-lg p-4">
              <h4 className="font-semibold mb-3">Integration Layer</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-blue-400" />
                  <span>5000+ API Connections</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-green-400" />
                  <span>Real-time Sync</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-purple-400" />
                  <span>Event-driven Updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoFlow;



