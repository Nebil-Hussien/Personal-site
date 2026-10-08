// Content for the site. Used by `npm run seed` and as a fallback when MONGODB_URI is unset.
export const profile = {
  name: "Nebil Hussien",
  title: "Software Engineer · Full-Stack Developer · AI & Machine Learning",
  affiliation: "MSc Data Science, University of Potsdam",
  tagline: "I combine software engineering, data science, AI and scientific research to build scalable solutions with real-world value.",
  about: [
    "Software engineer with 5+ years in full-stack web and mobile development (JavaScript/React Native, PHP/Laravel, Python/Django, Flutter), 3 years in data automation and analysis and 2 years in applied AI and LLM work. I have built applications across finance, e-commerce, digital health, education and research.",
    "I'm pursuing a Master's in Data Science at the University of Potsdam, with research experience at the Hasso Plattner Institute in collaboration with the MIT Media Lab. Previously I worked as a Software Engineer at Elebat Management and Technology Solutions in Addis Ababa, where I led delivery of a loan platform used by around 10,000 people."
  ],
  skills: [
    "Python", "R", "Java", "JavaScript/TypeScript", "SQL", "PHP", "Dart", "C++", "C#",
    "MERN", "Next.js", "React Native", "Flutter", "Laravel", "Django",
    "PostgreSQL", "MySQL", "MongoDB", "Docker", "Azure", "Linux", "Git"
  ],
  stats: [
    { value: "10,000+", label: "users on the loan platform I deployed" },
    { value: "€613k+", label: "disbursed through Borsa (102M birr)" },
    { value: "5+ yrs", label: "of full-stack web & mobile engineering" },
    { value: "3 yrs", label: "of data automation & analysis" },
    { value: "2 yrs", label: "of applied AI & LLM work" },
    { value: "ECIS · CHI", label: "co-authored research venues" }
  ],
  experience: [
    {
      role: "Research Assistant", org: "Hasso Plattner Institute", period: "Jan 2025 – May 2025",
      points: [
        "Built online and lab experiments in psychology and human-computer interaction (PsychoPy/JS, Next.js).",
        "Prompt engineering for LLM-driven neuro-cognitive research, in collaboration with the MIT Media Lab."
      ]
    },
    {
      role: "Freelance Web Developer", org: "Self-employed", period: "Feb 2024 – Nov 2024",
      points: ["Designed and delivered web applications for clients."]
    },
    {
      role: "Software Engineer & IT Lead", org: "Elebat Management and Technology Solutions", period: "Mar 2022 – May 2023",
      points: [
        "Deployed a loan platform for ~10,000 users, with 102M+ birr disbursed.",
        "Built a rural credit-scoring model, and led the move from waterfall to Agile delivery.",
        "Shipped Digital Clinic, the Unilever Shakti e-commerce system and an RFID attendance system."
      ]
    },
    {
      role: "Software Engineering Intern", org: "Nuria Logistics", period: "Mar 2020 – May 2021",
      points: ["Implemented SAP, optimized data workflows, and wrote R analytics that informed market expansion."]
    }
  ],
  education: [
    { degree: "MSc Data Science", school: "University of Potsdam", period: "Oct 2023 – Present" },
    { degree: "BSc Computer and Information Science (summa cum laude)", school: "Addis Ababa University", period: "2017 – 2021" }
  ],
  links: {
    email: "hussien@uni-potsdam.de",
    github: "https://github.com/Nebil-Hussien",
    linkedin: "http://www.linkedin.com/in/nebil-hussien-a548a3156",
    researchgate: "https://www.researchgate.net/profile/Nebil-Hussien/research"
  }
};

