// ─────────────────────────────────────────────────────────────────────────────
//  10N CONSULTING — CONTENT FILE
//
//  This file controls all editable text and contact details on the website.
//  To update any copy: find the relevant line, change the text in quotes,
//  save the file, then commit to GitHub — the site updates automatically.
//
//  RULES: Only change text inside the quote marks " ".
//         Do not delete commas, brackets, or colons.
// ─────────────────────────────────────────────────────────────────────────────

const SITE = {

  // ── CONTACT DETAILS ────────────────────────────────────────────────────────
  //    Update email when switching to company address (e.g. hello@10nconsulting.com)
  contact: {
    email:        "hello@10nconsulting.com",
    location:     "Singapore · Serving Southeast Asia",
    linkedin:     "https://linkedin.com/in/ndhanothia",
    linkedin_label: "linkedin.com/in/ndhanothia",
    response_note: "We respond within 1 business day. No spam, no hard sell."
  },

  // ── NAVIGATION ─────────────────────────────────────────────────────────────
  nav: {
    cta: "Get in Touch"
  },

  // ── HOMEPAGE ───────────────────────────────────────────────────────────────
  home: {
    hero: {
      badge:         "Southeast Asia · Latitude 10°N",
      headline_l1:   "Scale your business",
      headline_l2:   "not your complexity.",
      subheadline:   "Where scale meets structure. Designing operations for what is next.",
      cta_primary:   "Explore Our Services",
      cta_secondary: "Schedule a Conversation"
    },
    stats: [
      { number: "20+",    label: "Years Operations Experience" },
      { number: "Oxford", label: "MBA · Strategy & Operations" },
      { number: "B2B",    label: "SaaS · FinTech · Corporate Services" },
      { number: "APAC",   label: "Focused. Singapore Based." }
    ],
    problem: {
      overline:    "Sound Familiar?",
      headline:    "Growing businesses hit the same operational walls",
      subheadline: "You have product-market fit and revenue traction — but your operations haven't kept up. The cracks are starting to show.",
      cards: [
        {
          icon:  "⚙️",
          title: "Everything runs on founder instinct",
          body:  "There's no documented process, no operating rhythm, and no data infrastructure. Decisions are reactive and the team is stretched thin."
        },
        {
          icon:  "📉",
          title: "Revenue is growing but margins aren't",
          body:  "You're winning customers but churn is creeping up, costs are hard to forecast, and you can't see where the leaks are."
        },
        {
          icon:  "👥",
          title: "You need senior ops expertise — not a full-time salary",
          body:  "Hiring a Director of Operations is too expensive right now. You need the thinking and delivery without the full-time commitment."
        }
      ]
    },
    services_intro: {
      overline:    "What We Do",
      headline:    "Operations built for the stage you're at",
      subheadline: "We work across the full spectrum of commercial and organisational operations — from first operating model to scaling infrastructure for hundreds of customers."
    },
    results: {
      overline:    "Track Record",
      headline:    "Operations improvements that move the needle",
      subheadline: "Representative results delivered across B2B SaaS and FinTech businesses in APAC and globally.",
      items: [
        { number: "50%",  label: "Churn reduction in 9 months through Lean Six Sigma intervention workflows" },
        { number: "75%",  label: "Improvement in early-stage customer retention through structured onboarding playbooks" },
        { number: "<3%",  label: "Forecast variance maintained globally through robust ARR modelling and dashboards" },
        { number: "14%",  label: "Operational cost savings through lifecycle redesign and billing automation across 13,000+ accounts" }
      ]
    },
    how: {
      overline:    "How We Work",
      headline:    "A structured approach.\nMeasurable outcomes.",
      subheadline: "Every engagement follows a proven framework — diagnostic first, then design, deploy, and refine.",
      steps: [
        { icon: "🔍", title: "Discover",  body: "Audit your current state. Identify operational gaps, bottlenecks, and quick wins through structured diagnosis." },
        { icon: "🗺️", title: "Design",    body: "Build the operating model, process maps, and frameworks tailored to your business stage and goals." },
        { icon: "🚀", title: "Deploy",    body: "Implement with your team. Hands-on delivery — not a slide deck. Systems, tools, and people aligned." },
        { icon: "📈", title: "Optimise",  body: "Measure, refine, and compound. Ongoing advisory ensures improvements stick and scale as you grow." }
      ]
    },
    cta_banner: {
      headline:    "Ready to build operations that scale?",
      subheadline: "Most engagements start with a no-obligation discovery call. Let's understand your business before proposing anything.",
      cta:         "Book a Discovery Call"
    }
  },

  // ── SERVICES ───────────────────────────────────────────────────────────────
  services: [
    {
      number:     "01",
      title:      "Operating Model Design & Scaling",
      short:      "Build the foundation that compounds efficiency as you grow.",
      description: "Your operating model is the backbone of your business. We design the structures, processes, and rhythms that allow your team to execute with clarity — and that compound efficiency as you grow. Most early-stage businesses run on ad-hoc decisions and founder instinct. That works until it doesn't. We replace ambiguity with architecture.",
      outcomes: [
        "Operating model design tailored to your business stage",
        "OKR and KPI framework development for teams and leadership",
        "Capacity planning and workforce design",
        "P&L ownership structures and budget oversight models",
        "Operating rhythms — weekly, monthly, and quarterly cadences",
        "Vendor governance and SLA management frameworks"
      ],
      sub_service: {
        title: "Change Management & Transformation",
        body:  "Growth is disruptive. New systems, restructured teams, and new ways of working require careful management. We combine structural design — org design, role clarity, capacity planning — with the human elements: coaching, performance culture, and accountability frameworks that bring your team through the transition.",
        outcomes: [
          "Organisational design and restructuring",
          "Role clarity frameworks and job architecture",
          "Performance management and coaching culture",
          "Cross-functional alignment and change narrative"
        ]
      },
      metric_1: { number: "100%", label: "Plan attainment with <5% forecast variance" },
      metric_2: { number: "25%",  label: "Team productivity improvement" }
    },
    {
      number:     "02",
      title:      "Revenue Operations & CRM",
      short:      "Make revenue predictable, visible, and defensible.",
      description: "Revenue should be predictable. We architect the commercial infrastructure — pipeline visibility, forecasting, CRM systems, and customer lifecycle playbooks — so you can see what's coming and act before problems compound. From setting up your first CRM to building multi-market ARR forecasting models with churn analytics and deal-risk scoring.",
      outcomes: [
        "CRM selection, configuration, and implementation",
        "ARR forecasting models and pipeline analytics dashboards",
        "Customer onboarding playbooks and lifecycle activation",
        "Churn analytics, health scoring, and risk escalation workflows",
        "Renewal operations and tiered account management",
        "Revenue risk visibility and executive reporting cadences"
      ],
      sub_service: {
        title: "Fractional COO / Ongoing Advisory",
        body:  "Not every business is ready for a full-time Chief Operating Officer — but every scaling business needs one. Our fractional COO retainer gives you a trusted, senior operations partner at a fraction of the cost. Ongoing engagement designed for founders and CEOs who want a senior operations brain in their corner.",
        outcomes: [
          "Regular attendance at leadership team and board meetings",
          "Ongoing KPI and OKR governance",
          "Operational risk identification and escalation",
          "Flexible hours-based or defined scope retainer"
        ]
      },
      metric_1: { number: "75%",  label: "Improvement in early-stage retention" },
      metric_2: { number: "90%+", label: "ARR maintained post-intervention" }
    },
    {
      number:     "03",
      title:      "Process Optimisation",
      short:      "Find the leaks. Fix them. Build repeatable systems.",
      description: "Inefficient processes don't just waste money — they erode team morale, slow growth, and create invisible risk. Using Lean Six Sigma (DMAIC) methodology, we identify and fix the bottlenecks that are silently costing you. We approach process improvement systematically: measure first, diagnose root causes, design structured solutions.",
      outcomes: [
        "End-to-end process audits and bottleneck identification",
        "DMAIC-based improvement programmes",
        "Lifecycle handoff redesign (sales → onboarding → success)",
        "Billing and finance process automation",
        "Manual workload reduction and operational efficiency gains",
        "SLA management and continuous improvement programmes"
      ],
      sub_service: null,
      metric_1: { number: "50%", label: "Churn reduction in 9 months" },
      metric_2: { number: "30%", label: "Reduction in manual workload" }
    },
    {
      number:     "04",
      title:      "Operational Analytics & Reporting",
      short:      "Build the dashboards that drive confident decisions.",
      description: "You can't manage what you can't measure. We build the data infrastructure, KPIs, and dashboards that give your leadership team — and your investors — the visibility to make confident decisions. From first KPI framework to board-ready reporting, we design the measurement architecture appropriate for your stage.",
      outcomes: [
        "KPI and OKR framework design for your specific business model",
        "Dashboard build (CRM-native, Looker, or equivalent)",
        "ARR, MRR, and churn reporting infrastructure",
        "Deal-risk scoring and pipeline health models",
        "MBR/QBR reporting cadences and board pack templates",
        "Forecasting models with scenario planning"
      ],
      sub_service: null,
      metric_1: { number: "<3%",    label: "Forecast variance maintained globally" },
      metric_2: { number: "Real-time", label: "Revenue risk visibility for leadership" }
    }
  ],

  // ── ENGAGEMENT MODELS ──────────────────────────────────────────────────────
  engagement: {
    overline:    "How We Engage",
    headline:    "Flexible models to match your needs",
    subheadline: "Every business is different. We structure engagements to match your stage, budget, and the complexity of what you're trying to solve.",
    models: [
      {
        icon:  "🔍",
        title: "Diagnostic Sprint",
        body:  "A focused 2–4 week engagement to audit your operations, identify gaps, and deliver a prioritised action plan. Ideal for founders who want a clear-eyed outside view before committing to a longer engagement.",
        tags:  ["2–4 weeks", "Fixed scope"]
      },
      {
        icon:        "🚀",
        title:       "Project Engagement",
        body:        "A defined-scope project with clear deliverables — operating model design, CRM implementation, process improvement programme. Defined timeline, defined outcome.",
        tags:        ["6–16 weeks", "Project-based"],
        highlighted: true,
        badge:       "Most Popular"
      },
      {
        icon:  "🤝",
        title: "Fractional Retainer",
        body:  "Ongoing senior operations advisory on a monthly retainer. Best for businesses that want a trusted ops partner embedded into their leadership rhythm over the medium to long term.",
        tags:  ["Monthly retainer", "Ongoing"]
      }
    ]
  },

  // ── ABOUT PAGE ─────────────────────────────────────────────────────────────
  about: {
    page_hero: {
      badge:       "About 10N",
      headline:    "Operator. Strategist. Builder.",
      subheadline: "20+ years. Oxford-trained. Lean Six Sigma-certified. Grounded in the real challenges of scaling B2B businesses across APAC."
    },
    name:  "Neeraj Dhanothia",
    title: "Founder & Principal Consultant",
    bio: [
      "Senior operations leader with 20+ years designing, scaling, and optimising commercial and operational infrastructures across B2B SaaS, FinTech, and technology-enabled businesses.",
      "I combine a systems-thinking mindset with hands-on delivery — translating executive strategy into scalable operating models that compound efficiency as businesses grow. I've owned P&L, reduced operating costs, built high-performing teams, and built the data infrastructure that enables board-level decision-making.",
      "I bring equal depth in commercial operations — revenue architecture, customer lifecycle, CRM systems — and organisational operations: capacity planning, workforce design, vendor governance, and SLA management."
    ],
    brand_story: {
      overline:  "The Name",
      headline:  "Why 10N?",
      body_1:    "10N refers to Latitude 10° North — the line that runs through the heart of Southeast Asia, crossing Singapore, Malaysia, Thailand, Vietnam, and the Philippines. It's the geography this business was built to serve.",
      body_2:    "It's also a play on a perfect score of 10 using the initial of the principal consultant — Neeraj Dhanothia. Two meanings, one name: regional roots, and a commitment to excellence."
    },
    credentials: [
      { icon: "🎓", label: "MBA in Strategy & Operations — University of Oxford" },
      { icon: "⚡", label: "Lean Six Sigma Green Belt — University of Oxford" },
      { icon: "🤖", label: "Strategic Leadership with AI & ML — Singapore Management University" },
      { icon: "🏛️", label: "BCom in Strategy & Accounting — Bangalore University" }
    ],
    career: [
      {
        period:   "2024–2026",
        region:   "SG",
        title:    "Director of Growth",
        company:  "FastCo Pte Ltd · B2B HR/Recruiting SaaS",
        summary:  "Redesigned the commercial operating model, architected full RevOps infrastructure, and drove 100% plan attainment with <5% forecast variance. Reduced churn 50% in 9 months through Lean Six Sigma interventions."
      },
      {
        period:   "2022–2024",
        region:   "SG",
        title:    "Director of Customer Relationships",
        company:  "Osome Pte Ltd · B2B FinTech SaaS",
        summary:  "Designed multi-market operational framework for 13,000+ accounts, maintaining 95%+ gross retention. Grew enterprise ARR contribution from 4% to 15% and delivered 14% operational cost savings."
      },
      {
        period:   "2020–2022",
        region:   "SG",
        title:    "Co-Founder & Chief Revenue Officer",
        company:  "Go Play Cosmetics · D2C E-commerce",
        summary:  "Built full commercial and operational infrastructure enabling 10× YoY revenue growth. Drove the #2 ranked beauty tech Kickstarter campaign to 12× its funding target."
      },
      {
        period:   "2018–2020",
        region:   "UK",
        title:    "CFO & COO",
        company:  "Worldfixer / The Float · Global Professional Network",
        summary:  "Owned full P&L scaling from 10K to 20K+ accounts at 30% CAGR. Delivered 8%+ gross margin improvement and 50% working capital cost reduction."
      },
      {
        period:   "2004–2015",
        region:   "IN",
        title:    "Sales & Enterprise Leadership",
        company:  "Dharma Life & B R Dhanothia · India",
        summary:  "Led 12-member AE team to 125% revenue attainment. Managed 3,500+ micro-entrepreneur relationships. Founded and scaled a distribution business to $2M ARR."
      }
    ],
    principles: {
      overline:    "How We Think",
      headline:    "Principles that guide every engagement",
      items: [
        { icon: "🔬", title: "Diagnose before prescribing",  body: "We never arrive with a predetermined answer. Every engagement starts with listening and understanding before recommending anything." },
        { icon: "📐", title: "Systems over heroics",          body: "Good operations shouldn't depend on any one person. We build systems, processes, and infrastructure that work without constant intervention." },
        { icon: "📊", title: "Measure everything",           body: "Improvements without measurement are just stories. We define success metrics before we start and report against them honestly throughout." },
        { icon: "🤝", title: "Hands-on delivery",            body: "We don't hand you a slide deck and walk away. We work alongside your team to implement, not just advise." },
        { icon: "💰", title: "Budget-conscious by design",   body: "Our clients are early-stage and capital-efficient. We always recommend solutions appropriate to your stage — not the most complex option." },
        { icon: "🌏", title: "Built for Southeast Asia",     body: "We understand the nuances of operating across Singapore, Malaysia, Thailand, Vietnam, the Philippines, and beyond — from regulatory context to cultural dynamics." }
      ]
    }
  },

  // ── CONTACT FORM ───────────────────────────────────────────────────────────
  form: {
    overline:  "Get in Touch",
    headline:  "Let's talk about your operations.",
    body:      "Whether you're a seed-stage founder or a scaling SME, the first conversation is always about understanding your business — not selling you anything.",
    service_options: [
      "Operating Model Design & Scaling",
      "Revenue Operations & CRM",
      "Process Optimisation",
      "Operational Analytics & Reporting",
      "Not sure yet — just exploring"
    ],
    message_placeholder: "Brief overview of your business, what stage you're at, and the main operational challenge you're facing...",
    submit_label: "Send Message →",
    success_title: "Message received.",
    success_body:  "Thank you for reaching out. Neeraj will be in touch within 1 business day."
  },

  // ── FOOTER ─────────────────────────────────────────────────────────────────
  footer: {
    tagline:   "Operations built to scale. Latitude 10°N.",
    copyright: "© 2025 10N Pte Ltd. Registered in Singapore. All rights reserved."
  }

};

// ─────────────────────────────────────────────────────────────────────────────
//  Inject contact details wherever data-content attributes exist in the HTML
// ─────────────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-contact]").forEach(el => {
    const key = el.getAttribute("data-contact");
    if (SITE.contact[key]) el.textContent = SITE.contact[key];
  });
  document.querySelectorAll("[data-contact-href]").forEach(el => {
    const key = el.getAttribute("data-contact-href");
    if (key === "email")    el.href = "mailto:" + SITE.contact.email;
    if (key === "phone")    el.href = "tel:"    + SITE.contact.phone.replace(/\s/g, "");
    if (key === "linkedin") el.href = SITE.contact.linkedin;
  });
  document.querySelectorAll("[data-form-note]").forEach(el => {
    el.textContent = SITE.contact.response_note;
  });
});
