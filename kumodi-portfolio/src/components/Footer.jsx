import { GitBranch, Globe, Mail, Heart, Printer } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-100 dark:border-slate-800 py-12 px-6 no-print">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold text-slate-900 dark:text-white">Kumodi Bogahawatte</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Software Engineering Undergraduate · SLIIT · Colombo, Sri Lanka · {year}
            </p>
            {/* <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 flex items-center justify-center md:justify-start gap-1">
              Built with <Heart size={11} className="text-rose-400" fill="currentColor" /> using React, Vite & Tailwind CSS
            </p> */}
          </div>

          <div className="flex items-center gap-5">
            <a href="https://github.com/KumodiBogahawatte" target="_blank" rel="noreferrer"
              className="text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
              <GitBranch size={20} />
            </a>
            <a href="https://www.linkedin.com/in/kumodibogahawatte" target="_blank" rel="noreferrer"
              className="text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
              <Globe size={20} />
            </a>
            <a href="mailto:kumodib@gmail.com"
              className="text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
              <Mail size={20} />
            </a>
            <div className="w-px h-5 bg-slate-200 dark:bg-slate-700"></div>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              <Printer size={16} /> Print Portfolio
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap justify-center gap-6 text-xs text-slate-400 dark:text-slate-600 font-mono">
          <a href="#introduction" className="hover:text-amber-500 transition-colors">Introduction</a>
          <a href="#journal" className="hover:text-amber-500 transition-colors">Reflective Journal</a>
          <a href="#career" className="hover:text-amber-500 transition-colors">Career Plan</a>
          <a href="#cv" className="hover:text-amber-500 transition-colors">CV</a>
          <a href="#certifications" className="hover:text-amber-500 transition-colors">Certifications</a>
        </div>
      </div>
    </footer>
  )
}
