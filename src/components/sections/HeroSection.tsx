import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { profile } from '../../data/profile'

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative"
        >
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-blue-500/40 glow-blue">
            <img
              src="/images/profile/profile-pic-bw-400.jpeg"
              alt="Brandon Rogers"
              className="w-full h-full object-cover object-top grayscale"
            />
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-teal-500/20 scale-110" />
        </motion.div>

        {/* Name + title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="space-y-3"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            <span className="text-gradient">Brandon Rogers</span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg font-medium tracking-wide max-w-xl mx-auto">
            Principal Software PM&nbsp;&nbsp;·&nbsp;&nbsp;Engineering Leader&nbsp;&nbsp;·&nbsp;&nbsp;IoT Architect
          </p>
          <p className="text-slate-500 text-sm tracking-widest uppercase">
            20 Years Building What Doesn't Exist Yet
          </p>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="flex items-center gap-4"
        >
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-all text-sm font-medium"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-all text-sm font-medium"
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-all text-sm font-medium"
          >
            <Mail size={15} />
            Contact
          </a>
        </motion.div>

        {/* Jobs quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="max-w-2xl mx-auto border-l-2 border-blue-500/50 pl-6 text-left mt-4"
        >
          <p className="text-slate-400 text-sm md:text-base italic leading-relaxed">
            "{profile.jobsQuote}"
          </p>
          <footer className="mt-3 text-slate-600 text-xs tracking-widest uppercase">
            — Steve Jobs
          </footer>
        </motion.blockquote>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600 hover:text-slate-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </motion.button>
    </section>
  )
}
