import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const NavBar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-cyan-500/20" style={{
      boxShadow: '0 2px 20px rgba(6, 182, 212, 0.1), inset 0 1px 0 rgba(6, 182, 212, 0.05)'
    }}>
      {/* Scan Line Effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
        animate={{
          x: ['-100%', '200%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section - Futuristic */}
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.img 
                src="/vantage-brilliance.svg" 
                alt="Vantage Brilliance" 
                className="h-7 w-7 mr-2"
                animate={{
                  filter: [
                    'drop-shadow(0 0 5px rgba(6, 182, 212, 0.8))',
                    'drop-shadow(0 0 10px rgba(6, 182, 212, 1))',
                    'drop-shadow(0 0 5px rgba(6, 182, 212, 0.8))'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div 
                className="futuristic-heading text-sm sm:text-base"
                style={{
                  background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 30%, #8b5cf6 70%, #a855f7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
                  letterSpacing: '0.1em'
                }}
              >
                VB
              </div>
            </motion.div>
          </Link>

          {/* Navigation Links - Terminal Style - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/about" 
              className="terminal-font text-xs text-cyan-300 hover:text-cyan-200 transition-all relative group"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '0.05em',
                color: location.pathname === '/about' ? '#06b6d4' : '#06b6d4'
              }}
            >
              <span className="relative z-10">[ABOUT]</span>
              <motion.div
                className="absolute -bottom-1 left-0 h-[1px] bg-cyan-400"
                initial={{ width: location.pathname === '/about' ? '100%' : 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
                style={{
                  boxShadow: '0 0 5px rgba(6, 182, 212, 0.8)'
                }}
              />
            </Link>
            <Link 
              to="/pricing" 
              className="terminal-font text-xs text-cyan-300 hover:text-cyan-200 transition-all relative group"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '0.05em',
                color: location.pathname === '/pricing' ? '#06b6d4' : '#06b6d4'
              }}
            >
              <span className="relative z-10">[PRICING]</span>
              <motion.div
                className="absolute -bottom-1 left-0 h-[1px] bg-cyan-400"
                initial={{ width: location.pathname === '/pricing' ? '100%' : 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
                style={{
                  boxShadow: '0 0 5px rgba(6, 182, 212, 0.8)'
                }}
              />
            </Link>
            <Link 
              to="/contact" 
              className="terminal-font text-xs text-cyan-300 hover:text-cyan-200 transition-all relative group"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '0.05em',
                color: location.pathname === '/contact' ? '#06b6d4' : '#06b6d4'
              }}
            >
              <span className="relative z-10">[CONTACT]</span>
              <motion.div
                className="absolute -bottom-1 left-0 h-[1px] bg-cyan-400"
                initial={{ width: location.pathname === '/contact' ? '100%' : 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
                style={{
                  boxShadow: '0 0 5px rgba(6, 182, 212, 0.8)'
                }}
              />
            </Link>
            <Link 
              to="/demo" 
              className="terminal-font text-xs text-cyan-300 hover:text-cyan-200 transition-all relative group"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '0.05em',
                color: location.pathname === '/demo' ? '#06b6d4' : '#06b6d4'
              }}
            >
              <span className="relative z-10">[DEMO]</span>
              <motion.div
                className="absolute -bottom-1 left-0 h-[1px] bg-cyan-400"
                initial={{ width: location.pathname === '/demo' ? '100%' : 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
                style={{
                  boxShadow: '0 0 5px rgba(6, 182, 212, 0.8)'
                }}
              />
            </Link>
            <Link 
              to="/prototype" 
              className="terminal-font text-xs text-cyan-300 hover:text-cyan-200 transition-all relative group"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '0.05em',
                color: location.pathname === '/prototype' ? '#06b6d4' : '#06b6d4'
              }}
            >
              <span className="relative z-10">[PROTOTYPE]</span>
              <motion.div
                className="absolute -bottom-1 left-0 h-[1px] bg-cyan-400"
                initial={{ width: location.pathname === '/prototype' ? '100%' : 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
                style={{
                  boxShadow: '0 0 5px rgba(6, 182, 212, 0.8)'
                }}
              />
            </Link>
            <Link 
              to="/pitch-deck" 
              className="terminal-font text-xs text-purple-300 hover:text-purple-200 transition-all relative group"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '0.05em',
                color: location.pathname === '/pitch-deck' ? '#a855f7' : '#a855f7'
              }}
            >
              <span className="relative z-10">[PITCH DECK]</span>
              <motion.div
                className="absolute -bottom-1 left-0 h-[1px] bg-purple-400"
                initial={{ width: location.pathname === '/pitch-deck' ? '100%' : 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
                style={{
                  boxShadow: '0 0 5px rgba(168, 85, 247, 0.8)'
                }}
              />
            </Link>
          </div>

          {/* CTA Button & Mobile Menu - HUD Style */}
          <div className="flex items-center space-x-4">
            {/* CTA Button - Desktop */}
            <Link 
              to="/demo" 
              className="hidden sm:block relative overflow-hidden px-4 sm:px-5 py-2 rounded border border-cyan-500/50 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 hover:from-cyan-600/40 hover:to-blue-600/40 text-cyan-200 transition-all group"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '10px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                boxShadow: '0 0 15px rgba(6, 182, 212, 0.3), inset 0 0 10px rgba(6, 182, 212, 0.1)'
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                START
                <motion.span
                  animate={{
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity
                  }}
                >
                  {'>'}
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0"
                animate={{
                  x: ['-100%', '200%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded border border-cyan-500/30 bg-cyan-600/10 hover:bg-cyan-600/20 transition-all"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                <motion.span
                  className="w-full h-[2px] bg-cyan-400 rounded"
                  animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-[2px] bg-cyan-400 rounded"
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-[2px] bg-cyan-400 rounded"
                  animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-cyan-500/20 bg-black/40 backdrop-blur-md"
            >
              <div className="py-4 space-y-2">
                <Link
                  to="/demo"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 terminal-font text-sm text-cyan-300 hover:text-cyan-200 hover:bg-cyan-500/10 transition-all"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: location.pathname === '/demo' ? '#06b6d4' : '#06b6d4'
                  }}
                >
                  [DEMO]
                </Link>
                <Link
                  to="/prototype"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 terminal-font text-sm text-cyan-300 hover:text-cyan-200 hover:bg-cyan-500/10 transition-all"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: location.pathname === '/prototype' ? '#06b6d4' : '#06b6d4'
                  }}
                >
                  [PROTOTYPE]
                </Link>
                <Link
                  to="/pitch-deck"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 terminal-font text-sm text-purple-300 hover:text-purple-200 hover:bg-purple-500/10 transition-all"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: location.pathname === '/pitch-deck' ? '#a855f7' : '#a855f7'
                  }}
                >
                  [PITCH DECK]
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 terminal-font text-sm text-cyan-300 hover:text-cyan-200 hover:bg-cyan-500/10 transition-all"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: location.pathname === '/about' ? '#06b6d4' : '#06b6d4'
                  }}
                >
                  [ABOUT]
                </Link>
                <Link
                  to="/pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 terminal-font text-sm text-cyan-300 hover:text-cyan-200 hover:bg-cyan-500/10 transition-all"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: location.pathname === '/pricing' ? '#06b6d4' : '#06b6d4'
                  }}
                >
                  [PRICING]
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 terminal-font text-sm text-cyan-300 hover:text-cyan-200 hover:bg-cyan-500/10 transition-all"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: location.pathname === '/contact' ? '#06b6d4' : '#06b6d4'
                  }}
                >
                  [CONTACT]
                </Link>
                <Link
                  to="/demo"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block mx-4 mt-4 px-4 py-2 rounded border border-cyan-500/50 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 text-cyan-200 text-center transition-all"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: '11px',
                    fontWeight: '600',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}
                >
                  START {'>'}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavBar;

