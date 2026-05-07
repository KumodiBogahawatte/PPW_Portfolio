import { useEffect, useRef } from 'react'
import { MessageSquare, Users, Clock, Briefcase, FileText } from 'lucide-react'

const reflections = [
  {
    icon: MessageSquare,
    title: 'Business Writing and Formal Communication',
    color: 'amber',
    content: `At the beginning of PPW, my writing style was too casual and often longer than necessary. I learned how to write in a professional tone using concise sentences, formal vocabulary, and clear structure. This was especially useful when preparing formal emails and short reports.

I now pay close attention to subject lines, salutations, and calls to action when writing emails. I also proofread my writing before sending it. These habits helped me communicate more clearly with lecturers, teammates, and workplace supervisors during my internship.`,
  },
  {
    icon: Users,
    title: 'Teamwork and Professional Conduct',
    color: 'blue',
    content: `PPW emphasized that professionalism is shown through everyday behavior, not only major achievements. I improved simple but important practices such as being punctual, preparing before meetings, and responding respectfully even in stressful situations.

In group tasks, I practiced listening carefully, asking clarifying questions, and sharing updates regularly. This reduced misunderstandings and helped the team complete tasks on time. I now understand that collaboration depends on consistency, trust, and responsible communication.`,
  },
  {
    icon: Clock,
    title: 'Telephone Skills and Active Listening',
    color: 'green',
    content: `One lesson I found very practical in PPW was effective telephone communication. I learned how tone, patience, and word choice can completely change a difficult conversation. I also learned how to handle complaints by listening first, collecting facts, and responding calmly.

The active listening techniques from PPW improved my confidence in both academic and workplace discussions. I now focus on understanding the speaker's intent before replying, and I take quick notes during calls or meetings so I do not miss key details.`,
  },
  {
    icon: Briefcase,
    title: 'CV Writing and Interview Preparation',
    color: 'purple',
    content: `Before PPW, my CV listed information but did not clearly show my value. I learned to present achievements using action-based statements and to tailor content for specific roles. I also improved the layout so that recruiters can quickly identify my strengths.

Mock interview practice helped me structure answers using real examples. I practiced common questions such as "Tell me about yourself" and behavioral questions using the STAR approach. This preparation reduced my anxiety and improved my confidence for internship interviews.`,
  },
  {
    icon: FileText,
    title: 'Personal Growth and Career Readiness',
    color: 'rose',
    content: `Overall, PPW gave me a clearer idea of what it means to be workplace-ready. I now understand that communication, discipline, adaptability, and emotional intelligence are as important as coding skills in professional environments.

The module transformed the way I present myself as an upcoming software engineer. I am more confident in formal communication, more organized in my work habits, and more prepared to enter the industry with a professional mindset.`,
  },
]

const colorMap = {
  amber: {
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    icon: 'text-amber-600 dark:text-amber-400',
    border: 'border-amber-200 dark:border-amber-800',
    dot: 'bg-amber-400',
  },
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    icon: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-800',
    dot: 'bg-blue-400',
  },
  green: {
    bg: 'bg-green-50 dark:bg-green-900/20',
    icon: 'text-green-600 dark:text-green-400',
    border: 'border-green-200 dark:border-green-800',
    dot: 'bg-green-400',
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    icon: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-200 dark:border-purple-800',
    dot: 'bg-purple-400',
  },
  rose: {
    bg: 'bg-rose-50 dark:bg-rose-900/20',
    icon: 'text-rose-600 dark:text-rose-400',
    border: 'border-rose-200 dark:border-rose-800',
    dot: 'bg-rose-400',
  },
}

export default function Journal() {
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
    <section id="journal" ref={ref} className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll mb-16 max-w-2xl">
          <p className="section-subheading">Reflective Journal</p>
          <h2 className="section-heading">Preparation for the<br />Professional World</h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 leading-relaxed">
            A personal reflection on key lessons from PPW, including business communication, listening, teamwork, CV preparation, and interview readiness.
          </p>
        </div>

        <div className="space-y-8">
          {reflections.map((item, idx) => {
            const Icon = item.icon
            const c = colorMap[item.color]
            return (
              <div
                key={item.title}
                className={`animate-on-scroll card border ${c.border}`}
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center`}>
                    <Icon size={18} className={c.icon} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                    <div className={`inline-block mt-1 w-8 h-0.5 ${c.dot} rounded-full`}></div>
                  </div>
                </div>
                <div className="space-y-3 pl-14">
                  {item.content.split('\n\n').map((para, i) => (
                    <p
                      key={i}
                      className="journal-para text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base"
                      data-aos="fade-up"
                      data-aos-delay={Math.min(i * 70, 220)}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Overall reflection summary */}
        <div className="animate-on-scroll mt-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 text-white">
          <h3 className="font-display text-2xl font-semibold mb-3">Overall Reflection</h3>
          <p className="leading-relaxed opacity-90">
            Looking back, PPW was one of the most practical modules in my degree. It helped me connect academic knowledge with workplace expectations by teaching me how to communicate professionally, collaborate effectively, and plan my career with clear goals. These lessons continue to guide my daily work and long-term development.
          </p>
        </div>
      </div>
    </section>
  )
}
