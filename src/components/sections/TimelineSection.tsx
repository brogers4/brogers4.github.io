import { motion } from 'framer-motion'
import { timelineRoles } from '../../data/timeline'
import { TimelineRail } from '../ui/TimelineRail'
import { RoleCard } from '../ui/RoleCard'

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24 px-6 border-t border-slate-800/40">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-blue-400 text-xs tracking-widest uppercase font-semibold mb-3">
            Career Story
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 max-w-2xl">
            Twenty Years of Building What Doesn't Exist Yet
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl text-sm leading-relaxed">
            Every chapter started with a problem nobody had fully solved — and ended with something
            real in the world. Click any project to see the full story.
          </p>
        </motion.div>

        {/* Two-column layout: sticky rail + scrollable cards */}
        <div className="lg:grid lg:grid-cols-[160px_1fr] lg:gap-16">
          {/* Left: sticky timeline rail */}
          <TimelineRail roles={timelineRoles} />

          {/* Right: role cards */}
          <div className="relative">
            {/* Vertical line for the cards column on mobile */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-blue-500/20 to-teal-500/10 lg:hidden" />

            {timelineRoles.map((role, i) => (
              <RoleCard key={role.id} role={role} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
