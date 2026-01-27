"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Shield, 
  AlertTriangle, 
  Scale, 
  Lock, 
  Activity, 
  Users, 
  Server, 
  Eye, 
  CheckCircle2, 
  XCircle, 
  Globe, 
  Building2, 
  ShieldAlert,
  Fingerprint,
  FileCheck
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AnimatedBackground } from "@/components/animated-background"
import { GridPattern } from "@/components/grid-pattern"

// --- THEME CONSTANTS ---
// These arbitrary values are used via arbitrary values in Tailwind (e.g. text-[#0089D0])
// Primary Blue: #0089D0 (UN Blue)
// Primary Gold: #C1A15C (Sovereignty/Human)

const fadeInScroll = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
}

const fadeInVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// --- SUB-COMPONENT: DARK FOOTER ---
function USSFooter() {
  const domains = [
    { icon: Globe, label: "Platform Governance" },
    { icon: ShieldAlert, label: "Safety Tooling" },
    { icon: Users, label: "HR / Education" },
    { icon: Scale, label: "Institutional Decisions" },
  ]

  return (
    <section className="relative py-32 px-4 overflow-hidden bg-slate-950 border-t border-white/5 font-sans">
      {/* Dark Atmosphere Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#0089D0]/20 via-slate-950 to-slate-950" />
      <GridPattern />

      <div className="max-w-5xl mx-auto relative z-10">
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

        {/* Domain Cards */}
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

        {/* Footer Bottom */}
        <div className="flex flex-col items-center border-t border-white/5 pt-12">
          <div className="mb-6 p-3 bg-slate-900 rounded-full border border-slate-800 shadow-2xl">
            <Shield className="w-8 h-8 text-[#0089D0]" />
          </div>
          <div className="flex items-center gap-2 text-sm font-mono text-slate-500 mb-2">
             <span className="w-2 h-2 rounded-full bg-emerald-500/50 animate-pulse" />
             System Status: Nominal
          </div>
          <p className="text-xs text-slate-600 font-mono mt-4">
            © 2026 Upstream Safety System v1.1 • Deterministic Governance Protocol
          </p>
        </div>
      </div>
    </section>
  )
}

