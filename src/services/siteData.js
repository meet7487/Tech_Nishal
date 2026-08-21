export const companyStats = [
  { label: 'Students Trained', value: 300, suffix: '+' },
  { label: 'Students Placed', value: 230, suffix: '+' },
  { label: 'Workshop Attendees', value: 1000, suffix: '+' },
];

export const homeServices = [
  {
    icon: 'training',
    title: 'Training Institute',
    description: 'Industry-oriented programs for developers, analysts, and job-ready technology professionals.',
  },
  {
    icon: 'internship',
    title: 'Internships',
    description: 'Structured internships with mentorship, assessments, live projects, and certification.',
  },
  {
    icon: 'software',
    title: 'Software Development',
    description: 'Websites, web applications, business software, mobile apps, AI tools, and cloud solutions.',
  },
  {
    icon: 'placement',
    title: 'Placement Support',
    description: 'Resume building, interview practice, referrals, and job assistance for career growth.',
  },
];

export const developmentServices = [
  {
    slug: 'website-development',
    icon: 'website',
    title: 'Website Development',
    description: 'Fast, responsive corporate websites with polished brand presentation and conversion-focused layouts.',
    detail: 'We create responsive business websites that clearly explain your services, build trust, and help visitors contact you faster. The focus is on clean presentation, quick loading, mobile-first layouts, and inquiry-focused sections that support real business goals.',
    deepDetails: [
      'Your website can include service pages, portfolio sections, lead forms, map integration, WhatsApp/contact actions, testimonial areas, and SEO-ready page structure.',
      'We plan the content flow so visitors understand what you offer, why they should trust you, and how to reach you without confusion.',
    ],
    includes: ['Corporate website', 'Landing pages', 'SEO-ready structure', 'Contact forms'],
    outcomes: ['Mobile responsive design', 'Fast loading pages', 'Inquiry-focused layout'],
  },
  {
    slug: 'web-application-development',
    icon: 'webapp',
    title: 'Web Application Development',
    description: 'Secure portals, dashboards, admin systems, and SaaS-style products for business workflows.',
    detail: 'We build custom web applications for teams who need dashboards, portals, role-based access, data management, and workflow automation. The application is shaped around your workflow so daily tasks become easier to track, manage, and improve.',
    deepDetails: [
      'Common builds include admin panels, customer portals, employee systems, reporting dashboards, approval flows, and subscription-style product interfaces.',
      'We can connect the frontend with secure APIs, databases, authentication, file handling, notifications, and deployment-ready architecture.',
    ],
    includes: ['Admin dashboard', 'User portal', 'Authentication', 'Reports and workflows'],
    outcomes: ['Role-based access', 'Clean dashboard UX', 'Scalable feature structure'],
  },
  {
    slug: 'mobile-app-development',
    icon: 'mobile',
    title: 'Mobile App Development',
    description: 'Modern mobile experiences for customer engagement, internal operations, and digital services.',
    detail: 'We design and develop mobile app experiences for customer-facing products, internal team tools, booking systems, and digital services. Each app flow is planned for simple navigation, fast actions, and clear information on small screens.',
    deepDetails: [
      'Mobile solutions can support login, profiles, bookings, order tracking, notifications, API data, forms, dashboards, and admin-managed content.',
      'We also help define the screen flow before development so the app feels practical for users and manageable for your team.',
    ],
    includes: ['Android-ready UI', 'App flows', 'API integration', 'Push-ready architecture'],
    outcomes: ['Smooth mobile flows', 'API-connected screens', 'User-friendly app structure'],
  },
  {
    slug: 'erp-software',
    icon: 'erp',
    title: 'ERP Software',
    description: 'Custom ERP modules for inventory, finance, HR, operations, billing, and reporting.',
    detail: 'We build ERP modules around your actual business process so daily operations, billing, inventory, HR, and reports stay connected. Instead of forcing your team into a generic tool, the modules match your approvals, records, and reporting needs.',
    deepDetails: [
      'ERP work can include inventory tracking, purchase records, billing, staff management, attendance, vendor/customer records, permissions, and management reports.',
      'The goal is to reduce duplicate data entry and make important business information available from one organized system.',
    ],
    includes: ['Inventory module', 'Billing workflows', 'HR and operations', 'Management reports'],
    outcomes: ['Centralized records', 'Better operational visibility', 'Custom module planning'],
  },
  {
    slug: 'crm-software',
    icon: 'crm',
    title: 'CRM Software',
    description: 'Lead management, sales pipelines, follow-ups, customer records, and performance analytics.',
    detail: 'We create CRM systems that help your team track leads, follow-ups, customers, sales stages, and communication history in one place. Your sales team can see priorities clearly and managers can understand pipeline movement without scattered spreadsheets.',
    deepDetails: [
      'CRM features can include lead assignment, follow-up reminders, customer notes, status pipelines, call history, quotation tracking, and simple performance reports.',
      'We can customize fields, roles, and dashboard views around your sales process so the system feels natural for your team.',
    ],
    includes: ['Lead pipeline', 'Follow-up tracking', 'Customer records', 'Sales analytics'],
    outcomes: ['Improved follow-ups', 'Clear sales pipeline', 'Manager-ready reporting'],
  },
  {
    slug: 'e-commerce-development',
    icon: 'ecommerce',
    title: 'E-Commerce Development',
    description: 'Product catalogs, checkout flows, payment integration, order management, and store analytics.',
    detail: 'We develop online stores with product catalogs, cart and checkout flows, payment support, order tracking, and admin management. The store is designed so customers can browse, compare, purchase, and contact support with minimum friction.',
    deepDetails: [
      'E-commerce builds can include categories, product variants, coupons, inventory status, payment setup, order dashboards, customer accounts, and delivery-related workflows.',
      'We also structure the admin side so your team can manage products, pricing, orders, and basic analytics without technical dependency.',
    ],
    includes: ['Product catalog', 'Cart and checkout', 'Payment setup', 'Order dashboard'],
    outcomes: ['Easy product management', 'Clean checkout flow', 'Order tracking support'],
  },
  {
    slug: 'custom-software-development',
    icon: 'custom',
    title: 'Custom Software Development',
    description: 'Purpose-built tools tailored to unique business requirements and existing team processes.',
    detail: 'We build custom software when ready-made tools do not match your workflow, data structure, approvals, or reporting needs. The system is planned after understanding your daily process, pain points, and the exact data your team needs to manage.',
    deepDetails: [
      'Custom software can include internal portals, task systems, booking flows, file workflows, approval chains, reporting tools, and integrations with your existing software.',
      'We keep the interface simple for repeat usage and design the backend so future modules can be added without rebuilding the product from zero.',
    ],
    includes: ['Requirement mapping', 'Custom modules', 'Automation flows', 'Role-based access'],
    outcomes: ['Workflow-specific solution', 'Reduced manual work', 'Expandable product base'],
  },
  {
    slug: 'ui-ux-design',
    icon: 'design',
    title: 'UI/UX Design',
    description: 'Clean interfaces, wireframes, prototypes, and user journeys for effective digital products.',
    detail: 'We plan clean user journeys and interfaces so your website, app, or software feels simple, modern, and easy to use. The design work focuses on clarity, spacing, hierarchy, readable content, and predictable actions for real users.',
    deepDetails: [
      'Design deliverables can include user flow planning, wireframes, UI screens, clickable prototypes, component styles, and responsive layout guidance.',
      'This helps teams validate the experience before development and reduces confusion during implementation.',
    ],
    includes: ['Wireframes', 'UI screens', 'Clickable prototype', 'Design system basics'],
    outcomes: ['Clear user journeys', 'Development-ready screens', 'Consistent visual system'],
  },
  {
    slug: 'api-development',
    icon: 'api',
    title: 'API Development',
    description: 'Reliable REST APIs, integrations, authentication flows, and automation-friendly services.',
    detail: 'We develop secure APIs and integrations that connect your frontend, mobile app, database, third-party tools, and automation systems. APIs are planned with clear endpoints, validation, errors, authentication, and documentation in mind.',
    deepDetails: [
      'API work can include REST endpoints, login/authentication, payment or CRM integrations, file upload flows, reporting endpoints, and automation triggers.',
      'We structure APIs so frontend teams can integrate smoothly and your application can grow without messy data handling.',
    ],
    includes: ['REST APIs', 'Authentication', 'Third-party integrations', 'API documentation'],
    outcomes: ['Secure data flow', 'Integration-ready backend', 'Readable API structure'],
  },
  {
    slug: 'cloud-solutions',
    icon: 'cloud',
    title: 'Cloud Solutions',
    description: 'Deployment, cloud migration, hosting setup, monitoring, and scalable architecture planning.',
    detail: 'We help deploy and manage applications on reliable hosting or cloud environments with performance, backups, and scalability in mind. The setup is chosen around traffic, budget, uptime needs, and the technical stack of your project.',
    deepDetails: [
      'Cloud support can include domain setup, SSL, server deployment, CI/CD basics, database hosting, environment variables, backups, and monitoring guidance.',
      'We also help move existing projects to cleaner hosting setups when performance or maintenance has become difficult.',
    ],
    includes: ['Hosting setup', 'Deployment pipeline', 'Monitoring basics', 'Cloud migration'],
    outcomes: ['Reliable deployment', 'Backup-aware setup', 'Performance-focused hosting'],
  },
  {
    slug: 'ai-based-applications',
    icon: 'ai',
    title: 'AI-Based Applications',
    description: 'AI assistants, document automation, recommendation tools, and data-driven application features.',
    detail: 'We add useful AI features such as assistants, document processing, content generation, smart search, and workflow automation. The goal is to solve a practical workflow problem, not just add AI for decoration.',
    deepDetails: [
      'AI features can include chat assistants, lead response helpers, document summarizers, content generators, recommendation flows, and internal knowledge search.',
      'We plan prompts, data flow, user controls, and result review points so the feature stays useful and understandable for your team.',
    ],
    includes: ['AI assistants', 'Document automation', 'Smart search', 'LLM integrations'],
    outcomes: ['Practical AI workflow', 'Human review controls', 'Automation-ready features'],
  },
  {
    slug: 'maintenance-support',
    icon: 'support',
    title: 'Maintenance & Support',
    description: 'Performance tuning, bug fixes, feature updates, security checks, and long-term product support.',
    detail: 'We support existing websites and applications with bug fixes, speed improvements, feature updates, backups, and regular monitoring. Maintenance keeps your digital product stable while your business continues using it day to day.',
    deepDetails: [
      'Support can include issue investigation, UI fixes, responsive improvements, dependency updates, content updates, hosting checks, and small feature additions.',
      'We prioritize fixes by business impact so urgent user-facing problems are handled first and future improvements stay organized.',
    ],
    includes: ['Bug fixing', 'Performance checks', 'Feature updates', 'Security review'],
    outcomes: ['Stable live product', 'Faster issue resolution', 'Long-term improvement plan'],
  },
];

