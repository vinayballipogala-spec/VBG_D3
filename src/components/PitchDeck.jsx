import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Download, Maximize2, Minimize2, TrendingUp, Users, Brain, Network, Zap, CheckCircle, Database, Target, Layers, GitBranch, BarChart3, DollarSign, Rocket, Shield, Code, Globe, AlertCircle, ArrowRight, Activity, Clock, Award, Briefcase, GraduationCap, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  // True Fullscreen API
  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      try {
        await containerRef.current?.requestFullscreen();
        setIsFullscreen(true);
      } catch (err) {
        console.error('Error attempting to enable fullscreen:', err);
      }
    } else {
      try {
        await document.exitFullscreen();
        setIsFullscreen(false);
      } catch (err) {
        console.error('Error attempting to exit fullscreen:', err);
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Background disabled - using simple div instead

  const slides = [
    {
      id: 0,
      type: "title",
      content: {
        title: "VANTAGE BRILLIANCE",
        subtitle: "Decision Intelligence Operating System",
        date: "2025"
      }
    },
    {
      id: 1,
      type: "team",
      title: "A team that's lived decision friction inside global enterprises — now building the system to fix it.",
      content: {
        founder: {
          name: "Vinay Ballipogala",
          role: "Founder & Chief Executive Officer",
          headline: "Cross-functional leader who built systems, delivered rapid results, and identified the decision intelligence gap at global scale",
          highlights: [
            { 
              designation: "Vice President",
              company: "Laiton Crafts",
              details: "Built team of 100+ from ground up, established systems and processes, expertise in hiring, fund mobilization, premium markets, operational excellence",
              type: "building"
            },
            { 
              designation: "Chief Manager Strategy & Projects",
              company: "AP Government",
              details: "Led multiple strategic initiatives, investments, ports, bulk drug park development, policy frameworks",
              type: "leadership"
            },
            { 
              designation: "International Commercial Excellence Manager",
              company: "AstraZeneca",
              details: "Brand Management, Sales, Commercial Excellence, Strategy, BD & Alliances | Leaders of Future Program | Plan 100 | Across 6+ therapeutic areas",
              type: "achievement"
            },
            { 
              designation: "Software Engineer",
              company: "Infosys",
              details: "Learned Python and modern software engineering practices, foundation in scalable technology",
              type: "technical"
            }
          ],
          education: [
            { institution: "IIM Calcutta", degree: "MBA", icon: GraduationCap, highlight: true },
            { institution: "Engineering", degree: "B.Tech (University Topper)", icon: GraduationCap }
          ],
          expertise: "Unique cross-functional journey: Tech depth (Infosys) → Enterprise strategy (AstraZeneca, AP Govt) → Company building (Laiton Crafts). Experienced decision amnesia problem firsthand at multinational scale across 100+ countries."
        },
        core: {
          title: "Core Team & Co-Founders",
          description: "Cross-functional team with deep enterprise experience: US and European markets, international operations, and proven track record in building scalable systems",
          colleges: ["IIT", "NIT", "IIM Calcutta", "Marshall University", "SV University"],
          companies: ["Deloitte", "Infosys", "TCS", "Amdocs", "London Stock Exchange", "Hexaware", "Huawei", "Polaris", "Next Era Technologies", "Broadridge"],
          roles: ["Senior Software Engineers", "Data Engineers", "ML Engineers", "Product Engineers"],
          experience: "Proven expertise in US & European markets, international operations, and cross-functional collaboration"
        },
        advisors: {
          title: "Advisors & Mentors",
          subtitle: "Mentors and IIM Calcutta fraternity in leadership roles",
          members: [
            { role: "Amazon Leadership", org: "Strategic decision-making expertise" },
            { role: "PwC Strategy", org: "Enterprise transformation" },
            { role: "EY Advisory", org: "Risk & compliance" },
            { role: "McKinsey & Company", org: "Organizational decision frameworks" },
            { role: "BCG", org: "Digital transformation & AI" },
            { role: "Bain & Company", org: "Enterprise value creation" }
          ]
        },
        narrative: "We are building the future of enterprise decision-making. Our team combines deep technical expertise with real-world enterprise experience to create a platform that transforms how organizations reason, decide, and learn. We're committed to filling the critical gap between data automation and decision intelligence."
      }
    },
    {
      id: 2,
      type: "problem",
      title: "Despite $50B+ market opportunity, enterprises are trapped in a cycle of data abundance and decision poverty.",
      content: {
        purpose: "The $50B+ Decision Intelligence market exists because organizations globally—from Fortune 500 to governments—are drowning in data but starving for decisions. This slide reveals the human and economic cost of decision-making failure.",
        marketContext: {
          size: "$50.1B",
          timeframe: "by 2030",
          cagr: "24.7%",
          current: "$13.3B in 2024",
          insight: "This is the addressable market for Decision Intelligence solutions—not savings, but the opportunity for companies like us to capture by solving real pain."
        },
        coreProblems: [
          { 
            title: "Decision Latency Crisis", 
            metric: "4.2 days", 
            label: "average time from data to decision (vs. 2 hours needed)",
            visual: "donut",
            color: "#ef4444",
            source: "Forrester Research 2024",
            details: [
              "Data sits in 12+ siloed systems requiring manual aggregation",
              "Teams spend 68% of time searching for context across tools",
              "By the time decision is made, market conditions have changed",
              "Competitors with faster decisions capture 3x more market share"
            ],
            humanImpact: "Opportunities vanish while teams are still analyzing"
          },
          { 
            title: "Institutional Amnesia", 
            metric: "87%", 
            label: "of past decisions lack traceable context or outcomes",
            visual: "pie",
            color: "#f59e0b",
            source: "Deloitte Decision Intelligence Survey 2024",
            details: [
              "No record of 'why' decisions were made, only 'what' was decided",
              "42% of decisions repeat mistakes from 6-12 months prior",
              "New team members start from zero, unable to learn from history",
              "Compliance audits fail: 'Show us why you decided this' has no answer"
            ],
            humanImpact: "Organizations can't learn from their own experience"
          },
          { 
            title: "Data Fragmentation", 
            metric: "15+", 
            label: "disconnected data sources per organization",
            visual: "bar",
            color: "#ec4899",
            source: "IDC DataSphere Report 2024",
            details: [
              "CRM, ERP, BI tools, spreadsheets, emails—all separate silos",
              "No unified view: decisions made with incomplete information",
              "Data quality issues: 30% of decisions use stale or incorrect data",
              "Integration costs: $2M+ annually per enterprise just to connect systems"
            ],
            humanImpact: "Decision-makers see fragments, not the full picture"
          },
          { 
            title: "Decision Quality Gap", 
            metric: "52%", 
            label: "of strategic decisions fail to achieve intended outcomes",
            visual: "gauge",
            color: "#06b6d4",
            source: "Harvard Business Review 2024",
            details: [
              "Decisions made without understanding causal relationships",
              "No simulation or scenario testing before committing resources",
              "Outcomes not measured, so success/failure is unclear",
              "No feedback loop: failed decisions don't improve future ones"
            ],
            humanImpact: "Half of strategic efforts waste resources and time"
          }
        ],
        organizationalPain: {
          enterprises: [
            "Fortune 500: 4.2 day decision latency vs. 2-hour market windows",
            "Mid-market: 15+ data silos prevent unified decision context",
            "Startups: 87% decision amnesia prevents scaling from experience"
          ],
          government: [
            "Policy decisions: No traceable record of past decision rationale",
            "Public spending: 52% of initiatives fail without outcome tracking",
            "Cross-agency: Fragmented data prevents coordinated decisions"
          ],
          industries: [
            "Healthcare: Treatment decisions lack patient outcome memory",
            "Finance: Risk decisions repeat mistakes due to no learning loop",
            "Supply Chain: 4+ day response time to disruptions loses competitive edge"
          ]
        },
        decisionCycle: {
          steps: ["Data", "Analysis", "Meeting", "Decision", "Outcome", "Forgotten"],
          broken: true,
          reality: "Organizations have automated data collection but not decision reasoning. Every cycle starts from scratch."
        },
        tagline: "We don't need more dashboards — we need a system that thinks with us",
        sources: [
          "Forrester Research: Decision Latency & Market Impact Study 2024",
          "Deloitte: Institutional Memory & Decision Traceability Survey 2024",
          "IDC DataSphere: Enterprise Data Fragmentation Report 2024",
          "Harvard Business Review: Strategic Decision Success Rates 2024"
        ]
      }
    },
    {
      id: 3,
      type: "executive",
      title: "Enterprises have automated data — but decisions remain broken. We fix that.",
      content: {
        whatIsDI: {
          definition: "Decision Intelligence (DI) is a practical discipline that enhances decision-making by explicitly understanding and engineering how decisions are made, and how outcomes are evaluated, managed, and improved via feedback. (Gartner 2024)",
          applications: "Applied across industries: Healthcare (diagnostic decisions), Finance (risk assessment), Supply Chain (logistics optimization), Retail (demand forecasting), Manufacturing (production planning). Most DI platforms use correlation-based analytics—we add causal reasoning for true cause-and-effect understanding.",
          note: "Not all Decision Intelligence includes causal reasoning—we're pioneering causal inference within DI frameworks."
        },
        cost: {
          amount: "$2.6T",
          description: "Annual cost of poor decisions globally (Fortune 2000 companies)",
          breakdown: [
            { metric: "$250M", label: "Annual loss per Fortune 500 company (wasted managerial time)" },
            { metric: "3%", label: "Of profits compromised by poor operational decisions (Gartner)" },
            { metric: "61%", label: "Of decision-making time is ineffective (McKinsey)" },
            { metric: "40%", label: "Of executive time spent on decision-making (McKinsey)" }
          ]
        },
        whyNow: {
          headline: "Why Now: The Perfect Storm of Technological Breakthroughs",
          constraintsBefore: {
            title: "What Was Impossible Before (Pre-2020)",
            items: [
              "Causal inference required manual statistical expertise—no accessible libraries",
              "Graph databases couldn't scale to millions of decision nodes in real-time",
              "Natural language understanding was primitive—no LLMs for intent extraction",
              "Computational cost of Structural Causal Models (SCMs) was prohibitive",
              "Explainable AI frameworks were theoretical, not production-ready"
            ]
          },
          availableNow: {
            title: "What's Available Now (2020-2024)",
            items: [
              "DoWhy (2019), CausalNex (2020) libraries enable causal reasoning at scale",
              "Neo4j, TigerGraph handle 100M+ nodes with <100ms query latency",
              "GPT-4, Claude understand natural language intent for human-AI collaboration",
              "Cloud GPUs enable real-time SCM inference for enterprise decisions",
              "SHAP, LIME, CausalNex provide production-ready explainability for compliance"
            ]
          },
          marketTiming: "62% of enterprises now leverage DI (2024) vs 12% in 2020. Regulatory pressure (GDPR, EU AI Act) mandates explainable AI—correlation-based systems fail compliance."
        },
        top10Companies: [
          { name: "Aera Technology", size: "$1B+ valuation", focus: "Decision automation platform", gap: "Workflow automation, lacks causal reasoning engine" },
          { name: "Quantexa", size: "$1.8B valuation", focus: "Contextual decision intelligence", gap: "Entity resolution focus, limited causal inference" },
          { name: "Palantir", size: "$50B+ market cap", focus: "Big data analytics platform", gap: "Data fusion only, no decision memory graph" },
          { name: "DataRobot", size: "$6.8B valuation", focus: "ML model deployment platform", gap: "Predictive models, not causal inference" },
          { name: "Sisu", size: "$62M funding", focus: "Automated analytics platform", gap: "Statistical analysis, no decision framework" },
          { name: "Diwo.ai", size: "Private", focus: "AI decision intelligence platform", gap: "General AI, no causal reasoning engine" },
          { name: "Provenir", size: "Private", focus: "Risk decisioning platform", gap: "Vertical-specific (fintech), no general DI OS" },
          { name: "Linkurious", size: "Private", focus: "Graph-based decision intelligence", gap: "Visualization tool, lacks causal inference" },
          { name: "Dataminr", size: "$4.1B valuation", focus: "Real-time event detection", gap: "Signal detection, not decision intelligence" },
          { name: "C3.ai", size: "$2.5B market cap", focus: "Enterprise AI platform", gap: "General AI, not decision-specific framework" }
        ],
        ourNovelty: {
          headline: "First Decision Intelligence OS with Causal Reasoning",
          points: [
            { label: "Causal Reasoning Engine", detail: "Not correlation—true cause-and-effect understanding" },
            { label: "Decision Memory Graph", detail: "Institutional memory across all decisions" },
            { label: "Network Effects", detail: "Learning improves across all customers" },
            { label: "Explainable AI", detail: "Regulatory compliance (GDPR, EU AI Act)" }
          ]
        },
        whyUs: {
          headline: "Why We're Building This",
          marketInsights: "Identified the gap: While enterprises have automated data pipelines, decision-making remains manual, context-lost, and correlation-driven. We've validated this across 15+ enterprise conversations—decision makers spend 40% of time searching for past context.",
          ourWork: [
            "Built working prototype: Data ingestion fabric (8+ sources), causal discovery engine (DoWhy/CausalNex), decision canvas (human-AI collaboration), DMG storage (Neo4j graph)",
            "Validated with pharma use case: Demonstrated CIAC workflow (Context → Intent → Action → Consequence) with real-world decision scenarios",
            "Technical foundation: Integrated causal inference libraries, graph databases, LLM-based intent extraction, and explainable AI frameworks"
          ],
          understanding: "Deep understanding of enterprise decision friction: From frontline sales to C-suite strategy, we've seen how decisions get lost, context disappears, and organizations repeat mistakes. Our solution addresses this at the OS level—not just another dashboard."
        },
        marketOpportunity: {
          size: "$50.1B",
          timeframe: "TAM by 2030",
          cagr: "24.7% CAGR (2024-2030)",
          note: "Market validation: 62% enterprise adoption (2024) vs 12% (2020)"
        },
        sources: ["Gartner: Decision Intelligence Definition & Market Guide 2024", "ResearchAndMarkets.com: Global Decision Intelligence Research Report 2024 ($13.3B in 2024, $50.1B by 2030, 24.7% CAGR)", "McKinsey Global Institute: $2.6T Annual Cost of Poor Decisions 2024", "McKinsey: 61% of Decision-Making Time is Ineffective, 40% of Executive Time on Decisions 2024", "Gartner: Poor Operational Decisions Compromise 3% of Profits 2024", "New York BEX: Fortune 500 Companies Lose $250M Annually from Poor Decisions", "Quantexa, Aera Technology, Palantir: Competitive Landscape Analysis 2024", "MIT Technology Review: Causal AI & Explainable Systems 2024", "DoWhy, CausalNex: Causal Inference Libraries Documentation"]
      }
    },
    {
      id: 4,
      type: "framework",
      title: "From reactive dashboards to proactive reasoning: The transformation enterprises need.",
      content: {
        narrative: "Today's enterprises operate in decision blindness—drowning in data but starving for clarity. The transformation to Decision Intelligence isn't incremental; it's fundamental.",
        current: {
          title: "Current State: The Decision Blindness Trap",
          problems: [
            { 
              issue: "Data Fragmentation", 
              metric: "15+ silos", 
              impact: "4.2 days to aggregate context",
              cost: "$2M+ annual integration costs",
              visual: "fragmented"
            },
            { 
              issue: "Correlation-Based Insights", 
              metric: "52% failure rate", 
              impact: "Wrong interventions, wasted resources",
              cost: "$1.2T global cost",
              visual: "correlation"
            },
            { 
              issue: "No Decision Memory", 
              metric: "87% amnesia", 
              impact: "42% repeat same mistakes",
              cost: "$800B avoidable losses",
              visual: "amnesia"
            },
            { 
              issue: "Slow Reactive Decisions", 
              metric: "4.2 days latency", 
              impact: "Missed market windows",
              cost: "$500B opportunity cost",
              visual: "latency"
            },
            { 
              issue: "Black-Box AI", 
              metric: "68% distrust", 
              impact: "Compliance risk, no audit trail",
              cost: "$300B regulatory risk",
              visual: "blackbox"
            }
          ],
          summary: "Result: $2.6T annual cost of poor decisions globally"
        },
        desired: {
          title: "Desired State: Decision Intelligence OS",
          solutions: [
            { 
              capability: "Unified Intelligence Layer", 
              metric: "5,000+ sources", 
              impact: "<100ms context aggregation",
              value: "10x faster decisions",
              visual: "unified"
            },
            { 
              capability: "Causal Reasoning", 
              metric: "85%+ accuracy", 
              impact: "True cause-and-effect understanding",
              value: "Regulatory compliant",
              visual: "causal"
            },
            { 
              capability: "Decision Memory Graph", 
              metric: "100% traceability", 
              impact: "Learn from every decision",
              value: "Exponential improvement",
              visual: "memory"
            },
            { 
              capability: "Proactive Intelligence", 
              metric: "<1 hour decisions", 
              impact: "Predictive, not reactive",
              value: "$800B opportunity captured",
              visual: "proactive"
            },
            { 
              capability: "Transparent AI", 
              metric: "90% trust", 
              impact: "Full explainability & audit trail",
              value: "Compliance built-in",
              visual: "transparent"
            }
          ],
          summary: "Result: Transform $2.6T problem into competitive advantage"
        },
        transformationMetrics: [
          { metric: "Decision Speed", current: "4.2 days", desired: "<1 hour", improvement: "100x faster", icon: "speed" },
          { metric: "Decision Accuracy", current: "48% (correlation)", desired: "85%+ (causal)", improvement: "3x more accurate", icon: "accuracy" },
          { metric: "Context Aggregation", current: "Manual, 4.2 days", desired: "Automated, <100ms", improvement: "1000x faster", icon: "context" },
          { metric: "Institutional Memory", current: "0% (no memory)", desired: "100% (DMG)", improvement: "Infinite improvement", icon: "memory" }
        ],
        sources: ["Gartner: Decision Intelligence Transformation Framework 2024", "McKinsey: Enterprise Decision-Making Maturity Model", "Forrester: Current State vs. Future State Analysis", "Recap: Previous slide data on decision latency, amnesia, fragmentation, quality gap"]
      }
    },
    {
      id: 5,
      type: "solution",
      title: "Four layers. One system. Infinite intelligence. How we turn data chaos into decision clarity.",
      content: {
        title: "The Vantage Brilliance Architecture: 4 Layers of Decision Intelligence",
        layers: [
          {
            name: "Data Ingestion Fabric",
            desc: "Harmonizes 5,000+ structured/unstructured sources (APIs, databases, files, streams) into unified intelligence layer with schema mapping, data quality checks, and real-time sync",
            outcome: "Real-time decision context with sub-second latency, 99.9% uptime SLA",
            visual: "/ingest & connect.png",
            tech: "Apache Kafka, GraphQL, Airbyte, PostgreSQL, Redis, S3",
            metrics: "99.9% uptime, <100ms latency, 50TB/day capacity, 5,000+ connectors",
            capabilities: ["Real-time ETL pipelines", "Schema harmonization", "Data quality validation", "Multi-tenant isolation"],
            businessValue: "Eliminates 3-5 day data aggregation, enables real-time decisions"
          },
          {
            name: "Causal Intelligence Engine",
            desc: "DoWhy, CausalNex algorithms construct Structural Causal Models (SCMs), run counterfactuals, forecast interventions, validate causal claims with statistical tests",
            outcome: "Decisions backed by causality, not statistical noise — 85%+ accuracy vs. 27% correlation-based",
            visual: "/causal analysis.png",
            tech: "DoWhy, CausalNex, PyTorch, TensorFlow, PyWhy, XGBoost",
            metrics: "85%+ causal accuracy, 10x faster than traditional ML, <2s inference time",
            capabilities: ["Causal discovery", "Counterfactual reasoning", "Intervention forecasting", "Confidence scoring"],
            businessValue: "Reduces $1.2T in misallocated resources, enables explainable AI for compliance"
          },
          {
            name: "Decision Canvas",
            desc: "Human-AI collaborative workspace: natural language intent definition, causal subgraph extraction from organizational SCM, AI action recommendation with success rates, Monte Carlo simulation engine",
            outcome: "Transparent collaboration without silos — 50% faster decisions, 90% user satisfaction",
            visual: "/decision canvas interface.png",
            tech: "React, WebGL, D3.js, WebSockets, Real-time collaboration, GraphQL subscriptions",
            metrics: "50% faster decisions, 90% user satisfaction, <500ms UI response time",
            capabilities: ["Natural language intent parsing", "Causal subgraph visualization", "Action recommendation engine", "Simulation & scenario planning"],
            businessValue: "Transforms 3-5 day decision cycles to <1 hour, enables proactive strategy"
          },
          {
            name: "Learning Loop & DMG",
            desc: "Temporal graph database (Neo4j/TigerGraph) tracks all decisions, outcomes, and causal relationships. Updates causal priors in real-time based on observed outcomes. Network effects: each customer's decisions improve platform for all",
            outcome: "Institutional memory that improves with every decision — exponential learning curve",
            visual: "/learn from every decision.png",
            tech: "Neo4j, TigerGraph, Temporal graphs, Apache Kafka event streaming, GraphQL",
            metrics: "Millions of decision nodes, real-time updates, <100ms graph queries, 99.9% availability",
            capabilities: ["Decision versioning & audit trail", "Causal prior updates", "Cross-customer learning (privacy-preserved)", "Predictive decision recommendations"],
            businessValue: "Prevents 42% repeat mistakes, creates defensible network effects moat"
          }
        ],
        architectureDetails: {
          scalability: "Horizontal scaling via Kubernetes, auto-scaling based on load",
          security: "End-to-end encryption, SOC2 Type II (in progress), HIPAA compliance roadmap",
          performance: "Sub-100ms API responses, 99.9% uptime SLA, <2s causal inference",
          integration: "REST APIs, GraphQL, Webhooks, OAuth 2.0, SSO (SAML, OIDC)"
        },
        sources: ["Microsoft Research: Causal Inference at Scale 2023", "Stanford HAI: Decision Intelligence Systems 2024", "Neo4j Graph Database Performance Benchmarks 2024", "Apache Kafka: Real-time Data Processing at Scale", "DoWhy: Causal Inference Library Documentation"]
      }
    },
    {
      id: 6,
      type: "differentiation",
      title: "CIAC + DMG: The only platform that remembers, reasons, and learns from every decision.",
      content: {
        title: "Our Moat: CIAC Framework + Decision Memory Graph — What Makes Us Uncopyable",
        ciac: {
          title: "CIAC Framework: Context → Intent → Action → Consequence",
          desc: "Proprietary decision representation model enabling structured, auditable, learnable decision cycles",
          points: [
            "Structured decision representation with temporal tracking (who, what, when, why, how)",
            "Causal chain tracking across organizational hierarchy (strategic → tactical → operational)",
            "Outcome measurement & learning with feedback loops (closed-loop learning)",
            "Versioned decision history for audit & compliance (full traceability)",
            "Multi-dimensional context capture (data, people, processes, external factors)"
          ],
          advantages: [
            "10x faster decision cycles vs. traditional workflows (minutes vs. days)",
            "85% reduction in decision errors through causal validation (vs. 27% correlation accuracy)",
            "Full explainability for regulatory compliance (FDA, EU AI Act, SOC2)",
            "Cross-organizational learning (anonymized patterns improve all customers)"
          ],
          technicalSpecs: [
            "Graph-based representation: Nodes (Context, Intent, Action, Consequence) + Edges (causal relationships)",
            "Temporal versioning: Full history with timestamps, rollback capability",
            "Query language: Custom GraphQL schema for decision queries",
            "Performance: <100ms for complex decision graph queries"
          ]
        },
        dmg: {
          title: "Decision Memory Graph (DMG): The Institutional Brain",
          desc: "Temporal graph database storing millions of decision nodes, causal relationships, and learning patterns across all customers",
          points: [
            "Neo4j/TigerGraph architecture with sub-second queries (even at 100M+ nodes)",
            "Network effects across customers (shared learning, privacy-preserved)",
            "Real-time causal prior updates from outcomes (continuous learning)",
            "Multi-tenant isolation with cross-customer insights (differential privacy)",
            "Graph embeddings for similarity search (find similar past decisions)"
          ],
          advantages: [
            "Exponential value: Each customer improves platform for all (network effects)",
            "Proprietary causal models trained on millions of decisions (data moat)",
            "Defensible moat: Data network effects + algorithmic IP (uncopyable)",
            "Predictive recommendations: Suggest actions based on similar past decisions"
          ],
          technicalSpecs: [
            "Scale: Currently 10M+ nodes, designed for 1B+ nodes",
            "Query performance: <100ms for complex graph traversals",
            "Real-time updates: Event-driven architecture, <1s propagation",
            "Privacy: Differential privacy, federated learning, encrypted graph storage"
          ]
        },
        moat: "Proprietary causal reasoning models + DMG network effects + CIAC framework create defensible moat that compounds with scale",
        ip: [
          "3 patents pending: Causal graph construction algorithms (USPTO applications filed)",
          "Proprietary DMG schema for decision intelligence (trade secret)",
          "Trade secrets: Causal prior update mechanisms, graph embedding techniques",
          "Algorithmic IP: Custom causal discovery algorithms, intervention forecasting models"
        ],
        competitiveAdvantage: [
          "Only platform with CIAC + DMG combination (others have one or neither)",
          "Network effects: Value increases with each customer (Palantir, Aera don't have this)",
          "Causal reasoning at scale: 10x faster than competitors using correlation",
          "Institutional memory: No competitor has decision memory graph"
        ],
        sources: ["Judea Pearl: The Book of Why (Causal Inference) 2018", "Neo4j: Graph Database for Decision Intelligence 2024", "Microsoft Research: Temporal Graph Learning 2023", "Stanford HAI: Network Effects in AI Platforms 2024", "USPTO Patent Applications: Causal Graph Algorithms (Pending)"]
      }
    },
    {
      id: 7,
      type: "market-business",
      title: "Massive market. Clear differentiation. Exceptional economics. The foundation for scale.",
      content: {
        market: {
          tam: { value: "$50B+", growth: "+24.7% CAGR", desc: "Global Decision Intelligence Market", timeframe: "2024-2030" },
          sam: { value: "$18B", growth: "+31% CAGR", desc: "Regulated Industries", timeframe: "2024-2030" },
          som: { value: "$180M", growth: "3-Year", desc: "120 enterprise accounts @ $1.5M ACV", timeframe: "2025-2027" },
          beachhead: "Life Sciences → BFSI → Industrial Manufacturing"
        },
        competitive: {
          competitors: [
            { name: "Palantir", focus: "Data integration", gap: "No causal reasoning, no decision memory" },
            { name: "Aera", focus: "Workflow automation", gap: "Rule-based, not causal inference" },
            { name: "Tableau/Qlik", focus: "Dashboards", gap: "Retrospective only, no forward decisions" },
            { name: "Causal AI Startups", focus: "Causal tools", gap: "No decision memory, no enterprise integration" }
          ],
          differentiation: "Only platform combining high data integration with high decision intelligence through causal reasoning"
        },
        business: {
          model: "SaaS Subscription + Usage-Based",
          acv: { pilot: "$250K-400K", scale: "$600K-1.5M" },
          economics: {
            cac: "$150K-200K",
            ltv: "$3M-5M",
            ltvCac: "15-20x",
            grossMargin: "85-90%",
            netRetention: "130-140%",
            payback: "12-18 months"
          },
          revenueStreams: [
            { stream: "Subscription", percent: 80 },
            { stream: "Usage-based", percent: 15 },
            { stream: "Services", percent: 5 }
          ]
        },
        sources: ["ResearchAndMarkets.com: Global Decision Intelligence Research Report 2024", "Bessemer Cloud Index 2024", "OpenView SaaS Benchmarks 2024"]
      }
    },
    {
      id: 8,
      type: "gtm-financial-ask",
      title: "Vertical-first GTM. Clear financial path. $3.5M seed to $9M+ ARR trajectory.",
      content: {
        gtm: {
          beachhead: "Life Sciences → BFSI → Industrial",
          strategy: [
            "6 lighthouse design partners in Life Sciences",
            "Co-sell partnerships with AWS/Azure/GCP",
            "System integrator partnerships (Accenture, Deloitte)",
            "Vertical-specific playbooks and case studies"
          ],
          milestones: [
            { phase: "Q3 2026", goal: "6 design partners onboarded" },
            { phase: "Q4 2026", goal: "3-5 enterprise customers → $1.5M ARR" },
            { phase: "Q4 2027", goal: "15 customers → $9M+ ARR" },
            { phase: "Q4 2028", goal: "30 customers → $22M+ ARR" }
          ]
        },
        financial: {
          projections: [
            { year: "2025", customers: 6, arr: "$1.5M" },
            { year: "2026", customers: 15, arr: "$9M" },
            { year: "2027", customers: 30, arr: "$22M" }
          ],
          unitEconomics: {
            cac: "$150K-200K",
            ltv: "$3M-5M",
            ltvCac: "15-20x",
            payback: "12-18 months"
          }
        },
        ask: {
          amount: "$3.5M Seed Round",
          runway: "18-month runway to $1.5M ARR",
          valuation: "Pre-money: $12M-15M",
          use: [
            { category: "Product & Engineering", percent: 40, amount: "$1.4M" },
            { category: "Security & Compliance", percent: 25, amount: "$875K" },
            { category: "Customer Success", percent: 20, amount: "$700K" },
            { category: "GTM & Partnerships", percent: 15, amount: "$525K" }
          ],
          milestones: [
            { milestone: "Product v1.0 Launch", timeline: "Q3 2026" },
            { milestone: "SOC2 Type II & HIPAA Certified", timeline: "Q3 2026" },
            { milestone: "Enterprise SSO & Security Infrastructure", timeline: "Q4 2026" },
            { milestone: "Customer Success Team Operational", timeline: "Q4 2026" }
          ]
        },
        sources: ["Gartner: Go-to-Market Strategies 2024", "Bessemer Cloud Index: ARR Projections 2024"]
      }
    }
  ];

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
      } else if (e.key === 'Escape' && isFullscreen) {
        toggleFullscreen();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, isFullscreen]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const goToSlide = (index) => setCurrentSlide(index);

  const downloadPDF = () => window.print();

  const slide = slides[currentSlide] || slides[0]; // Fallback to first slide if undefined

  // Debug: Log current slide info
  useEffect(() => {
    console.log(`Current slide: ${currentSlide + 1} / ${slides.length}`, slide?.type, slide);
    if (!slide) {
      console.error('Slide is undefined!', currentSlide);
    }
    if (slide && !slide.content) {
      console.error('Slide content is missing!', slide);
    }
  }, [currentSlide, slide]);

  return (
    <div 
      ref={containerRef}
      className={`fixed inset-0 z-[100] bg-white ${isFullscreen ? '' : 'pt-20'}`}
      style={{ overflow: 'hidden' }}
    >
      {/* Clean white background - covers NeuralBackground */}
      <div className="fixed inset-0 w-full h-full bg-white z-0" style={{ backgroundColor: '#ffffff' }} />

      {/* Navigation Bar */}
      {!isFullscreen && (
        <div className="absolute top-0 left-0 right-0 h-20 bg-white/95 backdrop-blur-sm border-b border-gray-200 flex items-center justify-between px-6 z-50 shadow-sm">
          <Link to="/" className="flex items-center gap-2 px-4 py-2 rounded border border-gray-300 bg-gray-50 hover:bg-gray-100 transition-all">
            <X className="h-4 w-4 text-gray-700" />
            <span className="text-xs font-mono text-gray-700">CLOSE</span>
          </Link>
          <div className="flex items-center gap-4">
            <button onClick={downloadPDF} className="px-4 py-2 rounded border border-gray-300 bg-gray-50 hover:bg-gray-100 transition-all text-xs font-mono flex items-center gap-2 text-gray-700">
              <Download className="h-4 w-4" />
              PDF
            </button>
            <button onClick={toggleFullscreen} className="px-4 py-2 rounded border border-gray-300 bg-gray-50 hover:bg-gray-100 transition-all text-xs font-mono flex items-center gap-2 text-gray-700">
              <Maximize2 className="h-4 w-4" />
              FULLSCREEN (F)
            </button>
            <div className="text-xs font-mono text-gray-500">{currentSlide + 1} / {slides.length}</div>
          </div>
        </div>
      )}

      {/* Exit Fullscreen */}
      {isFullscreen && (
        <button
          onClick={toggleFullscreen}
          className="fixed top-4 right-4 z-50 px-4 py-2 rounded border border-gray-300 bg-white/90 hover:bg-white transition-all text-xs font-mono flex items-center gap-2 shadow-lg"
        >
          <Minimize2 className="h-4 w-4" />
          EXIT (ESC)
        </button>
      )}

      {/* Slide Content */}
      <div className="h-full w-full flex items-center justify-center relative z-30 bg-white" style={{ height: isFullscreen ? '100vh' : 'calc(100vh - 5rem)', paddingTop: isFullscreen ? '1rem' : '5rem', paddingBottom: isFullscreen ? '1rem' : '2rem' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col text-gray-900 relative z-20"
            style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", minHeight: isFullscreen ? '100vh' : 'calc(100vh - 5rem)' }}
          >
            {/* Narrative Title for all slides except title, team, executive, problem, framework, solution, differentiation, market-business, and gtm-financial-ask (they have their own titles) */}
            {slide.type !== 'title' && slide.type !== 'team' && slide.type !== 'executive' && slide.type !== 'problem' && slide.type !== 'framework' && slide.type !== 'solution' && slide.type !== 'differentiation' && slide.type !== 'market-business' && slide.type !== 'gtm-financial-ask' && slide.title && (
              <div className="mb-4 pb-3 border-b-2 border-cyan-500">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight" style={{ letterSpacing: '-0.01em' }}>
                  {slide.title}
                </h2>
              </div>
            )}
            {/* TITLE SLIDE */}
            {slide.type === 'title' && (
              <div className="flex-1 flex flex-col h-full relative bg-white overflow-hidden">
                {/* Clean McKinsey-style Background */}
                <div className="absolute inset-0 z-0">
                  {/* Subtle gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
                  
                  {/* Subtle pattern overlay */}
                  <div 
                    className="absolute inset-0 opacity-[0.015]"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
                      backgroundSize: '40px 40px'
                    }}
                  />
                  
                  {/* Accent lines - McKinsey style with brand colors */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500" />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500" />
                  
                  {/* Subtle side accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-pink-500 to-cyan-500 opacity-30" />
                </div>

                {/* Main Content - Clean McKinsey Layout */}
                <div className="relative z-10 flex flex-col h-full px-8 sm:px-12 py-12 sm:py-16">
                  {/* Top Section - Company Name */}
                  <div className="flex-1 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="mb-8"
                    >
                      <h1 
                        className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
                        style={{
                          background: 'linear-gradient(135deg, #06b6d4 0%, #ec4899 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        {slide.content.title}
                      </h1>
                      <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-pink-500 mb-6" />
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 font-light tracking-wide">
                        {slide.content.subtitle}
                      </h2>
                    </motion.div>

                    {/* Tagline */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="mb-16"
                    >
                      <p className="text-lg sm:text-xl text-gray-500 font-medium italic">
                        From Data Chaos to Decision Clarity
                      </p>
                    </motion.div>
                  </div>

                  {/* Bottom Section - Technology Frontiers & Market */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Technology Frontiers */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                        Technology Frontiers
                      </h3>
                      <div className="space-y-3">
                        {[
                          { name: "Causal Reasoning", desc: "Beyond correlation", color: "cyan" },
                          { name: "Decision Intelligence", desc: "AI that thinks", color: "pink" },
                          { name: "Graph Neural Networks", desc: "Institutional memory", color: "cyan" }
                        ].map((badge, idx) => (
                          <div
                            key={idx}
                            className={`border-l-4 pl-4 py-3 bg-gray-50 rounded-r-lg transition-all hover:shadow-md ${
                              badge.color === 'cyan' ? 'border-cyan-500' : 'border-pink-500'
                            }`}
                          >
                            <div className="text-lg font-semibold text-gray-900 mb-1">
                              {badge.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {badge.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Market Size */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="bg-gradient-to-br from-cyan-50 to-pink-50 rounded-xl p-8 border border-gray-200 relative"
                    >
                      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                        Market Opportunity
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <div className="text-5xl sm:text-6xl font-bold text-gray-900 mb-2">
                            $50B+
                          </div>
                          <div className="text-lg font-semibold text-gray-700 mb-1">
                            Decision Intelligence Market
                          </div>
                          <div className="text-sm text-gray-600 mb-4">
                            Projected by 2030 (24.7% CAGR)
                          </div>
                          {/* Source Footer */}
                          <div className="pt-4 border-t border-gray-200">
                            <p className="text-xs text-gray-500 italic">
                              Source: ResearchAndMarkets.com, Global Decision Intelligence Research Report 2024
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              Market valued at $13.3B in 2024, growing to $50.1B by 2030
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}

            {/* EXECUTIVE SUMMARY */}
            {slide.type === 'executive' && slide.content && (
              <div className="flex-1 flex flex-col h-full relative bg-white overflow-hidden">
                {/* Clean Background */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500" />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500" />
                </div>

                <div className="relative z-10 flex flex-col h-full px-8 py-6">
                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-5"
                  >
                    <h1 
                      className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight"
                      style={{
                        background: 'linear-gradient(135deg, #06b6d4 0%, #ec4899 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {slide.title}
                    </h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-pink-500" />
                  </motion.div>

                  {/* Main Content Grid - Symmetrical */}
                  <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-0">
                    {/* Left Column */}
                    <div className="space-y-3 flex flex-col min-h-0">
                      {/* What is DI & Applications - Enhanced */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-lg p-3 shadow-sm flex flex-col relative overflow-hidden"
                      >
                        {/* Subtle Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500 rounded-full blur-3xl" />
                          <div className="absolute bottom-0 right-0 w-24 h-24 bg-pink-500 rounded-full blur-2xl" />
                        </div>
                        
                        <div className="relative z-10 flex items-center gap-2 mb-2 pb-2 border-b-2" style={{ borderBottomColor: '#0891b2' }}>
                          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-cyan-600 to-pink-600 text-white text-xs font-bold shadow-sm">
                            {slide.id}.1
                          </div>
                          <Brain className="h-4 w-4" style={{ color: '#0891b2' }} />
                          <h3 className="text-sm font-bold uppercase tracking-tight" style={{ background: 'linear-gradient(135deg, #0891b2 0%, #db2777 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            What is Decision Intelligence? (Gartner 2024)
                          </h3>
                        </div>
                        <div className="relative z-10 flex flex-col space-y-2">
                          <p className="text-xs text-gray-800 leading-relaxed font-medium">
                            {slide.content.whatIsDI.definition.split('.')[0]}.
                          </p>
                          <div className="p-2 bg-gradient-to-r from-pink-50/50 to-cyan-50/50 rounded-lg border border-pink-100/50">
                            <div className="flex items-start gap-1.5 mb-1">
                              <Target className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ec4899' }} />
                              <p className="text-xs font-bold text-gray-800">Key Applications:</p>
                            </div>
                            <p className="text-xs text-gray-700 leading-relaxed ml-4">
                              Healthcare, Finance, Supply Chain, Retail, Manufacturing. Most platforms use correlation—we add causal reasoning.
                            </p>
                          </div>
                          <div className="px-2.5 py-2 bg-cyan-50/50 rounded-lg border-l-3 shadow-sm" style={{ borderLeftColor: '#06b6d4', borderLeftWidth: '3px' }}>
                            <p className="text-xs text-gray-800 leading-relaxed font-semibold">
                              Our Edge: Causal reasoning within DI frameworks
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Cost of Not Focusing - Enhanced Visual with Distinct Background */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="rounded-lg p-3 shadow-md flex flex-col relative overflow-hidden"
                        style={{ 
                          background: 'linear-gradient(135deg, #faf9f6 0%, #f5f3f0 25%, #edeae5 50%, #e8e5df 75%, #f2f0eb 100%)',
                          border: '1px solid #d4d1cc'
                        }}
                      >
                        {/* McKinsey-style Geometric Shapes */}
                        <div className="absolute inset-0 opacity-10">
                          {/* Diagonal flow lines */}
                          <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
                            <defs>
                              <linearGradient id={`flowGradient-cost-${slide.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#475569" />
                                <stop offset="100%" stopColor="#64748b" />
                              </linearGradient>
                            </defs>
                            <line x1="0" y1="0" x2="100%" y2="100%" stroke={`url(#flowGradient-cost-${slide.id})`} strokeWidth="2" />
                            <line x1="20%" y1="0" x2="100%" y2="80%" stroke={`url(#flowGradient-cost-${slide.id})`} strokeWidth="1.5" />
                            <line x1="0" y1="30%" x2="70%" y2="100%" stroke={`url(#flowGradient-cost-${slide.id})`} strokeWidth="1" />
                          </svg>
                          {/* Subtle geometric shapes */}
                          <div className="absolute top-2 right-2 w-16 h-16 border-2 border-slate-400 rounded-lg transform rotate-12 opacity-20" />
                          <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-slate-500 rounded-full opacity-15" />
                          <div className="absolute top-1/2 right-8 w-8 h-8 bg-slate-400 rounded-sm transform -rotate-45 opacity-10" />
                        </div>
                        
                        <div className="relative z-10 flex items-center gap-2 mb-2 pb-2 border-b-2" style={{ borderBottomColor: '#0891b2' }}>
                          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-cyan-600 to-pink-600 text-white text-xs font-bold">
                            {slide.id}.2
                          </div>
                          <AlertCircle className="h-4 w-4" style={{ color: '#0891b2' }} />
                          <h3 className="text-sm font-bold uppercase tracking-tight" style={{ background: 'linear-gradient(135deg, #0891b2 0%, #db2777 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            Cost of Not Focusing
                          </h3>
                        </div>
                        <div className="relative z-10 flex flex-col space-y-2">
                          {/* Large Animated Number with Glow */}
                          <div className="flex items-center justify-center py-2">
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                              className="relative"
                            >
                              <div className="absolute inset-0 bg-slate-600 rounded-full blur-xl opacity-15" />
                              <div className="relative flex items-baseline gap-1.5">
                                <motion.span
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.6 }}
                                  className="text-3xl font-bold"
                                  style={{ 
                                    color: '#475569',
                                    textShadow: '0 0 15px rgba(71, 85, 105, 0.15)'
                                  }}
                                >
                                  {slide.content.cost.amount}
                                </motion.span>
                              </div>
                            </motion.div>
                          </div>
                          <p className="text-xs text-slate-700 text-center font-medium">{slide.content.cost.description}</p>
                          <div className="grid grid-cols-2 gap-2">
                            {slide.content.cost.breakdown.map((item, idx) => {
                              const numericValue = parseFloat(item.metric.replace(/[^0-9.]/g, ''));
                              const percentage = item.metric.includes('%') ? numericValue : (item.metric.includes('$') ? 75 : 60);
                              return (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.7 + idx * 0.1 }}
                                  className="p-2.5 bg-white/80 rounded-lg border border-slate-200 shadow-sm"
                                >
                                  <div className="text-base font-bold mb-1.5" style={{ color: '#334155' }}>{item.metric}</div>
                                  {/* Mini Progress Bar */}
                                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden mb-1.5">
                                    <motion.div
                                      initial={{ width: 0 }}
                                      animate={{ width: `${percentage}%` }}
                                      transition={{ delay: 0.8 + idx * 0.1, duration: 0.8 }}
                                      className="h-full rounded-full"
                                      style={{ background: 'linear-gradient(90deg, #475569, #64748b)' }}
                                    />
                                  </div>
                                  <p className="text-[10px] text-slate-600 leading-tight font-medium">{item.label}</p>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>

                      {/* Why Now - Enhanced Visual Comparison */}
                      <div className="relative">
                        {/* Connecting Arrow/Line */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="w-8 h-0.5 bg-gradient-to-r from-cyan-600 to-pink-600"
                          />
                          <ArrowRight className="h-4 w-4 text-pink-600 absolute right-0 top-1/2 transform -translate-y-1/2" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2">
                          {/* Constraints Before - Enhanced */}
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg p-2.5 shadow-sm flex flex-col border border-gray-300 relative overflow-hidden"
                          >
                            {/* Subtle Pattern */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gray-200 rounded-full blur-xl opacity-15" />
                            
                            <div className="relative z-10 flex items-center gap-1.5 mb-2 pb-1.5 border-b-2" style={{ borderBottomColor: '#0891b2' }}>
                              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-cyan-600 to-pink-600 text-white text-[10px] font-bold leading-none">
                                {slide.id}.3A
                              </div>
                              <Clock className="h-3.5 w-3.5" style={{ color: '#0891b2' }} />
                              <h3 className="text-xs font-bold uppercase tracking-tight leading-tight" style={{ background: 'linear-gradient(135deg, #0891b2 0%, #db2777 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                {slide.content.whyNow.constraintsBefore.title}
                              </h3>
                            </div>
                            <div className="relative z-10 space-y-1.5">
                              {slide.content.whyNow.constraintsBefore.items.slice(0, 4).map((item, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.5 + idx * 0.05 }}
                                  className="flex items-start gap-2 p-1.5 rounded bg-white/60"
                                >
                                  <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-gray-400" />
                                  <p className="text-xs text-gray-700 leading-relaxed">{item.split('—')[0]}</p>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>

                          {/* Available Now - Enhanced */}
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="bg-gradient-to-br from-cyan-50 to-pink-50 rounded-lg p-2.5 shadow-sm flex flex-col border border-cyan-300 relative overflow-hidden"
                          >
                            {/* Subtle Pattern */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-300 rounded-full blur-xl opacity-15" />
                            <div className="absolute bottom-0 left-0 w-12 h-12 bg-pink-300 rounded-full blur-lg opacity-15" />
                            
                            <div className="relative z-10 flex items-center gap-1.5 mb-2 pb-1.5 border-b-2" style={{ borderBottomColor: '#db2777' }}>
                              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-pink-600 to-cyan-600 text-white text-[10px] font-bold leading-none">
                                {slide.id}.3B
                              </div>
                              <Zap className="h-3.5 w-3.5" style={{ color: '#db2777' }} />
                              <h3 className="text-xs font-bold uppercase tracking-tight leading-tight" style={{ background: 'linear-gradient(135deg, #db2777 0%, #0891b2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                {slide.content.whyNow.availableNow.title}
                              </h3>
                            </div>
                            <div className="relative z-10 space-y-1.5">
                              {slide.content.whyNow.availableNow.items.slice(0, 4).map((item, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.6 + idx * 0.05 }}
                                  className="flex items-start gap-2 p-1.5 rounded bg-white/70"
                                >
                                  <CheckCircle className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: idx % 2 === 0 ? '#0891b2' : '#db2777' }} />
                                  <p className="text-xs text-gray-800 leading-relaxed font-medium">{item.split('(')[0]}</p>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-3 flex flex-col min-h-0">
                      {/* Top 10 Companies - Visual Grid */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-white rounded-lg p-3 shadow-sm flex flex-col relative overflow-hidden"
                        style={{ maxHeight: '380px' }}
                      >
                        {/* Subtle Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-500 rounded-full blur-3xl" />
                          <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500 rounded-full blur-2xl" />
                        </div>
                        
                        <div className="relative z-10 flex items-center gap-2 mb-2 pb-2 border-b-2" style={{ borderBottomColor: '#0891b2' }}>
                          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-cyan-600 to-pink-600 text-white text-xs font-bold">
                            {slide.id}.4
                          </div>
                          <Network className="h-4 w-4" style={{ color: '#0891b2' }} />
                          <h3 className="text-sm font-bold uppercase tracking-tight" style={{ background: 'linear-gradient(135deg, #0891b2 0%, #db2777 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            Big Players, Big Gaps
                          </h3>
                        </div>
                        <div className="relative z-10 space-y-2 overflow-y-auto pr-1" style={{ maxHeight: '320px' }}>
                          {slide.content.top10Companies.map((company, idx) => {
                            const valuation = parseFloat(company.size.replace(/[^0-9.]/g, ''));
                            const sizeCategory = valuation >= 10 ? 'large' : valuation >= 1 ? 'medium' : 'small';
                            // Positive colors showing market growth opportunity
                            const borderColor = sizeCategory === 'large' ? '#10b981' : sizeCategory === 'medium' ? '#06b6d4' : '#14b8a6';
                            const badgeColor = sizeCategory === 'large' ? 'bg-emerald-100 text-emerald-700' : sizeCategory === 'medium' ? 'bg-cyan-100 text-cyan-700' : 'bg-teal-100 text-teal-700';
                            
                            return (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + idx * 0.03 }}
                                className="p-2.5 rounded-lg border-l-3 bg-white hover:shadow-md transition-shadow"
                                style={{ borderLeftColor: borderColor, borderLeftWidth: '3px' }}
                              >
                                <div className="flex items-start justify-between mb-1">
                                  <span className="text-xs font-bold text-gray-900">{company.name}</span>
                                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${badgeColor}`}>
                                    {company.size}
                                  </span>
                                </div>
                                <p className="text-xs text-gray-700 mb-1 font-medium">{company.focus}</p>
                                <div className="flex items-start gap-1.5">
                                  <TrendingUp className="h-3 w-3 mt-0.5 flex-shrink-0" style={{ color: borderColor }} />
                                  <p className="text-xs text-gray-600 italic">Opportunity: {company.gap}</p>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>

                      {/* Gradient Transition Break */}
                      <div className="relative mt-12 mb-6 flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center">
                          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-50" />
                        </div>
                        <div className="relative flex items-center gap-2 px-4">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-br from-cyan-500 to-pink-500 opacity-60" />
                          <div className="w-16 h-px bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500 opacity-40" />
                          <div className="w-2 h-2 rounded-full bg-gradient-to-br from-pink-500 to-cyan-500 opacity-60" />
                        </div>
                        <div className="absolute inset-0 flex items-center">
                          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-50" />
                        </div>
                      </div>

                      {/* Sections 2 & 3 Side by Side */}
                      <div className="grid grid-cols-2 gap-3 mt-2">
                        {/* Our Novelty - Enhanced */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className="bg-gradient-to-br from-cyan-50/30 to-pink-50/30 rounded-lg p-3 shadow-sm flex flex-col border border-cyan-200/50 relative overflow-hidden"
                        >
                          {/* Subtle Pattern */}
                          <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-300 rounded-full blur-xl opacity-15" />
                          
                          <div className="relative z-10 flex items-center gap-2 mb-2.5 pb-2 border-b-2" style={{ borderBottomColor: '#0891b2' }}>
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-cyan-600 to-pink-600 text-white text-xs font-bold shadow-sm">
                              {slide.id}.5
                            </div>
                            <Rocket className="h-4 w-4" style={{ color: '#0891b2' }} />
                            <h3 className="text-sm font-bold uppercase tracking-tight" style={{ background: 'linear-gradient(135deg, #0891b2 0%, #db2777 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                              {slide.content.ourNovelty.headline}
                            </h3>
                          </div>
                          <div className="relative z-10 space-y-2">
                            {slide.content.ourNovelty.points.map((point, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + idx * 0.1 }}
                                className="flex items-start gap-2 p-2 bg-white/70 rounded-lg border border-slate-200/50"
                              >
                                <div className="flex-shrink-0 mt-0.5">
                                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${idx % 2 === 0 ? 'bg-cyan-100' : 'bg-pink-100'}`}>
                                    <CheckCircle className="h-3.5 w-3.5" style={{ color: idx % 2 === 0 ? '#0891b2' : '#db2777' }} />
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <p className="text-xs font-bold text-gray-900 mb-1">{point.label}</p>
                                  <p className="text-xs text-gray-700 leading-relaxed">{point.detail}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        {/* Why Us - Enhanced */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          className="bg-gradient-to-br from-pink-50/30 to-cyan-50/30 rounded-lg p-3 shadow-sm flex flex-col border border-pink-200/50 relative overflow-hidden"
                        >
                          {/* Subtle Pattern */}
                          <div className="absolute bottom-0 left-0 w-16 h-16 bg-pink-300 rounded-full blur-xl opacity-15" />
                          
                          <div className="relative z-10 flex items-center gap-2 mb-2.5 pb-2 border-b-2" style={{ borderBottomColor: '#db2777' }}>
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-pink-600 to-cyan-600 text-white text-xs font-bold shadow-sm">
                              {slide.id}.6
                            </div>
                            <Users className="h-4 w-4" style={{ color: '#db2777' }} />
                            <h3 className="text-sm font-bold uppercase tracking-tight" style={{ background: 'linear-gradient(135deg, #db2777 0%, #0891b2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                              {slide.content.whyUs.headline}
                            </h3>
                          </div>
                          
                          <div className="relative z-10 flex flex-col space-y-2.5">
                            {/* Market Insights */}
                            <div className="p-2.5 bg-white/70 rounded-lg border border-pink-100/50">
                              <div className="flex items-start gap-2 mb-1.5">
                                <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <Brain className="h-3 w-3" style={{ color: '#ec4899' }} />
                                </div>
                                <p className="text-xs font-bold text-gray-800">Market Insight:</p>
                              </div>
                              <p className="text-xs text-gray-700 leading-relaxed ml-6">
                                {slide.content.whyUs.marketInsights.split('.')[0]}.
                              </p>
                            </div>

                            {/* Understanding */}
                            <div className="pt-2 border-t border-pink-200/50">
                              <div className="flex items-start gap-2 mb-1.5">
                                <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <Target className="h-3 w-3" style={{ color: '#06b6d4' }} />
                                </div>
                                <p className="text-xs font-bold text-gray-800">Our Understanding:</p>
                              </div>
                              <p className="text-xs text-gray-700 italic leading-relaxed ml-6">
                                {slide.content.whyUs.understanding.split('.')[0]}.
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Gradient Transition Break - Bottom */}
                      <div className="relative my-8 flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center">
                          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-50" />
                        </div>
                        <div className="relative flex items-center gap-2 px-4">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-br from-cyan-500 to-pink-500 opacity-60" />
                          <div className="w-16 h-px bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500 opacity-40" />
                          <div className="w-2 h-2 rounded-full bg-gradient-to-br from-pink-500 to-cyan-500 opacity-60" />
                        </div>
                        <div className="absolute inset-0 flex items-center">
                          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-50" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sources Footer */}
                  {slide.content.sources && (
                    <div className="mt-4 pt-3 border-t border-gray-200">
                      <p className="text-xs text-gray-500 italic leading-relaxed">
                        Sources: {slide.content.sources.slice(0, 3).join('; ')}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* FOUNDER & TEAM */}
            {slide.type === 'team' && slide.content && (
              <div className="flex-1 flex flex-col h-full relative bg-white" style={{ height: isFullscreen ? '100vh' : 'calc(100vh - 5rem)' }}>
                {/* Clean Background */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500" />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500" />
                </div>

                <div className="relative z-10 flex flex-col h-full px-6 sm:px-10 py-5">
                  {/* Title - Only Brand Color */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                  >
                    <h1 
                      className={`font-bold mb-2 tracking-tight ${isFullscreen ? 'text-3xl' : 'text-2xl sm:text-3xl'}`}
                      style={{
                        background: 'linear-gradient(135deg, #06b6d4 0%, #ec4899 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {slide.title}
                    </h1>
                    <div className="h-0.5 w-20" style={{ background: 'linear-gradient(to right, #06b6d4, #ec4899)' }} />
                  </motion.div>

                  {/* Main Content Grid - Balanced Layout */}
                  <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-0">
                    {/* Left: Founder */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="flex flex-col"
                    >
                      {/* Founder Card */}
                      <div className="bg-white rounded-lg p-5 border border-gray-300 h-full flex flex-col">
                        <div className="flex items-center gap-2 mb-5 pb-2 border-b-2" style={{ borderBottomColor: '#06b6d4' }}>
                          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-pink-500 text-white text-xs font-bold">
                            {slide.id}.1
                          </div>
                          <Users className="h-4 w-4" style={{ color: '#06b6d4' }} />
                          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-tight">
                            Founder
                          </h3>
                        </div>
                        <div className="flex items-start gap-4 mb-5">
                          <div 
                            className={`rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 ${isFullscreen ? 'w-14 h-14 text-lg' : 'w-14 h-14 text-lg'}`}
                            style={{
                              background: 'linear-gradient(135deg, #06b6d4 0%, #ec4899 100%)'
                            }}
                          >
                            VB
                          </div>
                          <div className="flex-1">
                            <h2 className={`font-bold text-gray-900 mb-1 ${isFullscreen ? 'text-xl' : 'text-lg'}`}>{slide.content.founder.name}</h2>
                            <p className={`text-gray-600 mb-2 ${isFullscreen ? 'text-base' : 'text-sm'}`}>{slide.content.founder.role}</p>
                            {slide.content.founder.headline && (
                              <p className={`text-gray-700 italic border-l-2 pl-3 py-1.5 ${isFullscreen ? 'text-sm' : 'text-xs'}`}
                                style={{ borderLeftColor: '#06b6d4' }}
                              >
                                {slide.content.founder.headline}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Key Highlights - Clean Professional Style */}
                        {slide.content.founder.highlights && (
                          <div className="mb-5">
                            <div className="space-y-4">
                              {slide.content.founder.highlights.map((highlight, idx) => {
                                return (
                                  <div
                                    key={idx}
                                    className="p-3 bg-gray-50 rounded border-l-2"
                                    style={{ 
                                      borderLeftColor: idx % 2 === 0 ? '#06b6d4' : '#ec4899',
                                      borderLeftWidth: '3px'
                                    }}
                                  >
                                    {/* Designation - Most Prominent */}
                                    <div className={`font-bold text-gray-900 mb-1 ${isFullscreen ? 'text-base' : 'text-sm'}`}>
                                      {highlight.designation}
                                    </div>
                                    {/* Company Name */}
                                    <div className={`font-semibold text-gray-700 mb-1.5 ${isFullscreen ? 'text-sm' : 'text-xs'}`}>
                                      {highlight.company}
                                    </div>
                                    {/* Details */}
                                    <div className={`text-gray-600 leading-relaxed ${isFullscreen ? 'text-xs' : 'text-xs'}`}>
                                      {highlight.details}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Education - Moved Up */}
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-1 h-5 rounded-full" style={{ background: 'linear-gradient(to bottom, #06b6d4, #ec4899)' }} />
                            <h3 className={`font-semibold text-gray-500 uppercase tracking-wider ${isFullscreen ? 'text-xs' : 'text-xs'}`}>
                              Education
                            </h3>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {slide.content.founder.education.map((edu, idx) => (
                              <div
                                key={idx}
                                className={`p-2 rounded border ${edu.highlight ? 'bg-gray-100 border-cyan-500' : 'bg-white border-gray-300'}`}
                                style={edu.highlight ? { borderWidth: '2px', borderColor: '#06b6d4' } : {}}
                              >
                                <div className={`font-bold mb-0.5 ${isFullscreen ? 'text-sm' : 'text-xs'}`}>
                                  {edu.highlight ? (
                                    <span className="text-gray-900">{edu.institution}</span>
                                  ) : (
                                    <span className="text-gray-700">{edu.institution}</span>
                                  )}
                                </div>
                                <div className={`text-gray-600 ${isFullscreen ? 'text-xs' : 'text-xs'}`}>{edu.degree}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    </motion.div>

                    {/* Right: Clean Card-Based Representation */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex flex-col h-full"
                    >
                      {/* Card Grid */}
                      <div className="bg-white rounded-lg border border-gray-200 shadow-sm flex-1 flex flex-col p-4">
                        {/* Section Header */}
                        <div className="flex items-center gap-2 mb-5 pb-2 border-b-2 mt-1" style={{ borderBottomColor: '#06b6d4' }}>
                          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-pink-500 text-white text-xs font-bold">
                            {slide.id}.2
                          </div>
                          <Users className="h-4 w-4" style={{ color: '#06b6d4' }} />
                          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-tight">
                            Team Overview
                          </h3>
                        </div>

                        {/* Clean Card Grid - Scrollable */}
                        <div className="flex-1 overflow-y-auto space-y-7 pr-2">
                          {/* Core Team Card */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200"
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <Users className="w-4 h-4 text-gray-700" />
                              <h4 className="font-bold text-gray-800 text-base">Core Team</h4>
                            </div>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              Cross-functional team with deep enterprise experience: US and European markets, international operations, and proven track record in building scalable systems
                            </p>
                          </motion.div>

                          {/* Education Card */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200"
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <GraduationCap className="w-4 h-4 text-blue-700" />
                              <h4 className="font-bold text-gray-800 text-base">Education</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {slide.content.core.colleges.map((college, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1.5 bg-white rounded-md text-xs font-medium text-gray-700 border border-blue-200"
                                >
                                  {college}
                                </span>
                              ))}
                            </div>
                          </motion.div>

                          {/* Work Experience Card */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-200"
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <Briefcase className="w-4 h-4 text-indigo-700" />
                              <h4 className="font-bold text-gray-800 text-base">Work Experience</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {slide.content.core.companies.map((company, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1.5 bg-white rounded-md text-xs font-medium text-gray-700 border border-indigo-200"
                                >
                                  {company}
                                </span>
                              ))}
                            </div>
                          </motion.div>

                          {/* Advisors Card */}
                          {slide.content.advisors && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                              className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg p-4 border border-slate-200"
                            >
                              <div className="flex items-center gap-2 mb-3">
                                <Award className="w-4 h-4 text-slate-700" />
                                <h4 className="font-bold text-gray-800 text-base">Advisory & Mentors</h4>
                              </div>
                              <div className="space-y-2">
                                {slide.content.advisors.members.map((member, idx) => (
                                  <div
                                    key={idx}
                                    className="px-3 py-2 bg-white rounded-md text-xs text-gray-700 border border-slate-200"
                                  >
                                    <span className="font-semibold">{member.role}</span>
                                    {member.org && (
                                      <span className="text-gray-500 ml-2">• {member.org}</span>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Right Bottom Corner Element - Subtle Visual */}
                  <div className="absolute bottom-4 right-6 flex items-center gap-2 opacity-60">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                      <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>
                    <span className={`text-gray-400 font-light ${isFullscreen ? 'text-xs' : 'text-[10px]'}`}>
                      Building the future of enterprise decision-making
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* THE PROBLEM */}
            {slide.type === 'problem' && slide.content && (
              <div className="flex-1 flex flex-col h-full relative bg-white" style={{ height: isFullscreen ? '100vh' : 'calc(100vh - 5rem)' }}>
                {/* Clean Background */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500" />
                </div>

                <div className="relative z-10 flex flex-col h-full px-6 sm:px-8 py-4">
                  {/* Narrative Title - Brand Colors */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4"
                  >
                    <h1 
                      className={`font-bold mb-2 tracking-tight ${isFullscreen ? 'text-3xl' : 'text-2xl sm:text-3xl'}`}
                      style={{
                        background: 'linear-gradient(135deg, #06b6d4 0%, #ec4899 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {slide.title}
                    </h1>
                    <div className="h-0.5 w-20" style={{ background: 'linear-gradient(to right, #06b6d4, #ec4899)' }} />
                  </motion.div>

                  {/* Main Content - Spacious Visual Layout */}
                  <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left: 4 Problem Sections - Compact with McKinsey-Style Charts */}
                    <div className="lg:col-span-7 flex flex-col">
                      <div className="grid grid-cols-2 gap-2.5">
                        {slide.content.coreProblems?.map((problem, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className={`bg-white rounded-lg p-3 shadow-sm border-l-4 relative overflow-hidden ${idx >= 2 ? 'mt-6' : ''}`}
                            style={{ borderLeftColor: problem.color }}
                          >
                            {/* Section Number */}
                            <div className="absolute top-2 right-2 z-20">
                              <span className="text-[10px] font-bold text-gray-500">2.{idx + 1}</span>
                            </div>
                            
                            {/* Header: Title, Metric, One Statement */}
                            <div className="mb-3 relative z-10">
                              <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">{problem.title}</h3>
                              <div className="text-2xl font-bold leading-none mb-2" style={{ color: problem.color }}>
                                {problem.metric}
                              </div>
                              <p className="text-xs text-gray-600 leading-tight font-medium">{problem.label}</p>
                            </div>
                            
                            {/* Contextual Infographics - Meaningful Representations - Smaller */}
                            <div className="mb-2 relative z-10 flex items-center justify-center" style={{ minHeight: '70px' }}>
                              {problem.title === "Decision Latency Crisis" && (
                                <svg viewBox="0 0 200 100" className="w-full h-full">
                                  {/* Timeline with delay */}
                                  <line x1="20" y1="50" x2="180" y2="50" stroke="#e5e7eb" strokeWidth="3" />
                                  {/* Start point */}
                                  <circle cx="30" cy="50" r="6" fill="#10b981" />
                                  <text x="30" y="40" textAnchor="middle" className="text-[8px] fill-gray-600">Data</text>
                                  {/* Needed decision point */}
                                  <circle cx="70" cy="50" r="6" fill="#64748b" />
                                  <text x="70" y="40" textAnchor="middle" className="text-[8px] fill-gray-600 font-medium">2hr</text>
                                  {/* Actual decision point (delayed) */}
                                  <motion.circle
                                    cx="150"
                                    cy="50"
                                    r="8"
                                    fill="#64748b"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: idx * 0.2 + 0.3, duration: 0.5 }}
                                  />
                                  <text x="150" y="40" textAnchor="middle" className="text-[8px] fill-gray-600 font-medium">4.2d</text>
                                  {/* Delay arrow */}
                                  <motion.path
                                    d="M 75 50 L 145 50"
                                    stroke="#94a3b8"
                                    strokeWidth="2"
                                    strokeDasharray="4,2"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ delay: idx * 0.2 + 0.5, duration: 0.8 }}
                                  />
                                  {/* Person icon waiting - Muted black */}
                                  <motion.g
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: idx * 0.2 + 0.7 }}
                                  >
                                    <circle cx="110" cy="30" r="8" fill="#475569" opacity="0.4" />
                                    <rect x="106" y="38" width="8" height="12" rx="2" fill="#475569" opacity="0.4" />
                                  </motion.g>
                                </svg>
                              )}
                              
                              {problem.title === "Institutional Amnesia" && (
                                <svg viewBox="0 0 200 100" className="w-full h-full">
                                  {/* Hexagon shape for archive/memory loss */}
                                  <motion.polygon
                                    points="100,20 130,35 130,65 100,80 70,65 70,35"
                                    fill="none"
                                    stroke={problem.color}
                                    strokeWidth="2.5"
                                    opacity="0.3"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ delay: idx * 0.2 + 0.3, duration: 1 }}
                                  />
                                  {/* Memory fragments - hexagons instead of circles */}
                                  {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
                                    const angle = (i / 8) * 2 * Math.PI;
                                    const x = 100 + 25 * Math.cos(angle);
                                    const y = 50 + 25 * Math.sin(angle);
                                    const isFaded = i < 7; // 7 out of 8 = 87.5% faded
                                    const size = isFaded ? 3 : 4;
                                    return (
                                      <motion.polygon
                                        key={i}
                                        points={`${x},${y - size} ${x + size * 0.866},${y - size * 0.5} ${x + size * 0.866},${y + size * 0.5} ${x},${y + size} ${x - size * 0.866},${y + size * 0.5} ${x - size * 0.866},${y - size * 0.5}`}
                                        fill={problem.color}
                                        opacity={isFaded ? 0.15 : 0.8}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: idx * 0.2 + 0.3 + i * 0.1 }}
                                      />
                                    );
                                  })}
                                  {/* Faded document icon */}
                                  <motion.g
                                    initial={{ opacity: 0.3 }}
                                    animate={{ opacity: 0.15 }}
                                    transition={{ delay: idx * 0.2 + 0.5 }}
                                  >
                                    <rect x="140" y="60" width="30" height="25" rx="2" fill={problem.color} opacity="0.2" />
                                    <line x1="145" y1="68" x2="165" y2="68" stroke={problem.color} strokeWidth="1" opacity="0.3" />
                                    <line x1="145" y1="73" x2="160" y2="73" stroke={problem.color} strokeWidth="1" opacity="0.3" />
                                    <line x1="145" y1="78" x2="155" y2="78" stroke={problem.color} strokeWidth="1" opacity="0.3" />
                                  </motion.g>
                                </svg>
                              )}
                              
                              {problem.title === "Data Fragmentation" && (
                                <svg viewBox="0 0 200 100" className="w-full h-full">
                                  {/* Disconnected nodes/silos */}
                                  {[
                                    { x: 30, y: 30, label: "CRM" },
                                    { x: 80, y: 20, label: "ERP" },
                                    { x: 130, y: 30, label: "BI" },
                                    { x: 170, y: 25, label: "..." },
                                    { x: 40, y: 70, label: "Email" },
                                    { x: 90, y: 75, label: "Excel" },
                                    { x: 140, y: 70, label: "Slack" }
                                  ].map((node, i) => (
                                    <g key={i}>
                                      <motion.circle
                                        cx={node.x}
                                        cy={node.y}
                                        r="12"
                                        fill={problem.color}
                                        opacity="0.15"
                                        stroke={problem.color}
                                        strokeWidth="1.5"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: idx * 0.2 + 0.3 + i * 0.1 }}
                                      />
                                      <text x={node.x} y={node.y + 4} textAnchor="middle" className="text-[7px] fill-gray-600 font-semibold">
                                        {node.label}
                                      </text>
                                    </g>
                                  ))}
                                  {/* Broken connection lines */}
                                  <motion.line
                                    x1="42"
                                    y1="30"
                                    x2="68"
                                    y2="20"
                                    stroke={problem.color}
                                    strokeWidth="1.5"
                                    strokeDasharray="3,2"
                                    opacity="0.2"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ delay: idx * 0.2 + 0.8, duration: 0.5 }}
                                  />
                                  <motion.line
                                    x1="92"
                                    y1="20"
                                    x2="118"
                                    y2="30"
                                    stroke={problem.color}
                                    strokeWidth="1.5"
                                    strokeDasharray="3,2"
                                    opacity="0.2"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ delay: idx * 0.2 + 0.9, duration: 0.5 }}
                                  />
                                </svg>
                              )}
                              
                              {problem.title === "Decision Quality Gap" && (
                                <svg viewBox="0 0 200 100" className="w-full h-full">
                                  {/* Target with hits and misses */}
                                  <circle cx="100" cy="50" r="35" fill="none" stroke="#e5e7eb" strokeWidth="2" />
                                  <circle cx="100" cy="50" r="25" fill="none" stroke="#e5e7eb" strokeWidth="2" />
                                  <circle cx="100" cy="50" r="15" fill="none" stroke="#e5e7eb" strokeWidth="2" />
                                  {/* Success hits (48%) - Muted colors */}
                                  {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
                                    const angle = (i / 8) * 2 * Math.PI;
                                    const x = 100 + 20 * Math.cos(angle);
                                    const y = 50 + 20 * Math.sin(angle);
                                    return (
                                      <motion.circle
                                        key={i}
                                        cx={x}
                                        cy={y}
                                        r="4"
                                        fill="#5eead4"
                                        opacity="0.5"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: idx * 0.2 + 0.3 + i * 0.05 }}
                                      />
                                    );
                                  })}
                                  {/* Failed misses (52%) - Muted colors */}
                                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
                                    const angle = (i / 11) * 2 * Math.PI + 0.3;
                                    const x = 100 + 30 * Math.cos(angle);
                                    const y = 50 + 30 * Math.sin(angle);
                                    return (
                                      <motion.circle
                                        key={i}
                                        cx={x}
                                        cy={y}
                                        r="3"
                                        fill="#f59e0b"
                                        opacity="0.4"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: idx * 0.2 + 0.5 + i * 0.05 }}
                                      />
                                    );
                                  })}
                                  {/* Split indicator */}
                                  <line x1="100" y1="15" x2="100" y2="85" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2,2" />
                                  <text x="50" y="45" textAnchor="middle" className="text-[8px] fill-gray-500">48% Hit</text>
                                  <text x="150" y="55" textAnchor="middle" className="text-[8px] fill-gray-500">52% Miss</text>
                                </svg>
                              )}
                            </div>
                            
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Market Context - Below Sections 2.3 & 2.4 */}
                      {slide.content.marketContext && (
                        <div className="mt-4 inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-50/50 to-pink-50/50 border border-cyan-200/50">
                          <span className="text-xs font-bold text-gray-800">
                            Market: <span className="text-cyan-600">{slide.content.marketContext.size}</span> {slide.content.marketContext.timeframe}
                          </span>
                          <span className="text-xs text-gray-600">({slide.content.marketContext.cagr} CAGR)</span>
                          <span className="text-[10px] text-gray-600 italic">• {slide.content.marketContext.insight}</span>
                        </div>
                      )}
                    </div>

                    {/* Right: Visual Story - The Broken Cycle */}
                    <div className="lg:col-span-5 flex flex-col">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-xl p-6 shadow-lg border-2 flex-1 flex flex-col"
                        style={{ borderColor: '#06b6d4' }}
                      >
                        <div className="mb-4">
                          <h3 className="text-sm font-bold text-gray-900 mb-1.5">2.5 The Broken Cycle</h3>
                          <p className="text-[11px] text-gray-600 leading-snug mb-2">{slide.content.decisionCycle?.reality}</p>
                        </div>
                        
                        {/* Visual Cycle Flow - Simple McKinsey Style */}
                        <div className="mb-6 flex-shrink-0">
                          <svg viewBox="0 0 500 240" className="w-full h-full" style={{ maxHeight: '240px', minHeight: '240px' }}>
                            <defs>
                              <marker id={`arrow-loop-${slide.id}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                <path d="M0,0 L6,3 L0,6 Z" fill="#64748b" />
                              </marker>
                              <marker id={`arrow-broken-loop-${slide.id}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8" opacity="0.6" />
                              </marker>
                            </defs>
                            
                            {/* Circular Loop Path - Simple Circles */}
                            {slide.content.decisionCycle?.steps.map((step, idx) => {
                              const totalSteps = slide.content.decisionCycle.steps.length;
                              const angle = (idx / totalSteps) * 2 * Math.PI - Math.PI / 2; // Start from top
                              const centerX = 250;
                              const centerY = 120;
                              const radiusX = 180; // Horizontal radius
                              const radiusY = 80; // Vertical radius (elliptical)
                              
                              const x = centerX + radiusX * Math.cos(angle);
                              const y = centerY + radiusY * Math.sin(angle);
                              const isBroken = step === 'Forgotten';
                              const isLast = idx === totalSteps - 1;
                              
                              // Calculate next position for arrow
                              const nextAngle = ((idx + 1) / totalSteps) * 2 * Math.PI - Math.PI / 2;
                              const nextX = centerX + radiusX * Math.cos(nextAngle);
                              const nextY = centerY + radiusY * Math.sin(nextAngle);
                              
                              // Calculate arrow path
                              const dx = nextX - x;
                              const dy = nextY - y;
                              const distance = Math.sqrt(dx * dx + dy * dy);
                              const arrowStartX = x + (dx / distance) * 38;
                              const arrowStartY = y + (dy / distance) * 38;
                              const arrowEndX = nextX - (dx / distance) * 38;
                              const arrowEndY = nextY - (dy / distance) * 38;
                              
                              // Muted professional colors
                              const nodeColors = isBroken 
                                ? "#cbd5e1" // Light gray for broken
                                : idx % 2 === 0 
                                  ? "#64748b" // Slate gray
                                  : "#475569"; // Darker slate
                              
                              return (
                                <g key={`${step}-${idx}`}>
                                  {/* Simple Circle - McKinsey Style */}
                                  <motion.circle
                                    cx={x}
                                    cy={y}
                                    r="32"
                                    fill={nodeColors}
                                    stroke="#ffffff"
                                    strokeWidth="2"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                                  />
                                  
                                  {/* Text Inside Circle */}
                                  <motion.text
                                    x={x}
                                    y={y + 3}
                                    textAnchor="middle"
                                    className="text-[10px] fill-white font-semibold"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: idx * 0.1 + 0.15 }}
                                  >
                                    <tspan x={x} dy="0">{step.length > 10 ? step.substring(0, 9) + '...' : step}</tspan>
                                  </motion.text>
                                  
                                  {/* Arrow/Link to Next - Subtle */}
                                  {!isLast && (
                                    <motion.line
                                      x1={arrowStartX}
                                      y1={arrowStartY}
                                      x2={arrowEndX}
                                      y2={arrowEndY}
                                      stroke={isBroken ? "#cbd5e1" : "#64748b"}
                                      strokeWidth="2.5"
                                      strokeDasharray={isBroken ? "6,4" : "0"}
                                      markerEnd={isBroken ? `url(#arrow-broken-loop-${slide.id})` : `url(#arrow-loop-${slide.id})`}
                                      opacity={isBroken ? 0.4 : 0.6}
                                      initial={{ pathLength: 0 }}
                                      animate={{ pathLength: 1 }}
                                      transition={{ delay: idx * 0.1 + 0.2, duration: 0.4 }}
                                    />
                                  )}
                                </g>
                              );
                            })}
                            
                            {/* Center - Simple Text */}
                            <motion.text
                              x="250"
                              y="125"
                              textAnchor="middle"
                              className="text-xs fill-gray-500 font-medium"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.7 }}
                            >
                              <tspan x="250" dy="0">No Memory</tspan>
                            </motion.text>
                          </svg>
                        </div>
                        
                        {/* Key Message - Unique to Right Side - Compact */}
                        <div className="space-y-3 mt-4">
                            <div className="bg-gray-50 rounded-lg p-3 border-l-3 border-gray-400">
                              <h4 className="text-sm font-bold text-gray-900 mb-1.5">The Core Problem</h4>
                              <p className="text-xs text-gray-700 leading-snug">
                                Every decision cycle starts from scratch—no memory of why decisions were made or what worked.
                              </p>
                            </div>
                            
                            <div className="bg-gray-50 rounded-lg p-3 border-l-3 border-gray-400">
                              <h4 className="text-sm font-bold text-gray-900 mb-1.5">The Impact</h4>
                              <p className="text-xs text-gray-700 leading-snug">
                                Affects all organizations—Fortune 500 companies, governments, and industries repeat mistakes without historical context.
                              </p>
                            </div>
                            
                            <div className="bg-gray-50 rounded-lg p-3 border-l-3 border-gray-400">
                              <h4 className="text-sm font-bold text-gray-900 mb-1.5">Why It Matters</h4>
                              <p className="text-xs text-gray-700 leading-snug">
                                Without decision memory, organizations can't learn, improve, or scale. Each decision is isolated.
                              </p>
                            </div>
                          </div>
                          
                          <p className="text-xs font-semibold text-gray-700 italic text-center mt-3 pt-2 border-t border-gray-200">
                            "{slide.content.tagline}"
                          </p>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Footer - Sources - Always Visible - Compact */}
                  {slide.content.sources && (
                    <div className="mt-4 pt-3 pb-2 border-t-2 border-gray-300 bg-gray-50 rounded px-3 py-2">
                      <p className="text-xs text-gray-600 leading-snug">
                        <span className="font-semibold text-gray-700 mr-1.5">Sources:</span>
                        <span>{slide.content.sources.join(' • ')}</span>
                      </p>
                    </div>
                  )}

                </div>
              </div>
            )}

            {/* CURRENT STATE FRAMEWORK */}
            {slide.type === 'framework' && slide.content && (
              <div className="flex-1 flex flex-col h-full relative bg-white" style={{ height: isFullscreen ? '100vh' : 'calc(100vh - 5rem)' }}>
                {/* Enhanced Background with Muted Visual Layers */}
                <div className="absolute inset-0 z-0">
                  {/* Base gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
                  
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500" />
                  
                  {/* Subtle geometric patterns - Muted */}
                  <div className="absolute inset-0 opacity-[0.03]">
                    {/* Diagonal lines pattern */}
                    <svg className="w-full h-full" style={{ pointerEvents: 'none' }}>
                      <defs>
                        <pattern id={`diagonalPattern-${slide.id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                          <line x1="0" y1="0" x2="40" y2="40" stroke="#64748b" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#diagonalPattern-${slide.id})`} />
                    </svg>
                  </div>
                  
                  {/* Subtle gradient overlays - Muted colors */}
                  <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-cyan-50/20 via-transparent to-transparent opacity-30" />
                  <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-pink-50/20 via-transparent to-transparent opacity-30" />
                  
                  {/* Subtle circular blurs - Muted */}
                  <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-200 rounded-full blur-3xl opacity-5" />
                  <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-5" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-200 rounded-full blur-3xl opacity-3" />
                  
                  {/* Subtle grid pattern - Very muted */}
                  <div className="absolute inset-0 opacity-[0.02]">
                    <svg className="w-full h-full" style={{ pointerEvents: 'none' }}>
                      <defs>
                        <pattern id={`gridPattern-${slide.id}`} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#94a3b8" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#gridPattern-${slide.id})`} />
                    </svg>
                  </div>
                </div>

                <div className="relative z-10 flex flex-col h-full px-6 sm:px-8 py-4">
                  {/* Narrative Title - Brand Colors */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4"
                  >
                    <h1 
                      className={`font-bold mb-2 tracking-tight ${isFullscreen ? 'text-3xl' : 'text-2xl sm:text-3xl'}`}
                      style={{
                        background: 'linear-gradient(135deg, #06b6d4 0%, #ec4899 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {slide.title}
                    </h1>
                    <div className="h-0.5 w-20" style={{ background: 'linear-gradient(to right, #06b6d4, #ec4899)' }} />
                    {slide.content.narrative && (
                      <p className="text-sm text-gray-600 mt-2 italic max-w-3xl">{slide.content.narrative}</p>
                    )}
                  </motion.div>

                  {/* Main Content - Current vs Desired State */}
                  <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 relative">
                    {/* Current State - Left Column */}
                    <div className="lg:col-span-5 flex flex-col">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-xl p-5 shadow-lg border-l-4 flex-1 flex flex-col"
                        style={{ borderLeftColor: '#ef4444' }}
                      >
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                              <span className="text-xs font-bold text-red-600">4.1</span>
                            </div>
                            <h2 className="text-lg font-bold text-gray-900">{slide.content.current.title}</h2>
                          </div>
                        </div>
                        
                        <div className="flex-1 space-y-3 overflow-y-auto pr-2">
                          {slide.content.current.problems?.map((problem, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="bg-gradient-to-br from-red-50/50 to-orange-50/30 rounded-lg p-3 border border-red-100"
                            >
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="text-sm font-bold text-gray-900">{problem.issue}</h3>
                                <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded">{problem.metric}</span>
                              </div>
                              <p className="text-xs text-gray-700 mb-1.5">{problem.impact}</p>
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] text-gray-600 font-medium">{problem.cost}</span>
                                {/* Mini Visual Indicator */}
                                <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                                  <motion.div
                                    className="h-full bg-red-500"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(idx + 1) * 15}%` }}
                                    transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                                  />
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Summary Footer */}
                        <div className="mt-4 pt-3 border-t border-red-200">
                          <p className="text-xs font-bold text-red-700 text-center">{slide.content.current.summary}</p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Transition Arrow/Flow - Center */}
                    <div className="lg:col-span-2 flex items-center justify-center relative z-20">
                      <div className="flex flex-col items-center gap-2">
                        {/* Animated Arrow */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                          className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 via-pink-500 to-cyan-500 flex items-center justify-center shadow-lg"
                        >
                          <ArrowRight className="h-6 w-6 text-white" />
                        </motion.div>
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Transform</span>
                      </div>
                    </div>

                    {/* Desired State - Right Column */}
                    <div className="lg:col-span-5 flex flex-col">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-xl p-5 shadow-lg border-l-4 flex-1 flex flex-col"
                        style={{ borderLeftColor: '#06b6d4' }}
                      >
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center">
                              <span className="text-xs font-bold text-cyan-600">4.2</span>
                            </div>
                            <h2 className="text-lg font-bold text-gray-900">{slide.content.desired.title}</h2>
                          </div>
                        </div>
                        
                        <div className="flex-1 space-y-3 overflow-y-auto pr-2">
                          {slide.content.desired.solutions?.map((solution, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 + 0.3 }}
                              className="bg-gradient-to-br from-cyan-50/50 to-pink-50/30 rounded-lg p-3 border border-cyan-100"
                            >
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="text-sm font-bold text-gray-900">{solution.capability}</h3>
                                <span className="text-xs font-bold text-cyan-600 bg-cyan-100 px-2 py-0.5 rounded">{solution.metric}</span>
                              </div>
                              <p className="text-xs text-gray-700 mb-1.5">{solution.impact}</p>
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] text-gray-600 font-medium">{solution.value}</span>
                                {/* Mini Visual Indicator */}
                                <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                                  <motion.div
                                    className="h-full bg-gradient-to-r from-cyan-500 to-pink-500"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${85 + idx * 3}%` }}
                                    transition={{ delay: idx * 0.1 + 0.5, duration: 0.5 }}
                                  />
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Summary Footer */}
                        <div className="mt-4 pt-3 border-t border-cyan-200">
                          <p className="text-xs font-bold text-cyan-700 text-center">{slide.content.desired.summary}</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Transformation Metrics - Bottom Section */}
                  {slide.content.transformationMetrics && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="mt-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200"
                    >
                      <h3 className="text-sm font-bold text-gray-900 mb-3 text-center">4.3 Transformation Metrics</h3>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                        {slide.content.transformationMetrics.map((metric, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.9 + idx * 0.1 }}
                            className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm"
                          >
                            <p className="text-xs font-bold text-gray-900 mb-2">{metric.metric}</p>
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-[10px] text-red-600 font-medium">{metric.current}</span>
                              <ArrowRight className="h-3 w-3 text-gray-400" />
                              <span className="text-[10px] text-cyan-600 font-medium">{metric.desired}</span>
                            </div>
                            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-red-500 via-pink-500 to-cyan-500"
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ delay: 1 + idx * 0.1, duration: 0.8 }}
                              />
                            </div>
                            <p className="text-[10px] text-gray-600 mt-1 font-medium text-center">{metric.improvement}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Sources Footer */}
                  {slide.content.sources && (
                    <div className="mt-3 pt-2 border-t border-gray-200">
                      <p className="text-[9px] text-gray-500 text-center italic">
                        Sources: {slide.content.sources.slice(0, 2).join(' • ')}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* THE SOLUTION */}
            {slide.type === 'solution' && slide.content && slide.content.layers && (
              <div className="flex-1 flex flex-col h-full relative bg-white" style={{ height: isFullscreen ? '100vh' : 'calc(100vh - 5rem)' }}>
                {/* Enhanced Background with Muted Visual Layers */}
                <div className="absolute inset-0 z-0">
                  {/* Base gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
                  
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500" />
                  
                  {/* Subtle geometric patterns - Muted */}
                  <div className="absolute inset-0 opacity-[0.03]">
                    <svg className="w-full h-full" style={{ pointerEvents: 'none' }}>
                      <defs>
                        <pattern id={`diagonalPattern-solution-${slide.id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                          <line x1="0" y1="0" x2="40" y2="40" stroke="#64748b" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#diagonalPattern-solution-${slide.id})`} />
                    </svg>
                  </div>
                  
                  {/* Subtle gradient overlays - Muted colors */}
                  <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-cyan-50/20 via-transparent to-transparent opacity-30" />
                  <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-pink-50/20 via-transparent to-transparent opacity-30" />
                  
                  {/* Subtle circular blurs - Muted */}
                  <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-200 rounded-full blur-3xl opacity-5" />
                  <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-5" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-200 rounded-full blur-3xl opacity-3" />
                  
                  {/* Subtle grid pattern - Very muted */}
                  <div className="absolute inset-0 opacity-[0.02]">
                    <svg className="w-full h-full" style={{ pointerEvents: 'none' }}>
                      <defs>
                        <pattern id={`gridPattern-solution-${slide.id}`} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#94a3b8" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#gridPattern-solution-${slide.id})`} />
                    </svg>
                  </div>
                </div>

                <div className="relative z-10 flex flex-col h-full px-6 sm:px-8 py-4">
              {/* Narrative Title - Brand Colors - Compact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-3"
              >
                <h1 
                  className={`font-bold mb-1 tracking-tight ${isFullscreen ? 'text-2xl' : 'text-xl sm:text-2xl'}`}
                  style={{
                    background: 'linear-gradient(135deg, #06b6d4 0%, #ec4899 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {slide.title}
                </h1>
                <div className="h-0.5 w-20" style={{ background: 'linear-gradient(to right, #06b6d4, #ec4899)' }} />
                <p className="text-xs text-gray-600 mt-1 italic max-w-3xl">
                  Four integrated layers that transform data chaos into decision clarity—from ingestion to learning.
                </p>
              </motion.div>

                  {/* Main Content - 4 Layers with Visual Flow */}
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    {slide.content.layers.map((layer, idx) => {
                      const icons = [Database, Brain, Layers, GitBranch];
                      const Icon = icons[idx];
                      const isLast = idx === slide.content.layers.length - 1;
                      
                      // Distinct brand color variants for each layer
                      const layerColors = [
                        { primary: '#0891b2', secondary: '#06b6d4', light: '#e0f2fe', name: 'cyan' },      // Layer 1: Data Ingestion
                        { primary: '#db2777', secondary: '#ec4899', light: '#fce7f3', name: 'pink' },   // Layer 2: Causal Engine
                        { primary: '#0d9488', secondary: '#14b8a6', light: '#ccfbf1', name: 'teal' },    // Layer 3: Decision Canvas
                        { primary: '#a855f7', secondary: '#c084fc', light: '#f3e8ff', name: 'purple' }   // Layer 4: Learning Loop
                      ];
                      const colors = layerColors[idx];
                      
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1, duration: 0.4 }}
                          className="bg-white rounded-xl p-3 shadow-lg border-l-4 relative overflow-hidden"
                          style={{ borderLeftColor: colors.primary, borderLeftWidth: '4px' }}
                        >
                          {/* Section Number */}
                          <div className="absolute top-4 right-4 z-10">
                            <div 
                              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[11px] font-bold shadow-md"
                              style={{ 
                                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`
                              }}
                            >
                              5.{idx + 1}
                            </div>
                          </div>

                          {/* Subtle Background Pattern - McKinsey Style */}
                          <div className="absolute inset-0 opacity-[0.02]" style={{ pointerEvents: 'none' }}>
                            <svg className="w-full h-full">
                              <defs>
                                <pattern id={`layerPattern-${slide.id}-${idx}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                  <circle cx="20" cy="20" r="1.5" fill={colors.primary} />
                                </pattern>
                              </defs>
                              <rect width="100%" height="100%" fill={`url(#layerPattern-${slide.id}-${idx})`} />
                            </svg>
                          </div>

                          {/* Content */}
                          <div className="relative z-10 flex flex-col h-full">
                            {/* Header with Icon - More Compact */}
                            <div className="flex items-center gap-2 mb-2">
                              <div 
                                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm"
                                style={{ 
                                  backgroundColor: colors.light
                                }}
                              >
                                <Icon 
                                  className="h-5 w-5" 
                                  style={{ color: colors.primary }}
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-sm font-bold text-gray-900 leading-tight" style={{ color: colors.primary }}>{layer.name}</h3>
                              </div>
                            </div>

                            {/* Visual Storytelling Diagram - CENTERPIECE - Reduced Size */}
                            <div className="flex-1 mb-2 min-h-[160px] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-lg p-3 border" style={{ borderColor: colors.primary, borderWidth: '1.5px', borderStyle: 'solid' }}>
                              <svg viewBox="0 0 400 180" className="w-full h-full max-h-[160px]">
                                <defs>
                                  <marker id={`arrowhead-${slide.id}-${idx}`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                                    <path d="M0,0 L8,4 L0,8 Z" fill={colors.primary} opacity="0.8" />
                                  </marker>
                                  <linearGradient id={`gradient-${slide.id}-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor={colors.primary} stopOpacity="0.25" />
                                    <stop offset="100%" stopColor={colors.secondary} stopOpacity="0.1" />
                                  </linearGradient>
                                  <filter id={`shadow-${slide.id}-${idx}`}>
                                    <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                                    <feOffset dx="1" dy="1" result="offsetblur" />
                                    <feComponentTransfer>
                                      <feFuncA type="linear" slope="0.3" />
                                    </feComponentTransfer>
                                    <feMerge>
                                      <feMergeNode />
                                      <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                  </filter>
                                </defs>
                                
                                {idx === 0 && (
                                  <>
                                    {/* Data Ingestion Story: Multiple Sources → Unified Layer - Spacious Layout */}
                                    {/* Source Systems - Left Side, Well Spaced */}
                                    <g>
                                      {['CRM', 'ERP', 'BI', 'Files', 'APIs'].map((source, i) => (
                                        <g key={i}>
                                          <rect x="20" y={25 + i * 28} width="55" height="22" rx="4" fill={colors.primary} opacity="0.2" stroke={colors.primary} strokeWidth="2" />
                                          <text x="47.5" y={39 + i * 28} textAnchor="middle" className="text-[11px] fill-gray-900 font-bold">{source}</text>
                                        </g>
                                      ))}
                                    </g>
                                    {/* More sources indicator - Below sources, moved down */}
                                    <circle cx="47.5" cy="165" r="7" fill={colors.primary} opacity="0.4" />
                                    <text x="47.5" y="169" textAnchor="middle" className="text-[10px] fill-gray-800 font-bold">+5K</text>
                                    
                                    {/* Flow arrows - Horizontal, Well Spaced */}
                                    <path d="M 80 36 L 140 36" stroke={colors.primary} strokeWidth="3" markerEnd={`url(#arrowhead-${slide.id}-${idx})`} opacity="0.7" />
                                    <path d="M 80 64 L 140 64" stroke={colors.primary} strokeWidth="3" markerEnd={`url(#arrowhead-${slide.id}-${idx})`} opacity="0.7" />
                                    <path d="M 80 92 L 140 92" stroke={colors.primary} strokeWidth="3" markerEnd={`url(#arrowhead-${slide.id}-${idx})`} opacity="0.7" />
                                    <path d="M 80 120 L 140 120" stroke={colors.primary} strokeWidth="3" markerEnd={`url(#arrowhead-${slide.id}-${idx})`} opacity="0.7" />
                                    <path d="M 80 148 L 140 148" stroke={colors.primary} strokeWidth="3" markerEnd={`url(#arrowhead-${slide.id}-${idx})`} opacity="0.7" />
                                    
                                    {/* Unified Intelligence Layer - Center, Large */}
                                    <rect x="155" y="50" width="120" height="80" rx="6" fill={`url(#gradient-${slide.id}-${idx})`} stroke={colors.primary} strokeWidth="3.5" filter={`url(#shadow-${slide.id}-${idx})`} />
                                    <text x="215" y="80" textAnchor="middle" className="text-[14px] fill-gray-900 font-bold">Unified</text>
                                    <text x="215" y="98" textAnchor="middle" className="text-[13px] fill-gray-800 font-semibold">Intelligence</text>
                                    <text x="215" y="115" textAnchor="middle" className="text-[12px] fill-gray-700">Layer</text>
                                    
                                    {/* Output arrow - Right Side */}
                                    <path d="M 280 90 L 340 90" stroke={colors.primary} strokeWidth="3.5" markerEnd={`url(#arrowhead-${slide.id}-${idx})`} />
                                    <text x="310" y="82" textAnchor="middle" className="text-[12px] fill-gray-800 font-semibold">Real-time</text>
                                    
                                    {/* Output label - Right, with <100ms inside */}
                                    <rect x="350" y="70" width="40" height="50" rx="4" fill={colors.secondary} opacity="0.2" stroke={colors.primary} strokeWidth="2" />
                                    <text x="370" y="88" textAnchor="middle" className="text-[10px] fill-gray-900 font-bold">Context</text>
                                    <text x="370" y="102" textAnchor="middle" className="text-[10px] fill-gray-800">Ready</text>
                                    <text x="370" y="115" textAnchor="middle" className="text-[9px] fill-gray-700">&lt;100ms</text>
                                  </>
                                )}
                                
                                {idx === 1 && (
                                  <>
                                    {/* Causal Intelligence Story: Data → DAG Map → Reasoning - Proper DAG - LARGER */}
                                    {/* Input data - Left */}
                                    <rect x="15" y="60" width="70" height="50" rx="5" fill={colors.primary} opacity="0.2" stroke={colors.primary} strokeWidth="3" />
                                    <text x="50" y="88" textAnchor="middle" className="text-[15px] fill-gray-900 font-bold">Data</text>
                                    <text x="50" y="103" textAnchor="middle" className="text-[12px] fill-gray-700">Input</text>
                                    
                                    {/* Arrow to DAG */}
                                    <path d="M 90 85 L 130 85" stroke={colors.primary} strokeWidth="3.5" markerEnd={`url(#arrowhead-${slide.id}-${idx})`} />
                                    
                                    {/* DAG Map - Proper Directed Acyclic Graph - Center, LARGER */}
                                    <g>
                                      {/* Root nodes (exogenous variables) - Top row - Larger */}
                                      <rect x="145" y="15" width="60" height="35" rx="4" fill={colors.secondary} opacity="0.3" stroke={colors.primary} strokeWidth="2.5" />
                                      <text x="175" y="36" textAnchor="middle" className="text-[13px] fill-gray-900 font-bold">Price</text>
                                      
                                      <rect x="225" y="15" width="60" height="35" rx="4" fill={colors.secondary} opacity="0.3" stroke={colors.primary} strokeWidth="2.5" />
                                      <text x="255" y="36" textAnchor="middle" className="text-[13px] fill-gray-900 font-bold">Demand</text>
                                      
                                      {/* Intermediate nodes - Middle row - Larger */}
                                      <rect x="145" y="60" width="60" height="35" rx="4" fill={colors.primary} opacity="0.35" stroke={colors.primary} strokeWidth="3" />
                                      <text x="175" y="81" textAnchor="middle" className="text-[13px] fill-gray-900 font-bold">Supply</text>
                                      
                                      <rect x="225" y="60" width="60" height="35" rx="4" fill={colors.primary} opacity="0.35" stroke={colors.primary} strokeWidth="3" />
                                      <text x="255" y="81" textAnchor="middle" className="text-[13px] fill-gray-900 font-bold">Market</text>
                                      
                                      {/* Outcome node - Bottom row, Central - Larger */}
                                      <rect x="170" y="105" width="80" height="45" rx="5" fill={colors.primary} opacity="0.4" stroke={colors.primary} strokeWidth="3.5" filter={`url(#shadow-${slide.id}-${idx})`} />
                                      <text x="210" y="128" textAnchor="middle" className="text-[14px] fill-gray-900 font-bold">Revenue</text>
                                      <text x="210" y="142" textAnchor="middle" className="text-[12px] fill-gray-800">Outcome</text>
                                      
                                      {/* DAG Edges - Directed arrows showing causality - Thicker */}
                                      {/* Price → Supply */}
                                      <path d="M 175 50 L 175 60" stroke={colors.primary} strokeWidth="3" markerEnd={`url(#arrowhead-${slide.id}-${idx})`} opacity="0.7" />
                                      
                                      {/* Demand → Market */}
                                      <path d="M 255 50 L 255 60" stroke={colors.primary} strokeWidth="3" markerEnd={`url(#arrowhead-${slide.id}-${idx})`} opacity="0.7" />
                                      
                                      {/* Supply → Revenue */}
                                      <path d="M 175 95 L 195 105" stroke={colors.primary} strokeWidth="3" markerEnd={`url(#arrowhead-${slide.id}-${idx})`} opacity="0.7" />
                                      
                                      {/* Market → Revenue */}
                                      <path d="M 255 95 L 225 105" stroke={colors.primary} strokeWidth="3" markerEnd={`url(#arrowhead-${slide.id}-${idx})`} opacity="0.7" />
                                      
                                      {/* Price → Revenue (direct effect) */}
                                      <path d="M 175 50 Q 210 65, 195 105" stroke={colors.primary} strokeWidth="2.5" markerEnd={`url(#arrowhead-${slide.id}-${idx})`} opacity="0.6" fill="none" strokeDasharray="4,3" />
                                    </g>
                                    
                                    {/* Output: Causal Reasoning - Right, with accuracy inside */}
                                    <path d="M 255 127.5 L 310 127.5" stroke={colors.primary} strokeWidth="3.5" markerEnd={`url(#arrowhead-${slide.id}-${idx})`} />
                                    <rect x="320" y="110" width="60" height="40" rx="5" fill={colors.secondary} opacity="0.2" stroke={colors.primary} strokeWidth="2.5" />
                                    <text x="350" y="128" textAnchor="middle" className="text-[12px] fill-gray-900 font-bold">85%+</text>
                                    <text x="350" y="142" textAnchor="middle" className="text-[11px] fill-gray-800">Accuracy</text>
                                  </>
                                )}
                                
                                {idx === 2 && (
                                  <>
                                    {/* Decision Canvas Story: Intent → AI Suggestions → Human-AI Collaboration - LARGER */}
                                    {/* User Intent Input - Left - Larger */}
                                    <rect x="15" y="50" width="75" height="50" rx="5" fill={colors.primary} opacity="0.25" stroke={colors.primary} strokeWidth="3" />
                                    <text x="52.5" y="78" textAnchor="middle" className="text-[15px] fill-gray-900 font-bold">Intent</text>
                                    <text x="52.5" y="93" textAnchor="middle" className="text-[12px] fill-gray-700">Natural Language</text>
                                    
                                    {/* Arrow */}
                                    <path d="M 95 75 L 135 75" stroke={colors.primary} strokeWidth="3.5" markerEnd={`url(#arrowhead-${slide.id}-${idx})`} />
                                    
                                    {/* Canvas Interface - Center, LARGER */}
                                    <rect x="150" y="20" width="120" height="110" rx="6" fill={`url(#gradient-${slide.id}-${idx})`} stroke={colors.primary} strokeWidth="4" filter={`url(#shadow-${slide.id}-${idx})`} />
                                    
                                    {/* AI Suggestions Panel - Top Left - Larger */}
                                    <rect x="165" y="35" width="42" height="30" rx="3" fill={colors.primary} opacity="0.4" stroke={colors.primary} strokeWidth="2.5" />
                                    <text x="186" y="52" textAnchor="middle" className="text-[13px] fill-gray-900 font-bold">AI</text>
                                    <text x="186" y="65" textAnchor="middle" className="text-[11px] fill-gray-800">Suggestions</text>
                                    
                                    {/* Human Input Area - Top Right - Larger */}
                                    <rect x="215" y="35" width="42" height="30" rx="3" fill="#ec4899" opacity="0.4" stroke="#ec4899" strokeWidth="2.5" />
                                    <text x="236" y="52" textAnchor="middle" className="text-[13px] fill-gray-900 font-bold">Human</text>
                                    <text x="236" y="65" textAnchor="middle" className="text-[11px] fill-gray-800">Override</text>
                                    
                                    {/* Simulation Area - Bottom, Full Width - Larger */}
                                    <rect x="165" y="72" width="92" height="45" rx="3" fill={colors.primary} opacity="0.25" stroke={colors.primary} strokeWidth="2.5" />
                                    <text x="211" y="93" textAnchor="middle" className="text-[13px] fill-gray-900 font-semibold">Simulation</text>
                                    <text x="211" y="108" textAnchor="middle" className="text-[11px] fill-gray-700">Monte Carlo</text>
                                    
                                    {/* Output - Right, with decision inside */}
                                    <path d="M 275 75 L 320 75" stroke={colors.primary} strokeWidth="3.5" markerEnd={`url(#arrowhead-${slide.id}-${idx})`} />
                                    <rect x="330" y="55" width="60" height="40" rx="5" fill={colors.secondary} opacity="0.2" stroke={colors.primary} strokeWidth="2.5" />
                                    <text x="360" y="75" textAnchor="middle" className="text-[12px] fill-gray-900 font-bold">Decision</text>
                                    <text x="360" y="88" textAnchor="middle" className="text-[11px] fill-gray-800">Made</text>
                                  </>
                                )}
                                
                                {idx === 3 && (
                                  <>
                                    {/* DMG & Learning Loop Story: Decision → DMG Storage → Learning → Updated Model - Spacious */}
                                    {/* Decision Input - Left */}
                                    <rect x="20" y="70" width="60" height="40" rx="5" fill={colors.primary} opacity="0.25" stroke={colors.primary} strokeWidth="2.5" />
                                    <text x="50" y="92" textAnchor="middle" className="text-[13px] fill-gray-900 font-bold">Decision</text>
                                    <text x="50" y="105" textAnchor="middle" className="text-[10px] fill-gray-700">Made</text>
                                    
                                    {/* Arrow to DMG */}
                                    <path d="M 85 90 L 125 90" stroke={colors.primary} strokeWidth="3" markerEnd={`url(#arrowhead-${slide.id}-${idx})`} />
                                    
                                    {/* DMG Graph - Central Hub - Spacious Layout */}
                                    <g>
                                      {/* Central decision node - Large & Prominent */}
                                      <circle cx="200" cy="90" r="22" fill={colors.primary} opacity="0.4" stroke={colors.primary} strokeWidth="4" filter={`url(#shadow-${slide.id}-${idx})`} />
                                      <text x="200" y="97" textAnchor="middle" className="text-[14px] fill-gray-900 font-bold">Decision</text>
                                      
                                      {/* Connected nodes (Context, Intent, Action, Outcome) - Well Spaced, text inside boxes */}
                                      {[
                                        { label: 'Context', short: 'C', x: 140, y: 35 },
                                        { label: 'Intent', short: 'I', x: 260, y: 35 },
                                        { label: 'Action', short: 'A', x: 140, y: 145 },
                                        { label: 'Outcome', short: 'O', x: 260, y: 145 }
                                      ].map((node, i) => {
                                        const dx = node.x - 200;
                                        const dy = node.y - 90;
                                        const distance = Math.sqrt(dx * dx + dy * dy);
                                        const startX = 200 + (dx / distance) * 22;
                                        const startY = 90 + (dy / distance) * 22;
                                        const endX = node.x - (dx / distance) * 15;
                                        const endY = node.y - (dy / distance) * 15;
                                        
                                        return (
                                          <g key={i}>
                                            <rect x={node.x - 30} y={node.y - 14} width="60" height="28" rx="4" fill={colors.secondary} opacity="0.35" stroke={colors.primary} strokeWidth="2.5" />
                                            <text x={node.x} y={node.y - 1} textAnchor="middle" className="text-[11px] fill-gray-900 font-bold">{node.short}</text>
                                            <text x={node.x} y={node.y + 10} textAnchor="middle" className="text-[9px] fill-gray-700">{node.label}</text>
                                            <path d={`M ${startX} ${startY} L ${endX} ${endY}`} stroke={colors.primary} strokeWidth="2.5" markerEnd={`url(#arrowhead-${slide.id}-${idx})`} opacity="0.6" />
                                          </g>
                                        );
                                      })}
                                    </g>
                                    
                                    {/* Learning Loop Arrows - Curved, Spacious */}
                                    <path d="M 225 68 Q 250 50, 275 68" stroke={colors.primary} strokeWidth="3" fill="none" opacity="0.6" strokeDasharray="6,4" />
                                    <path d="M 225 112 Q 250 130, 275 112" stroke={colors.primary} strokeWidth="3" fill="none" opacity="0.6" strokeDasharray="6,4" />
                                    
                                    {/* Updated Model - Right, with Learning Loop inside */}
                                    <rect x="300" y="70" width="70" height="55" rx="5" fill={colors.primary} opacity="0.25" stroke={colors.primary} strokeWidth="2.5" />
                                    <text x="335" y="88" textAnchor="middle" className="text-[12px] fill-gray-900 font-bold">Updated</text>
                                    <text x="335" y="101" textAnchor="middle" className="text-[11px] fill-gray-800">Causal Model</text>
                                    
                                    {/* Loop indicator - Inside box */}
                                    <circle cx="335" cy="118" r="3" fill={colors.primary} opacity="0.6" />
                                    <text x="335" y="130" textAnchor="middle" className="text-[9px] fill-gray-700 font-semibold">Learning Loop</text>
                                  </>
                                )}
                              </svg>
                            </div>

                            {/* Key Info - Compact Text at Bottom */}
                            <div className="space-y-1.5 mt-auto">
                              {/* Outcome - Compact with brand color */}
                              {layer.outcome && (
                                <div 
                                  className="rounded-lg p-1.5 border-l-2"
                                  style={{ 
                                    backgroundColor: colors.light,
                                    borderLeftColor: colors.primary,
                                    borderLeftWidth: '2px'
                                  }}
                                >
                                  <p className="text-[10px] text-gray-800 font-medium leading-tight">{layer.outcome.split('—')[0]}</p>
                                </div>
                              )}
                              
                              {/* Tech Stack - Visual Tags - Compact */}
                              {layer.tech && (
                                <div className="flex flex-wrap gap-1">
                                  {layer.tech.split(', ').slice(0, 2).map((tech, techIdx) => (
                                    <span 
                                      key={techIdx}
                                      className="text-[8px] px-1.5 py-0.5 rounded-md font-medium"
                                      style={{
                                        backgroundColor: colors.light,
                                        color: colors.primary
                                      }}
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                  
                  {/* Flow Connector Lines Between Layers */}
                  <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-300 via-pink-300 to-cyan-300 opacity-30 z-0" style={{ pointerEvents: 'none' }} />
                  <div className="absolute right-1/4 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-0.5 h-full bg-gradient-to-b from-pink-300 via-cyan-300 to-pink-300 opacity-30 z-0" style={{ pointerEvents: 'none' }} />

                  {/* Sources Footer - Compact */}
                  {slide.content.sources && (
                    <div className="mt-2 pt-2 border-t border-gray-300">
                      <p className="text-[9px] text-gray-600 text-center italic leading-tight">
                        Sources: {slide.content.sources.slice(0, 2).join(' • ')}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TECHNICAL DIFFERENTIATION */}
            {slide.type === 'differentiation' && slide.content && (
              <div className="flex-1 flex flex-col h-full relative bg-white" style={{ height: isFullscreen ? '100vh' : 'calc(100vh - 5rem)' }}>
                {/* Enhanced Background */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500" />
                </div>

                <div className="relative z-10 flex flex-col h-full px-6 sm:px-8 py-4">
                  {/* Narrative Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-3"
                  >
                    <h1 
                      className={`font-bold mb-1 tracking-tight ${isFullscreen ? 'text-2xl' : 'text-xl sm:text-2xl'}`}
                      style={{
                        background: 'linear-gradient(135deg, #06b6d4 0%, #ec4899 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {slide.title}
                    </h1>
                    <div className="h-0.5 w-20" style={{ background: 'linear-gradient(to right, #06b6d4, #ec4899)' }} />
                  </motion.div>

                  {/* Main Content - CIAC & DMG - Card-Based with Brand Colors */}
                  <div className="flex-1 grid grid-cols-2 gap-3 mb-2 min-h-0">
                    {/* CIAC Framework - Card-Based with Cyan Brand Color */}
                    <div className="bg-white rounded-lg p-4 shadow-lg flex flex-col min-h-0" style={{ borderLeft: '4px solid #06b6d4' }}>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #06b6d4, #0891b2)' }}>
                          <span className="text-xs font-bold text-white">6.1</span>
                        </div>
                        <h2 className="text-base font-bold text-gray-900">CIAC Framework</h2>
                      </div>
                      
                      {/* CIAC Horizontal Flow Cards */}
                      <div className="mb-3 flex gap-2 flex-shrink-0">
                        {[
                          { label: 'Context', icon: Database, color: '#06b6d4' },
                          { label: 'Intent', icon: Target, color: '#0891b2' },
                          { label: 'Action', icon: Zap, color: '#0e7490' },
                          { label: 'Consequence', icon: TrendingUp, color: '#155e75' }
                        ].map((item, idx) => {
                          const Icon = item.icon;
                          return (
                            <div key={idx} className="flex-1 rounded-lg p-2 shadow-md flex flex-col items-center" style={{ background: `linear-gradient(135deg, ${item.color}15, ${item.color}25)` }}>
                              <div className="w-10 h-10 rounded-lg mb-1.5 flex items-center justify-center" style={{ background: item.color }}>
                                <Icon className="h-5 w-5 text-white" />
                              </div>
                              <p className="text-[10px] font-semibold text-gray-800 text-center">{item.label}</p>
                            </div>
                          );
                        })}
                      </div>

                      {/* CIAC Component Cards - Brand Colors with Rich Content */}
                      <div className="flex-1 grid grid-cols-2 gap-2 mb-2 min-h-0">
                        {[
                          { 
                            label: 'Context', 
                            points: [
                              'Multi-source data integration (CRM, ERP, analytics)',
                              'Historical pattern analysis across years',
                              'Environmental constraints (regulatory, market, resources)'
                            ],
                            icon: Database,
                            color: '#06b6d4',
                            metric: '15+ Data Sources'
                          },
                          { 
                            label: 'Intent', 
                            points: [
                              'Clear objective definition with success criteria',
                              'Stakeholder alignment across departments',
                              'Strategic goals mapped to tactical execution'
                            ],
                            icon: Target,
                            color: '#0891b2',
                            metric: '100% Alignment'
                          },
                          { 
                            label: 'Action', 
                            points: [
                              'Intervention selection via causal analysis',
                              'Resource allocation optimized through simulation',
                              'Real-time monitoring and course correction'
                            ],
                            icon: Zap,
                            color: '#0e7490',
                            metric: 'Response <100ms'
                          },
                          { 
                            label: 'Consequence', 
                            points: [
                              'KPI tracking (financial, operational, strategic)',
                              'Outcome measurement with causal attribution',
                              'Learning loop updates models in real-time'
                            ],
                            icon: TrendingUp,
                            color: '#155e75',
                            metric: 'Real-time Learning'
                          }
                        ].map((component, idx) => {
                          const Icon = component.icon;
                          return (
                            <div key={idx} className="rounded-lg p-2.5 shadow-sm border-2 flex flex-col" style={{ borderColor: `${component.color}40`, background: `${component.color}08` }}>
                              <div className="flex items-center justify-between mb-1.5">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-7 h-7 rounded flex items-center justify-center" style={{ background: component.color }}>
                                    <Icon className="h-4 w-4 text-white" />
                                  </div>
                                  <p className="text-sm font-bold text-gray-800">{component.label}</p>
                                </div>
                                <div className="px-1.5 py-0.5 rounded text-[9px] font-bold text-white" style={{ background: component.color }}>
                                  {component.metric}
                                </div>
                              </div>
                              <ul className="space-y-1">
                                {component.points.map((point, pIdx) => (
                                  <li key={pIdx} className="flex items-start gap-1.5">
                                    <span className="text-xs font-bold mt-0.5" style={{ color: component.color }}>•</span>
                                    <span className="text-xs text-gray-700 leading-tight font-medium">{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>

                      {/* Impact Card - Cyan Gradient with Rich Content */}
                      <div className="rounded-lg p-3 shadow-sm flex-shrink-0" style={{ background: 'linear-gradient(135deg, #06b6d415, #0891b225)', borderLeft: '3px solid #06b6d4' }}>
                        <p className="text-sm font-bold text-gray-800 mb-1.5" style={{ color: '#0891b2' }}>Why CIAC Matters</p>
                        <p className="text-xs text-gray-700 leading-tight mb-1.5 font-medium">Creates a learnable, auditable decision system where every decision becomes a building block for better future decisions. Enables systematic improvement and organizational learning at scale.</p>
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center gap-1">
                            <CheckCircle className="h-3.5 w-3.5" style={{ color: '#0891b2' }} />
                            <span className="text-[10px] font-semibold text-gray-700">10x Faster Decisions</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <CheckCircle className="h-3.5 w-3.5" style={{ color: '#0891b2' }} />
                            <span className="text-[10px] font-semibold text-gray-700">Audit Trail Built-in</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* DMG - Card-Based with Magenta/Purple Brand Color */}
                    <div className="bg-white rounded-lg p-4 shadow-lg flex flex-col min-h-0" style={{ borderLeft: '4px solid #ec4899' }}>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #ec4899, #db2777)' }}>
                          <span className="text-xs font-bold text-white">6.2</span>
                        </div>
                        <h2 className="text-base font-bold text-gray-900">Decision Memory Graph</h2>
                      </div>
                      
                      {/* DMG Network Visualization - Different from CIAC */}
                      <div className="mb-3 rounded-lg p-3 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #ec489910, #db277720)' }}>
                        <svg viewBox="0 0 280 100" className="w-full h-24">
                          <defs>
                            <marker id="arrow-dmg-6" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                              <path d="M0,0 L10,5 L0,10 Z" fill="#ec4899" />
                            </marker>
                            <radialGradient id="decisionGrad">
                              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.6" />
                              <stop offset="100%" stopColor="#db2777" stopOpacity="0.4" />
                            </radialGradient>
                          </defs>
                          {/* Central Decision Node */}
                          <circle cx="140" cy="50" r="18" fill="url(#decisionGrad)" stroke="#ec4899" strokeWidth="2.5" />
                          <text x="140" y="56" textAnchor="middle" className="text-[11px] fill-white font-bold">Decision</text>
                          {/* Connected Nodes */}
                          {[
                            { label: 'Context', x: 50, y: 50, color: '#ec4899' },
                            { label: 'Intent', x: 230, y: 50, color: '#db2777' },
                            { label: 'Action', x: 140, y: 15, color: '#be185d' },
                            { label: 'Outcome', x: 140, y: 85, color: '#9f1239' }
                          ].map((node, idx) => {
                            const dx = node.x - 140;
                            const dy = node.y - 50;
                            const distance = Math.sqrt(dx * dx + dy * dy);
                            const startX = 140 + (dx / distance) * 18;
                            const startY = 50 + (dy / distance) * 18;
                            const endX = node.x - (dx / distance) * 14;
                            const endY = node.y - (dy / distance) * 14;
                            return (
                              <g key={idx}>
                                <circle cx={node.x} cy={node.y} r="14" fill={node.color} opacity="0.7" stroke={node.color} strokeWidth="2" />
                                <text x={node.x} y={node.y + 5} textAnchor="middle" className="text-[10px] fill-white font-bold">{node.label}</text>
                                <path d={`M ${startX} ${startY} L ${endX} ${endY}`} stroke={node.color} strokeWidth="2" markerEnd="url(#arrow-dmg-6)" opacity="0.6" />
                              </g>
                            );
                          })}
                        </svg>
                      </div>

                      {/* DMG Feature Cards - Standardized Format */}
                      <div className="flex-1 space-y-1.5 mb-2 min-h-0">
                        <div className="rounded-lg p-2 shadow-sm border-2" style={{ borderColor: '#ec489940', background: '#ec489908' }}>
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #ec4899, #db2777)' }}>
                                <Network className="h-3.5 w-3.5 text-white" />
                              </div>
                              <p className="text-xs font-bold text-gray-800">Graph Architecture</p>
                            </div>
                            <div className="px-1.5 py-0.5 rounded text-[9px] font-bold text-white" style={{ background: '#ec4899' }}>
                              100M+ Nodes
                            </div>
                          </div>
                          <ul className="space-y-0.5 ml-8">
                            {[
                              'Nodes: Decisions, Context, Intent, Action, Outcome',
                              'Edges: Causal relationships, temporal sequences, similarity links',
                              'Neo4j/TigerGraph scales to billions with sub-second queries'
                            ].map((point, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <span className="text-xs font-bold mt-0.5" style={{ color: '#ec4899' }}>•</span>
                                <span className="text-[10px] text-gray-700 leading-tight font-medium">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-lg p-2 shadow-sm border-2" style={{ borderColor: '#db277740', background: '#db277708' }}>
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #db2777, #be185d)' }}>
                                <Activity className="h-3.5 w-3.5 text-white" />
                              </div>
                              <p className="text-xs font-bold text-gray-800">Key Capabilities</p>
                            </div>
                            <div className="px-1.5 py-0.5 rounded text-[9px] font-bold text-white" style={{ background: '#db2777' }}>
                              Network Effects
                            </div>
                          </div>
                          <ul className="space-y-0.5 ml-8">
                            {[
                              'Find similar past decisions with matching context in milliseconds',
                              'Automatically update causal models from measured outcomes',
                              'Predict success rates using graph similarity analysis',
                              'Cross-customer learning amplifies value across platform'
                            ].map((point, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <span className="text-xs font-bold mt-0.5" style={{ color: '#db2777' }}>•</span>
                                <span className="text-[10px] text-gray-700 leading-tight font-medium">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-lg p-2 shadow-sm border-2" style={{ borderColor: '#be185d40', background: '#be185d08' }}>
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #be185d, #9f1239)' }}>
                                <Database className="h-3.5 w-3.5 text-white" />
                              </div>
                              <p className="text-xs font-bold text-gray-800">Technical Performance</p>
                            </div>
                            <div className="px-1.5 py-0.5 rounded text-[9px] font-bold text-white" style={{ background: '#be185d' }}>
                              {'<100ms'}
                            </div>
                          </div>
                          <ul className="space-y-0.5 ml-8">
                            {[
                              'Sub-second queries even at 100M+ nodes for complex traversals',
                              'Real-time causal prior updates from outcomes, no batch processing',
                              'Graph embeddings enable instant decision similarity matching',
                              'Multi-tenant isolation with secure cross-customer learning'
                            ].map((point, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <span className="text-xs font-bold mt-0.5" style={{ color: '#be185d' }}>•</span>
                                <span className="text-[10px] text-gray-700 leading-tight font-medium">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Bottom Section - Our Advantage - 3 Top Points */}
                  <div className="bg-white rounded-lg p-3 border-l-2 border-gray-400 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <Shield className="h-3.5 w-3.5 text-gray-600" />
                      </div>
                      <p className="text-xs font-semibold text-gray-800 uppercase">6.3 Our Advantage</p>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      {slide.content.competitiveAdvantage?.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex-1 rounded-lg p-3 shadow-md border-2 flex flex-col items-center text-center" style={{ borderColor: idx === 0 ? '#06b6d440' : idx === 1 ? '#ec489940' : '#0891b240', background: idx === 0 ? '#06b6d408' : idx === 1 ? '#ec489908' : '#0891b208' }}>
                          <div className="w-10 h-10 rounded-full mb-2 flex items-center justify-center" style={{ background: idx === 0 ? 'linear-gradient(135deg, #06b6d4, #0891b2)' : idx === 1 ? 'linear-gradient(135deg, #ec4899, #db2777)' : 'linear-gradient(135deg, #0891b2, #0e7490)' }}>
                            <CheckCircle className="h-5 w-5 text-white" />
                          </div>
                          <p className="text-sm font-bold text-gray-800 leading-tight">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sources Footer */}
                  {slide.content.sources && (
                    <div className="mt-3 pt-2 border-t border-gray-300">
                      <p className="text-[10px] text-gray-600 text-center italic leading-tight">
                        Sources: {slide.content.sources.slice(0, 2).join(' • ')}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* SLIDE 7: MARKET + COMPETITIVE + BUSINESS */}
            {slide.type === 'market-business' && slide.content && (
              <div className="flex-1 flex flex-col h-full relative bg-white" style={{ height: isFullscreen ? '100vh' : 'calc(100vh - 5rem)' }}>
                {/* Enhanced Background */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500" />
                </div>

                <div className="relative z-10 flex flex-col h-full px-6 sm:px-8 py-4">
                  {/* Narrative Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-3"
                  >
                    <h1 
                      className={`font-bold mb-1 tracking-tight ${isFullscreen ? 'text-2xl' : 'text-xl sm:text-2xl'}`}
                      style={{
                        background: 'linear-gradient(135deg, #06b6d4 0%, #ec4899 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {slide.title}
                    </h1>
                    <div className="h-0.5 w-20" style={{ background: 'linear-gradient(to right, #06b6d4, #ec4899)' }} />
                  </motion.div>

                  {/* Main Content - 3 Sections */}
                  <div className="flex-1 grid grid-cols-3 gap-5 mb-3">
                    {/* 7.1 Market Opportunity */}
                    <div className="flex flex-col">
                      <div className="bg-white rounded-xl p-5 border-l-4 border-cyan-500 shadow-lg flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-sm font-bold text-white bg-cyan-500 px-3 py-1 rounded-lg">7.1</span>
                          <h3 className="text-lg font-bold text-gray-900">Market</h3>
                        </div>
                        <div className="flex-1 space-y-4">
                          {[slide.content.market.tam, slide.content.market.sam, slide.content.market.som].map((m, idx) => {
                            const heights = [100, 65, 25];
                            const colors = ['#06b6d4', '#8b5cf6', '#ec4899'];
                            return (
                              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border-2 border-gray-200 shadow-md">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="text-3xl font-bold text-gray-900">{m.value}</div>
                                  <div className="h-16 w-16 bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                                    <motion.div
                                      className="absolute bottom-0 left-0 right-0 rounded-t-lg"
                                      style={{ backgroundColor: colors[idx], height: `${heights[idx]}%` }}
                                      initial={{ height: 0 }}
                                      animate={{ height: `${heights[idx]}%` }}
                                      transition={{ delay: idx * 0.2, duration: 0.8 }}
                                    />
                                  </div>
                                </div>
                                <div className="text-sm font-semibold text-gray-700 mb-1">{m.desc}</div>
                                <div className="flex items-center gap-2">
                                  <TrendingUp className="h-4 w-4 text-green-600" />
                                  <span className="text-sm font-bold text-green-600">{m.growth}</span>
                                </div>
                                <div className="text-xs text-gray-500 mt-1">{m.timeframe}</div>
                              </div>
                            );
                          })}
                        </div>
                        <div className="mt-4 pt-4 border-t-2 border-gray-200">
                          <div className="text-xs font-semibold text-gray-600 mb-1">Beachhead Strategy</div>
                          <div className="text-sm font-medium text-gray-800">{slide.content.market.beachhead}</div>
                        </div>
                      </div>
                    </div>

                    {/* 7.2 Competitive */}
                    <div className="flex flex-col">
                      <div className="bg-white rounded-xl p-5 border-l-4 border-pink-500 shadow-lg flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-sm font-bold text-white bg-pink-500 px-3 py-1 rounded-lg">7.2</span>
                          <h3 className="text-lg font-bold text-gray-900">Competitive</h3>
                        </div>
                        <div className="flex-1 space-y-3">
                          {slide.content.competitive.competitors.map((comp, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border-2 border-gray-200 shadow-md">
                              <div className="flex items-start justify-between mb-2">
                                <div className="text-base font-bold text-gray-900">{comp.name}</div>
                                <div className="w-3 h-3 rounded-full bg-pink-500 flex-shrink-0 mt-1"></div>
                              </div>
                              <div className="text-sm text-gray-700 mb-2 font-medium">{comp.focus}</div>
                              <div className="text-xs text-pink-600 font-semibold bg-pink-50 px-2 py-1 rounded">{comp.gap}</div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t-2 border-gray-200">
                          <div className="text-xs font-semibold text-gray-600 mb-1">Our Advantage</div>
                          <div className="text-sm font-medium text-gray-800 italic">{slide.content.competitive.differentiation}</div>
                        </div>
                      </div>
                    </div>

                    {/* 7.3 Business Model */}
                    <div className="flex flex-col">
                      <div className="bg-white rounded-xl p-5 border-l-4 border-purple-500 shadow-lg flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-sm font-bold text-white bg-purple-500 px-3 py-1 rounded-lg">7.3</span>
                          <h3 className="text-lg font-bold text-gray-900">Business</h3>
                        </div>
                        <div className="flex-1 space-y-4">
                          <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-4 border-2 border-purple-200">
                            <div className="text-xs font-semibold text-gray-600 mb-1">Model</div>
                            <div className="text-base font-bold text-gray-900">{slide.content.business.model}</div>
                          </div>
                          <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-4 border-2 border-purple-200">
                            <div className="text-xs font-semibold text-gray-600 mb-2">ACV Progression</div>
                            <div className="flex items-center gap-2">
                              <div className="text-sm font-bold text-gray-900">{slide.content.business.acv.pilot}</div>
                              <ArrowRight className="h-4 w-4 text-purple-500" />
                              <div className="text-sm font-bold text-purple-600">{slide.content.business.acv.scale}</div>
                            </div>
                          </div>
                          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border-2 border-gray-200 space-y-3">
                            <div className="text-xs font-semibold text-gray-600 mb-2">Unit Economics</div>
                            {[
                              { label: 'CAC', value: slide.content.business.economics.cac, color: 'text-gray-900' },
                              { label: 'LTV', value: slide.content.business.economics.ltv, color: 'text-gray-900' },
                              { label: 'LTV:CAC', value: slide.content.business.economics.ltvCac, color: 'text-purple-600' },
                              { label: 'Gross Margin', value: slide.content.business.economics.grossMargin, color: 'text-gray-900' },
                              { label: 'Net Retention', value: slide.content.business.economics.netRetention, color: 'text-gray-900' }
                            ].map((item, idx) => (
                              <div key={idx} className="flex justify-between items-center py-1.5 border-b border-gray-100 last:border-0">
                                <span className="text-sm text-gray-600 font-medium">{item.label}:</span>
                                <span className={`text-base font-bold ${item.color}`}>{item.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sources Footer */}
                  {slide.content.sources && (
                    <div className="mt-2 pt-2 border-t border-gray-300">
                      <p className="text-[9px] text-gray-600 text-center italic leading-tight">
                        Sources: {slide.content.sources.slice(0, 2).join(' • ')}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* SLIDE 8: GTM + FINANCIAL + ASK */}
            {slide.type === 'gtm-financial-ask' && slide.content && (
              <div className="flex-1 flex flex-col h-full relative bg-white" style={{ height: isFullscreen ? '100vh' : 'calc(100vh - 5rem)' }}>
                {/* Enhanced Background */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500" />
                </div>

                <div className="relative z-10 flex flex-col h-full px-6 sm:px-8 py-4">
                  {/* Narrative Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-3"
                  >
                    <h1 
                      className={`font-bold mb-1 tracking-tight ${isFullscreen ? 'text-2xl' : 'text-xl sm:text-2xl'}`}
                      style={{
                        background: 'linear-gradient(135deg, #06b6d4 0%, #ec4899 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {slide.title}
                    </h1>
                    <div className="h-0.5 w-20" style={{ background: 'linear-gradient(to right, #06b6d4, #ec4899)' }} />
                  </motion.div>

                  {/* Main Content - 3 Sections */}
                  <div className="flex-1 grid grid-cols-3 gap-5 mb-3">
                    {/* 8.1 GTM */}
                    <div className="flex flex-col">
                      <div className="bg-white rounded-xl p-5 border-l-4 border-cyan-500 shadow-lg flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-sm font-bold text-white bg-cyan-500 px-3 py-1 rounded-lg">8.1</span>
                          <h3 className="text-lg font-bold text-gray-900">GTM</h3>
                        </div>
                        <div className="flex-1 space-y-4">
                          <div className="bg-gradient-to-br from-cyan-50 to-white rounded-xl p-4 border-2 border-cyan-200">
                            <div className="text-xs font-semibold text-gray-600 mb-2">Beachhead</div>
                            <div className="text-base font-bold text-cyan-600">{slide.content.gtm.beachhead}</div>
                          </div>
                          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border-2 border-gray-200">
                            <div className="text-xs font-semibold text-gray-600 mb-3">Strategy</div>
                            <div className="space-y-2.5">
                              {slide.content.gtm.strategy.slice(0, 3).map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2.5">
                                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></div>
                                  <span className="text-sm text-gray-700 leading-relaxed font-medium">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border-2 border-gray-200">
                            <div className="text-xs font-semibold text-gray-600 mb-3">Milestones</div>
                            <div className="space-y-2.5">
                              {slide.content.gtm.milestones.map((m, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-xs font-bold">{idx + 1}</span>
                                  </div>
                                  <div>
                                    <div className="text-sm font-bold text-gray-900">{m.phase}</div>
                                    <div className="text-xs text-gray-600 mt-0.5">{m.goal}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 8.2 Financial */}
                    <div className="flex flex-col">
                      <div className="bg-white rounded-xl p-5 border-l-4 border-pink-500 shadow-lg flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-sm font-bold text-white bg-pink-500 px-3 py-1 rounded-lg">8.2</span>
                          <h3 className="text-lg font-bold text-gray-900">Financial</h3>
                        </div>
                        <div className="flex-1 space-y-3">
                          {slide.content.financial.projections.map((proj, idx) => {
                            const arrValues = [1.5, 9, 22];
                            const maxArr = 22;
                            return (
                              <div key={idx} className="bg-gradient-to-br from-pink-50 to-white rounded-xl p-4 border-2 border-pink-200 shadow-md">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="text-sm font-bold text-gray-700">{proj.year}</div>
                                  <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                                    <motion.div
                                      className="absolute bottom-0 left-0 right-0 rounded-t-lg"
                                      style={{ backgroundColor: '#ec4899', height: `${(arrValues[idx] / maxArr) * 100}%` }}
                                      initial={{ height: 0 }}
                                      animate={{ height: `${(arrValues[idx] / maxArr) * 100}%` }}
                                      transition={{ delay: idx * 0.2, duration: 0.8 }}
                                    />
                                  </div>
                                </div>
                                <div className="text-2xl font-bold text-pink-600 mb-1">{proj.arr}</div>
                                <div className="flex items-center gap-2">
                                  <Users className="h-4 w-4 text-gray-500" />
                                  <span className="text-sm text-gray-600 font-medium">{proj.customers} customers</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <div className="mt-4 pt-4 border-t-2 border-gray-200">
                          <div className="text-xs font-semibold text-gray-600 mb-2">Unit Economics</div>
                          <div className="space-y-2">
                            {[
                              { label: 'CAC', value: slide.content.financial.unitEconomics.cac },
                              { label: 'LTV', value: slide.content.financial.unitEconomics.ltv },
                              { label: 'LTV:CAC', value: slide.content.financial.unitEconomics.ltvCac, highlight: true }
                            ].map((item, idx) => (
                              <div key={idx} className="flex justify-between items-center">
                                <span className="text-sm text-gray-600 font-medium">{item.label}:</span>
                                <span className={`text-base font-bold ${item.highlight ? 'text-pink-600' : 'text-gray-900'}`}>{item.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 8.3 The Ask */}
                    <div className="flex flex-col">
                      <div className="bg-gradient-to-br from-cyan-50 via-pink-50 to-cyan-50 rounded-xl p-5 border-2 border-cyan-300 shadow-lg flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-pink-500 px-3 py-1 rounded-lg">8.3</span>
                          <h3 className="text-lg font-bold text-gray-900">The Ask</h3>
                        </div>
                        <div className="flex-1 space-y-4">
                          <div className="bg-white rounded-xl p-4 border-2 border-cyan-200 shadow-md">
                            <div className="text-3xl font-bold text-gray-900 mb-2">{slide.content.ask.amount}</div>
                            <div className="text-sm text-gray-700 font-medium mb-1">{slide.content.ask.runway}</div>
                            <div className="text-xs text-gray-600">{slide.content.ask.valuation}</div>
                          </div>
                          <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
                            <div className="text-xs font-semibold text-gray-600 mb-3">Use of Funds</div>
                            <div className="space-y-3">
                              {slide.content.ask.use.map((item, idx) => (
                                <div key={idx}>
                                  <div className="flex justify-between items-center mb-1.5">
                                    <span className="text-sm text-gray-700 font-medium">{item.category}</span>
                                    <span className="text-sm font-bold text-gray-900">{item.percent}%</span>
                                  </div>
                                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <motion.div
                                      className="h-full bg-gradient-to-r from-cyan-500 to-pink-500"
                                      initial={{ width: 0 }}
                                      animate={{ width: `${item.percent}%` }}
                                      transition={{ delay: idx * 0.1, duration: 0.8 }}
                                    />
                                  </div>
                                  <div className="text-xs text-gray-500 mt-1">{item.amount}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
                            <div className="text-xs font-semibold text-gray-600 mb-3">Milestones</div>
                            <div className="space-y-2">
                              {slide.content.ask.milestones.map((m, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="text-sm font-semibold text-gray-900">{m.milestone}</div>
                                    <div className="text-xs text-gray-600">{m.timeline}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sources Footer */}
                  {slide.content.sources && (
                    <div className="mt-2 pt-2 border-t border-gray-300">
                      <p className="text-[9px] text-gray-600 text-center italic leading-tight">
                        Sources: {slide.content.sources.slice(0, 2).join(' • ')}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* OLD SLIDES - REMOVED */}
            {false && slide.type === 'business' && slide.content && (
              <div className="flex-1 flex flex-col h-full relative bg-white" style={{ height: isFullscreen ? '100vh' : 'calc(100vh - 5rem)' }}>
                {/* Enhanced Background */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500" />
                </div>

                <div className="relative z-10 flex flex-col h-full px-6 sm:px-8 py-4">
                  {/* Narrative Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-3"
                  >
                    <h1 
                      className={`font-bold mb-1 tracking-tight ${isFullscreen ? 'text-2xl' : 'text-xl sm:text-2xl'}`}
                      style={{
                        background: 'linear-gradient(135deg, #06b6d4 0%, #ec4899 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {slide.title}
                    </h1>
                    <div className="h-0.5 w-20" style={{ background: 'linear-gradient(to right, #06b6d4, #ec4899)' }} />
                  </motion.div>

                  {/* Main Content - 3 Columns */}
                  <div className="flex-1 grid grid-cols-3 gap-3 mb-3">
                    {/* Model & Pricing */}
                    <div className="space-y-2">
                      <div className="bg-white rounded-xl p-3 border-l-4 border-cyan-500 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-bold text-cyan-600 bg-cyan-100 px-1.5 py-0.5 rounded">9.1</span>
                          <h3 className="text-sm font-bold text-gray-900">Model</h3>
                        </div>
                        <p className="text-[10px] font-semibold text-gray-800 mb-1">{slide.content.model.type}</p>
                        <p className="text-[9px] text-gray-600 mb-2 leading-tight">{slide.content.model.pricing}</p>
                        <div className="space-y-1.5">
                          <div className="flex justify-between items-center">
                            <span className="text-[9px] text-gray-600">Pilot:</span>
                            <span className="text-[10px] font-semibold text-gray-900">{slide.content.model.acv.pilot}</span>
                          </div>
                          <ArrowRight className="h-3 w-3 text-gray-400 mx-auto" />
                          <div className="flex justify-between items-center">
                            <span className="text-[9px] text-gray-600">Scale:</span>
                            <span className="text-[10px] font-semibold text-gray-900">{slide.content.model.acv.scale}</span>
                          </div>
                        </div>
                      </div>
                      {/* Pricing Tiers - Compact */}
                      <div className="bg-white rounded-lg p-2.5 border border-gray-200">
                        <p className="text-[9px] font-semibold text-gray-700 uppercase mb-1.5">Tiers</p>
                        {slide.content.model.tiers?.map((tier, idx) => (
                          <div key={idx} className="mb-1.5 pb-1.5 border-b border-gray-100 last:border-0">
                            <div className="flex justify-between mb-0.5">
                              <span className="text-[9px] font-bold text-gray-900">{tier.tier}</span>
                              <span className="text-[9px] font-semibold text-cyan-600">{tier.price}</span>
                            </div>
                            <p className="text-[8px] text-gray-600 leading-tight">{tier.features}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Unit Economics */}
                    <div className="space-y-2">
                      <div className="bg-white rounded-xl p-3 border-l-4 border-pink-500 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-bold text-pink-600 bg-pink-100 px-1.5 py-0.5 rounded">9.2</span>
                          <h3 className="text-sm font-bold text-gray-900">Economics</h3>
                        </div>
                        <div className="space-y-1.5">
                          {[
                            { label: 'CAC', value: slide.content.economics.cac },
                            { label: 'LTV', value: slide.content.economics.ltv },
                            { label: 'Payback', value: slide.content.economics.payback },
                            { label: 'Expansion', value: slide.content.economics.expansion },
                            { label: 'Gross Margin', value: slide.content.economics.grossMargin },
                            { label: 'Net Retention', value: slide.content.economics.netRetention }
                          ].map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center">
                              <span className="text-[9px] text-gray-600">{item.label}:</span>
                              <span className="text-[10px] font-semibold text-gray-900">{item.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-cyan-50/50 to-pink-50/30 rounded-lg p-2.5 border-l-3 border-cyan-500">
                        <p className="text-[9px] text-gray-800 leading-tight">{slide.content.moat}</p>
                      </div>
                    </div>

                    {/* Revenue Streams & Benchmarks */}
                    <div className="space-y-2">
                      <div className="bg-white rounded-lg p-2.5 border border-gray-200">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-bold text-purple-600 bg-purple-100 px-1.5 py-0.5 rounded">9.3</span>
                          <p className="text-[9px] font-semibold text-gray-700 uppercase">Revenue Streams</p>
                        </div>
                        {slide.content.revenueStreams?.map((stream, idx) => (
                          <div key={idx} className="mb-2">
                            <div className="flex justify-between mb-1">
                              <span className="text-[9px] text-gray-700">{stream.stream}</span>
                              <span className="text-[9px] font-semibold text-gray-900">{stream.percent}%</span>
                            </div>
                            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-cyan-500 to-pink-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${stream.percent}%` }}
                                transition={{ delay: idx * 0.1, duration: 0.8 }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-white rounded-lg p-2.5 border border-gray-200">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-bold text-purple-600 bg-purple-100 px-1.5 py-0.5 rounded">9.4</span>
                          <p className="text-[9px] font-semibold text-gray-700 uppercase">Benchmarks</p>
                        </div>
                        {slide.content.benchmarks?.map((bench, idx) => (
                          <div key={idx} className="mb-1.5 pb-1.5 border-b border-gray-100 last:border-0">
                            <div className="flex justify-between mb-0.5">
                              <span className="text-[8px] text-gray-700">{bench.metric}</span>
                              <span className="text-[9px] font-bold text-purple-600">{bench.value}</span>
                            </div>
                            <div className="text-[7px] text-gray-500">{bench.benchmark}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sources Footer */}
                  {slide.content.sources && (
                    <div className="mt-2 pt-2 border-t border-gray-300">
                      <p className="text-[9px] text-gray-600 text-center italic leading-tight">
                        Sources: {slide.content.sources.slice(0, 2).join(' • ')}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* GTM STRATEGY */}
            {slide.type === 'gtm' && slide.content && (
              <div className="flex-1 flex flex-col h-full relative bg-white" style={{ height: isFullscreen ? '100vh' : 'calc(100vh - 5rem)' }}>
                {/* Enhanced Background */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500" />
                </div>

                <div className="relative z-10 flex flex-col h-full px-6 sm:px-8 py-4">
                  {/* Narrative Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-3"
                  >
                    <h1 
                      className={`font-bold mb-1 tracking-tight ${isFullscreen ? 'text-2xl' : 'text-xl sm:text-2xl'}`}
                      style={{
                        background: 'linear-gradient(135deg, #06b6d4 0%, #ec4899 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {slide.title}
                    </h1>
                    <div className="h-0.5 w-20" style={{ background: 'linear-gradient(to right, #06b6d4, #ec4899)' }} />
                  </motion.div>

                  {/* Main Content - 2 Columns */}
                  <div className="flex-1 grid grid-cols-2 gap-4 mb-3">
                    {/* Left Column */}
                    <div className="space-y-3">
                      {/* Beachhead */}
                      <div className="bg-white rounded-xl p-3 border-l-4 border-cyan-500 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-bold text-cyan-600 bg-cyan-100 px-1.5 py-0.5 rounded">10.1</span>
                          <h3 className="text-sm font-bold text-gray-900">{slide.content.beachhead.title}</h3>
                        </div>
                        <p className="text-xs font-semibold text-cyan-600 mb-1.5">{slide.content.beachhead.sequence}</p>
                        <p className="text-[10px] text-gray-700 leading-tight">{slide.content.beachhead.rationale}</p>
                      </div>

                      {/* Strategy */}
                      <div className="bg-white rounded-xl p-3 border-l-4 border-pink-500 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-bold text-pink-600 bg-pink-100 px-1.5 py-0.5 rounded">10.2</span>
                          <h3 className="text-sm font-bold text-gray-900">Strategy</h3>
                        </div>
                        <ul className="space-y-1.5">
                          {slide.content.strategy && slide.content.strategy.slice(0, 4).map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-1.5 flex-shrink-0" />
                              <div>
                                <p className="text-[10px] font-semibold text-gray-900 leading-tight">{typeof item === 'string' ? item : item.tactic}</p>
                                {typeof item === 'object' && item.detail && (
                                  <p className="text-[9px] text-gray-600 mt-0.5 leading-tight">{item.detail}</p>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Partnerships */}
                      {slide.content.partnerships && (
                        <div className="bg-white rounded-lg p-2.5 border border-gray-200">
                          <p className="text-[9px] font-semibold text-gray-700 uppercase mb-1.5">Partnerships</p>
                          {slide.content.partnerships.slice(0, 2).map((partner, idx) => (
                            <div key={idx} className="mb-1.5">
                              <p className="text-[9px] font-semibold text-gray-900">{partner.partner}</p>
                              <p className="text-[8px] text-gray-600">{partner.value}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Right Column - Milestones */}
                    <div className="bg-white rounded-xl p-3 border-l-4 border-purple-500 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-purple-600 bg-purple-100 px-1.5 py-0.5 rounded">10.3</span>
                        <h3 className="text-sm font-bold text-gray-900">Milestones</h3>
                      </div>
                      <div className="space-y-2.5">
                        {slide.content.milestones && slide.content.milestones.map((milestone, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-[10px] font-bold">{idx + 1}</span>
                            </div>
                            <div>
                              <p className="text-[10px] font-semibold text-gray-900 leading-tight">{typeof milestone === 'string' ? milestone : milestone.goal || milestone.phase}</p>
                              {typeof milestone === 'object' && milestone.detail && (
                                <p className="text-[9px] text-gray-600 mt-0.5 leading-tight">{milestone.detail}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sources Footer */}
                  {slide.content.sources && (
                    <div className="mt-2 pt-2 border-t border-gray-300">
                      <p className="text-[9px] text-gray-600 text-center italic leading-tight">
                        Sources: {slide.content.sources.slice(0, 2).join(' • ')}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* FINANCIAL PROJECTIONS */}
            {slide.type === 'financial' && slide.content && slide.content.projections && (
              <div className="flex-1 flex flex-col h-full relative bg-white" style={{ height: isFullscreen ? '100vh' : 'calc(100vh - 5rem)' }}>
                {/* Enhanced Background */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500" />
                </div>

                <div className="relative z-10 flex flex-col h-full px-6 sm:px-8 py-4">
                  {/* Narrative Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-3"
                  >
                    <h1 
                      className={`font-bold mb-1 tracking-tight ${isFullscreen ? 'text-2xl' : 'text-xl sm:text-2xl'}`}
                      style={{
                        background: 'linear-gradient(135deg, #06b6d4 0%, #ec4899 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {slide.title}
                    </h1>
                    <div className="h-0.5 w-20" style={{ background: 'linear-gradient(to right, #06b6d4, #ec4899)' }} />
                  </motion.div>

                  {/* ARR Projections - Compact */}
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {slide.content.projections.map((proj, idx) => {
                      const arrValues = [1.5, 9, 22];
                      const maxArr = 22;
                      return (
                        <div key={idx} className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[10px] font-bold text-cyan-600 bg-cyan-100 px-1.5 py-0.5 rounded">11.{idx + 1}</span>
                            <div className="text-[10px] font-semibold text-gray-700 uppercase">{proj.year}</div>
                          </div>
                          <div className="h-28 bg-gray-100 rounded-lg mb-2 relative overflow-hidden flex items-end">
                            <motion.div
                              className="w-full bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t-lg"
                              initial={{ height: 0 }}
                              animate={{ height: `${(arrValues[idx] / maxArr) * 100}%` }}
                              transition={{ delay: idx * 0.2, duration: 0.8 }}
                            />
                            <div className="absolute inset-0 flex items-end justify-center pb-1.5">
                              <div className="text-2xl font-bold text-white drop-shadow-lg">{proj.arr}</div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1.5">
                              <Users className="h-3 w-3 text-cyan-600" />
                              <span className="text-[10px] font-semibold text-gray-900">{proj.customers} customers</span>
                            </div>
                            <div className="text-[9px] text-gray-600 leading-tight">{proj.note}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Key Assumptions - Compact */}
                  <div className="bg-white rounded-xl p-3 border border-gray-200 mb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold text-purple-600 bg-purple-100 px-1.5 py-0.5 rounded">11.4</span>
                      <h3 className="text-sm font-bold text-gray-900">Key Assumptions</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {slide.content.assumptions && slide.content.assumptions.slice(0, 6).map((assumption, idx) => (
                        <div key={idx} className="flex items-start gap-1.5">
                          <CheckCircle className="h-3 w-3 text-cyan-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-[9px] font-semibold text-gray-900 leading-tight">{typeof assumption === 'string' ? assumption : assumption.assumption}</p>
                            {typeof assumption === 'object' && assumption.detail && (
                              <p className="text-[8px] text-gray-600 mt-0.5 leading-tight">{assumption.detail}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sources Footer */}
                  {slide.content.sources && (
                    <div className="mt-2 pt-2 border-t border-gray-300">
                      <p className="text-[9px] text-gray-600 text-center italic leading-tight">
                        Sources: {slide.content.sources.slice(0, 2).join(' • ')}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* THE ASK */}
            {slide.type === 'ask' && slide.content && (
              <div className="flex-1 flex flex-col h-full relative bg-white" style={{ height: isFullscreen ? '100vh' : 'calc(100vh - 5rem)' }}>
                {/* Enhanced Background */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500" />
                </div>

                <div className="relative z-10 flex flex-col h-full px-6 sm:px-8 py-4">
                  {/* Narrative Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-3"
                  >
                    <h1 
                      className={`font-bold mb-1 tracking-tight ${isFullscreen ? 'text-2xl' : 'text-xl sm:text-2xl'}`}
                      style={{
                        background: 'linear-gradient(135deg, #06b6d4 0%, #ec4899 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {slide.title}
                    </h1>
                    <div className="h-0.5 w-20" style={{ background: 'linear-gradient(to right, #06b6d4, #ec4899)' }} />
                  </motion.div>
                  {/* Main Content - 2 Columns */}
                  <div className="flex-1 grid grid-cols-2 gap-4 mb-3">
                    {/* Left Column */}
                    <div className="space-y-3">
                      {/* Raise Amount */}
                      {slide.content.raise && (
                        <>
                          <div className="bg-gradient-to-br from-cyan-50 to-pink-50 rounded-xl p-4 border-2 border-cyan-200">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-[10px] font-bold text-cyan-600 bg-cyan-100 px-1.5 py-0.5 rounded">12.1</span>
                              <h3 className="text-sm font-bold text-gray-900">The Ask</h3>
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-1">{slide.content.raise.amount}</div>
                            <div className="text-[10px] text-gray-700 leading-tight">{slide.content.raise.runway}</div>
                          </div>

                          {/* Use of Funds */}
                          <div className="bg-white rounded-xl p-3 border-l-4 border-cyan-500 shadow-sm">
                            <h3 className="text-sm font-bold text-gray-900 mb-2">12.2 Use of Funds</h3>
                            <div className="space-y-2">
                              {slide.content.raise.use && slide.content.raise.use.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                  <div key={idx} className="space-y-1">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-1.5">
                                        <Icon className="h-3.5 w-3.5 text-cyan-500" />
                                        <span className="text-[10px] text-gray-800">{item.category}</span>
                                      </div>
                                      <span className="text-[10px] font-semibold text-gray-900">{item.percent}%</span>
                                    </div>
                                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                      <motion.div
                                        className="h-full bg-gradient-to-r from-cyan-500 to-pink-500"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${item.percent}%` }}
                                        transition={{ delay: idx * 0.1, duration: 0.8 }}
                                      />
                                    </div>
                                    <p className="text-[8px] text-gray-600 leading-tight">{item.detail}</p>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-3">
                      {/* Milestones */}
                      {slide.content.milestones && (
                        <div className="bg-white rounded-xl p-3 border-l-4 border-pink-500 shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[10px] font-bold text-pink-600 bg-pink-100 px-1.5 py-0.5 rounded">12.3</span>
                            <h3 className="text-sm font-bold text-gray-900">Milestones</h3>
                          </div>
                          <div className="space-y-2">
                            {slide.content.milestones.map((milestone, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle className="h-3.5 w-3.5 text-pink-500 mt-0.5 flex-shrink-0" />
                                <div>
                                  <p className="text-[10px] font-semibold text-gray-900 leading-tight">{typeof milestone === 'string' ? milestone : milestone.milestone}</p>
                                  {typeof milestone === 'object' && milestone.detail && (
                                    <p className="text-[9px] text-gray-600 mt-0.5 leading-tight">{milestone.detail}</p>
                                  )}
                                  {typeof milestone === 'object' && milestone.timeline && (
                                    <p className="text-[8px] text-gray-500 italic mt-0.5">{milestone.timeline}</p>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Why Now */}
                      {slide.content.whyNow && (
                        <div className="bg-white rounded-lg p-2.5 border border-gray-200">
                          <p className="text-[9px] font-semibold text-gray-700 uppercase mb-1.5">12.4 Why Now</p>
                          <div className="space-y-1">
                            {slide.content.whyNow.slice(0, 2).map((item, idx) => (
                              <div key={idx} className="flex items-start gap-1.5">
                                <CheckCircle className="h-3 w-3 text-cyan-500 mt-0.5 flex-shrink-0" />
                                <p className="text-[9px] text-gray-700 leading-tight">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Traction */}
                      {slide.content.traction && (
                        <div className="bg-white rounded-lg p-2.5 border border-gray-200">
                          <p className="text-[9px] font-semibold text-gray-700 uppercase mb-1.5">12.5 Traction</p>
                          <div className="space-y-1">
                            {slide.content.traction.slice(0, 2).map((item, idx) => (
                              <div key={idx} className="flex items-start gap-1.5">
                                <CheckCircle className="h-3 w-3 text-cyan-500 mt-0.5 flex-shrink-0" />
                                <p className="text-[9px] text-gray-700 leading-tight">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Closing Statement */}
                      {slide.content.closing && (
                        <div className="bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg p-3 text-white">
                          <p className="text-sm font-bold text-center leading-tight">"{slide.content.closing}"</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Sources Footer */}
                  {slide.content.sources && (
                    <div className="mt-2 pt-2 border-t border-gray-300">
                      <p className="text-[9px] text-gray-600 text-center italic leading-tight">
                        Sources: {slide.content.sources.slice(0, 2).join(' • ')}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Fallback for any unhandled slide types */}
            {!['title', 'executive', 'team', 'problem', 'framework', 'solution', 'differentiation', 'market-business', 'gtm-financial-ask'].includes(slide?.type) && (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">Slide {slide?.id + 1 || currentSlide + 1}</h1>
                  <p className="text-lg text-gray-600">Content rendering in progress...</p>
                  <p className="text-sm text-gray-500 mt-2">Type: {slide?.type || 'unknown'}</p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls - Hidden in fullscreen, positioned to not overlap */}
      {!isFullscreen && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-50 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full border border-gray-200 shadow-lg">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="h-4 w-4 text-gray-700" />
          </button>
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === currentSlide ? 'bg-cyan-500 w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="h-4 w-4 text-gray-700" />
          </button>
        </div>
      )}
    </div>
  );
};

export default PitchDeck;
