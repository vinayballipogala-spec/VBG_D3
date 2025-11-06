import { useState } from 'react';
import { motion } from 'framer-motion';

const TechnicalArchitectureSimple = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 'client_request',
      title: 'Client Request',
      description: 'User interacts with frontend interface',
      details: 'React single-page app with left navigation. User clicks on Customer Intelligence tab. GET /api/customer-intelligence/churn-risk/123 with JWT token.',
      technologies: ['React', 'Axios', 'JWT'],
      duration: '2000ms'
    },
    {
      id: 'api_gateway',
      title: 'API Gateway',
      description: 'Request routing, authentication, rate limiting',
      details: 'Flask API Gateway with JWT token validation. Rate limiting: 1000 requests/hour per user. Route to appropriate microservice.',
      technologies: ['Flask', 'JWT', 'Redis', 'Nginx'],
      duration: '1500ms'
    },
    {
      id: 'decision_engine',
      title: 'Decision Engine',
      description: 'Core business logic and workflow management',
      details: 'Decision Engine Microservice validates request, checks permissions, triggers causal analysis workflow, updates decision state in database.',
      technologies: ['Python', 'Celery', 'PostgreSQL', 'Redis'],
      duration: '2000ms'
    },
    {
      id: 'causal_ai',
      title: 'Causal AI Engine',
      description: 'DoWhy/CausalNex analysis and prediction',
      details: 'Causal AI Microservice queries customer data, runs DoWhy causal inference, constructs CausalNex graph, applies XGBoost churn prediction model.',
      technologies: ['DoWhy', 'CausalNex', 'XGBoost', 'Pandas', 'NumPy'],
      duration: '3000ms'
    },
    {
      id: 'data_warehouse',
      title: 'Data Warehouse',
      description: 'PostgreSQL database queries and data retrieval',
      details: 'PostgreSQL 15 with complex JOIN across customer, usage, payment, support tables. Uses indexes on account_id, date, feature_usage.',
      technologies: ['PostgreSQL', 'Redis', 'SQLAlchemy', 'Psycopg2'],
      duration: '1500ms'
    },
    {
      id: 'data_sources',
      title: 'Data Sources',
      description: 'External APIs and data integration',
      details: 'Airbyte ETL pipeline orchestration. Sources: Salesforce, Stripe, HubSpot, Zendesk, Mixpanel. Real-time sync every 5 minutes.',
      technologies: ['Airbyte', 'Docker', 'Kubernetes', 'AWS S3'],
      duration: '2000ms'
    },
    {
      id: 'model_serving',
      title: 'Model Serving',
      description: 'AI model inference and prediction serving',
      details: 'Model Serving API loads XGBoost, DoWhy, CausalNex models. Real-time prediction on customer data with 1-hour caching.',
      technologies: ['FastAPI', 'MLflow', 'Docker', 'Kubernetes'],
      duration: '1500ms'
    },
    {
      id: 'response_generation',
      title: 'Response Generation',
      description: 'Generate insights and recommendations',
      details: 'Insight Generation Service extracts causal relationships, generates actionable recommendations, calculates confidence scores.',
      technologies: ['Python', 'Pandas', 'JSON', 'Template Engine'],
      duration: '1000ms'
    },
    {
      id: 'response_delivery',
      title: 'Response Delivery',
      description: 'Send response back to frontend',
      details: 'API Gateway formats response, sets HTTP headers, returns HTTP 200 OK with JSON response, logs response time.',
      technologies: ['Flask', 'JSON', 'HTTP', 'Redis'],
      duration: '1000ms'
    },
    {
      id: 'frontend_update',
      title: 'Frontend Update',
      description: 'Update UI with new data and insights',
      details: 'React updates state with new data, re-renders components with new insights, updates charts and graphs.',
      technologies: ['React', 'State Management', 'Chart.js', 'LocalStorage'],
      duration: '1000ms'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-blue-400">Technical Architecture - End-to-End</h1>
        
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between overflow-x-auto">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center min-w-0 flex-1">
                <button
                  onClick={() => setCurrentStep(index)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                    index === currentStep ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  <span className="text-sm font-bold">{index + 1}</span>
                </button>
                <div className="mt-2 text-center">
                  <div className={`text-sm font-medium ${
                    index === currentStep ? 'text-white' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Step Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 rounded-xl p-8 mb-8"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-blue-600 rounded-lg p-3">
              <span className="text-2xl font-bold">{currentStep + 1}</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold">{steps[currentStep].title}</h2>
              <p className="text-gray-400">{steps[currentStep].description}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Technical Details</h4>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-gray-300">{steps[currentStep].details}</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Technologies Used</h4>
              <div className="space-y-2">
                {steps[currentStep].technologies.map((tech, index) => (
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
                    <span className="text-white">{steps[currentStep].duration}</span>
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
        </motion.div>

        {/* System Flow */}
        <div className="bg-gray-900 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">End-to-End System Flow</h3>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center justify-between p-4 bg-gray-800 rounded-lg ${
                  index === currentStep ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <div className="font-medium">{step.title}</div>
                    <div className="text-sm text-gray-400">{step.description}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-blue-400">{step.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-gray-900 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-blue-400">Frontend Stack</h4>
              <div className="space-y-2 text-sm">
                <div>React 18.2.0</div>
                <div>Vite 5.2.0</div>
                <div>Tailwind CSS 3.4.3</div>
                <div>Framer Motion 11.0.25</div>
                <div>Axios 1.6.8</div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-green-400">Backend Stack</h4>
              <div className="space-y-2 text-sm">
                <div>Flask 2.3.2</div>
                <div>PostgreSQL 15</div>
                <div>Redis 7.0</div>
                <div>Celery 5.3.0</div>
                <div>JWT Authentication</div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-purple-400">AI/ML Stack</h4>
              <div className="space-y-2 text-sm">
                <div>DoWhy 0.8.1</div>
                <div>CausalNex 0.12.0</div>
                <div>XGBoost 1.7.0</div>
                <div>Scikit-learn 1.3.0</div>
                <div>Pandas 2.0.0</div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4">
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
      </div>
    </div>
  );
};

export default TechnicalArchitectureSimple;