export const developmentProcess = [
  { title: 'Discovery', description: 'Understand goals, users, workflows, constraints, and business priorities.' },
  { title: 'Planning', description: 'Define scope, architecture, timeline, milestones, and delivery checkpoints.' },
  { title: 'Design', description: 'Create clean UX flows, visual systems, and approval-ready prototypes.' },
  { title: 'Development', description: 'Build robust features with responsive UI and maintainable code.' },
  { title: 'Testing', description: 'Validate usability, performance, security, device behavior, and integrations.' },
  { title: 'Launch & Support', description: 'Deploy, monitor, improve, and support the product after release.' },
];

export const technologies = [
  { group: 'Frontend', items: ['React.js', 'JavaScript', 'Material UI', 'Bootstrap', 'HTML5', 'CSS3'] },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'Authentication'] },
  { group: 'Databases', items: ['SQL', 'MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'] },
  { group: 'Cloud & Tools', items: ['AWS', 'Azure', 'GitHub', 'Docker', 'CI/CD', 'Analytics'] },
  { group: 'AI', items: ['Generative AI', 'Prompt Engineering', 'LLM Apps', 'Automation'] },
];

export const whyChoose = [
  'Practical training and delivery teams under one brand',
  'Live project culture with mentor review checkpoints',
  'Professional UI quality with scalable engineering practices',
  'Career-focused guidance for students and working professionals',
  'Flexible project engagement for startups, SMEs, and enterprises',
  'Transparent communication from discovery through support',
];

