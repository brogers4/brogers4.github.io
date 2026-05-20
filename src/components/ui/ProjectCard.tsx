import { motion } from 'framer-motion'
import type { Project } from '../../types'

interface Props {
  project: Project
  index: number
  onClick: () => void
}

export function ProjectCard({ project, index, onClick }: Props) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onClick={onClick}
      className="group relative shrink-0 w-48 rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500/50 bg-[#111827] transition-all duration-300 text-left"
    >
      {/* Thumbnail */}
      <div className="relative h-32 overflow-hidden bg-slate-800/50">
        <img
          src={project.thumbnailImage}
          alt={project.shortTitle}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          style={project.thumbnailPosition ? { objectPosition: project.thumbnailPosition } : undefined}
          loading="lazy"
          onError={(e) => {
            ;(e.target as HTMLImageElement).style.display = 'none'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />
      </div>

      {/* Label */}
      <div className="p-3">
        <p className="text-slate-100 text-xs font-semibold leading-tight group-hover:text-blue-300 transition-colors">
          {project.shortTitle}
        </p>
        <div className="flex flex-wrap gap-1 mt-2">
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-1.5 py-0.5 rounded bg-slate-700/60 text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.button>
  )
}
