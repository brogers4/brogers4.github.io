import { motion } from 'framer-motion'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import type { Role } from '../../types'

interface Props {
  roles: Role[]
}

export function TimelineRail({ roles }: Props) {
  const roleIds = roles.map((r) => r.id)
  const activeId = useScrollSpy(roleIds, 220)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="hidden lg:flex flex-col sticky top-28 h-fit">
      <p className="text-xs tracking-widest uppercase text-slate-600 font-semibold mb-6">
        Career Timeline
      </p>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 via-blue-500/50 to-teal-500/30" />

        <div className="space-y-0">
          {roles.map((role) => {
            const isActive = activeId === role.id
            return (
              <button
                key={role.id}
                onClick={() => scrollTo(role.id)}
                className="relative flex items-start gap-4 py-3 group text-left w-full"
              >
                {/* Dot */}
                <div className="relative z-10 mt-1 shrink-0">
                  <motion.div
                    animate={isActive ? { scale: 1.4, backgroundColor: '#3b82f6' } : { scale: 1, backgroundColor: '#334155' }}
                    transition={{ duration: 0.2 }}
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ boxShadow: isActive ? '0 0 8px rgba(59,130,246,0.7)' : 'none' }}
                  />
                </div>

                <div>
                  <p
                    className={`text-xs font-bold transition-colors leading-none mb-1 ${
                      isActive ? 'text-blue-400' : 'text-slate-600 group-hover:text-slate-400'
                    }`}
                  >
                    {role.years}
                  </p>
                  <p
                    className={`text-xs transition-colors leading-snug ${
                      isActive ? 'text-slate-200' : 'text-slate-600 group-hover:text-slate-400'
                    }`}
                  >
                    {role.era}
                  </p>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
