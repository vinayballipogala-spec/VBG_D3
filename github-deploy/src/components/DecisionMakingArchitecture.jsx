import { useState } from 'react';
import { motion } from 'framer-motion';

const DecisionMakingArchitecture = () => {
  const [currentLayer, setCurrentLayer] = useState(0);

  const decisionLayers = [
    {
      id: 'strategic_decisions',
      title: 'Strategic Decisions',
      description: 'C-Level, Board, Long-term Vision',
      timeframe: '3-12 months',
      examples: ['Market Entry', 'Product Strategy', 'Acquisition', 'Digital Transformation'],
      decisionProcess: [
        'Causal Analysis of Market Trends',
        'Scenario Planning with Monte Carlo',
        'Stakeholder Impact Assessment',
        'Risk-Reward Optimization',
        'Implementation Roadmap'
      ],
      technologies: ['DoWhy Causal Models', 'Monte Carlo Simulation', 'Stakeholder Mapping', 'Risk Assessment AI'],
      speed: 'Days to Weeks',
      learning: 'Quarterly Reviews, Market Feedback Loops'
    },
    {
      id: 'tactical_decisions',
      title: 'Tactical Decisions',
      description: 'VP, Director Level, Medium-term Execution',
      timeframe: '1-3 months',
      examples: ['Resource Allocation', 'Campaign Optimization', 'Process Improvement', 'Team Restructuring'],
      decisionProcess: [
        'Data-Driven Evidence Collection',
        'Causal Impact Analysis',
        'Resource Constraint Optimization',
        'Team Capability Assessment',
        'Quick Wins Identification'
      ],
      technologies: ['Real-time Analytics', 'CausalNex Graphs', 'Resource Optimization AI', 'Performance Dashboards'],
      speed: 'Hours to Days',
      learning: 'Weekly Reviews, Performance Metrics'
    },
    {
      id: 'operational_decisions',
      title: 'Operational Decisions',
      description: 'Manager Level, Day-to-day Execution',
      timeframe: 'Daily to Weekly',
      examples: ['Customer Response', 'Process Adjustments', 'Team Priorities', 'Issue Resolution'],
      decisionProcess: [
        'Real-time Data Monitoring',
        'Pattern Recognition',
        'Automated Recommendations',
        'Human Validation',
        'Immediate Action'
      ],
      technologies: ['Real-time Streaming', 'ML Pattern Detection', 'Automated Alerts', 'Decision Trees'],
      speed: 'Minutes to Hours',
      learning: 'Daily Standups, Real-time Feedback'
    },
    {
      id: 'automated_decisions',
      title: 'Automated Decisions',
      description: 'AI-Driven, High-Volume, Low-Risk',
      timeframe: 'Real-time',
      examples: ['Pricing Adjustments', 'Content Personalization', 'Fraud Detection', 'Resource Scaling'],
      decisionProcess: [
        'Continuous Data Ingestion',
        'ML Model Inference',
        'Confidence Scoring',
        'Automated Execution',
        'Performance Monitoring'
      ],
      technologies: ['Stream Processing', 'ML Pipelines', 'AutoML', 'Confidence Scoring'],
      speed: 'Milliseconds to Seconds',
      learning: 'Continuous Model Retraining, A/B Testing'
    }
  ];

  const decisionPhilosophy = [
    {
      principle: 'Speed Without Sacrificing Quality',
      description: 'Fast decisions through automated evidence collection and causal analysis',
      implementation: 'Pre-computed insights, real-time data, confidence scoring'
    },
    {
      principle: 'Learn from Every Decision',
      description: 'Every decision feeds back into the system for continuous improvement',
      implementation: 'Decision tracking, outcome measurement, model retraining'
    },
    {
      principle: 'Context-Aware Intelligence',
      description: 'Decisions adapt to organizational context, constraints, and goals',
      implementation: 'Multi-level decision trees, constraint optimization, goal alignment'
    },
    {
      principle: 'Human-AI Collaboration',
      description: 'AI amplifies human judgment, doesn\'t replace it',
      implementation: 'Explainable AI, confidence scoring, human override capabilities'
    },
    {
      principle: 'Decision Velocity at Scale',
      description: 'Enable fast, quality decisions across all organizational levels',
      implementation: 'Microservices architecture, real-time processing, distributed decision engines'
    }
  ];

  const technicalStack = {
    'Decision Engine Core': {
      components: ['Decision Orchestrator', 'Causal Analysis Engine', 'Scenario Planner', 'Risk Assessor'],
      technologies: ['DoWhy', 'CausalNex', 'Monte Carlo', 'Constraint Optimization']
    },
    'Data Intelligence Layer': {
      components: ['Real-time Data Pipeline', 'Causal Graph Builder', 'Pattern Recognition', 'Anomaly Detection'],
      technologies: ['Apache Kafka', 'Apache Spark', 'TensorFlow', 'PyTorch']
    },
    'Learning & Adaptation': {
      components: ['Decision Tracker', 'Outcome Measurer', 'Model Retrainer', 'Feedback Loop'],
      technologies: ['MLflow', 'Kubernetes', 'AutoML', 'A/B Testing Framework']
    },
    'Human Interface Layer': {
      components: ['Decision Dashboard', 'Insight Explorer', 'Scenario Simulator', 'Collaboration Tools'],
      technologies: ['React', 'D3.js', 'WebRTC', 'Real-time Collaboration']
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Decision Intelligence Architecture
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building organizations that make better decisions faster, learn continuously, 
            and drive results through intelligent decision-making processes
          </p>
        </div>

        {/* Decision Philosophy */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Decision-Making Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {decisionPhilosophy.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20"
              >
                <h3 className="text-lg font-semibold mb-3 text-blue-400">{principle.principle}</h3>
                <p className="text-gray-300 mb-3">{principle.description}</p>
                <div className="text-sm text-blue-300">{principle.implementation}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decision Layers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Multi-Level Decision Architecture</h2>
          
          {/* Layer Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800/50 rounded-lg p-2 flex space-x-2">
              {decisionLayers.map((layer, index) => (
                <button
                  key={layer.id}
                  onClick={() => setCurrentLayer(index)}
                  className={`px-4 py-2 rounded-md transition-all ${
                    index === currentLayer 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {layer.title}
                </button>
              ))}
            </div>
          </div>

          {/* Current Layer Details */}
          <motion.div
            key={currentLayer}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-blue-600 rounded-lg p-3">
                    <span className="text-2xl font-bold">{currentLayer + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{decisionLayers[currentLayer].title}</h3>
                    <p className="text-gray-400">{decisionLayers[currentLayer].description}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-400">Decision Examples</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {decisionLayers[currentLayer].examples.map((example, index) => (
                        <div key={index} className="bg-gray-700/50 rounded-lg p-3 text-sm">
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-yellow-400">Decision Process</h4>
                    <div className="space-y-2">
                      {decisionLayers[currentLayer].decisionProcess.map((step, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-sm text-gray-300">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-purple-400">Technologies</h4>
                  <div className="space-y-2">
                    {decisionLayers[currentLayer].technologies.map((tech, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <h5 className="font-semibold mb-2 text-blue-400">Speed</h5>
                    <p className="text-sm text-gray-300">{decisionLayers[currentLayer].speed}</p>
                  </div>
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <h5 className="font-semibold mb-2 text-green-400">Learning Cycle</h5>
                    <p className="text-sm text-gray-300">{decisionLayers[currentLayer].learning}</p>
                  </div>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-4">
                  <h5 className="font-semibold mb-2 text-orange-400">Timeframe</h5>
                  <p className="text-sm text-gray-300">{decisionLayers[currentLayer].timeframe}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Technical Decision Intelligence Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(technicalStack).map(([category, details], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-400">{category}</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-green-400">Components</h4>
                  <div className="space-y-1">
                    {details.components.map((component, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">{component}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-purple-400">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {details.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decision Flow */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
          <h2 className="text-2xl font-bold mb-6 text-center">Decision Intelligence Flow</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Evidence Collection', description: 'Automated data gathering and causal analysis' },
              { step: '2', title: 'Decision Context', description: 'Understanding constraints, goals, and stakeholders' },
              { step: '3', title: 'Scenario Analysis', description: 'Exploring options with Monte Carlo simulation' },
              { step: '4', title: 'Decision Execution', description: 'Implementing with confidence scoring and monitoring' },
              { step: '5', title: 'Learning Loop', description: 'Measuring outcomes and improving future decisions' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold">{item.step}</span>
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-6">Why This Architecture Drives Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-400">10x Faster Decisions</h3>
              <p className="text-gray-300">Automated evidence collection and causal analysis reduce decision time from weeks to hours</p>
            </div>
            <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-green-400">Continuous Learning</h3>
              <p className="text-gray-300">Every decision outcome feeds back to improve future decision quality</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-purple-400">Organizational Intelligence</h3>
              <p className="text-gray-300">Build institutional knowledge and decision-making capabilities across all levels</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionMakingArchitecture;


