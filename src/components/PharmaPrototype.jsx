import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import {
  Database,
  Brain,
  Target,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  Play,
  RefreshCw,
  CheckCircle,
  Clock,
  Network,
  Zap,
  Activity,
  BarChart3,
  Users,
  FileText,
  Bot,
  MessageCircle,
  ChevronRight,
  Sparkles,
  GitBranch,
  Layers,
  Eye,
  Cpu,
  Link2,
  TrendingDown,
  AlertCircle,
  Lightbulb,
  Settings
} from 'lucide-react';

const PharmaPrototype = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [ingestionProgress, setIngestionProgress] = useState(0);
  const [causalDiscoveryProgress, setCausalDiscoveryProgress] = useState(0);
  const [selectedIntent, setSelectedIntent] = useState(null);
  const [intentText, setIntentText] = useState('');
  const [intentChat, setIntentChat] = useState([
    {
      role: 'ai',
      text: 'What decision are you trying to make? Describe it in your own words, as if you are explaining to a colleague.'
    }
  ]);
  const [selectedActions, setSelectedActions] = useState([]);
  const [simulationRunning, setSimulationRunning] = useState(false);
  const [simulationResults, setSimulationResults] = useState(null);
  const [decisionCommitted, setDecisionCommitted] = useState(false);
  const [dmgVisible, setDmgVisible] = useState(false);
  const [consequenceWeeks, setConsequenceWeeks] = useState(0);
  const [learningComplete, setLearningComplete] = useState(false);
  const [causalZoom, setCausalZoom] = useState(1.0);

  // CIAC Flow Steps
  const steps = [
    { id: 'context', label: 'Context Ingestion', icon: Database, color: '#06b6d4', description: 'Unified Data Fabric' },
    { id: 'causal', label: 'Causal Discovery', icon: Brain, color: '#8b5cf6', description: 'Feature Engineering & Causal Map' },
    { id: 'intent', label: 'Define Intent', icon: Target, color: '#f59e0b', description: 'Decision Maker\'s Goal' },
    { id: 'canvas', label: 'Decision Canvas', icon: Layers, color: '#ec4899', description: 'Human-AI Collaboration' },
    { id: 'dmg', label: 'DMG Storage', icon: Network, color: '#10b981', description: 'Decision Memory Graph' },
    { id: 'consequence', label: 'Consequence Tracking', icon: TrendingUp, color: '#06b6d4', description: 'Outcome Measurement' },
    { id: 'learning', label: 'Learning Loop', icon: GitBranch, color: '#8b5cf6', description: 'Causal Model Update' }
  ];

  // Data Sources
  const dataSources = [
    { id: 'veeva', name: 'Veeva CRM', icon: '📊', records: '2.4M', type: 'Rep Activity' },
    { id: 'salesforce', name: 'Salesforce', icon: '☁️', records: '1.8M', type: 'Customer Data' },
    { id: 'field_app', name: 'Field Force App', icon: '📱', records: '850K', type: 'HCP Visits' },
    { id: 'erp', name: 'ERP System', icon: '🏢', records: '5.2M', type: 'Sales Data' },
    { id: 'medical', name: 'Medical Affairs', icon: '⚕️', records: '320K', type: 'KOL Data' },
    { id: 'market_research', name: 'Market Research', icon: '📈', records: '180K', type: 'Perception' },
    { id: 'analytics', name: 'Analytics Platform', icon: '📉', records: '1.1M', type: 'KPIs' },
    { id: 'external', name: 'External APIs', icon: '🌐', records: '450K', type: 'Market Data' }
  ];

  // Causal Variables (Features)
  const causalVariables = [
    { id: 'coverage', name: 'Coverage %', type: 'action', current: 58, unit: '%', prior: 0.28, description: 'Tier-2 cardiologist coverage' },
    { id: 'frequency', name: 'Call Frequency', type: 'action', current: 2.3, unit: '/month', prior: 0.32, description: 'Average visits per HCP' },
    { id: 'messaging', name: 'Message Focus', type: 'action', current: 0.65, unit: 'weight', prior: 0.18, description: 'Efficacy messaging emphasis' },
    { id: 'engagement', name: 'HCP Engagement', type: 'mediator', current: 0.65, unit: 'score', prior: 0.45, description: 'Physician engagement level' },
    { id: 'awareness', name: 'Brand Awareness', type: 'mediator', current: 0.72, unit: 'score', prior: 0.38, description: 'Brand recall & recognition' },
    { id: 'market_share', name: 'Market Share', type: 'outcome', current: 12.4, unit: '%', prior: null, description: 'Primary business KPI' },
    { id: 'sales', name: 'Sales Revenue', type: 'outcome', current: 125000, unit: '₹', prior: null, description: 'Monthly sales value' }
  ];

  // Causal Edges (Relationships)
  const causalEdges = [
    { from: 'coverage', to: 'engagement', effect: 0.28, method: 'backdoor', ci: [0.18, 0.38] },
    { from: 'frequency', to: 'engagement', effect: 0.32, method: 'backdoor', ci: [0.25, 0.39] },
    { from: 'messaging', to: 'awareness', effect: 0.18, method: 'frontdoor', ci: [0.12, 0.24] },
    { from: 'coverage', to: 'awareness', effect: 0.15, method: 'backdoor', ci: [0.10, 0.20] },
    { from: 'engagement', to: 'market_share', effect: 0.45, method: 'backdoor', ci: [0.35, 0.55] },
    { from: 'awareness', to: 'market_share', effect: 0.38, method: 'backdoor', ci: [0.28, 0.48] },
    { from: 'market_share', to: 'sales', effect: 0.52, method: 'direct', ci: [0.45, 0.59] }
  ];

  const intentNudges = [
    'Increase market share for a specific brand in cardiology by 5% in 6 months',
    'Improve Tier-2 cardiologist coverage in South India',
    'Optimize promotional mix between reps and digital for a new launch'
  ];

  const handleIntentSubmit = () => {
    if (!intentText.trim()) return;

    const userMessage = { role: 'user', text: intentText.trim() };

    // Very simple intent detection mock based on keywords
    let detectedIntentId = 'market_share';
    if (/coverage/i.test(intentText)) detectedIntentId = 'coverage';
    if (/roi|return/i.test(intentText)) detectedIntentId = 'roi';

    const detectedIntent = intentOptions.find((i) => i.id === detectedIntentId);

    const aiMessage = {
      role: 'ai',
      text: `Got it. You want to "${detectedIntent.goal}" with a target of +${detectedIntent.target}${detectedIntent.unit}. ` +
        'I will use this as the formal intent in the decision canvas and align simulations to this outcome.'
    };

    setIntentChat((prev) => [...prev, userMessage, aiMessage]);
    setSelectedIntent(detectedIntentId);
    setIntentText('');
  };

  // Intent Options
  const intentOptions = [
    { id: 'market_share', goal: 'Increase Market Share', target: 5, unit: '%', priority: 'high', budget: 2000000 },
    { id: 'roi', goal: 'Maximize ROI', target: 25, unit: '%', priority: 'high', budget: 1500000 },
    { id: 'coverage', goal: 'Expand Coverage', target: 15, unit: '%', priority: 'medium', budget: 1200000 }
  ];

  // Action Options (based on causal analysis)
  const actionOptions = [
    {
      id: 'a1',
      name: 'Increase Coverage',
      description: 'Increase Tier-2 cardiologist coverage from 58% to 68%',
      target: 'coverage',
      magnitude: 10,
      unit: 'percentage_points',
      cost: 1200000,
      causalPath: 'coverage → engagement → market_share',
      expectedEffect: 4.2,
      confidence: 0.77,
      risk: 'medium'
    },
    {
      id: 'a2',
      name: 'Increase Frequency',
      description: 'Increase call frequency from 2.3 to 2.8 visits/month',
      target: 'frequency',
      magnitude: 0.5,
      unit: 'visits/month',
      cost: 800000,
      causalPath: 'frequency → engagement → market_share',
      expectedEffect: 3.8,
      confidence: 0.71,
      risk: 'low'
    },
    {
      id: 'a3',
      name: 'Enhance Messaging',
      description: 'Increase efficacy messaging weight by 15%',
      target: 'messaging',
      magnitude: 0.15,
      unit: 'weight',
      cost: 500000,
      causalPath: 'messaging → awareness → market_share',
      expectedEffect: 2.1,
      confidence: 0.65,
      risk: 'low'
    }
  ];

  // Simulate Data Ingestion
  useEffect(() => {
    if (currentStep === 0) {
      const interval = setInterval(() => {
        setIngestionProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1.5;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [currentStep]);

  // Simulate Causal Discovery
  useEffect(() => {
    if (currentStep === 1) {
      const interval = setInterval(() => {
        setCausalDiscoveryProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 80);
      return () => clearInterval(interval);
    }
  }, [currentStep]);

  // Simulate Consequence Tracking
  useEffect(() => {
    if (currentStep === 5 && decisionCommitted) {
      const interval = setInterval(() => {
        setConsequenceWeeks((prev) => {
          if (prev >= 12) {
            clearInterval(interval);
            return 12;
          }
          return prev + 1;
        });
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [currentStep, decisionCommitted]);

  const runSimulation = () => {
    setSimulationRunning(true);
    setTimeout(() => {
      const totalEffect = selectedActions.reduce((sum, actionId) => {
        const action = actionOptions.find(a => a.id === actionId);
        return sum + (action?.expectedEffect || 0);
      }, 0);
      
      setSimulationResults({
        expectedMarketShare: 12.4 + totalEffect,
        currentMarketShare: 12.4,
        delta: totalEffect,
        confidence: selectedActions.length > 0 ? 0.78 : 0,
        scenarios: [
          { name: 'Baseline', marketShare: 12.4, probability: 1.0 },
          { name: 'Selected Actions', marketShare: 12.4 + totalEffect, probability: 0.78 },
          { name: 'Best Case', marketShare: 12.4 + totalEffect * 1.2, probability: 0.15 },
          { name: 'Worst Case', marketShare: 12.4 + totalEffect * 0.6, probability: 0.07 }
        ]
      });
      setSimulationRunning(false);
    }, 3000);
  };

  const commitDecision = () => {
    setDecisionCommitted(true);
    setCurrentStep(4); // Move to DMG
  };

  const getNodeColor = (type) => {
    switch(type) {
      case 'action': return '#ec4899';
      case 'mediator': return '#8b5cf6';
      case 'outcome': return '#10b981';
      default: return '#06b6d4';
    }
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <NavBar />
      
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="futuristic-heading text-3xl sm:text-4xl lg:text-5xl mb-2">
                PHARMA DECISION INTELLIGENCE OS
              </h1>
              <p className="text-cyan-300 text-sm sm:text-base font-mono">
                CIAC Model • Decision Memory Graph • Causal Reasoning Engine
              </p>
            </div>
            <Link
              to="/"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded border border-cyan-500/50 bg-cyan-600/20 hover:bg-cyan-600/40 transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-xs font-mono">BACK</span>
            </Link>
          </div>
        </motion.div>

        {/* Continuous Background Process Ribbon */}
        <div className="mb-6">
          <div className="relative overflow-hidden rounded-xl border border-cyan-500/30 bg-gradient-to-r from-cyan-900/60 via-purple-900/60 to-emerald-900/60">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-cyan-500/20">
              <div className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3">
                <Database className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-300" />
                <div>
                  <div className="text-[10px] sm:text-xs font-mono text-cyan-300">Data Fabric</div>
                  <div className="text-[10px] sm:text-[11px] text-gray-400">Streaming internal + external signals</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3">
                <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-purple-300" />
                <div>
                  <div className="text-[10px] sm:text-xs font-mono text-purple-300">Causal Engine</div>
                  <div className="text-[10px] sm:text-[11px] text-gray-400">Updating priors & effects</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3">
                <Layers className="h-4 w-4 sm:h-5 sm:w-5 text-pink-300" />
                <div>
                  <div className="text-[10px] sm:text-xs font-mono text-pink-300">Decision Canvas</div>
                  <div className="text-[10px] sm:text-[11px] text-gray-400">Live human-AI decisions</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3">
                <GitBranch className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-300" />
                <div>
                  <div className="text-[10px] sm:text-xs font-mono text-emerald-300">Learning Loop</div>
                  <div className="text-[10px] sm:text-[11px] text-gray-400">DMG + model updated in real time</div>
                </div>
              </div>
            </div>

            {/* Moving pulse line to suggest continuous background processing */}
            <motion.div
              className="absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </div>

        {/* Step Progress - Horizontal Timeline */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === index;
              const isCompleted = currentStep > index;
              return (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center min-w-[120px]">
                    <button
                      onClick={() => setCurrentStep(index)}
                      className={`relative flex items-center justify-center w-14 h-14 rounded-full border-2 transition-all ${
                        isActive
                          ? 'border-cyan-500 bg-cyan-600/30 scale-110 shadow-lg shadow-cyan-500/50'
                          : isCompleted
                          ? 'border-green-500 bg-green-500/20'
                          : 'border-gray-600 bg-gray-800/30'
                      }`}
                      style={isActive ? { borderColor: step.color, backgroundColor: `${step.color}30` } : {}}
                    >
                      {isCompleted ? (
                        <CheckCircle className="h-7 w-7 text-green-400" />
                      ) : (
                        <Icon className="h-7 w-7" style={{ color: isActive ? step.color : '#6b7280' }} />
                      )}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-2"
                          style={{ borderColor: step.color }}
                          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </button>
                    <span className={`text-xs mt-2 font-mono text-center ${isActive ? 'text-cyan-300 font-bold' : isCompleted ? 'text-green-400' : 'text-gray-500'}`}>
                      {step.label}
                    </span>
                    <span className="text-xs text-gray-600 mt-1">{step.description}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <ChevronRight className={`h-6 w-6 mx-2 ${isCompleted ? 'text-green-500' : 'text-gray-600'}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          {/* STEP 1: CONTEXT INGESTION */}
          {currentStep === 0 && (
            <motion.div
              key="context"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="bg-black/60 backdrop-blur-xl rounded-2xl border-2 border-cyan-500/30 p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="p-4 rounded-xl bg-cyan-500/20 border border-cyan-500/40"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Database className="h-8 w-8 text-cyan-400" />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">Context Ingestion</h2>
                    <p className="text-cyan-300 text-sm font-mono">Unified Data Fabric • 5,000+ Sources • Real-Time Sync</p>
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-mono text-cyan-300">Ingestion Progress</span>
                    <span className="text-sm font-mono text-cyan-400">{Math.round(ingestionProgress)}%</span>
                  </div>
                  <div className="h-4 bg-gray-800 rounded-full overflow-hidden border border-cyan-500/30">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${ingestionProgress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Data Sources Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {dataSources.map((source, idx) => (
                    <motion.div
                      key={source.id}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ 
                        opacity: ingestionProgress > idx * 12.5 ? 1 : 0.3,
                        scale: ingestionProgress > idx * 12.5 ? 1 : 0.8,
                        y: ingestionProgress > idx * 12.5 ? 0 : 20
                      }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-gray-800/50 rounded-xl p-4 border border-cyan-500/20 hover:border-cyan-500/50 transition-all relative overflow-hidden group"
                    >
                      <div className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                      <motion.div
                        className="text-4xl mb-2"
                        animate={ingestionProgress > idx * 12.5 ? { 
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, -10, 0]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                      >
                        {source.icon}
                      </motion.div>
                      <div className="text-sm font-semibold text-white mb-1">{source.name}</div>
                      <div className="text-xs text-cyan-300 font-mono mb-1">{source.records} records</div>
                      <div className="text-xs text-gray-400">{source.type}</div>
                      
                      {/* Streaming Effect */}
                      {ingestionProgress > idx * 12.5 && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                          animate={{
                            x: ['-100%', '200%']
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: idx * 0.3
                          }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Central Hub */}
                <div className="relative bg-black/40 rounded-xl p-12 border border-cyan-500/20 min-h-[400px] flex items-center justify-center overflow-hidden mb-6">
                  {/* Video Background */}
                  <motion.div
                    className="absolute inset-0 opacity-30 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: ingestionProgress > 50 ? 0.3 : 0 }}
                    transition={{ duration: 1 }}
                  >
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src="/Data_Ingestion_Connection_Video_Generation.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
                  </motion.div>
                  
                  <svg viewBox="0 0 800 400" className="absolute inset-0 w-full h-full z-10">
                    {dataSources.map((source, idx) => {
                      const angle = (idx * 360) / dataSources.length;
                      const radius = 140;
                      const centerX = 400;
                      const centerY = 200;
                      const x = centerX + Math.cos((angle * Math.PI) / 180) * radius;
                      const y = centerY + Math.sin((angle * Math.PI) / 180) * radius;
                      const progress = ingestionProgress / 100;
                      
                      return (
                        <g key={source.id}>
                          <motion.line
                            x1={x}
                            y1={y}
                            x2={centerX}
                            y2={centerY}
                            stroke="#06b6d4"
                            strokeWidth={3}
                            strokeOpacity={progress > idx * 0.125 ? 0.4 : 0}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: progress > idx * 0.125 ? 1 : 0 }}
                            transition={{ delay: idx * 0.2, duration: 1 }}
                          />
                          <motion.circle
                            cx={x}
                            cy={y}
                            r={8}
                            fill="#06b6d4"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ 
                              opacity: progress > idx * 0.125 ? 1 : 0,
                              scale: progress > idx * 0.125 ? 1 : 0
                            }}
                            transition={{ delay: idx * 0.2 }}
                          />
                        </g>
                      );
                    })}
                  </svg>
                  <div className="relative z-20 flex flex-col items-center">
                    <motion.div
                      className="w-40 h-40 rounded-full border-4 border-cyan-500/50 bg-cyan-500/10 flex items-center justify-center mb-4 backdrop-blur-sm"
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.6, 0.9, 0.6],
                        boxShadow: [
                          '0 0 20px rgba(6, 182, 212, 0.3)',
                          '0 0 40px rgba(6, 182, 212, 0.6)',
                          '0 0 20px rgba(6, 182, 212, 0.3)'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Database className="h-20 w-20 text-cyan-400" />
                    </motion.div>
                    <div className="text-lg font-bold text-white mb-2">Unified Data Fabric</div>
                    <div className="text-sm text-cyan-300 font-mono">12.3M Records • 8 Sources • Real-Time</div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/30">
                    <div className="text-xs text-cyan-300 mb-1">Total Sources</div>
                    <div className="text-2xl font-bold text-white">8</div>
                  </div>
                  <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30">
                    <div className="text-xs text-purple-300 mb-1">Records Ingested</div>
                    <div className="text-2xl font-bold text-white">12.3M</div>
                  </div>
                  <div className="bg-pink-500/10 rounded-lg p-4 border border-pink-500/30">
                    <div className="text-xs text-pink-300 mb-1">Sync Status</div>
                    <div className="text-2xl font-bold text-white">Live</div>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                    <div className="text-xs text-green-300 mb-1">Data Quality</div>
                    <div className="text-2xl font-bold text-white">91%</div>
                  </div>
                </div>

                {ingestionProgress >= 100 && (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => setCurrentStep(1)}
                    className="mt-6 w-full sm:w-auto px-8 py-3 rounded-lg border border-cyan-500/50 bg-cyan-600/20 hover:bg-cyan-600/40 transition-all flex items-center justify-center gap-2 mx-auto"
                  >
                    <span className="text-sm font-mono">Proceed to Causal Discovery</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                )}
              </div>
            </motion.div>
          )}

          {/* STEP 2: CAUSAL DISCOVERY */}
          {currentStep === 1 && (
            <motion.div
              key="causal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="bg-black/60 backdrop-blur-xl rounded-2xl border-2 border-purple-500/30 p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="p-4 rounded-xl bg-purple-500/20 border border-purple-500/40"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Brain className="h-8 w-8 text-purple-400" />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">Causal Discovery</h2>
                    <p className="text-purple-300 text-sm font-mono">Feature Engineering • Causal Graph • Priors & Effects</p>
                  </div>
                </div>

                {/* Discovery Progress */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-mono text-purple-300">Causal Analysis Progress</span>
                    <span className="text-sm font-mono text-purple-400">{Math.round(causalDiscoveryProgress)}%</span>
                  </div>
                  <div className="h-4 bg-gray-800 rounded-full overflow-hidden border border-purple-500/30">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${causalDiscoveryProgress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="text-xs text-gray-400 mt-2 font-mono">
                    Running DoWhy + CausalNex • Identifying causal relationships • Calculating priors
                  </div>
                </div>

                {/* Causal Map Visualization with Video + Zoom */}
                <div className="bg-black/40 rounded-xl p-8 border border-purple-500/20 min-h-[600px] relative overflow-hidden mb-6">
                  {/* Video Background */}
                  <motion.div
                    className="absolute inset-0 opacity-25 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: causalDiscoveryProgress > 50 ? 0.25 : 0 }}
                    transition={{ duration: 1 }}
                  >
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src="/Causal_Intelligence_Video_Generation.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70" />
                  </motion.div>
                  
                  {/* Zoom controls */}
                  <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => setCausalZoom((z) => Math.min(2.5, z + 0.25))}
                      className="w-8 h-8 flex items-center justify-center rounded bg-purple-500/40 border border-purple-400 text-white text-sm"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => setCausalZoom((z) => Math.max(0.75, z - 0.25))}
                      className="w-8 h-8 flex items-center justify-center rounded bg-purple-500/40 border border-purple-400 text-white text-sm"
                    >
                      −
                    </button>
                    <button
                      type="button"
                      onClick={() => setCausalZoom(1)}
                      className="w-8 h-8 flex items-center justify-center rounded bg-gray-900/80 border border-purple-400 text-[10px]"
                    >
                      1x
                    </button>
                  </div>

                  <svg viewBox="0 0 900 600" className="absolute inset-0 w-full h-full z-10">
                    <g
                      transform={`translate(${(1 - causalZoom) * 200}, ${(1 - causalZoom) * 120}) scale(${causalZoom})`}
                    >
                      {/* Edges */}
                      {causalEdges.map((edge, idx) => {
                      const fromNode = causalVariables.find(n => n.id === edge.from);
                      const toNode = causalVariables.find(n => n.id === edge.to);
                      if (!fromNode || !toNode) return null;
                      
                      // Calculate positions
                      const actionNodes = causalVariables.filter(n => n.type === 'action');
                      const mediatorNodes = causalVariables.filter(n => n.type === 'mediator');
                      const outcomeNodes = causalVariables.filter(n => n.type === 'outcome');
                      
                      let fromX, fromY, toX, toY;
                      
                      if (fromNode.type === 'action') {
                        const idx = actionNodes.findIndex(n => n.id === fromNode.id);
                        fromX = 150;
                        fromY = 150 + idx * 120;
                      } else if (fromNode.type === 'mediator') {
                        const idx = mediatorNodes.findIndex(n => n.id === fromNode.id);
                        fromX = 450;
                        fromY = 150 + idx * 150;
                      } else {
                        fromX = 750;
                        fromY = 200;
                      }
                      
                      if (toNode.type === 'mediator') {
                        const idx = mediatorNodes.findIndex(n => n.id === toNode.id);
                        toX = 450;
                        toY = 150 + idx * 150;
                      } else {
                        const idx = outcomeNodes.findIndex(n => n.id === toNode.id);
                        toX = 750;
                        toY = 150 + idx * 150;
                      }
                      
                      const progress = causalDiscoveryProgress / 100;
                      const shouldShow = progress > (idx + 1) * 0.14;
                      
                      return (
                        <g key={`${edge.from}-${edge.to}`}>
                          <motion.line
                            x1={fromX}
                            y1={fromY}
                            x2={toX}
                            y2={toY}
                            stroke={edge.effect > 0.3 ? '#a855f7' : '#8b5cf6'}
                            strokeWidth={Math.abs(edge.effect) * 6}
                            strokeOpacity={shouldShow ? 0.6 : 0}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: shouldShow ? 1 : 0 }}
                            transition={{ delay: idx * 0.2, duration: 1 }}
                            markerEnd="url(#arrowhead)"
                          />
                          {shouldShow && (
                            <motion.text
                              x={(fromX + toX) / 2}
                              y={(fromY + toY) / 2 - 10}
                              textAnchor="middle"
                              className="text-xs font-mono fill-purple-300"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: idx * 0.2 + 0.5 }}
                            >
                              +{edge.effect.toFixed(2)}
                            </motion.text>
                          )}
                        </g>
                      );
                    })}
                    
                    {/* Arrow marker */}
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#8b5cf6" />
                      </marker>
                    </defs>

                    {/* Nodes */}
                    {causalVariables.map((node, idx) => {
                      const actionNodes = causalVariables.filter(n => n.type === 'action');
                      const mediatorNodes = causalVariables.filter(n => n.type === 'mediator');
                      const outcomeNodes = causalVariables.filter(n => n.type === 'outcome');
                      
                      let x, y;
                      if (node.type === 'action') {
                        const nodeIdx = actionNodes.findIndex(n => n.id === node.id);
                        x = 150;
                        y = 150 + nodeIdx * 120;
                      } else if (node.type === 'mediator') {
                        const nodeIdx = mediatorNodes.findIndex(n => n.id === node.id);
                        x = 450;
                        y = 150 + nodeIdx * 150;
                      } else {
                        const nodeIdx = outcomeNodes.findIndex(n => n.id === node.id);
                        x = 750;
                        y = 150 + nodeIdx * 150;
                      }
                      
                      const progress = causalDiscoveryProgress / 100;
                      const shouldShow = progress > (idx + 1) * 0.14;
                      const color = getNodeColor(node.type);
                      
                      return (
                        <motion.g
                          key={node.id}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ 
                            opacity: shouldShow ? 1 : 0,
                            scale: shouldShow ? 1 : 0
                          }}
                          transition={{ delay: idx * 0.15, duration: 0.5 }}
                        >
                          <circle
                            cx={x}
                            cy={y}
                            r={50}
                            fill={color}
                            fillOpacity={0.2}
                            stroke={color}
                            strokeWidth={3}
                            className="cursor-pointer"
                          />
                          <text
                            x={x}
                            y={y - 60}
                            textAnchor="middle"
                            className="text-sm font-bold fill-white"
                          >
                            {node.name}
                          </text>
                          <text
                            x={x}
                            y={y}
                            textAnchor="middle"
                            className="text-lg font-bold fill-white"
                          >
                            {typeof node.current === 'number' ? node.current.toFixed(1) : node.current}
                          </text>
                          <text
                            x={x}
                            y={y + 20}
                            textAnchor="middle"
                            className="text-xs fill-gray-400"
                          >
                            {node.unit}
                          </text>
                          {node.prior && (
                            <text
                              x={x}
                              y={y + 40}
                              textAnchor="middle"
                              className="text-xs fill-purple-300 font-mono"
                            >
                              prior: {node.prior.toFixed(2)}
                            </text>
                          )}
                        </motion.g>
                      );
                    })}
                    </g>
                  </svg>

                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 bg-black/80 rounded-lg p-4 border border-purple-500/30">
                    <div className="text-xs font-mono text-purple-300 mb-2">Causal Variables</div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-pink-500" />
                        <span className="text-xs text-white">Action Variables</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-purple-500" />
                        <span className="text-xs text-white">Mediators</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="text-xs text-white">Outcomes</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Insights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30">
                    <div className="text-xs text-purple-300 mb-1">Strongest Causal Link</div>
                    <div className="text-lg font-bold text-white">Market Share → Sales</div>
                    <div className="text-xs text-gray-400 mt-1">Effect: +0.52 (Direct)</div>
                  </div>
                  <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30">
                    <div className="text-xs text-purple-300 mb-1">Key Lever</div>
                    <div className="text-lg font-bold text-white">Coverage → Engagement</div>
                    <div className="text-xs text-gray-400 mt-1">Effect: +0.28 (Backdoor)</div>
                  </div>
                  <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30">
                    <div className="text-xs text-purple-300 mb-1">Causal Confidence</div>
                    <div className="text-lg font-bold text-white">77%</div>
                    <div className="text-xs text-gray-400 mt-1">Validated via DoWhy</div>
                  </div>
                </div>

                {causalDiscoveryProgress >= 100 && (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => setCurrentStep(2)}
                    className="w-full sm:w-auto px-8 py-3 rounded-lg border border-purple-500/50 bg-purple-600/20 hover:bg-purple-600/40 transition-all flex items-center justify-center gap-2 mx-auto"
                  >
                    <span className="text-sm font-mono">Proceed to Intent Definition</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                )}
              </div>
            </motion.div>
          )}

          {/* STEP 3: INTENT DEFINITION */}
          {currentStep === 2 && (
            <motion.div
              key="intent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="bg-black/60 backdrop-blur-xl rounded-2xl border-2 border-yellow-500/30 p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-yellow-500/20 border border-yellow-500/40">
                    <Target className="h-8 w-8 text-yellow-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">Define Intent</h2>
                    <p className="text-yellow-300 text-sm font-mono">Decision Maker's Goal • Constraints • Target</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Conversational Intent Capture */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white">Describe your decision</h3>
                    <p className="text-xs text-gray-400">
                      Type in natural language. If you are not sure, tap a suggestion and refine.
                    </p>

                    {/* Nudges */}
                    <div className="flex flex-wrap gap-2">
                      {intentNudges.map((nudge) => (
                        <button
                          key={nudge}
                          type="button"
                          onClick={() => setIntentText(nudge)}
                          className="px-3 py-1 rounded-full border border-yellow-500/40 bg-yellow-500/10 text-[11px] text-yellow-200 hover:bg-yellow-500/20 transition-all"
                        >
                          {nudge}
                        </button>
                      ))}
                    </div>

                    {/* Chat-like conversation */}
                    <div className="bg-black/50 rounded-xl border border-yellow-500/20 p-4 h-56 flex flex-col gap-2 overflow-y-auto">
                      {intentChat.map((msg, idx) => (
                        <div
                          key={idx}
                          className={`max-w-[90%] text-xs sm:text-sm px-3 py-2 rounded-lg ${
                            msg.role === 'user'
                              ? 'ml-auto bg-yellow-500/20 border border-yellow-500/40 text-yellow-50'
                              : 'mr-auto bg-gray-800/70 border border-gray-700 text-gray-100'
                          }`}
                        >
                          {msg.text}
                        </div>
                      ))}
                    </div>

                    {/* Input box */}
                    <div className="space-y-2">
                      <textarea
                        value={intentText}
                        onChange={(e) => setIntentText(e.target.value)}
                        rows={3}
                        className="w-full text-sm bg-black/60 border border-yellow-500/30 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-yellow-400"
                        placeholder='e.g. "Increase cardiology market share by 5% in the next 6 months in South India"'
                      />
                      <button
                        type="button"
                        onClick={handleIntentSubmit}
                        className="w-full px-4 py-2 rounded-lg border border-yellow-500/60 bg-yellow-600/25 hover:bg-yellow-600/40 text-xs sm:text-sm font-mono flex items-center justify-center gap-2 transition-all"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>Let AI structure my intent</span>
                      </button>
                    </div>
                  </div>

                  {/* Structured Intent Configuration */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white">Structured intent</h3>
                    <p className="text-xs text-gray-400 mb-2">
                      This is how the OS formalizes your narrative into a machine-readable objective.
                    </p>

                    <div className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {intentOptions.map((intent) => (
                          <button
                            key={intent.id}
                            type="button"
                            onClick={() => setSelectedIntent(intent.id)}
                            className={`text-left p-3 rounded-lg border-2 transition-all ${
                              selectedIntent === intent.id
                                ? 'border-yellow-500 bg-yellow-500/20'
                                : 'border-gray-700 bg-gray-800/30 hover:border-yellow-500/50'
                            }`}
                          >
                            <div className="text-xs text-gray-400 mb-1">Template</div>
                            <div className="text-sm font-semibold text-white mb-1">{intent.goal}</div>
                            <div className="text-[11px] text-gray-500">
                              Target +{intent.target}
                              {intent.unit} • Budget ₹{intent.budget.toLocaleString()}
                            </div>
                          </button>
                        ))}
                      </div>

                      {selectedIntent && (() => {
                        const intent = intentOptions.find((i) => i.id === selectedIntent);
                        return (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-black/40 rounded-xl p-5 border border-yellow-500/30"
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <Target className="h-4 w-4 text-yellow-400" />
                              <span className="text-xs font-mono text-yellow-300">FORMALIZED INTENT</span>
                            </div>
                            <div className="space-y-3 text-sm">
                              <div>
                                <div className="text-[11px] text-gray-500 mb-1">Goal</div>
                                <div className="text-base font-semibold text-white">{intent.goal}</div>
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <div className="text-[11px] text-gray-500 mb-1">Target Delta</div>
                                  <div className="text-sm font-bold text-white">
                                    +{intent.target}
                                    {intent.unit}
                                  </div>
                                </div>
                                <div>
                                  <div className="text-[11px] text-gray-500 mb-1">Budget Constraint</div>
                                  <div className="text-sm font-bold text-white">
                                    ₹{intent.budget.toLocaleString()}
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="text-[11px] text-gray-500 mb-1">Priority</div>
                                <div className="text-xs font-semibold text-white uppercase">
                                  {intent.priority}
                                </div>
                              </div>
                              <button
                                onClick={() => setCurrentStep(3)}
                                className="mt-2 w-full px-4 py-2 rounded-lg border border-yellow-500/60 bg-yellow-600/25 hover:bg-yellow-600/40 text-xs font-mono flex items-center justify-center gap-2 transition-all"
                              >
                                <span>Continue to Decision Canvas</span>
                                <ArrowRight className="h-3 w-3" />
                              </button>
                            </div>
                          </motion.div>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 4: DECISION CANVAS - Continue in next part due to length */}
          {currentStep === 3 && (
            <motion.div
              key="canvas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="bg-black/60 backdrop-blur-xl rounded-2xl border-2 border-pink-500/30 p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-pink-500/20 border border-pink-500/40">
                    <Layers className="h-8 w-8 text-pink-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">Decision Canvas</h2>
                    <p className="text-pink-300 text-sm font-mono">Human-AI Collaboration • Action Selection • Simulation</p>
                  </div>
                </div>

                {/* Video Background for Decision Canvas */}
                <motion.div
                  className="absolute inset-0 opacity-20 z-0 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/AI_Collaboration_Visualization_Generated.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
                  {/* Left: Causal Context */}
                  <div className="space-y-4">
                    <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/20">
                      <div className="flex items-center gap-2 mb-3">
                        <Brain className="h-5 w-5 text-cyan-400" />
                        <h3 className="text-sm font-bold text-white">Causal Context</h3>
                      </div>
                      <div className="text-xs text-gray-400 space-y-2">
                        <div>• Coverage → Engagement: +0.28</div>
                        <div>• Frequency → Engagement: +0.32</div>
                        <div>• Engagement → Market Share: +0.45</div>
                        <div>• Current Market Share: 12.4%</div>
                      </div>
                    </div>

                    {selectedIntent && (() => {
                      const intent = intentOptions.find(i => i.id === selectedIntent);
                      return (
                        <div className="space-y-3">
                          <div className="bg-black/40 rounded-xl p-4 border border-yellow-500/20">
                            <div className="flex items-center gap-2 mb-3">
                              <Target className="h-5 w-5 text-yellow-400" />
                              <h3 className="text-sm font-bold text-white">Intent</h3>
                            </div>
                            <div className="text-sm font-semibold text-white mb-1">{intent.goal}</div>
                            <div className="text-xs text-gray-400">Target: +{intent.target}{intent.unit}</div>
                          </div>

                          {/* AI Thinking: how intent maps to causal graph */}
                          <div className="bg-black/40 rounded-xl p-4 border border-cyan-500/20">
                            <div className="flex items-center gap-2 mb-2">
                              <Eye className="h-4 w-4 text-cyan-300" />
                              <h3 className="text-xs font-mono text-cyan-300">HOW THE ENGINE IS THINKING</h3>
                            </div>
                            <ul className="space-y-1 text-[11px] text-gray-300">
                              <li>• Parses your narrative and binds it to outcomes like <span className="text-cyan-300">Market Share</span> and <span className="text-cyan-300">Sales</span>.</li>
                              <li>• Locates the relevant subgraph in the enterprise SCM: actions → mediators → outcomes.</li>
                              <li>• Filters historical decisions in the DMG that match similar context and constraints.</li>
                              <li>• Prepares levers (coverage, frequency, messaging) that can move the target KPI.</li>
                            </ul>
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Middle: AI Recommendations */}
                  <div className="space-y-4">
                    <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-pink-500/20">
                      <div className="flex items-center gap-2 mb-3">
                        <Bot className="h-5 w-5 text-pink-400" />
                        <h3 className="text-sm font-bold text-white">AI Recommendations</h3>
                      </div>
                      <div className="space-y-3">
                        {actionOptions.map((action) => (
                          <motion.div
                            key={action.id}
                            onClick={() => {
                              setSelectedActions(prev => 
                                prev.includes(action.id)
                                  ? prev.filter(id => id !== action.id)
                                  : [...prev, action.id]
                              );
                            }}
                            className={`p-3 rounded-lg border cursor-pointer transition-all ${
                              selectedActions.includes(action.id)
                                ? 'border-pink-500 bg-pink-500/20'
                                : 'border-gray-700 bg-gray-800/30 hover:border-pink-500/50'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div className="text-sm font-semibold text-white">{action.name}</div>
                              {selectedActions.includes(action.id) && (
                                <CheckCircle className="h-4 w-4 text-pink-400" />
                              )}
                            </div>
                            <div className="text-xs text-gray-400 mb-2">{action.description}</div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-green-400 font-semibold">+{action.expectedEffect}% MS</span>
                              <span className="text-gray-400">{action.cost.toLocaleString()}</span>
                            </div>
                            <div className="text-xs text-cyan-400 mt-1">Path: {action.causalPath}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Visible AI reasoning about recommendations */}
                    {selectedActions.length > 0 && (
                      <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Lightbulb className="h-4 w-4 text-cyan-300" />
                          <h3 className="text-xs font-mono text-cyan-300">WHY THESE ACTIONS</h3>
                        </div>
                        <div className="space-y-1 text-[11px] text-gray-300">
                          <p>• Engine uses the causal graph to estimate how each selected lever moves <span className="text-cyan-300">Engagement</span>, <span className="text-cyan-300">Awareness</span> and finally <span className="text-cyan-300">Market Share</span>.</p>
                          <p>• Simulations combine your chosen actions with priors from historical decisions stored in the DMG.</p>
                          <p>• Confidence bands reflect uncertainty from past deviations between predicted and actual outcomes.</p>
                          <p className="text-[10px] text-gray-500 mt-1">You can override any suggestion — your override + reasons also become part of the learning loop.</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right: Simulation */}
                  <div className="space-y-4">
                    <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-green-500/20">
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="h-5 w-5 text-green-400" />
                        <h3 className="text-sm font-bold text-white">Simulation</h3>
                      </div>
                      
                      {!simulationResults && !simulationRunning && (
                        <button
                          onClick={runSimulation}
                          disabled={selectedActions.length === 0}
                          className="w-full px-4 py-3 rounded-lg border border-green-500/50 bg-green-600/20 hover:bg-green-600/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                        >
                          <Play className="h-4 w-4" />
                          <span className="text-sm font-mono">Run Simulation</span>
                        </button>
                      )}

                      {simulationRunning && (
                        <div className="flex items-center justify-center gap-3 py-8">
                          <RefreshCw className="h-6 w-6 animate-spin text-green-400" />
                          <div className="text-sm text-gray-400">Running counterfactual simulation...</div>
                        </div>
                      )}

                      {simulationResults && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="space-y-3"
                        >
                          <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/30">
                            <div className="text-xs text-green-300 mb-1">Expected Market Share</div>
                            <div className="text-2xl font-bold text-white">{simulationResults.expectedMarketShare.toFixed(1)}%</div>
                            <div className="text-xs text-gray-400 mt-1">Delta: +{simulationResults.delta.toFixed(1)}%</div>
                          </div>
                          <div className="text-xs text-gray-400">Confidence: {(simulationResults.confidence * 100).toFixed(0)}%</div>
                          <button
                            onClick={commitDecision}
                            className="w-full px-4 py-3 rounded-lg border border-green-500/50 bg-green-600/20 hover:bg-green-600/40 transition-all flex items-center justify-center gap-2"
                          >
                            <CheckCircle className="h-4 w-4" />
                            <span className="text-sm font-mono">Commit Decision</span>
                          </button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 5: DMG STORAGE */}
          {currentStep === 4 && (
            <motion.div
              key="dmg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="bg-black/60 backdrop-blur-xl rounded-2xl border-2 border-green-500/30 p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="p-4 rounded-xl bg-green-500/20 border border-green-500/40"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Network className="h-8 w-8 text-green-400" />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">Decision Memory Graph</h2>
                    <p className="text-green-300 text-sm font-mono">Storing Complete Decision Structure • Versioned • Temporal</p>
                  </div>
                </div>

                {!decisionCommitted ? (
                  <div className="bg-black/40 rounded-xl p-8 border border-green-500/20 text-center">
                    <AlertCircle className="h-16 w-16 mx-auto mb-4 text-yellow-400" />
                    <p className="text-gray-400">Please commit a decision in Step 4 to view DMG structure</p>
                  </div>
                ) : (
                  <>
                    <div className="bg-black/40 rounded-xl p-8 border border-green-500/20 min-h-[500px] relative overflow-hidden mb-6">
                      <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full">
                        {/* DMG Nodes */}
                        {[
                          { id: 'ctx', label: 'Context', type: 'context', x: 200, y: 250, color: '#06b6d4' },
                          { id: 'int', label: 'Intent', type: 'intent', x: 400, y: 150, color: '#f59e0b' },
                          { id: 'act1', label: 'Action 1', type: 'action', x: 600, y: 100, color: '#ec4899' },
                          { id: 'act2', label: 'Action 2', type: 'action', x: 600, y: 200, color: '#ec4899' },
                          { id: 'dec', label: 'Decision', type: 'decision', x: 800, y: 150, color: '#10b981' }
                        ].map((node, idx) => (
                          <motion.g
                            key={node.id}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.3, duration: 0.5 }}
                          >
                            <circle
                              cx={node.x}
                              cy={node.y}
                              r={45}
                              fill={node.color}
                              fillOpacity={0.2}
                              stroke={node.color}
                              strokeWidth={3}
                            />
                            <text
                              x={node.x}
                              y={node.y - 55}
                              textAnchor="middle"
                              className="text-sm font-bold fill-white"
                            >
                              {node.label}
                            </text>
                            <text
                              x={node.x}
                              y={node.y + 5}
                              textAnchor="middle"
                              className="text-xs fill-gray-400 uppercase"
                            >
                              {node.type}
                            </text>
                          </motion.g>
                        ))}

                        {/* DMG Edges */}
                        {[
                          { from: { x: 200, y: 250 }, to: { x: 400, y: 150 }, label: 'INFLUENCES', color: '#06b6d4' },
                          { from: { x: 400, y: 150 }, to: { x: 600, y: 100 }, label: 'TRIGGERS', color: '#f59e0b' },
                          { from: { x: 400, y: 150 }, to: { x: 600, y: 200 }, label: 'TRIGGERS', color: '#f59e0b' },
                          { from: { x: 600, y: 100 }, to: { x: 800, y: 150 }, label: 'RESULTS_IN', color: '#ec4899' },
                          { from: { x: 600, y: 200 }, to: { x: 800, y: 150 }, label: 'RESULTS_IN', color: '#ec4899' }
                        ].map((edge, idx) => (
                          <motion.g key={idx}>
                            <motion.line
                              x1={edge.from.x}
                              y1={edge.from.y}
                              x2={edge.to.x}
                              y2={edge.to.y}
                              stroke={edge.color}
                              strokeWidth={3}
                              strokeOpacity={0.6}
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ delay: idx * 0.3 + 0.5, duration: 1 }}
                            />
                            <motion.text
                              x={(edge.from.x + edge.to.x) / 2}
                              y={(edge.from.y + edge.to.y) / 2 - 10}
                              textAnchor="middle"
                              className="text-xs font-mono fill-gray-400"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: idx * 0.3 + 1 }}
                            >
                              {edge.label}
                            </motion.text>
                          </motion.g>
                        ))}
                      </svg>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/30">
                        <div className="text-xs text-cyan-300 mb-1">Context Node</div>
                        <div className="text-sm text-white">12.3M records</div>
                        <div className="text-xs text-gray-400">8 data sources</div>
                      </div>
                      <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/30">
                        <div className="text-xs text-yellow-300 mb-1">Intent Node</div>
                        <div className="text-sm text-white">Increase Market Share</div>
                        <div className="text-xs text-gray-400">Target: +5%</div>
                      </div>
                      <div className="bg-pink-500/10 rounded-lg p-4 border border-pink-500/30">
                        <div className="text-xs text-pink-300 mb-1">Action Nodes</div>
                        <div className="text-sm text-white">{selectedActions.length} actions</div>
                        <div className="text-xs text-gray-400">Committed</div>
                      </div>
                      <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                        <div className="text-xs text-green-300 mb-1">Decision Node</div>
                        <div className="text-sm text-white">D-20251114-99</div>
                        <div className="text-xs text-gray-400">Version 1</div>
                      </div>
                    </div>

                    <button
                      onClick={() => setCurrentStep(5)}
                      className="w-full sm:w-auto px-8 py-3 rounded-lg border border-green-500/50 bg-green-600/20 hover:bg-green-600/40 transition-all flex items-center justify-center gap-2 mx-auto"
                    >
                      <span className="text-sm font-mono">Track Consequences</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          )}

          {/* STEP 6: CONSEQUENCE TRACKING */}
          {currentStep === 5 && (
            <motion.div
              key="consequence"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="bg-black/60 backdrop-blur-xl rounded-2xl border-2 border-cyan-500/30 p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-cyan-500/20 border border-cyan-500/40">
                    <TrendingUp className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">Consequence Tracking</h2>
                    <p className="text-cyan-300 text-sm font-mono">Outcome Measurement • Time-Lag Aware • Causal Validation</p>
                  </div>
                </div>

                {!decisionCommitted ? (
                  <div className="bg-black/40 rounded-xl p-8 border border-cyan-500/20 text-center">
                    <AlertCircle className="h-16 w-16 mx-auto mb-4 text-yellow-400" />
                    <p className="text-gray-400">Please commit a decision to track consequences</p>
                  </div>
                ) : (
                  <>
                    {/* Video Background for Consequence Tracking */}
                    <motion.div
                      className="absolute inset-0 opacity-20 z-0 rounded-2xl overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: consequenceWeeks > 0 ? 0.2 : 0 }}
                      transition={{ duration: 1 }}
                    >
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src="/Video_Generation_Decision_Tracking_Loop.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
                    </motion.div>

                    {/* Timeline Progress */}
                    <div className="mb-6 relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-mono text-cyan-300">Tracking Progress</span>
                        <span className="text-sm font-mono text-cyan-400">Week {consequenceWeeks} / 12</span>
                      </div>
                      <div className="h-4 bg-gray-800 rounded-full overflow-hidden border border-cyan-500/30">
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                          initial={{ width: 0 }}
                          animate={{ width: `${(consequenceWeeks / 12) * 100}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>

                    {/* KPI Tracking */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 relative z-10">
                      <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                        <div className="text-xs text-green-300 mb-1">Market Share</div>
                        <div className="text-3xl font-bold text-white">
                          {(12.4 + (consequenceWeeks * 0.35)).toFixed(1)}%
                        </div>
                        <div className="text-xs text-gray-400 mt-1">Target: 17.4%</div>
                        <div className="text-xs text-green-400 mt-1">
                          +{((consequenceWeeks * 0.35) / 12.4 * 100).toFixed(1)}% from baseline
                        </div>
                      </div>
                      <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                        <div className="text-xs text-blue-300 mb-1">Coverage %</div>
                        <div className="text-3xl font-bold text-white">
                          {Math.min(68, 58 + (consequenceWeeks * 0.8)).toFixed(0)}%
                        </div>
                        <div className="text-xs text-gray-400 mt-1">Target: 68%</div>
                      </div>
                      <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30">
                        <div className="text-xs text-purple-300 mb-1">Sales Revenue</div>
                        <div className="text-3xl font-bold text-white">
                          ₹{(125000 + consequenceWeeks * 3500).toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">+{((consequenceWeeks * 3500) / 125000 * 100).toFixed(1)}%</div>
                      </div>
                    </div>

                    {/* Outcome Analysis */}
                    <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 mb-6 relative z-10">
                      <h3 className="text-lg font-bold text-white mb-4">Outcome Analysis</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">Expected Market Share</span>
                          <span className="text-sm font-semibold text-white">16.9%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">Actual Market Share (Week {consequenceWeeks})</span>
                          <span className="text-sm font-semibold text-green-400">
                            {(12.4 + consequenceWeeks * 0.35).toFixed(1)}%
                          </span>
                        </div>
                        <div className="h-px bg-gray-700 my-2" />
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">Causal Confidence</span>
                          <span className="text-sm font-semibold text-cyan-400">77%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">Data Quality Score</span>
                          <span className="text-sm font-semibold text-green-400">91%</span>
                        </div>
                      </div>
                    </div>

                    {consequenceWeeks >= 12 && (
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        onClick={() => setCurrentStep(6)}
                        className="w-full sm:w-auto px-8 py-3 rounded-lg border border-cyan-500/50 bg-cyan-600/20 hover:bg-cyan-600/40 transition-all flex items-center justify-center gap-2 mx-auto"
                      >
                        <span className="text-sm font-mono">Proceed to Learning Loop</span>
                        <ArrowRight className="h-4 w-4" />
                      </motion.button>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          )}

          {/* STEP 7: LEARNING LOOP */}
          {currentStep === 6 && (
            <motion.div
              key="learning"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="bg-black/60 backdrop-blur-xl rounded-2xl border-2 border-purple-500/30 p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="p-4 rounded-xl bg-purple-500/20 border border-purple-500/40"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <GitBranch className="h-8 w-8 text-purple-400" />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">Learning Loop</h2>
                    <p className="text-purple-300 text-sm font-mono">Causal Model Update • DMG Enrichment • Next Decision</p>
                  </div>
                </div>

                {/* Learning Loop Visualization */}
                <div className="bg-black/40 rounded-xl p-8 border border-purple-500/20 mb-6">
                  <div className="flex items-center justify-center gap-8 flex-wrap">
                    {/* Outcome */}
                    <motion.div
                      className="text-center"
                      animate={learningComplete ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-24 h-24 rounded-full bg-cyan-500/20 border-4 border-cyan-500 flex items-center justify-center mb-3 mx-auto">
                        <Activity className="h-12 w-12 text-cyan-400" />
                      </div>
                      <div className="text-xs text-gray-400">Outcome</div>
                      <div className="text-xs text-white font-mono mt-1">Measured</div>
                    </motion.div>

                    <ChevronRight className="h-8 w-8 text-purple-400" />

                    {/* Update Model */}
                    <motion.div
                      className="text-center"
                      animate={learningComplete ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      <div className="w-24 h-24 rounded-full bg-purple-500/20 border-4 border-purple-500 flex items-center justify-center mb-3 mx-auto">
                        <Brain className="h-12 w-12 text-purple-400" />
                      </div>
                      <div className="text-xs text-gray-400">Update Causal</div>
                      <div className="text-xs text-white font-mono mt-1">Model</div>
                    </motion.div>

                    <ChevronRight className="h-8 w-8 text-purple-400" />

                    {/* DMG Storage */}
                    <motion.div
                      className="text-center"
                      animate={learningComplete ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                      <div className="w-24 h-24 rounded-full bg-green-500/20 border-4 border-green-500 flex items-center justify-center mb-3 mx-auto">
                        <Network className="h-12 w-12 text-green-400" />
                      </div>
                      <div className="text-xs text-gray-400">DMG Storage</div>
                      <div className="text-xs text-white font-mono mt-1">Enriched</div>
                    </motion.div>

                    <ChevronRight className="h-8 w-8 text-purple-400" />

                    {/* Next Decision */}
                    <motion.div
                      className="text-center"
                      animate={learningComplete ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                    >
                      <div className="w-24 h-24 rounded-full bg-pink-500/20 border-4 border-pink-500 flex items-center justify-center mb-3 mx-auto">
                        <Target className="h-12 w-12 text-pink-400" />
                      </div>
                      <div className="text-xs text-gray-400">Next Decision</div>
                      <div className="text-xs text-white font-mono mt-1">Informed</div>
                    </motion.div>
                  </div>

                  <div className="mt-8 text-center">
                    <div className="text-sm text-gray-400 mb-4">
                      Decision recorded in Decision Memory Graph (DMG) • Causal priors updated • Ready for next cycle
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30">
                        <div className="text-xs text-purple-300 mb-1">Causal Priors Updated</div>
                        <div className="text-lg font-bold text-white">Coverage: 0.28 → 0.31</div>
                        <div className="text-xs text-gray-400">Based on actual outcomes</div>
                      </div>
                      <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                        <div className="text-xs text-green-300 mb-1">DMG Nodes</div>
                        <div className="text-lg font-bold text-white">6 nodes</div>
                        <div className="text-xs text-gray-400">Fully connected</div>
                      </div>
                      <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/30">
                        <div className="text-xs text-cyan-300 mb-1">Model Accuracy</div>
                        <div className="text-lg font-bold text-white">85% → 88%</div>
                        <div className="text-xs text-gray-400">Improved</div>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  onClick={() => {
                    setLearningComplete(true);
                    setTimeout(() => {
                      setCurrentStep(0);
                      setIngestionProgress(0);
                      setCausalDiscoveryProgress(0);
                      setSelectedIntent(null);
                      setSelectedActions([]);
                      setSimulationResults(null);
                      setDecisionCommitted(false);
                      setConsequenceWeeks(0);
                      setLearningComplete(false);
                    }, 2000);
                  }}
                  className="w-full sm:w-auto px-8 py-3 rounded-lg border border-purple-500/50 bg-purple-600/20 hover:bg-purple-600/40 transition-all flex items-center justify-center gap-2 mx-auto"
                >
                  <RefreshCw className="h-4 w-4" />
                  <span className="text-sm font-mono">Start New Decision Cycle</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-cyan-500/30 bg-cyan-600/10 hover:bg-cyan-600/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-mono">Previous</span>
          </button>
          <button
            onClick={() => setCurrentStep(Math.min(6, currentStep + 1))}
            disabled={currentStep === 6}
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-cyan-500/30 bg-cyan-600/10 hover:bg-cyan-600/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <span className="text-sm font-mono">Next</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PharmaPrototype;