export const internshipPrograms = [
  {
    icon: 'react',
    title: 'React.js Internship',
    description: 'Component architecture, hooks, routing, UI systems, API integration, and deployable frontend projects.',
  },
  {
    icon: 'node',
    title: 'Node.js Internship',
    description: 'Express APIs, authentication, database integration, server-side patterns, and backend project work.',
  },
  {
    icon: 'python',
    title: 'Python Internship',
    description: 'Core Python, automation, data handling, APIs, project structure, and practical scripting workflows.',
  },
  {
    icon: 'mern',
    title: 'MERN Stack Internship',
    description: 'MongoDB, Express, React, Node, authentication, deployment, and full-stack live project delivery.',
  },
  {
    icon: 'fullstack',
    title: 'Full Stack Development Internship',
    description: 'Frontend, backend, databases, version control, testing basics, and production-ready team practices.',
  },
  {
    icon: 'ai',
    title: 'Generative AI Internship',
    description: 'Prompt design, AI app patterns, API usage, automation workflows, and responsible AI practices.',
  },
  {
    icon: 'sql',
    title: 'SQL Internship',
    description: 'Queries, joins, constraints, normalization, reporting, optimization basics, and database projects.',
  },
];

export const internshipBenefits = [
  'Live Projects',
  'Industry Mentorship',
  'Weekly Assessments',
  'Resume Building',
  'Mock Interviews',
  'Certificate',
  'Letter of Recommendation',
  'Placement Assistance',
];

