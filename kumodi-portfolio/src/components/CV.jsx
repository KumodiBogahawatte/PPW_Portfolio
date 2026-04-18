import { useEffect, useRef } from 'react'
import { Download, Mail, Phone, MapPin, Globe, GitBranch, ExternalLink } from 'lucide-react'

const skills = {
  'Languages': ['JavaScript (ES6+)', 'Python', 'Java', 'SQL', 'HTML5 / CSS3'],
  'Frameworks & Libraries': ['React.js', 'Node.js', 'Express.js', 'Spring Boot', 'Tailwind CSS'],
  'Tools & Platforms': ['Git & GitHub', 'Docker', 'MySQL', 'MongoDB', 'Figma'],
  'Methodologies': ['Agile / Scrum', 'REST API Design', 'OOP', 'MVC Pattern'],
}

const education = [
  {
    degree: 'BSc (Hons) Software Engineering',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    period: '2022 – Present',
    detail: 'GPA: 2.86 / 4.0 · Year 4 · Colombo, Sri Lanka',
    relevant: 'Relevant: Data Structures, Web Technologies, Software Architecture, Database Systems, Cloud Computing',
  },
  {
    degree: 'G.C.E. Advanced Level — Physical Science Stream',
    institution: "Anula Vidyalaya, Nugegoda",
    period: '2019 – 2021',
    detail: 'Combined Mathematics (C) · Physics (S) · Chemistry (C)',
    relevant: null,
  },
]

const projects = [
  {
    name: 'srilankatuktuk.com – Tuktuk Rental System',
    tech: 'Php · Tailwind CSS · MySQL · JWT Authentication . Admin Dashboard',
    desc: 'A full-stack tuk-tuk rental platform focused mainly on foreign travelers visiting Sri Lanka, allowing users to browse vehicles, make bookings, and manage reservations securely. Implemented JWT authentication and role-based access control for admins and customers.',
    link: 'https://srilankatuktuk.com/',
  },
  {
    name: 'Rathmini Hardware – Portfolio Website',
    tech: 'Php · Tailwind CSS',
    desc: 'A responsive portfolio website for a local hardware store, showcasing products and services with a modern design and seamless user experience.',
    link: 'https://github.com/KumodiBogahawatte/Hardware_portfolio',
  },
  {
    name: 'Golden Wings Foreign Employee Agency – Portfolio Website',
    tech: 'Php · Tailwind CSS',
    desc: 'A responsive portfolio website for a foreign employee agency, showcasing services and client testimonials with a modern design and seamless user experience.',
    link: 'https://github.com/KumodiBogahawatte/foreign_employee_agency',
  },
  {
    name: 'Alucomass (Pvt) Ltd – Portfolio Website',
    tech: 'Php · Tailwind CSS . MySQL · JWT Authentication . Admin Dashboard',
    desc: 'A responsive corporate website for Alucomass (Pvt) Ltd, showcasing company services and portfolio details with a modern design and seamless user experience.',
    link: 'https://github.com/KumodiBogahawatte/Alucomass',
  },
  {
    name: 'Sri Lanka Export Credit Insurance Corporation – Website Revamp',
    tech: 'Php · Tailwind CSS . MySQL · JWT Authentication . Admin Dashboard',
    desc: 'A revamp of the existing Sri Lanka Export Credit Insurance Corporation website, modernizing the UI/UX, improving responsiveness, and enhancing content management with a secure admin dashboard.',
    link: 'https://github.com/KumodiBogahawatte/SLECIC',
  },
  {
    name: 'Judicial Service Commission Secretariat – Website Revamp',
    tech: 'Php · Tailwind CSS',
    desc: 'A revamp of the existing Judicial Service Commission Secretariat website, modernizing the UI/UX, improving responsiveness, and enhancing content management with a secure admin dashboard.',
    link: 'https://github.com/KumodiBogahawatte/JSCS',
  },
  {
    name: 'Geotrans – Ecommerce Website',
    tech: 'Php · Tailwind CSS . MySQL · JWT Authentication . Admin Dashboard',
    desc: 'An e-commerce website for selling printers, laptops, hardware, and related tech products, with secure user authentication, product management, and an admin dashboard.',
    link: 'https://github.com/KumodiBogahawatte/Geotrans',
  },
  {
    name: 'Terraline Design Ltd – Architecture Portfolio Website',
    tech: 'Php · Tailwind CSS · MySQL · JWT Authentication · Admin Dashboard',
    desc: 'A PHP-based architecture portfolio website for Terraline Design Ltd, featuring project galleries, service pages, and a secure admin panel to manage portfolio content and updates.',
    link: 'https://github.com/KumodiBogahawatte/terraline_Design_Ltd',
  },


]

