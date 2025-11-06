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
  EyeOff
} from 'lucide-react';

const TechnicalArchitecture = () => {
  const [activeLayer, setActiveLayer] = useState('overview');
  const [showDataFlow, setShowDataFlow] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const architecture = {
    overview: {
      title: 'System Overview',
      description: 'Complete Decision Intelligence OS Architecture',
      components: [
        { name: 'Client Applications', type: 'Frontend', count: '1,247', status: 'active' },
        { name: 'API Gateway', type: 'Backend', count: '5000+', status: 'active' },
        { name: 'Data Warehouse', type: 'Storage', count: '50TB', status: 'active' },
        { name: 'AI Models', type: 'ML', count: '12', status: 'active' }
      ]
    },
    frontend: {
      title: 'Frontend Layer',
      description: 'Single-page application with left navigation',
      components: [
        { 
          name: 'Main Interface', 
          type: 'React App', 
          details: 'Single page with left nav, middle content, right AI chat',
          technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion']
        },
        { 
          name: 'Navigation Panel', 
          type: 'Left Sidebar', 
          details: 'Dashboard, Intelligence, Integrations, Decisions, Analytics, Settings',
          technologies: ['React Router', 'Context API']
        },
        { 
          name: 'Content Area', 
          type: 'Main Panel', 
          details: 'Dynamic content based on selected navigation item',
          technologies: ['React Components', 'State Management']
        },
        { 
          name: 'AI Chat Panel', 
          type: 'Right Sidebar', 
          details: 'Real-time AI assistant for decision support',
          technologies: ['WebSocket', 'OpenAI API', 'Context API']
        }
      ]
    },
    backend: {
      title: 'Backend Layer',
      description: 'API services, business logic, and data processing',
      components: [
        { 
          name: 'API Gateway', 
          type: 'Flask/FastAPI', 
          details: 'RESTful APIs, authentication, rate limiting',
          technologies: ['Flask', 'JWT', 'Rate Limiting', 'CORS']
        },
        { 
          name: 'Decision Engine', 
          type: 'Core Service', 
          details: 'Decision logic, workflow management, outcome tracking',
          technologies: ['Python', 'Celery', 'Redis', 'PostgreSQL']
        },
        { 
          name: 'Causal AI Engine', 
          type: 'ML Service', 
          details: 'DoWhy, CausalNex, PyWhy for causal analysis',
          technologies: ['DoWhy', 'CausalNex', 'PyWhy', 'Scikit-learn']
        },
        { 
          name: 'Integration Manager', 
          type: 'ETL Service', 
          details: 'Airbyte orchestration, data transformation',
          technologies: ['Airbyte', 'Python', 'Apache Airflow']
        }
      ]
    },
    data: {
      title: 'Data Engineering Layer',
      description: 'Data ingestion, transformation, and storage',
      components: [
        { 
          name: 'Data Sources', 
          type: 'External APIs', 
          details: 'CRM, Payments, Support, External signals',
          technologies: ['Salesforce API', 'Stripe API', 'HubSpot API', 'Crunchbase API']
        },
        { 
          name: 'ETL Pipeline', 
          type: 'Airbyte', 
          details: '5000+ app integrations, real-time sync',
          technologies: ['Airbyte', 'Docker', 'Kubernetes']
        },
        { 
          name: 'Data Warehouse', 
          type: 'PostgreSQL', 
          details: 'Primary data storage, structured data',
          technologies: ['PostgreSQL', 'Indexing', 'Partitioning']
        },
        { 
          name: 'Data Lake', 
          type: 'S3', 
          details: 'Raw data storage, unstructured data',
          technologies: ['AWS S3', 'Parquet', 'Delta Lake']
        }
      ]
    },
    ai: {
      title: 'AI/ML Layer',
      description: 'Machine learning models and causal analysis',
      components: [
        { 
          name: 'Causal Inference', 
          type: 'DoWhy', 
          details: 'Root cause analysis, causal discovery',
          technologies: ['DoWhy', 'CausalNex', 'PyWhy']
        },
        { 
          name: 'Prediction Models', 
          type: 'XGBoost', 
          details: 'Churn prediction, health scoring',
          technologies: ['XGBoost', 'Scikit-learn', 'Pandas']
        },
        { 
          name: 'Model Training', 
          type: 'ML Pipeline', 
          details: 'Automated retraining, model validation',
          technologies: ['MLflow', 'DVC', 'Apache Airflow']
        },
        { 
          name: 'Model Serving', 
          type: 'API', 
          details: 'Real-time predictions, model inference',
          technologies: ['FastAPI', 'Docker', 'Kubernetes']
        }
      ]
    }
  };

  const dataFlow = [
    { from: 'Client Apps', to: 'API Gateway', type: 'HTTP/HTTPS', data: 'User requests, decisions' },
    { from: 'API Gateway', to: 'Decision Engine', type: 'Internal API', data: 'Business logic' },
    { from: 'Decision Engine', to: 'Causal AI', type: 'ML API', data: 'Analysis requests' },
    { from: 'Causal AI', to: 'Data Warehouse', type: 'SQL', data: 'Data queries' },
    { from: 'Data Warehouse', to: 'Causal AI', type: 'SQL', data: 'Processed data' },
    { from: 'Causal AI', to: 'Decision Engine', type: 'ML API', data: 'Insights, predictions' },
    { from: 'Decision Engine', to: 'API Gateway', type: 'Internal API', data: 'Decision results' },
    { from: 'API Gateway', to: 'Client Apps', type: 'HTTP/HTTPS', data: 'UI updates, notifications' }
  ];

  const renderLayerContent = () => {
    const layer = architecture[activeLayer];
    if (!layer) return null;

    return (
      <div className="space-y-6">
        <div className="neural-border rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">{layer.title}</h3>
          <p className="text-gray-400 mb-6">{layer.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {layer.components.map((component, index) => (
              <motion.div
                key={index}
                className="neural-border rounded-lg p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">{component.name}</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                    {component.type}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{component.details}</p>
                {component.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {component.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {component.count && (
                  <div className="mt-2 text-sm text-gray-300">
                    <span className="text-gray-400">Count:</span> {component.count}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderDataFlow = () => {
    if (!showDataFlow) return null;

    return (
      <div className="neural-border rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4">Data Flow Architecture</h3>
        <div className="space-y-4">
          {dataFlow.map((flow, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-between p-3 neural-border rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 neural-border rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">{index + 1}</span>
                </div>
                <div>
                  <div className="font-medium">{flow.from}</div>
                  <div className="text-sm text-gray-400">{flow.data}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <ArrowRight className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-blue-400">{flow.type}</span>
                <ArrowRight className="h-4 w-4 text-blue-400" />
              </div>
              
              <div className="font-medium">{flow.to}</div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  const renderSystemDiagram = () => {
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
                <span className="text-sm font-medium">Client Interface</span>
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
                RESTful APIs, authentication, rate limiting
              </div>
            </div>
            <div className="neural-border rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Target className="h-4 w-4 text-green-400" />
                <span className="text-sm font-medium">Decision Engine</span>
              </div>
              <div className="text-xs text-gray-400">
                Business logic, workflow management
              </div>
            </div>
            <div className="neural-border rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Brain className="h-4 w-4 text-green-400" />
                <span className="text-sm font-medium">Causal AI</span>
              </div>
              <div className="text-xs text-gray-400">
                DoWhy, CausalNex, PyWhy analysis
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
                PostgreSQL, structured data storage
              </div>
            </div>
            <div className="neural-border rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Zap className="h-4 w-4 text-purple-400" />
                <span className="text-sm font-medium">ETL Pipeline</span>
              </div>
              <div className="text-xs text-gray-400">
                Airbyte, 5000+ app integrations
              </div>
            </div>
            <div className="neural-border rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Cloud className="h-4 w-4 text-purple-400" />
                <span className="text-sm font-medium">Data Sources</span>
              </div>
              <div className="text-xs text-gray-400">
                CRM, Payments, Support, External APIs
              </div>
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
              <h1 className="neural-text text-xl font-bold">Technical Architecture</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowDataFlow(!showDataFlow)}
                className="flex items-center space-x-2 border border-gray-600 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors"
              >
                {showDataFlow ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span>{showDataFlow ? 'Hide' : 'Show'} Data Flow</span>
              </button>
              <button
                onClick={() => setIsAnimating(!isAnimating)}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                {isAnimating ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                <span>{isAnimating ? 'Pause' : 'Animate'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Layer Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            {Object.entries(architecture).map(([key, layer]) => (
              <button
                key={key}
                onClick={() => setActiveLayer(key)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeLayer === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {layer.title}
              </button>
            ))}
          </div>
        </div>

        {/* System Diagram */}
        {renderSystemDiagram()}

        {/* Data Flow */}
        {renderDataFlow()}

        {/* Layer Content */}
        <div className="mt-8">
          {renderLayerContent()}
        </div>

        {/* Technical Specifications */}
        <div className="mt-8 neural-border rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="neural-border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-blue-400">Frontend Stack</h4>
              <div className="space-y-2 text-sm">
                <div>React 18.2.0</div>
                <div>Vite 5.2.0</div>
                <div>Tailwind CSS 3.4.3</div>
                <div>Framer Motion 11.0.25</div>
                <div>React Router 6.22.3</div>
              </div>
            </div>
            
            <div className="neural-border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-green-400">Backend Stack</h4>
              <div className="space-y-2 text-sm">
                <div>Flask 2.3.2</div>
                <div>PostgreSQL 15</div>
                <div>Redis 7.0</div>
                <div>Celery 5.3.0</div>
                <div>Docker & Kubernetes</div>
              </div>
            </div>
            
            <div className="neural-border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-purple-400">AI/ML Stack</h4>
              <div className="space-y-2 text-sm">
                <div>DoWhy 0.8.1</div>
                <div>CausalNex 0.12.0</div>
                <div>XGBoost 1.7.0</div>
                <div>Scikit-learn 1.3.0</div>
                <div>MLflow 2.5.0</div>
              </div>
            </div>
            
            <div className="neural-border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-yellow-400">Data Stack</h4>
              <div className="space-y-2 text-sm">
                <div>Airbyte 0.50.0</div>
                <div>AWS S3</div>
                <div>Apache Airflow 2.7.0</div>
                <div>DVC 3.0.0</div>
                <div>5000+ API Integrations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Deployment Architecture */}
        <div className="mt-8 neural-border rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">Deployment Architecture</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="neural-border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-blue-400">Frontend Deployment</h4>
              <div className="space-y-2 text-sm">
                <div>Vercel/Netlify</div>
                <div>CDN Distribution</div>
                <div>Auto-scaling</div>
                <div>SSL/TLS</div>
              </div>
            </div>
            
            <div className="neural-border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-green-400">Backend Deployment</h4>
              <div className="space-y-2 text-sm">
                <div>AWS ECS/EKS</div>
                <div>Load Balancer</div>
                <div>Auto-scaling</div>
                <div>Health Checks</div>
              </div>
            </div>
            
            <div className="neural-border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-purple-400">Data Deployment</h4>
              <div className="space-y-2 text-sm">
                <div>AWS RDS</div>
                <div>ElastiCache</div>
                <div>S3 Data Lake</div>
                <div>Backup & Recovery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalArchitecture;



