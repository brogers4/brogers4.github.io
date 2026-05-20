import { motion } from 'framer-motion'
import {
  Cpu,
  LayoutDashboard,
  Users,
  Zap,
  Bot,
  Code2,
  TrendingUp,
  Lightbulb,
} from 'lucide-react'
import type { Competency } from '../../types'

const ICONS: Record<string, React.ReactNode> = {
  cpu: <Cpu size={20} />,
  'layout-dashboard': <LayoutDashboard size={20} />,
  users: <Users size={20} />,
  zap: <Zap size={20} />,
  bot: <Bot size={20} />,
  'code-2': <Code2 size={20} />,
  'trending-up': <TrendingUp size={20} />,
  lightbulb: <Lightbulb size={20} />,
}

interface Props {
  competency: Competency
  index: number
}

export function CompetencyBadge({ competency, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group p-5 rounded-xl bg-[#111827] border border-slate-800 hover:border-blue-500/40 hover:bg-[#0f1928] transition-all duration-300"
    >
      <div className="flex items-start gap-3">
        <span className="text-blue-400 mt-0.5 shrink-0 group-hover:text-teal-400 transition-colors">
          {ICONS[competency.icon]}
        </span>
        <div>
          <h3 className="text-slate-100 font-semibold text-sm mb-1.5 group-hover:text-blue-300 transition-colors">
            {competency.title}
          </h3>
          <p className="text-slate-500 text-xs leading-relaxed">{competency.description}</p>
        </div>
      </div>
    </motion.div>
  )
}
