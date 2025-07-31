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
  {
    id: "alex-chen",
    name: "Alex Chen",
    role: "Board Chair & Strategic Director",
    age: "17",
    location: "San Francisco, CA",
    description: "Leading DTC's strategic vision and global policy initiatives. Passionate about digital governance and youth empowerment.",
    achievements: [
      "UN Youth Delegate 2024",
      "Global Digital Policy Summit Speaker",
      "Teen Tech Innovation Award Winner",
      "Published 3 papers on digital governance"
    ],
    expertise: [
      "Strategic Planning",
      "Digital Policy",
      "Youth Advocacy",
      "Global Diplomacy"
    ],
    iconName: "Crown",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    textColor: "text-purple-700 dark:text-purple-300",
    linkedinLink: "https://linkedin.com/in/alex-chen-dtc",
    twitterLink: "https://twitter.com/alexchen_dtc"
  },
  {
    id: "maya-patel",
    name: "Maya Patel",
    role: "Vice Chair & Operations Director",
    age: "16",
    location: "London, UK",
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
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    textColor: "text-blue-700 dark:text-blue-300",
    linkedinLink: "https://linkedin.com/in/maya-patel-dtc",
    githubLink: "https://github.com/mayapatel-dtc"
  },
  {
    id: "james-rodriguez",
    name: "James Rodriguez",
    role: "Technology Director",
    age: "18",
    location: "Austin, TX",
    description: "Leading DTC's technological initiatives and digital infrastructure. Building the future of teen-led governance platforms.",
    achievements: [
      "Tech Innovation Award 2024",
      "Built DTC's governance platform",
      "Open Source Contributor",
      "AI Ethics Researcher"
    ],
    expertise: [
      "Software Development",
      "AI & Machine Learning",
      "Digital Infrastructure",
      "Tech Ethics"
    ],
    iconName: "Rocket",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-800",
    textColor: "text-green-700 dark:text-green-300",
    githubLink: "https://github.com/jamesrodriguez-dtc",
    linkedinLink: "https://linkedin.com/in/james-rodriguez-dtc"
  },
  {
    id: "sarah-kim",
    name: "Sarah Kim",
    role: "Policy & Research Director",
    age: "17",
    location: "Seoul, South Korea",
    description: "Leading DTC's research initiatives and policy development. Bridging the gap between youth voices and global governance.",
    achievements: [
      "Policy Research Excellence Award",
      "Published in Youth Policy Journal",
      "UN Youth Assembly Delegate",
      "Digital Rights Advocate"
    ],
    expertise: [
      "Policy Research",
      "Data Analysis",
      "Youth Advocacy",
      "International Relations"
    ],
    iconName: "BookOpen",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    borderColor: "border-orange-200 dark:border-orange-800",
    textColor: "text-orange-700 dark:text-orange-300",
    linkedinLink: "https://linkedin.com/in/sarah-kim-dtc",
    twitterLink: "https://twitter.com/sarahkim_dtc"
  },
  {
    id: "david-nguyen",
    name: "David Nguyen",
    role: "Communications Director",
    age: "16",
    location: "Melbourne, Australia",
    description: "Managing DTC's global communications and media relations. Amplifying teen voices in digital governance conversations.",
    achievements: [
      "Communications Excellence Award",
      "TEDx Youth Speaker",
      "Digital Media Creator",
      "Youth Journalism Award"
    ],
    expertise: [
      "Strategic Communications",
      "Digital Media",
      "Public Speaking",
      "Content Creation"
    ],
    iconName: "MessageCircle",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    borderColor: "border-indigo-200 dark:border-indigo-800",
    textColor: "text-indigo-700 dark:text-indigo-300",
    linkedinLink: "https://linkedin.com/in/david-nguyen-dtc",
    twitterLink: "https://twitter.com/davidnguyen_dtc"
  },
  {
    id: "emma-wilson",
    name: "Emma Wilson",
    role: "Partnerships Director",
    age: "18",
    location: "Toronto, Canada",
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
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50 dark:bg-teal-900/20",
    borderColor: "border-teal-200 dark:border-teal-800",
    textColor: "text-teal-700 dark:text-teal-300",
    linkedinLink: "https://linkedin.com/in/emma-wilson-dtc",
    twitterLink: "https://twitter.com/emmawilson_dtc"
  }
]

export const boardSections = {
  hero: {
    title: "Board Members",
    subtitle: "Meet the teen leaders shaping the future of digital governance",
    description: "Our diverse board of young leaders brings together expertise from around the world to drive DTC's mission forward.",
    ctaButton: "View our Team",
    backButton: "Back to Home",
  },
  about: {
    title: "Teen-Led Leadership",
    subtitle: "Empowering the next generation of digital governance leaders",
    description: "Our board represents the best and brightest young minds from around the world, working together to create a more inclusive and effective digital future.",
  },
  values: {
    title: "Our Values",
    subtitle: "The principles that guide our leadership",
  },
  join: {
    title: "Join Our Leadership",
    subtitle: "Opportunities to contribute to DTC's mission",
    description: "We're always looking for passionate teens who want to make a difference in digital governance. Explore opportunities to join our team.",
    ctaButton: "Apply for Leadership Position",
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
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Innovation",
    description: "Embracing new technologies and approaches to solve complex governance challenges",
    iconName: "Rocket",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Collaboration",
    description: "Working together across borders, cultures, and disciplines to achieve common goals",
    iconName: "Users",
    color: "from-orange-500 to-red-500",
  },
] 