export const internshipProcess = [
  'Register',
  'Interview',
  'Training',
  'Live Projects',
  'Certification',
  'Placement Support',
];

export const courses = [
  {
    slug: 'react-js',
    name: 'ReactJS',
    duration: '3 to 6 months',
    level: 'Beginner to Advanced',
    icon: 'react',
    image: '/course-images/react.svg',
    imageAlt: 'ReactJS course illustration',
    description: 'Build modern single-page applications with components, hooks, routing, API integration, and deployment.',
    longDescription: [
      'ReactJS course me aap reusable components, hooks, routing, forms, API integration, and deployment ko practical project ke through learn karenge.',
      'Ye course un students ke liye useful hai jo frontend developer role ke liye portfolio-ready web apps banana chahte hain.',
    ],
    skills: ['Components', 'Hooks', 'Router', 'State', 'APIs', 'Deployment'],
    overview:
      'A practical React course designed to help learners build responsive production-style interfaces and understand real frontend workflows.',
    syllabus: ['JavaScript refresh', 'Components and props', 'Hooks and state', 'React Router', 'Forms and validation', 'API integration', 'Performance basics'],
    tools: ['React', 'Vite', 'Material UI', 'GitHub', 'Netlify'],
    projects: ['Course dashboard', 'Portfolio website', 'API-powered admin panel'],
    instructor: 'Frontend Mentor Team',
    reviews: ['Clear teaching and practical tasks.', 'The projects helped me explain React in interviews.'],
  },
  {
    slug: 'node-js',
    name: 'Node.js',
    duration: '3 to 6 months',
    level: 'Intermediate',
    icon: 'node',
    image: '/course-images/node.svg',
    imageAlt: 'Node.js backend course illustration',
    description: 'Learn server-side JavaScript, Express APIs, authentication, databases, and backend deployment basics.',
    longDescription: [
      'Node.js course backend development par focused hai jisme Express routing, middleware, authentication, database connection, and API structure cover hota hai.',
      'Isme aap real backend projects banate hain jo frontend apps, dashboards, and mobile apps ke saath connect ho sakte hain.',
    ],
    skills: ['Express', 'REST APIs', 'Auth', 'MongoDB', 'SQL', 'Deployment'],
    overview:
      'A backend-focused course covering API design, middleware, authentication, database access, and production practices.',
    syllabus: ['Node runtime', 'Express routing', 'Middleware', 'Authentication', 'Database integration', 'Error handling', 'Deployment'],
    tools: ['Node.js', 'Express.js', 'Postman', 'MongoDB', 'MySQL'],
    projects: ['Task API', 'Student management API', 'Authentication service'],
    instructor: 'Backend Mentor Team',
    reviews: ['Good backend foundations.', 'API project was very useful for my resume.'],
  },
  {
    slug: 'python',
    name: 'Python',
    duration: '3 to 6 months',
    level: 'Beginner Friendly',
    icon: 'python',
    image: '/course-images/python.svg',
    imageAlt: 'Python programming course illustration',
    description: 'Master Python fundamentals, file handling, automation, APIs, and project-based programming logic.',
    longDescription: [
      'Python course me programming basics se start karke functions, OOP, file handling, modules, APIs, and automation scripts tak practical learning hoti hai.',
      'Agar aap coding start kar rahe hain ya automation/data/API projects banana chahte hain, Python ek strong foundation deta hai.',
    ],
    skills: ['Core Python', 'OOP', 'Files', 'APIs', 'Automation', 'Projects'],
    overview:
      'A beginner-friendly Python course that moves from programming basics to useful automation and API projects.',
    syllabus: ['Syntax and variables', 'Control flow', 'Functions', 'OOP', 'File handling', 'Modules', 'APIs'],
    tools: ['Python', 'VS Code', 'Git', 'Jupyter Basics'],
    projects: ['Automation scripts', 'CLI utility', 'API data project'],
    instructor: 'Python Mentor Team',
    reviews: ['Perfect for coding basics.', 'Weekly practice improved my logic.'],
  },
  {
    slug: 'mern-stack',
    name: 'MERN Stack',
    duration: '8 to 10 months',
    level: 'Job Ready',
    icon: 'mern',
    image: '/course-images/mern.svg',
    imageAlt: 'MERN Stack full-stack course illustration',
    description: 'Develop complete full-stack apps with MongoDB, Express, React, Node, authentication, and deployment.',
    longDescription: [
      'MERN Stack course me MongoDB, Express.js, React, and Node.js ko combine karke complete full-stack applications banana sikhaya jata hai.',
      'Aap authentication, API integration, database models, deployment, and code review ke saath job-ready project workflow practice karenge.',
    ],
    skills: ['MongoDB', 'Express', 'React', 'Node', 'Auth', 'Hosting'],
    overview:
      'A full-stack program for learners who want to build deployable web applications and understand end-to-end delivery.',
    syllabus: ['Frontend foundations', 'React apps', 'Backend APIs', 'MongoDB modeling', 'Authentication', 'Deployment', 'Project reviews'],
    tools: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Postman', 'Vercel'],
    projects: ['Learning platform', 'CRM mini app', 'E-commerce backend and frontend'],
    instructor: 'Full Stack Mentor Team',
    reviews: ['The final project made my portfolio stronger.', 'Mentors reviewed my code in detail.'],
  },
  {
    slug: 'full-stack-development',
    name: 'Full Stack Development',
    duration: '8 to 10 months',
    level: 'Career Track',
    icon: 'fullstack',
    image: '/course-images/full-stack.svg',
    imageAlt: 'Full Stack Development course illustration',
    description: 'A complete web development path covering frontend, backend, databases, deployment, and interviews.',
    longDescription: [
      'Full Stack Development course frontend, backend, database, version control, deployment, and interview preparation ko ek complete career track me cover karta hai.',
      'Is path me learners multiple projects build karte hain, jisse portfolio strong hota hai aur technical interview me explain karna easy hota hai.',
    ],
    skills: ['Frontend', 'Backend', 'Databases', 'Git', 'Testing', 'Interviews'],
    overview:
      'A career-track program that blends coding fundamentals, application development, projects, and placement preparation.',
    syllabus: ['HTML/CSS/JS', 'React', 'Backend APIs', 'Database design', 'Testing basics', 'Deployment', 'Interview preparation'],
    tools: ['React', 'Node.js', 'SQL', 'MongoDB', 'GitHub', 'Cloud Hosting'],
    projects: ['Portfolio', 'Job portal', 'Business management app'],
    instructor: 'Career Track Mentor Team',
    reviews: ['The structure was complete.', 'Mock interviews helped me prepare better.'],
  },
  {
    slug: 'generative-ai',
    name: 'GenAI',
    duration: '3 to 6 months',
    level: 'Modern Tech',
    icon: 'ai',
    image: '/course-images/genai.svg',
    imageAlt: 'Generative AI course illustration',
    description: 'Create AI-powered workflows, prompt systems, assistants, automations, and practical LLM applications.',
    longDescription: [
      'Generative AI course me prompt engineering, AI assistant patterns, automation workflows, APIs, and responsible AI usage cover hota hai.',
      'Aap practical AI tools banana seekhenge jo documents, content, search, lead response, and business automation me use ho sakte hain.',
    ],
    skills: ['Prompts', 'LLM Apps', 'Automation', 'APIs', 'AI UX', 'Ethics'],
    overview:
      'A modern AI course focused on building practical assistants, automation flows, and AI-enhanced application features.',
    syllabus: ['AI foundations', 'Prompt engineering', 'Structured outputs', 'AI assistants', 'Automation flows', 'Responsible usage', 'Project demo'],
    tools: ['OpenAI APIs', 'JavaScript', 'Python', 'Automation Tools'],
    projects: ['AI resume helper', 'Document assistant', 'Lead response assistant'],
    instructor: 'AI Mentor Team',
    reviews: ['Very relevant content.', 'I built an AI tool I could demo confidently.'],
  },
  {
    slug: 'sql',
    name: 'SQL',
    duration: '2 to 3 months',
    level: 'Beginner to Intermediate',
    icon: 'sql',
    image: '/course-images/sql.svg',
    imageAlt: 'SQL database course illustration',
    description: 'Learn database design, queries, joins, subqueries, reports, constraints, and optimization basics.',
    longDescription: [
      'SQL course database basics, tables, queries, joins, subqueries, reports, constraints, and optimization concepts ko practical examples se cover karta hai.',
      'Ye course developers, analysts, and students ke liye useful hai jinko data query karna, reports banana, and database logic samajhna hai.',
    ],
    skills: ['Queries', 'Joins', 'Reports', 'Schema', 'Views', 'Optimization'],
    overview:
      'A database course for students and professionals who need strong SQL fundamentals for development and analytics roles.',
    syllabus: ['Database basics', 'DDL and DML', 'Joins', 'Subqueries', 'Views', 'Stored procedures basics', 'Optimization basics'],
    tools: ['MySQL', 'PostgreSQL', 'SQL Workbench', 'Excel exports'],
    projects: ['Sales reports', 'Student database', 'Inventory query set'],
    instructor: 'Database Mentor Team',
    reviews: ['Queries finally made sense.', 'Useful for interviews and projects.'],
  },
  {
    slug: 'basic-coding',
    name: 'Basic Coding',
    duration: '2 to 3 months',
    level: 'Foundation',
    icon: 'code',
    image: '/course-images/basic-coding.svg',
    imageAlt: 'Basic Coding foundation course illustration',
    description: 'Start with programming logic, problem solving, flowcharts, syntax basics, and mini coding projects.',
    longDescription: [
      'Basic Coding course absolute beginners ke liye hai jisme logic building, variables, conditions, loops, functions, arrays, and debugging basics cover hote hain.',
      'Is course ka goal coding fear remove karke learners ko small projects and consistent practice ke through confident banana hai.',
    ],
    skills: ['Logic', 'Loops', 'Functions', 'Arrays', 'Debugging', 'Mini Projects'],
    overview:
      'A strong foundation course for absolute beginners who want to start coding with confidence and discipline.',
    syllabus: ['Logic building', 'Flowcharts', 'Variables', 'Conditions', 'Loops', 'Functions', 'Arrays'],
    tools: ['VS Code', 'Git Basics', 'Browser Console'],
    projects: ['Calculator', 'Quiz app', 'Number games'],
    instructor: 'Foundation Mentor Team',
    reviews: ['Great starting point.', 'The assignments made me consistent.'],
  },
];

