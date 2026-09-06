export type Course = {
  slug: string;
  title: string;
  description: string;
  lessons: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  learners: string;
  tag: string;
  accent: string;
};

export const courses: Course[] = [
  {
    slug: "jee",
    title: "JEE Preparation",
    description:
      "Concept-first Physics, Chemistry and Maths with timed problem sprints and rank-boosting revision cycles.",
    lessons: 248,
    level: "Advanced",
    rating: 4.9,
    learners: "12,400",
    tag: "Engineering",
    accent: "from-[oklch(0.45_0.19_268)] to-[oklch(0.58_0.22_303)]",
  },
  {
    slug: "neet",
    title: "NEET Preparation",
    description:
      "Biology-heavy syllabus mastery with diagram labs, NCERT line-by-line notes and full-length mock cycles.",
    lessons: 226,
    level: "Advanced",
    rating: 4.8,
    learners: "9,850",
    tag: "Medical",
    accent: "from-[oklch(0.55_0.17_180)] to-[oklch(0.5_0.18_255)]",
  },
  {
    slug: "upsc",
    title: "UPSC Foundation",
    description:
      "Polity, History, Geography and Current Affairs built into a daily answer-writing and revision routine.",
    lessons: 190,
    level: "Intermediate",
    rating: 4.7,
    learners: "6,120",
    tag: "Civil Services",
    accent: "from-[oklch(0.5_0.16_35)] to-[oklch(0.55_0.19_320)]",
  },
  {
    slug: "gate",
    title: "GATE Preparation",
    description:
      "Branch-wise core subjects, numerical practice sets and previous-year pattern decoding for top scores.",
    lessons: 172,
    level: "Advanced",
    rating: 4.8,
    learners: "5,340",
    tag: "Post Graduate",
    accent: "from-[oklch(0.42_0.2_268)] to-[oklch(0.6_0.16_200)]",
  },
  {
    slug: "btech-cse",
    title: "B.Tech Computer Science",
    description:
      "DSA, DBMS, Operating Systems and system design projects that map straight to placement interviews.",
    lessons: 310,
    level: "Intermediate",
    rating: 4.9,
    learners: "14,700",
    tag: "College",
    accent: "from-[oklch(0.48_0.2_290)] to-[oklch(0.62_0.19_330)]",
  },
  {
    slug: "boards-10-12",
    title: "Class 10 & 12 Boards",
    description:
      "Chapter-wise lessons, sample paper drills and instant doubt support built around your school calendar.",
    lessons: 264,
    level: "Beginner",
    rating: 4.7,
    learners: "18,300",
    tag: "School",
    accent: "from-[oklch(0.55_0.15_150)] to-[oklch(0.5_0.18_268)]",
  },
];

export type LiveClass = {
  title: string;
  mentor: string;
  date: string;
  time: string;
  subject: string;
  seats: string;
  status: "Live now" | "Starting soon" | "Scheduled";
};

export const liveClasses: LiveClass[] = [
  {
    title: "Rotational Motion: Full Problem Marathon",
    mentor: "Dr. Aparna Iyer",
    date: "Mon, 14 Sep",
    time: "6:30 PM IST",
    subject: "Physics · JEE",
    seats: "412 joined",
    status: "Live now",
  },
  {
    title: "Human Physiology Rapid Revision",
    mentor: "Dr. Rehan Qureshi",
    date: "Tue, 15 Sep",
    time: "8:00 AM IST",
    subject: "Biology · NEET",
    seats: "268 registered",
    status: "Starting soon",
  },
  {
    title: "Indian Polity: Fundamental Rights Deep Dive",
    mentor: "Meghna Rathore",
    date: "Wed, 16 Sep",
    time: "7:00 PM IST",
    subject: "Polity · UPSC",
    seats: "190 registered",
    status: "Scheduled",
  },
  {
    title: "Graphs & Shortest Paths, Live Coding",
    mentor: "Kabir Menon",
    date: "Thu, 17 Sep",
    time: "9:00 PM IST",
    subject: "DSA · B.Tech CSE",
    seats: "530 registered",
    status: "Scheduled",
  },
  {
    title: "Organic Chemistry Mechanisms Workshop",
    mentor: "Sanjana Deshpande",
    date: "Fri, 18 Sep",
    time: "5:30 PM IST",
    subject: "Chemistry · JEE / NEET",
    seats: "347 registered",
    status: "Scheduled",
  },
  {
    title: "Board Exam Answer Presentation Clinic",
    mentor: "Vikram Sahni",
    date: "Sat, 19 Sep",
    time: "11:00 AM IST",
    subject: "Maths · Class 12",
    seats: "221 registered",
    status: "Scheduled",
  },
];

export type PracticeTrack = {
  title: string;
  description: string;
  metric: string;
  progress: number;
  action: string;
};