export const works = [
  {
    type: "software",
    slug: "borsa",
    featured: true,
    title: "Borsa: Loan Management System",
    description:
      "End-to-end loan management platform (Laravel backend and Android app). The first de-risked loan system deployed in Ethiopia, supported by the MasterCard Foundation, with over 102 million birr (about €613k) disbursed. I led a team of four using Agile and Jira to deliver the MVP.",
    tags: ["Laravel", "Android", "MySQL", "Team lead", "2022–2024"],
    links: { code: "", demo: "", paper: "" },
    order: 1,
  },
  {
    type: "software",
    slug: "credit-scoring",
    featured: true,
    title: "Credit Scoring Model for Rural Areas",
    description:
      "Credit scoring model built on data analytics to reduce lending risk for rural borrowers, supporting the loan process with an efficacy of 62%.",
    tags: ["Python", "Data analysis", "Machine learning"],
    links: { code: "", demo: "", paper: "" },
    order: 2,
  },
  {
    type: "software",
    slug: "digital-clinic",
    featured: true,
    title: "Digital Clinic & Remote Health Checkups",
    description:
      "Digital health platform built with the Ethiopian Ministry of Health and Bridge. It serves 3,000+ users and has helped create over 1,500 jobs for doctors and nurses.",
    tags: ["Full-stack", "Digital health"],
    links: {
      code: "https://github.com/Nebil-Hussien/Digital-Clinic-and-Remote-Preventive-Health-Care-Public",
      demo: "",
      paper: "",
    },
    order: 3,
  },
  {
    type: "software",
    slug: "shakti",
    featured: true,
    title: "Unilever OMS",
    description:
      "E-commerce and order-tracking system for Unilever Ethiopia's Shakti initiative, giving over 5,000 women a platform to buy and sell Unilever products.",
    tags: ["E-commerce", "Full-stack"],
    links: {
      code: "https://github.com/Nebil-Hussien/Uniliever-OMS",
      demo: "",
      paper: "",
    },
    order: 4,
  },
  {
    type: "software",
    slug: "rfid-attendance",
    featured: true,
    title: "RFID Biometric Student Attendance",
    description:
      "Cloud-based attendance system using RFID technology to track students entering school premises. I led the team; it is deployed at a prestigious school with 350+ users.",
    tags: ["RFID", "Cloud", "Team lead"],
    links: { code: "", demo: "", paper: "" },
    order: 4.6,
  },
  {
    type: "software",
    slug: "fidel",
    featured: true,
    title: "Fidel",
    description: "JavaScript web project.",
    tags: ["JavaScript", "Web"],
    links: {
      code: "https://github.com/Nebil-Hussien/Fidel-Finalized",
      demo: "",
      paper: "",
    },
    order: 4.4,
  },
  {
    type: "software",
    slug: "lymn-ecommerce",
    title: "LYMN E-Commerce",
    description:
      "Object-oriented analysis and design project at Addis Ababa University, modeled on Amazon: it presents all suppliers to buyers regardless of shop location, makes price and quality comparison easy, and removes broker fees.",
    tags: ["System analysis & design", "E-commerce", "OOAD", "Jun 2019"],
    links: {
      code: "https://github.com/Nebil-Hussien/LYMN-E-Commerce",
      demo: "",
      paper: "https://doi.org/10.13140/RG.2.2.13304.15360",
    },
    order: 6.5,
  },
  {
    type: "software",
    slug: "patient-management",
    title: "Patient Management System",
    description:
      "System analysis and design project for health centers: lets people with no web-development background build a responsive website of their own design, with database creation and connectivity included.",
    tags: ["System analysis & design", "Health", "Web", "Jan 2018"],
    links: {
      code: "https://github.com/Nebil-Hussien/Patient-Management-System",
      demo: "",
      paper: "https://doi.org/10.13140/RG.2.2.33436.81288",
    },
    order: 6.6,
  },
  {
    type: "software",
    slug: "sky-beats",
    featured: true,
    title: "Sky Beats",
    description:
      "Data-analysis workflow on whether weather shapes the music people stream. It combines DWD German weather data with Spotify charts and audio features to test mood links, seasonal effects, and predicting music mood from weather and weather from music.",
    tags: [
      "Data analysis",
      "Machine learning",
      "Python",
      "Jupyter",
      "Spotify",
      "DWD weather data",
    ],
    links: {
      code: "https://github.com/Nebil-Hussien/Sky-beats",
      demo: "",
      paper: "",
    },
    order: 6.7,
  },
  {
    type: "research",
    slug: "chatbot-rct",
    featured: true,
    title:
      "Chatbot-Based Future-Thinking Interventions for Reducing Impulsivity and Promoting Healthier Dietary Choices: A Randomized Controlled Trial",
    description:
      "Randomized controlled trial testing whether chatbot-based future-thinking interventions reduce impulsivity and encourage healthier dietary choices.",
    tags: [
      "Randomized controlled trial",
      "Chatbot",
      "Health behavior",
      "HPI",
      "MIT Media Lab",
      "2025",
    ],
    links: { code: "", demo: "https://hpi-mit.vercel.app/", paper: "" },
    order: 4.2,
  },
  {
    type: "research",
    slug: "svd-qr-summarization",
    featured: true,
    title:
      "Automatic Keyword and Sentence Extraction: An Implementation and Analysis of SVD and QR Decomposition with Column Pivoting",
    description:
      "Python implementation of an unsupervised extractive summarizer built on SVD and QR decomposition. Evaluated on BBC News articles and scientific abstracts, it extracts essential, non-redundant content well when the text is well structured and free of semantic abstraction. Future work: alternative factorizations and neural embeddings.",
    tags: [
      "NLP",
      "Text summarization",
      "SVD",
      "QR decomposition",
      "Python",
      "Feb 2026",
    ],
    links: {
      code: "",
      demo: "",
      paper: "https://doi.org/10.13140/RG.2.2.14182.18245",
    },
    order: 8.2,
  },
  {
    type: "research",
    slug: "cybersecurity-aau",
    title: "Cyber Security Awareness: The Case of Addis Ababa University",
    description:
      "Questionnaire-based exploratory study of how aware Addis Ababa University IT students are of cyber security discourses (technical, cyber crooks and cyber conflicts), and whether missing courses or awareness programs explain gaps.",
    tags: ["Cybersecurity", "Awareness", "Survey", "Jun 2018"],
    links: {
      code: "",
      demo: "",
      paper:
        "https://www.researchgate.net/publication/391807860_CYBER_SECURITY_AWARENESS_The_case_of_Addis_Ababa_University",
    },
    order: 8.7,
  },
  {
    type: "research",
    slug: "cybersecurity-potsdam",
    featured: true,
    title:
      "Unveiling the Behavioral and Awareness Factors Influencing Cybersecurity Compliance: A Case Study of the University of Potsdam",
    description:
      "Survey study (56 students, PLS analysis) built on the Theory of Planned Behavior. Attitude, normative beliefs and self-efficacy explain students' intention to comply with the university's Information Security Policy, and specific security awareness has a positive effect while general awareness does not.",
    tags: [
      "Cybersecurity",
      "Theory of Planned Behavior",
      "PLS",
      "University of Potsdam",
    ],
    links: {
      code: "",
      demo: "",
      paper:
        "https://www.researchgate.net/publication/391807858_Unveiling_the_Behavioral_and_Awareness_Factors_Influencing_Cybersecurity_Compliance_A_Case_Study_of_the_University_of_Potsdam",
    },
    order: 8.5,
  },
  {
    type: "research",
    slug: "academic-and-professional achievement on linkedin exposure and effectcts on anexiety",
    title:
      "Academic and Professional Achievements on LinkedIn: How Exposure Affects Anxiety Among Students and Early-Career Professionals",
    description:
      "This study explores the relationship between LinkedIn exposure and anxiety levels among academic and professional individuals.",
    tags: [
      "LinkedIn",
      "Anxiety",
      "Academic Achievement",
      "Professional Development",
    ],
    links: {
      code: "",
      demo: "",
      paper:
        "https://www.researchgate.net/publication415302395_LinkedIn_Exposure_and_Anxiety_in_Students_and_Professionals_Academic_and_Professional_Achievements_on_LinkedIn_How_Exposure_Affects_Anxiety_Among_Students_and_Early-Career_Professionals",
    },
    order: 9.5,
  },
  {
    type: "research",
    slug: "machine-learning-approaches-for-detecting-intended-sarcasm",
    title: "Machine Learning Approaches for Detecting Intended Sarcasm in Text",
    description:
      "Sarcasm detection on social media poses significant challenges due to its reliance on context, tone, and cultural subtleties. This study addresses these hurdles by integrating Naïve Bayes, Transformers, and SVM, alongside feature engineering, transfer learning, and ensemble methods. To mitigate class imbalance, the work applies SMOTE on the main dataset and includes additional corpora to maintain balance. These datasets vary in size, annotation, and labeling formats, modeling real-world complexity. Results affirm that context-aware architectures substantially boost accuracy and F1-scores, underscoring the importance of semantic and discourse-level cues for effective sarcasm detection",
    tags: [
      "Machine Learning",
      "Sarcasm Detection",
      "Natural Language Processing",
    ],
    links: {
      code: "https://github.com/Nebil-Hussien/ANLP-Sentiment-Sarcasm-Detection",
      demo: "",
      paper:
        "https://www.researchgate.net/publication/415302806_A_Machine_Learning_Approach_for_Detecting_Intended_Sarcasm",
    },
    order: 9.6,
  },
  {
    type: "research",
    slug: "genai-writing-review",
    featured: true,
    title:
      "Human-GenAI Collaboration in Writing: A Systematic Literature Review",
    description:
      "Human-AI writing in the post-LLM era is an active, multidimensional partnership. 78% of studies report concrete functional benefits, 87% stress human agency and control, and 73.9% describe an interactive, back-and-forth process.",
    tags: ["Systematic review", "LLMs", "Aug 2025"],
    links: { code: "", demo: "", paper: "" },
    order: 9,
  },
  {
    type: "software",
    slug: "kubernetes",
    title: "Kubernetes Fault Tolerance & Scaling",
    description:
      "Hands-on research into Kubernetes resilience: simulated pod failures and recovery with liveness and readiness probes, and observed automatic scaling under changing load.",
    tags: ["Kubernetes", "Docker", "2023"],
    links: { code: "", demo: "", paper: "" },
    order: 9.5,
  },
  {
    type: "software",
    slug: "hpi-mit-web-app",
    title: "HPI–MIT Research Web App",
    description:
      "Next.js (TypeScript) web app from my research work with the Hasso Plattner Institute and MIT Media Lab.",
    tags: ["Next.js", "TypeScript", "HPI", "MIT Media Lab"],
    links: {
      code: "https://github.com/Nebil-Hussien/HPI-MIT-Research",
      demo: "",
      paper: "",
    },
    order: 20,
  },
  {
    type: "software",
    slug: "slotify",
    title: "Slotify",
    description: "Spotify-style music streaming clone built with PHP.",
    tags: ["PHP", "Web"],
    links: {
      code: "https://github.com/Nebil-Hussien/Slotify",
      demo: "",
      paper: "",
    },
    order: 21,
  },
  {
    type: "software",
    slug: "ezi-web",
    title: "EZI Web",
    description: "JavaScript web project.",
    tags: ["JavaScript", "Web"],
    links: {
      code: "https://github.com/Nebil-Hussien/EZI-web",
      demo: "",
      paper: "",
    },
    order: 23,
  },
  {
    type: "software",
    slug: "efar",
    title: "Efar",
    description: "JavaScript web project.",
    tags: ["JavaScript", "Web"],
    links: {
      code: "https://github.com/Nebil-Hussien/efar",
      demo: "",
      paper: "",
    },
    order: 24,
  },
  {
    type: "software",
    slug: "economic-analysis",
    title: "Economic Analysis of Germany and Neighboring Countries",
    description:
      "Data-driven analysis of key economic indicators for Germany and its neighbors, using a financial-technology lens to interpret regional economic trends.",
    tags: ["Data analysis", "Economics"],
    links: {
      code: "https://github.com/Nebil-Hussien/Economic-Analysis-of-Germany-and-Neighboring-Countries",
      demo: "",
      paper: "",
    },
    order: 25,
  },
  {
    type: "software",
    slug: "natural-disasters",
    title: "Natural Disasters Analysis Worldwide",
    description: "Statistical analysis of worldwide natural disaster data.",
    tags: ["Data analysis", "Python", "Jupyter"],
    links: {
      code: "https://github.com/Nebil-Hussien/Natural-Disasters-Analysis-Worldwide",
      demo: "",
      paper: "",
    },
    order: 26,
  },
  {
    type: "software",
    slug: "health-analysis",
    title: "Health Analysis",
    description: "Health data analysis project with an HTML report.",
    tags: ["Data analysis", "Health"],
    links: {
      code: "https://github.com/Nebil-Hussien/Health-Analysis",
      demo: "",
      paper: "",
    },
    order: 27,
  },
  {
    type: "software",
    slug: "software-ratings",
    title: "Software Ratings",
    description: "Jupyter notebook project analyzing software ratings.",
    tags: ["Data analysis", "Python", "Jupyter"],
    links: {
      code: "https://github.com/Nebil-Hussien/SoftwareRatings",
      demo: "",
      paper: "",
    },
    order: 28,
  },
  {
    type: "software",
    slug: "house-rent",
    title: "House Rent Prediction",
    description: "Machine-learning notebook that predicts house rent.",
    tags: ["Machine learning", "Python", "Jupyter"],
    links: {
      code: "https://github.com/Nebil-Hussien/HouseRent-Predict",
      demo: "",
      paper: "",
    },
    order: 29,
  },
  {
    type: "software",
    slug: "supermarket-sales",
    title: "Supermarket Sales Prediction",
    description: "Machine-learning notebook that predicts supermarket sales.",
    tags: ["Machine learning", "Python", "Jupyter"],
    links: {
      code: "https://github.com/Nebil-Hussien/Supermarket-Sales-Predict",
      demo: "",
      paper: "",
    },
    order: 30,
  },
  {
    type: "software",
    slug: "premier-league",
    title: "Ethiopian Premier League Score Results",
    description: "C++ program for Ethiopian Premier League match results.",
    tags: ["C++"],
    links: {
      code: "https://github.com/Nebil-Hussien/Ethiopian-Premier-League-Score-Result",
      demo: "",
      paper: "",
    },
    order: 31,
  },
  {
    type: "software",
    slug: "magic-square",
    title: "Magic Square Game",
    description: "Magic square game written in C++.",
    tags: ["C++", "Game"],
    links: {
      code: "https://github.com/Nebil-Hussien/Magic-Square-Game",
      demo: "",
      paper: "",
    },
    order: 32,
  },
  {
    type: "software",
    slug: "prolog-ai",
    title: "Prolog AI",
    description: "Prolog artificial-intelligence exercises.",
    tags: ["Prolog", "AI"],
    links: {
      code: "https://github.com/Nebil-Hussien/Prolog",
      demo: "",
      paper: "",
    },
    order: 33,
  },
];
