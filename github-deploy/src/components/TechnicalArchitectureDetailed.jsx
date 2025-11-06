import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Server, 
  Brain, 
  Users, 
  Zap, 
  Cloud,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  Cpu,
  Network,
  Shield,
  Code,
  FileText,
  Settings,
  BarChart3,
  Target,
  MessageCircle,
  RefreshCw,
  Play,
  Pause,
  RotateCcw,
  Eye,
  EyeOff,
  Layers,
  GitBranch,
  Lock,
  Key,
  Download,
  Upload,
  Filter,
  Search,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  ChevronRight,
  ChevronDown,
  Info,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  Clock,
  Activity,
  TrendingUp,
  DollarSign,
  UserCheck,
  Building,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Globe
} from 'lucide-react';

const TechnicalArchitectureDetailed = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDetails, setShowDetails] = useState(true);

  const technicalSteps = [
    {
      id: 'client_request',
      title: 'Client Request',
      description: 'User interacts with frontend interface',
      details: {
        frontend: 'React single-page app with left navigation',
        userAction: 'User clicks on Customer Intelligence tab',
        request: 'GET /api/customer-intelligence/churn-risk/123',
        headers: 'Authorization: Bearer JWT_TOKEN, Content-Type: application/json'
      },
      technologies: ['React', 'Axios', 'JWT'],
      duration: 2000
    },
    {
      id: 'api_gateway',
      title: 'API Gateway',
      description: 'Request routing, authentication, rate limiting',
      details: {
        service: 'Flask API Gateway',
        authentication: 'JWT token validation',
        rateLimit: '1000 requests/hour per user',
        routing: 'Route to appropriate microservice',
        logging: 'Request/response logging'
      },
      technologies: ['Flask', 'JWT', 'Redis', 'Nginx'],
      duration: 1500
    },
    {
      id: 'decision_engine',
      title: 'Decision Engine',
      description: 'Core business logic and workflow management',
      details: {
        service: 'Decision Engine Microservice',
        logic: 'Validate request, check permissions',
        workflow: 'Trigger causal analysis workflow',
        state: 'Update decision state in database',
        response: 'Return decision context to AI engine'
      },
      technologies: ['Python', 'Celery', 'PostgreSQL', 'Redis'],
      duration: 2000
    },
    {
      id: 'causal_ai',
      title: 'Causal AI Engine',
      description: 'DoWhy/CausalNex analysis and prediction',
      details: {
        service: 'Causal AI Microservice',
        dataQuery: 'SELECT * FROM customer_data WHERE account_id = 123',
        causalAnalysis: 'DoWhy causal inference on customer behavior',
        graphAnalysis: 'CausalNex graph construction and analysis',
        prediction: 'XGBoost churn prediction model',
        confidence: 'Calculate confidence scores and causal strength'
      },
      technologies: ['DoWhy', 'CausalNex', 'XGBoost', 'Pandas', 'NumPy'],
      duration: 3000
    },
    {
      id: 'data_warehouse',
      title: 'Data Warehouse',
      description: 'PostgreSQL database queries and data retrieval',
      details: {
        database: 'PostgreSQL 15',
        query: 'Complex JOIN across customer, usage, payment, support tables',
        indexing: 'Use indexes on account_id, date, feature_usage',
        caching: 'Redis cache for frequently accessed data',
        performance: 'Query optimization and execution plan'
      },
      technologies: ['PostgreSQL', 'Redis', 'SQLAlchemy', 'Psycopg2'],
      duration: 1500
    },
    {
      id: 'data_sources',
      title: 'Data Sources',
      description: 'External APIs and data integration',
      details: {
        airbyte: 'Airbyte ETL pipeline orchestration',
        sources: 'Salesforce, Stripe, HubSpot, Zendesk, Mixpanel',
        sync: 'Real-time sync every 5 minutes',
        transformation: 'Data cleaning, normalization, enrichment',
        storage: 'Store in PostgreSQL and S3 data lake'
      },
      technologies: ['Airbyte', 'Docker', 'Kubernetes', 'AWS S3'],
      duration: 2000
    },
    {
      id: 'model_serving',
      title: 'Model Serving',
      description: 'AI model inference and prediction serving',
      details: {
        service: 'Model Serving API',
        models: 'Load XGBoost, DoWhy, CausalNex models',
        inference: 'Real-time prediction on customer data',
        caching: 'Cache model predictions for 1 hour',
        monitoring: 'Model performance and drift monitoring'
      },
      technologies: ['FastAPI', 'MLflow', 'Docker', 'Kubernetes'],
      duration: 1500
    },
    {
      id: 'response_generation',
      title: 'Response Generation',
      description: 'Generate insights and recommendations',
      details: {
        service: 'Insight Generation Service',
        causalInsights: 'Extract causal relationships and factors',
        recommendations: 'Generate actionable recommendations',
        confidence: 'Calculate confidence scores',
        formatting: 'Format response for frontend consumption'
      },
      technologies: ['Python', 'Pandas', 'JSON', 'Template Engine'],
      duration: 1000
    },
    {
      id: 'response_delivery',
      title: 'Response Delivery',
      description: 'Send response back to frontend',
      details: {
        apiGateway: 'Format response and add metadata',
        headers: 'Set appropriate HTTP headers',
        status: 'HTTP 200 OK with JSON response',
        logging: 'Log response time and success',
        caching: 'Cache response for future requests'
      },
      technologies: ['Flask', 'JSON', 'HTTP', 'Redis'],
      duration: 1000
    },
    {
      id: 'frontend_update',
      title: 'Frontend Update',
      description: 'Update UI with new data and insights',
      details: {
        react: 'Update React state with new data',
        rendering: 'Re-render components with new insights',
        visualization: 'Update charts and graphs',
        notifications: 'Show success/error notifications',
        caching: 'Store data in React state and localStorage'
      },
      technologies: ['React', 'State Management', 'Chart.js', 'LocalStorage'],
      duration: 1000
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % technicalSteps.length);
      }, technicalSteps[currentStep]?.duration || 2000);
      return () => clearTimeout(timer);
    }
  }, [isPlaying, currentStep, technicalSteps]);

  const renderStepContent = () => {
    const step = technicalSteps[currentStep];
    if (!step) return null;

    return (
      <div className="space-y-6">
        <div className="neural-border rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">{step.title}</h3>
          <p className="text-gray-400 mb-6">{step.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Technical Details</h4>
              <div className="space-y-3">
                {Object.entries(step.details).map(([key, value], index) => (
                  <div key={index} className="neural-border rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</h5>
                    </div>
                    <div className="text-sm text-gray-400">{value}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Technologies Used</h4>
              <div className="space-y-2">
                {step.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Performance Metrics</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white">{step.duration}ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Memory Usage:</span>
                    <span className="text-white">~50MB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">CPU Usage:</span>
                    <span className="text-white">~15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSystemFlow = () => {
    return (
      <div className="neural-border rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4">End-to-End System Flow</h3>
        <div className="space-y-4">
          {technicalSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className={`flex items-center justify-between p-4 neural-border rounded-lg ${
                index === currentStep ? 'neural-glow' : ''
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 neural-border rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">{index + 1}</span>
                </div>
                <div>
                  <div className="font-medium">{step.title}</div>
                  <div className="text-sm text-gray-400">{step.description}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-blue-400">{step.duration}ms</span>
                {index < technicalSteps.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-gray-500" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  const renderArchitectureDiagram = () => {
    return (
      <div className="neural-border rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4">System Architecture Diagram</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend Layer */}
          <div className="space-y-4">
            <h4 className="font-semibold text-blue-400">Frontend Layer</h4>
            <div className="neural-border rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium">React App</span>
              </div>
              <div className="text-xs text-gray-400">
                Single-page app with left navigation, middle content, right AI chat
              </div>
            </div>
            <div className="neural-border rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <MessageCircle className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium">AI Chat Panel</span>
              </div>
              <div className="text-xs text-gray-400">
                Real-time AI assistant for decision support
              </div>
            </div>
          </div>

          {/* Backend Layer */}
          <div className="space-y-4">
            <h4 className="font-semibold text-green-400">Backend Layer</h4>
            <div className="neural-border rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Server className="h-4 w-4 text-green-400" />
                <span className="text-sm font-medium">API Gateway</span>
              </div>
              <div className="text-xs text-gray-400">
                Flask API with JWT auth, rate limiting, routing
              </div>
            </div>
            <div className="neural-border rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Target className="h-4 w-4 text-green-400" />
                <span className="text-sm font-medium">Decision Engine</span>
              </div>
              <div className="text-xs text-gray-400">
                Business logic, workflow management, state tracking
              </div>
            </div>
            <div className="neural-border rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Brain className="h-4 w-4 text-green-400" />
                <span className="text-sm font-medium">Causal AI</span>
              </div>
              <div className="text-xs text-gray-400">
                DoWhy, CausalNex, XGBoost analysis and predictions
              </div>
            </div>
          </div>

          {/* Data Layer */}
          <div className="space-y-4">
            <h4 className="font-semibold text-purple-400">Data Layer</h4>
            <div className="neural-border rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Database className="h-4 w-4 text-purple-400" />
                <span className="text-sm font-medium">Data Warehouse</span>
              </div>
              <div className="text-xs text-gray-400">
                PostgreSQL with indexes, caching, optimization
              </div>
            </div>
            <div className="neural-border rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Zap className="h-4 w-4 text-purple-400" />
                <span className="text-sm font-medium">ETL Pipeline</span>
              </div>
              <div className="text-xs text-gray-400">
                Airbyte with 5000+ integrations, real-time sync
              </div>
            </div>
            <div className="neural-border rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Cloud className="h-4 w-4 text-purple-400" />
                <span className="text-sm font-medium">Data Sources</span>
              </div>
              <div className="text-xs text-gray-400">
                Salesforce, Stripe, HubSpot, Zendesk, Mixpanel
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTechnicalSpecs = () => {
    return (
      <div className="neural-border rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="neural-border rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-blue-400">Frontend Stack</h4>
            <div className="space-y-2 text-sm">
              <div>React 18.2.0</div>
              <div>Vite 5.2.0</div>
              <div>Tailwind CSS 3.4.3</div>
              <div>Framer Motion 11.0.25</div>
              <div>Axios 1.6.8</div>
            </div>
          </div>
          
          <div className="neural-border rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-green-400">Backend Stack</h4>
            <div className="space-y-2 text-sm">
              <div>Flask 2.3.2</div>
              <div>PostgreSQL 15</div>
              <div>Redis 7.0</div>
              <div>Celery 5.3.0</div>
              <div>JWT Authentication</div>
            </div>
          </div>
          
          <div className="neural-border rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-purple-400">AI/ML Stack</h4>
            <div className="space-y-2 text-sm">
              <div>DoWhy 0.8.1</div>
              <div>CausalNex 0.12.0</div>
              <div>XGBoost 1.7.0</div>
              <div>Scikit-learn 1.3.0</div>
              <div>Pandas 2.0.0</div>
            </div>
          </div>
          
          <div className="neural-border rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-yellow-400">Data Stack</h4>
            <div className="space-y-2 text-sm">
              <div>Airbyte 0.50.0</div>
              <div>AWS S3</div>
              <div>Docker & Kubernetes</div>
              <div>Nginx Load Balancer</div>
              <div>5000+ API Integrations</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-black/80 backdrop-blur-sm border-b border-blue-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="neural-text text-xl font-bold">Technical Architecture - End-to-End</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center space-x-2 border border-gray-600 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors"
              >
                {showDetails ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span>{showDetails ? 'Hide' : 'Show'} Details</span>
              </button>
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
          <div className="flex items-center justify-between overflow-x-auto">
            {technicalSteps.map((step, index) => {
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;
              
              return (
                <div key={step.id} className="flex flex-col items-center min-w-0 flex-1">
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
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {step.duration}ms
                    </div>
                  </div>
                  {index < technicalSteps.length - 1 && (
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
        {showDetails && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="neural-border rounded-xl p-8 mb-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="neural-border rounded-lg p-3 text-blue-400 bg-blue-500/20">
                  <span className="text-2xl font-bold">{currentStep + 1}</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{technicalSteps[currentStep]?.title}</h2>
                  <p className="text-gray-400">{technicalSteps[currentStep]?.description}</p>
                </div>
              </div>
              
              {renderStepContent()}
            </motion.div>
          </AnimatePresence>
        )}

        {/* System Flow */}
        {renderSystemFlow()}

        {/* Architecture Diagram */}
        {renderArchitectureDiagram()}

        {/* Technical Specifications */}
        {renderTechnicalSpecs()}
      </div>
    </div>
  );
};

export default TechnicalArchitectureDetailed;



