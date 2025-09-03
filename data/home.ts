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
  links?: { title: string; url: string }[]
}

export interface Activity {
  title: string
  description: string
  icon: string
}

export interface Partner {
  id: string
  name: string
  fullName: string
  title: string
  organization: string
  logo: string
  founderImage?: string
  socialLink: string
  linkedinLink?: string
  description: string
  featured?: boolean
}

export interface Event {
  emoji: string
  title: string
  description: string
  category: string
}

export const waves: Wave[] = [
  {
    title: "Wave One: Disruption",
    period: "2022–2023",
    description:
      "At IGF 2022 in Ethiopia, 14-year-old Pyrate Ruby Passell asked why there were no teens in the UN 'Youth' track. That single question disrupted a global system built on the outdated belief that 'youth' begins at 18, erasing teen voices entirely. She joined the IGF 2023 Youth Planning Committee while contributing to the Global Digital Compact. As part of the UN Foundation's inaugural Engine Room cohort, she advanced teen roles in digital governance across multiple UN platforms. When the IGF Secretariat asked her to create a Teen Dynamic Coalition in 2023, we built a teen movement that launched in March 2024.",
    icon: "⚡",
    color: "bg-un-blue",
  },
  {
    title: "Wave Two: Infrastructure & Beta",
    period: "2024",
    description:
      "DTC formed its first Board, secured teen seats across UN Working Groups, Policy Networks, and Dynamic Coalitions, and contributed to and endorsed the Global Digital Compact. With support from UN partners, we launched the DTC Friends 24 Beta Discord—the UN's first Discord server for asynchronous global governance. Pyrate Ruby piloted the first TikTok Certificate, a microcredential recognizing teen-led advocacy through short-form media and policy engagement.",
    icon: "🏗️",
    color: "bg-un-blue",
  },
  {
    title: "Wave Three: Public, Permanent, and Powerful",
    period: "2025",
    description:
      "As Amrith Kumar steps into Co-Chair to lead IGF work, Pyrate Ruby shifts focus to dismantling ageism across the UN system. Already a force in global digital governance, she mentored in the UN's first Citiverse Challenge and was named a UN Foundation Engine Room Changemaker. The DTC Friends 25 Discord Server now thrives as a living ecosystem where teens worldwide participate in real-time digital governance. DTC powers the Digital Governance Network (DGN), connecting teen-led Discord communities globally. We are building the future, systematically, collaboratively, and from the inside out.",
    icon: "🚀",
    color: "bg-un-blue",
  },
]

/*To add a link pls remember to use 'https://' at the beginning of the url*/
export const works: Work[] = [
  {
    title: "Digital Governance Network",
    description: "Building global infrastructure linking teen-led communities",
    category: "Infrastructure",
    image: "/placeholder.svg?height=200&width=300&text=DGN",
    year: "2025",
  },
  {
    title: "UN Citiverse Challenge",
    description: "Mentoring university students on frontier technologies and governance",
    category: "Mentorship",
    image: "/placeholder.svg?height=200&width=300&text=Citiverse",
    year: "2025",
    links: [
      { title: "Read More Here", url: "https://www.itu.int/metaverse/virtual-worlds/1st-un-citiverse-challenge/mentors/" }
    ]
  },
  {
    title: "DTC Friends Discord Platform",
    description: "The UN's first global Discord platform for teen engagement",
    category: "Platform",
    image: "/placeholder.svg?height=200&width=300&text=Discord",
    year: "2024-2025",
    links: [
      { title: "Join DTC Friends Discord", url: "https://discord.gg/brH8Bs3Y" }
    ]
  },
  {
    title: "Ageism Study",
    description: "Comprehensive analysis of age-based discrimination in digital spaces",
    category: "Research",
    image: "/placeholder.svg?height=200&width=300&text=Ageism+Study",
    year: "2024-2025",
    links: [
      { title: "View Study", url: "https://docs.google.com/forms/d/e/1FAIpQLSeT6-FRiJ03x-rr6CxL2BdxO4Qj_2sSzZpludZE8dxogst-7g/viewform" }
    ]
  },
  {
    title: "Teen Ban Mapping Project",
    description: "Documenting age-based discrimination across platforms and laws",
    category: "Research",
    image: "/placeholder.svg?height=200&width=300&text=Teen+Bans",
    year: "2024-2025",
    links: [
      { title: "View Study", url: "https://docs.google.com/spreadsheets/d/1zHiw7h_BNnXkTRnvXF-Ov8QYzRTmdVR-j0HwA5AWBos/edit?gid=0#gid=0" }
    ]
  },
  {
    title: "Global Digital Compact",
    description: "DTC was invited to, contributed to, and endorsed the GDC",
    category: "Policy Work",
    image: "/placeholder.svg?height=200&width=300&text=GDC",
    year: "2024",
    links: [
      { title: "View our work", url: "https://www.youtube.com/playlist?list=PLmc3Zo0InVW9HkasC33_CK13zrnO530uY" }
    ]
  },
]

