import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Brain, Target, Sparkles } from 'lucide-react';
import NavBar from './NavBar';

const Demo = () => {

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-black to-black z-0" />
        <motion.div
          className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 futuristic-heading">
            See How <span style={{
              background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 30%, #8b5cf6 70%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>It Works</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
            Experience the complete Decision Intelligence journey—from data connection to continuous learning.
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Explore each feature below to understand how Vantage Brilliance transforms your organization's decision-making.
          </p>
        </motion.div>
      </section>

      {/* Step 1: Data Ingestion & Connection */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
        {/* Top Gradient Fade Mask */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none" />
        
        {/* Data Ingestion Video Background */}
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
            <source src="/Data_Ingestion_Connection_Video_Generation.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </motion.div>
        
        {/* Neural Network Pattern */}
        <motion.img
          src="/neuralnetworkpattern.png"
          alt="Neural Network"
          className="absolute top-0 left-0 w-full h-full opacity-[0.08] z-[1]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Bottom Gradient Fade Mask */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h2 className="futuristic-heading text-3xl lg:text-4xl">
                Step 1: I Ingest & <span className="neural-text">Connect</span>
              </h2>
            </div>
            
            <p className="futuristic-body text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
              The foundation of intelligence is comprehensive, real-time data. I continuously connect to 5000+ data sources across your business—CRM, analytics, financial systems, market signals, competitor intelligence.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/5 rounded-xl p-6 border border-cyan-500/20">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mb-3" />
                <h3 className="futuristic-subheading text-gray-200 mb-2">5000+ Data Sources</h3>
                <p className="futuristic-body text-sm text-gray-400">Connect to CRM, analytics, financial systems, market signals, competitor intelligence</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-cyan-500/20">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mb-3" />
                <h3 className="futuristic-subheading text-gray-200 mb-2">Real-Time Sync</h3>
                <p className="futuristic-body text-sm text-gray-400">Everything syncs automatically, no manual work needed</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-cyan-500/20">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mb-3" />
                <h3 className="futuristic-subheading text-gray-200 mb-2">Unified Data Layer</h3>
                <p className="futuristic-body text-sm text-gray-400">All your data becomes one intelligent system</p>
              </div>
            </div>
                  
            <p className="futuristic-body text-base text-gray-400 pt-4 text-center max-w-2xl mx-auto mb-8">
              Without comprehensive data, you can't see the full picture. I connect everything so you can understand how every part of your organization interacts.
            </p>

            <div className="text-center">
              <Link
                to="/data-ingestion"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600/40 to-blue-600/40 hover:from-cyan-600/60 hover:to-blue-600/60 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:neural-glow futuristic-subheading border border-cyan-500/50"
              >
                Explore Data Ingestion in Detail
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Step 2: Causal Intelligence */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
        {/* Top Gradient Fade Mask */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none" />
        
        {/* Causal Intelligence Video Background */}
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
            <source src="/Causal_Intelligence_Video_Generation.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </motion.div>
        
        {/* Neural Network Pattern */}
        <motion.img
          src="/neuralnetworkpattern.png"
          alt="Neural Network"
          className="absolute top-0 left-0 w-full h-full opacity-[0.08] z-[1]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Bottom Gradient Fade Mask */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/causal-intelligence" className="block">
              <div className="flex items-center justify-center space-x-3 mb-6 cursor-pointer hover:opacity-80 transition-opacity">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h2 className="futuristic-heading text-3xl lg:text-4xl">
                  Step 2: I Perform Deep <span className="neural-text">Causal Analysis</span>
                </h2>
              </div>
            </Link>
                  
            <p className="futuristic-body text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
              I don't just show correlations. I identify WHY things happen. I analyze millions of data points across your organization to identify true causal relationships. Not correlations—actual causes.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/5 rounded-xl p-6 border border-purple-500/20">
                <div className="w-2 h-2 bg-purple-400 rounded-full mb-3" />
                <h3 className="futuristic-subheading text-gray-200 mb-2">Root Cause vs Correlation</h3>
                <p className="futuristic-body text-sm text-gray-400">Correlation shows what happened together. Causal analysis reveals WHY one thing causes another.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-purple-500/20">
                <div className="w-2 h-2 bg-purple-400 rounded-full mb-3" />
                <h3 className="futuristic-subheading text-gray-200 mb-2">Pattern Recognition</h3>
                <p className="futuristic-body text-sm text-gray-400">Across millions of data points, I discover hidden insights and organizational misalignments</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-purple-500/20">
                <div className="w-2 h-2 bg-purple-400 rounded-full mb-3" />
                <h3 className="futuristic-subheading text-gray-200 mb-2">The Deeper Issue</h3>
                <p className="futuristic-body text-sm text-gray-400">I find systemic problems, not just surface symptoms. I help you fix root issues.</p>
              </div>
            </div>
            
            <p className="futuristic-body text-base text-gray-400 pt-4 text-center max-w-2xl mx-auto">
              Without understanding WHY, you're treating symptoms, not causes. I help you fix the root issues.
            </p>
            
            <div className="pt-6 text-center">
              <Link
                to="/causal-intelligence"
                className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors futuristic-subheading border border-purple-500/50 hover:border-purple-500/70 px-6 py-3 rounded-lg"
              >
                Explore Causal Intelligence in Detail
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Step 3: Decision Canvas */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
        {/* Top Gradient Fade Mask */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none" />
        
        {/* Consulting Video Background */}
        <motion.div 
          className="absolute inset-0 opacity-10 z-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
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
            <source src="/consulting-transformation.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30" />
        </motion.div>

        {/* Neural Network Pattern */}
        <motion.img
          src="/neuralnetworkpattern.png"
          alt="Neural Network"
          className="absolute top-0 left-0 w-full h-full opacity-[0.08] z-[1]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Bottom Gradient Fade Mask */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/decision-canvas-detail" className="block">
              <div className="flex items-center justify-center space-x-3 mb-6 cursor-pointer hover:opacity-80 transition-opacity">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="futuristic-heading text-3xl lg:text-4xl">
                  Step 3: We Make Decisions <span className="neural-text">Together</span>
                </h2>
              </div>
            </Link>
              
            <p className="futuristic-body text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
              This is where we collaborate. My causal intelligence meets your judgment. Together, we explore options, test scenarios, and make decisions with confidence.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/5 rounded-xl p-6 border border-blue-500/20">
                <div className="w-2 h-2 bg-blue-400 rounded-full mb-3" />
                <h3 className="futuristic-subheading text-gray-200 mb-2">Strategic Decisions</h3>
                <p className="futuristic-body text-sm text-gray-400">Long-term planning, M&A, transformation</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-blue-500/20">
                <div className="w-2 h-2 bg-blue-400 rounded-full mb-3" />
                <h3 className="futuristic-subheading text-gray-200 mb-2">Tactical Decisions</h3>
                <p className="futuristic-body text-sm text-gray-400">Resource allocation, pricing, campaigns</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-blue-500/20">
                <div className="w-2 h-2 bg-blue-400 rounded-full mb-3" />
                <h3 className="futuristic-subheading text-gray-200 mb-2">Operational Decisions</h3>
                <p className="futuristic-body text-sm text-gray-400">Day-to-day, real-time adjustments</p>
              </div>
            </div>
            
            <div className="pt-6 text-center">
              <Link
                to="/decision-canvas-detail"
                className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors futuristic-subheading border border-blue-500/50 hover:border-blue-500/70 px-6 py-3 rounded-lg"
              >
                Explore Decision Canvas in Detail
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Step 4: Decision Tracking & Learning Loop */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
        {/* Top Gradient Fade Mask */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none" />
        
        {/* Decision Tracking Video Background */}
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
            <source src="/Video_Generation_Decision_Tracking_Loop.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </motion.div>

        {/* Neural Network Pattern */}
        <motion.img
          src="/neuralnetworkpattern.png"
          alt="Neural Network"
          className="absolute top-0 left-0 w-full h-full opacity-[0.08] z-[1]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />

        {/* Bottom Gradient Fade Mask */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/decision-tracking" className="block">
              <div className="flex items-center justify-center space-x-3 mb-6 cursor-pointer hover:opacity-80 transition-opacity">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h2 className="futuristic-heading text-3xl lg:text-4xl">
                  Step 4: We Learn From Every <span className="neural-text">Decision</span>
                </h2>
              </div>
            </Link>
                
            <p className="futuristic-body text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
              Every decision becomes part of your organization's intelligence. I track outcomes, measure actual results vs predictions, and build institutional memory. Your organization gets smarter over time.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/5 rounded-xl p-6 border border-green-500/20">
                <div className="w-2 h-2 bg-green-400 rounded-full mb-3" />
                <h3 className="futuristic-subheading text-gray-200 mb-2">Track Outcomes</h3>
                <p className="futuristic-body text-sm text-gray-400">Every decision is logged with predicted vs. actual outcomes. See what worked, what didn't, and why.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-green-500/20">
                <div className="w-2 h-2 bg-green-400 rounded-full mb-3" />
                <h3 className="futuristic-subheading text-gray-200 mb-2">Institutional Memory</h3>
                <p className="futuristic-body text-sm text-gray-400">Your organization's decision history becomes intelligence. Patterns emerge. Context builds. You get smarter over time.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-green-500/20">
                <div className="w-2 h-2 bg-green-400 rounded-full mb-3" />
                <h3 className="futuristic-subheading text-gray-200 mb-2">Continuous Learning</h3>
                <p className="futuristic-body text-sm text-gray-400">I learn what works for your business specifically. Every decision improves future recommendations. Your competitive advantage grows.</p>
              </div>
            </div>
            
            <div className="pt-6 text-center">
              <Link
                to="/decision-tracking"
                className="inline-flex items-center gap-2 text-green-300 hover:text-green-200 transition-colors futuristic-subheading border border-green-500/50 hover:border-green-500/70 px-6 py-3 rounded-lg"
              >
                Explore Decision Tracking in Detail
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
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
              Ready to Transform Your <span style={{
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 30%, #8b5cf6 70%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Decision-Making?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From $500K consulting projects to $5K intelligent systems. 
              Experience the future of organizational intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600/40 to-blue-600/40 hover:from-cyan-600/60 hover:to-blue-600/60 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:neural-glow futuristic-subheading border border-cyan-500/50"
              >
                Schedule a Demo
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all futuristic-subheading"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Demo;

