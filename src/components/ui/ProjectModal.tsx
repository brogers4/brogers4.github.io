import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import type { Project } from '../../types'

interface Props {
  project: Project | null
  onClose: () => void
}

export function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const validImages = images.filter(Boolean)

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIndex((i) => (i - 1 + validImages.length) % validImages.length)
  }
  const next = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIndex((i) => (i + 1) % validImages.length)
  }

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + validImages.length) % validImages.length)
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % validImages.length)
      if (e.key === 'Escape') setLightbox(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, validImages.length])

  if (validImages.length === 0) return null

  return (
    <>
      {/* Carousel */}
      <div className="relative rounded-xl overflow-hidden bg-slate-900 group/carousel">
        <div className="aspect-video w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={validImages[index]}
              alt={`${title} ${index + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full object-contain cursor-zoom-in"
              onClick={() => setLightbox(true)}
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
          </AnimatePresence>
        </div>

        {/* Expand button */}
        <button
          onClick={() => setLightbox(true)}
          className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/50 text-slate-400 hover:text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity"
          aria-label="Expand image"
        >
          <Maximize2 size={14} />
        </button>

        {/* Prev / Next — only when multiple images */}
        {validImages.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-slate-300 hover:text-white hover:bg-black/70 transition-all opacity-0 group-hover/carousel:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-slate-300 hover:text-white hover:bg-black/70 transition-all opacity-0 group-hover/carousel:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {validImages.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {validImages.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setIndex(i) }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === index ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnail strip — only when 2+ images */}
      {validImages.length >= 2 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {validImages.map((src, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`shrink-0 w-16 h-10 rounded overflow-hidden border-2 transition-all ${
                i === index ? 'border-blue-500' : 'border-transparent opacity-50 hover:opacity-80'
              }`}
            >
              <img src={src} alt="" className="w-full h-full object-cover object-center" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-sm"
              onClick={() => setLightbox(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-4 md:inset-12 z-[70] flex items-center justify-center"
              onClick={() => setLightbox(false)}
            >
              <img
                src={validImages[index]}
                alt={`${title} ${index + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              {validImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prev(e) }}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); next(e) }}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              <button
                onClick={() => setLightbox(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all"
              >
                <X size={20} />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-400 text-sm">
                {index + 1} / {validImages.length}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export function ProjectModal({ project, onClose }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
      scrollRef.current?.scrollTo(0, 0)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [project])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 48, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-[5vh] bottom-[5vh] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-3xl z-50 rounded-2xl bg-[#0f1628] border border-slate-700/60 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-slate-800 shrink-0">
              <div>
                <h2 className="text-slate-100 font-bold text-xl">{project.title}</h2>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-slate-500 hover:text-slate-100 transition-colors ml-4 mt-0.5 shrink-0"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable body */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
              {project.images.length > 0 && (
                <ImageCarousel images={project.images} title={project.title} />
              )}

              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                {project.description}
              </p>

              {project.impact.length > 0 && (
                <div>
                  <h3 className="text-slate-100 font-semibold text-sm mb-3 flex items-center gap-2">
                    <span className="w-5 h-px bg-blue-500" />
                    Key Impact
                  </h3>
                  <ul className="space-y-2">
                    {project.impact.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
                        <CheckCircle2 size={15} className="text-teal-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
