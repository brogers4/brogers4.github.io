import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Github } from 'lucide-react'
import { ImageCarousel } from '../ui/ProjectModal'
import { personalProjects } from '../../data/timeline'

export function PersonalProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof personalProjects[0] | null>(null)

  return (
    <section id="projects" className="py-24 px-6 border-t border-slate-800/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-teal-400 text-xs tracking-widest uppercase font-semibold mb-3">
            Personal Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            Beyond the Day Job
          </h2>
          <p className="text-slate-500 mt-3 max-w-lg text-sm leading-relaxed">
            When I'm not building at Eaton, I'm usually building something else. These are the side
            experiments, explorations, and ideas I work on for myself.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalProjects.map((project, i) => (
            <motion.button
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group text-left rounded-xl overflow-hidden border border-slate-800 hover:border-teal-500/40 bg-[#111827] transition-all duration-300"
            >
              {/* Preview image */}
              <div className="h-40 overflow-hidden bg-[#0f1628] relative flex items-center justify-center">
                <img
                  src={project.thumbnailImage ?? project.images[0]}
                  alt={project.title}
                  className="max-h-28 max-w-[80%] object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="flex items-center gap-1 text-[10px] px-2 py-1 rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/20 font-medium">
                    <Sparkles size={10} />
                    Personal
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-slate-100 font-bold text-base mb-1.5 group-hover:text-teal-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-3">{project.description}</p>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-500 border border-teal-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {'githubUrl' in project && project.githubUrl && (
                    <a
                      href={project.githubUrl as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-600 hover:text-teal-400 transition-colors shrink-0"
                      aria-label="View on GitHub"
                    >
                      <Github size={15} />
                    </a>
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-4 top-[5vh] bottom-[5vh] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-3xl z-50 rounded-2xl bg-[#0f1628] border border-slate-700/60 shadow-2xl flex flex-col overflow-hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-800">
                <div>
                  <h2 className="text-slate-100 font-bold text-xl">{selectedProject.title}</h2>
                  {'githubUrl' in selectedProject && selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 mt-1 transition-colors"
                    >
                      <Github size={12} />
                      github.com/brogers4/spekt
                    </a>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-500 hover:text-slate-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {selectedProject.images.length > 0 && (
                  <ImageCarousel images={selectedProject.images} title={selectedProject.title} />
                )}
                <p className="text-slate-300 leading-relaxed">{selectedProject.description}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