export const placementServices = [
  { icon: 'resume', title: 'Resume Building', description: 'Create role-specific resumes that clearly present skills, projects, and impact.' },
  { icon: 'linkedin', title: 'LinkedIn Profile Optimization', description: 'Improve profile positioning, headline, summary, project proof, and recruiter visibility.' },
  { icon: 'aptitude', title: 'Aptitude Training', description: 'Practice quantitative aptitude, reasoning, patterns, and time-based assessments.' },
  { icon: 'technical', title: 'Technical Interview Preparation', description: 'Revise core concepts, project explanations, coding questions, and technology fundamentals.' },
  { icon: 'hr', title: 'HR Interview Preparation', description: 'Prepare confident answers for common HR, behavioral, salary, and career questions.' },
  { icon: 'mock', title: 'Mock Interviews', description: 'Attend structured mock rounds and receive focused feedback from mentors.' },
  { icon: 'communication', title: 'Communication Skills', description: 'Improve self-introduction, project explanation, teamwork stories, and interview clarity.' },
  { icon: 'referrals', title: 'Company Referrals', description: 'Get guided access to relevant openings and referral opportunities through partner networks.' },
  { icon: 'job', title: 'Job Assistance', description: 'Track openings, applications, follow-ups, and interview preparation until students are placement-ready.' },
];

