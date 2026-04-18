import { useEffect, useRef } from 'react'
import { Target, TrendingUp, Star, CheckCircle2, ArrowRight } from 'lucide-react'

const phases = [
  {
    icon: Target,
    label: 'Short-term',
    period: '1–2 Years',
    color: 'amber',
    borderColor: 'border-amber-400',
    bgColor: 'bg-amber-500',
    lightBg: 'bg-amber-50 dark:bg-amber-900/20',
    goals: [
      {
        heading: 'Technical Skills to Develop',
        items: [
          'Master React and Next.js for production-grade front-end development',
          'Deepen Node.js/Express and REST API design knowledge',
          'Gain proficiency in PostgreSQL and MongoDB database management',
          'Obtain AWS Cloud Practitioner certification',
          'Improve understanding of Docker and basic CI/CD pipelines',
        ],
      },
      {
        heading: 'Soft Skills to Develop',
        items: [
          'Strengthen technical communication through writing and documentation',
          'Build professional networking habits via LinkedIn and local tech events',
          'Improve Agile/Scrum workflow competency',
        ],
      },
      {
        heading: 'Specific Actions',
        items: [
          'Complete a 6-month software engineering internship (Colombo-based or remote)',
          'Build and deploy 2–3 full-stack personal projects with public GitHub repos',
          'Complete AWS Cloud Practitioner course on A Cloud Guru',
          'Contribute to at least one open-source project on GitHub',
          'Attend 2 industry tech meetups per semester (e.g., SL Tech Talks)',
        ],
      },
    ],
  },
  {
    icon: TrendingUp,
    label: 'Medium-term',
    period: '3–5 Years',
    color: 'blue',
    borderColor: 'border-blue-400',
    bgColor: 'bg-blue-500',
    lightBg: 'bg-blue-50 dark:bg-blue-900/20',
    goals: [
      {
        heading: 'Technical Skills to Develop',
        items: [
          'Advance into cloud-native architecture and microservices design',
          'Obtain AWS Solutions Architect – Associate certification',
          'Develop expertise in Kubernetes and container orchestration',
          'Learn system design for high-availability, scalable applications',
          'Explore machine learning integration in product features',
        ],
      },
      {
        heading: 'Soft Skills to Develop',
        items: [
          'Leadership and mentoring of junior developers',
          'Cross-functional stakeholder communication',
          'Strategic thinking and product roadmap awareness',
        ],
      },
      {
        heading: 'Specific Actions',
        items: [
          'Secure a mid-level software engineer role at a product company or tech consultancy',
          'Lead at least one significant project end-to-end within a team setting',
          'Complete a part-time course in cloud architecture or systems design (e.g., Coursera, Udemy)',
          'Start a technical blog to document learnings and build personal brand',
          'Mentor one junior developer or undergraduate peer',
        ],
      },
    ],
  },
  {
    icon: Star,
    label: 'Long-term',
    period: '5+ Years',
    color: 'purple',
    borderColor: 'border-purple-400',
    bgColor: 'bg-purple-500',
    lightBg: 'bg-purple-50 dark:bg-purple-900/20',
    goals: [
      {
        heading: 'Technical Skills to Develop',
        items: [
          'Achieve AWS Solutions Architect – Professional or equivalent',
          'Develop deep expertise in enterprise architecture patterns',
          'Understand AI/ML pipelines and their integration at scale',
          'Build familiarity with FinTech or HealthTech regulatory environments',
        ],
      },
      {
        heading: 'Soft Skills to Develop',
        items: [
          'Executive-level communication and C-suite collaboration',
          'Strategic leadership across engineering and product teams',
          'Public speaking at industry conferences',
        ],
      },
      {
        heading: 'Specific Actions',
        items: [
          'Transition into a Solutions Architect or Engineering Manager role',
          'Establish a side consultancy or SaaS product that generates independent revenue',
          'Speak at a regional tech conference (e.g., WSO2Con, DevFest Sri Lanka)',
          'Actively contribute to Sri Lanka\'s tech ecosystem through mentorship programmes',
          'Pursue an MSc in Computer Science or an MBA (technology management focus) if aligned',
        ],
      },
    ],
  },
]

const colorText = {
  amber: 'text-amber-600 dark:text-amber-400',
  blue: 'text-blue-600 dark:text-blue-400',
  purple: 'text-purple-600 dark:text-purple-400',
}

export default function CareerPlan() {
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
    <section id="career" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll mb-16 max-w-2xl">
          <p className="section-subheading">Career Development</p>
          <h2 className="section-heading">My Professional<br />Growth Roadmap</h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 leading-relaxed">
            A structured, realistic plan spanning the next decade — built around deliberate skill development, meaningful experiences, and progressive leadership growth.
          </p>
        </div>

        {/* Timeline visual header */}
        <div className="animate-on-scroll mb-12 hidden md:flex items-center gap-0">
          {phases.map((p, i) => (
            <div key={p.label} className="flex items-center flex-1">
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <div className={`w-12 h-12 rounded-full ${p.bgColor} flex items-center justify-center shadow-lg`}>
                  <p.icon size={20} className="text-white" />
                </div>
                <span className="text-xs font-mono text-slate-500">{p.period}</span>
              </div>
              {i < phases.length - 1 && (
                <div className="flex-1 h-0.5 bg-gradient-to-r from-slate-300 to-slate-200 dark:from-slate-600 dark:to-slate-700 mx-3 relative">
                  <ArrowRight size={14} className="absolute right-0 -top-2 text-slate-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Phase cards */}
        <div className="space-y-10">
          {phases.map((phase, idx) => {
            const Icon = phase.icon
            return (
              <div
                key={phase.label}
                className={`animate-on-scroll card border-l-4 ${phase.borderColor}`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${phase.lightBg} flex items-center justify-center`}>
                    <Icon size={22} className={colorText[phase.color]} />
                  </div>
                  <div>
                    <p className={`text-xs font-mono uppercase tracking-widest ${colorText[phase.color]}`}>{phase.label}</p>
                    <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">{phase.period}</h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {phase.goals.map((g) => (
                    <div key={g.heading} className={`${phase.lightBg} rounded-xl p-4`}>
                      <h4 className="font-body font-semibold text-sm text-slate-700 dark:text-slate-200 mb-3 uppercase tracking-wide">
                        {g.heading}
                      </h4>
                      <ul className="space-y-2">
                        {g.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                            <CheckCircle2 size={14} className={`flex-shrink-0 mt-0.5 ${colorText[phase.color]}`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
