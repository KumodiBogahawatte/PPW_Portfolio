import { useEffect, useRef, useState } from 'react'
import { Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react'

const certs = [
  {
    name: 'Introduction to Artificial Intelligence',
    platform: 'Simplilearn SkillUp',
    instructor: 'Simplilearn',
    date: '7 May 2026',
    id: '10199038',
    skills: ['Artificial Intelligence Fundamentals', 'Technology Awareness', 'Continuous Learning', 'Professional Development'],
    desc: 'I completed this certificate on 7 May 2026 to improve my understanding of modern AI concepts and strengthen my technical knowledge beyond classroom learning. This course supports my PPW portfolio by demonstrating active, self-directed skill development within the last year.',
    color: 'amber',
    badge: '🏅',
    verified: true,
  },
]

const colorMap = {
  amber: {
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    border: 'border-amber-200 dark:border-amber-800',
    tag: 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300',
    label: 'text-amber-600 dark:text-amber-400',
    dot: 'bg-amber-500',
    platBg: 'bg-amber-500',
  },
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-800',
    tag: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',
    label: 'text-blue-600 dark:text-blue-400',
    dot: 'bg-blue-500',
    platBg: 'bg-blue-600',
  },
  green: {
    bg: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-200 dark:border-green-800',
    tag: 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300',
    label: 'text-green-600 dark:text-green-400',
    dot: 'bg-green-500',
    platBg: 'bg-green-600',
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    border: 'border-purple-200 dark:border-purple-800',
    tag: 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300',
    label: 'text-purple-600 dark:text-purple-400',
    dot: 'bg-purple-500',
    platBg: 'bg-purple-600',
  },
}

export default function Certifications() {
  const ref = useRef(null)
  const [ready, setReady] = useState(false)
  const [countStarted, setCountStarted] = useState(false)
  const [stats, setStats] = useState({
    certificates: 0,
    platform: 0,
    skills: 0,
  })

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.animate-on-scroll') || []
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 180)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const section = ref.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCountStarted(true)
        })
      },
      { threshold: 0.25 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!countStarted) return

    const targets = { certificates: 1, platform: 1, skills: 4 }
    const duration = 1100
    const start = performance.now()
    let rafId

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setStats({
        certificates: Math.round(targets.certificates * progress),
        platform: Math.round(targets.platform * progress),
        skills: Math.round(targets.skills * progress),
      })
      if (progress < 1) rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [countStarted])

  return (
    <section id="certifications" ref={ref} className="py-24 px-6" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll mb-16 max-w-2xl">
          <p className="section-subheading">Certifications</p>
          <h2 className="section-heading">Evidence of Skill<br />Improvement</h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 leading-relaxed">
            This section presents evidence of a course completed within the last year to improve my technical and professional competencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certs.map((cert, idx) => {
            const c = colorMap[cert.color]
            return (
              <div
                key={cert.name}
                className={`animate-on-scroll card border ${c.border} flex flex-col ${ready ? 'cert-zoom-in' : ''}`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
                data-aos="zoom-in-up"
                data-aos-delay={idx * 120}
              >
                {/* Top badge strip */}
                <div className={`${c.bg} -mx-6 -mt-6 px-6 py-4 mb-5 rounded-t-2xl border-b ${c.border} flex flex-col sm:flex-row items-start justify-between gap-3`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl ${c.platBg} flex items-center justify-center text-2xl shadow-sm flex-shrink-0`}>
                      {cert.badge}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-slate-900 dark:text-white text-base leading-snug">{cert.name}</h3>
                      <p className={`text-xs font-mono ${c.label} mt-0.5`}>{cert.platform}</p>
                    </div>
                  </div>
                  {cert.verified && (
                    <div className="flex items-center gap-1 text-green-600 dark:text-green-400 flex-shrink-0">
                      <CheckCircle2 size={14} />
                      <span className="text-xs font-mono">Verified</span>
                    </div>
                  )}
                </div>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-4">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {cert.date}</span>
                  <span className="flex items-center gap-1"><Award size={12} /> {cert.instructor}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 flex-1">
                  {cert.desc}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((s) => (
                    <span key={s} className={`text-xs px-2.5 py-0.5 rounded-full font-mono ${c.tag}`}>{s}</span>
                  ))}
                </div>

                {/* Certificate preview card */}
                <div className={`${c.bg} rounded-xl border ${c.border} p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3`}>
                  <div>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Certificate ID</p>
                    <p className="text-xs font-mono text-slate-700 dark:text-slate-300 mt-0.5">{cert.id}</p>
                  </div>
                  <a
                    href="https://simpli-web.app.link/e/6Mti1BptW2b"
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-1.5 text-xs font-medium ${c.label} hover:underline`}
                  >
                    View Certificate <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats bar */}
        <div className="animate-on-scroll mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Certificates Included', value: String(stats.certificates) },
            { label: 'Completion Window', value: 'Last Year' },
            { label: 'Platform', value: String(stats.platform) },
            { label: 'Skills Improved', value: `${stats.skills}+` },
          ].map((stat) => (
            <div key={stat.label} className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-5 text-center">
              <p className="font-display text-3xl font-semibold text-amber-500">{stat.value}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
