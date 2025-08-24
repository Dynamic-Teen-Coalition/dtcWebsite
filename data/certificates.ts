import { LucideIcon } from "lucide-react"
import { DISCORD_INVITE_LINK } from "@/data/discord"

export interface CertificateLevel {
  id: string
  title: string
  subtitle: string
  description: string
  requirements: string[]
  benefits: string[]
  iconName: string
  color: string
  bgColor: string
  borderColor: string
  textColor: string
  buttonText: string
  discordLink?: string
}

export interface JoinStep {
  step: string
  title: string
  description: string
  iconName: string
  color: string
}


export const certificateLevels: CertificateLevel[] = [
  {
    id: "friend",
    title: "DTC Friend",
    subtitle: "Anyone of any age",
    description: "Join the DTC Friends Discord server, introduce yourself, and get involved.",
    requirements: ["Join Discord server", "Introduce yourself", "Participate in discussions"],
    benefits: ["Access to community", "Learning opportunities", "Global network"],
    iconName: "Users",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    textColor: "text-green-700 dark:text-green-300",
    buttonText: "Join Discord",
    discordLink: DISCORD_INVITE_LINK,
  },
  {
    id: "ambassador",
    title: "DTC Ambassador",
    subtitle: "Teens Only",
    description: "Our trained, outward-facing representatives. Microcertified and actively engaged in global work.",
    requirements: [
      "Hold DTC Friends 25 Certificate",
      "Complete ambassador training",
      "Demonstrate leadership skills",
      "Public speaking ability",
      "Global engagement commitment",
    ],
    benefits: [
      "Official representative status of the DTC",
      "Speaking opportunities",
      "UN meeting participation",
      "Global network access",
      "Leadership development",
    ],
    iconName: "Globe",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    textColor: "text-purple-700 dark:text-purple-300",
    buttonText: "Join Discord",
    discordLink: DISCORD_INVITE_LINK,

  },
  {
    id: "board",
    title: "DTC Board",
    subtitle: "Teens Only + One Adult Educational Strategist",
    description: "The core of DTC's direction and strategy. Teen-led, globally connected, focused on outcomes.",
    requirements: [
      "Ambassador certification",
      "Proven impact and leadership",
      "Strategic thinking ability",
      "Global perspective",
      "Commitment to DTC mission",
    ],
    benefits: [
      "Strategic decision making",
      "Global policy impact",
      "Leadership recognition"
    ],
    iconName: "Crown",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    textColor: "text-orange-700 dark:text-orange-300",
    buttonText: "Join Discord",
    discordLink: DISCORD_INVITE_LINK

  },
]


export const joinSteps: JoinStep[] = [
  {
    step: "01",
    title: "Join Discord",
    description: "Click the Discord invite link and join our global community",
    iconName: "MessageCircle",
    color: "black-500",
  },
  {
    step: "02",
    title: "Introduce Yourself",
    description: "Share your background, interests, and goals with the community",
    iconName: "Users",
    color: "from-blue-500 to-indigo-500",
  },
  {
    step: "03",
    title: "Start Learning",
    description: "Engage with content, join discussions, and complete learning modules",
    iconName: "BookOpen",
    color: "from-purple-500 to-pink-500",
  },
  {
    step: "04",
    title: "Earn Recognition",
    description: "Progress through levels and earn certificates as you contribute",
    iconName: "Rocket",
    color: "from-orange-500 to-red-500",
  },
]

export const pageContent = {
  hero: {
    title: "Certificates",
    subtitle: "Your pathway to global digital governance leadership",
    description: "From community member to global changemaker - discover your journey with DTC",
    ctaButton: "Start Your Journey",
    backButton: "Back to Home",
  },
  roadmap: {
    title: "Your DTC Journey Roadmap",
    subtitle: "Follow the path from community member to global leader",
  },
  howToJoin: {
    title: "How to Join",
    subtitle: "Simple steps to start your DTC journey today",
  },
  cta: {
    title: "Ready to Start Your Journey?",
    description: "Join thousands of teens worldwide who are shaping the future of digital governance. Your voice matters, and your time is now.",
    discordButton: "Join the DTC Friends Discord",
  },
  footer: {
    text: "© 2025 Dynamic Teen Coalition. Building the future, systematically, collaboratively, and from the inside out.",
  },
} 