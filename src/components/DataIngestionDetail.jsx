import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Database, Zap, MessageCircle, Bot, CheckCircle } from 'lucide-react';
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

const DataIngestionDetail = () => {
  const [activeConversationIndex, setActiveConversationIndex] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const chatContainerRef = useRef(null);
  const loopTimeoutRef = useRef(null);
  const isPlayingRef = useRef(false);

  // Multiple conversations showing different data ingestion challenges
  const conversations = [
    {
      id: 'data-silos',
      title: 'Data Silos Problem',
      header: 'EXECUTIVE BRIEFING',
      borderColor: 'rgba(245, 158, 11, 0.3)',
      headerColor: '#f59e0b',
      messages: [
        {
          persona: '[CEO]',
          prompt: 'SPEAKING...',
          color: '#f59e0b',
          text: "We have Salesforce for sales, HubSpot for marketing, QuickBooks for finance, Zendesk for support. Each team sees their own data, but I can't see how marketing campaigns affect sales revenue. Why can't we connect the dots?",
          type: 'user'
        },
        {
          persona: '[CTO]',
          prompt: 'RESPONDING...',
          color: '#06b6d4',
          text: "Building custom integrations for each system? That's months of work. Plus maintenance, API changes, data mapping issues. We'd need a full-time team just to keep connections alive.",
          type: 'user'
        },
        {
          persona: '[VANTAGE BRILLIANCE]',
          prompt: 'ANALYZING...',
          color: '#06b6d4',
          text: "I connect to 5000+ data sources automatically. Salesforce, HubSpot, QuickBooks, Zendesk—all in real-time. No custom coding. No maintenance. I create one unified data layer so you see how marketing campaigns drive sales revenue instantly.",
          type: 'vantage',
          metrics: [
            { value: '5000+', label: 'Connectors' },
            { value: 'Real-Time', label: 'Sync' }
          ]
        },
        {
          persona: '[RESULTS]',
          prompt: 'TRACKING...',
          color: '#10b981',
          text: "Marketing team now sees exact ROI per campaign. Sales team understands which leads convert from which channels. Finance tracks revenue attribution across all touchpoints.",
          type: 'outcome',
          metrics: [
            { value: '73%', label: 'Better ROI Visibility' },
            { value: '0', label: 'Manual Integration Hours' }
          ]
        }
      ]
    },
    {
      id: 'manual-work',
      title: 'Manual Data Work',
      header: 'WORKING LEVEL DISCUSSION',
      borderColor: 'rgba(139, 92, 246, 0.3)',
      headerColor: '#8b5cf6',
      messages: [
        {
          persona: '[DATA ANALYST]',
          prompt: 'SPEAKING...',
          color: '#8b5cf6',
          text: "Every Monday, I export CSVs from 5 different systems. Then I spend 3 hours cleaning, merging, and formatting data. By Wednesday, it's already outdated. There has to be a better way.",
          type: 'user'
        },
        {
          persona: '[MANAGER]',
          prompt: 'JOINING...',
          color: '#ec4899',
          text: "Our team spends 15+ hours per week just moving data around. Not analyzing. Not making decisions. Just wrangling data. That's expensive and frustrating.",
          type: 'user'
        },
        {
          persona: '[VANTAGE BRILLIANCE]',
          prompt: 'SYNCING...',
          color: '#06b6d4',
          text: "I eliminate all manual data work. I continuously sync data from every source in real-time. No exports. No cleaning. No formatting. Your data is always fresh, always unified, always ready for decisions.",
          type: 'vantage',
          metrics: [
            { value: '15+ hrs', label: 'Saved/Week' },
            { value: 'Real-Time', label: 'Always Fresh' }
          ]
        },
        {
          persona: '[RESULTS]',
          prompt: 'TRACKING...',
          color: '#10b981',
          text: "Data analyst now spends time on analysis and insights, not data wrangling. Decisions are based on current data, not last week's exports. Team productivity increased 40%.",
          type: 'outcome',
          metrics: [
            { value: '40%', label: 'Productivity Gain' },
            { value: '100%', label: 'Time Saved' }
          ]
        }
      ]
    },
    {
      id: 'duplicate-efforts',
      title: 'Duplicate Efforts',
      header: 'STRATEGY DISCUSSION',
      borderColor: 'rgba(236, 72, 153, 0.3)',
      headerColor: '#ec4899',
      messages: [
        {
          persona: '[CFO]',
          prompt: 'SPEAKING...',
          color: '#ec4899',
          text: "Last quarter, we spent $2.4M on duplicate efforts. Teams solving problems others already solved. Launching features that failed before. We have no memory of what worked and what didn't.",
          type: 'user'
        },
        {
          persona: '[STRATEGY]',
          prompt: 'RESPONDING...',
          color: '#8b5cf6',
          text: "We make decisions in silos. Product team doesn't know what marketing learned. Sales doesn't know what support discovered. We're reinventing the wheel constantly.",
          type: 'user'
        },
        {
          persona: '[VANTAGE BRILLIANCE]',
          prompt: 'CONNECTING...',
          color: '#06b6d4',
          text: "I create institutional memory. Every decision, every outcome, every learning—all connected across teams. Product sees what marketing learned. Sales sees what support discovered. No duplicate efforts. No repeated mistakes.",
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
          text: "Teams now learn from each other's decisions. Duplicate efforts reduced by 78%. Faster execution. Better outcomes. True organizational intelligence.",
          type: 'outcome',
          metrics: [
            { value: '78%', label: 'Less Duplication' },
            { value: '3x', label: 'Faster Execution' }
          ]
        }
      ]
    },
    {
      id: 'missing-insights',
      title: 'Missing Insights',
      header: 'ANALYTICS DISCUSSION',
      borderColor: 'rgba(6, 182, 212, 0.3)',
      headerColor: '#06b6d4',
      messages: [
        {
          persona: '[CMO]',
          prompt: 'SPEAKING...',
          color: '#06b6d4',
          text: "We know customer churn is increasing, but we can't see why. Support tickets? Product usage? Pricing changes? We have the data, but it's scattered. We're flying blind.",
          type: 'user'
        },
        {
          persona: '[DATA ANALYST]',
          prompt: 'RESPONDING...',
          color: '#8b5cf6',
          text: "To understand churn, I need data from 8 different systems. Each has different formats, different update frequencies. By the time I piece it together, the insight is outdated.",
          type: 'user'
        },
        {
          persona: '[VANTAGE BRILLIANCE]',
          prompt: 'ANALYZING...',
          color: '#06b6d4',
          text: "I automatically map schemas, detect relationships, and create a unified view. Support tickets + product usage + pricing changes = complete picture. I show you why customers churn in real-time, with all context connected.",
          type: 'vantage',
          metrics: [
            { value: '8 Systems', label: 'Unified' },
            { value: 'Auto', label: 'Schema Mapping' }
          ]
        },
        {
          persona: '[RESULTS]',
          prompt: 'TRACKING...',
          color: '#10b981',
          text: "Churn reasons now visible immediately. Marketing adjusted campaigns. Product fixed issues. Customer retention improved 34% in 3 months.",
          type: 'outcome',
          metrics: [
            { value: '34%', label: 'Better Retention' },
            { value: 'Real-Time', label: 'Insights' }
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
            <source src="/Data_Ingestion_Connection_Video_Generation.mp4" type="video/mp4" />
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
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Database className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold futuristic-heading">
              Data Ingestion & <span style={{
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 30%, #8b5cf6 70%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Connection</span>
            </h1>
          </div>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Real conversations about data challenges. See how Vantage Brilliance solves them.
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
            <source src="/Data_Ingestion_Connection_Video_Generation.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Conversation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            {conversations.map((conv, index) => (
              <motion.button
                key={conv.id}
                onClick={() => setActiveConversationIndex(index)}
                className={`px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm rounded-lg font-semibold transition-all futuristic-subheading ${
                  activeConversationIndex === index
                    ? 'bg-gradient-to-r from-cyan-600/40 to-blue-600/40 border border-cyan-500/50 text-white'
                    : 'bg-black/40 border border-cyan-500/20 text-gray-300 hover:border-cyan-500/40'
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
              className="p-3 sm:p-4 border-b"
              style={{ 
                borderColor: currentConversation.borderColor,
                background: `linear-gradient(to right, ${currentConversation.headerColor}15, transparent)`
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ 
                      background: `linear-gradient(135deg, ${currentConversation.headerColor}40, ${currentConversation.headerColor}20)`
                    }}
                  >
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: currentConversation.headerColor }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div 
                      className="text-[10px] sm:text-xs font-semibold mb-0.5 sm:mb-1"
                      style={{ color: currentConversation.headerColor }}
                    >
                      {currentConversation.header}
                    </div>
                    <h3 className="futuristic-subheading text-sm sm:text-base lg:text-lg text-white truncate">{currentConversation.title}</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div 
              ref={chatContainerRef}
              className="p-3 sm:p-6 space-y-3 sm:space-y-4 max-h-[400px] sm:max-h-[500px] overflow-y-auto"
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
                    <div className="max-w-[90%] sm:max-w-[80%] bg-gray-800/60 text-gray-200 border border-gray-700/40 rounded-lg px-3 sm:px-4 py-2 sm:py-3 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-1 sm:mb-2">
                        <span 
                          className="text-[10px] sm:text-xs font-semibold"
                          style={{ color: msg.color }}
                        >
                          {msg.persona} {'>'} {msg.prompt}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                        {msg.text}
                      </p>
                    </div>
                  ) : msg.type === 'vantage' ? (
                    <div className="max-w-[90%] sm:max-w-[80%] bg-gradient-to-br from-cyan-500/70 via-blue-500/60 to-cyan-500/70 text-white border border-cyan-400/30 shadow-lg shadow-cyan-500/15 rounded-lg px-3 sm:px-4 py-2 sm:py-3 backdrop-blur-sm">
                      <div className="flex items-center space-x-1 sm:space-x-2 mb-1 sm:mb-2 flex-wrap">
                        <Bot className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-200" />
                        <span className="text-[10px] sm:text-xs font-semibold">VANTAGE BRILLIANCE</span>
                        <span className="text-[10px] sm:text-xs" style={{ color: msg.color }}>
                          {'>'} {msg.prompt}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-cyan-100/90 leading-relaxed mb-2 sm:mb-3" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                        {msg.text}
                      </p>
                      {msg.metrics && msg.metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-cyan-400/30">
                          {msg.metrics.map((metric, i) => (
                            <div key={i} className="bg-cyan-500/20 rounded px-2 sm:px-3 py-1.5 sm:py-2 border border-cyan-400/30">
                              <div className="text-xs sm:text-sm font-bold text-cyan-100">{metric.value}</div>
                              <div className="text-[10px] sm:text-xs text-cyan-300/70 mt-0.5 sm:mt-1">{metric.label}</div>
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
                  <div className="bg-gradient-to-br from-cyan-500/70 to-blue-500/60 rounded-lg px-4 py-3 backdrop-blur-sm border border-cyan-400/30">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-cyan-100 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-cyan-100 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-cyan-100 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Ingestion Preview Snippet */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 futuristic-heading">A Glimpse of Data Ingestion</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Real-time connections to 5000+ data sources. Unified data layer. Automatic schema mapping.
            </p>
          </motion.div>

          {/* Data Ingestion Snippet Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl border border-blue-500/30 overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 p-5 sm:p-6 border-b-2 border-blue-500/40">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500/30 rounded-xl p-3">
                    <Database className="h-6 w-6 sm:h-8 sm:w-8 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Data Connections Dashboard</h3>
                    <p className="text-sm sm:text-base text-blue-200 font-medium">5000+ Sources • Real-Time Sync</p>
                  </div>
                </div>
                <div className="bg-green-500/20 rounded-xl px-5 py-3 border-2 border-green-500/40">
                  <div className="text-xs sm:text-sm text-green-300 mb-1">Active Connections</div>
                  <div className="text-2xl sm:text-3xl font-black text-green-400">127</div>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6">
              {/* Left: Connected Sources */}
              <div className="bg-black/50 rounded-2xl p-5 sm:p-6 border-2 border-blue-500/30 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                  <h4 className="text-base sm:text-lg font-bold text-white">Connected Sources</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-blue-500/20 rounded-xl p-3 sm:p-4 border-2 border-blue-500/40 flex items-center justify-between hover:bg-blue-500/30 transition-all">
                    <span className="text-sm sm:text-base font-medium text-blue-200">Salesforce CRM</span>
                    <span className="text-sm sm:text-base text-green-400 font-bold">● Live</span>
                  </div>
                  <div className="bg-blue-500/20 rounded-xl p-3 sm:p-4 border-2 border-blue-500/40 flex items-center justify-between hover:bg-blue-500/30 transition-all">
                    <span className="text-sm sm:text-base font-medium text-blue-200">HubSpot Marketing</span>
                    <span className="text-sm sm:text-base text-green-400 font-bold">● Live</span>
                  </div>
                  <div className="bg-blue-500/20 rounded-xl p-3 sm:p-4 border-2 border-blue-500/40 flex items-center justify-between hover:bg-blue-500/30 transition-all">
                    <span className="text-sm sm:text-base font-medium text-blue-200">QuickBooks Finance</span>
                    <span className="text-sm sm:text-base text-green-400 font-bold">● Live</span>
                  </div>
                  <div className="bg-blue-500/20 rounded-xl p-3 sm:p-4 border-2 border-blue-500/40 flex items-center justify-between hover:bg-blue-500/30 transition-all">
                    <span className="text-sm sm:text-base font-medium text-blue-200">Google Analytics</span>
                    <span className="text-sm sm:text-base text-green-400 font-bold">● Live</span>
                  </div>
                  <div className="bg-blue-500/20 rounded-xl p-3 sm:p-4 border-2 border-blue-500/40 flex items-center justify-between hover:bg-blue-500/30 transition-all">
                    <span className="text-sm sm:text-base font-medium text-blue-200">Zendesk Support</span>
                    <span className="text-sm sm:text-base text-green-400 font-bold">● Live</span>
                  </div>
                </div>
              </div>

              {/* Center: Real-Time Sync */}
              <div className="bg-black/50 rounded-2xl p-5 sm:p-6 border-2 border-cyan-500/30 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
                  <h4 className="text-base sm:text-lg font-bold text-white">Real-Time Sync</h4>
                </div>
                <div className="space-y-4">
                  <div className="bg-cyan-500/20 rounded-xl p-4 sm:p-5 border-2 border-cyan-500/40">
                    <div className="text-sm sm:text-base font-bold text-cyan-200 mb-3">Sync Status</div>
                    <div className="flex items-center justify-between text-sm sm:text-base mb-3">
                      <span className="text-gray-300">Last Sync</span>
                      <span className="text-green-400 font-bold text-lg">2 seconds ago</span>
                    </div>
                    <div className="flex items-center justify-between text-sm sm:text-base">
                      <span className="text-gray-300">Records Synced</span>
                      <span className="text-cyan-300 font-bold text-lg">1.2M today</span>
                    </div>
                  </div>
                  <div className="bg-cyan-500/20 rounded-xl p-4 sm:p-5 border-2 border-cyan-500/40">
                    <div className="text-sm sm:text-base font-bold text-cyan-200 mb-3">Data Flow</div>
                    <div className="h-3 sm:h-4 bg-cyan-500/20 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse" style={{ width: '85%' }}></div>
                    </div>
                    <div className="mt-2 text-xs sm:text-sm text-cyan-300/70">85% throughput</div>
                  </div>
                </div>
              </div>

              {/* Right: Unified Schema */}
              <div className="bg-black/50 rounded-2xl p-5 sm:p-6 border-2 border-purple-500/30 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                  <h4 className="text-base sm:text-lg font-bold text-white">Unified Data Layer</h4>
                </div>
                <div className="space-y-4">
                  <div className="bg-purple-500/20 rounded-xl p-4 sm:p-5 border-2 border-purple-500/40">
                    <div className="text-sm sm:text-base font-bold text-purple-200 mb-3">Schema Mapping</div>
                    <div className="text-sm sm:text-base text-purple-300 mb-2">• 127 schemas mapped</div>
                    <div className="text-sm sm:text-base text-purple-300 mb-2">• 2,340 relationships detected</div>
                    <div className="text-sm sm:text-base text-purple-300">• Auto-optimized queries</div>
                  </div>
                  <div className="bg-purple-500/20 rounded-xl p-4 sm:p-5 border-2 border-purple-500/40">
                    <div className="text-sm sm:text-base font-bold text-purple-200 mb-3">Data Quality</div>
                    <div className="flex items-center justify-between text-sm sm:text-base mb-2">
                      <span className="text-gray-300">Completeness</span>
                      <span className="text-green-400 font-bold text-lg">98%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm sm:text-base">
                      <span className="text-gray-300">Accuracy</span>
                      <span className="text-green-400 font-bold text-lg">99.2%</span>
                    </div>
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
              Seamless, automatic, intelligent. No manual work required.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Database,
                title: '5000+ Pre-Built Connectors',
                description: 'Connect to CRM systems, analytics platforms, financial systems, marketing tools, support systems, and more. No custom coding required.',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                icon: Zap,
                title: 'Real-Time Synchronization',
                description: 'Data flows continuously. Changes in your source systems appear in Vantage Brilliance within seconds. Always up-to-date intelligence.',
                color: 'from-blue-500 to-indigo-500'
              },
              {
                icon: MessageCircle,
                title: 'Unified Data Layer',
                description: 'All your disparate data sources become one intelligent system. Cross-reference any metric with any other metric. See the complete picture.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: CheckCircle,
                title: 'Automatic Schema Mapping',
                description: 'I automatically understand your data structure. Map fields, detect relationships, and create a unified schema. No manual configuration needed.',
                color: 'from-green-500 to-emerald-500'
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
                  className="bg-white/5 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all"
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-cyan-900/10 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 futuristic-heading">
              Ready to Connect Your <span style={{
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 30%, #8b5cf6 70%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Data?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              See how Vantage Brilliance connects to your systems and transforms your data into intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600/40 to-blue-600/40 hover:from-cyan-600/60 hover:to-blue-600/60 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:neural-glow futuristic-subheading border border-cyan-500/50"
              >
                Schedule a Demo
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all futuristic-subheading inline-flex items-center justify-center gap-2"
              >
                Continue to Step 2
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DataIngestionDetail;