// --- MAIN PAGE COMPONENT ---
export default function USSPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#0089D0]/30 overflow-hidden font-sans">
      <AnimatedBackground />
      <GridPattern />
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0089D0]/10 border border-[#0089D0]/20 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-[#0089D0] animate-pulse" />
            <span className="text-xs font-mono text-[#0089D0] uppercase tracking-wider">
              v 1.1 USS_AI_Training
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Upstream <span className="text-[#0089D0]">Safety</span> System
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-light"
          >
            Deterministic governance infrastructure for AI-enabled systems.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0089D0] to-[#C1A15C] rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-background/80 backdrop-blur-sm border border-border px-8 py-6 rounded-lg">
              <p className="text-lg md:text-2xl font-medium italic text-foreground/90 font-serif">
                "Detection is computable. Action is not. <br className="hidden md:block"/>The gap is authority."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PROBLEM: GHOST AUTHORITY --- */}
      <section className="py-24 px-4 bg-muted/30 border-y border-border/50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInScroll}>
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-[#C1A15C]" />
              <h2 className="text-3xl font-bold">The Failure Mode: Ghost Authority</h2>
            </div>
            
            <div className="prose dark:prose-invert max-w-none text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                Modern AI systems can flag risk, predict outcomes, and rank options—yet still produce real-world consequences without a named decision-maker.
              </p>
              <p>
                That failure mode is <strong>Ghost Authority</strong>: an action is taken that affects people, rights, or resources, but "the system" or "policy" is treated as the chooser.
              </p>
              <div className="pl-4 border-l-4 border-[#0089D0] bg-[#0089D0]/5 p-4 rounded-r-lg">
                <p className="font-medium text-foreground italic">
                  "Superintelligence isn’t the threat. Undeclared authority is."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            {...fadeInScroll}
            className="bg-card rounded-2xl p-8 border shadow-lg relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0089D0]/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            
            <h3 className="text-2xl font-bold mb-4 flex items-center text-[#0089D0]">
              <Shield className="w-6 h-6 mr-3" />
              The USS Solution
            </h3>
            <p className="text-lg text-card-foreground leading-relaxed mb-8">
              USS is designed to make Ghost Authority structurally hard: no action can occur unless authority is explicitly declared first, and recorded.
            </p>
            
            <div className="bg-background/50 rounded-lg p-6 border border-[#C1A15C]/30 relative">
              <div className="absolute -top-3 left-6">
                 <Badge variant="outline" className="bg-background border-[#C1A15C] text-[#C1A15C]">Core Insight</Badge>
              </div>
              <h4 className="font-bold mb-2 mt-2">Facts ≠ Decisions</h4>
              <p className="text-sm text-muted-foreground mb-4">
                AI can generate facts, but facts don't uniquely determine what should be done. The "best" action is undefined unless a selection rule (authority) is declared.
              </p>
              <p className="font-mono text-xs bg-muted p-2 rounded text-center border border-border">
                Missing Parameter θ (Utility) ≠ Derivable from Diagnostics
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- ARCHITECTURE: 3 LAYERS --- */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Three-Layer Architecture</h2>
            <p className="text-xl text-muted-foreground">Separating "What Needs Attention" from "Who Decides"</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-6 relative"
          >
            {/* Connecting Lines (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-[33%] w-[2%] h-[2px] bg-border -translate-y-1/2 z-0" />
            <div className="hidden lg:block absolute top-1/2 left-[65%] w-[2%] h-[2px] bg-border -translate-y-1/2 z-0" />

            {/* Layer 1 */}
            <motion.div variants={fadeInVariant} className="z-10 h-full">
              <Card className="h-full border-t-4 border-t-[#0089D0] hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Activity className="w-10 h-10 text-[#0089D0]" />
                    <span className="font-mono text-4xl font-bold text-muted/20">E</span>
                  </div>
                  <CardTitle>Layer 1: Diagnostic</CardTitle>
                  <CardDescription>Deterministic Measurement</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Automatable measurement that outputs: 
                    <span className="block mt-1 font-medium text-foreground">"This needs escalation."</span>
                  </p>
                  <Separator />
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#0089D0]">Signal Space</span>
                    <p className="text-xs mt-1 text-muted-foreground">
                      Toxicity, Threat, Intimacy, Maturity, Identity, Context.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Layer 2 (Gold) */}
            <motion.div variants={fadeInVariant} className="z-10 h-full transform lg:-translate-y-4">
              <Card className="h-full border-t-4 border-t-[#C1A15C] shadow-xl border-[#C1A15C]/20 bg-gradient-to-b from-background to-[#C1A15C]/5">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Users className="w-10 h-10 text-[#C1A15C]" />
                    <span className="font-mono text-4xl font-bold text-[#C1A15C]/20">H</span>
                  </div>
                  <CardTitle className="text-[#C1A15C]">Layer 2: Policy</CardTitle>
                  <CardDescription>Mandatory Human Authority</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    The non-automatable step. Humans must declare a decision frame:
                  </p>
                  <div className="bg-background border border-[#C1A15C]/30 rounded p-3 text-center">
                    <code className="text-lg font-mono font-bold text-[#C1A15C]">d = (p, a, c)</code>
                  </div>
                  <ul className="text-xs font-mono space-y-1 text-muted-foreground pl-2">
                    <li><strong className="text-foreground">p</strong> = purpose</li>
                    <li><strong className="text-foreground">a</strong> = authority</li>
                    <li><strong className="text-foreground">c</strong> = constraints</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Layer 3 */}
            <motion.div variants={fadeInVariant} className="z-10 h-full">
              <Card className="h-full border-t-4 border-t-slate-500 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Server className="w-10 h-10 text-slate-500" />
                    <span className="font-mono text-4xl font-bold text-muted/20">S</span>
                  </div>
                  <CardTitle>Layer 3: Impact</CardTitle>
                  <CardDescription>Action Execution</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Executes only after Layer 2 is complete. Outputs:
                  </p>
                  <div className="bg-muted/50 p-3 rounded text-xs italic text-muted-foreground border-l-2 border-slate-500">
                    "This action, selected under these constraints, by this authority."
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* --- COMPONENTS --- */}
      <section className="py-24 px-4 bg-[#0089D0]/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-12 items-end">
             <h2 className="text-3xl font-bold">Two Critical Components</h2>
             <div className="h-px bg-border flex-1 mb-2 opacity-50"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Dashboard */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="group"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-background border border-[#C1A15C]/50 rounded-xl flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 transition-transform">
                  <Eye className="text-[#C1A15C] w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">1) The Dashboard</h3>
                  <p className="text-sm font-mono text-[#C1A15C] uppercase tracking-wider">The "H" Interface</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed pl-20 border-l border-border/50">
                Where humans explicitly declare purpose, authority, and constraints before any downstream impact occurs.
              </p>
            </motion.div>

            {/* Black Box */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="group"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-background border border-foreground/20 rounded-xl flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 transition-transform">
                  <Lock className="text-foreground w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">2) The Black Box</h3>
                  <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Immutable Record</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed pl-20 border-l border-border/50">
                An auditable record proving authority was declared <em>before</em> action. USS uses deterministic hashing (SHA-256) to make records tamper-evident.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- IS / IS NOT --- */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
           <div className="grid md:grid-cols-2 gap-0 border rounded-3xl overflow-hidden shadow-2xl">
              
              {/* IS */}
              <div className="bg-emerald-500/5 p-10 md:p-12 md:border-r border-emerald-500/10">
                <h3 className="text-2xl font-bold text-emerald-600 mb-8 flex items-center">
                  <CheckCircle2 className="mr-3" /> What USS Is
                </h3>
                <ul className="space-y-6">
                  {[
                    "Governance infrastructure (not an app)",
                    "Deterministic measurement + auditable permission + constrained execution",
                    "Designed so the system cannot 'decide'—it can only measure and execute"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1.5 h-1.5 mt-2.5 mr-4 bg-emerald-500 rounded-full shrink-0" />
                      <span className="text-lg text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* IS NOT */}
              <div className="bg-red-500/5 p-10 md:p-12">
                <h3 className="text-2xl font-bold text-red-600 mb-8 flex items-center">
                  <XCircle className="mr-3" /> What USS Is Not
                </h3>
                <ul className="space-y-6">
                  {[
                    "“AI moderation that gets smarter over time”",
                    "A system that optimizes for outcomes and calls that legitimacy",
                    "“Human-in-the-loop” as a fig leaf for hidden authority"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1.5 h-1.5 mt-2.5 mr-4 bg-red-500 rounded-full shrink-0" />
                      <span className="text-lg text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
           </div>
        </div>
      </section>

      {/* --- KEY PRINCIPLES --- */}
      <section className="py-24 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Declared Authority", 
                desc: "Authority must be declared, not inferred. No 'the AI decided'.",
                icon: Fingerprint 
              },
              { 
                title: "Determinism", 
                desc: "Same input → same measurement. Reduces drift and gaming.",
                icon: Scale
              },
              { 
                title: "Auditability", 
                desc: "Explicit d before S. Authority first, impact second.",
                icon: FileCheck
              },
              { 
                title: "Legibility", 
                desc: "USS measures; it doesn't govern. Humans govern—USS makes it legible.",
                icon: Eye
              }
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-card rounded-xl border hover:border-[#0089D0]/50 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 mb-4 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-[#0089D0]/10 transition-colors">
                  <p.icon className="w-5 h-5 text-foreground group-hover:text-[#0089D0]" />
                </div>
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <USSFooter />
    </div>
  )
}