export const activities: Activity[] = [
  {
    title: "Redefining Participation in UN Governance",
    description: "We engage as public actors—not guests—across ECOSOC, WSIS+20, HLPF, IGF, and ITU. Our presence expands multilateralism through a grounded multistakeholder base.",
    icon: "🏛️",
  },
  {
    title: "Repairing the UN's Age Framework",
    description: "Over three years, we built and piloted a new multistakeholder age structure. It corrects the systemic erasure of teens (13–19) in UN multistakeholder and multilateral processes.",
    icon: "🧱",
  },
  {
    title: "Exposing Exclusion Across UN Mechanisms",
    description: "We document teen bans online and ageist procedural blocks at the UN, forming the first global dataset on teen exclusion in governance. Our findings expose systemic failures in how the UN defines, includes, and protects teens.",
    icon: "🗂️",
  },
  {
    title: "Designing Intergenerational Participation Models",
    description: "We prototype new models for shared power between teens and adults, even in virtual worlds. These frameworks are designed to be interoperable across UN and civil society systems.",
    icon: "🧭",
  },
  {
    title: "Developing Infrastructure for Inclusion",
    description: "We build Discord protocols, microlearning systems, and digital certifications. Our tools translate 'access' into actual participation.",
    icon: "🛠️",
  },
  {
    title: "Operating the Digital Governance Network (DGN)",
    description: "We maintain a live civic backbone of youth-led Discord and Slack servers. The DGN is a multistakeholder engine for real-time, SDG-aligned action.",
    icon: "🌐",
  },
  {
    title: "Amplifying Through Our Future Agenda",
    description: "We have leadership in the Engine Room of Our Future Agenda to expand reach, visibility, and policy alignment. Together, we push teen-led governance from the margins into the UN mainstream.",
    icon: "🔁",
  },
]

export const partners: Partner[] = [
  {
    id: "founding-partner-1",
    name: "Immunova AI",
    fullName: "Eve Ang",
    title: "Founder of Immunova AI",
    organization: "Immunova AI",
    logo: "/Immunova.png",
    founderImage: "/eve.jpeg",
    socialLink: "https://immunova.ai/",
    linkedinLink: "https://sg.linkedin.com/in/eveayl",
    description: "Immunova AI is a cloud-based, multimodal AI platform to forecast patient-specific immunotherapy responses by integrating whole-slide H&E medical images, transcriptomic profiles, and structured clinical data into one analytical pipeline. Powered by a 10-person core team from 7 countries and a 250-strong youth network across 45+ countries, Immunova combines five modules using Vision Transformers, Graph Neural Networks and Transformer encoders. After our successful 1.0 proof-of-concept, Immunova has secured more than US$10,000 in non-dilutive funding to support further development. Immunova’s work has also been recognised by MICCAI, Moonshot Platform, beVisioneers: Mercedes-Benz, Heal The Planet and Paris Collaborative. Currently, Immunova is collaborating with partner laboratories to conduct beta-testing at Harvard Medical School, Massachusetts General Hospital, Yale School of Medicine, Columbia Department of Medicine, and the Computational Biology Unit at the University of Bergen.",
    featured: true
  },
  {
    id: "founding-partner-2", 
    name: "HackWitHer",
    fullName: "Bandana Kaur",
    title: "Cybersecurity Researcher",
    organization: "Founding Partner",
    logo: "/hackwithher.JPEG",
    founderImage: "/hackwithher.jpg",
    socialLink: "https://linktr.ee/hackwither",
    description: "HackWitHer is a brand built on one simple motto: making cyberspace livable for all. Founded at the age of 15 to bridge the gap between those who design technology and those most affected by it, HackWitHer operates on three core pillars. First, accessibility; cybersecurity knowledge should be open, understandable, and actionable for everyone, not locked behind jargon or privilege. Second, representation; women and underrepresented voices must be visible in cybersecurity, showing that femininity and intelligence not only coexist but strengthen one another. Third, offense as defense; the best protection comes from thinking like an attacker, anticipating threats, and staying steps ahead. Recognized as one of the Top 30 Ethical Hacking Content Creators of 2025 and acknowledged for vulnerability disclosure in security research by NASA, the US Department of Education, the Government of India, and more, HackWitHer empowers the next generation to shape a digital world where safety, inclusion, and innovation thrive.",
    featured: true
  }
]

