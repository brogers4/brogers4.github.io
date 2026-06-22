import { motion } from 'framer-motion'
import { MapPin, Award, FileCode2, GraduationCap } from 'lucide-react'
import { profile, competencies } from '../../data/profile'
import { CompetencyBadge } from '../ui/CompetencyBadge'

const stats = [
  { icon: <Award size={16} />, label: '20 Years', sub: 'One company, many chapters' },
  { icon: <FileCode2 size={16} />, label: '6 Patents', sub: 'awarded + 1 pending' },
  { icon: <GraduationCap size={16} />, label: 'MS + BS', sub: 'Electrical & Computer Eng.' },
  { icon: <MapPin size={16} />, label: 'Senoia, GA', sub: 'Atlanta Metro' },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-blue-400 text-xs tracking-widest uppercase font-semibold mb-3">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            The Person Behind the Products
          </h2>
        </motion.div>

        {/* Bio + stats */}
        <div className="grid md:grid-cols-5 gap-12 mb-20">
          <div className="md:col-span-3 space-y-5">
            {profile.bio.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-slate-400 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className="md:col-span-2 flex flex-col gap-4 content-start">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-4 rounded-xl bg-[#111827] border border-slate-800 flex flex-col gap-2"
                >
                  <span className="text-blue-400">{stat.icon}</span>
                  <p className="text-slate-100 font-semibold text-sm">{stat.label}</p>
                  <p className="text-slate-500 text-xs">{stat.sub}</p>
                </motion.div>
              ))}
            </div>
            <motion.img
              src="/images/family-collage.jpg"
              alt="Family moments"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full rounded-xl select-none pointer-events-none grayscale"
              draggable={false}
            />
          </div>
        </div>

        {/* Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-blue-400 text-xs tracking-widest uppercase font-semibold mb-2">Core Competencies</p>
          <h3 className="text-xl font-bold text-slate-100">What I Bring to the Table</h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {competencies.map((c, i) => (
            <CompetencyBadge key={c.title} competency={c} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
