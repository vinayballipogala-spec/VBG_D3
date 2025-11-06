import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
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
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About</Link>
                <Link to="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</Link>
                <Link to="/contact" className="text-blue-400 border-b-2 border-blue-400 pb-1">Contact</Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-6">
            Get in <span className="neural-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Ready to transform your decision-making? Let's discuss how DecisionIntelligence OS 
            can revolutionize your organization's intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="neural-border rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows={6}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    placeholder="Tell us about your organization and how we can help..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all hover:neural-glow flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="neural-border rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="neural-border rounded-lg p-3">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">hello@decisionintelligence.ai</p>
                    <p className="text-gray-400">support@decisionintelligence.ai</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="neural-border rounded-lg p-3">
                    <Phone className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-400">Mon-Fri 9AM-6PM PST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="neural-border rounded-lg p-3">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office</h3>
                    <p className="text-gray-400">123 Innovation Drive</p>
                    <p className="text-gray-400">San Francisco, CA 94105</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="neural-border rounded-lg p-3">
                    <MessageCircle className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Live Chat</h3>
                    <p className="text-gray-400">Available 24/7</p>
                    <p className="text-gray-400">Get instant support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="neural-border rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
              <div className="space-y-4">
                <Link 
                  to="/dashboard" 
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all hover:neural-glow text-center"
                >
                  Start Free Analysis
                </Link>
                <Link 
                  to="/pricing" 
                  className="block w-full border border-blue-500 text-blue-400 hover:bg-blue-500/10 py-3 rounded-lg font-semibold transition-all text-center"
                >
                  View Pricing Plans
                </Link>
              </div>
            </div>

            <div className="neural-border rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Response Times</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Email Support</span>
                  <span className="text-blue-400 font-medium">&lt; 2 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Phone Support</span>
                  <span className="text-blue-400 font-medium">Immediate</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Live Chat</span>
                  <span className="text-blue-400 font-medium">&lt; 30 seconds</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Sales Inquiry</span>
                  <span className="text-blue-400 font-medium">&lt; 1 hour</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
