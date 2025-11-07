import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sparkles, Zap, MessageCircle, Bot, CheckCircle, TrendingUp, RefreshCw, BarChart3, Clock } from 'lucide-react';
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

const DecisionTrackingDetail = () => {
  const [activeConversationIndex, setActiveConversationIndex] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const chatContainerRef = useRef(null);
  const loopTimeoutRef = useRef(null);
  const isPlayingRef = useRef(false);

  // Multiple conversations showing different decision tracking challenges
  const conversations = [
    {
      id: 'no-memory',
      title: 'No Institutional Memory',
      header: 'STRATEGY DISCUSSION',
      borderColor: 'rgba(16, 185, 129, 0.3)',
      headerColor: '#10b981',
      messages: [
        {
          persona: '[CEO]',
          prompt: 'SPEAKING...',
          color: '#10b981',
          text: "We made this exact pricing mistake last year. Why are we repeating it? No one remembers what worked. No one knows what failed. We have no institutional memory.",
          type: 'user'
        },
        {
          persona: '[STRATEGY]',
          prompt: 'RESPONDING...',
          color: '#06b6d4',
          text: "Every decision lives in someone's head or an old email. When that person leaves, the knowledge leaves. We're constantly reinventing the wheel, repeating mistakes.",
          type: 'user'
        },
        {
          persona: '[VANTAGE BRILLIANCE]',
          prompt: 'TRACKING...',
          color: '#06b6d4',
          text: "I track every decision we make together. What we decided, why we decided it, what we predicted, what actually happened. I build institutional memory. Your organization learns from every decision, even after people leave. No repeated mistakes. No forgotten learnings.",
          type: 'vantage',
          metrics: [
            { value: '100%', label: 'Decisions Tracked' },
            { value: 'Forever', label: 'Memory' }
          ]
        },
        {
          persona: '[RESULTS]',
          prompt: 'TRACKING...',
          color: '#10b981',
          text: "Institutional memory built. No repeated mistakes. New team members learn from past decisions instantly. Decision quality improved 47%. Knowledge preserved permanently.",
          type: 'outcome',
          metrics: [
            { value: '47%', label: 'Better Decisions' },
            { value: '0', label: 'Repeated Mistakes' }
          ]
        }
      ]
    },
    {
      id: 'duplicate-efforts',
      title: 'Duplicate Efforts',
      header: 'OPERATIONS DISCUSSION',
      borderColor: 'rgba(6, 182, 212, 0.3)',
      headerColor: '#06b6d4',
      messages: [
        {
          persona: '[CFO]',
          prompt: 'SPEAKING...',
          color: '#06b6d4',
          text: "Last quarter, we spent $2.4M on duplicate efforts. Teams solving problems others already solved. Launching features that failed before. We don't learn from outcomes.",
          type: 'user'
        },
        {
          persona: '[PRODUCT]',
          prompt: 'JOINING...',
          color: '#8b5cf6',
          text: "Product team doesn't know what marketing learned. Sales doesn't know what support discovered. We're working in silos, duplicating efforts constantly.",
          type: 'user'
        },
        {
          persona: '[VANTAGE BRILLIANCE]',
          prompt: 'LEARNING...',
          color: '#06b6d4',
          text: "I track outcomes of every decision across all teams. Product sees what marketing learned. Sales sees what support discovered. Everyone learns from everyone. No duplicate efforts. No repeated failures. Your organization gets smarter with every decision.",
          type: 'vantage',
          metrics: [
            { value: '$2.4M', label: 'Waste Prevented' },
            { value: '100%', label: 'Knowledge Shared' }
          ]
        },
        {
          persona: '[RESULTS]',
          prompt: 'TRACKING...',
          color: '#10b981',
          text: "Duplicate efforts reduced by 78%. Teams learn from each other's decisions. Faster execution. Better outcomes. True organizational intelligence.",
          type: 'outcome',
          metrics: [
            { value: '78%', label: 'Less Duplication' },
            { value: '3x', label: 'Faster Execution' }
          ]
        }
      ]
    },
    {
      id: 'outcome-tracking',
      title: 'Outcome Tracking',
      header: 'ANALYTICS DISCUSSION',
      borderColor: 'rgba(139, 92, 246, 0.3)',
      headerColor: '#8b5cf6',
      messages: [
        {
          persona: '[DATA ANALYST]',
          prompt: 'SPEAKING...',
          color: '#8b5cf6',
          text: "We make predictions, make decisions, but we never track if we were right. Did our pricing strategy work? Did our campaign succeed? We don't know. We just move on.",
          type: 'user'
        },
        {
          persona: '[MANAGER]',
          prompt: 'RESPONDING...',
          color: '#ec4899',
          text: "We need to measure actual outcomes vs predictions. Learn what works, what doesn't. Improve our decision-making over time. But we have no system to track this.",
          type: 'user'
        },
        {
          persona: '[VANTAGE BRILLIANCE]',
          prompt: 'MEASURING...',
          color: '#06b6d4',
          text: "I measure actual outcomes vs what we predicted for every decision. Did we achieve expected ROI? Did predictions match reality? I learn what works for your business specifically. Your decision-making gets better over time. Continuous improvement, not guesswork.",
          type: 'vantage',
          metrics: [
            { value: '100%', label: 'Outcomes Tracked' },
            { value: 'Continuous', label: 'Learning' }
          ]
        },
        {
          persona: '[RESULTS]',
          prompt: 'TRACKING...',
          color: '#10b981',
          text: "Now tracking all outcomes. Decision accuracy improved 34% in 6 months. Predictions getting better. ROI predictions within 5% of actual. Continuous learning in action.",
          type: 'outcome',
          metrics: [
            { value: '34%', label: 'Accuracy Improvement' },
            { value: '5%', label: 'ROI Prediction Error' }
          ]
        }
      ]
    },
    {
      id: 'continuous-learning',
      title: 'Continuous Learning',
      header: 'LEADERSHIP DISCUSSION',
      borderColor: 'rgba(236, 72, 153, 0.3)',
      headerColor: '#ec4899',
      messages: [
        {
          persona: '[CEO]',
          prompt: 'SPEAKING...',
          color: '#ec4899',
          text: "We need our organization to get smarter over time. Learn from successes, learn from failures. Build intelligence that compounds. But how?",
          type: 'user'
        },
        {
          persona: '[CTO]',
          prompt: 'RESPONDING...',
          color: '#06b6d4',
          text: "We need systems that learn, not just execute. Track what works, adapt, improve. Build organizational intelligence that gets better with every decision.",
          type: 'user'
        },
        {
          persona: '[VANTAGE BRILLIANCE]',
          prompt: 'LEARNING...',
          color: '#06b6d4',
          text: "I learn from every decision we make together. What works for your business, what doesn't. I get smarter about YOUR organization specifically. Every decision improves the next. Your organization builds intelligence that compounds. Continuous learning, not static systems.",
          type: 'vantage',
          metrics: [
            { value: 'Every', label: 'Decision' },
            { value: 'Compounding', label: 'Intelligence' }
          ]
        },
        {
          persona: '[RESULTS]',
          prompt: 'TRACKING...',
          color: '#10b981',
          text: "Organizational intelligence compounding. Decision quality improving 12% every quarter. ROI predictions getting more accurate. Teams getting smarter. True learning organization.",
          type: 'outcome',
          metrics: [
            { value: '12%', label: 'Quarterly Improvement' },
            { value: 'Compounding', label: 'Intelligence' }
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
            <source src="/Video_Generation_Decision_Tracking_Loop.mp4" type="video/mp4" />
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
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold futuristic-heading">
              Decision Tracking & <span style={{
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 30%, #8b5cf6 70%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Learning Loop</span>
            </h1>
          </div>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Real conversations about learning from every decision. See how Vantage Brilliance builds institutional memory.
          </p>
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 text-green-300 hover:text-green-200 transition-colors futuristic-subheading"
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
            <source src="/Video_Generation_Decision_Tracking_Loop.mp4" type="video/mp4" />
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
                    ? 'bg-gradient-to-r from-green-600/40 to-emerald-600/40 border border-green-500/50 text-white'
                    : 'bg-black/40 border border-green-500/20 text-gray-300 hover:border-green-500/40'
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
                    <Sparkles className="h-5 w-5" style={{ color: currentConversation.headerColor }} />
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
                    <div className="max-w-[80%] bg-gradient-to-br from-green-500/70 via-emerald-500/60 to-green-500/70 text-white border border-green-400/30 shadow-lg shadow-green-500/15 rounded-lg px-4 py-3 backdrop-blur-sm">
                      <div className="flex items-center space-x-2 mb-2">
                        <Bot className="h-4 w-4 text-green-200" />
                        <span className="text-xs font-semibold">VANTAGE BRILLIANCE</span>
                        <span className="text-xs" style={{ color: msg.color }}>
                          {'>'} {msg.prompt}
                        </span>
                      </div>
                      <p className="text-sm text-green-100/90 leading-relaxed mb-3" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                        {msg.text}
                      </p>
                      {msg.metrics && msg.metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-green-400/30">
                          {msg.metrics.map((metric, i) => (
                            <div key={i} className="bg-green-500/20 rounded px-3 py-2 border border-green-400/30">
                              <div className="text-sm font-bold text-green-100">{metric.value}</div>
                              <div className="text-xs text-green-300/70 mt-1">{metric.label}</div>
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
                  <div className="bg-gradient-to-br from-green-500/70 to-emerald-500/60 rounded-lg px-4 py-3 backdrop-blur-sm border border-green-400/30">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-green-100 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-green-100 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-green-100 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Decision Tracker Preview Snippet */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 futuristic-heading">A Glimpse of Decision Tracker</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Track outcomes, build institutional memory, and learn from every decision.
            </p>
          </motion.div>

          {/* Decision Tracker Snippet Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-2xl border border-green-500/30 overflow-hidden shadow-2xl"
          >
            {/* Tracker Header */}
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 p-4 border-b border-green-500/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-green-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Decision Tracking Dashboard</h3>
                    <p className="text-sm text-gray-400">All Decisions • Learning Loop</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-xs text-gray-400">Total Decisions</div>
                    <div className="text-lg font-bold text-green-400">247</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tracker Content Grid */}
            <div className="grid md:grid-cols-3 gap-4 p-6">
              {/* Left: Recent Decisions */}
              <div className="bg-black/40 rounded-xl p-4 border border-green-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-green-400" />
                  <h4 className="text-sm font-semibold text-white">Recent Decisions</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-green-300">Q2 Pricing Strategy</span>
                      <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">Completed</span>
                    </div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-gray-400">Predicted ROI</span>
                      <span className="text-green-400 font-bold">2.3x</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Actual ROI</span>
                      <span className="text-green-400 font-bold">2.4x</span>
                    </div>
                    <div className="mt-2 text-xs text-green-400">✓ Prediction Accuracy: 96%</div>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-green-300">Market Expansion</span>
                      <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">In Progress</span>
                    </div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-gray-400">Predicted Success</span>
                      <span className="text-green-400 font-bold">78%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Current Status</span>
                      <span className="text-green-400 font-bold">On Track</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center: Learning Insights */}
              <div className="bg-black/40 rounded-xl p-4 border border-emerald-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="h-4 w-4 text-emerald-400" />
                  <h4 className="text-sm font-semibold text-white">Learning Insights</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-emerald-500/10 rounded-lg p-3 border border-emerald-500/30">
                    <div className="text-xs font-semibold text-emerald-300 mb-2">What's Working</div>
                    <div className="text-xs text-gray-300 mb-1">• Phased approaches: 85% success rate</div>
                    <div className="text-xs text-gray-300 mb-1">• Causal analysis improves accuracy 34%</div>
                    <div className="text-xs text-gray-300">• Collaborative decisions: 94% success</div>
                  </div>
                  <div className="bg-emerald-500/10 rounded-lg p-3 border border-emerald-500/30">
                    <div className="text-xs font-semibold text-emerald-300 mb-2">What to Avoid</div>
                    <div className="text-xs text-gray-300 mb-1">• Aggressive pricing without testing: 45% success</div>
                    <div className="text-xs text-gray-300">• Decisions without causal analysis: Higher risk</div>
                  </div>
                </div>
              </div>

              {/* Right: Institutional Memory */}
              <div className="bg-black/40 rounded-xl p-4 border border-green-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <RefreshCw className="h-4 w-4 text-green-400" />
                  <h4 className="text-sm font-semibold text-white">Institutional Memory</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/30">
                    <div className="text-xs font-semibold text-green-300 mb-2">Knowledge Base</div>
                    <div className="text-xs text-gray-300 mb-1">• 247 decisions tracked</div>
                    <div className="text-xs text-gray-300 mb-1">• 156 successful outcomes</div>
                    <div className="text-xs text-gray-300 mb-1">• 47% improvement in decision quality</div>
                    <div className="text-xs text-green-400 mt-2">✓ Knowledge preserved permanently</div>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/30">
                    <div className="text-xs font-semibold text-green-300 mb-2">Continuous Learning</div>
                    <div className="text-xs text-gray-300 mb-1">• Accuracy improving 12% per quarter</div>
                    <div className="text-xs text-gray-300">• ROI predictions within 5%</div>
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
              Every decision becomes a learning opportunity. Build intelligence that compounds.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: CheckCircle,
                title: 'Track Outcomes',
                description: "Measure actual outcomes vs predictions for every decision. Learn what works, what doesn't. Improve decision-making over time.",
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: RefreshCw,
                title: 'Institutional Memory',
                description: "Build permanent knowledge base. Every decision, every outcome, every learning preserved. Knowledge survives team changes.",
                color: 'from-emerald-500 to-green-500'
              },
              {
                icon: TrendingUp,
                title: 'Continuous Learning',
                description: "Get smarter with every decision. Learn what works for your business specifically. Decision quality improves continuously.",
                color: 'from-green-500 to-cyan-500'
              },
              {
                icon: BarChart3,
                title: 'Predictive Accuracy',
                description: "ROI predictions get more accurate. Success probabilities improve. Learn from outcomes to make better predictions.",
                color: 'from-emerald-500 to-green-500'
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
                  className="bg-white/5 rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all"
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-green-900/10 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 futuristic-heading">
              Ready to Learn From <span style={{
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 30%, #8b5cf6 70%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Every Decision?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              See how Vantage Brilliance tracks outcomes and builds institutional memory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-600/40 to-emerald-600/40 hover:from-green-600/60 hover:to-emerald-600/60 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:neural-glow futuristic-subheading border border-green-500/50"
              >
                Schedule a Demo
              </Link>
              <Link
                to="/demo"
                className="border border-green-500/50 text-green-300 hover:bg-green-500/10 px-8 py-4 rounded-lg font-semibold transition-all futuristic-subheading inline-flex items-center justify-center gap-2"
              >
                Back to Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DecisionTrackingDetail;

