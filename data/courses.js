export const courses = [
  {
    id: "fullstack-web-development-bootcamp",
    title: "Full-Stack Web Development with Next.js & Node",
    tagline: "Build production-grade SaaS applications from frontend to cloud deployment.",
    category: "Web Development",
    level: "Beginner",
    duration: "14 Weeks (84 hrs)",
    price: 4999,
    originalPrice: 11999,
    rating: 4.9,
    reviewsCount: 1240,
    studentsCount: 3820,
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    badge: "Bestseller",
    shortDescription: "Master modern full-stack web development. Learn React, Next.js App Router, Tailwind CSS, Node.js, PostgreSQL, and REST APIs with hands-on projects.",
    fullDescription: "Designed for aspiring software engineers and career switchers, this comprehensive bootcamp takes you from foundational JavaScript concepts to building scalable, production-ready full-stack applications. You will construct 4 real-world projects, implement secure authentication, connect to relational databases, and deploy live on cloud infrastructure.",
    instructor: {
      name: "Aditya Kulkarni",
      role: "Lead Full-Stack Architect",
      company: "Ex-Razorpay",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      bio: "Aditya has over 11 years of experience architecting high-scale web platforms. He has mentored over 4,000 engineering students across India.",
      experience: "11+ Yrs Industry Experience",
      rating: 4.95,
      coursesCount: 3
    },
    whatYouWillLearn: [
      "Modern React 19 fundamentals, server components, and dynamic client interactions",
      "Full-stack Next.js App Router with server actions and route handlers",
      "Tailwind CSS v4 design systems, accessible UI patterns, and responsive layouts",
      "Node.js backend microservices, RESTful API design, and middleware",
      "Relational databases with PostgreSQL, Prisma ORM, and query optimization",
      "Production deployment pipelines, CI/CD, caching, and Vercel edge networks"
    ],
    requirements: [
      "Basic understanding of HTML, CSS, and elementary JavaScript syntax",
      "A laptop or desktop with at least 8GB RAM (Windows, Mac, or Linux)",
      "Curiosity, commitment of 6-8 hours weekly, and eagerness to build real projects"
    ],
    targetAudience: [
      "Computer science college students looking for industry-aligned practical skills",
      "Frontend developers wanting to expand into full-stack engineering",
      "Self-taught coders seeking a structured, mentor-guided learning curriculum"
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: "Modern JavaScript (ES6+) & TypeScript Foundations",
        duration: "2 Weeks",
        lessons: [
          { title: "Arrow functions, destructuring, promises, and async/await", duration: "45 mins" },
          { title: "DOM manipulation and browser events architecture", duration: "60 mins" },
          { title: "TypeScript essentials: types, interfaces, and generics", duration: "90 mins" },
          { title: "Hands-on Project: Interactive Task Tracker & State Manager", duration: "120 mins" }
        ]
      },
      {
        moduleNumber: 2,
        title: "Advanced React & Component Engineering",
        duration: "3 Weeks",
        lessons: [
          { title: "Component lifecycle, state management, and custom hooks", duration: "75 mins" },
          { title: "Tailwind CSS v4 architecture and accessible design tokens", duration: "60 mins" },
          { title: "Context API, Zustand, and client-side performance tuning", duration: "90 mins" },
          { title: "Hands-on Project: E-Commerce Catalog with Real-Time Filters", duration: "180 mins" }
        ]
      },
      {
        moduleNumber: 3,
        title: "Next.js App Router & Server Components",
        duration: "3 Weeks",
        lessons: [
          { title: "Server components vs Client components deep-dive", duration: "75 mins" },
          { title: "Dynamic routing, nested layouts, loading states, and error boundaries", duration: "90 mins" },
          { title: "Server actions, form validation with Zod, and data fetching", duration: "90 mins" },
          { title: "SEO optimization, OpenGraph tags, and Web Vitals", duration: "60 mins" }
        ]
      },
      {
        moduleNumber: 4,
        title: "Backend Development, Databases & Cloud Deployment",
        duration: "4 Weeks",
        lessons: [
          { title: "Node.js runtime, Express/Next API routes, and JWT authentication", duration: "90 mins" },
          { title: "PostgreSQL setup, schema migrations, and Prisma ORM queries", duration: "120 mins" },
          { title: "Secure session cookies, role-based access control (RBAC)", duration: "90 mins" },
          { title: "Capstone Project: Multi-tenant SaaS Platform Deployed on Vercel", duration: "240 mins" }
        ]
      }
    ],
    reviews: [
      {
        name: "Pooja Deshmukh",
        role: "Software Developer at Infosys",
        rating: 5,
        date: "2 weeks ago",
        comment: "The Next.js App Router and server actions sections were extraordinarily detailed. I used the capstone project in my portfolio and cracked my frontend developer interview!"
      },
      {
        name: "Rahul Verma",
        role: "Frontend Intern at Zomato",
        rating: 5,
        date: "1 month ago",
        comment: "Aditya Sir explains complex state management and server component boundaries with absolute clarity. The projects are genuine portfolio-grade apps."
      },
      {
        name: "Siddharth Nair",
        role: "CS Student at COEP",
        rating: 4.8,
        date: "2 months ago",
        comment: "Excellent pace and structured mentorship. The weekly code reviews helped me write clean, enterprise-standard React code."
      }
    ]
  },
  {
    id: "practical-python-masterclass",
    title: "Python for Problem Solving & Backend Engineering",
    tagline: "From logic building to high-performance REST APIs with FastAPI.",
    category: "Programming",
    level: "Beginner",
    duration: "10 Weeks (50 hrs)",
    price: 3499,
    originalPrice: 7999,
    rating: 4.8,
    reviewsCount: 890,
    studentsCount: 2940,
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    badge: "Popular",
    shortDescription: "Build a rock-solid programming foundation with Python 3. Learn OOP, data structures, algorithms, and construct production APIs using FastAPI and SQLite.",
    fullDescription: "Master Python from the fundamentals to advanced backend engineering. Learn how to write clean, idiomatic Python code, apply Object-Oriented Programming (OOP) patterns, implement data structures, handle file I/O, and develop asynchronous REST APIs with FastAPI.",
    instructor: {
      name: "Rohit Shinde",
      role: "Senior Backend Engineer",
      company: "Ex-Oracle",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      bio: "Rohit specializes in high-throughput backend services and distributed systems with Python and Go. Over 9 years of software architecture experience.",
      experience: "9+ Yrs Industry Experience",
      rating: 4.88,
      coursesCount: 2
    },
    whatYouWillLearn: [
      "Python 3 core syntax, memory management, and idiomatic coding conventions",
      "Object-Oriented Programming: classes, inheritance, polymorphism, and encapsulation",
      "Data structures: linked lists, stacks, queues, hash maps, and algorithmic problem-solving",
      "File processing, JSON manipulation, error handling, and unit testing with pytest",
      "Building high-speed asynchronous REST APIs with FastAPI and Pydantic validation",
      "Database integration with SQLAlchemy and automated API documentation with Swagger"
    ],
    requirements: [
      "No prior coding experience required; starts from absolute scratch",
      "A laptop or desktop with Python 3.10+ installed (instructions provided in Module 1)"
    ],
    targetAudience: [
      "Beginners taking their first steps in programming and software engineering",
      "Students preparing for coding rounds and data structures technical interviews",
      "Professionals seeking to automate workflows and construct backend web services"
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: "Python Core Fundamentals & Logical Reasoning",
        duration: "2 Weeks",
        lessons: [
          { title: "Variables, primitive types, string methods, and conditionals", duration: "60 mins" },
          { title: "Loops, range generators, comprehensions, and functions", duration: "75 mins" },
          { title: "Lists, tuples, sets, and dictionary operations", duration: "60 mins" },
          { title: "Mini-Project: Automated CLI Expense Analyzer", duration: "90 mins" }
        ]
      },
      {
        moduleNumber: 2,
        title: "Object-Oriented Programming & Clean Architecture",
        duration: "3 Weeks",
        lessons: [
          { title: "Classes, instances, attributes, and magic methods (__init__, __str__)", duration: "80 mins" },
          { title: "Inheritance, abstract base classes, and polymorphism", duration: "75 mins" },
          { title: "Exception handling, custom error classes, and context managers", duration: "60 mins" },
          { title: "Mini-Project: Banking & Ledger Management Engine", duration: "120 mins" }
        ]
      },
      {
        moduleNumber: 3,
        title: "REST APIs with FastAPI & Asynchronous Python",
        duration: "3 Weeks",
        lessons: [
          { title: "AsyncIO concepts: coroutines, event loop, and task scheduling", duration: "75 mins" },
          { title: "FastAPI routing, path parameters, query parameters, and Pydantic schemas", duration: "90 mins" },
          { title: "SQLAlchemy ORM integration, SQLite/PostgreSQL connections", duration: "90 mins" },
          { title: "Capstone Project: Secure Course Enrollment & Authentication API", duration: "180 mins" }
        ]
      }
    ],
    reviews: [
      {
        name: "Gaurav Patil",
        role: "Associate Engineer at TCS",
        rating: 5,
        date: "3 weeks ago",
        comment: "Rohit's emphasis on clean code and OOP principles transformed my problem-solving approach. The FastAPI capstone is brilliantly designed."
      },
      {
        name: "Neha Joshi",
        role: "Python Trainee",
        rating: 4.7,
        date: "1 month ago",
        comment: "Clear explanations, zero jargon, and immediate practical application. Loved the coding exercises!"
      }
    ]
  },
  {
    id: "data-science-machine-learning-pro",
    title: "Applied Data Science & Machine Learning with Python",
    tagline: "Turn complex raw datasets into predictive models and actionable business intelligence.",
    category: "Data Science",
    level: "Intermediate",
    duration: "16 Weeks (96 hrs)",
    price: 5999,
    originalPrice: 13999,
    rating: 4.9,
    reviewsCount: 960,
    studentsCount: 3120,
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    badge: "Trending",
    shortDescription: "Comprehensive training in statistical data analysis, NumPy, Pandas, Scikit-Learn, data visualization, and end-to-end predictive machine learning pipelines.",
    fullDescription: "Equip yourself with the end-to-end analytical toolset utilized by modern data science teams. You will master data wrangling with Pandas, statistical hypothesis testing, interactive visual storytelling, regression, classification, clustering algorithms, and model deployment on Streamlit.",
    instructor: {
      name: "Dr. Ananya Roy",
      role: "Principal Data Scientist",
      company: "Ex-MuSigma",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      bio: "Dr. Ananya holds a PhD in Applied Statistics and has published 14 peer-reviewed research papers. She has trained data science professionals globally.",
      experience: "12+ Yrs Data & ML Experience",
      rating: 4.96,
      coursesCount: 2
    },
    whatYouWillLearn: [
      "Exploratory Data Analysis (EDA) using NumPy, Pandas, Seaborn, and Plotly",
      "Applied statistical probability distributions, hypothesis testing, and A/B test analysis",
      "Feature engineering: missing value imputation, encoding, normalization, and scaling",
      "Supervised ML: Linear & Logistic Regression, Decision Trees, Random Forests, XGBoost",
      "Unsupervised learning: K-Means clustering, PCA dimensionality reduction",
      "Building and deploying interactive ML web dashboards using Streamlit"
    ],
    requirements: [
      "Familiarity with basic Python programming syntax and functions",
      "High school mathematics (linear equations and elementary statistics)",
      "Dedicated computer with Jupyter Lab or Google Colab access"
    ],
    targetAudience: [
      "Software engineers looking to transition into data analytics and machine learning",
      "Business and marketing analysts wanting to build predictive forecasting systems",
      "University students preparing for Data Analyst and Junior Data Scientist roles"
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: "Scientific Computing & Exploratory Data Analysis",
        duration: "3 Weeks",
        lessons: [
          { title: "NumPy ndarrays, vectorization, indexing, and mathematical operations", duration: "60 mins" },
          { title: "Pandas DataFrames, time-series, merging, grouping, and aggregations", duration: "90 mins" },
          { title: "Visual storytelling with Matplotlib, Seaborn, and Plotly charts", duration: "75 mins" },
          { title: "Project: Real-World E-Commerce Consumer Behavior Analysis", duration: "120 mins" }
        ]
      },
      {
        moduleNumber: 2,
        title: "Machine Learning Algorithms & Model Validation",
        duration: "5 Weeks",
        lessons: [
          { title: "Data preprocessing, feature pipelines, and train-test splits", duration: "75 mins" },
          { title: "Linear & Logistic Regression with Scikit-Learn", duration: "90 mins" },
          { title: "Tree algorithms: Decision Trees, Random Forests, and Gradient Boosting", duration: "90 mins" },
          { title: "Hyperparameter tuning using GridSearchCV and cross-validation", duration: "80 mins" },
          { title: "Project: Loan Default Risk Prediction Engine with XGBoost", duration: "180 mins" }
        ]
      },
      {
        moduleNumber: 3,
        title: "Model Serving & Cloud Deployment",
        duration: "3 Weeks",
        lessons: [
          { title: "Model serialization with Joblib and ONNX runtimes", duration: "60 mins" },
          { title: "Building an interactive Streamlit predictive dashboard", duration: "90 mins" },
          { title: "Deploying ML applications to cloud container platforms", duration: "90 mins" }
        ]
      }
    ],
    reviews: [
      {
        name: "Abhinav Sharma",
        role: "Data Analyst at Swiggy",
        rating: 5,
        date: "1 month ago",
        comment: "Dr. Ananya's coverage of feature engineering and XGBoost tuning gave me the exact tools I needed for my day-to-day analytics projects."
      },
      {
        name: "Kavita Sen",
        role: "BI Engineer",
        rating: 4.9,
        date: "2 months ago",
        comment: "The curriculum bridges theory and practical business implementation seamlessly. Highly recommended!"
      }
    ]
  },
  {
    id: "generative-ai-engineering",
    title: "Generative AI & LLM Application Engineering",
    tagline: "Build enterprise AI agents, RAG pipelines, and fine-tune large language models.",
    category: "Artificial Intelligence",
    level: "Advanced",
    duration: "12 Weeks (72 hrs)",
    price: 6499,
    originalPrice: 14999,
    rating: 4.95,
    reviewsCount: 780,
    studentsCount: 2150,
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
    badge: "Hot",
    shortDescription: "Learn to build intelligent applications with LangChain, LlamaIndex, Vector Databases, Retrieval Augmented Generation (RAG), and open-source models.",
    fullDescription: "Step into the cutting edge of modern software engineering. This advanced program teaches developers how to integrate foundation models into production systems, design resilient multi-turn agents, create robust RAG architectures using vector search, and evaluate LLM responses.",
    instructor: {
      name: "Vikram Rathore",
      role: "AI Research Lead",
      company: "Ex-Microsoft AI",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      bio: "Vikram has designed conversational AI architectures serving millions of requests daily. An active open-source contributor in the LangChain ecosystem.",
      experience: "8+ Yrs Deep Learning Experience",
      rating: 4.98,
      coursesCount: 1
    },
    whatYouWillLearn: [
      "Transformer architectures, attention mechanisms, tokenization, and prompt engineering",
      "Building production Retrieval-Augmented Generation (RAG) systems",
      "Vector embeddings, similarity search, and vector stores (Pinecone, ChromaDB, PGVector)",
      "Autonomous agents, tool use, and structured outputs with LangGraph",
      "Quantization, LoRA fine-tuning, and running local models with Ollama & vLLM",
      "LLM evaluation metrics, safety guardrails, caching, and cost optimization"
    ],
    requirements: [
      "Proficiency in Python programming and working with REST APIs",
      "Basic understanding of vector mathematics and database concepts",
      "API keys for OpenAI/Anthropic/HuggingFace (free tier guidance included)"
    ],
    targetAudience: [
      "Experienced backend and full-stack developers integrating GenAI capabilities",
      "AI/ML engineers wanting to specialize in production LLM orchestration",
      "Tech founders building AI-native SaaS products"
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: "LLM Foundations & Prompt Engineering",
        duration: "2 Weeks",
        lessons: [
          { title: "Transformers architecture overview and token economics", duration: "60 mins" },
          { title: "Few-shot prompting, chain-of-thought, and system framing", duration: "75 mins" },
          { title: "Structured outputs, function calling, and JSON schemas", duration: "90 mins" }
        ]
      },
      {
        moduleNumber: 2,
        title: "Retrieval Augmented Generation (RAG) Systems",
        duration: "4 Weeks",
        lessons: [
          { title: "Document chunking strategies, semantic overlap, and metadata filtering", duration: "90 mins" },
          { title: "Dense vs sparse embeddings and hybrid search algorithms", duration: "75 mins" },
          { title: "Vector databases: ChromaDB and PostgreSQL with PGVector", duration: "90 mins" },
          { title: "Capstone Project: Enterprise Document Q&A Agent with Citations", duration: "180 mins" }
        ]
      },
      {
        moduleNumber: 3,
        title: "Autonomous Agents & LangGraph Workflows",
        duration: "3 Weeks",
        lessons: [
          { title: "ReAct loop: reasoning, tool selection, action execution", duration: "80 mins" },
          { title: "Multi-agent orchestration with state machines and human-in-the-loop", duration: "90 mins" },
          { title: "Evaluation frameworks: Ragas, hallucinations detection, and guardrails", duration: "90 mins" }
        ]
      }
    ],
    reviews: [
      {
        name: "Tanmay Hegde",
        role: "Senior Engineer at CRED",
        rating: 5,
        date: "2 weeks ago",
        comment: "The most structured RAG and LangGraph course available. It skips the hype and focuses on production reliability, latency, and cost."
      },
      {
        name: "Meera Krishnan",
        role: "AI Consultant",
        rating: 5,
        date: "1 month ago",
        comment: "Vikram explains state graphs and embedding evaluation with incredible depth. Our company's internal chatbot was built on these exact principles."
      }
    ]
  },
  {
    id: "modern-ui-ux-design-system",
    title: "UI/UX Design Systems & Product Experience in Figma",
    tagline: "Design pixel-perfect user interfaces and design systems that developers love.",
    category: "UI/UX Design",
    level: "Beginner",
    duration: "8 Weeks (48 hrs)",
    price: 3299,
    originalPrice: 6999,
    rating: 4.85,
    reviewsCount: 640,
    studentsCount: 2480,
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
    badge: "Creative",
    shortDescription: "Learn user research, wireframing, typography, color theory, component design systems, auto-layout, and interactive prototyping in Figma.",
    fullDescription: "Transform your visual ideas into intuitive digital products. This practical course guides you through user research methodologies, wireframing, high-fidelity UI design in Figma, creating scalable token-driven design systems, micro-interactions, and developer handoff workflows.",
    instructor: {
      name: "Sneha Bansal",
      role: "Product Design Lead",
      company: "Ex-Swiggy",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      bio: "Sneha has over 7 years of product design leadership, having created design systems used across consumer web and mobile applications.",
      experience: "7+ Yrs Product Design",
      rating: 4.91,
      coursesCount: 2
    },
    whatYouWillLearn: [
      "User research, user journey mapping, and information architecture",
      "Wireframing low-fidelity concepts into high-fidelity user flows",
      "Figma mastery: auto-layout 5.0, variables, component variants, and interactive states",
      "Design tokens: typography scales, accessible color palettes, and spacing systems",
      "Interactive component prototyping and micro-animation specs",
      "Design-to-code developer handoff specs and usability testing protocols"
    ],
    requirements: [
      "Free Figma account (browser-based or desktop app)",
      "An eye for aesthetics and curiosity about user behavior (no coding needed)"
    ],
    targetAudience: [
      "Beginners wishing to start a creative, high-growth career in UI/UX design",
      "Frontend developers wanting to elevate their visual design and UX thinking",
      "Product managers and founders designing their own MVP interfaces"
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: "User Experience Foundations & UX Research",
        duration: "2 Weeks",
        lessons: [
          { title: "User personas, journey mapping, and problem statement synthesis", duration: "60 mins" },
          { title: "Information architecture, site maps, and card sorting", duration: "60 mins" },
          { title: "Rapid paper wireframing and low-fidelity Figma wireframes", duration: "75 mins" }
        ]
      },
      {
        moduleNumber: 2,
        title: "Visual Design, Typography & Color Tokens",
        duration: "3 Weeks",
        lessons: [
          { title: "Type hierarchy, contrast ratios, and WCAG accessibility standards", duration: "75 mins" },
          { title: "Color theory, semantic naming, and dark mode palettes", duration: "60 mins" },
          { title: "Mastering Figma Auto-Layout, constraints, and responsive cards", duration: "90 mins" },
          { title: "Project: Modern Mobile Banking App UI Redesign", duration: "120 mins" }
        ]
      },
      {
        moduleNumber: 3,
        title: "Scalable Design Systems & Developer Handoff",
        duration: "3 Weeks",
        lessons: [
          { title: "Building component libraries with properties and variants", duration: "90 mins" },
          { title: "Figma Variables: multi-theme tokens and spacing tokens", duration: "75 mins" },
          { title: "Interactive prototypes with smart animate transitions", duration: "80 mins" },
          { title: "Capstone Project: End-to-End SaaS Design System & Presentation", duration: "150 mins" }
        ]
      }
    ],
    reviews: [
      {
        name: "Priya Nair",
        role: "UI Designer at Freshworks",
        rating: 5,
        date: "3 weeks ago",
        comment: "Sneha's lessons on Auto-Layout and Figma variables are unmatched. I reorganized my team's component library using the exact techniques from this course."
      },
      {
        name: "Karan Mehta",
        role: "Frontend Engineer",
        rating: 4.8,
        date: "2 months ago",
        comment: "As a coder, this course finally helped me bridge the gap between design theory and implementation. My UI look 10x cleaner now."
      }
    ]
  },
  {
    id: "tech-product-management-foundations",
    title: "Tech Product Management: Concept to Scale",
    tagline: "Drive product strategy, user discovery, metrics, and agile cross-functional delivery.",
    category: "Business & Management",
    level: "Intermediate",
    duration: "10 Weeks (50 hrs)",
    price: 3999,
    originalPrice: 8999,
    rating: 4.88,
    reviewsCount: 520,
    studentsCount: 1890,
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    badge: "Leadership",
    shortDescription: "Master PRD drafting, roadmap prioritization frameworks (RICE, MoSCoW), product metrics (AARRR), user discovery, and sprint execution.",
    fullDescription: "Learn how modern technology companies ideate, validate, build, and scale winning digital products. Taught by seasoned product executives, this program walks you through the entire product lifecycle with real case studies from high-growth Indian tech startups.",
    instructor: {
      name: "Rohan Varma",
      role: "VP of Product",
      company: "Ex-Flipkart",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      bio: "Rohan has over 13 years of product management leadership, launching zero-to-one products that scaled to over 10 million active users.",
      experience: "13+ Yrs Product Leadership",
      rating: 4.93,
      coursesCount: 1
    },
    whatYouWillLearn: [
      "Product discovery frameworks: customer interviews, empathy mapping, and jobs-to-be-done (JTBD)",
      "Drafting executive Product Requirement Documents (PRDs) and user stories",
      "Prioritization frameworks: RICE scoring, Kano model, MoSCoW, and opportunity trees",
      "Defining North Star metrics, cohort retention, funnel conversion, and unit economics",
      "Agile ceremonies: sprint planning, backlog grooming, retrospectives, and Jira workflows",
      "Go-to-market (GTM) launch strategies and post-launch experiment iterations"
    ],
    requirements: [
      "Basic interest in technology products and business workflows",
      "No coding background required; strategic and analytical thinking focused"
    ],
    targetAudience: [
      "Engineers and analysts seeking transition into Associate Product Manager (APM) roles",
      "Project managers and scrum masters upgrading to modern product leadership",
      "Founders and startup operators managing cross-functional product teams"
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: "Product Discovery & Market Validation",
        duration: "3 Weeks",
        lessons: [
          { title: "Identifying market opportunities and competitive landscape analysis", duration: "60 mins" },
          { title: "Conducting user discovery interviews without leading bias", duration: "75 mins" },
          { title: "Jobs to be Done (JTBD) and Value Proposition Canvas", duration: "75 mins" }
        ]
      },
      {
        moduleNumber: 2,
        title: "PRDs, Roadmaps & Agile Sprint Delivery",
        duration: "4 Weeks",
        lessons: [
          { title: "Structuring world-class Product Requirement Documents (PRDs)", duration: "90 mins" },
          { title: "RICE and MoSCoW prioritization in practice", duration: "75 mins" },
          { title: "Working with engineering and design teams in two-week agile sprints", duration: "80 mins" },
          { title: "Project: Complete PRD & Roadmap for an EdTech Subscription Feature", duration: "180 mins" }
        ]
      },
      {
        moduleNumber: 3,
        title: "Product Analytics, A/B Testing & GTM",
        duration: "3 Weeks",
        lessons: [
          { title: "The Pirate Funnel (AARRR) and North Star metric formulation", duration: "80 mins" },
          { title: "Designing statistically valid A/B experiment hypotheses", duration: "75 mins" },
          { title: "GTM launch plans, beta cohorts, and product marketing alignment", duration: "90 mins" }
        ]
      }
    ],
    reviews: [
      {
        name: "Shreya Ghoshal",
        role: "APM at Paytm",
        rating: 5,
        date: "1 month ago",
        comment: "Rohan's PRD teardown sessions were pure gold. I used the PRD template created in this course in my APM interview and received an offer within a week."
      },
      {
        name: "Harshil Dave",
        role: "Product Analyst",
        rating: 4.8,
        date: "2 months ago",
        comment: "The focus on realistic startup constraints and stakeholder alignment sets this course apart from generic theory."
      }
    ]
  },
  {
    id: "cloud-native-devops-aws",
    title: "Cloud-Native DevOps & Infrastructure on AWS",
    tagline: "Automate CI/CD pipelines, containerize with Docker, and orchestrate with Kubernetes.",
    category: "Web Development",
    level: "Advanced",
    duration: "12 Weeks (72 hrs)",
    price: 5499,
    originalPrice: 12499,
    rating: 4.87,
    reviewsCount: 430,
    studentsCount: 1620,
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    badge: "Cloud",
    shortDescription: "Comprehensive hands-on training in Linux administration, Docker containers, Kubernetes clusters, GitHub Actions CI/CD, Terraform, and AWS services.",
    fullDescription: "Master modern cloud infrastructure and DevOps practices. You will learn to provision automated AWS architectures with Terraform, containerize microservices with Docker, manage high-availability Kubernetes deployments, and create automated CI/CD workflows.",
    instructor: {
      name: "Kunal Bansal",
      role: "Lead DevOps Specialist",
      company: "Ex-AWS",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
      bio: "Kunal has architected multi-region AWS cloud systems with 99.99% uptime. Certified AWS Solutions Architect Professional.",
      experience: "10+ Yrs Cloud Architecture",
      rating: 4.9,
      coursesCount: 1
    },
    whatYouWillLearn: [
      "Linux terminal mastery, bash scripting, and server security hardening",
      "Docker multi-stage builds, container optimization, and Docker Compose networks",
      "AWS core services: EC2, S3, RDS, VPC networking, IAM security, and CloudWatch",
      "Infrastructure as Code (IaC) with Terraform for reproducible cloud provisioning",
      "Automated CI/CD workflows with GitHub Actions: testing, building, and zero-downtime deployment",
      "Kubernetes cluster basics: Pods, Deployments, Services, Ingress, and Helm charts"
    ],
    requirements: [
      "Comfort with command line operations and basic web architectures",
      "A free tier AWS account (step-by-step setup covered in Module 1)"
    ],
    targetAudience: [
      "Developers looking to own their end-to-end cloud infrastructure and deployments",
      "System administrators transitioning into Cloud and DevOps engineering",
      "Students targeting high-demand Cloud Architect and DevOps Engineer roles"
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: "Linux Foundations & Docker Containerization",
        duration: "3 Weeks",
        lessons: [
          { title: "Linux file system permissions, process management, and SSH keys", duration: "60 mins" },
          { title: "Docker architectures: writing efficient Dockerfiles with multi-stage builds", duration: "75 mins" },
          { title: "Docker Compose multi-container environments (Node, Postgres, Redis)", duration: "90 mins" }
        ]
      },
      {
        moduleNumber: 2,
        title: "AWS Cloud Architecture & Terraform IaC",
        duration: "4 Weeks",
        lessons: [
          { title: "VPC networking: subnets, route tables, internet gateways, and security groups", duration: "90 mins" },
          { title: "Terraform syntax, state management, variables, and cloud provisioning", duration: "90 mins" },
          { title: "RDS PostgreSQL database high-availability and S3 asset buckets", duration: "75 mins" }
        ]
      },
      {
        moduleNumber: 3,
        title: "CI/CD Pipelines & Kubernetes Orchestration",
        duration: "5 Weeks",
        lessons: [
          { title: "GitHub Actions automated test execution and container push to Amazon ECR", duration: "90 mins" },
          { title: "Kubernetes manifests: Deployments, Services, ConfigMaps, and Secrets", duration: "90 mins" },
          { title: "Ingress controllers, automated SSL certificates, and rolling updates", duration: "90 mins" },
          { title: "Capstone: Zero-Downtime Microservices Deployment Pipeline on AWS EKS", duration: "240 mins" }
        ]
      }
    ],
    reviews: [
      {
        name: "Deepak Soni",
        role: "DevOps Engineer at Paytm",
        rating: 5,
        date: "3 weeks ago",
        comment: "Kunal makes Kubernetes and Terraform easy to digest. The hands-on labs with real AWS free-tier instances gave me the exact confidence I needed."
      }
    ]
  },
  {
    id: "data-structures-algorithms-java",
    title: "Data Structures & Algorithms in Java for Interviews",
    tagline: "Crush coding interviews with structured pattern-based problem solving.",
    category: "Programming",
    level: "Intermediate",
    duration: "12 Weeks (60 hrs)",
    price: 3699,
    originalPrice: 7999,
    rating: 4.92,
    reviewsCount: 710,
    studentsCount: 2850,
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    badge: "Interview Prep",
    shortDescription: "Solve 200+ curated LeetCode-style problems across Arrays, Two Pointers, Sliding Window, Trees, Graphs, and Dynamic Programming.",
    fullDescription: "Build deep algorithmic intuition. Rather than memorizing solutions, learn 15 underlying patterns (Sliding Window, Fast & Slow Pointers, Monotonic Stack, Backtracking, DP) that allow you to tackle any unseen coding interview question with confidence.",
    instructor: {
      name: "Rohit Shinde",
      role: "Senior Backend Engineer",
      company: "Ex-Oracle",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      bio: "Rohit has conducted 150+ technical coding interviews at top tier companies. Expert in Java algorithms and low-latency systems.",
      experience: "9+ Yrs Industry Experience",
      rating: 4.88,
      coursesCount: 2
    },
    whatYouWillLearn: [
      "Time and space complexity analysis (Big-O notation) in depth",
      "Two Pointers, Sliding Window, and Prefix Sum techniques",
      "Binary search variations and Divide & Conquer paradigms",
      "Binary Trees, BSTs, and Graph traversals (BFS, DFS, Dijkstra)",
      "Recursion, backtracking, and state tree exploration",
      "Dynamic Programming: memoization vs tabulation with classic patterns"
    ],
    requirements: [
      "Basic understanding of Java syntax (loops, methods, arrays)",
      "Willingness to practice 3-5 problems each week consistently"
    ],
    targetAudience: [
      "Pre-final and final year college students preparing for campus placement drives",
      "Working developers looking to crack product-based company coding rounds",
      "Engineers looking to build rock-solid computer science fundamentals"
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: "Arrays, Two Pointers & Sliding Window",
        duration: "3 Weeks",
        lessons: [
          { title: "Big-O time and space trade-offs, worst-case vs amortized analysis", duration: "60 mins" },
          { title: "Two pointers: opposites, same direction, fast and slow pointers", duration: "90 mins" },
          { title: "Sliding window technique for maximum/minimum sub-array problems", duration: "90 mins" }
        ]
      },
      {
        moduleNumber: 2,
        title: "Trees, Graphs & Algorithmic Traversals",
        duration: "5 Weeks",
        lessons: [
          { title: "Binary tree traversals (inorder, preorder, postorder, level order)", duration: "90 mins" },
          { title: "Binary Search Trees (BST): insertion, deletion, and validation", duration: "75 mins" },
          { title: "Graph representations (Adjacency list/matrix), BFS and DFS", duration: "90 mins" },
          { title: "Topological Sort and Cycle Detection algorithms", duration: "90 mins" }
        ]
      },
      {
        moduleNumber: 3,
        title: "Dynamic Programming & Interview Strategies",
        duration: "4 Weeks",
        lessons: [
          { title: "Recursion state trees, memoization top-down approaches", duration: "90 mins" },
          { title: "Tabulation bottom-up approaches and space optimization", duration: "90 mins" },
          { title: "Mock Interview Strategy: structuring communication under pressure", duration: "90 mins" }
        ]
      }
    ],
    reviews: [
      {
        name: "Yashwardhan Joshi",
        role: "SDE-1 at Amazon",
        rating: 5,
        date: "2 weeks ago",
        comment: "The pattern-based approach completely changed how I look at LeetCode questions. Passed my technical bar without panic!"
      }
    ]
  }
];

export const courseCategories = [
  {
    name: "Web Development",
    slug: "web-development",
    description: "Build modern web apps, SaaS tools, and full-stack cloud applications.",
    icon: "Code2",
    count: 2
  },
  {
    name: "Programming",
    slug: "programming",
    description: "Master foundational languages, data structures, and algorithmic logic.",
    icon: "Terminal",
    count: 2
  },
  {
    name: "Data Science",
    slug: "data-science",
    description: "Extract insights, analyze statistics, and build machine learning models.",
    icon: "BarChart3",
    count: 1
  },
  {
    name: "Artificial Intelligence",
    slug: "artificial-intelligence",
    description: "Harness LLMs, build RAG pipelines, and orchestrate AI agents.",
    icon: "Cpu",
    count: 1
  },
  {
    name: "UI/UX Design",
    slug: "ui-ux-design",
    description: "Design pixel-perfect user journeys, design systems, and Figma prototypes.",
    icon: "Layout",
    count: 1
  },
  {
    name: "Business & Management",
    slug: "business-management",
    description: "Lead product strategy, agile sprints, user metrics, and business scale.",
    icon: "Briefcase",
    count: 1
  }
];