export const placementStats = [
  { label: 'Students Trained', value: 300, suffix: '+' },
  { label: 'Students Placed', value: 230, suffix: '+' },
  { label: 'Workshop Attendees', value: 1000, suffix: '+' },
];

export const placementProcess = [
  { title: 'Profile Audit', description: 'Review skills, resume, projects, and career goals.' },
  { title: 'Skill Mapping', description: 'Match students with roles and identify preparation gaps.' },
  { title: 'Interview Readiness', description: 'Run technical, aptitude, communication, and HR preparation.' },
  { title: 'Applications', description: 'Guide job applications, referrals, and company shortlists.' },
  { title: 'Offer Support', description: 'Help students prepare for joining formalities and career growth.' },
];

export const testimonials = [
  {
    quote: 'Tech Nishal made React feel practical. The mentors focused on projects and real interview explanations.',
    name: 'Sneha Kulkarni',
    role: 'React Student',
  },
  {
    quote: 'The internship had weekly targets, code reviews, and a live project that I could show in interviews.',
    name: 'Karan Patel',
    role: 'MERN Intern',
  },
  {
    quote: 'Placement support helped me polish my resume and answer project questions with confidence.',
    name: 'Meera Joshi',
    role: 'Placed Student',
  },
];

export const faqs = [
  {
    question: 'Are Tech Nishal courses suitable for beginners?',
    answer: 'Yes. Foundation courses start from basics, while career-track courses include practical projects, mentorship, and interview preparation.',
  },
  {
    question: 'Do internships include live projects?',
    answer: 'Yes. Internship programs include structured training, weekly assessments, mentor guidance, and live project work.',
  },
  {
    question: 'Is placement support included?',
    answer: 'Placement support is available through resume building, mock interviews, technical preparation, referrals, and job assistance.',
  },
  {
    question: 'Can Tech Nishal build custom business software?',
    answer: 'Yes. Tech Nishal is also an IT company that works on websites, web apps, ERP, CRM, e-commerce, API, cloud, AI, and maintenance projects.',
  },
  {
    question: 'Do students receive certificates?',
    answer: 'Yes. Eligible learners receive certificates after completing required training, assessments, and project work.',
  },
];