export const homeContent = {
  hero: {
    title: "Dynamic Teen Coalition",
    subtitle: "The UN's First Teen-Led Multistakeholder Movement.",
    description: "A Movement, Not Just an Organization",
    ctaButton: "Join DTC Friends",
    learnButton: "Learn about DTC Friends",
  },
  introduction: {
    title: "Fighting for Real Teen Inclusion",
    description1: "The Dynamic Teen Coalition (DTC) is a movement of teens demanding access, shaping policy, and creating infrastructure that didn't exist before us at the United Nations.",
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
        title: "DTC Board",
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
  dgn: {
    title: "Digital Governance Network",
    subtitle: "Strategic Allies advancing teen inclusion in global governance",
    description: "Our founding Allies share our vision of authentic youth participation in digital governance. Together, we're building the infrastructure for sustainable teen leadership in global policy spaces.",
    viewMoreButton: "View All Allies",
  },
  boardMembers: {
    title: "DTC Leadership",
    subtitle: "Teen-led leadership driving global change",
    viewMoreButton: "View All Board Members",
  },
  activities: {
    title: "What We Do",
    subtitle: "We solved the UN's youth problem—by reshaping its governance architecture. DTC builds a teen-led multistakeholder model anchored within UN multilateralism and amplified by Our Future Agenda.",
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
  socialMedia: {
    title: "Connect with Us",
    links: [
      {
        name: "Linktree",
        url: "https://linktr.ee/dtcigf",
        icon: "/Linktree_id_-jZiqwW_1.png"
      },
      {
        name: "IGF Website",
        url: "https://www.intgovforum.org/en/content/dynamic-teen-coalition",
        icon: "Globe"
      },
      {
        name: "Youtube",
        url: "https://www.youtube.com/@DynamicTeenCoalition",
        icon: "Youtube"
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/dynamic-teen-coalition/",
        icon: "Linkedin"
      }
    ]
  },
}

export const events: Event[] = [
  {
    emoji: "🎯",
    title: "ECOSOC",
    description: "Anusha & Anvay went to the UN NY in person to deliver high-level teen rights policy conversations",
    category: "In Person"
  },
  {
    emoji: "🧠",
    title: "DCCG",
    description: "Amrith spoke on civil rights and the glaring lack of structural inclusion",
    category: "Civil Rights"
  },
  {
    emoji: "💡",
    title: "ITU Citiverse",
    description: "Pyrate Ruby mentored multiple university teams who are building future cities now with teens in mind",
    category: "Mentorship"
  },
  {
    emoji: "🌟",
    title: "Future Agenda Engine Room",
    description: "Pyrate Ruby is the first under 18 Changemaker for UN Partnerships",
    category: "Historic First"
  },
  {
    emoji: "🌐",
    title: "WSIS+20",
    description: "Alia, Amrith & Netra introduced our inclusive lifelong multistakeholder model to evolving global frameworks, where Dr. Vint Cerf agreed to take the model to the IGF Leadership Panel",
    category: "Global Impact"
  },
  {
    emoji: "🛠️",
    title: "GDC Townhall",
    description: "Amrith pushed our inclusive lifelong multistakeholder model to structurally include teens at the UN and in all digital governance",
    category: "Structural Change"
  },
  {
    emoji: "🔥",
    title: "IGF 2025",
    description: "Amrith (x2) & Aditya fought for our inclusive, lifelong multistakeholder model, and against blanket teen bans online",
    category: "Digital Rights"
  },
  {
    emoji: "📣",
    title: "WSIS+20 Co-Facilitator Consultations",
    description: "Amrith and Netra demanded structural protection of teen civil rights in their Elements Paper",
    category: "Policy Advocacy"
  },
  {
    emoji: "🔍",
    title: "HLPF",
    description: "onsite at the UN NY again, Anusha & Aditya spotlighted weak teen safeguarding & the need for true teen-centered accountability",
    category: "Accountability"
  }
] 