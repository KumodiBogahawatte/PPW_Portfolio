import { useEffect, useRef } from 'react'
import { MessageSquare, Users, Clock, Briefcase, FileText } from 'lucide-react'

const reflections = [
  {
    icon: MessageSquare,
    title: 'Communication Skills',
    color: 'amber',
    content: `When I first joined the PPW module, I underestimated how much of professional success hinges not on technical expertise, but on how clearly you communicate your ideas. My first experience presenting a project proposal to a panel of lecturers was humbling. I stumbled over my words, struggled to maintain eye contact, and rushed through my slides because I was nervous. The feedback was direct but constructive: slow down, listen more than you speak, and learn to tailor your message to your audience.

Over the semester, I deliberately put myself in uncomfortable situations. I volunteered to lead group presentations, even when others were more confident speakers. I joined a campus debate club for one term specifically to practise articulating arguments under pressure. Gradually, I noticed a shift. I began to hear myself pausing for effect rather than filling silences with filler words. I started asking clarifying questions in group discussions instead of nodding along when I was unsure. By the end of the module, I presented our final PPW portfolio review with a composure I genuinely did not think I possessed at the start. Communication, I learned, is a craft — and like any craft, it rewards deliberate practice.`,
  },
  {
    icon: Users,
    title: 'Teamwork Experience',
    color: 'blue',
    content: `Our group assignment — building a mock consulting proposal for a fictitious fintech startup — threw five very different people together and asked us to produce one coherent deliverable. The early weeks were messy. We had overlapping responsibilities, unclear ownership, and at least two occasions where two members had independently worked on the same section without realising it. These were not comfortable moments, but they taught me more about collaboration than any lecture could.

I took on the role of informal project coordinator, setting up a shared Notion workspace and scheduling brief weekly sync meetings. What surprised me was that the biggest challenge was not the work itself, but managing different working styles and communication preferences. One teammate preferred asynchronous updates; another needed to talk things through in real time. Learning to bridge those preferences — and to advocate for structure without being overbearing — was a significant personal growth moment. By the final submission, our team produced a report we were genuinely proud of, and more importantly, we had developed a rhythm that felt respectful and effective.`,
  },
  {
    icon: Clock,
    title: 'Time Management',
    color: 'green',
    content: `Balancing the PPW module with three other concurrent modules, an internship, and personal responsibilities was, to put it plainly, overwhelming at first. I was also doing my internship while studying, which made my schedule even more demanding. My initial strategy was to work reactively — addressing whatever deadline loomed largest. This led to late nights, inconsistent quality, and a persistent low-grade anxiety that followed me everywhere.

The turning point came when a visiting industry speaker introduced us to time-blocking and the concept of "deep work." I began treating my calendar as a contract with myself. I blocked two-hour focus sessions for complex tasks and protected them fiercely. I started keeping a simple weekly review log where I noted what I had planned, what I actually completed, and why any gaps existed. That honest audit of my own productivity was uncomfortable but revelatory. I discovered I was losing nearly two hours a day to fragmented task-switching. Restructuring my mornings alone reclaimed that time and fundamentally changed how I approached my studies.`,
  },
  {
    icon: Briefcase,
    title: 'Professional Behaviour',
    color: 'purple',
    content: `PPW challenged me to think about professionalism not as a costume you wear in certain settings, but as a consistent standard you hold yourself to in every interaction. Early in the module, I treated professional workshops somewhat casually — arriving a few minutes late, not fully disengaging from my phone during sessions. A frank one-on-one with my PPW lecturer made me confront what those habits communicated to others: indifference, a lack of respect for other people's time, and an immature understanding of the professional norms I would soon be expected to navigate.

That conversation changed how I carried myself. I started arriving early to everything. I became more intentional about my digital presence, reviewing and cleaning up my LinkedIn profile and being more thoughtful about what I posted publicly. I learned the etiquette of professional email — concise subject lines, appropriate greetings, and always a clear call to action. These might sound like small things, but they compound into a professional identity, and I now understand that identity is constructed through hundreds of small, consistent choices rather than a single grand gesture.`,
  },
  {
    icon: FileText,
    title: 'CV Writing & Interview Preparation',
    color: 'rose',
    content: `Crafting my first professional CV was an exercise in both self-awareness and ruthless editing. My initial draft was three pages long, densely formatted, and organised like an academic transcript rather than a document designed to be skimmed in thirty seconds by a busy recruiter. Through peer reviews and lecturer feedback, I stripped it back to one focused page, reordered sections to lead with impact, and replaced passive descriptions with achievement-oriented language using the CAR (Context, Action, Result) framework wherever possible.

The mock interview sessions were perhaps the most valuable — and most uncomfortable — component of the entire module. Being asked to sit across from a panel and answer "Tell me about yourself" in a structured, confident way without a script is genuinely difficult. My first mock interview was a disaster of rambling tangents and unnecessary qualifiers. But watching back the recorded session was instructive in a way that no feedback form could replicate. I could see my own body language, hear my own verbal tics, and understand precisely where I lost the panel's attention. By my second mock interview, I had prepared a structured narrative, practised behavioural questions using the STAR method, and researched the "company" I was supposedly interviewing with. The difference was stark, and it gave me real confidence heading into actual internship applications.`,
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
    <section id="journal" ref={ref} className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll mb-16 max-w-2xl">
          <p className="section-subheading">Reflective Journal</p>
          <h2 className="section-heading">Preparation for the<br />Professional World</h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 leading-relaxed">
            A personal account of the lessons, challenges, and growth I experienced throughout the PPW module — written honestly and in first person.
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
                    <p key={i} className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
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
            Looking back at the PPW module from where I stand today, the most profound realisation is that professional readiness is not a destination — it is a continuous process of self-examination and deliberate improvement. I entered this module thinking it would be a checkbox exercise alongside my technical subjects. I leave it understanding that the soft skills it cultivated are, in many ways, the foundation upon which all technical expertise must rest. I am more self-aware, more communicative, more disciplined with my time, and more intentional about how I present myself to the world. Those are not small gains.
          </p>
        </div>
      </div>
    </section>
  )
}