export const values = [
  { icon: 'clarity', title: 'Clarity', description: 'Simple learning paths, clear delivery plans, and transparent communication.' },
  { icon: 'practice', title: 'Practice', description: 'Hands-on coding, live project work, reviews, and measurable progress.' },
  { icon: 'growth', title: 'Growth', description: 'Career outcomes, confidence building, and long-term skill development.' },
  { icon: 'trust', title: 'Trust', description: 'Reliable delivery, professional mentoring, and committed support.' },
];

export const team = [
  { name: 'Nishal Patil', role: 'Founder & Technology Mentor' },
  { name: 'Ananya Rao', role: 'Frontend Training Lead' },
  { name: 'Rohan Mehta', role: 'Software Delivery Lead' },
  { name: 'Kavya Singh', role: 'Placement Coordinator' },
];

export const companyTimeline = [
  {
    title: 'April 2022',
    subtitle: 'Company Founded',
    description:
      'Tech Nishal started its journey in April 2022 with a focus on practical IT training, technology education, and software development.',
  },
  { title: '2022', description: 'Launched software development services for businesses and startups.' },
  { title: '2024', description: 'Built stronger placement support with mock interviews and partner referrals.' },
  { title: 'Today', description: 'Operating as a Training & Placement Institute and IT company under one brand.' },
];

export const contactDetails = {
  email: 'work.technishal@gmail.com',
  phone: '+91 9313386475',
  phoneHref: 'tel:+919313386475',
  address: 'Ajramar House 7, Shivalik Plaza, IIM Road, Opp. AMA, Ahmedabad, Gujarat 380015.',
  mapEmbed:
    'https://www.google.com/maps?q=Ajramar%20House%207%2C%20Shivalik%20Plaza%2C%20IIM%20Road%2C%20Opp.%20AMA%2C%20Ahmedabad%2C%20Gujarat%20380015&output=embed',
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=Ajramar%20House%207%2C%20Shivalik%20Plaza%2C%20IIM%20Road%2C%20Opp.%20AMA%2C%20Ahmedabad%2C%20Gujarat%20380015',
};
