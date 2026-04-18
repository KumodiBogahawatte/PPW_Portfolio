import { useEffect, useRef } from 'react'
import { Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react'

const certs = [
  {
    name: 'The Web Developer Bootcamp 2024',
    platform: 'Udemy',
    instructor: 'Colt Steele',
    date: 'March 2024',
    id: 'UC-web-dev-2024',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    desc: 'A comprehensive 65-hour course covering the full web development stack from fundamentals to deployment. I completed this to solidify my understanding of JavaScript and back-end development beyond what the university curriculum covered.',
    color: 'amber',
    badge: '🏅',
    verified: true,
  },
  {
    name: 'AWS Cloud Practitioner Essentials',
    platform: 'Coursera / AWS',
    instructor: 'Amazon Web Services',
    date: 'August 2024',
    id: 'CERT-AWS-CP-2024',
    skills: ['AWS EC2', 'S3', 'IAM', 'Cloud Architecture', 'Pricing & Support'],
    desc: 'Official AWS training covering core cloud concepts, AWS services, security, and pricing. This certification provided the foundational knowledge I needed to confidently discuss cloud infrastructure in internship interviews.',
    color: 'blue',
    badge: '☁️',
    verified: true,
  },
  {
    name: 'Python for Everybody Specialisation',
    platform: 'Coursera / University of Michigan',
    instructor: 'Dr Charles Severance',
    date: 'November 2023',
    id: 'CERT-PY4E-2023',
    skills: ['Python', 'Data Structures', 'Web Scraping', 'Databases', 'JSON & APIs'],
    desc: 'A five-course specialisation introducing Python programming through practical applications including data retrieval, SQL integration, and web scraping. I enrolled because Python is increasingly relevant in data-driven engineering roles.',
    color: 'green',
    badge: '🐍',
    verified: true,
  },
  {
    name: 'UI/UX Design Foundations',
    platform: 'Google / Coursera',
    instructor: 'Google UX Design Team',
    date: 'February 2024',
    id: 'CERT-UXGOOGLE-2024',
    skills: ['User Research', 'Wireframing', 'Figma', 'Prototyping', 'Usability Testing'],
    desc: 'Part of the Google UX Design Certificate, covering the end-to-end design process from user research to high-fidelity prototypes. I pursued this because I believe software engineers who understand design produce significantly better products.',
    color: 'purple',
    badge: '🎨',
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

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.animate-on-scroll') || []
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="certifications" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll mb-16 max-w-2xl">
          <p className="section-subheading">Certifications</p>
          <h2 className="section-heading">Continuous<br />Learning Record</h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 leading-relaxed">
            Beyond my degree, I pursue certifications that close the gap between academic theory and industry practice. Each certificate below represents a deliberate choice to deepen a specific competency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certs.map((cert, idx) => {
            const c = colorMap[cert.color]
            return (
              <div
                key={cert.name}
                className={`animate-on-scroll card border ${c.border} flex flex-col`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                {/* Top badge strip */}
                <div className={`${c.bg} -mx-6 -mt-6 px-6 py-4 mb-5 rounded-t-2xl border-b ${c.border} flex items-start justify-between gap-3`}>
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
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4">
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
                <div className={`${c.bg} rounded-xl border ${c.border} p-4 flex items-center justify-between`}>
                  <div>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Certificate ID</p>
                    <p className="text-xs font-mono text-slate-700 dark:text-slate-300 mt-0.5">{cert.id}</p>
                  </div>
                  <a
                    href="#"
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
            { label: 'Certificates Earned', value: '4' },
            { label: 'Learning Hours', value: '120+' },
            { label: 'Platforms', value: '3' },
            { label: 'Skills Gained', value: '25+' },
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
