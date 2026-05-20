import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-[#050810]">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-slate-100 font-semibold">{profile.name}</p>
          <p className="text-slate-500 text-sm mt-1">{profile.location}</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-slate-700 text-slate-400 hover:border-blue-500 hover:text-blue-400 transition-all"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-slate-700 text-slate-400 hover:border-blue-500 hover:text-blue-400 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-slate-700 text-slate-400 hover:border-blue-500 hover:text-blue-400 transition-all"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
        </div>

        <p className="text-slate-600 text-xs">
          © {new Date().getFullYear()} Brandon Rogers
        </p>
      </div>
    </footer>
  )
}
