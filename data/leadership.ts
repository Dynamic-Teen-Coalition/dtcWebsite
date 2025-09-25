import { LucideIcon } from "lucide-react"

export interface BoardMember {
  id: string
  name: string
  role: string
  age: string
  location: string
  description: string
  achievements: string[]
  expertise: string[]
  iconName: string
  image: string
  color: string
  bgColor: string
  borderColor: string
  textColor: string
  linkedinLink?: string
  twitterLink?: string
  githubLink?: string
}

export interface BoardSection {
  title: string
  subtitle: string
  description: string
}

export const boardMembers: BoardMember[] = [
  // DTC Co-Chairs
  {
    id: "pyrate-ruby-passell",
    name: "Pyrate Ruby Passell",
    role: "DTC Co-Chair",
    age: "",
    location: "Australia/USA",
    description: "Leading DTC's strategic vision and global policy initiatives. Passionate about digital governance and youth empowerment.",
    achievements: [
      "CERN Open Quantum Institute",
      "UN Youth Delegate 2024",
      "Global Digital Policy Summit Speaker",
      "Teen Tech Innovation Award Winner"
    ],
    expertise: [
      "Strategic Planning",
      "Digital Policy",
      "Youth Advocacy",
      "Global Diplomacy"
    ],
    iconName: "Crown",
    image: "/pyratepic.webp",
    color: "from blue-300 to blue-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    textColor: "text-purple-700 dark:text-purple-300",
    linkedinLink: "",
    twitterLink: ""
  },
  {
    id: "stacy-gildenston",
    name: "Stacy Gildenston",
    role: "DTC Co-Chair",
    age: "",
    location: "Australia/USA",
    description: "Overseeing DTC's day-to-day operations and community engagement. Expert in building inclusive digital communities.",
    achievements: [
      "Community Builder of the Year 2024",
      "Digital Inclusion Advocate",
      "Youth Leadership Award",
      "Mentored 50+ teens globally"
    ],
    expertise: [
      "Community Management",
      "Operations Strategy",
      "Youth Mentorship",
      "Digital Inclusion"
    ],
    iconName: "Users",
    image: "/stacypic3.webp",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    textColor: "text-blue-700 dark:text-blue-300",
    linkedinLink: "",
    twitterLink: ""
  },
  {
    id: "amrith-kumar",
    name: "Amrith Kumar",
    role: "DTC Co-Chair",
    age: "",
    location: "USA",
    description: "Leading DTC's technological initiatives and digital infrastructure. Building the future of teen-led governance platforms.",
    achievements: [
      "Aiphabet.org",
      "Tech Innovation Award 2024",
      "Built DTC's governance platform",
      "Open Source Contributor"
    ],
    expertise: [
      "Software Development",
      "AI & Machine Learning",
      "Digital Infrastructure",
      "Tech Ethics"
    ],
    iconName: "Rocket",
    image: "/amrithpic.webp",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-800",
    textColor: "text-green-700 dark:text-green-300",
    linkedinLink: "",
    twitterLink: ""
  },
  // DTC Board
  {
    id: "boris-hong-pak-lo",
    name: "Boris Hong Pak Lo",
    role: "DTC Board Member",
    age: "",
    location: "Hong Kong SAR",
    description: "Managing DTC's global communications and media relations. Amplifying teen voices in digital governance conversations.",
    achievements: [
      "Sustainify",
      "Communications Excellence Award",
      "TEDx Youth Speaker",
      "Digital Media Creator"
    ],
    expertise: [
      "Strategic Communications",
      "Digital Media",
      "Public Speaking",
      "Content Creation"
    ],
    iconName: "MessageCircle",
    image: "/borispic.webp",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    borderColor: "border-indigo-200 dark:border-indigo-800",
    textColor: "text-indigo-700 dark:text-indigo-300",
    linkedinLink: "",
    twitterLink: ""
  },
  {
    id: "netra-adsaya-senthil",
    name: "Netra Adsaya Senthil",
    role: "DTC Board Member",
    age: "",
    location: "Canada",
    description: "Building strategic partnerships with organizations, governments, and institutions to advance teen-led digital governance.",
    achievements: [
      "Partnership Development Award",
      "Global Youth Network Builder",
      "International Collaboration Expert",
      "Cross-Cultural Leadership"
    ],
    expertise: [
      "Partnership Development",
      "International Relations",
      "Network Building",
      "Cross-Cultural Communication"
    ],
    iconName: "Globe",
    image: "/netrapic.webp",
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50 dark:bg-teal-900/20",
    borderColor: "border-teal-200 dark:border-teal-800",
    textColor: "text-teal-700 dark:text-teal-300",
    linkedinLink: "",
    twitterLink: ""
  },
  // DTC Lead Ambassador

  {
    id: "aditya-majumdar",
    name: "Aditya Majumdar",
    role: "DTC Board Member",
    age: "",
    location: "USA",
    description: "Leading marketing and strategic initiatives. Expert in digital marketing and brand development.",
    achievements: [
      "AMaj Marketing",
      "Marketing Excellence Award",
      "Brand Strategy Expert",
      "Digital Marketing Leader"
    ],
    expertise: [
      "Digital Marketing",
      "Brand Strategy",
      "Market Analysis",
      "Strategic Planning"
    ],
    iconName: "TrendingUp",
    image: "/adityapic.webp",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50 dark:bg-pink-900/20",
    borderColor: "border-pink-200 dark:border-pink-800",
    textColor: "text-pink-700 dark:text-pink-300",
    linkedinLink: "",
    twitterLink: ""
  },
  {
    id: "bandana-kaur",
    name: "Bandana Kaur",
    role: "DTC Board Member",
    age: "",
    location: "India",
    description: "Advocating for women in technology and promoting inclusive digital communities. Passionate about diversity and inclusion.",
    achievements: [
      "HackWitHer",
      "Women in Tech Advocate",
      "Diversity & Inclusion Leader",
      "Community Builder"
    ],
    expertise: [
      "Diversity & Inclusion",
      "Women in Tech",
      "Community Building",
      "Advocacy"
    ],
    iconName: "Heart",
    image: "/hackwithher.jpg",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50 dark:bg-red-900/20",
    borderColor: "border-red-200 dark:border-red-800",
    textColor: "text-red-700 dark:text-red-300",
    linkedinLink: "",
    twitterLink: ""
  },
  // DTC Ambassadors
  {
    id: "jasper-tay-seng-hon",
    name: "Jasper Tay Seng Hon",
    role: "DTC Board Member",
    age: "",
    location: "Singapore",
    description: "Representing DTC in Singapore and promoting youth engagement in digital governance initiatives.",
    achievements: [
      "Community Engagement Expert",
      "Digital Advocacy Leader",
      "Cross-Cultural Communication"
    ],
    expertise: [
      "Youth Advocacy",
      "Community Engagement",
      "Digital Governance",
      "International Relations"
    ],
    iconName: "Star",
    image: "/jasperpic.webp",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    borderColor: "border-yellow-200 dark:border-yellow-800",
    textColor: "text-yellow-700 dark:text-yellow-300",
    linkedinLink: "",
    twitterLink: ""
  },
  {
    id: "anusha-sharma",
    name: "Anusha Sharma",
    role: "DTC Board Member",
    age: "",
    location: "USA",
    description: "Advocating for youth voices in digital policy and promoting inclusive technology initiatives.",
    achievements: [
      "Youth Policy Advocate",
      "Digital Inclusion Leader",
      "Community Builder",
      "Technology for Good"
    ],
    expertise: [
      "Policy Advocacy",
      "Digital Inclusion",
      "Community Development",
      "Technology Ethics"
    ],
    iconName: "Shield",
    image: "/anushupic.webp",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    textColor: "text-blue-700 dark:text-blue-300",
    linkedinLink: "",
    twitterLink: ""
  },
  {
    id: "tejas-karusala",
    name: "Tejas Karusala",
    role: "DTC Lead Ambassador",
    age: "",
    location: "USA",
    description: "Driving technological innovation and digital transformation initiatives. Expert in building scalable solutions.",
    achievements: [
      "Practicum",
      "Tech Innovation Award",
      "Software Development Excellence",
      "Open Source Contributor"
    ],
    expertise: [
      "Software Engineering",
      "System Architecture",
      "Digital Transformation",
      "Innovation Management"
    ],
    iconName: "Code",
    image: "/tejaspic.webp",
    color: "from-gray-400 to-slate-400",
    bgColor: "bg-gray-50 dark:bg-gray-900/20",
    borderColor: "border-gray-200 dark:border-gray-800",
    textColor: "text-gray-700 dark:text-gray-300",
    linkedinLink: "",
    twitterLink: ""
  },
  {
    id: "alia-gupta",
    name: "Alia Gupta",
    role: "DTC Ambassador",
    age: "",
    location: "India",
    description: "Leading innovative projects and initiatives. Passionate about creating positive change through technology and advocacy.",
    achievements: [
      "Project Eyeris",
      "Innovation Award Winner",
      "Youth Leadership Excellence",
      "Community Impact Leader"
    ],
    expertise: [
      "Project Management",
      "Innovation Strategy",
      "Youth Leadership",
      "Community Development"
    ],
    iconName: "Lightbulb",
    image: "/aliapic.webp",
    color: "from-yellow-400 to-orange-400",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    borderColor: "border-yellow-200 dark:border-yellow-800",
    textColor: "text-yellow-700 dark:text-yellow-300",
    linkedinLink: "",
    twitterLink: ""
  },
  {
    id: "ananya-tara-rajagopalan",
    name: "Ananya Tara Rajagopalan",
    role: "DTC Ambassador",
    age: "",
    location: "USA",
    description: "Leading youth initiatives and promoting digital literacy in educational settings.",
    achievements: [
      "Wheeler High School",
      "Educational Technology Leader",
      "Youth Mentor",
      "Digital Literacy Advocate"
    ],
    expertise: [
      "Educational Technology",
      "Youth Mentorship",
      "Digital Literacy",
      "Student Leadership"
    ],
    iconName: "GraduationCap",
    image: "/anayapic.jpg",
    color: "from-green-400 to-emerald-400",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-800",
    textColor: "text-green-700 dark:text-green-300",
    linkedinLink: "",
    twitterLink: ""
  },
  {
    id: "anvay-ajmera",
    name: "Anvay Ajmera",
    role: "DTC Ambassador",
    age: "",
    location: "USA",
    description: "Promoting coding education and bridging digital divides through technology initiatives.",
    achievements: [
      "Coders Over Borders",
      "Coding Education Leader",
      "Digital Divide Advocate",
      "Technology Access"
    ],
    expertise: [
      "Coding Education",
      "Digital Divide",
      "Technology Access",
      "Community Outreach"
    ],
    iconName: "Laptop",
    image: "/anvayPic.webp",
    color: "from-purple-400 to-pink-400",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    textColor: "text-purple-700 dark:text-purple-300",
    linkedinLink: "",
    twitterLink: ""
  },
  {
    id: "ahaan-nigam",
    name: "Ahaan Nigam",
    role: "DTC Ambassador",
    age: "",
    location: "USA",
    description: "Advancing healthcare technology and promoting innovation in medical solutions.",
    achievements: [
      "Immunova",
      "Healthcare Technology",
      "Medical Innovation",
      "Youth in Healthcare"
    ],
    expertise: [
      "Healthcare Technology",
      "Medical Innovation",
      "Biotechnology",
      "Health Advocacy"
    ],
    iconName: "Activity",
    image: "/ahaanpic.webp",
    color: "from-red-400 to-pink-400",
    bgColor: "bg-red-50 dark:bg-red-900/20",
    borderColor: "border-red-200 dark:border-red-800",
    textColor: "text-red-700 dark:text-red-300",
    linkedinLink: "",
    twitterLink: ""
  },
  {
    id: "ishaan-joshi",
    name: "Ishaan Joshi",
    role: "DTC Ambassador",
    age: "",
    location: "USA",
    description: "Promoting STEM education and advancing scientific research initiatives.",
    achievements: [
      "Aequitas STEM",
      "STEM Education Leader",
      "Scientific Research",
      "Youth in Science"
    ],
    expertise: [
      "STEM Education",
      "Scientific Research",
      "Youth in Science",
      "Educational Innovation"
    ],
    iconName: "FlaskConical",
    image: "/ishaanPIc.webp",
    color: "from-indigo-400 to-purple-400",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    borderColor: "border-indigo-200 dark:border-indigo-800",
    textColor: "text-indigo-700 dark:text-indigo-300",
    linkedinLink: "",
    twitterLink: ""
  },
  {
    id: "shamser-mubin-chowdhury",
    name: "Shamser Mubin Chowdhury",
    role: "DTC Ambassador",
    age: "",
    location: "Bangladesh",
    description: "Representing DTC in Bangladesh and promoting youth engagement in digital governance.",
    achievements: [
      "Youth Leadership",
      "Community Development",
      "Digital Advocacy",
      "Cross-Cultural Leadership"
    ],
    expertise: [
      "Youth Leadership",
      "Community Development",
      "Digital Advocacy",
      "International Relations"
    ],
    iconName: "Globe",
    image: "/shamserpic.webp",
    color: "from-teal-400 to-cyan-400",
    bgColor: "bg-teal-50 dark:bg-teal-900/20",
    borderColor: "border-teal-200 dark:border-teal-800",
    textColor: "text-teal-700 dark:text-teal-300",
    linkedinLink: "",
    twitterLink: ""
  },
  {
    id: "gabriella-luma",
    name: "Gabriella Luma",
    role: "DTC Ambassador",
    age: "",
    location: "USA and Peru",
    description: "Representing DTC in Bangladesh and promoting youth engagement in digital governance.",
    achievements: [
      "Youth Leadership",
      "Community Development",
      "Digital Advocacy",
      "Cross-Cultural Leadership"
    ],
    expertise: [
      "Youth Leadership",
      "Community Development",
      "Digital Advocacy",
      "International Relations"
    ],
    iconName: "Globe",
    image: "/gabby.jpg",
    color: "from-teal-400 to-cyan-400",
    bgColor: "bg-teal-50 dark:bg-teal-900/20",
    borderColor: "border-teal-200 dark:border-teal-800",
    textColor: "text-teal-700 dark:text-teal-300",
    linkedinLink: "",
    twitterLink: ""
  }
]

