import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Brain, Zap, MessageCircle, Bot, CheckCircle, AlertCircle } from 'lucide-react';
import NavBar from './NavBar';

// Typing Animation Component
const TypingText = ({ text, delay = 0, speed = 60, cycleKey = 0, textClassName = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval = null;

    const startTyping = () => {
      setShowCursor(true);
      currentIndex = 0;
      setDisplayedText('');

      typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setShowCursor(false);
        }
      }, speed);
    };

    const initialTimer = setTimeout(() => {
      startTyping();
    }, delay * 1000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(typingInterval);
    };
  }, [text, delay, speed, cycleKey]);

  return (
    <span className={`terminal-font ${textClassName}`} style={{ color: 'inherit' }}>
      {displayedText}
      {showCursor && <span className="terminal-cursor" />}
    </span>
  );
};

const CausalIntelligenceDetail = () => {
  const [activeConversationIndex, setActiveConversationIndex] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const chatContainerRef = useRef(null);
  const loopTimeoutRef = useRef(null);
  const isPlayingRef = useRef(false);

  // Multiple conversations showing different causal intelligence challenges
  const conversations = [
    {
      id: 'black-box',
      title: 'Black Box AI Problem',
      header: 'ANALYTICS DISCUSSION',
      borderColor: 'rgba(139, 92, 246, 0.3)',
      headerColor: '#8b5cf6',
      messages: [
        {
          persona: '[DATA ANALYST]',
          prompt: 'SPEAKING...',
          color: '#8b5cf6',
          text: "Our AI model says this customer will churn with 85% confidence. But when I ask why, it can't explain. Marketing wants to know what to fix. I have no answers. It's a black box.",
          type: 'user'
        },
        {
          persona: '[MANAGER]',
          prompt: 'RESPONDING...',
          color: '#ec4899',
          text: "We can't act on predictions we don't understand. If we don't know WHY a customer will churn, how do we prevent it? We're stuck.",
          type: 'user'
        },
        {
          persona: '[VANTAGE BRILLIANCE]',
          prompt: 'ANALYZING...',
          color: '#06b6d4',
          text: "I don't just predict—I explain. Using causal inference (DoWhy, CausalNex), I identify the exact factors causing churn: 'Price increase last month caused 3x higher churn risk. Support ticket volume correlated but didn't cause it.' Now you know WHAT to fix and WHY it matters.",
          type: 'vantage',
          metrics: [
            { value: '85%', label: 'Confidence' },
            { value: '100%', label: 'Explainable' }
          ]
        },
        {
          persona: '[RESULTS]',
          prompt: 'TRACKING...',
          color: '#10b981',
          text: "Marketing adjusted pricing strategy based on causal insights. Support focused on actual causes, not correlations. Churn reduced 42% in 2 months. Every prediction now comes with a clear explanation.",
          type: 'outcome',
          metrics: [
            { value: '42%', label: 'Churn Reduction' },
            { value: '100%', label: 'Actionable Insights' }
          ]
        }
      ]
    },
    {
      id: 'correlation-vs-causation',
      title: 'Correlation vs Causation',
      header: 'STRATEGY DISCUSSION',
      borderColor: 'rgba(236, 72, 153, 0.3)',
      headerColor: '#ec4899',
      messages: [
        {
          persona: '[CEO]',
          prompt: 'SPEAKING...',
          color: '#ec4899',
          text: "We see that sales drop every time we launch a new product. Correlation says: 'Stop launching products.' But that doesn't make sense. What's really happening?",
          type: 'user'
        },
        {
          persona: '[STRATEGY]',
          prompt: 'JOINING...',
          color: '#8b5cf6',
          text: "Correlation is dangerous. Two things happening together doesn't mean one causes the other. We need to understand the REAL cause, not just what happened together.",
          type: 'user'
        },
        {
          persona: '[VANTAGE BRILLIANCE]',
          prompt: 'ANALYZING...',
          color: '#06b6d4',
          text: "I distinguish correlation from causation. Analysis shows: Product launches don't cause sales drops. The REAL cause? Resource allocation shifts during launches reduce sales team focus. Fix: Maintain sales resources during launches. Problem solved. Sales increased 28% while launching more products.",
          type: 'vantage',
          metrics: [
            { value: '28%', label: 'Sales Increase' },
            { value: 'True', label: 'Root Cause Found' }
          ]
        },
        {
          persona: '[RESULTS]',
          prompt: 'TRACKING...',
          color: '#10b981',
          text: "Now launching products AND growing sales. We fixed the real cause (resource allocation), not the correlation (product launches). Decisions based on causation, not correlation.",
          type: 'outcome',
          metrics: [
            { value: '100%', label: 'Correct Diagnosis' },
            { value: '3x', label: 'More Product Launches' }
          ]
        }
      ]
    },
    {
      id: 'surface-symptoms',
      title: 'Treating Symptoms',
      header: 'OPERATIONS DISCUSSION',
      borderColor: 'rgba(245, 158, 11, 0.3)',
      headerColor: '#f59e0b',
      messages: [
        {
          persona: '[COO]',
          prompt: 'SPEAKING...',
          color: '#f59e0b',
          text: "Customer satisfaction keeps dropping. We've tried everything: faster support, better training, new tools. Nothing works long-term. We're treating symptoms, not the disease.",
          type: 'user'
        },
        {
          persona: '[SUPPORT MANAGER]',
          prompt: 'RESPONDING...',
          color: '#06b6d4',
          text: "We keep fixing surface issues. Support tickets spike? Hire more agents. But tickets keep coming. We never address WHY they're happening in the first place.",
          type: 'user'
        },
        {
          persona: '[VANTAGE BRILLIANCE]',
          prompt: 'ANALYZING...',
          color: '#06b6d4',
          text: "I find the deeper issue. Causal analysis reveals: Product bugs cause support tickets. Support delays cause satisfaction drops. But the ROOT CAUSE? Development team pressure to ship fast, skipping QA. Fix: Improve development process. Support tickets dropped 67%. Satisfaction increased 51%. You fixed the cause, not the symptom.",
          type: 'vantage',
          metrics: [
            { value: '67%', label: 'Tickets Reduced' },
            { value: '51%', label: 'Satisfaction Up' }
          ]
        },
        {
          persona: '[RESULTS]',
          prompt: 'TRACKING...',
          color: '#10b981',
          text: "Stopped treating symptoms. Fixed root cause in development process. Support load dropped permanently. Customer satisfaction stabilized. One fix solved multiple problems.",
          type: 'outcome',
          metrics: [
            { value: 'Permanent', label: 'Solution' },
            { value: 'Multiple', label: 'Problems Solved' }
          ]
        }
      ]
    },
    {
      id: 'hidden-patterns',
      title: 'Hidden Patterns',
      header: 'DATA SCIENCE DISCUSSION',
      borderColor: 'rgba(6, 182, 212, 0.3)',
      headerColor: '#06b6d4',
      messages: [
        {
          persona: '[DATA SCIENTIST]',
          prompt: 'SPEAKING...',
          color: '#06b6d4',
          text: "We have millions of data points across sales, marketing, product, support. Traditional analytics shows obvious patterns. But we're missing the hidden connections. The insights that aren't obvious.",
          type: 'user'
        },
        {
          persona: '[PRODUCT MANAGER]',
          prompt: 'JOINING...',
          color: '#8b5cf6',
          text: "We need to discover insights we don't know to look for. Patterns across teams, systems, time periods. Causal relationships we can't see manually.",
          type: 'user'
        },
        {
          persona: '[VANTAGE BRILLIANCE]',
          prompt: 'ANALYZING...',
          color: '#06b6d4',
          text: "I analyze millions of data points across your entire organization. I discover hidden causal patterns: 'Marketing campaigns in Q3 cause product usage spikes in Q4, but only for enterprise customers.' 'Support ticket resolution time correlates with sales team quota achievement.' Patterns you didn't know existed. Insights you can act on.",
          type: 'vantage',
          metrics: [
            { value: 'Millions', label: 'Data Points' },
            { value: 'Hidden', label: 'Patterns Found' }
          ]
        },
        {
          persona: '[RESULTS]',
          prompt: 'TRACKING...',
          color: '#10b981',
          text: "Discovered 12 hidden causal patterns. Aligned marketing campaigns with product roadmaps. Coordinated support and sales processes. Revenue increased 31% from better cross-functional alignment.",
          type: 'outcome',
          metrics: [
            { value: '12', label: 'New Patterns' },
            { value: '31%', label: 'Revenue Increase' }
          ]
        }
      ]
    }
  ];

  // Auto-play conversation messages
  useEffect(() => {
    const currentConversation = conversations[activeConversationIndex];
    if (!currentConversation) return;

    isPlayingRef.current = true;
    setCurrentMessageIndex(0);
    setDisplayedMessages([]);

    const playMessage = (msgIndex) => {
      if (!isPlayingRef.current || msgIndex >= currentConversation.messages.length) {
        // Loop conversation
        setTimeout(() => {
          if (isPlayingRef.current) {
            setCurrentMessageIndex(0);
            setDisplayedMessages([]);
            playMessage(0);
          }
        }, 5000);
        return;
      }

      setIsTyping(true);
      const msg = currentConversation.messages[msgIndex];
      const typingDuration = Math.min(msg.text.length * 15, 2500);

      setTimeout(() => {
        setIsTyping(false);
        setDisplayedMessages(prev => {
          if (prev.length === msgIndex) {
            return [...prev, msg];
          }
          return prev;
        });
        setCurrentMessageIndex(msgIndex + 1);

        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }

        const delay = msg.type === 'user' ? 4000 : msg.type === 'vantage' ? 5000 : 4000;
        loopTimeoutRef.current = setTimeout(() => {
          playMessage(msgIndex + 1);
        }, delay);
      }, typingDuration);
    };

    playMessage(0);

    return () => {
      isPlayingRef.current = false;
      if (loopTimeoutRef.current) {
        clearTimeout(loopTimeoutRef.current);
      }
    };
  }, [activeConversationIndex]);

  const currentConversation = conversations[activeConversationIndex];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop
            playsInline
          >
            <source src="/Causal_Intelligence_Video_Generation.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </div>

        {/* Neural Network Pattern */}
        <motion.img
          src="/neuralnetworkpattern.png"
          alt="Neural Network"
          className="absolute top-0 left-0 w-full h-full opacity-[0.08] z-[1]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold futuristic-heading">
              Causal <span style={{
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 30%, #8b5cf6 70%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Intelligence</span>
            </h1>
          </div>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Real conversations about understanding WHY, not just WHAT. See how Vantage Brilliance explains causality.
          </p>
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors futuristic-subheading"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Demo
          </Link>
        </motion.div>
      </section>

      {/* Chat Conversations Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
        {/* Video Background */}
        <motion.div 
          className="absolute inset-0 opacity-15 z-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          transition={{ duration: 1.2 }}
          viewport={{ amount: 0.2 }}
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Conversation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {conversations.map((conv, index) => (
              <motion.button
                key={conv.id}
                onClick={() => setActiveConversationIndex(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all futuristic-subheading ${
                  activeConversationIndex === index
                    ? 'bg-gradient-to-r from-purple-600/40 to-pink-600/40 border border-purple-500/50 text-white'
                    : 'bg-black/40 border border-purple-500/20 text-gray-300 hover:border-purple-500/40'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {conv.title}
              </motion.button>
            ))}
          </div>

          {/* Active Chat Window */}
          <motion.div
            key={activeConversationIndex}
            className="bg-black/30 backdrop-blur-sm rounded-2xl border overflow-hidden shadow-xl"
            style={{ borderColor: currentConversation.borderColor }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Chat Header */}
            <div 
              className="p-4 border-b"
              style={{ 
                borderColor: currentConversation.borderColor,
                background: `linear-gradient(to right, ${currentConversation.headerColor}15, transparent)`
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(135deg, ${currentConversation.headerColor}40, ${currentConversation.headerColor}20)`
                    }}
                  >
                    <Brain className="h-5 w-5" style={{ color: currentConversation.headerColor }} />
                  </div>
                  <div>
                    <div 
                      className="text-xs font-semibold mb-1"
                      style={{ color: currentConversation.headerColor }}
                    >
                      {currentConversation.header}
                    </div>
                    <h3 className="futuristic-subheading text-lg text-white">{currentConversation.title}</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div 
              ref={chatContainerRef}
              className="p-6 space-y-4 max-h-[500px] overflow-y-auto"
              style={{ scrollBehavior: 'smooth' }}
            >
              {displayedMessages.map((msg, msgIndex) => (
                <motion.div
                  key={`${msgIndex}-${msg.persona}`}
                  className={`flex ${msg.type === 'user' ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {msg.type === 'user' ? (
                    <div className="max-w-[80%] bg-gray-800/60 text-gray-200 border border-gray-700/40 rounded-lg px-4 py-3 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <span 
                          className="text-xs font-semibold"
                          style={{ color: msg.color }}
                        >
                          {msg.persona} {'>'} {msg.prompt}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                        {msg.text}
                      </p>
                    </div>
                  ) : msg.type === 'vantage' ? (
                    <div className="max-w-[80%] bg-gradient-to-br from-purple-500/70 via-pink-500/60 to-purple-500/70 text-white border border-purple-400/30 shadow-lg shadow-purple-500/15 rounded-lg px-4 py-3 backdrop-blur-sm">
                      <div className="flex items-center space-x-2 mb-2">
                        <Bot className="h-4 w-4 text-purple-200" />
                        <span className="text-xs font-semibold">VANTAGE BRILLIANCE</span>
                        <span className="text-xs" style={{ color: msg.color }}>
                          {'>'} {msg.prompt}
                        </span>
                      </div>
                      <p className="text-sm text-purple-100/90 leading-relaxed mb-3" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                        {msg.text}
                      </p>
                      {msg.metrics && msg.metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-purple-400/30">
                          {msg.metrics.map((metric, i) => (
                            <div key={i} className="bg-purple-500/20 rounded px-3 py-2 border border-purple-400/30">
                              <div className="text-sm font-bold text-purple-100">{metric.value}</div>
                              <div className="text-xs text-purple-300/70 mt-1">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : msg.type === 'outcome' ? (
                    <div className="max-w-[80%] bg-green-600/20 border border-green-500/30 text-green-100 rounded-lg px-4 py-3 backdrop-blur-sm">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-xs font-semibold">{msg.persona}</span>
                        <span className="text-xs text-green-400">
                          {'>'} {msg.prompt}
                        </span>
                      </div>
                      <p className="text-sm mb-3 leading-relaxed" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                        {msg.text}
                      </p>
                      {msg.metrics && msg.metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-green-400/20">
                          {msg.metrics.map((metric, i) => (
                            <div key={i} className="text-center bg-green-500/10 rounded px-3 py-2 border border-green-400/20">
                              <div className="text-sm font-bold text-green-300">{metric.value}</div>
                              <div className="text-xs text-green-400/70 mt-1">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : null}
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-end">
                  <div className="bg-gradient-to-br from-purple-500/70 to-pink-500/60 rounded-lg px-4 py-3 backdrop-blur-sm border border-purple-400/30">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-purple-100 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-purple-100 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-purple-100 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Causal Intelligence Preview Snippet */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 futuristic-heading">A Glimpse of Causal Analysis</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Root cause analysis using DoWhy, CausalNex. Not correlations—actual causes explained.
            </p>
          </motion.div>

          {/* Causal Analysis Snippet Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl border border-purple-500/30 overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-4 border-b border-purple-500/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Brain className="h-5 w-5 text-purple-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Causal Analysis Dashboard</h3>
                    <p className="text-sm text-gray-400">Customer Churn Analysis • DoWhy + CausalNex</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-xs text-gray-400">Confidence</div>
                    <div className="text-lg font-bold text-purple-400">89%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-3 gap-4 p-6">
              {/* Left: Root Causes */}
              <div className="bg-black/40 rounded-xl p-4 border border-purple-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="h-4 w-4 text-purple-400" />
                  <h4 className="text-sm font-semibold text-white">Root Causes Identified</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-purple-300">Price Increase</span>
                      <span className="text-xs text-red-400">High Impact</span>
                    </div>
                    <div className="text-xs text-gray-300 mb-1">Causal Strength: 89%</div>
                    <div className="text-xs text-gray-400">Causes 3x higher churn risk</div>
                    <div className="h-1.5 bg-purple-500/20 rounded-full overflow-hidden mt-2">
                      <div className="h-full bg-red-500 rounded-full" style={{ width: '89%' }}></div>
                    </div>
                  </div>
                  <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-purple-300">Support Response Time</span>
                      <span className="text-xs text-yellow-400">Medium Impact</span>
                    </div>
                    <div className="text-xs text-gray-300 mb-1">Causal Strength: 67%</div>
                    <div className="text-xs text-gray-400">Correlated but not causal</div>
                    <div className="h-1.5 bg-purple-500/20 rounded-full overflow-hidden mt-2">
                      <div className="h-full bg-yellow-500 rounded-full" style={{ width: '67%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center: Causal Graph */}
              <div className="bg-black/40 rounded-xl p-4 border border-pink-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="h-4 w-4 text-pink-400" />
                  <h4 className="text-sm font-semibold text-white">Causal Relationships</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-pink-500/10 rounded-lg p-3 border border-pink-500/30">
                    <div className="text-xs font-semibold text-pink-300 mb-2">Causal Chain</div>
                    <div className="text-xs text-gray-300 mb-1">Price Increase →</div>
                    <div className="text-xs text-pink-400 mb-1">↓ (89% strength)</div>
                    <div className="text-xs text-gray-300 mb-1">Customer Dissatisfaction →</div>
                    <div className="text-xs text-pink-400 mb-1">↓ (76% strength)</div>
                    <div className="text-xs text-red-400 font-semibold">Churn</div>
                  </div>
                  <div className="bg-pink-500/10 rounded-lg p-3 border border-pink-500/30">
                    <div className="text-xs font-semibold text-pink-300 mb-2">Analysis Method</div>
                    <div className="text-xs text-gray-300">• DoWhy: Causal inference</div>
                    <div className="text-xs text-gray-300">• CausalNex: Graph structure</div>
                    <div className="text-xs text-green-400 mt-1">✓ True causation identified</div>
                  </div>
                </div>
              </div>

              {/* Right: Insights */}
              <div className="bg-black/40 rounded-xl p-4 border border-purple-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <h4 className="text-sm font-semibold text-white">Actionable Insights</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/30">
                    <div className="text-xs font-semibold text-green-300 mb-2">Recommendation</div>
                    <div className="text-xs text-gray-300 mb-1">Fix pricing strategy first</div>
                    <div className="text-xs text-gray-300">Expected impact: -73% churn risk</div>
                  </div>
                  <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/30">
                    <div className="text-xs font-semibold text-purple-300 mb-2">Not a Cause</div>
                    <div className="text-xs text-gray-300 mb-1">Support tickets: Correlation only</div>
                    <div className="text-xs text-gray-400">Focus on root cause instead</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 futuristic-heading">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Causal inference using DoWhy, CausalNex, and PyWhy. Not correlations—actual causes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Brain,
                title: 'Root Cause vs Correlation',
                description: "Correlation shows what happened together. Causal analysis reveals WHY one thing causes another. I distinguish between correlation and true causation.",
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Zap,
                title: 'Pattern Recognition',
                description: "Across millions of data points, I discover hidden causal patterns and organizational misalignments that traditional analytics can't see.",
                color: 'from-pink-500 to-rose-500'
              },
              {
                icon: AlertCircle,
                title: 'The Deeper Issue',
                description: "I find systemic problems, not just surface symptoms. Instead of treating symptoms, I help you fix root causes for permanent solutions.",
                color: 'from-purple-500 to-indigo-500'
              },
              {
                icon: CheckCircle,
                title: 'Explainable AI',
                description: "Every prediction comes with a clear explanation. I don't just tell you WHAT will happen—I explain WHY it will happen and what causes it.",
                color: 'from-indigo-500 to-purple-500'
              }
            ].map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${capability.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 futuristic-subheading">{capability.title}</h3>
                  <p className="text-gray-300 leading-relaxed futuristic-body">{capability.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-900/10 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 futuristic-heading">
              Ready to Understand <span style={{
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 30%, #8b5cf6 70%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>WHY?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              See how Vantage Brilliance explains causality and helps you fix root causes, not symptoms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600/40 to-pink-600/40 hover:from-purple-600/60 hover:to-pink-600/60 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:neural-glow futuristic-subheading border border-purple-500/50"
              >
                Schedule a Demo
              </Link>
              <Link
                to="/demo"
                className="border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-4 rounded-lg font-semibold transition-all futuristic-subheading inline-flex items-center justify-center gap-2"
              >
                Continue to Step 3
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CausalIntelligenceDetail;

