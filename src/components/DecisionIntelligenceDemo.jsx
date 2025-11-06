import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DecisionIntelligenceDemo = () => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const scenarios = [
    {
      title: "Revenue Operations: Discount Approval",
      description: "Sales team needs to approve a 15% discount for a $500K deal",
      currentState: {
        problem: "Manual approval process, no data on why similar deals win/lose",
        tools: ["Salesforce", "CPQ", "Email"],
        outcome: "Slow decisions, inconsistent pricing, lost deals"
      },
      withOurSolution: {
        input: "CRM data + market signals + historical outcomes",
        process: "Causal analysis → Risk assessment → Policy check → Recommendation",
        output: "Coordinated actions across CRM, CPQ, and CS tools",
        outcome: "Faster decisions, better pricing, higher win rates"
      },
      metrics: {
        before: { speed: "3-5 days", winRate: "65%", consistency: "Low" },
        after: { speed: "2 hours", winRate: "78%", consistency: "High" }
      }
    },
    {
      title: "Customer Success: Churn Prevention",
      description: "Customer showing early churn signals - usage drop, support tickets",
      currentState: {
        problem: "Reactive approach, no predictive understanding of churn drivers",
        tools: ["Gainsight", "Zendesk", "Slack"],
        outcome: "Late intervention, high churn rates, lost revenue"
      },
      withOurSolution: {
        input: "Usage data + support tickets + payment history + market signals",
        process: "Causal analysis → Churn prediction → Save strategy → Execution",
        output: "Coordinated save actions across CS, Sales, Product tools",
        outcome: "Proactive intervention, reduced churn, increased NRR"
      },
      metrics: {
        before: { responseTime: "7 days", churnRate: "12%", saveRate: "45%" },
        after: { responseTime: "1 day", churnRate: "8%", saveRate: "72%" }
      }
    },
    {
      title: "Product Launch: Feature Rollout",
      description: "New feature ready for rollout to 10% of users",
      currentState: {
        problem: "Feature flags deployed without outcome prediction or risk assessment",
        tools: ["LaunchDarkly", "Mixpanel", "Slack"],
        outcome: "Rollbacks after damage, inconsistent user experience"
      },
      withOurSolution: {
        input: "Feature usage + user behavior + business metrics + risk factors",
        process: "Causal impact analysis → Risk assessment → Policy compliance → Rollout",
        output: "Intelligent flag management with automatic rollback triggers",
        outcome: "Safe rollouts, better user experience, faster iteration"
      },
      metrics: {
        before: { rolloutTime: "2 weeks", rollbackRate: "25%", userSatisfaction: "Medium" },
        after: { rolloutTime: "3 days", rollbackRate: "8%", userSatisfaction: "High" }
      }
    }
  ];

  const currentScenarioData = scenarios[currentScenario];

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setCurrentScenario((prev) => (prev + 1) % scenarios.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isRunning, scenarios.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Decision Intelligence in Action
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            See how our Decision Intelligence Layer enhances existing B2B SaaS tools 
            without replacing them - making every decision smarter, faster, and more effective.
          </motion.p>
        </div>

        {/* Control Panel */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              isRunning 
                ? 'bg-red-600 hover:bg-red-700 text-white' 
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {isRunning ? 'Stop Demo' : 'Start Live Demo'}
          </button>
        </div>

        {/* Scenario Navigation */}
        <div className="flex justify-center mb-8 space-x-4">
          {scenarios.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentScenario(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentScenario ? 'bg-white' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Main Demo Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScenario}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            {/* Scenario Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                {currentScenarioData.title}
              </h2>
              <p className="text-gray-300 text-lg">
                {currentScenarioData.description}
              </p>
            </div>

            {/* Current State vs Our Solution */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Current State */}
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-400 mb-4">Current State (Without Us)</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-300 mb-2">Problem:</h4>
                    <p className="text-gray-300">{currentScenarioData.currentState.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-300 mb-2">Tools Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentScenarioData.currentState.tools.map((tool, index) => (
                        <span key={index} className="bg-red-800/50 text-red-200 px-3 py-1 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-300 mb-2">Outcome:</h4>
                    <p className="text-gray-300">{currentScenarioData.currentState.outcome}</p>
                  </div>
                </div>
              </div>

              {/* With Our Solution */}
              <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4">With Decision Intelligence</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-300 mb-2">Input:</h4>
                    <p className="text-gray-300">{currentScenarioData.withOurSolution.input}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-300 mb-2">Process:</h4>
                    <p className="text-gray-300">{currentScenarioData.withOurSolution.process}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-300 mb-2">Output:</h4>
                    <p className="text-gray-300">{currentScenarioData.withOurSolution.output}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-300 mb-2">Outcome:</h4>
                    <p className="text-gray-300">{currentScenarioData.withOurSolution.outcome}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Comparison */}
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Performance Impact</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(currentScenarioData.metrics.before).map(([metric, value], index) => (
                  <div key={index} className="text-center">
                    <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4 mb-2">
                      <h4 className="font-semibold text-red-300 mb-1">Before</h4>
                      <p className="text-2xl font-bold text-red-400">{value}</p>
                      <p className="text-sm text-gray-400 capitalize">{metric.replace(/([A-Z])/g, ' $1')}</p>
                    </div>
                    <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-green-300 mb-1">After</h4>
                      <p className="text-2xl font-bold text-green-400">
                        {Object.values(currentScenarioData.metrics.after)[index]}
                      </p>
                      <p className="text-sm text-gray-400 capitalize">{metric.replace(/([A-Z])/g, ' $1')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Key Benefits */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-blue-400 mb-2">10x Faster Decisions</h3>
            <p className="text-gray-300">From days to hours with automated causal analysis and policy checks</p>
          </div>
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-purple-400 mb-2">40% Better Outcomes</h3>
            <p className="text-gray-300">Causal understanding leads to smarter decisions and higher success rates</p>
          </div>
          <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold text-green-400 mb-2">Continuous Learning</h3>
            <p className="text-gray-300">Every decision outcome improves future recommendations and strategies</p>
          </div>
        </div>

        {/* Integration Message */}
        <div className="mt-12 text-center">
          <div className="bg-white/5 rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              We Don't Replace Your Tools - We Make Them Smarter
            </h3>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto">
              Our Decision Intelligence Layer sits between your data, analytics, and business tools, 
              orchestrating smarter decisions without disrupting your existing workflows. 
              We enhance what you have, we don't replace what works.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionIntelligenceDemo;