export const boardSections = {
  hero: {
    title: "Leadership Team",
    subtitle: "Meet the teen leaders shaping the future of digital governance",
    description: "Our diverse leadership team brings together expertise from around the world to drive DTC's mission forward.",
    ctaButton: "View our Team",
    backButton: "Back to Home",
  },
  about: {
    title: "Teen-Led Leadership",
    subtitle: "Empowering the next generation of digital governance leaders",
    description: "Our leadership team represents the best and brightest young minds from around the world, working together to create a more inclusive and effective digital future.",
  },
  coChairs: {
    title: "DTC Co-Chairs",
    subtitle: "Leading DTC's strategic vision and global policy initiatives",
    description: "Our co-chairs provide strategic leadership and drive DTC's mission forward with their expertise and vision.",
  },
  board: {
    title: "DTC Board",
    subtitle: "Overseeing DTC's operations and driving key initiatives",
    description: "Our board members oversee various aspects of DTC's operations and drive key initiatives across different domains.",
  },
  ambassadors: {
    title: "DTC Ambassadors",
    subtitle: "Representing DTC globally and promoting youth engagement",
    description: "Our ambassadors represent DTC around the world and promote youth engagement in digital governance initiatives.",
  },
  values: {
    title: "Our Values",
    subtitle: "The principles that guide our leadership",
  },
  join: {
    title: "Ready to Start Your Journey?",
    subtitle: "Opportunities to contribute to DTC's mission",
    description: "Join thousands of teens worldwide who are shaping the future of digital governance. Your voice matters, and your time is now.",
    ctaButton: "Join the DTC Friends Discord",
  },
  footer: {
    text: "© 2025 Dynamic Teen Coalition. Teen-led, globally connected, focused on outcomes.",
  },
}

export const boardValues = [
  {
    title: "Youth Leadership",
    description: "Teens leading teens, with authentic representation and decision-making power",
    iconName: "Crown",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Global Perspective",
    description: "Diverse voices from around the world, ensuring inclusive and representative governance",
    iconName: "Globe",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Innovation",
    description: "Embracing new technologies and approaches to solve complex governance challenges",
    iconName: "Rocket",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Collaboration",
    description: "Working together across borders, cultures, and disciplines to achieve common goals",
    iconName: "Users",
    color: "from-orange-500 to-red-500",
  },
] 