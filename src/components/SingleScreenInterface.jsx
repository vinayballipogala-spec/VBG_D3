import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Database, 
  Brain, 
  Target, 
  BarChart3,
  Settings,
  MessageCircle,
  Activity,
  Zap,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  RefreshCw,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

const SingleScreenInterface = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [aiChatMessages, setAiChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isDemoRunning, setIsDemoRunning] = useState(false);

  const leftNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'customers', label: 'Customer Intelligence', icon: Users },
    { id: 'integrations', label: 'Data Integrations', icon: Database },
    { id: 'decisions', label: 'Decision Canvas', icon: Target },
    { id: 'analytics', label: 'Causal Analytics', icon: Brain },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const demoData = {
    dashboard: {
      metrics: [
        { label: 'Total Customers', value: '1,247', change: '+12%', icon: Users, color: 'blue' },
        { label: 'Active Decisions', value: '23', change: '+5', icon: Target, color: 'green' },
        { label: 'AI Accuracy', value: '94.2%', change: '+2.1%', icon: Brain, color: 'purple' },
        { label: 'Revenue Impact', value: '$2.3M', change: '+15%', icon: TrendingUp, color: 'yellow' }
      ],
      recentActivity: [
        { type: 'decision', title: 'Customer Retention Strategy', status: 'completed', time: '2 hours ago' },
        { type: 'analysis', title: 'Churn Prediction Analysis', status: 'completed', time: '4 hours ago' },
        { type: 'integration', title: 'Salesforce sync completed', status: 'success', time: '6 hours ago' },
        { type: 'alert', title: 'High-risk customer identified', status: 'warning', time: '8 hours ago' }
      ]
    },
    customers: {
      highRisk: [
        { name: 'TechCorp Solutions', risk: 87, arr: 125000, health: 34 },
        { name: 'DataFlow Inc', risk: 82, arr: 89000, health: 41 },
        { name: 'CloudTech Ltd', risk: 79, arr: 156000, health: 38 }
      ],
      insights: [
        { factor: 'Product Usage', impact: 0.73, confidence: 0.89 },
        { factor: 'Support Tickets', impact: 0.68, confidence: 0.82 },
        { factor: 'Payment History', impact: 0.82, confidence: 0.91 }
      ]
    },
    integrations: {
      status: [
        { name: 'Salesforce', status: 'connected', records: 1247, lastSync: '2 min ago' },
        { name: 'Stripe', status: 'connected', records: 3421, lastSync: '1 min ago' },
        { name: 'HubSpot', status: 'connected', records: 892, lastSync: '3 min ago' },
        { name: 'Crunchbase', status: 'connected', records: 156, lastSync: '5 min ago' }
      ]
    },
    decisions: {
      active: [
        { id: 1, title: 'Customer Retention Strategy', status: 'implemented', outcome: 'success' },
        { id: 2, title: 'Product Feature Prioritization', status: 'in_progress', outcome: null },
        { id: 3, title: 'Pricing Optimization', status: 'planned', outcome: null }
      ]
    },
    analytics: {
      causalInsights: [
        { factor: 'Product Usage Frequency', impact: 'High', confidence: 0.91, causalStrength: 0.78 },
        { factor: 'Support Ticket Volume', impact: 'High', confidence: 0.89, causalStrength: 0.73 },
        { factor: 'Payment History', impact: 'Medium', confidence: 0.82, causalStrength: 0.65 }
      ]
    }
  };

  useEffect(() => {
    // Initialize AI chat with welcome message
    setAiChatMessages([
      {
        id: 1,
        type: 'ai',
        message: 'Hello! I\'m your Decision Intelligence AI assistant. I can help you analyze customer data, make decisions, and track outcomes. What would you like to explore?',
        timestamp: new Date()
      }
    ]);
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: Date.now(),
        type: 'user',
        message: newMessage,
        timestamp: new Date()
      };
      
      setAiChatMessages(prev => [...prev, userMessage]);
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: Date.now() + 1,
          type: 'ai',
          message: `Based on your query about "${newMessage}", I can see that our causal analysis shows strong relationships between customer behavior and outcomes. Would you like me to dive deeper into any specific aspect?`,
          timestamp: new Date()
        };
        setAiChatMessages(prev => [...prev, aiResponse]);
      }, 1000);
      
      setNewMessage('');
    }
  };

  const renderContent = () => {
    const data = demoData[activeTab];
    if (!data) return null;

    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={index}
                    className="neural-border rounded-xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="neural-border rounded-lg p-3">
                        <Icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <span className="text-sm text-green-400">{metric.change}</span>
                    </div>
                    <div className="text-2xl font-bold neural-text">{metric.value}</div>
                    <div className="text-sm text-gray-400">{metric.label}</div>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="neural-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {data.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="neural-border rounded-lg p-2">
                      {activity.type === 'decision' && <Target className="h-5 w-5 text-blue-400" />}
                      {activity.type === 'analysis' && <Brain className="h-5 w-5 text-purple-400" />}
                      {activity.type === 'integration' && <Database className="h-5 w-5 text-green-400" />}
                      {activity.type === 'alert' && <AlertTriangle className="h-5 w-5 text-yellow-400" />}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{activity.title}</div>
                      <div className="text-sm text-gray-400">{activity.time}</div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activity.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      activity.status === 'success' ? 'bg-green-500/20 text-green-400' :
                      activity.status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {activity.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'customers':
        return (
          <div className="space-y-6">
            <div className="neural-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">High-Risk Customers</h3>
              <div className="space-y-4">
                {data.highRisk.map((customer, index) => (
                  <div key={index} className="neural-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{customer.name}</h4>
                      <span className="text-red-400 font-bold">{customer.risk}% risk</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">ARR: </span>
                        <span className="text-green-400">${customer.arr.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Health: </span>
                        <span className="text-yellow-400">{customer.health}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="neural-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">Causal Insights</h3>
              <div className="space-y-4">
                {data.insights.map((insight, index) => (
                  <div key={index} className="neural-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{insight.factor}</h4>
                      <span className="text-blue-400">{(insight.impact * 100).toFixed(0)}% impact</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${insight.impact * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      Confidence: {(insight.confidence * 100).toFixed(0)}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'integrations':
        return (
          <div className="space-y-6">
            <div className="neural-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">Integration Status</h3>
              <div className="space-y-4">
                {data.status.map((integration, index) => (
                  <div key={index} className="neural-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{integration.name}</h4>
                      <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                        {integration.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Records: </span>
                        <span className="text-blue-400">{integration.records.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Last Sync: </span>
                        <span className="text-gray-300">{integration.lastSync}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="neural-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">Data Flow Visualization</h3>
              <div className="flex items-center justify-between">
                {['CRM', 'Payments', 'Support', 'External APIs'].map((source, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-12 h-12 neural-border rounded-lg flex items-center justify-center mb-2">
                      <Database className="h-6 w-6 text-blue-400" />
                    </div>
                    <span className="text-sm text-gray-400">{source}</span>
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

      case 'decisions':
        return (
          <div className="space-y-6">
            <div className="neural-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">Active Decisions</h3>
              <div className="space-y-4">
                {data.active.map((decision, index) => (
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
          </div>
        );

      case 'analytics':
        return (
          <div className="space-y-6">
            <div className="neural-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">Causal Analysis Results</h3>
              <div className="space-y-4">
                {data.causalInsights.map((insight, index) => (
                  <div key={index} className="neural-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{insight.factor}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        insight.impact === 'High' ? 'bg-red-500/20 text-red-400' :
                        insight.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {insight.impact} Impact
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Confidence</span>
                        <span className="text-blue-400">{(insight.confidence * 100).toFixed(0)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Causal Strength</span>
                        <span className="text-purple-400">{(insight.causalStrength * 100).toFixed(0)}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <div className="neural-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">System Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Auto-sync Integrations</span>
                  <button className="w-12 h-6 bg-blue-600 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Real-time Alerts</span>
                  <button className="w-12 h-6 bg-blue-600 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Model Auto-retraining</span>
                  <button className="w-12 h-6 bg-blue-600 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </button>
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
    <div className="h-screen bg-black text-white flex">
      {/* Left Navigation */}
      <div className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-800">
          <h1 className="neural-text text-lg font-bold">DecisionIntelligence OS</h1>
        </div>
        
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {leftNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    activeTab === item.id 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>
        
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>System Online</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-semibold capitalize">{activeTab}</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Activity className="h-4 w-4" />
              <span>Real-time updates</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDemoRunning(!isDemoRunning)}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              {isDemoRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              <span>{isDemoRunning ? 'Pause Demo' : 'Start Demo'}</span>
            </button>
            <button className="flex items-center space-x-2 border border-gray-600 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors">
              <RefreshCw className="h-4 w-4" />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          <div className="p-6">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Right AI Chat Panel */}
      <div className="w-80 bg-gray-900 border-l border-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <MessageCircle className="h-5 w-5 text-blue-400" />
            <h3 className="font-semibold">AI Assistant</h3>
          </div>
        </div>
        
        <div className="flex-1 overflow-auto p-4">
          <div className="space-y-4">
            {aiChatMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-300'
                  }`}
                >
                  <div className="text-sm">{message.message}</div>
                  <div className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-800">
          <div className="flex space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask AI assistant..."
              className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors"
            >
              <Zap className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleScreenInterface;



