import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, ShieldCheck } from 'lucide-react';
import supabase from '../supabaseClient';

const localStorageKey = (context) => `vb-gate:${context}`;

const fieldClasses = 'w-full bg-gray-900/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400';

const Gate = ({ context = 'prototype', children }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [allowed, setAllowed] = useState(false);

  const key = useMemo(() => localStorageKey(context), [context]);

  useEffect(() => {
    const flag = localStorage.getItem(key);
    if (flag === 'granted') {
      setAllowed(true);
    }
  }, [key]);

  const validate = () => {
    if (!email.trim()) return 'Email is required';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) return 'Enter a valid email';
    if (!phone.trim()) return 'Mobile number is required';
    if (!/^[0-9+()\-.\s]{7,20}$/.test(phone.trim())) return 'Enter a valid mobile number';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const msg = validate();
    if (msg) {
      setError(msg);
      return;
    }
    setError('');
    setSubmitting(true);
    try {
      if (supabase) {
        await supabase.from('leads').insert({
          email: email.trim(),
          phone: phone.trim(),
          context,
          path: window.location.pathname,
        });
      }
      localStorage.setItem(key, 'granted');
      setAllowed(true);
    } catch (err) {
      console.error('Gate submit failed', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (allowed) {
    return children;
  }

  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md px-4">
      <div className="max-w-xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="neural-border rounded-2xl p-8 bg-black/60"
        >
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="h-6 w-6 text-cyan-400" />
            <div>
              <p className="text-sm text-cyan-300 tracking-widest uppercase">Secure Access</p>
              <h2 className="text-2xl font-semibold">Verify to view the {context === 'pitch' ? 'Pitch Deck' : 'Prototype'}</h2>
            </div>
          </div>

          <p className="text-gray-300 mb-6">
            Enter your work email and mobile number to unlock this experience. Your details stay private and are used only to follow up on this request.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-cyan-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={fieldClasses}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Mobile Number</label>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-cyan-400" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={fieldClasses}
                  placeholder="+1 555 123 4567"
                  autoComplete="tel"
                />
              </div>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  className="text-sm text-red-400 bg-red-900/30 border border-red-700/50 rounded-lg px-3 py-2"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:opacity-60 text-white py-3 rounded-lg font-semibold transition-all hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]"
            >
              {submitting ? 'Unlocking...' : 'Unlock Access'}
            </button>

            <p className="text-xs text-gray-500 text-center">
              By continuing you agree to be contacted about this experience.
            </p>
          </form>
        </motion.div>
      </div>
    </div>,
    document.body
  );
};

export default Gate;
