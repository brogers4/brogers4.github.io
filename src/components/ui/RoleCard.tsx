import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, MapPin } from 'lucide-react'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'
import type { Role, Project } from '../../types'

interface Props {
  role: Role
  index: number
}

export function RoleCard({ role, index }: Props) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <motion.article
        id={role.id}
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="relative pl-8 pb-20"
      >
        {/* Timeline connector dot */}
        <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-[#0a0e1a] shadow-[0_0_8px_rgba(59,130,246,0.6)]" />

        {/* Era badge */}
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-400">
            {role.years}
          </span>
          <span className="text-slate-700">·</span>
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <Building2 size={12} />
            {role.company}
          </span>
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <MapPin size={12} />
            {role.location}
          </span>
        </div>

        {/* Role title */}
        <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-4">{role.title}</h3>

        {/* Summary */}
        <p className="text-slate-400 leading-relaxed mb-8 max-w-2xl text-sm md:text-base">
          {role.summary}
        </p>

        {/* Projects */}
        {role.projects.length > 0 && (
          <div>
            <p className="text-xs tracking-widest uppercase text-slate-600 font-semibold mb-4">
              Key Projects
            </p>
            <div className="flex gap-4 overflow-x-auto pb-3 -mx-1 px-1 snap-x">
              {role.projects.map((project, i) => (
                <div key={project.id} className="snap-start">
                  <ProjectCard
                    project={project}
                    index={i}
                    onClick={() => setSelectedProject(project)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.article>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}
