export interface Report {
  id: string
  title: string
  description: string
  thumbnail: string
  driveLink: string
  category: string
  date: string
}

export interface DocumentSlide {
  id: string
  title: string
  description: string
  coverImage: string
  driveLink: string
  ctaColor?: string
}

export interface ShortsSlide {
  id: string
  videoId: string
  title: string
  description: string
  ctaText?: string
  ctaLink?: string
  ctaColor?: string 
}

const playlistLink = "https://www.youtube.com/playlist?list=PLmc3Zo0InVW9HkasC33_CK13zrnO530uY"

export const shortsSlides: ShortsSlide[] = [
    { id: "1",  videoId: "u1FuFr0sBLQ", title: "Everyone belongs at the UN", description: "…", ctaText: "Watch on YouTube", ctaLink: playlistLink, ctaColor: "bg-sky-500 hover:bg-sky-400 text-slate-900" },
    { id: "2",  videoId: "NEywYygH6x0", title: "How teens ended up working at the UN", description: "…", ctaText: "Watch on YouTube", ctaLink: playlistLink, ctaColor: "bg-emerald-500 hover:bg-emerald-400 text-slate-900" },
    { id: "3",  videoId: "5rHbkPmdrnw", title: "Teen Power at the UN 💥 The DTC Movement", description: "…", ctaText: "Watch on YouTube", ctaLink: playlistLink, ctaColor: "bg-fuchsia-500 hover:bg-fuchsia-400 text-slate-900" },
    { id: "4",  videoId: "5J06QeQP3Eg", title: "Teens are still forgotten", description: "…", ctaText: "Watch on YouTube", ctaLink: playlistLink, ctaColor: "bg-sky-500 hover:bg-sky-400 text-slate-900" },
    { id: "5",  videoId: "JCbX4_4GhpE", title: "Adults Make the Rules — It’s our turn at the UN", description: "…", ctaText: "Watch on YouTube", ctaLink: playlistLink, ctaColor: "bg-emerald-500 hover:bg-emerald-400 text-slate-900" },
  ];  
  

  export const documentSlides: DocumentSlide[] = [
    {
      id: "0",
      title: "2025 DTC Yearly Wrap",
      description:
        "Annual summary of DTC activities and key achievements in 2025. Explore our global impact, ambassador programs, and digital governance initiatives.",
      coverImage: "/2025_yearly_wrap.png",
      driveLink: "https://drive.google.com/file/d/1YFORMClMFQcPXVIfR0WmGsIrE667TXy3/view?usp=sharing",
      ctaColor: "bg-blue-500 hover:bg-blue-400 text-slate-900",
    },
    {
      id: "1",
      title: "2025 DTC Mid Year Brief",
      description:
        "Preliminary insights and updates from DTC programs in the first half of 2025. Our journey continues with new partnerships and initiatives.",
      coverImage: "/2025_mid_year.png",
      driveLink: "https://drive.google.com/file/d/1gD7rL9W_km6b7TCaAVRtyxoXBvkPXLPK/view?usp=sharing",
      ctaColor: "bg-blue-500 hover:bg-blue-400 text-slate-900",
    },
    {
      id: "2",
      title: "2024 DTC Yearly Wrap",
      description:
        "Annual summary of DTC activities and key achievements in 2024. Explore our global impact, ambassador programs, and digital governance initiatives.",
      coverImage: "/2024_wrap.png",
      driveLink: "https://drive.google.com/file/d/1C0HVI_Rsas6RLs5v_ICK-psABiLBJCaU/view?usp=sharing",
      ctaColor: "bg-blue-500 hover:bg-blue-400 text-slate-900",
    },
    {
      id: "3",
      title: "2024 DTC Mid Year Report",
      description:
        "Mid-year update highlighting progress and milestones achieved during the first half of 2024. Key performance insights and strategic direction.",
      coverImage: "/2024_mid_year.png",
      driveLink: "https://drive.google.com/file/d/12tM6YhagRB1kcz1hvjQDLgnQmuVm5MpM/view?usp=sharing",
      ctaColor: "bg-blue-500 hover:bg-blue-400 text-slate-900",
    },
    {
      id: "4",
      title: "2023–2024 DTC Yearly Report",
      description:
        "Comprehensive report covering DTC's performance across 2023 and 2024. Two years of youth empowerment in digital governance.",
      coverImage: "/2023_2024_report.png",
      driveLink: "https://drive.google.com/file/d/1sr4XUjxeJQBc78ereCgMG6YhuWMILyeV/view?usp=sharing",
      ctaColor: "bg-blue-500 hover:bg-blue-400 text-slate-900",
    },
];
      
export const pageContent = {
  hero: {
    title: "Reports & Media",
    subtitle: "Explore our impact through videos and comprehensive reports",
    description: "Watch our journey and dive into our research, policy papers, and impact reports",
    ctaButton: "Explore Our Work",
    backButton: "Back to Home"
  },
  videos: {
    title: "Featured Videos",
    subtitle: "Watch our latest presentations, panels, and educational content"
  },
  reports: {
    title: "Reports & Documents",
    subtitle: "Access our research, impact studies, and policy frameworks"
  },
  cta: {
    title: "Ready to Get Involved?",
    description: "Join our global community of teen leaders shaping the future of digital governance. Connect with us on Discord to stay updated on the latest reports, events, and opportunities.",
    discordButton: "Join the DTC Community"
  }
}

