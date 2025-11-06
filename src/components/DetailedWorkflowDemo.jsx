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
  RotateCcw,
  FileText,
  Code,
  Calendar,
  Info
} from 'lucide-react';

const DetailedWorkflowDemo = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedClient, setSelectedClient] = useState('techcorp');
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);

  const phases = [
    {
      id: 'client_onboarding',
      title: 'Client Onboarding & Setup',
      description: 'New client signs up, data access permissions, integration configuration',
      duration: 4000,
      color: 'blue'
    },
    {
      id: 'data_integration',
      title: 'Data Integration & Orchestration',
      description: 'Airbyte connects CRM, payments, support, external APIs to data warehouse',
      duration: 5000,
      color: 'green'
    },
    {
      id: 'causal_analysis',
      title: 'Causal Intelligence Engine',
      description: 'DoWhy/CausalNex analyzes customer data for root cause insights',
      duration: 4500,
      color: 'purple'
    },
    {
      id: 'decision_workspace',
      title: 'Decision Workspace & Collaboration',
      description: 'Human-AI collaboration for structured decision-making',
      duration: 4000,
      color: 'yellow'
    },
    {
      id: 'implementation',
      title: 'Decision Implementation & Tracking',
      description: 'Decisions executed, KPIs monitored, outcomes measured',
      duration: 3500,
      color: 'red'
    },
    {
      id: 'outcome_analysis',
      title: 'Outcome Analysis & Learning',
      description: 'Results analyzed, insights extracted, model performance evaluated',
      duration: 4000,
      color: 'indigo'
    },
    {
      id: 'model_retraining',
      title: 'Model Retraining & Optimization',
      description: 'AI learns from outcomes, models updated, accuracy improved',
      duration: 3500,
      color: 'pink'
    }
  ];

  const clientData = {
    techcorp: {
      name: 'TechCorp Solutions',
      industry: 'B2B SaaS',
      employees: 150,
      arr: 2500000,
      signupDate: '2025-01-15',
      dataSources: {
        salesforce: { records: 1247, lastSync: '2 min ago', status: 'connected' },
        stripe: { records: 3421, lastSync: '1 min ago', status: 'connected' },
        hubspot: { records: 892, lastSync: '3 min ago', status: 'connected' },
        zendesk: { records: 567, lastSync: '4 min ago', status: 'connected' },
        mixpanel: { records: 2341, lastSync: '1 min ago', status: 'connected' },
        crunchbase: { records: 156, lastSync: '5 min ago', status: 'connected' },
        clearbit: { records: 89, lastSync: '6 min ago', status: 'connected' }
      },
      decisions: [
        { id: 1, title: 'Customer Retention Strategy', status: 'implemented', outcome: 'success', impact: 23 },
        { id: 2, title: 'Product Feature Prioritization', status: 'in_progress', outcome: null, impact: null },
        { id: 3, title: 'Pricing Optimization', status: 'planned', outcome: null, impact: null }
      ],
      outcomes: {
        churnReduction: 23,
        revenueIncrease: 15,
        customerSatisfaction: 8,
        supportTicketReduction: 31
      }
    }
  };

  const technicalArchitecture = {
    dataLayer: {
      title: 'Data Layer',
      components: [
        { name: 'Airbyte', type: 'ETL', status: 'operational', description: '5000+ app integrations' },
        { name: 'PostgreSQL', type: 'Database', status: 'operational', description: 'Primary data warehouse' },
        { name: 'Redis', type: 'Cache', status: 'operational', description: 'Real-time data cache' },
        { name: 'S3', type: 'Storage', status: 'operational', description: 'Data lake storage' }
      ]
    },
    aiLayer: {
      title: 'AI/ML Layer',
      components: [
        { name: 'DoWhy', type: 'Causal Inference', status: 'operational', description: 'Root cause analysis' },
        { name: 'CausalNex', type: 'Graph Analysis', status: 'operational', description: 'Causal graph modeling' },
        { name: 'XGBoost', type: 'ML Model', status: 'operational', description: 'Churn prediction' },
        { name: 'PyWhy', type: 'Validation', status: 'operational', description: 'Causal validation' }
      ]
    },
    integrationLayer: {
      title: 'Integration Layer',
      components: [
        { name: 'REST APIs', type: 'API', status: 'operational', description: '5000+ app connections' },
        { name: 'Webhooks', type: 'Event', status: 'operational', description: 'Real-time updates' },
        { name: 'OAuth', type: 'Auth', status: 'operational', description: 'Secure authentication' },
        { name: 'Rate Limiting', type: 'Control', status: 'operational', description: 'API usage control' }
      ]
    }
  };

  const renderPhaseContent = () => {
    const phase = phases[currentPhase];
    const client = clientData[selectedClient];

    switch (phase.id) {
      case 'client_onboarding':
        return (
          <div className="space-y-6">
            <div className="neural-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Client Onboarding Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Client Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Company:</span>
                      <span className="text-white">{client.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Industry:</span>
                      <span className="text-white">{client.industry}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">ARR:</span>
                      <span className="text-white">${client.arr.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Employees:</span>
                      <span className="text-white">{client.employees}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Onboarding Checklist</h4>
                  <div className="space-y-2">
                    {['Account Setup', 'Data Access Permissions', 'Integration Configuration', 'Team Training', 'Security Review'].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-sm text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="neural-border rounded-xl p-6">
              <h4 className="font-semibold mb-3">Data Access Configuration</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(client.dataSources).map(([source, data]) => (
                  <div key={source} className="neural-border rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium capitalize text-sm">{source}</h5>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        data.status === 'connected' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        {data.status}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      {data.records.toLocaleString()} records
                    </div>
                    <div className="text-xs text-gray-500">
                      Last sync: {data.lastSync}
                    </div>
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
              <h3 className="text-xl font-bold mb-4">Data Integration Architecture</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Database className="h-6 w-6 text-blue-400" />
                    <span className="font-medium">Airbyte Orchestration</span>
                  </div>
                  <span className="text-sm text-green-400">Operational</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-3">Data Sources</h4>
                    <div className="space-y-2">
                      {Object.entries(client.dataSources).map(([source, data]) => (
                        <div key={source} className="flex items-center justify-between p-2 neural-border rounded">
                          <span className="text-sm capitalize">{source}</span>
                          <span className="text-xs text-gray-400">{data.records} records</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Data Flow</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="h-4 w-4 text-blue-400" />
                        <span className="text-sm">Raw Data Ingestion</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="h-4 w-4 text-green-400" />
                        <span className="text-sm">Data Transformation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="h-4 w-4 text-purple-400" />
                        <span className="text-sm">Data Warehouse Storage</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm">Real-time Updates</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="neural-border rounded-xl p-6">
              <h4 className="font-semibold mb-3">Integration Status</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(client.dataSources).map(([source, data]) => (
                  <div key={source} className="neural-border rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium capitalize text-sm">{source}</h5>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-400">
                      {data.records.toLocaleString()} records
                    </div>
                    <div className="text-xs text-gray-500">
                      Last sync: {data.lastSync}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'causal_analysis':
        return (
          <div className="space-y-6">
            <div className="neural-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Causal Intelligence Engine</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">AI Models</h4>
                  <div className="space-y-3">
                    {technicalArchitecture.aiLayer.components.map((component, index) => (
                      <div key={index} className="neural-border rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-medium">{component.name}</h5>
                          <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                            {component.status}
                          </span>
                        </div>
                        <div className="text-sm text-gray-400">{component.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Causal Insights</h4>
                  <div className="space-y-3">
                    <div className="neural-border rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium">Product Usage Frequency</h5>
                        <span className="text-red-400 text-sm">High Impact</span>
                      </div>
                      <div className="text-sm text-gray-400">Confidence: 91%</div>
                      <div className="text-sm text-gray-400">Causal Strength: 78%</div>
                    </div>
                    <div className="neural-border rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium">Support Ticket Volume</h5>
                        <span className="text-red-400 text-sm">High Impact</span>
                      </div>
                      <div className="text-sm text-gray-400">Confidence: 89%</div>
                      <div className="text-sm text-gray-400">Causal Strength: 73%</div>
                    </div>
                    <div className="neural-border rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium">Payment History</h5>
                        <span className="text-yellow-400 text-sm">Medium Impact</span>
                      </div>
                      <div className="text-sm text-gray-400">Confidence: 82%</div>
                      <div className="text-sm text-gray-400">Causal Strength: 65%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="neural-border rounded-xl p-6">
              <h4 className="font-semibold mb-3">Analysis Process</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Database className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-gray-300">Data ingestion from 7 sources</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Brain className="h-4 w-4 text-purple-400" />
                  <span className="text-sm text-gray-300">Causal graph construction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-gray-300">Hypothesis testing and validation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm text-gray-300">Impact quantification</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'decision_workspace':
        return (
          <div className="space-y-6">
            <div className="neural-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Decision Workspace</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Active Decisions</h4>
                  <div className="space-y-3">
                    {client.decisions.map((decision, index) => (
                      <div key={decision.id} className="neural-border rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-medium">{decision.title}</h5>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            decision.status === 'implemented' ? 'bg-green-500/20 text-green-400' :
                            decision.status === 'in_progress' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {decision.status}
                          </span>
                        </div>
                        {decision.outcome && (
                          <div className="text-sm text-gray-400">
                            Outcome: {decision.outcome} ({decision.impact}% impact)
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">AI Recommendations</h4>
                  <div className="space-y-3">
                    <div className="neural-border rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium">Proactive Health Monitoring</h5>
                        <span className="text-green-400 text-sm">89% confidence</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        Implement real-time customer health scoring
                      </div>
                    </div>
                    <div className="neural-border rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium">Retention Campaigns</h5>
                        <span className="text-green-400 text-sm">82% confidence</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        Launch personalized retention campaigns
                      </div>
                    </div>
                    <div className="neural-border rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium">Feature Optimization</h5>
                        <span className="text-green-400 text-sm">76% confidence</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        Optimize feature adoption strategies
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="neural-border rounded-xl p-6">
              <h4 className="font-semibold mb-3">Collaboration Tools</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="neural-border rounded-lg p-3 text-center">
                  <MessageCircle className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-sm font-medium">Slack Integration</div>
                  <div className="text-xs text-gray-400">Team notifications</div>
                </div>
                <div className="neural-border rounded-lg p-3 text-center">
                  <FileText className="h-6 w-6 text-green-400 mx-auto mb-2" />
                  <div className="text-sm font-medium">Google Docs</div>
                  <div className="text-xs text-gray-400">Document collaboration</div>
                </div>
                <div className="neural-border rounded-lg p-3 text-center">
                  <Calendar className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-sm font-medium">Meeting Scheduler</div>
                  <div className="text-xs text-gray-400">Decision meetings</div>
                </div>
                <div className="neural-border rounded-lg p-3 text-center">
                  <Users className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                  <div className="text-sm font-medium">Stakeholder Portal</div>
                  <div className="text-xs text-gray-400">Approval workflow</div>
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
                  <div className="text-sm text-gray-400 mb-2">
                    Deployed proactive monitoring dashboard with real-time alerts
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Customers Monitored:</span>
                      <span className="text-white ml-2">1,247</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Alerts Sent:</span>
                      <span className="text-white ml-2">23</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Response Time:</span>
                      <span className="text-white ml-2">&lt; 5 min</span>
                    </div>
                  </div>
                </div>
                
                <div className="neural-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Retention Campaigns</h4>
                    <span className="text-yellow-400 text-sm">In Progress</span>
                  </div>
                  <div className="text-sm text-gray-400 mb-2">
                    Rolling out personalized retention campaigns to high-risk customers
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Campaigns Launched:</span>
                      <span className="text-white ml-2">5</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Emails Sent:</span>
                      <span className="text-white ml-2">156</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Open Rate:</span>
                      <span className="text-white ml-2">67%</span>
                    </div>
                  </div>
                </div>
                
                <div className="neural-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Team Training</h4>
                    <span className="text-gray-400 text-sm">Scheduled</span>
                  </div>
                  <div className="text-sm text-gray-400 mb-2">
                    Training program for customer success team starts next week
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Team Members:</span>
                      <span className="text-white ml-2">12</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Training Hours:</span>
                      <span className="text-white ml-2">16</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Start Date:</span>
                      <span className="text-white ml-2">Jan 25</span>
                    </div>
                  </div>
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
                <div className="flex items-center space-x-3">
                  <Activity className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm text-gray-300">Processing 45 support tickets</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'outcome_analysis':
        return (
          <div className="space-y-6">
            <div className="neural-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Outcome Analysis</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="neural-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{client.outcomes.churnReduction}%</div>
                  <div className="text-sm text-gray-400">Churn Reduction</div>
                </div>
                <div className="neural-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">{client.outcomes.revenueIncrease}%</div>
                  <div className="text-sm text-gray-400">Revenue Increase</div>
                </div>
                <div className="neural-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">{client.outcomes.customerSatisfaction}%</div>
                  <div className="text-sm text-gray-400">Satisfaction Boost</div>
                </div>
                <div className="neural-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400">{client.outcomes.supportTicketReduction}%</div>
                  <div className="text-sm text-gray-400">Support Reduction</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
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
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Customer Satisfaction</span>
                      <span className="text-purple-400 font-semibold">8.2 → 8.9</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">ROI Analysis</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Implementation Cost</span>
                      <span className="text-gray-400">$15,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Revenue Impact</span>
                      <span className="text-green-400">$375,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Cost Savings</span>
                      <span className="text-blue-400">$45,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Total ROI</span>
                      <span className="text-yellow-400 font-semibold">2,800%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="neural-border rounded-xl p-6">
              <h4 className="font-semibold mb-3">Learning Insights</h4>
              <div className="space-y-3">
                <div className="neural-border rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium">Proactive Outreach Impact</h5>
                    <span className="text-green-400 text-sm">High</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Customers contacted within 24 hours of risk detection showed 67% higher retention
                  </div>
                </div>
                <div className="neural-border rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium">Feature Adoption Correlation</h5>
                    <span className="text-blue-400 text-sm">Medium</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Customers using 3+ features had 45% lower churn risk
                  </div>
                </div>
                <div className="neural-border rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium">Support Response Time</h5>
                    <span className="text-purple-400 text-sm">High</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Response time under 2 hours reduced churn by 23%
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'model_retraining':
        return (
          <div className="space-y-6">
            <div className="neural-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Model Retraining & Optimization</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Model Performance</h4>
                  <div className="space-y-3">
                    <div className="neural-border rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium">Churn Prediction Accuracy</h5>
                        <span className="text-green-400">94.2%</span>
                      </div>
                      <div className="text-sm text-gray-400">Previous: 92.1% (+2.1%)</div>
                    </div>
                    <div className="neural-border rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium">Health Score Accuracy</h5>
                        <span className="text-blue-400">91.7%</span>
                      </div>
                      <div className="text-sm text-gray-400">Previous: 89.3% (+2.4%)</div>
                    </div>
                    <div className="neural-border rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium">Revenue Prediction Accuracy</h5>
                        <span className="text-purple-400">88.9%</span>
                      </div>
                      <div className="text-sm text-gray-400">Previous: 86.2% (+2.7%)</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Retraining Process</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <RefreshCw className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Incorporating 1,247 new decision outcomes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RefreshCw className="h-4 w-4 text-blue-400" />
                      <span className="text-sm text-gray-300">Updating causal relationships</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RefreshCw className="h-4 w-4 text-purple-400" />
                      <span className="text-sm text-gray-300">Refining prediction models</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RefreshCw className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm text-gray-300">Validating model performance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="neural-border rounded-xl p-6">
              <h4 className="font-semibold mb-3">Next Cycle Predictions</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="neural-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">96.3%</div>
                  <div className="text-sm text-gray-400">Expected Accuracy</div>
                </div>
                <div className="neural-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">12</div>
                  <div className="text-sm text-gray-400">New Insights</div>
                </div>
                <div className="neural-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">Jan 25</div>
                  <div className="text-sm text-gray-400">Retraining Date</div>
                </div>
              </div>
            </div>

            <div className="neural-border rounded-xl p-6">
              <h4 className="font-semibold mb-3">Continuous Learning Loop</h4>
              <div className="space-y-3">
                <div className="neural-border rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium">Decision Outcome Tracking</h5>
                    <span className="text-green-400 text-sm">Active</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Every decision outcome is automatically tracked and fed into the learning system
                  </div>
                </div>
                <div className="neural-border rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium">Causal Relationship Updates</h5>
                    <span className="text-blue-400 text-sm">Active</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Causal relationships are continuously updated based on new evidence
                  </div>
                </div>
                <div className="neural-border rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium">Model Performance Monitoring</h5>
                    <span className="text-purple-400 text-sm">Active</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Model performance is monitored in real-time with automatic retraining triggers
                  </div>
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
              <h1 className="neural-text text-xl font-bold">DecisionIntelligence OS - Detailed Workflow</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
                className="flex items-center space-x-2 border border-gray-600 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Code className="h-4 w-4" />
                <span>{showTechnicalDetails ? 'Hide' : 'Show'} Technical Details</span>
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>
              <button
                onClick={() => setCurrentPhase(0)}
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
            {phases.map((phase, index) => {
              const isActive = index === currentPhase;
              const isCompleted = index < currentPhase;
              
              return (
                <div key={phase.id} className="flex flex-col items-center">
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      isActive ? 'neural-glow' : ''
                    } ${isCompleted ? 'bg-green-500/20' : 'neural-border'}`}
                    animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                  >
                    <span className={`text-sm font-bold ${
                      isActive ? 'text-white' : 
                      isCompleted ? 'text-green-400' : 'text-gray-400'
                    }`}>
                      {index + 1}
                    </span>
                  </motion.div>
                  <div className="mt-2 text-center">
                    <div className={`text-sm font-medium ${
                      isActive ? 'text-white' : 
                      isCompleted ? 'text-green-400' : 'text-gray-400'
                    }`}>
                      {phase.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {phase.duration / 1000}s
                    </div>
                  </div>
                  {index < phases.length - 1 && (
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

        {/* Current Phase Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="neural-border rounded-xl p-8"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className={`neural-border rounded-lg p-3 ${
                phases[currentPhase]?.color === 'blue' ? 'text-blue-400 bg-blue-500/20' :
                phases[currentPhase]?.color === 'green' ? 'text-green-400 bg-green-500/20' :
                phases[currentPhase]?.color === 'purple' ? 'text-purple-400 bg-purple-500/20' :
                phases[currentPhase]?.color === 'yellow' ? 'text-yellow-400 bg-yellow-500/20' :
                phases[currentPhase]?.color === 'red' ? 'text-red-400 bg-red-500/20' :
                phases[currentPhase]?.color === 'indigo' ? 'text-indigo-400 bg-indigo-500/20' :
                'text-pink-400 bg-pink-500/20'
              }`}>
                <span className="text-2xl font-bold">{currentPhase + 1}</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{phases[currentPhase]?.title}</h2>
                <p className="text-gray-400">{phases[currentPhase]?.description}</p>
              </div>
            </div>
            
            {renderPhaseContent()}
          </motion.div>
        </AnimatePresence>

        {/* Technical Architecture Overview */}
        {showTechnicalDetails && (
          <div className="mt-8 neural-border rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6">Technical Architecture Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(technicalArchitecture).map(([key, layer]) => (
                <div key={key} className="neural-border rounded-lg p-4">
                  <h4 className="font-semibold mb-3">{layer.title}</h4>
                  <div className="space-y-2">
                    {layer.components.map((component, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-medium">{component.name}</div>
                          <div className="text-xs text-gray-400">{component.description}</div>
                        </div>
                        <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                          {component.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailedWorkflowDemo;
