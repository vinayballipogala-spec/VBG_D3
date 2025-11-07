import { useState, useEffect, useRef } from 'react';
import NavBar from './NavBar';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  Target, 
  Zap, 
  TrendingUp,
  Users,
  Lightbulb,
  CheckCircle,
  Database,
  Sparkles,
  DollarSign,
  AlertCircle,
  BarChart3,
  Shield,
  X,
  MessageCircle,
  Bot
} from 'lucide-react';

// Typing Animation Component with Transmission/Decode Effect
const TypingText = ({ text, delay = 0, speed = 60, cycleKey = 0, showPrompt = false, prompt = '[TRANSMISSION]', textClassName = 'terminal-text' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isDecoding, setIsDecoding] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval = null;

    const startTyping = () => {
      setIsDecoding(true);
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
          setIsDecoding(false);
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

// System Status HUD Component - Enhanced
const SystemStatusHUD = () => {
  const [status, setStatus] = useState({
    connection: 'SYNCED',
    protocol: 'FUTURE-READY',
    transmission: 'ACTIVE'
  });

  return (
    <motion.div
      className="system-hud"
      initial={{ opacity: 0, x: 30, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
    >
      <motion.div
        className="terminal-prompt"
        style={{ marginBottom: '10px', fontSize: '10px', opacity: 0.8 }}
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        [SYSTEM STATUS]
      </motion.div>
      <div className="system-status-line">
        <motion.div 
          className="status-indicator"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span>
          <span style={{ opacity: 0.7 }}>CONNECTION:</span>{' '}
          <motion.span 
            style={{ color: '#10b981', fontWeight: '600' }}
            animate={{ textShadow: [
              '0 0 8px #10b981',
              '0 0 12px #10b981',
              '0 0 8px #10b981'
            ]}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {status.connection}
          </motion.span>
        </span>
      </div>
      <div className="system-status-line">
        <motion.div 
          className="status-indicator"
          style={{ background: '#8b5cf6', boxShadow: '0 0 8px #8b5cf6' }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
        <span>
          <span style={{ opacity: 0.7 }}>PROTOCOL:</span>{' '}
          <motion.span 
            style={{ color: '#8b5cf6', fontWeight: '600' }}
            animate={{ textShadow: [
              '0 0 8px #8b5cf6',
              '0 0 12px #8b5cf6',
              '0 0 8px #8b5cf6'
            ]}}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          >
            {status.protocol}
          </motion.span>
        </span>
      </div>
      <div className="system-status-line">
        <motion.div 
          className="status-indicator"
          style={{ background: '#06b6d4', boxShadow: '0 0 8px #06b6d4' }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
        />
        <span>
          <span style={{ opacity: 0.7 }}>TRANSMISSION:</span>{' '}
          <motion.span 
            style={{ color: '#06b6d4', fontWeight: '600' }}
            animate={{ textShadow: [
              '0 0 8px #06b6d4',
              '0 0 12px #06b6d4',
              '0 0 8px #06b6d4'
            ]}}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          >
            {status.transmission}
          </motion.span>
        </span>
      </div>
    </motion.div>
  );
};

// Particle System Component
const ParticleSystem = ({ count = 15 }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 4
  }));

  return (
    <>
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="particle-glow"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`
          }}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  );
};

// Data Stream Component
const DataStreams = ({ count = 5 }) => {
  const streams = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: (i * 20) + 10,
    delay: i * 0.5
  }));

  return (
    <>
      {streams.map(stream => (
        <div
          key={stream.id}
          className="data-stream"
          style={{
            left: `${stream.left}%`,
            animationDelay: `${stream.delay}s`
          }}
        />
      ))}
    </>
  );
};

// Speech Bubble Component for Video
const SpeechBubble = ({ item, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  const Icon = item.icon;
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="absolute"
          style={{
            left: item.position.x,
            top: item.position.y,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ 
            duration: 0.8, 
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
        >
          {/* Speech Bubble */}
          <div className="relative">
            {/* Connecting Line to Video Center */}
            <motion.div
              className="absolute w-32 h-0.5 bg-gradient-to-r from-blue-500/60 to-transparent"
              style={{
                left: '50%',
                top: '50%',
                transformOrigin: 'left center',
                transform: `rotate(${Math.atan2(
                  parseFloat(item.position.y) - 50,
                  parseFloat(item.position.x) - 50
                ) * 180 / Math.PI}deg) translateX(-100%)`
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            
            {/* Speech Bubble Container */}
            <div className="relative bg-gradient-to-br from-blue-600/95 to-purple-600/95 backdrop-blur-xl rounded-3xl p-6 border-2 border-white/30 shadow-2xl neural-glow min-w-[320px] max-w-[380px]">
              {/* Speech Bubble Tail */}
              <div 
                className="absolute w-0 h-0 border-t-[20px] border-t-blue-600/95 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent"
                style={{
                  bottom: '-15px',
                  left: '30%',
                  transform: 'translateX(-50%)'
                }}
              />
              
              {/* Step Number Badge */}
              <div className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white/50">
                <span className="text-white font-bold text-lg">{item.step}</span>
              </div>
              
              {/* Icon */}
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-white/20 rounded-xl p-3">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="futuristic-subheading text-lg text-white mb-1">{item.title}</h3>
                  <span className="text-xs text-blue-200 font-semibold">{item.highlight}</span>
                </div>
              </div>
              
              {/* Description */}
              <p className="futuristic-body text-sm text-white/90 leading-relaxed">
                {item.description}
              </p>
              
              {/* Pulsing Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-3xl blur-2xl -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Chat Conversation Component with Looping Animation
const ModuleChatDisplay = ({ moduleId, modules }) => {
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [isTyping, setIsTypingState] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const chatContainerRef = useRef(null);
  const loopTimeoutRef = useRef(null);
  const isPlayingRef = useRef(false);
  const module = modules.find(m => m.id === moduleId);
  const useCase = module?.useCases?.[0];

  // Create Aera-style conversational use cases - 3 scenarios per module
  const getModuleUseCase = (moduleId) => {
    const useCases = {
      'customer': [
        // Use Case 1: User asks
        { type: 'user', text: 'Why are we losing customers?' },
        { type: 'vantage', text: '23% churn due to poor onboarding. Customers who don\'t complete setup in 7 days have 73% higher churn risk.', metrics: [{ value: '23%', label: 'Churn' }, { value: '73%', label: 'Risk' }] },
        { type: 'vantage', text: 'Fixing onboarding predicts 40% churn reduction. Should I show you the recommendations?', metrics: [{ value: '40%', label: 'Reduction' }], action: 'View recommendations' },
        { type: 'outcome', text: 'Churn reduced 38%. Saved $2.4M.', metrics: [{ value: '38%', label: 'Reduced' }, { value: '$2.4M', label: 'Saved' }] },
        
        // Use Case 2: Proactive
        { type: 'vantage', text: 'Alert: Enterprise segment showing 15% higher support tickets. Investigating...', metrics: [{ value: '15%', label: 'Increase' }] },
        { type: 'user', text: 'What did you find?' },
        { type: 'vantage', text: 'New feature confused 42% of users. Quick fix: Training campaign. Expected: 67% resolution.', metrics: [{ value: '42%', label: 'Affected' }, { value: '67%', label: 'Resolution' }], action: 'Send campaign' },
        { type: 'outcome', text: 'Tickets down 58%. Satisfaction +23%.', metrics: [{ value: '58%', label: 'Reduced' }, { value: '23%', label: 'Satisfaction' }] },
        
        // Use Case 3: Opportunity
        { type: 'vantage', text: 'Opportunity: Top 10 customers have $8.5M ARR and 89% NPS. Upsell potential: $1.2M.', metrics: [{ value: '$8.5M', label: 'ARR' }, { value: '$1.2M', label: 'Upsell' }], action: 'View opportunities' },
        { type: 'outcome', text: 'Upsell campaign launched. Closed $980K.', metrics: [{ value: '$980K', label: 'Closed' }, { value: '82%', label: 'Success' }] }
      ],
      'product': [
        { type: 'user', text: 'Which features drive value?' },
        { type: 'vantage', text: '"Smart Search" drives 34% engagement. "AI Recommendations" increases retention 28%. But 15% haven\'t discovered them.', metrics: [{ value: '34%', label: 'Engagement' }, { value: '28%', label: 'Retention' }] },
        { type: 'vantage', text: 'Recommendation: Improve "Smart Search" and add discovery prompts. Predicted: 42% discovery increase.', metrics: [{ value: '42%', label: 'Discovery' }], action: 'See roadmap' },
        { type: 'outcome', text: 'Discovery +42%. Satisfaction +19%. DAU +12%.', metrics: [{ value: '42%', label: 'Discovery' }, { value: '12%', label: 'DAU' }] },
        
        { type: 'vantage', text: 'Alert: "Dashboard Analytics" usage down 31% this month.', metrics: [{ value: '31%', label: 'Drop' }] },
        { type: 'user', text: 'Why?' },
        { type: 'vantage', text: 'New UI confused 47% of users. Quick fix: Add tooltips. Expected recovery: 78%.', metrics: [{ value: '47%', label: 'Affected' }, { value: '78%', label: 'Recovery' }], action: 'Fix UI' },
        { type: 'outcome', text: 'Usage recovered 72%. Complaints down 45%.', metrics: [{ value: '72%', label: 'Recovered' }, { value: '45%', label: 'Less' }] },
        
        { type: 'vantage', text: 'Beta users of "Workflow Automation" show 3x engagement. Ready for launch?', metrics: [{ value: '3x', label: 'Engagement' }], action: 'Launch feature' },
        { type: 'outcome', text: 'Launched. 68% adoption. Productivity +24%.', metrics: [{ value: '68%', label: 'Adoption' }, { value: '24%', label: 'Productivity' }] }
      ],
      'financial': [
        { type: 'user', text: 'What\'s our Q4 forecast?' },
        { type: 'vantage', text: 'On track at $12.5M with $2.1M opportunity. 3 deals worth $850K have 78% close probability.', metrics: [{ value: '$12.5M', label: 'On Track' }, { value: '$2.1M', label: 'Opportunity' }] },
        { type: 'vantage', text: 'Recommend accelerating those 3 deals. Need executive sponsorship. Impact: $850K additional.', metrics: [{ value: '$850K', label: 'Additional' }, { value: '78%', label: 'Probability' }], action: 'View deals' },
        { type: 'outcome', text: 'Exceeded forecast 8%. Closed all 3 deals.', metrics: [{ value: '8%', label: 'Above' }, { value: '$850K', label: 'Closed' }] },
        
        { type: 'vantage', text: 'Alert: Payment delays up 23%. Top 5 customers 15 days overdue. Total: $420K.', metrics: [{ value: '23%', label: 'Increase' }, { value: '$420K', label: 'Outstanding' }] },
        { type: 'user', text: 'Should we worry?' },
        { type: 'vantage', text: '3 customers restructuring. Low churn risk. Offer payment plans. Expected: 92% collection in 60 days.', metrics: [{ value: '92%', label: 'Collection' }, { value: '60', label: 'Days' }], action: 'Create plans' },
        { type: 'outcome', text: 'Payment plans implemented. Collected $387K in 45 days.', metrics: [{ value: '$387K', label: 'Collected' }, { value: '45', label: 'Days' }] },
        
        { type: 'vantage', text: 'Opportunity: We\'re 12% below market on enterprise pricing. Increase 8% = $1.8M ARR with low churn risk.', metrics: [{ value: '$1.8M', label: 'ARR' }, { value: '8%', label: 'Price' }], action: 'Adjust pricing' },
        { type: 'outcome', text: 'Pricing updated. Added $1.6M ARR. Churn only +2%.', metrics: [{ value: '$1.6M', label: 'Added' }, { value: '2%', label: 'Churn' }] }
      ],
      'operations': [
        { type: 'user', text: 'Optimize supply chain costs?' },
        { type: 'vantage', text: 'Excess inventory in Santiago: $2.2M. Transfer to Sao Paulo saves $2.2M working capital + $180K holding costs.', metrics: [{ value: '$2.2M', label: 'Savings' }, { value: '$180K', label: 'Costs' }] },
        { type: 'vantage', text: 'Plant P23 has 100K capacity. Launch production?', metrics: [{ value: '100K', label: 'Capacity' }], action: 'Launch production' },
        { type: 'outcome', text: 'Inventory transferred. Production launched. Capacity: 94%.', metrics: [{ value: '$2.2M', label: 'Saved' }, { value: '94%', label: 'Utilized' }] },
        
        { type: 'vantage', text: 'Stock-out alert: "Logo Premium" in Germany. 15K shortage in 3 weeks. We have excess in France.', metrics: [{ value: '15K', label: 'Shortage' }, { value: '3', label: 'Weeks' }] },
        { type: 'user', text: 'Transfer from France?' },
        { type: 'vantage', text: 'Yes. Transfer 15K units. Cost: $45K. Revenue protected: $2.1M.', metrics: [{ value: '$45K', label: 'Cost' }, { value: '$2.1M', label: 'Protected' }], action: 'Execute transfer' },
        { type: 'outcome', text: 'Transfer done. Stock-out prevented. Revenue protected.', metrics: [{ value: '$2.1M', label: 'Protected' }, { value: '100%', label: 'Success' }] },
        
        { type: 'vantage', text: 'Production line 7 has 23% downtime. Maintenance conflicts. Reschedule = 8% downtime.', metrics: [{ value: '23%', label: 'Downtime' }, { value: '8%', label: 'New' }], action: 'Reschedule' },
        { type: 'outcome', text: 'Rescheduled. Downtime: 9%. Output +15%.', metrics: [{ value: '9%', label: 'Downtime' }, { value: '15%', label: 'Output' }] }
      ],
      'market': [
        { type: 'user', text: 'What\'s happening in market?' },
        { type: 'vantage', text: 'Competitor stock-out in Germany. We can fill 53% gap. Market share opportunity: $4.5M Q4.', metrics: [{ value: '53%', label: 'Coverage' }, { value: '$4.5M', label: 'Opportunity' }] },
        { type: 'vantage', text: 'We\'re 12% below market on enterprise pricing. Adjust to market = $800K revenue.', metrics: [{ value: '12%', label: 'Below' }, { value: '$800K', label: 'Revenue' }], action: 'Adjust pricing' },
        { type: 'outcome', text: 'Market share +15%. Captured $3.2M. Pricing adjusted.', metrics: [{ value: '15%', label: 'Share' }, { value: '$3.2M', label: 'Revenue' }] },
        
        { type: 'vantage', text: 'Alert: New competitor "DataFlow" targeting SMB. Pricing 18% below ours. Risk: Medium.', metrics: [{ value: '18%', label: 'Below' }, { value: 'Medium', label: 'Risk' }] },
        { type: 'user', text: 'How to respond?' },
        { type: 'vantage', text: 'Don\'t match price. Emphasize superior features. Value messaging. Expected retention: 87%.', metrics: [{ value: '87%', label: 'Retention' }], action: 'Update messaging' },
        { type: 'outcome', text: 'Messaging updated. Retention: 89%. Lost only 3%.', metrics: [{ value: '89%', label: 'Retention' }, { value: '3%', label: 'Lost' }] },
        
        { type: 'vantage', text: 'Opportunity: "AI Analytics" demand up 42%. We have capability. Launch campaign?', metrics: [{ value: '42%', label: 'Demand' }], action: 'Launch campaign' },
        { type: 'outcome', text: 'Campaign launched. $1.8M pipeline. Conversion: 24%.', metrics: [{ value: '$1.8M', label: 'Pipeline' }, { value: '24%', label: 'Conversion' }] }
      ],
      'strategic': [
        { type: 'user', text: 'Pursue M&A with "DataSys"?' },
        { type: 'vantage', text: '68% synergy potential. ROI: 24% over 3 years. Market value: $52M. Recommended: $45M.', metrics: [{ value: '68%', label: 'Synergy' }, { value: '24%', label: 'ROI' }] },
        { type: 'vantage', text: 'Benefits: 150K customers, complementary products, $8M annual savings. Proceed?', metrics: [{ value: '150K', label: 'Customers' }, { value: '$8M', label: 'Savings' }], action: 'View analysis' },
        { type: 'outcome', text: 'M&A completed. Synergies 18 months early. Savings: $8.2M annually.', metrics: [{ value: '18', label: 'Months' }, { value: '$8.2M', label: 'Savings' }] },
        
        { type: 'vantage', text: 'Our "Enterprise AI" position is strong but vulnerable. Competitors consolidating. Risk ahead.', metrics: [{ value: 'Strong', label: 'Position' }] },
        { type: 'user', text: 'What should we do?' },
        { type: 'vantage', text: 'Launch "Enterprise AI Suite" 3 months early. Protects 35% market share. $12M opportunity.', metrics: [{ value: '35%', label: 'Protection' }, { value: '$12M', label: 'Opportunity' }], action: 'Accelerate roadmap' },
        { type: 'outcome', text: 'Launched early. Market share protected 38%. Captured $11.5M.', metrics: [{ value: '38%', label: 'Protected' }, { value: '$11.5M', label: 'Revenue' }] },
        
        { type: 'vantage', text: 'APAC expansion shows 89% market fit. Entry: $2.5M. ROI: 42% in 2 years. Pilot in Singapore?', metrics: [{ value: '89%', label: 'Fit' }, { value: '42%', label: 'ROI' }], action: 'Start pilot' },
        { type: 'outcome', text: 'Singapore pilot successful. Revenue: $1.8M year 1. ROI: 45%.', metrics: [{ value: '$1.8M', label: 'Revenue' }, { value: '45%', label: 'ROI' }] }
      ]
    };
    return useCases[moduleId] || [];
  };

  useEffect(() => {
    // Reset when module changes
    setDisplayedMessages([]);
    setIsTypingState(false);
    setCurrentMessageIndex(0);
    isPlayingRef.current = false;
    
    // Clear any existing timeouts
    if (loopTimeoutRef.current) {
      clearTimeout(loopTimeoutRef.current);
      loopTimeoutRef.current = null;
    }
    
    // Use Aera-style conversations for modules
    const conversations = getModuleUseCase(moduleId);
    
    if (conversations.length > 0) {
      // Add unique IDs to messages
      const messages = conversations.map((msg, idx) => ({
        ...msg,
        id: `${moduleId}-${idx}`
      }));

      isPlayingRef.current = true;

      const playMessage = (msgIndex) => {
        if (msgIndex >= messages.length) {
          // Loop back after reading time - clear all messages first
          setTimeout(() => {
            setDisplayedMessages([]);
            setIsTypingState(false);
            setCurrentMessageIndex(0);
            // Start fresh after a brief pause
            setTimeout(() => {
              playMessage(0);
            }, 1000);
          }, 15000); // 15 seconds to read all messages (3 scenarios)
          return;
        }

        setIsTypingState(true);
        const typingDuration = Math.min(messages[msgIndex].text.length * 20, 2000); // Max 2 seconds typing
        
        setTimeout(() => {
          setIsTypingState(false);
          // Add message only if we're at the correct index
          setDisplayedMessages(prev => {
            // Only add if we haven't added this message yet
            if (prev.length === msgIndex) {
              return [...prev, messages[msgIndex]];
            }
            return prev;
          });
          setCurrentMessageIndex(msgIndex + 1);
          
          if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
          }
          
          // Next message delay based on message type - longer for reading
          const delay = messages[msgIndex].type === 'user' ? 3000 : 
                       messages[msgIndex].type === 'outcome' ? 5000 : 
                       messages[msgIndex].action ? 4000 : // Longer if action button
                       3500; // Default 3.5 seconds for reading
          
          loopTimeoutRef.current = setTimeout(() => {
            playMessage(msgIndex + 1);
          }, delay);
        }, typingDuration);
      };

      // Start the conversation
      playMessage(0);
    } else if (useCase) {
      // Fallback to original use case format if exists
      const messages = [
        { 
          type: 'user', 
          text: useCase.challenge.split('.')[0] + '...', 
        },
        { 
          type: 'vantage', 
          text: useCase.solution.substring(0, 120) + '...', 
          metrics: useCase.metrics 
        },
        { 
          type: 'outcome', 
          text: useCase.outcome.split('.')[0] + '...', 
          metrics: useCase.metrics 
        }
      ];
      
      const playMessage = (msgIndex) => {
        if (msgIndex >= messages.length) {
          setTimeout(() => {
            setDisplayedMessages([]);
            setIsTypingState(false);
            setCurrentMessageIndex(0);
            setTimeout(() => {
              playMessage(0);
            }, 1000);
          }, 12000);
          return;
        }

        setIsTypingState(true);
        const typingDuration = Math.min(messages[msgIndex].text.length * 20, 2000);
        
        setTimeout(() => {
          setIsTypingState(false);
          setDisplayedMessages(prev => {
            if (prev.length === msgIndex) {
              return [...prev, messages[msgIndex]];
            }
            return prev;
          });
          setCurrentMessageIndex(msgIndex + 1);
          
          if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
          }
          
          const delay = messages[msgIndex].type === 'user' ? 3000 : 
                       messages[msgIndex].type === 'outcome' ? 5000 : 
                       3500;
          
          loopTimeoutRef.current = setTimeout(() => {
            playMessage(msgIndex + 1);
          }, delay);
        }, typingDuration);
      };

      playMessage(0);
    }

    return () => {
      isPlayingRef.current = false;
      if (loopTimeoutRef.current) {
        clearTimeout(loopTimeoutRef.current);
        loopTimeoutRef.current = null;
      }
    };
  }, [moduleId]);

  if (!module) return null;

  return (
      <motion.div
        className="bg-black/30 backdrop-blur-sm rounded-2xl border border-cyan-500/20 overflow-hidden h-full flex flex-col shadow-xl shadow-cyan-500/5"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      key={moduleId}
    >
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-cyan-500/15 p-4 border-b border-cyan-500/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 bg-gradient-to-br from-cyan-400/40 to-blue-500/40 rounded-lg flex items-center justify-center shadow-md shadow-cyan-500/20">
              {useCase ? (
                <MessageCircle className="h-4 w-4 text-cyan-200" />
              ) : (
                <module.icon className="h-4 w-4 text-cyan-200" />
              )}
            </div>
            <div>
              <h3 className="futuristic-subheading text-sm text-cyan-100 font-semibold">
                {useCase ? useCase.title : module.title}
              </h3>
              <p className="text-[10px] text-gray-400">
                {useCase ? useCase.leader : module.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      {useCase ? (
        <div 
          ref={chatContainerRef}
          className="flex-1 p-4 space-y-2.5 overflow-y-auto"
          style={{ scrollBehavior: 'smooth' }}
        >
          {displayedMessages.map((msg, msgIndex) => {
            return (
              <motion.div
                key={msg.id || `${msg.type}-${msgIndex}`}
                className={`flex ${msg.type === 'user' ? 'justify-start' : 'justify-end'}`}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {msg.type === 'user' ? (
                  <div className="max-w-[85%] bg-gray-800/50 text-gray-200 border border-gray-700/40 rounded-lg px-3 py-2 backdrop-blur-sm">
                    <p className="text-[11px] leading-snug">{msg.text}</p>
                  </div>
                ) : msg.type === 'vantage' ? (
                  <div className="max-w-[85%] bg-gradient-to-br from-cyan-500/70 via-blue-500/60 to-cyan-500/70 text-white border border-cyan-400/30 shadow-lg shadow-cyan-500/15 rounded-lg px-3 py-2.5 backdrop-blur-sm">
                    <div className="flex items-center space-x-1.5 mb-2">
                      <Bot className="h-3 w-3 text-cyan-200" />
                      <span className="text-[10px] font-semibold">Vantage Brilliance</span>
                    </div>
                    
                    {/* Message Text */}
                    <p className="text-[10px] text-cyan-100/90 leading-tight mb-2">
                      {msg.text}
                    </p>
                    
                    {/* Metrics Cards */}
                    {msg.metrics && msg.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-1.5 mb-2">
                        {msg.metrics.map((metric, i) => (
                          <div key={i} className="bg-cyan-500/20 rounded px-2 py-1.5 border border-cyan-400/30">
                            <div className="text-[11px] font-bold text-cyan-100">{metric.value}</div>
                            <div className="text-[8px] text-cyan-300/70 mt-0.5">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Action Button */}
                    {msg.action && (
                      <button className="w-full mt-2 px-2 py-1 bg-cyan-400/30 hover:bg-cyan-400/40 rounded text-[9px] font-semibold text-cyan-100 transition-colors border border-cyan-400/40">
                        {msg.action}
                      </button>
                    )}
                  </div>
                ) : msg.type === 'outcome' ? (
                  <div className="max-w-[85%] bg-green-600/20 border border-green-500/30 text-green-100 rounded-lg px-3 py-2.5 backdrop-blur-sm">
                    <div className="flex items-center space-x-1.5 mb-2">
                      <CheckCircle className="h-3 w-3 text-green-400" />
                      <span className="text-[10px] font-semibold">Results</span>
                    </div>
                    <p className="text-[10px] mb-2 leading-tight">{msg.text}</p>
                    {msg.metrics && msg.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-1.5 mt-2 pt-2 border-t border-green-400/20">
                        {msg.metrics.map((metric, i) => (
                          <div key={i} className="text-center bg-green-500/10 rounded px-2 py-1 border border-green-400/20">
                            <div className="text-[10px] font-bold text-green-300">{metric.value}</div>
                            <div className="text-[8px] text-green-400/70 mt-0.5">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : null}
              </motion.div>
            );
          })}
          
          {isTyping && (
            <div className="flex justify-end">
              <div className="bg-gradient-to-br from-cyan-500/70 to-blue-500/60 rounded-lg px-3 py-2 backdrop-blur-sm border border-cyan-400/30">
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-cyan-100 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1 h-1 bg-cyan-100 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1 h-1 bg-cyan-100 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center">
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2 border border-cyan-400/30"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <module.icon className="h-6 w-6 text-cyan-400/60" />
            </motion.div>
            <h3 className="futuristic-subheading text-sm text-cyan-200 mb-1">
              {module.status}
            </h3>
            <p className="futuristic-body text-[10px] text-gray-400">
              Coming soon
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const ChatConversation = ({ useCase, index, activeChatIndex }) => {
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [isTyping, setIsTypingState] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Auto-play first conversation, or trigger based on scroll
    if (index === 0 || index === activeChatIndex) {
      const messages = [
        { type: 'leader', text: useCase.challenge, sender: useCase.leader },
        { type: 'vantage', text: useCase.solution, sender: 'Vantage Brilliance' },
        { type: 'outcome', text: useCase.outcome, sender: 'Results', metrics: useCase.metrics }
      ];

      setDisplayedMessages([]);
      messages.forEach((msg, msgIndex) => {
        setTimeout(() => {
          setIsTypingState(true);
          setTimeout(() => {
            setIsTypingState(false);
            setDisplayedMessages(prev => [...prev, msg]);
            if (chatContainerRef.current) {
              chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            }
          }, 500);
        }, msgIndex * 3000 + (index * 2000));
      });
    }
  }, [activeChatIndex, index, useCase]);

  return (
    <motion.div
      className="bg-black/60 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.3, duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="futuristic-subheading text-lg text-white">{useCase.title}</h3>
              <p className="text-xs text-gray-400">{useCase.leader}</p>
            </div>
          </div>
          {useCase.metrics && (
            <div className="flex space-x-2">
              {useCase.metrics.map((metric, i) => (
                <span key={i} className="text-xs px-3 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                  {metric}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Chat Messages */}
      <div 
        ref={chatContainerRef}
        className="p-6 space-y-4 max-h-96 overflow-y-auto"
        style={{ scrollBehavior: 'smooth' }}
      >
        {displayedMessages.map((msg, msgIndex) => (
          <motion.div
            key={msgIndex}
            className={`flex ${msg.type === 'leader' ? 'justify-start' : 'justify-end'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`max-w-3xl ${
              msg.type === 'leader' 
                ? 'bg-gray-800/80 text-gray-100' 
                : msg.type === 'vantage'
                ? 'bg-gradient-to-br from-blue-600/90 to-purple-600/90 text-white'
                : 'bg-green-600/20 border border-green-500/30 text-green-100'
            } rounded-2xl px-6 py-4 backdrop-blur-sm`}>
              <div className="flex items-center space-x-2 mb-2">
                {msg.type === 'vantage' && <Bot className="h-4 w-4" />}
                <span className="text-xs font-semibold opacity-80">{msg.sender}</span>
              </div>
              <p className="futuristic-body text-sm leading-relaxed whitespace-pre-line">
                {msg.text}
              </p>
              {msg.metrics && (
                <div className="mt-3 pt-3 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {msg.metrics.map((metric, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
        
        {isTyping && (
          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="bg-gradient-to-br from-blue-600/90 to-purple-600/90 rounded-2xl px-6 py-4">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const Homepage = () => {
  const [selectedModule, setSelectedModule] = useState('customer');
  const [selectedUseCase, setSelectedUseCase] = useState(null);
  const [expandedModuleChats, setExpandedModuleChats] = useState({});
  const [isTyping, setIsTyping] = useState({});
  const [expandedFlowNodes, setExpandedFlowNodes] = useState({});
  const [activeChatIndex, setActiveChatIndex] = useState(0);
  const [chatMessages, setChatMessages] = useState({});
  const chatEndRefs = useRef({});
  const heroRef = useRef(null);
  const [heroCycle, setHeroCycle] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);
  // State for 4 corner chats
  const [topLeftChatIndex, setTopLeftChatIndex] = useState(0); // Data Silos
  const [bottomLeftChatIndex, setBottomLeftChatIndex] = useState(0); // Black Box AI
  const [topRightChatIndex, setTopRightChatIndex] = useState(0); // Decision Tracking
  const [bottomRightChatIndex, setBottomRightChatIndex] = useState(0); // AI+Human Collab
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // 5 high-resolution videos for hero section - sequential loop (30-35 seconds total)
  const heroVideos = [
    '/AI_Video_for_Business_Intelligence_Vision.mp4',
    '/hero-intelligence-lab.mp4',
    '/consulting-transformation.mp4',
    '/AI_Collaboration_Visualization_Generated.mp4',
    '/AI_Neural_Network_Visualization_Video.mp4'
  ];

  // Handle video switching and master loop (30-35 seconds total)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setCurrentVideoIndex(prev => {
        const nextIndex = (prev + 1) % heroVideos.length;
        // If we've completed all 5 videos, reset the entire cycle
        if (nextIndex === 0) {
          setHeroCycle(prev => prev + 1);
        }
        return nextIndex;
      });
    };

    video.addEventListener('ended', handleVideoEnd);
    
    // Load and play the current video
    video.src = heroVideos[currentVideoIndex];
    video.load();
    video.play().catch(err => console.log('Video play error:', err));

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, [currentVideoIndex, heroCycle]);

  // Helper function to create chat loop
  const createChatLoop = (messages, setIndex, cycleKey) => {
    const messageDurations = messages.map(text => {
      const typingTime = text.length * 85; // 85ms per character
      const delay = 500; // Initial delay
      const displayTime = 4000; // Display time after typing completes
      return typingTime + delay + displayTime;
    });

    let currentIndex = 0;
    setIndex(0);
    const timeouts = [];
    
    const scheduleNext = (index) => {
      const duration = messageDurations[index];
      const timeout = setTimeout(() => {
        currentIndex = (currentIndex + 1) % messages.length;
        setIndex(currentIndex);
        scheduleNext(currentIndex);
      }, duration);
      timeouts.push(timeout);
    };

    scheduleNext(0);
    return () => timeouts.forEach(clearTimeout);
  };

  // Top Left Chat: Data Silos (Top Executives)
  useEffect(() => {
    const messages = [
      "We're not meeting targets. Three departments working on the same problem. Duplicate efforts everywhere.",
      "We have Salesforce, HubSpot, Analytics, Finance systems. But zero unified view. Decisions made in isolation.",
      "Sales makes pricing decisions without seeing customer health. Product launches without market context. This is chaos.",
      "What if we had one system that connects everything? One unified intelligence layer? Let's explore AI agents—they can do everything!"
    ];
    return createChatLoop(messages, setTopLeftChatIndex, heroCycle);
  }, [heroCycle]);

  // Bottom Left Chat: Black Box AI (Working Level)
  useEffect(() => {
    const messages = [
      "AI is exciting! We started using it. Got proactive insights, predictions. Super cool.",
      "But here's the problem: I need to explain to the CTO why AI recommended this pricing. I don't know. It's a black box.",
      "Sometimes it's right, sometimes wrong. But we never understand WHY. How do I recommend this to leadership?",
      "We wish we knew the causal reasons. Not just predictions. We need to understand the 'why' behind decisions."
    ];
    return createChatLoop(messages, setBottomLeftChatIndex, heroCycle);
  }, [heroCycle]);

  // Top Right Chat: Decision Tracking & Learning
  useEffect(() => {
    const messages = [
      "We made this exact pricing mistake last year. Why are we repeating it? No one remembers what worked.",
      "$2.4M in duplicate efforts this quarter. Teams solving problems others already solved. We're not learning.",
      "47% of decisions made without context from past decisions. We keep launching features that fail. No institutional memory.",
      "What if we tracked every decision? Learned from outcomes? Built organizational intelligence over time?"
    ];
    return createChatLoop(messages, setTopRightChatIndex, heroCycle);
  }, [heroCycle]);

  // Bottom Right Chat: AI+Human Collaboration
  useEffect(() => {
    const messages = [
      "I'm worried. Will AI replace me? Will I become irrelevant? Am I still learning and growing?",
      "We need systems that nurture humans. Train us. Make us smarter. Not replace us. That's the future.",
      "AI+Human collaboration—that's what works. We think together. AI amplifies our judgment. We learn from each other.",
      "The best systems make humans better decision-makers. They preserve our judgment while giving us superhuman intelligence."
    ];
    return createChatLoop(messages, setBottomRightChatIndex, heroCycle);
  }, [heroCycle]);

  const intelligenceModules = [
    {
      id: 'customer',
      title: 'Customer Intelligence',
      description: 'Understand customer behavior, predict churn, optimize retention, and maximize lifetime value.',
      icon: Users,
      status: 'Available Now',
      video: '/Customer_Intelligence_Visualization_Generated.mp4',
      image: '/customerintelligence dashboard.png',
      useCases: [
        {
          id: 'churn',
          title: 'Reducing Customer Churn',
          icon: AlertCircle,
          challenge: 'We\'re losing 15% of customers every month. I have no idea why.',
          leader: 'SaaS CEO',
          solution: 'I analyzed 12 months of your customer data—product usage, support tickets, payment history, feature adoption, engagement metrics, and market signals. Here\'s what I found:\n\n**Root Cause #1:** Poor onboarding flow is causing 23% of your churn. Customers who don\'t complete onboarding within 7 days have a 73% higher churn risk.\n\n**Root Cause #2:** Feature discovery gaps—18% of your churn. Customers who don\'t discover your key features within 30 days are 58% more likely to leave.\n\n**The Deeper Issue:** I also found organizational misalignment. Your customer success team is focused on reactive support, but your product team built features that require proactive discovery. The workflows don\'t align.\n\nI simulated 10,000 intervention scenarios. The highest impact: Fix onboarding flow (predicts 40% churn reduction) + proactive feature discovery (predicts 28% churn reduction). Combined impact: 40% overall churn reduction in 3 months.',
          outcome: '3 months later: Churn reduced by 38%. Saved $2.4M in annual revenue. Now, every time we make a product or process change, I track if it affects churn. You\'re learning which interventions actually work.',
          metrics: ['38% churn reduction', '$2.4M saved', '3 months']
        },
        {
          id: 'pricing',
          title: 'Optimizing Customer Pricing',
          icon: DollarSign,
          challenge: 'Our pricing is all over the place. Some deals get huge discounts, others don\'t. We\'re leaving money on the table, but I don\'t know where.',
          leader: 'B2B Sales VP',
          solution: 'I analyzed your sales data, competitor pricing, customer payment patterns, and win/loss analysis. Here\'s what I discovered:\n\n**The Real Problem:** You\'re not seeing true price elasticity. When you lower prices 10%, you think it\'s driving wins. But I found that feature differences, timing, and competitive moves are actually driving most outcomes—not price alone.\n\n**What I Found:**\n- Price sensitivity varies dramatically by segment. Enterprise customers: 15% price elasticity. Mid-market: 42% price elasticity.\n- Your discount approval process is reactive. Competitors are beating you on timing, not price.\n- You\'re discounting in low-competition scenarios where you don\'t need to.\n\nI built predictive models that account for customer segments, deal characteristics, and market conditions. I tested 5,000 pricing scenarios.\n\n**My Recommendation:** Increase enterprise pricing by 8% (they\'re price-insensitive). Reduce mid-market discounts by 12% (you\'re over-discounting). Create dynamic pricing rules based on competitive signals—not gut feeling.',
          outcome: '2 weeks later: Average deal size increased 23%. Gross margin improved 8%. Pricing decisions now take 2 days instead of 3 weeks. I\'m continuously tracking which pricing strategies work—learning and optimizing in real-time.',
          metrics: ['23% deal size increase', '8% margin improvement', '2 days vs 3 weeks']
        }
      ]
    },
    {
      id: 'product',
      title: 'Product Intelligence',
      description: 'Understand feature adoption, optimize product roadmap, and drive user engagement.',
      icon: Target,
      status: 'Q2 2026',
      video: null,
      image: null,
      useCases: []
    },
    {
      id: 'financial',
      title: 'Financial Intelligence',
      description: 'Forecast revenue, optimize pricing, and analyze financial performance with causal insights.',
      icon: TrendingUp,
      status: 'Q3 2026',
      video: null,
      image: null,
      useCases: []
    },
    {
      id: 'operations',
      title: 'Operations Intelligence',
      description: 'Optimize processes, allocate resources, and improve operational efficiency.',
      icon: BarChart3,
      status: 'Q1 2027',
      video: null,
      image: null,
      useCases: []
    },
    {
      id: 'market',
      title: 'Market Intelligence',
      description: 'Analyze competition, identify opportunities, and track market trends.',
      icon: Shield,
      status: 'Q3 2027',
      video: null,
      image: null,
      useCases: []
    },
    {
      id: 'strategic',
      title: 'Strategic Intelligence',
      description: 'Plan long-term strategy, evaluate M&A opportunities, and drive transformation.',
      icon: Brain,
      status: '2028',
      video: null,
      image: null,
      useCases: []
    }
  ];

  // Chat animation effect for expanded module
  useEffect(() => {
    const currentModule = intelligenceModules.find(m => m.id === selectedModule);
    if (!currentModule || !currentModule.useCases || currentModule.useCases.length === 0) {
      return;
    }

    // Initialize chat for first use case if not already started
    if (!expandedModuleChats[selectedModule]) {
      const firstUseCase = currentModule.useCases[0];
      const messages = [
        { type: 'leader', text: firstUseCase.challenge, sender: firstUseCase.leader },
        { type: 'vantage', text: firstUseCase.solution, sender: 'Vantage Brilliance' },
        { type: 'outcome', text: firstUseCase.outcome, sender: 'Results', metrics: firstUseCase.metrics }
      ];

      setExpandedModuleChats(prev => ({ ...prev, [selectedModule]: [] }));
      setIsTyping(prev => ({ ...prev, [selectedModule]: true }));

      messages.forEach((msg, index) => {
        setTimeout(() => {
          setIsTyping(prev => ({ ...prev, [selectedModule]: true }));
          setTimeout(() => {
            setExpandedModuleChats(prev => ({
              ...prev,
              [selectedModule]: [...(prev[selectedModule] || []), msg]
            }));
            setIsTyping(prev => ({ ...prev, [selectedModule]: false }));
            if (chatEndRefs.current[selectedModule]) {
              chatEndRefs.current[selectedModule].scrollIntoView({ behavior: 'smooth' });
            }
          }, 500);
        }, index * 2000);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedModule]);

  const currentModule = intelligenceModules.find(m => m.id === selectedModule);

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Navigation - Unified Component */}
      <NavBar />

      {/* Hero Section - CTA Video */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full Screen Video Background - 5 Videos Sequential Loop */}
        <div className="absolute inset-0 z-0">
          <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            playsInline
            key={currentVideoIndex}
          >
            <source src={heroVideos[currentVideoIndex]} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
          
          {/* Data Streams - Vertical only */}
          <DataStreams count={5} />
          
          {/* Particle System */}
          <ParticleSystem count={20} />
            </div>
        
        {/* System Status - Integrated as Floating Elements (No Box) */}
            <motion.div 
          className="absolute top-20 right-6 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-col gap-2 items-end">
            <motion.div 
              className="flex items-center gap-2"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: '0 0 8px #10b981' }} />
              <span className="terminal-font text-[10px] text-green-400" style={{ textShadow: '0 0 6px #10b981' }}>SYNCED</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400" style={{ boxShadow: '0 0 8px #06b6d4' }} />
              <span className="terminal-font text-[10px] text-cyan-400" style={{ textShadow: '0 0 6px #06b6d4' }}>ACTIVE</span>
            </motion.div>
            </div>
        </motion.div>
              
        {/* Story Flow: Sequential Animation - 30+ Second Loop (5 Videos) - Transmission Style */}
        
        {/* ========== 4 CORNER CHAT SYSTEM ========== */}
        
        {/* TOP LEFT: Data Silos Problem (Top Executives) */}
              <motion.div 
          key={`chat-top-left-${heroCycle}`}
          className="absolute"
          style={{
            top: '10%',
            left: '4%',
            width: '300px',
            height: '30%',
            background: 'rgba(0, 0, 0, 0.15)',
            backdropFilter: 'blur(2px)',
            borderRadius: '8px',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
            overflow: 'hidden',
            zIndex: 9,
            pointerEvents: 'none'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.0 }}
        >
          <motion.div style={{
            padding: '8px 12px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            background: 'rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '9px',
              fontWeight: '600',
              color: '#f59e0b',
              letterSpacing: '0.08em',
              textShadow: '0 0 8px rgba(245, 158, 11, 0.6)'
            }}>EXECUTIVE BRIEFING</div>
          </motion.div>
          <AnimatePresence mode="wait">
            {topLeftChatIndex >= 0 && (
              <motion.div
                key={`top-left-msg-${topLeftChatIndex}-${heroCycle}`}
                className="absolute"
                style={{
                  top: '25%',
                  left: '6%',
                  right: '6%',
                  maxWidth: '280px'
                }}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.8 }}
              >
                <div style={{ padding: '8px 0' }}>
                  <div style={{
                    marginBottom: '6px',
                    fontSize: '10px',
                    fontFamily: "'Orbitron', sans-serif",
                    fontWeight: '600',
                    color: ['#f59e0b', '#06b6d4', '#ec4899', '#8b5cf6'][topLeftChatIndex],
                    letterSpacing: '0.05em'
                  }}>{['[CEO]', '[CTO]', '[CMO]', '[CTO]'][topLeftChatIndex]} {'>'} {['SPEAKING...', 'RESPONDING...', 'JOINING...', 'PROPOSING...'][topLeftChatIndex]}</div>
                  <p style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    fontWeight: '400',
                    fontSize: '13px',
                    color: '#e5e7eb',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.9)',
                    lineHeight: '1.6'
                  }}>
                    <TypingText
                      text={[
                        "We're not meeting targets. Three departments working on the same problem. Duplicate efforts everywhere.",
                        "We have Salesforce, HubSpot, Analytics, Finance systems. But zero unified view. Decisions made in isolation.",
                        "Sales makes pricing decisions without seeing customer health. Product launches without market context. This is chaos.",
                        "What if we had one system that connects everything? One unified intelligence layer? Let's explore AI agents—they can do everything!"
                      ][topLeftChatIndex]}
                      delay={0.5}
                      speed={85}
                      cycleKey={`top-left-${heroCycle}-${topLeftChatIndex}`}
                      showPrompt={false}
                      textClassName=""
                    />
                  </p>
            </div>
              </motion.div>
            )}
          </AnimatePresence>
              </motion.div>

        {/* BOTTOM LEFT: Black Box AI Problem (Working Level) */}
              <motion.div 
          key={`chat-bottom-left-${heroCycle}`}
          className="absolute"
          style={{
            bottom: '20%',
            left: '4%',
            width: '300px',
            height: '30%',
            background: 'rgba(0, 0, 0, 0.15)',
            backdropFilter: 'blur(2px)',
            borderRadius: '8px',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
            overflow: 'hidden',
            zIndex: 9,
            pointerEvents: 'none'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 1.0 }}
        >
          <motion.div style={{
            padding: '8px 12px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            background: 'rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '9px',
              fontWeight: '600',
              color: '#8b5cf6',
              letterSpacing: '0.08em',
              textShadow: '0 0 8px rgba(139, 92, 246, 0.6)'
            }}>WORKING LEVEL DISCUSSION</div>
          </motion.div>
          <AnimatePresence mode="wait">
            {bottomLeftChatIndex >= 0 && (
              <motion.div
                key={`bottom-left-msg-${bottomLeftChatIndex}-${heroCycle}`}
                className="absolute"
                style={{
                  top: '25%',
                  left: '6%',
                  right: '6%',
                  maxWidth: '280px'
                }}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.8 }}
              >
                <div style={{ padding: '8px 0' }}>
                  <div style={{
                    marginBottom: '6px',
                    fontSize: '10px',
                    fontFamily: "'Orbitron', sans-serif",
                    fontWeight: '600',
                    color: '#8b5cf6',
                    letterSpacing: '0.05em'
                  }}>[ANALYST] {'>'} SPEAKING...</div>
                  <p style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    fontWeight: '400',
                    fontSize: '13px',
                    color: '#e5e7eb',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.9)',
                    lineHeight: '1.6'
                  }}>
                    <TypingText
                      text={[
                        "AI is exciting! We started using it. Got proactive insights, predictions. Super cool.",
                        "But here's the problem: I need to explain to the CTO why AI recommended this pricing. I don't know. It's a black box.",
                        "Sometimes it's right, sometimes wrong. But we never understand WHY. How do I recommend this to leadership?",
                        "We wish we knew the causal reasons. Not just predictions. We need to understand the 'why' behind decisions."
                      ][bottomLeftChatIndex]}
                      delay={0.5}
                      speed={85}
                      cycleKey={`bottom-left-${heroCycle}-${bottomLeftChatIndex}`}
                      showPrompt={false}
                      textClassName=""
                    />
                  </p>
          </div>
              </motion.div>
            )}
          </AnimatePresence>
            </motion.div>

        {/* TOP RIGHT: Decision Tracking & Learning Problem */}
            <motion.div 
          key={`chat-top-right-${heroCycle}`}
          className="absolute"
          style={{
            top: '10%',
            right: '4%',
            width: '300px',
            height: '30%',
            background: 'rgba(0, 0, 0, 0.15)',
            backdropFilter: 'blur(2px)',
            borderRadius: '8px',
            border: '1px solid rgba(236, 72, 153, 0.3)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
            overflow: 'hidden',
            zIndex: 9,
            pointerEvents: 'none'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.0 }}
        >
          <motion.div style={{
            padding: '8px 12px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            background: 'rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '9px',
              fontWeight: '600',
              color: '#ec4899',
              letterSpacing: '0.08em',
              textShadow: '0 0 8px rgba(236, 72, 153, 0.6)'
            }}>STRATEGY DISCUSSION</div>
          </motion.div>
          <AnimatePresence mode="wait">
            {topRightChatIndex >= 0 && (
              <motion.div
                key={`top-right-msg-${topRightChatIndex}-${heroCycle}`}
                className="absolute"
                style={{
                  top: '25%',
                  left: '6%',
                  right: '6%',
                  maxWidth: '280px'
                }}
                initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.8 }}
              >
                <div style={{ padding: '8px 0' }}>
                  <div style={{
                    marginBottom: '6px',
                    fontSize: '10px',
                    fontFamily: "'Orbitron', sans-serif",
                    fontWeight: '600',
                    color: ['#ec4899', '#f59e0b', '#8b5cf6', '#06b6d4'][topRightChatIndex],
                    letterSpacing: '0.05em'
                  }}>{['[CFO]', '[CEO]', '[STRATEGY]', '[CEO]'][topRightChatIndex]} {'>'} {['SPEAKING...', 'RESPONDING...', 'JOINING...', 'PROPOSING...'][topRightChatIndex]}</div>
                  <p style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    fontWeight: '400',
                    fontSize: '13px',
                    color: '#e5e7eb',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.9)',
                    lineHeight: '1.6'
                  }}>
                    <TypingText
                      text={[
                        "We made this exact pricing mistake last year. Why are we repeating it? No one remembers what worked.",
                        "$2.4M in duplicate efforts this quarter. Teams solving problems others already solved. We're not learning.",
                        "47% of decisions made without context from past decisions. We keep launching features that fail. No institutional memory.",
                        "What if we tracked every decision? Learned from outcomes? Built organizational intelligence over time?"
                      ][topRightChatIndex]}
                      delay={0.5}
                      speed={85}
                      cycleKey={`top-right-${heroCycle}-${topRightChatIndex}`}
                      showPrompt={false}
                      textClassName=""
                    />
                  </p>
        </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
              
        {/* BOTTOM RIGHT: AI+Human Collaboration Need */}
            <motion.div 
          key={`chat-bottom-right-${heroCycle}`}
          className="absolute"
          style={{
            bottom: '20%',
            right: '4%',
            width: '300px',
            height: '30%',
            background: 'rgba(0, 0, 0, 0.15)',
            backdropFilter: 'blur(2px)',
            borderRadius: '8px',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
            overflow: 'hidden',
            zIndex: 9,
            pointerEvents: 'none'
          }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 1.0 }}
        >
          <motion.div style={{
            padding: '8px 12px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            background: 'rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '9px',
              fontWeight: '600',
              color: '#06b6d4',
              letterSpacing: '0.08em',
              textShadow: '0 0 8px rgba(6, 182, 212, 0.6)'
            }}>HUMAN CAPITAL DISCUSSION</div>
          </motion.div>
          <AnimatePresence mode="wait">
            {bottomRightChatIndex >= 0 && (
              <motion.div
                key={`bottom-right-msg-${bottomRightChatIndex}-${heroCycle}`}
                className="absolute"
                style={{
                  top: '25%',
                  left: '6%',
                  right: '6%',
                  maxWidth: '280px'
                }}
                initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.8 }}
              >
                <div style={{ padding: '8px 0' }}>
                  <div style={{
                    marginBottom: '6px',
                    fontSize: '10px',
                    fontFamily: "'Orbitron', sans-serif",
                    fontWeight: '600',
                    color: ['#06b6d4', '#8b5cf6', '#ec4899', '#f59e0b'][bottomRightChatIndex],
                    letterSpacing: '0.05em'
                  }}>{['[CHRO]', '[STRATEGY]', '[CEO]', '[CHRO]'][bottomRightChatIndex]} {'>'} {['SPEAKING...', 'RESPONDING...', 'JOINING...', 'PROPOSING...'][bottomRightChatIndex]}</div>
                  <p style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    fontWeight: '400',
                    fontSize: '13px',
                    color: '#e5e7eb',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.9)',
                    lineHeight: '1.6'
                  }}>
                    <TypingText
                      text={[
                        "I'm worried. Will AI replace me? Will I become irrelevant? Am I still learning and growing?",
                        "We need systems that nurture humans. Train us. Make us smarter. Not replace us. That's the future.",
                        "AI+Human collaboration—that's what works. We think together. AI amplifies our judgment. We learn from each other.",
                        "The best systems make humans better decision-makers. They preserve our judgment while giving us superhuman intelligence."
                      ][bottomRightChatIndex]}
                      delay={0.5}
                      speed={85}
                      cycleKey={`bottom-right-${heroCycle}-${bottomRightChatIndex}`}
                      showPrompt={false}
                      textClassName=""
                    />
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
            </motion.div>

        
        {/* VANTAGE BRILLIANCE - Heroic Appearance - 21-24s */}

        <div 
          className="absolute left-1/2 z-20"
          style={{ 
            top: '38%',
            transform: 'translateX(-50%)',
            perspective: '1000px'
          }}
            >
              <motion.div 
            key={`vantage-${heroCycle}`}
            initial={{ 
              opacity: 0,
              scale: 0.3,
              y: 100,
              rotateX: 90,
              rotateY: -20,
              z: -300
            }}
            animate={{ 
              opacity: [0, 0, 1, 1],
              scale: [0.3, 1.2, 1.1, 1],
              y: [100, -20, 10, 0],
              rotateX: [90, 10, -5, 0],
              rotateY: [-20, 5, -2, 0],
              z: [-300, 50, 20, 0]
            }}
            exit={{ 
              opacity: 0,
              scale: 0.3,
              y: 100,
              rotateX: 90
            }}
            transition={{ 
              delay: 21.0,
              duration: 2.5,
              ease: [0.16, 1, 0.3, 1],
              times: [0, 0.3, 0.7, 1]
            }}
            style={{
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Main Text - Mostly Cyan with Minute Purple and Magenta at End */}
                <motion.h1 
              className="futuristic-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-5 relative text-center"
              style={{
                letterSpacing: '0.1em',
                lineHeight: '1.2',
                filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 1)) drop-shadow(0 0 40px rgba(139, 92, 246, 0.8)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.9))'
              }}
              animate={{
                opacity: [1, 0.98, 1],
                filter: [
                  'drop-shadow(0 0 20px rgba(6, 182, 212, 1)) drop-shadow(0 0 40px rgba(139, 92, 246, 0.8)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.9))',
                  'drop-shadow(0 0 25px rgba(6, 182, 212, 1.2)) drop-shadow(0 0 50px rgba(139, 92, 246, 1)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.9))',
                  'drop-shadow(0 0 20px rgba(6, 182, 212, 1)) drop-shadow(0 0 40px rgba(139, 92, 246, 0.8)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.9))'
                ]
              }}
              transition={{
                filter: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                opacity: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <span style={{
                background: 'linear-gradient(90deg, #06b6d4 0%, #06b6d4 70%, #8b5cf6 85%, #a855f7 95%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>VANTAGE BRILLIANCE</span>
                </motion.h1>
            
            {/* Subtitle - Constrained Width, Nice Enclosure - MUST BE NARROWER THAN VANTAGE BRILLIANCE */}
            <motion.div
              className="mt-4 mx-auto"
              style={{
                maxWidth: '60%',
                width: 'fit-content'
              }}
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1
              }}
              transition={{ 
                delay: 19.5, 
                duration: 1.0
              }}
            >
              <div
                style={{
                  padding: '10px 16px',
                  background: 'rgba(6, 182, 212, 0.1)',
                  border: '1px solid rgba(6, 182, 212, 0.4)',
                  borderRadius: '6px',
                  backdropFilter: 'blur(4px)',
                  boxShadow: '0 0 15px rgba(6, 182, 212, 0.2), inset 0 0 10px rgba(6, 182, 212, 0.05)',
                  maxWidth: '100%'
                }}
              >
                <p 
                  className="text-center"
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '1.7',
                    color: '#a5f3fc',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
                    margin: 0,
                    maxWidth: '100%',
                    wordWrap: 'break-word'
                  }}
                >
                  I connect your data, uncover why, propose options, help you execute, and learn with you—<span style={{ fontWeight: '500', color: '#06b6d4', textShadow: '0 0 5px rgba(6, 182, 212, 0.7)' }}>so every decision gets easier.</span>
                </p>
          </div>
            </motion.div>
            </motion.div>
              </div>
              
        {/* Bottom-Center: CTA Panel */}
        <div key={`cta-${heroCycle}`} className="absolute bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 z-10 max-w-xs">
              <motion.div 
            key={`cta-motion-${heroCycle}`}
            initial={{ opacity: 0, y: 40, x: 30, scale: 0.85, rotate: 1 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, y: 40, x: 30, scale: 0.85, rotate: 1 }}
            transition={{ delay: 24.0, duration: 1.2, ease: "easeOut" }}
            className="space-y-3"
          >
            <div className="hud-border bg-black/40 backdrop-blur-sm rounded-lg px-3 py-3">
              <h3 className="futuristic-heading text-sm sm:text-base mb-2 text-cyan-300">Ready to Make Decisions Together?</h3>
                <Link 
                  to="/single-screen" 
                className="hud-border bg-gradient-to-r from-cyan-600/40 to-blue-600/40 hover:from-cyan-600/60 hover:to-blue-600/60 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center transition-all hover:neural-glow futuristic-subheading text-sm terminal-font"
                >
                Start Journey <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                </div>
              </motion.div>
        </div>
        
        {/* Bottom Gradient Fade Mask - Smooth Transition to Next Section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/90 to-transparent z-10 pointer-events-none" />
      </section>

      {/* Intelligence Modules - Tabbed Interface with Chat */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
        {/* Top Gradient Fade Mask */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none" />
        
        {/* Customer Intelligence Video Background - Unified Treatment */}
            <motion.div 
          className="absolute inset-0 opacity-25 overflow-hidden z-0"
                initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.25 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ amount: 0.2 }}
              >
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  muted 
                  loop
                  playsInline
            preload="auto"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              transform: 'translateZ(0)',
              filter: 'saturate(1.2) contrast(1.1)'
            }}
          >
            <source src="/Customer_Intelligence_Visualization_Generated.mp4" type="video/mp4" />
                </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
              </motion.div>

        {/* Neural Network Pattern - Connecting Element */}
        <motion.img
          src="/neuralnetworkpattern.png"
          alt="Neural Network"
          className="absolute top-0 left-0 w-full h-full opacity-[0.08] z-[1]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Bottom Gradient Fade Mask */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div 
            className="text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
            <h2 className="futuristic-heading text-xl lg:text-2xl mb-2">
              SIX <span className="neural-text">INTELLIGENCE MODULES</span>
                </h2>
            <p className="futuristic-body text-xs text-gray-300 max-w-2xl mx-auto">
              Comprehensive intelligence across every major business function.
            </p>
            </motion.div>

          {/* Tabbed Interface: Left Tabs + Right Chat */}
          <div className="grid lg:grid-cols-[300px_1fr] gap-5 min-h-[480px]">
            {/* Left Side: Module Tabs */}
            <div className="space-y-2.5">
              {intelligenceModules.map((module, index) => {
                const Icon = module.icon;
                const isSelected = selectedModule === module.id;
                const isAvailable = module.status === 'Available Now';
                
                return (
                  <motion.button
                    key={module.id}
                    onClick={() => setSelectedModule(module.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all backdrop-blur-md border ${
                      isSelected
                        ? 'bg-gradient-to-br from-cyan-500/20 via-blue-500/15 to-cyan-500/20 border-cyan-400/50 shadow-lg shadow-cyan-500/10'
                        : 'bg-black/50 border-cyan-500/10 hover:border-cyan-500/30 hover:bg-black/70'
                    } ${!isAvailable ? 'opacity-50' : ''}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.01, x: 3 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                        isSelected 
                          ? 'bg-gradient-to-br from-cyan-400/40 to-blue-500/40 shadow-md shadow-cyan-500/20' 
                          : 'bg-cyan-500/10'
                      }`}>
                        <Icon className={`h-5 w-5 ${isSelected ? 'text-cyan-300' : 'text-cyan-400/60'}`} />
              </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className={`futuristic-subheading text-sm font-semibold ${
                            isSelected ? 'text-cyan-100' : 'text-gray-300'
                          }`}>
                            {module.title}
                          </h3>
                          {isSelected && (
                            <motion.div
                              className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
                              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          )}
                        </div>
                        <p className="futuristic-body text-xs text-gray-400 line-clamp-2 leading-snug">
                          {module.description}
                        </p>
                        <span className={`inline-block mt-1.5 text-[10px] px-2 py-0.5 rounded-full futuristic-subheading ${
                          isAvailable 
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40' 
                            : 'bg-gray-500/20 text-gray-400 border border-gray-400/30'
                          }`}>
                            {module.status}
                          </span>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
              </div>

            {/* Right Side: Chat Interface */}
            <div className="relative">
              <ModuleChatDisplay moduleId={selectedModule} modules={intelligenceModules} />
            </div>
          </div>
        </div>
      </section>

      {/* How I Work With You - Unified Video Background */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden min-h-[1200px]">
        {/* Top Gradient Fade Mask */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none" />
        
        {/* Unified Video Background */}
            <motion.div 
          className="absolute inset-0 opacity-25 z-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.25 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ amount: 0.2 }}
        >
                <video 
            className="w-full h-full object-cover"
                  autoPlay 
                  muted 
                  loop
                  playsInline
                >
            <source src="/AI_Neural_Network_Visualization_Video.mp4" type="video/mp4" />
                </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
            </motion.div>

        {/* Neural Network Pattern - Connecting Element */}
        <motion.img
          src="/neuralnetworkpattern.png"
          alt="Neural Network"
          className="absolute top-0 left-0 w-full h-full opacity-[0.08] z-[1]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Floating Neural Network Images - Subtle Accents */}
        {[
          { x: '5%', y: '8%', rotate: true, moveY: true, delay: 0, duration: 15 },
          { x: '12%', y: '25%', rotate: false, moveX: true, delay: 1.2, duration: 18 },
          { x: '8%', y: '45%', rotate: true, moveY: false, delay: 2.5, duration: 16 },
          { x: '15%', y: '65%', rotate: false, moveX: true, delay: 0.8, duration: 20 },
          { x: '10%', y: '85%', rotate: true, moveY: true, delay: 1.5, duration: 17 },
          { x: '22%', y: '12%', rotate: true, moveY: true, delay: 2.2, duration: 19 },
          { x: '28%', y: '35%', rotate: false, moveX: false, delay: 0.5, duration: 14 },
          { x: '25%', y: '55%', rotate: true, moveY: true, delay: 1.8, duration: 21 },
          { x: '30%', y: '75%', rotate: false, moveX: true, delay: 2.8, duration: 16 },
          { x: '35%', y: '20%', rotate: true, moveY: false, delay: 0.3, duration: 18 },
          { x: '38%', y: '42%', rotate: false, moveY: true, delay: 1.3, duration: 15 },
          { x: '42%', y: '62%', rotate: true, moveX: true, delay: 2.1, duration: 19 },
          { x: '40%', y: '88%', rotate: false, moveY: true, delay: 0.7, duration: 17 },
          { x: '48%', y: '15%', rotate: true, moveY: true, delay: 1.9, duration: 20 },
          { x: '52%', y: '38%', rotate: false, moveX: false, delay: 2.4, duration: 16 },
          { x: '55%', y: '58%', rotate: true, moveY: true, delay: 0.6, duration: 18 },
          { x: '50%', y: '78%', rotate: false, moveX: true, delay: 1.4, duration: 15 },
          { x: '62%', y: '28%', rotate: true, moveY: false, delay: 2.7, duration: 19 },
          { x: '65%', y: '48%', rotate: false, moveY: true, delay: 0.9, duration: 17 },
          { x: '68%', y: '68%', rotate: true, moveX: true, delay: 1.7, duration: 21 },
          { x: '72%', y: '18%', rotate: false, moveY: true, delay: 2.3, duration: 16 },
          { x: '75%', y: '40%', rotate: true, moveX: false, delay: 0.4, duration: 18 },
          { x: '78%', y: '60%', rotate: false, moveY: true, delay: 1.6, duration: 20 },
          { x: '82%', y: '32%', rotate: true, moveX: true, delay: 2.6, duration: 15 },
          { x: '85%', y: '52%', rotate: false, moveY: false, delay: 0.2, duration: 19 },
          { x: '88%', y: '72%', rotate: true, moveY: true, delay: 1.1, duration: 17 },
          { x: '92%', y: '22%', rotate: false, moveX: true, delay: 2.9, duration: 16 },
          { x: '95%', y: '45%', rotate: true, moveY: true, delay: 0.8, duration: 18 },
          { x: '18%', y: '30%', rotate: false, moveX: true, delay: 1.2, duration: 20 },
          { x: '58%', y: '82%', rotate: true, moveY: false, delay: 2.0, duration: 15 },
          { x: '3%', y: '50%', rotate: true, moveY: true, delay: 1.1, duration: 16 },
          { x: '7%', y: '70%', rotate: false, moveX: true, delay: 2.3, duration: 18 },
          { x: '20%', y: '5%', rotate: true, moveY: false, delay: 0.7, duration: 19 },
          { x: '33%', y: '90%', rotate: false, moveY: true, delay: 1.8, duration: 17 },
          { x: '47%', y: '5%', rotate: true, moveX: true, delay: 2.5, duration: 15 },
          { x: '53%', y: '90%', rotate: false, moveY: true, delay: 0.4, duration: 20 },
          { x: '67%', y: '10%', rotate: true, moveX: false, delay: 1.6, duration: 18 },
          { x: '73%', y: '85%', rotate: false, moveY: true, delay: 2.8, duration: 16 },
          { x: '87%', y: '60%', rotate: true, moveX: true, delay: 0.9, duration: 19 },
          { x: '97%', y: '75%', rotate: false, moveY: false, delay: 1.4, duration: 17 }
        ].map((neural, index) => (
          <motion.img
            key={index}
            src="/neuralnetworkpattern.png"
            alt="Neural Network Galaxy"
            className="absolute w-20 h-20 opacity-12 z-[1] pointer-events-none"
            style={{
              left: neural.x,
              top: neural.y,
              objectFit: 'contain',
              filter: 'blur(0.5px) brightness(0.8)'
            }}
            animate={{
              rotate: neural.rotate ? [0, 360] : 0,
              y: neural.moveY ? [0, -20, 0] : 0,
              x: neural.moveX ? [0, 15, 0] : 0,
              scale: [0.95, 1.05, 0.95],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{
              rotate: neural.rotate ? { duration: neural.duration, repeat: Infinity, ease: 'linear' } : {},
              y: neural.moveY ? { duration: neural.duration, repeat: Infinity, ease: 'easeInOut', delay: neural.delay } : {},
              x: neural.moveX ? { duration: neural.duration, repeat: Infinity, ease: 'easeInOut', delay: neural.delay } : {},
              scale: { duration: neural.duration + 3, repeat: Infinity, ease: 'easeInOut', delay: neural.delay },
              opacity: { duration: neural.duration + 2, repeat: Infinity, ease: 'easeInOut', delay: neural.delay }
            }}
          />
        ))}
        
        {/* Bottom Gradient Fade Mask */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div 
            className="text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -5, 0]
              }}
              transition={{
                opacity: { duration: 0.8 },
                y: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
              }}
            >
            <h2 className="futuristic-heading text-4xl lg:text-5xl mb-3">
              HOW I <span className="neural-text">WORK WITH YOU</span>
                </h2>
            <p className="futuristic-body text-base text-gray-300 max-w-2xl mx-auto">
              Here's how I help you understand your organization and make better decisions.
            </p>
          </motion.div>

          {/* Falling Comet Animation - Diagonal Path */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-[2]" style={{ minHeight: '1300px' }}>
            {/* Static Diagonal Path */}
            <svg className="absolute inset-0 w-full h-full opacity-15" style={{ height: '100%' }}>
              <line
                x1="5%"
                y1="8%"
                x2="90%"
                y2="78%"
                stroke="url(#diagonalGradient)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <defs>
                <linearGradient id="diagonalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Animated Falling Comet */}
            <motion.div 
              className="absolute"
              style={{
                left: '5%',
                top: '8%',
                transform: 'translate(-50%, -50%)'
              }}
              animate={{
                left: ['5%', '90%'],
                top: ['8%', '78%']
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 2
              }}
            >
              {/* Comet Head - Elongated, Dimmed, Realistic Comet Shape */}
              <motion.div
                className="relative"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.7, 0.5],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                {/* Outer Glow - Dim Orange/Red */}
                <div className="absolute w-10 h-6 bg-gradient-to-br from-orange-500/30 via-red-500/40 to-orange-500/30 blur-lg opacity-40"
                  style={{
                    transform: 'translate(-50%, -50%) rotate(25deg)',
                    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
                  }}
                />
                
                {/* Middle Glow - Elongated */}
                <div className="absolute w-8 h-5 bg-gradient-to-br from-orange-400/40 via-red-500/50 to-orange-400/40 blur-md opacity-50"
                  style={{
                    transform: 'translate(-50%, -50%) rotate(25deg)',
                    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
                  }}
                />
                
                {/* Inner Core - Elongated Comet Shape (Not Perfect Circle) */}
                <div className="relative w-5 h-3 bg-gradient-to-br from-white/60 via-orange-300/70 to-blue-300/60"
                  style={{
                    transform: 'translate(-50%, -50%) rotate(25deg)',
                    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                    boxShadow: '0 0 8px rgba(255, 165, 0, 0.4), 0 0 15px rgba(255, 69, 0, 0.3), 0 0 25px rgba(59, 130, 246, 0.2)'
                  }}
                />
              </motion.div>
              
              {/* Comet Tail - Fire-like Trail Behind Comet (Multiple Layers) */}
              
              {/* Outer Fire Layer - Longest, Most Blurred, Dimmed */}
              <motion.div
                className="absolute top-1/2 left-1/2 pointer-events-none"
                style={{
                  width: '400px',
                  height: '20px',
                  background: 'linear-gradient(to right, transparent, rgba(255, 165, 0, 0.15), rgba(255, 69, 0, 0.2), rgba(255, 140, 0, 0.15), transparent)',
                  transform: 'translate(-50%, -50%) rotate(218deg)',
                  transformOrigin: 'right center',
                  filter: 'blur(8px)'
                }}
                animate={{
                  opacity: [0.15, 0.3, 0.15],
                  scaleX: [0.9, 1.2, 0.9],
                  width: ['350px', '450px', '350px']
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              
              {/* Middle Fire Layer - Medium Length, Dimmed */}
              <motion.div
                className="absolute top-1/2 left-1/2 pointer-events-none"
                style={{
                  width: '300px',
                  height: '12px',
                  background: 'linear-gradient(to right, transparent, rgba(255, 140, 0, 0.3), rgba(255, 69, 0, 0.35), rgba(255, 165, 0, 0.25), transparent)',
                  transform: 'translate(-50%, -50%) rotate(218deg)',
                  transformOrigin: 'right center',
                  filter: 'blur(5px)'
                }}
                animate={{
                  opacity: [0.25, 0.45, 0.25],
                  scaleX: [0.85, 1.25, 0.85],
                  width: ['250px', '350px', '250px']
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              
              {/* Inner Fire Layer - Shorter, Dimmed */}
              <motion.div
                className="absolute top-1/2 left-1/2 pointer-events-none"
                style={{
                  width: '200px',
                  height: '8px',
                  background: 'linear-gradient(to right, transparent, rgba(255, 215, 0, 0.4), rgba(255, 140, 0, 0.45), rgba(255, 69, 0, 0.4), rgba(255, 215, 0, 0.3), transparent)',
                  transform: 'translate(-50%, -50%) rotate(218deg)',
                  transformOrigin: 'right center',
                  filter: 'blur(3px)'
                }}
                animate={{
                  opacity: [0.35, 0.5, 0.35],
                  scaleX: [0.9, 1.3, 0.9],
                  width: ['180px', '250px', '180px']
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              
              {/* Core Tail - Dim Blue/White at Base */}
              <motion.div
                className="absolute top-1/2 left-1/2 pointer-events-none"
                style={{
                  width: '150px',
                  height: '4px',
                  background: 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.45), rgba(168, 85, 247, 0.4), rgba(255, 215, 0, 0.35), transparent)',
                  transform: 'translate(-50%, -50%) rotate(218deg)',
                  transformOrigin: 'right center',
                  filter: 'blur(2px)'
                }}
                animate={{
                  opacity: [0.4, 0.5, 0.4],
                  scaleX: [0.9, 1.2, 0.9],
                  width: ['130px', '180px', '130px']
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            </motion.div>
              </div>
              
          {/* Steps - Diagonal Layout from Top-Left to Bottom-Right */}
          <div className="relative w-full min-h-[1300px] pb-40">
              {[
                {
                  step: '01',
                  icon: Database,
                  title: 'I Ingest & Connect',
                  description: 'I continuously connect to 5000+ data sources across your business—CRM, analytics, financial systems, market signals, competitor intelligence. Everything syncs in real-time. No manual work needed.',
                  highlight: '5000+ data sources',
                  color: 'from-blue-500 to-cyan-500',
                  visual: 'connection'
                },
                {
                  step: '02',
                  icon: Brain,
                  title: 'I Perform Deep Causal Analysis',
                  description: 'I don\'t just show correlations. I identify WHY things happen. Root cause analysis across millions of data points. Pattern recognition that reveals hidden insights about your organization that you might not see.',
                  highlight: 'Root cause analysis',
                  color: 'from-purple-500 to-pink-500',
                  visual: 'analysis'
                },
                {
                  step: '03',
                  icon: Target,
                  title: 'We Make Decisions Together',
                  description: 'We collaborate on the Decision Canvas—strategic, tactical, or operational decisions. I bring deep analytical rigor. You bring judgment. Together, we test thousands of scenarios before you commit.',
                  highlight: 'Collaboration',
                  color: 'from-pink-500 to-red-500',
                  visual: 'collaboration'
                },
                {
                  step: '04',
                  icon: Sparkles,
                  title: 'We Learn From Every Decision',
                  description: 'Every decision we make together gets logged and tracked. I measure actual outcomes vs what we predicted. Your organization builds institutional memory. I learn what works for your business specifically.',
                  highlight: 'Institutional memory',
                  color: 'from-green-500 to-emerald-500',
                  visual: 'learning'
                }
              ].map((item, index) => {
                // Diagonal positions: top-left to bottom-right
                const positions = [
                  { left: '5%', top: '8%' },   // Step 1: Top-left
                  { left: '30%', top: '28%' },   // Step 2: Upper-middle
                  { left: '55%', top: '48%' },   // Step 3: Lower-middle
                  { left: '80%', top: '68%' }    // Step 4: Bottom-right (adjusted for visibility)
                ];
                const pos = positions[index];
                
                const stepContent = (
                  <>
                    {/* Step Content Container */}
                    <div className={`flex flex-col items-center text-center max-w-[280px] ${index <= 3 ? 'cursor-pointer' : ''}`}>
                      {/* Professional Visual Infographic */}
                      <motion.div
                        className="mb-4"
                        whileHover={{ scale: 1.1, y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="relative w-32 h-32">
                          {/* Blurred Background Border */}
                          <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-black/40 via-black/30 to-black/40 rounded-3xl border border-white/10 shadow-2xl" 
                            style={{ 
                              filter: 'blur(8px)',
                              transform: 'scale(1.15)'
                            }}
                          />
                          
                          {/* Main Image Container */}
                          <div className="relative w-full h-full backdrop-blur-md bg-black/20 rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
                            <img 
                              src={
                                item.visual === 'connection' ? '/ingest & connect.png' :
                                item.visual === 'analysis' ? '/causal analysis.png' :
                                item.visual === 'collaboration' ? '/make decisions together.png' :
                                '/learn from every decision.png'
                              }
                              alt={item.title}
                              className="w-full h-full object-contain p-2"
                              style={{ filter: 'brightness(1.15) contrast(1.1) saturate(1.2)' }}
                            />
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-15 rounded-3xl pointer-events-none`} />
                            <div className={`absolute -inset-2 bg-gradient-to-br ${item.color} opacity-20 rounded-3xl blur-xl -z-10`} />
                  </div>
                  
                          {/* Step Number Badge */}
                          <div className="absolute -top-2 -right-2 w-10 h-10 bg-black/80 backdrop-blur-lg rounded-full flex items-center justify-center shadow-xl border-2 border-white/30 z-20">
                            <span className="text-white font-bold text-xs">{item.step}</span>
                          </div>
                          
                          {/* Pulsing Glow */}
                          <motion.div 
                            className={`absolute -inset-4 bg-gradient-to-br ${item.color} rounded-3xl opacity-0 blur-2xl`}
                            animate={{ 
                              opacity: [0, 0.2, 0],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{ 
                              duration: 4, 
                              repeat: Infinity, 
                              ease: "easeInOut" 
                            }}
                          />
                        </div>
                  </motion.div>
                      
                      {/* Text Content */}
                      <div className="space-y-2">
                        <h3 className="futuristic-subheading text-lg text-white mb-1">
                          {item.title}
                          </h3>
                        <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-2">
                          <span className="text-xs text-blue-300 font-semibold">{item.highlight}</span>
                        </div>
                        <p className="futuristic-body text-xs text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Timeline Dot */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-2 border-black shadow-xl z-10" />
              </div>
                  </>
                );

                // Make Step 1 and Step 2 clickable
                if (index === 0) {
                  return (
                    <Link 
                      key={item.step} 
                      to="/data-ingestion" 
                      className="absolute z-10"
                      style={{
                        left: pos.left,
                        top: pos.top,
                        transform: 'translate(-50%, -50%)',
                        textDecoration: 'none'
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -50, y: -50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}
                        animate={{
                          y: [0, -5, 0]
                        }}
                        transition={{
                          opacity: { duration: 0.8, delay: index * 0.2 },
                          scale: { duration: 0.8, delay: index * 0.2 },
                          x: { duration: 0.8, delay: index * 0.2 },
                          y: { duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }
                        }}
                      >
                        {stepContent}
                      </motion.div>
                    </Link>
                  );
                }

                if (index === 1) {
                  return (
                    <Link 
                      key={item.step} 
                      to="/causal-intelligence" 
                      className="absolute z-10"
                      style={{
                        left: pos.left,
                        top: pos.top,
                        transform: 'translate(-50%, -50%)',
                        textDecoration: 'none'
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -50, y: -50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}
                        animate={{
                          y: [0, -5, 0]
                        }}
                        transition={{
                          opacity: { duration: 0.8, delay: index * 0.2 },
                          scale: { duration: 0.8, delay: index * 0.2 },
                          x: { duration: 0.8, delay: index * 0.2 },
                          y: { duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }
                        }}
                      >
                        {stepContent}
                      </motion.div>
                    </Link>
                  );
                }

                if (index === 2) {
                  return (
                    <Link 
                      key={item.step} 
                      to="/decision-canvas-detail" 
                      className="absolute z-10"
                      style={{
                        left: pos.left,
                        top: pos.top,
                        transform: 'translate(-50%, -50%)',
                        textDecoration: 'none'
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -50, y: -50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}
                        animate={{
                          y: [0, -5, 0]
                        }}
                        transition={{
                          opacity: { duration: 0.8, delay: index * 0.2 },
                          scale: { duration: 0.8, delay: index * 0.2 },
                          x: { duration: 0.8, delay: index * 0.2 },
                          y: { duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }
                        }}
                      >
                        {stepContent}
                      </motion.div>
                    </Link>
                  );
                }

                if (index === 3) {
                  return (
                    <Link 
                      key={item.step} 
                      to="/decision-tracking" 
                      className="absolute z-10"
                      style={{
                        left: pos.left,
                        top: pos.top,
                        transform: 'translate(-50%, -50%)',
                        textDecoration: 'none'
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -50, y: -50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}
                        animate={{
                          y: [0, -5, 0]
                        }}
                        transition={{
                          opacity: { duration: 0.8, delay: index * 0.2 },
                          scale: { duration: 0.8, delay: index * 0.2 },
                          x: { duration: 0.8, delay: index * 0.2 },
                          y: { duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }
                        }}
                      >
                        {stepContent}
                      </motion.div>
                    </Link>
                  );
                }

                return (
                  <motion.div 
                    key={item.step}
                    className="absolute z-10"
                    style={{
                      left: pos.left,
                      top: pos.top,
                      transform: 'translate(-50%, -50%)'
                    }}
                    initial={{ opacity: 0, scale: 0.8, x: -50, y: -50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    animate={{
                      y: [0, -5, 0]
                    }}
                    transition={{
                      opacity: { duration: 0.8, delay: index * 0.2 },
                      scale: { duration: 0.8, delay: index * 0.2 },
                      x: { duration: 0.8, delay: index * 0.2 },
                      y: { duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }
                    }}
                  >
                    {stepContent}
                  </motion.div>
                );
              })}
          </div>
          
          {/* CTA to Demo Page */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/demo"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600/40 to-blue-600/40 hover:from-cyan-600/60 hover:to-blue-600/60 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:neural-glow futuristic-subheading border border-cyan-500/50"
            >
              See Full Product Flow
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - AI Video */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Full Screen Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop
            playsInline
          >
            <source src="/hero-intelligence-lab.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        {/* Floating Causal Analysis Image - Seamlessly Blended */}
        <motion.img
          src="/causalanalysisvisualization.png"
          alt="Causal Analysis"
          className="absolute top-20 left-10 w-40 h-40 opacity-15 mix-blend-screen image-float"
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          style={{ filter: 'blur(0.5px)' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="futuristic-heading text-4xl lg:text-5xl">
              READY TO MAKE YOUR ORGANIZATION<br />
              <span className="neural-text">INTELLIGENT?</span>
            </h2>
            <p className="futuristic-body text-xl text-gray-300 leading-relaxed">
              I'm here to help you understand your organization better. To reveal why things happen. To help you make confident decisions—strategic, tactical, operational. Across all six intelligence modules. Let's start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link 
                to="/single-screen" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold flex items-center justify-center transition-all hover:neural-glow futuristic-subheading"
              >
                Start a Conversation
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-10 py-4 rounded-lg font-semibold transition-all futuristic-subheading"
              >
                See How I Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="futuristic-heading text-lg mb-4">VANTAGE BRILLIANCE</div>
              <p className="futuristic-body text-gray-400 text-sm">Illuminate decisions with human-AI collaboration.</p>
            </div>
            <div>
              <h3 className="futuristic-subheading mb-4 text-sm">Product</h3>
              <div className="space-y-2 text-gray-400 futuristic-body text-sm">
                <Link to="/single-screen" className="block hover:text-blue-400 transition-colors">Live Demo</Link>
                <Link to="/pricing" className="block hover:text-blue-400 transition-colors">Pricing</Link>
              </div>
            </div>
            <div>
              <h3 className="futuristic-subheading mb-4 text-sm">Company</h3>
              <div className="space-y-2 text-gray-400 futuristic-body text-sm">
                <Link to="/about" className="block hover:text-blue-400 transition-colors">About</Link>
                <Link to="/contact" className="block hover:text-blue-400 transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="futuristic-subheading mb-4 text-sm">Resources</h3>
              <div className="space-y-2 text-gray-400 futuristic-body text-sm">
                <Link to="/single-screen" className="block hover:text-blue-400 transition-colors">Get Started</Link>
                <Link to="/contact" className="block hover:text-blue-400 transition-colors">Support</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800/50 mt-8 pt-8 text-center text-gray-400 futuristic-body text-sm">
            <p>&copy; 2025 Vantage Brilliance. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Use Case Modal */}
      <AnimatePresence>
        {selectedUseCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedUseCase(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-gray-900/98 backdrop-blur-lg rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Chat Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                <div className="flex items-center space-x-4">
                  {(() => {
                    const Icon = selectedUseCase.icon;
                    return (
                      <div className="bg-blue-500/20 rounded-xl p-3">
                        <Icon className="h-6 w-6 text-blue-400" />
                      </div>
                    );
                  })()}
                  <div>
                    <h3 className="futuristic-heading text-xl">{selectedUseCase.title}</h3>
                    <p className="futuristic-body text-gray-400 text-sm">{selectedUseCase.leader}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedUseCase(null)}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Chat Messages Container */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-gray-900/50 to-black">
                {chatMessages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`flex ${msg.type === 'leader' ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`flex items-start space-x-3 max-w-[80%] ${msg.type === 'leader' ? 'flex-row' : 'flex-row-reverse'}`}>
                      {/* Avatar */}
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                        msg.type === 'leader' 
                          ? 'bg-orange-500/20' 
                          : msg.type === 'vantage'
                          ? 'bg-blue-500/20'
                          : 'bg-green-500/20'
                      }`}>
                        {msg.type === 'leader' ? (
                          <Users className="h-5 w-5 text-orange-400" />
                        ) : msg.type === 'vantage' ? (
                          <Bot className="h-5 w-5 text-blue-400" />
                        ) : (
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        )}
                      </div>
                      
                      {/* Message Bubble */}
                      <div className={`rounded-2xl p-4 ${
                        msg.type === 'leader'
                          ? 'bg-white/10 border border-orange-500/20'
                          : msg.type === 'vantage'
                          ? 'bg-blue-500/20 border border-blue-500/30'
                          : 'bg-green-500/20 border border-green-500/30'
                      }`}>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`futuristic-subheading text-xs ${
                            msg.type === 'leader' ? 'text-orange-400' : msg.type === 'vantage' ? 'text-blue-400' : 'text-green-400'
                          }`}>
                            {msg.sender}
                          </span>
                          <span className="text-gray-500 text-xs">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                        <p className={`futuristic-body leading-relaxed whitespace-pre-line ${
                          msg.type === 'leader' ? 'text-gray-200' : 'text-gray-100'
                        }`}>
                          {msg.text}
                        </p>
                        {msg.metrics && (
                          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                            {msg.metrics.map((metric, i) => (
                              <span key={i} className="futuristic-subheading text-xs px-3 py-1 rounded-full bg-white/10 text-blue-400">
                                {metric}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-end"
                  >
                    <div className="flex items-center space-x-2 bg-blue-500/20 rounded-2xl p-4 border border-blue-500/30">
                      <div className="flex space-x-1">
                        <motion.div
                          className="w-2 h-2 bg-blue-400 rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-blue-400 rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-blue-400 rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                      <span className="futuristic-body text-xs text-gray-400 ml-2">Vantage Brilliance is typing...</span>
                    </div>
                  </motion.div>
                )}
                
                <div ref={chatEndRef} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Homepage;
