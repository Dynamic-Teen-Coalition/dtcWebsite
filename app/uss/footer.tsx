import { motion } from "framer-motion"
import { Shield, Check, Globe, Building2, Scale, Users, ShieldAlert } from "lucide-react"
import { GridPattern } from "@/components/grid-pattern" 

export default function USSFooter() {
  const domains = [
    { icon: Globe, label: "Platform Governance" },
    { icon: ShieldAlert, label: "Safety Tooling" },
    { icon: Users, label: "HR / Education" },
    { icon: Scale, label: "Institutional Decisions" },
  ]

  return (
    <section className="relative py-32 px-4 overflow-hidden bg-slate-950 border-t border-white/5">
      {/* 1. DARK ATMOSPHERE LAYERS */}
      {/* Deep dark base with a subtle blue 'glow' rising from the bottom */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#0089D0]/20 via-slate-950 to-slate-950" />
      
      {/* Faint grid for technical texture */}
      <GridPattern />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 mb-4"
          >
            <Building2 className="w-3 h-3" />
            <span className="text-[10px] uppercase tracking-widest font-bold">Domain General</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Where USS Applies
          </h2>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            Infrastructure for any system where diagnostics trigger consequences—especially where "the process" becomes the unchallengeable decision-maker.
          </p>
        </div>

        {/* Domain Cards (Dark Glassmorphism) */}
        <div className="grid md:grid-cols-4 gap-4 mb-20">
          {domains.map((domain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#0089D0]/30 hover:bg-[#0089D0]/5 transition-all duration-500"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 group-hover:bg-[#0089D0] transition-colors duration-500">
                  <domain.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-medium text-slate-300 group-hover:text-white">
                  {domain.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Bottom / Branding */}
        <div className="flex flex-col items-center border-t border-white/5 pt-12">
          <div className="mb-6 p-3 bg-slate-900 rounded-full border border-slate-800 shadow-2xl">
            <Shield className="w-8 h-8 text-[#0089D0]" />
          </div>
          
          <div className="flex items-center gap-2 text-sm font-mono text-slate-500 mb-2">
             <span className="w-2 h-2 rounded-full bg-emerald-500/50 animate-pulse" />
             System Status: Nominal
          </div>
          
          <p className="text-xs text-slate-600 font-mono mt-4">
            © 2024 Upstream Safety System v1.1 • Deterministic Governance Protocol
          </p>
        </div>

      </div>
    </section>
  )
}