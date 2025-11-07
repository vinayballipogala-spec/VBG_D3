import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Users, Target, Brain } from 'lucide-react';
import NavBar from './NavBar';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$5,000',
      period: '/month',
      description: 'Perfect for growing B2B SaaS companies',
      features: [
        'Customer Intelligence Module',
        '500 customer accounts',
        'Churn prediction & health scoring',
        'Basic causal analysis',
        'Email support',
        'Standard integrations'
      ],
      cta: 'Start Free Analysis',
      popular: false
    },
    {
      name: 'Professional',
      price: '$15,000',
      period: '/month',
      description: 'For established companies seeking advanced intelligence',
      features: [
        'Customer Intelligence Module',
        '2,000 customer accounts',
        'Advanced causal inference',
        'Product Intelligence Module (Q2 2026)',
        'Priority support',
        'Advanced integrations',
        'Custom dashboards',
        'API access'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex needs',
      features: [
        'All Intelligence Modules',
        'Unlimited accounts',
        'Full causal reasoning suite',
        'Strategic Intelligence Module',
        'Dedicated success manager',
        'Custom integrations',
        'White-label options',
        'On-premise deployment',
        '24/7 phone support'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navigation */}
      <NavBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-6 futuristic-heading">
            Simple, Transparent <span style={{
              background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 30%, #8b5cf6 70%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Pricing</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            From $500K consulting projects to $5K intelligent systems. 
            Choose the plan that fits your organization's needs.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`neural-border rounded-xl p-8 relative ${
                plan.popular ? 'neural-glow scale-105' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold neural-text">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                plan.popular 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'border border-blue-500 text-blue-400 hover:bg-blue-500/10'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="neural-border rounded-xl p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">ROI Calculator</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="neural-text text-3xl font-bold mb-2">$500K</div>
              <div className="text-gray-400">Traditional Consulting Cost</div>
            </div>
            <div>
              <div className="neural-text text-3xl font-bold mb-2">$5K</div>
              <div className="text-gray-400">Our Monthly Cost</div>
            </div>
            <div>
              <div className="neural-text text-3xl font-bold mb-2">100x</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-semibold mb-2">What's included in the free analysis?</h3>
              <p className="text-gray-400 text-sm">
                A comprehensive assessment of your current decision-making processes, 
                churn prediction analysis for up to 100 customers, and personalized recommendations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How accurate are your predictions?</h3>
              <p className="text-gray-400 text-sm">
                Our Customer Intelligence module achieves 94% accuracy in churn prediction, 
                backed by causal inference and machine learning models.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can I upgrade or downgrade anytime?</h3>
              <p className="text-gray-400 text-sm">
                Yes, you can change your plan at any time. We'll prorate any changes 
                and ensure a smooth transition.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What integrations are available?</h3>
              <p className="text-gray-400 text-sm">
                We integrate with 5000+ apps including Salesforce, HubSpot, Slack, Jira, 
                and many more through our API ecosystem.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;



