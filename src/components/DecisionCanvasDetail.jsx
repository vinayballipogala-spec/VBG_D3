import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Target, Zap, MessageCircle, Bot, CheckCircle, Users, Brain, BarChart3, Clock } from 'lucide-react';
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

const DecisionCanvasDetail = () => {
  const [activeConversationIndex, setActiveConversationIndex] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const chatContainerRef = useRef(null);
  const loopTimeoutRef = useRef(null);
  const isPlayingRef = useRef(false);

  // Multiple conversations showing different decision-making challenges
  const conversations = [
    {
      id: 'group-decisions',
      title: 'Group Decision-Making',
      header: 'EXECUTIVE DISCUSSION',
      borderColor: 'rgba(6, 182, 212, 0.3)',
      headerColor: '#06b6d4',
      messages: [
        {
          persona: '[CEO]',
          prompt: 'SPEAKING...',
          color: '#06b6d4',
          text: "We need to decide on our Q2 pricing strategy. Marketing wants aggressive discounts. Finance wants margins. Sales wants flexibility. How do we align everyone and make the right call?",
          type: 'user'
        },
        {
          persona: '[CMO]',
          prompt: 'RESPONDING...',
          color: '#8b5cf6',
          text: "We all have different data, different perspectives. We're making decisions in silos. We need a way to collaborate, see all options, and test scenarios together.",
          type: 'user'
        },
        {
          persona: '[VANTAGE BRILLIANCE]',
          prompt: 'PROPOSING...',
          color: '#06b6d4',
          text: "I create a Decision Canvas where we collaborate in real-time. I bring causal analysis, scenario simulations, and data-driven recommendations. You bring judgment and business context. Together, we test thousands of scenarios. Strategic, tactical, or operational—every decision gets the rigor it needs.",
          type: 'vantage',
          metrics: [
            { value: 'Real-Time', label: 'Collaboration' },
            { value: '1000s', label: 'Scenarios Tested' }
          ]
        },
        {
          persona: '[RESULTS]',
          prompt: 'TRACKING...',
          color: '#10b981',
          text: "Aligned on pricing strategy in 2 days instead of 2 weeks. All stakeholders see the same data, tested all scenarios together. Decision made with confidence. Revenue increased 23%.",
          type: 'outcome',
          metrics: [
            { value: '10x', label: 'Faster Decisions' },
            { value: '23%', label: 'Revenue Increase' }
          ]
        }
      ]
    },
    {
      id: 'scenario-testing',
      title: 'Scenario Testing',
      header: 'STRATEGY DISCUSSION',
      borderColor: 'rgba(139, 92, 246, 0.3)',
      headerColor: '#8b5cf6',
      messages: [
        {
          persona: '[STRATEGY]',
          prompt: 'SPEAKING...',
          color: '#8b5cf6',
          text: "We're considering a major market expansion. But what if it fails? What if competition responds? We need to test scenarios, but we don't have the tools or time to simulate all possibilities.",
          type: 'user'
        },
        {
          persona: '[VP OPERATIONS]',
          prompt: 'JOINING...',
          color: '#ec4899',
          text: "Making big decisions without testing scenarios is risky. We need to see outcomes before we commit. Monte Carlo simulations, sensitivity analysis—we need all of it, fast.",
          type: 'user'
        },
        {
          persona: '[VANTAGE BRILLIANCE]',
          prompt: 'SIMULATING...',
          color: '#06b6d4',
          text: "I run thousands of scenario simulations in seconds. Monte Carlo analysis, sensitivity testing, risk assessment—all in real-time. You see probability distributions, expected outcomes, risk-reward ratios. Make strategic decisions with full visibility into potential outcomes.",
          type: 'vantage',
          metrics: [
            { value: '1000s', label: 'Scenarios/Second' },
            { value: 'Real-Time', label: 'Analysis' }
          ]
        },
        {
          persona: '[RESULTS]',
          prompt: 'TRACKING...',
          color: '#10b981',
          text: "Tested 50,000+ scenarios in minutes. Identified optimal expansion strategy with 78% success probability. Avoided 3 high-risk options. Expanded with confidence. Success rate: 82%.",
          type: 'outcome',
          metrics: [
            { value: '78%', label: 'Success Probability' },
            { value: '82%', label: 'Actual Success' }
          ]
        }
      ]
    },
    {
      id: 'ai-human-collab',
      title: 'AI + Human Collaboration',
      header: 'LEADERSHIP DISCUSSION',
      borderColor: 'rgba(236, 72, 153, 0.3)',
      headerColor: '#ec4899',
      messages: [
        {
          persona: '[CTO]',
          prompt: 'SPEAKING...',
          color: '#ec4899',
          text: "AI gives recommendations, but I need to understand the reasoning. I need to challenge assumptions, bring my judgment, and make the final call. Can AI and humans truly collaborate on decisions?",
          type: 'user'
        },
        {
          persona: '[CEO]',
          prompt: 'RESPONDING...',
          color: '#06b6d4',
          text: "We don't want AI making decisions for us. We want AI amplifying our intelligence. Bringing data we don't have. Testing scenarios we can't. But we make the final judgment call.",
          type: 'user'
        },
        {
          persona: '[VANTAGE BRILLIANCE]',
          prompt: 'COLLABORATING...',
          color: '#06b6d4',
          text: "I don't replace your judgment—I amplify it. I bring causal analysis, scenario testing, and data rigor. You bring business context, intuition, and judgment. Together on the Decision Canvas, we explore options, challenge assumptions, and make decisions neither of us could make alone.",
          type: 'vantage',
          metrics: [
            { value: 'AI + Human', label: 'Collaboration' },
            { value: 'Better', label: 'Decisions' }
          ]
        },
        {
          persona: '[RESULTS]',
          prompt: 'TRACKING...',
          color: '#10b981',
          text: "Decisions now combine AI rigor with human judgment. Faster execution. Better outcomes. 94% of decisions achieve expected results. Teams feel empowered, not replaced.",
          type: 'outcome',
          metrics: [
            { value: '94%', label: 'Success Rate' },
            { value: '100%', label: 'Human Control' }
          ]
        }
      ]
    },
    {
      id: 'decision-speed',
      title: 'Decision Speed',
      header: 'OPERATIONS DISCUSSION',
      borderColor: 'rgba(245, 158, 11, 0.3)',
      headerColor: '#f59e0b',
      messages: [
        {
          persona: '[OPERATIONS]',
          prompt: 'SPEAKING...',
          color: '#f59e0b',
          text: "We spend weeks in meetings, emails, spreadsheets trying to make decisions. By the time we decide, the opportunity is gone. We need to make decisions faster without sacrificing quality.",
          type: 'user'
        },
        {
          persona: '[MANAGER]',
          prompt: 'JOINING...',
          color: '#8b5cf6',
          text: "Decision paralysis is killing us. We overthink, over-analyze, and miss opportunities. We need a structured process that's fast but thorough.",
          type: 'user'
        },
        {
          persona: '[VANTAGE BRILLIANCE]',
          prompt: 'OPTIMIZING...',
          color: '#06b6d4',
          text: "I structure decision-making so it's fast AND thorough. Causal analysis in minutes, not weeks. Scenario testing in seconds, not days. Real-time collaboration instead of endless meetings. Strategic decisions in days. Tactical in hours. Operational in minutes.",
          type: 'vantage',
          metrics: [
            { value: '10x', label: 'Faster' },
            { value: 'Better', label: 'Quality' }
          ]
        },
        {
          persona: '[RESULTS]',
          prompt: 'TRACKING...',
          color: '#10b981',
          text: "Strategic decisions: 2 weeks → 2 days. Tactical: 1 week → 4 hours. Operational: 1 day → 15 minutes. Quality improved. Speed increased. Opportunities captured.",
          type: 'outcome',
          metrics: [
            { value: '10x', label: 'Speed Increase' },
            { value: 'Higher', label: 'Decision Quality' }
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
            <source src="/consulting-transformation.mp4" type="video/mp4" />
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
              <Target className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold futuristic-heading">
              Decision <span style={{
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 30%, #8b5cf6 70%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Canvas</span>
            </h1>
          </div>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Real conversations about collaborative decision-making. See how Vantage Brilliance works with you.
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
            <source src="/consulting-transformation.mp4" type="video/mp4" />
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
                    ? 'bg-gradient-to-r from-blue-600/40 to-cyan-600/40 border border-blue-500/50 text-white'
                    : 'bg-black/40 border border-blue-500/20 text-gray-300 hover:border-blue-500/40'
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
                    <Target className="h-5 w-5" style={{ color: currentConversation.headerColor }} />
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
                    <div className="max-w-[80%] bg-gradient-to-br from-blue-500/70 via-cyan-500/60 to-blue-500/70 text-white border border-blue-400/30 shadow-lg shadow-blue-500/15 rounded-lg px-4 py-3 backdrop-blur-sm">
                      <div className="flex items-center space-x-2 mb-2">
                        <Bot className="h-4 w-4 text-blue-200" />
                        <span className="text-xs font-semibold">VANTAGE BRILLIANCE</span>
                        <span className="text-xs" style={{ color: msg.color }}>
                          {'>'} {msg.prompt}
                        </span>
                      </div>
                      <p className="text-sm text-blue-100/90 leading-relaxed mb-3" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                        {msg.text}
                      </p>
                      {msg.metrics && msg.metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-blue-400/30">
                          {msg.metrics.map((metric, i) => (
                            <div key={i} className="bg-blue-500/20 rounded px-3 py-2 border border-blue-400/30">
                              <div className="text-sm font-bold text-blue-100">{metric.value}</div>
                              <div className="text-xs text-blue-300/70 mt-1">{metric.label}</div>
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
                  <div className="bg-gradient-to-br from-blue-500/70 to-cyan-500/60 rounded-lg px-4 py-3 backdrop-blur-sm border border-blue-400/30">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-blue-100 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-blue-100 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-blue-100 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Decision Canvas Preview Snippet */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 futuristic-heading">A Glimpse of Decision Canvas</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time collaboration, scenario testing, and AI + Human decision-making in one place.
            </p>
          </motion.div>

          {/* Decision Canvas Snippet Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl border border-blue-500/30 overflow-hidden shadow-2xl"
          >
            {/* Canvas Header */}
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-4 border-b border-blue-500/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-blue-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Q2 Pricing Strategy Decision</h3>
                    <p className="text-sm text-gray-400">Strategic Decision • In Progress</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-blue-700"></div>
                    <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-blue-700"></div>
                    <div className="w-8 h-8 rounded-full bg-pink-500 border-2 border-blue-700"></div>
                  </div>
                  <span className="text-xs text-gray-400">3 stakeholders</span>
                </div>
              </div>
            </div>

            {/* Canvas Content Grid */}
            <div className="grid md:grid-cols-3 gap-4 p-6">
              {/* Left: AI Recommendations */}
              <div className="bg-black/40 rounded-xl p-4 border border-blue-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="h-4 w-4 text-blue-400" />
                  <h4 className="text-sm font-semibold text-white">AI Recommendations</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-blue-300">Option A: Aggressive Pricing</span>
                      <span className="text-xs text-green-400">89% Confidence</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">Expected ROI: 2.3x • Risk: Low</p>
                    <div className="h-1.5 bg-blue-500/20 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '89%' }}></div>
                    </div>
                  </div>
                  <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-blue-300">Option B: Balanced Approach</span>
                      <span className="text-xs text-yellow-400">75% Confidence</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">Expected ROI: 1.8x • Risk: Medium</p>
                    <div className="h-1.5 bg-blue-500/20 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center: Scenario Simulations */}
              <div className="bg-black/40 rounded-xl p-4 border border-cyan-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 className="h-4 w-4 text-cyan-400" />
                  <h4 className="text-sm font-semibold text-white">Scenario Testing</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-cyan-500/10 rounded-lg p-3 border border-cyan-500/30">
                    <div className="text-xs font-semibold text-cyan-300 mb-2">Full Implementation</div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-gray-400">Success Probability</span>
                      <span className="text-green-400 font-bold">78%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Expected ROI</span>
                      <span className="text-cyan-300 font-bold">2.3x</span>
                    </div>
                  </div>
                  <div className="bg-cyan-500/10 rounded-lg p-3 border border-cyan-500/30">
                    <div className="text-xs font-semibold text-cyan-300 mb-2">Phased Approach</div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-gray-400">Success Probability</span>
                      <span className="text-green-400 font-bold">85%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Expected ROI</span>
                      <span className="text-cyan-300 font-bold">2.1x</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Collaboration */}
              <div className="bg-black/40 rounded-xl p-4 border border-purple-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="h-4 w-4 text-purple-400" />
                  <h4 className="text-sm font-semibold text-white">Team Discussion</h4>
                </div>
                <div className="space-y-3 max-h-[200px] overflow-y-auto">
                  <div className="bg-purple-500/10 rounded-lg p-2 border border-purple-500/30">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                      <span className="text-xs font-semibold text-purple-300">CEO</span>
                      <Clock className="h-3 w-3 text-gray-500 ml-auto" />
                      <span className="text-xs text-gray-500">2h ago</span>
                    </div>
                    <p className="text-xs text-gray-300">"I agree with Option A. Let's test the phased approach first."</p>
                  </div>
                  <div className="bg-purple-500/10 rounded-lg p-2 border border-purple-500/30">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-purple-500"></div>
                      <span className="text-xs font-semibold text-purple-300">CMO</span>
                      <Clock className="h-3 w-3 text-gray-500 ml-auto" />
                      <span className="text-xs text-gray-500">1h ago</span>
                    </div>
                    <p className="text-xs text-gray-300">"Scenario testing shows 85% success probability. I'm confident."</p>
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
              Strategic, tactical, or operational—every decision gets the rigor it needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: 'Strategic Decisions',
                description: "Long-term planning, M&A, transformation. Causal analysis, scenario planning, stakeholder alignment. Make big decisions with confidence.",
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Zap,
                title: 'Tactical Decisions',
                description: "Resource allocation, pricing, campaigns. Real-time analysis, quick scenario testing. Make tactical calls faster without sacrificing quality.",
                color: 'from-cyan-500 to-blue-500'
              },
              {
                icon: Users,
                title: 'Real-Time Collaboration',
                description: "All stakeholders on the same canvas. See the same data, test scenarios together, align on decisions. No more silos, no more confusion.",
                color: 'from-blue-500 to-purple-500'
              },
              {
                icon: BarChart3,
                title: 'Scenario Testing',
                description: "Test thousands of scenarios in seconds. Monte Carlo simulations, sensitivity analysis, risk assessment. See outcomes before you commit.",
                color: 'from-purple-500 to-pink-500'
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
                  className="bg-white/5 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all"
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-blue-900/10 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 futuristic-heading">
              Ready to Make Decisions <span style={{
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 30%, #8b5cf6 70%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Together?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              See how Vantage Brilliance collaborates with you on the Decision Canvas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600/40 to-cyan-600/40 hover:from-blue-600/60 hover:to-cyan-600/60 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:neural-glow futuristic-subheading border border-blue-500/50"
              >
                Schedule a Demo
              </Link>
              <Link
                to="/demo"
                className="border border-blue-500/50 text-blue-300 hover:bg-blue-500/10 px-8 py-4 rounded-lg font-semibold transition-all futuristic-subheading inline-flex items-center justify-center gap-2"
              >
                Continue to Step 4
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DecisionCanvasDetail;


