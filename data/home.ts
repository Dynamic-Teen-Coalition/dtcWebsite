export interface Wave {
  title: string
  period: string
  description: string
  icon: string
  color: string
}

export interface Work {
  title: string
  description: string
  category: string
  image: string
  year: string
}

export interface Activity {
  title: string
  description: string
  icon: string
}

export const waves: Wave[] = [
  {
    title: "Wave One: Disruption",
    period: "2022–2023",
    description:
      "At IGF 2022 in Ethiopia, 14-year-old Pyrate Ruby Passell asked why there were no teens in the UN 'Youth' track. That single question disrupted a global system built on the outdated belief that 'youth' begins at 18.",
    icon: "⚡",
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Wave Two: Infrastructure & Beta",
    period: "2024",
    description:
      "DTC established its first official Board and launched the DTC Friends 24 Beta Discord server, the UN's first global Discord platform enabling teens to engage asynchronously in internet governance.",
    icon: "🏗️",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Wave Three: Public, Permanent, and Powerful",
    period: "2025",
    description:
      "The DTC Friends 25 Discord Server is now open and thriving, powering the Digital Governance Network (DGN), a global alliance of teen- and youth-led Discord communities.",
    icon: "🚀",
    color: "from-green-500 to-emerald-500",
  },
]

export const works: Work[] = [
  {
    title: "Internet Governance Forum 2023",
    description: "Launched DTC with AI-powered presentations in Kyoto, Japan",
    category: "UN Conference",
    image: "/placeholder.svg?height=200&width=300&text=IGF+2023",
    year: "2023",
  },
  {
    title: "Global Digital Compact",
    description: "Contributing to high-level consultations on digital governance",
    category: "Policy Work",
    image: "/placeholder.svg?height=200&width=300&text=GDC",
    year: "2024",
  },
  {
    title: "UN Citiverse Challenge",
    description: "Mentoring university students on frontier technologies and governance",
    category: "Mentorship",
    image: "/placeholder.svg?height=200&width=300&text=Citiverse",
    year: "2024",
  },
  {
    title: "Digital Governance Network",
    description: "Building global infrastructure linking teen-led communities",
    category: "Infrastructure",
    image: "/placeholder.svg?height=200&width=300&text=DGN",
    year: "2025",
  },
  {
    title: "DTC Friends Discord Platform",
    description: "The UN's first global Discord platform for teen engagement",
    category: "Platform",
    image: "/placeholder.svg?height=200&width=300&text=Discord",
    year: "2024-2025",
  },
  {
    title: "Teen Ban Mapping Project",
    description: "Documenting age-based discrimination across platforms and laws",
    category: "Research",
    image: "/placeholder.svg?height=200&width=300&text=Teen+Bans",
    year: "2025",
  },
]

export const activities: Activity[] = [
  {
    title: "UN Policy Participation",
    description: "Participate in high-level UN meetings and contribute to policy development",
    icon: "🏛️",
  },
  {
    title: "Ageism Tracking",
    description: "Track ageism and access gaps in over 200 UN and IGF institutions",
    icon: "📊",
  },
  {
    title: "Teen Ban Documentation",
    description: "Document national teen bans and digital participation restrictions",
    icon: "📋",
  },
  {
    title: "Global Governance Pathways",
    description: "Provide teens with a real, sustainable path into global governance at the UN",
    icon: "🛤️",
  },
  {
    title: "Essential Tools Development",
    description:
      "Build essential tools for teen engagement: bots, certificates, knowledge systems, and networks",
    icon: "🔧",
  },
  {
    title: "Digital Governance Network",
    description: "Operate the DGN to unify global teen efforts in digital governance and SDGs",
    icon: "🌐",
  },
]

export const homeContent = {
  hero: {
    title: "Dynamic Teen Coalition",
    subtitle: "The first and only teen board at the United Nations",
    description: "A Movement, Not Just an Organization",
    ctaButton: "Join DTC Friends",
    learnButton: "Learn More",
  },
  introduction: {
    title: "Fighting for Real Teen Inclusion",
    description1: "The Dynamic Teen Coalition (DTC) is the first and only teen board at the United Nations, founded to fight for real teen inclusion in global digital governance. We are a movement of teens demanding access, shaping policy, and creating infrastructure that didn't exist before us.",
    description2: "DTC is merit-based, participation-driven, and impact-oriented. We create and contribute across the entire UN ecosystem, from policy networks to global consultations, offering direct teen access to decision-making spaces never explicitly designed for us.",
    principles: [
      { label: "Merit-Based", icon: "🏆" },
      { label: "Participation-Driven", icon: "👥" },
      { label: "Impact-Oriented", icon: "🎯" },
    ],
    stats: [
      { label: "First & Only", value: "Teen UN Board", icon: "🌍" },
      { label: "Global", value: "Movement", icon: "🌐" },
      { label: "Policy", value: "Influence", icon: "🛡️" },
      { label: "Innovation", value: "Leadership", icon: "🧠" },
    ],
  },
  waves: {
    title: "The Three Waves of the DTC Movement",
    subtitle: "From disruption to infrastructure to global impact",
  },
  howItWorks: {
    title: "How DTC Works",
    subtitle: "Multiple pathways for engagement and impact",
    levels: [
      {
        title: "DTC Friend",
        description: "Anyone of any age. Join the DTC Friends Discord server, introduce yourself, and get involved.",
        icon: "👋",
        requirement: "Open to All",
      },
      {
        title: "DTC Friends 25 Certificate",
        description: "Earned by teens through contribution and participation. A formal record of your engagement.",
        icon: "🏆",
        requirement: "Teens Only",
      },
      {
        title: "DTC Ambassador",
        description: "Our trained, outward-facing representatives. Microcertified and actively engaged in global work.",
        icon: "🌍",
        requirement: "Teens Only",
      },
      {
        title: "DTC Leadership",
        description: "The core of DTC's direction and strategy. Teen-led, globally connected, focused on outcomes.",
        icon: "⚡",
        requirement: "Teens + 1 Adult",
      },
    ],
  },
  works: {
    title: "Our Works",
    subtitle: "Building infrastructure, shaping policy, and creating real change",
  },
  boardMembers: {
    title: "DTC Leadership",
    subtitle: "Teen-led leadership driving global change",
    viewMoreButton: "View All Board Members",
  },
  activities: {
    title: "What We Do",
    subtitle: "Creating real impact across the UN system and beyond",
  },
  join: {
    title: "Join the Movement",
    description: "We are building the future, systematically, collaboratively, and from the inside out. Whether you're a teen ready to make a difference or an organization looking to partner with youth leaders, there's a place for you in the DTC movement.",
    discordButton: "Join DTC Friends Discord",
    certificatesButton: "Learn About Certificates",
  },
  mailingList: {
    title: "Stay Connected",
    description: "Subscribe to our official mailing list for updates on DTC initiatives, UN activities, and opportunities to get involved.",
    subscribeButton: "Subscribe",
    emailPlaceholder: "Enter your email address",
    mailingListLink: "https://mail.intgovforum.org/mailman/listinfo/dtc_intgovforum.org",
    mailingListText: "Official DTC mailing list:",
  },
  footer: {
    text: "© 2025 Dynamic Teen Coalition. Building the future, systematically, collaboratively, and from the inside out.",
  },
} 