export const practiceTracks: PracticeTrack[] = [
  {
    title: "Mock Tests",
    description: "Full-length, timed papers with rank prediction and topic-wise accuracy breakdown.",
    metric: "18 of 30 papers attempted",
    progress: 60,
    action: "Start a mock",
  },
  {
    title: "Daily Quizzes",
    description: "Ten questions every morning to keep your revision loop alive without burning hours.",
    metric: "26-day quiz streak",
    progress: 86,
    action: "Take today's quiz",
  },
  {
    title: "Previous Year Questions",
    description: "A decade of solved papers sorted by chapter, difficulty and repeat frequency.",
    metric: "1,240 PYQs solved",
    progress: 44,
    action: "Browse PYQs",
  },
  {
    title: "Coding Practice",
    description: "Curated DSA ladders with an in-browser editor, hidden test cases and editorial hints.",
    metric: "312 problems cleared",
    progress: 72,
    action: "Open editor",
  },
];

export type Mentor = {
  name: string;
  subject: string;
  experience: string;
  blurb: string;
  initials: string;
  rating: number;
};

export const mentors: Mentor[] = [
  {
    name: "Dr. Aparna Iyer",
    subject: "Physics · JEE Advanced",
    experience: "14 years teaching",
    blurb: "Turns intimidating mechanics problems into three clean steps students actually remember.",
    initials: "AI",
    rating: 4.9,
  },
  {
    name: "Dr. Rehan Qureshi",
    subject: "Biology · NEET",
    experience: "11 years teaching",
    blurb: "Practising physician who links every NCERT line back to a real clinical picture.",
    initials: "RQ",
    rating: 4.9,
  },
  {
    name: "Meghna Rathore",
    subject: "Polity & Governance · UPSC",
    experience: "9 years teaching",
    blurb: "Answer-writing specialist with a weekly structured feedback loop for every aspirant.",
    initials: "MR",
    rating: 4.8,
  },
  {
    name: "Kabir Menon",
    subject: "Data Structures · B.Tech CSE",
    experience: "8 years in industry",
    blurb: "Backend engineer who teaches DSA the way interview panels actually ask it.",
    initials: "KM",
    rating: 4.9,
  },
  {
    name: "Sanjana Deshpande",
    subject: "Chemistry · JEE & NEET",
    experience: "12 years teaching",
    blurb: "Mechanism-first approach that replaces rote reactions with reasoning.",
    initials: "SD",
    rating: 4.8,
  },
  {
    name: "Vikram Sahni",
    subject: "Mathematics · Class 10 & 12",
    experience: "16 years teaching",
    blurb: "Board-exam veteran obsessed with clean, full-marks answer presentation.",
    initials: "VS",
    rating: 4.7,
  },
];

export const testimonials = [
  {
    name: "Ira Bhattacharya",
    role: "NEET aspirant, Kolkata",
    quote:
      "The daily quiz streak fixed my biggest problem — inconsistency. Six months in, my mock accuracy moved from 58% to 89%.",
  },
  {
    name: "Dhruv Patel",
    role: "B.Tech CSE, 3rd year",
    quote:
      "The DSA ladder plus live coding sessions got me through four interview rounds. I finally understood graphs instead of memorising them.",
  },
  {
    name: "Ananya Suresh",
    role: "Class 12 student, Chennai",
    quote:
      "Every chapter had a short lesson, a practice set and a mentor to ask when I got stuck. Boards felt calm for the first time.",
  },
  {
    name: "Farhan Ali",
    role: "UPSC aspirant, Lucknow",
    quote:
      "Weekly answer-writing feedback was worth the subscription alone. My structure improved more in ten weeks than in a year of self-study.",
  },
];

export const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    tagline: "Sample the platform and build a study habit.",
    features: [
      "3 course previews",
      "Daily quiz access",
      "Community doubt forum",
      "Basic progress tracking",
    ],
    cta: "Start free",
    popular: false,
  },
  {
    name: "Pro Learner",
    price: "₹499",
    period: "per month",
    tagline: "Everything a serious aspirant needs, week after week.",
    features: [
      "All courses, unlimited lessons",
      "Live classes with recordings",
      "Full mock test series + analytics",
      "Complete PYQ vault",
      "Priority doubt resolution",
    ],
    cta: "Choose Pro Learner",
    popular: true,
  },
  {
    name: "Achiever",
    price: "₹999",
    period: "per month",
    tagline: "One-on-one mentorship and a plan built around you.",
    features: [
      "Everything in Pro Learner",
      "Weekly 1:1 mentor session",
      "Personalised study roadmap",
      "Answer-writing & code reviews",
      "Parent progress reports",
    ],
    cta: "Choose Achiever",
    popular: false,
  },
];

export const stats = [
  { value: "50,000+", label: "Active learners" },
  { value: "200+", label: "Structured courses" },
  { value: "100+", label: "Expert mentors" },
  { value: "4.8/5", label: "Average rating" },
];
