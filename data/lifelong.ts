import { Heart, Rocket, TrendingUp, Layers, Crown, Users, Target, Shield, Star, Brain, Lightbulb, CheckCircle } from "lucide-react"

// Stakeholder stages data
export const stakeholderStages = [
  {
    title: "Children (0–12)",
    iconName: "Heart",
    description: "Children engage through developmentally appropriate participation zones designed to feel safe, creative, and connected to real governance themes.",
    details: "Drawing inspiration from the Children's IGF led by the Wototo Watch Network in Kenya and the environments pioneered by Jutta Croll's Stiftung Digitale Chancen in Germany, these spaces use storytelling, art, and play to surface children's views.",
    color: "bg-pink-500",
    bgColor: "bg-pink-50 dark:bg-pink-900/20",
    borderColor: "border-pink-200 dark:border-pink-700",
    textColor: "text-pink-600 dark:text-pink-400"
  },
  {
    title: "Teens (13–19)",
    iconName: "Rocket",
    description: "This is the formal gateway into governance as a full digital actor. Participation happens in moderated, safeguarded environments.",
    details: "Teens move fluidly between peer-led collaboration and formal decision-making spaces, with structured pathways toward early career roles. Mentorship flows in both directions.",
    color: "bg-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-700",
    textColor: "text-blue-600 dark:text-blue-400"
  },
  {
    title: "Early Career (18+)",
    iconName: "TrendingUp",
    description: "Here, participants consolidate governance literacy, policy fluency, and strategic leadership skills.",
    details: "They take on facilitation and mentoring roles for teens, serve as rapporteurs in multistakeholder groups, and begin to shape agendas. This stage acts as the capacity-building engine of the model.",
    color: "bg-green-500",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-700",
    textColor: "text-green-600 dark:text-green-400"
  },
  {
    title: "Mid Career",
    iconName: "Layers",
    description: "Mid-career participants operate at the intersection of vision and execution. They set priorities, resolve conflicts, and broker cross-sector collaborations.",
    details: "They are the stewards of institutional culture, ensuring the values of inclusivity and mentorship remain embedded as the model scales.",
    color: "bg-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    borderColor: "border-purple-200 dark:border-purple-700",
    textColor: "text-purple-600 dark:text-purple-400"
  },
  {
    title: "Senior Career",
    iconName: "Crown",
    description: "Seniors bring historic perspective, institutional memory, and ethical oversight.",
    details: "They act as guardians of the governance record and facilitators of intergenerational dialogue, making sure that lessons learned are accessible to future decision-makers.",
    color: "bg-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    borderColor: "border-orange-200 dark:border-orange-700",
    textColor: "text-orange-600 dark:text-orange-400"
  }
]

// Core principles
export const principles = [
  {
    title: "Every Stage Matters",
    iconName: "Users",
    description: "Every stage of life has a defined, easily understood, and legitimate role in governance processes."
  },
  {
    title: "Continuous Participation",
    iconName: "Target",
    description: "Make participation continuous so no stage feels like a reset or reinvention."
  },
  {
    title: "Embedded Mentoring",
    iconName: "Brain",
    description: "Embed mentoring and reciprocal learning as part of the culture, not just an add-on."
  },
  {
    title: "Safeguarded Standards",
    iconName: "Shield",
    description: "Safeguard participants through legal, ethical, and procedural standards at every stage."
  },
  {
    title: "Strengthened Outcomes",
    iconName: "Star",
    description: "Strengthen governance outcomes by combining emerging perspectives with historical insight."
  }
]

// Implementation phases
export const implementationPhases = [
  {
    phase: "1",
    title: "Mapping and Alignment",
    description: "Review existing participation models and identify integration points.",
    iconName: "Target",
    color: "bg-blue-500"
  },
  {
    phase: "2", 
    title: "Pilot Phase",
    description: "Implement in one or more governance spaces with full age-stage representation.",
    iconName: "Lightbulb",
    color: "bg-green-500"
  },
  {
    phase: "3",
    title: "Scaling",
    description: "Expand to additional processes, guided by evaluation and feedback.",
    iconName: "TrendingUp",
    color: "bg-purple-500"
  },
  {
    phase: "4",
    title: "Institutionalization",
    description: "Embed in governance charters, operational procedures, and training frameworks.",
    iconName: "CheckCircle",
    color: "bg-orange-500"
  }
]

// Page content
export const lifelongContent = {
  hero: {
    title: "Lifelong Model",
    subtitle: "Your pathway to inclusive, intergenerational governance leadership",
    description: "From community member to global changemaker - discover the framework that captures the full arc of human experience in digital governance",
    readDocsButton: "Read Docs",
    backButton: "Back to Home"
  },
  framework: {
    title: "Core Framework",
    subtitle: "The inclusive lifelong multistakeholder model is built on the belief that governance is strongest when it captures the full arc of human experience."
  },
  stakeholders: {
    title: "Stakeholder Roles & Engagement",
    subtitle: "Each life stage brings unique perspectives and capabilities to the governance process, creating a rich tapestry of intergenerational collaboration."
  },
  implementation: {
    title: "Transition Strategy",
    subtitle: "A phased implementation approach ensures sustainable adoption and continuous improvement of the inclusive lifelong multistakeholder model."
  },
  impact: {
    title: "Impact Analysis",
    subtitle: "The model creates lasting change at global, national, and local levels through inclusive participation and intergenerational collaboration.",
    globalImplications: [
      "Establishes an international precedent for age-inclusive governance",
      "Strengthens global cooperation by creating a shared, scalable framework",
      "Provides a portable standard for other multistakeholder bodies"
    ],
    comparativeAdvantages: [
      "Closes participation gaps caused by age restrictions",
      "Maintains continuity across governance cycles",
      "Creates resilient, adaptable governance structures"
    ]
  },
  cta: {
    title: "Ready to Learn More About the Full Model?",
    subtitle: "Dive deeper into DTC's comprehensive framework for inclusive, lifelong multistakeholder governance. Discover the operational details, implementation strategies, and transformative potential of this groundbreaking model.",
    viewDocumentButton: "View Full Document",
    readModelButton: "Read Full Model",
    contact: {
      name: "Stacy Gildenston",
      title: "DTC Co-Chair & 2003 WSIS Award Winner",
      email: "dynamicteencoalition@gmail.com"
    }
  }
}

// Document URL
export const LIFELONG_DOCUMENT_URL = "https://docs.google.com/document/d/1xQoAw1v-Ku799gay4qZXx6a0nPzXcCxZ6-xZN2Jr2aA/edit?usp=drivesdk"
