import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Target, Zap, Shield, Users, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-sm border-b border-blue-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="neural-text text-xl font-bold">DecisionIntelligence OS</Link>
              <nav className="hidden md:flex space-x-6">
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</Link>
                <Link to="/dashboard" className="text-gray-300 hover:text-blue-400 transition-colors">Dashboard</Link>
                <Link to="/about" className="text-blue-400 border-b-2 border-blue-400 pb-1">About</Link>
                <Link to="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</Link>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-6">
            About <span className="neural-text">DecisionIntelligence OS</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We're building the world's first Decision Intelligence OS that combines causal AI, 
            machine learning, and human expertise to deliver unprecedented organizational intelligence.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              To democratize strategic intelligence by transforming what used to require $500K 
              consulting projects and 12 weeks of analysis into an always-on intelligent system 
              for $5K-$15K/month.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We believe the future belongs to organizations where humans and AI work together, 
              not organizations where AI replaces human judgment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Making McKinsey-grade decision-making accessible to every organization. We're 
              building a platform that makes humans smarter, more structured in their thinking, 
              and continuously learning from every decision.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Every decision becomes a learning opportunity, building institutional intelligence over time.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="neural-border rounded-xl p-6 text-center">
              <div className="neural-border rounded-lg p-4 w-fit mx-auto mb-4">
                <Brain className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Causal Intelligence</h3>
              <p className="text-gray-400 text-sm">
                Understand WHY things happen, not just THAT they happen. Advanced causal inference 
                using DoWhy, CausalNex, and PyWhy.
              </p>
            </div>

            <div className="neural-border rounded-xl p-6 text-center">
              <div className="neural-border rounded-lg p-4 w-fit mx-auto mb-4">
                <Target className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Consulting Frameworks</h3>
              <p className="text-gray-400 text-sm">
                McKinsey 7S, BCG Matrix, Porter's 5 Forces - all automated and continuously learning 
                from your organization's decisions.
              </p>
            </div>

            <div className="neural-border rounded-xl p-6 text-center">
              <div className="neural-border rounded-lg p-4 w-fit mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Decision Memory</h3>
              <p className="text-gray-400 text-sm">
                Learn from every decision to build institutional knowledge. Your organization gets 
                smarter with every choice made.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6">Ready to Transform Your Decision-Making?</h2>
          <p className="text-gray-300 mb-8">
            Join the revolution in organizational intelligence. From $500K consulting projects 
            to $5K intelligent systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/dashboard" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:neural-glow"
            >
              Start Your Free Analysis
            </Link>
            <Link 
              to="/contact" 
              className="border border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;