const experience = [
  {
    role: 'Web Developer Intern',
    company: 'SLT Digital Services (Pvt) Ltd',
    period: 'Mar 2025 – Present',
    points: [
      'Developed and maintained responsive web features for enterprise ERP modules, collaborating with designers and senior developers to improve usability.',
      'Integrated front-end components with REST APIs and resolved production bugs, improving page reliability and user workflow efficiency.',
      'Worked in an Agile team environment, contributing to sprint planning, daily stand-ups, code reviews, and sprint demos with senior engineers.',
    ],
  },
  // {
  //   role: 'Undergraduate Teaching Assistant',
  //   company: 'SLIIT – Faculty of Computing',
  //   period: 'Jan 2024 – May 2024',
  //   points: [
  //     'Assisted lecturers with practical lab sessions for the Introduction to Programming (Python) module.',
  //     'Provided one-on-one support to first-year students during lab hours.',
  //   ],
  // },
]

export default function CV() {
  const ref = useRef(null)
  const cvRef = useRef(null)

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
    <section id="cv" ref={ref} className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="section-subheading">Curriculum Vitae</p>
            <h2 className="section-heading">Professional Profile</h2>
          </div>
          <a
            href="/Kumodi_Bogahawatte_CV.pdf"
            download="Kumodi_Bogahawatte_CV.pdf"
            className="no-print flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm"
          >
            <Download size={15} /> Download CV as PDF
          </a>
        </div>

        {/* CV Document */}
        <div id="cv-printable" ref={cvRef} className="animate-on-scroll bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
          {/* Header */}
          <div className="bg-slate-900 dark:bg-slate-950 px-8 py-10 text-white">
            <h1 className="font-display text-4xl font-semibold">Kumodi Bogahawatte</h1>
            <p className="text-amber-400 font-mono text-sm mt-1 tracking-wide">Software Engineering Undergraduate</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5 text-sm text-slate-300">
              <span className="flex items-center gap-1.5"><Mail size={13} /> kumodib@gmail.com</span>
              <span className="flex items-center gap-1.5"><Phone size={13} /> +94 76 850 1850</span>
              <span className="flex items-center gap-1.5"><MapPin size={13} /> Colombo, Sri Lanka</span>
              <a href="https://www.linkedin.com/in/kumodibogahawatte" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"><Globe size={13} /> linkedin.com/in/kumodibogahawatte</a>
              <a href="https://github.com/KumodiBogahawatte" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"><GitBranch size={13} /> github.com/KumodiBogahawatte</a>
            </div>
          </div>

          <div className="px-8 py-8 space-y-8">
            {/* Education */}
            <div>
              <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white border-b border-amber-400 pb-2 mb-5 uppercase tracking-wide text-sm">
                Education
              </h2>
              <div className="space-y-5">
                {education.map((e) => (
                  <div key={e.degree} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-body font-semibold text-slate-900 dark:text-white">{e.degree}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">{e.institution} · <span className="font-mono">{e.period}</span></p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{e.detail}</p>
                      {e.relevant && <p className="text-slate-400 dark:text-slate-500 text-xs mt-1 italic">{e.relevant}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white border-b border-amber-400 pb-2 mb-5 uppercase tracking-wide text-sm">
                Technical Skills
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {Object.entries(skills).map(([cat, items]) => (
                  <div key={cat}>
                    <p className="text-xs font-mono text-amber-600 dark:text-amber-400 mb-2 uppercase tracking-widest">{cat}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((s) => (
                        <span key={s} className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-2.5 py-1 rounded-md font-mono">{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white border-b border-amber-400 pb-2 mb-5 uppercase tracking-wide text-sm">
                Experience
              </h2>
              <div className="space-y-6">
                {experience.map((ex) => (
                  <div key={ex.role} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-body font-semibold text-slate-900 dark:text-white">{ex.role}</h3>
                        <span className="font-mono text-xs text-slate-500">{ex.period}</span>
                      </div>
                      <p className="text-amber-600 dark:text-amber-400 text-sm mb-2">{ex.company}</p>
                      <ul className="space-y-1">
                        {ex.points.map((pt) => (
                          <li key={pt} className="text-sm text-slate-600 dark:text-slate-300 flex gap-2">
                            <span className="text-slate-400 flex-shrink-0">·</span> {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white border-b border-amber-400 pb-2 mb-5 uppercase tracking-wide text-sm">
                Projects
              </h2>
              <div className="space-y-5">
                {projects.map((p) => (
                  <div key={p.name} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-body font-semibold text-slate-900 dark:text-white">{p.name}</h3>
                        <a href={p.link} target="_blank" rel="noreferrer" className="text-amber-500 hover:text-amber-600 no-print">
                          <ExternalLink size={13} />
                        </a>
                      </div>
                      <p className="font-mono text-xs text-slate-500 dark:text-slate-400 mb-1">{p.tech}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
