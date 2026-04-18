import { GitBranch, Globe, Mail, ChevronDown, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

const interests = [
  "Full-Stack Development",
  "Cloud Computing",
  "AI & Machine Learning",
  "Open Source",
  "UI/UX Design",
];

export default function Introduction() {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".animate-on-scroll") || [];
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.15 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="introduction"
      ref={ref}
      className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Hero grid */}
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left – text */}
          <div className="md:col-span-3 space-y-6">
            <div className="animate-on-scroll">
              <p className="section-subheading">Academic Portfolio · 2026</p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 dark:text-white leading-tight">
                Kumodi
                <span className="block text-amber-500">Bogahawatte</span>
              </h1>
            </div>

            <div
              className="animate-on-scroll"
              style={{ transitionDelay: "0.1s" }}
            >
              <p className="text-lg text-slate-600 dark:text-slate-300 font-body flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Software Engineering Undergraduate · SLIIT, Malabe
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                <MapPin size={13} /> Colombo, Sri Lanka
              </p>
            </div>

            <div
              className="animate-on-scroll"
              style={{ transitionDelay: "0.2s" }}
            >
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                I am a fourth-year Software Engineering undergraduate at the Sri
                Lanka Institute of Information Technology (SLIIT), with a
                genuine passion for building meaningful software — from elegant
                user interfaces to robust back-end systems. Having grown up in
                Colombo, Sri Lanka, I developed an early curiosity for how
                technology could solve real-world problems in my community,
                which ultimately led me to pursue engineering.
              </p>
            </div>

            <div
              className="animate-on-scroll"
              style={{ transitionDelay: "0.3s" }}
            >
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Beyond the classroom, I am an avid contributor to open-source
                projects and enjoy attending local tech meetups. I believe that
                the best engineers are lifelong learners — and that mindset
                drives everything I do, from how I approach a tricky algorithm
                to how I collaborate with my team. My long-term aspiration is to
                become a solutions architect who bridges cutting-edge cloud
                infrastructure with human-centred product design.
              </p>
            </div>

            {/* Interests */}
            <div
              className="animate-on-scroll flex flex-wrap gap-2"
              style={{ transitionDelay: "0.4s" }}
            >
              {interests.map((i) => (
                <span key={i} className="tag">
                  {i}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div
              className="animate-on-scroll flex items-center gap-4 pt-2"
              style={{ transitionDelay: "0.5s" }}
            >
              <a
                href="mailto:kumodib@gmail.com"
                className="flex items-center gap-2 text-sm font-medium bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-full transition-colors duration-200"
              >
                <Mail size={15} /> Get In Touch
              </a>
              <a
                href="https://github.com/KumodiBogahawatte"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-amber-600 hover:border-amber-300 transition-all"
              >
                <GitBranch size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/kumodibogahawatte"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-amber-600 hover:border-amber-300 transition-all"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Right – avatar card */}
          <div
            className="md:col-span-2 animate-on-scroll"
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="relative">
              {/* Decorative block */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl bg-amber-100 dark:bg-amber-900/30 -z-10"></div>
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl p-1 shadow-xl">
                <div className="bg-slate-900 rounded-3xl overflow-hidden aspect-[4/5] flex flex-col items-center justify-center p-8 gap-6">
                  {/* Avatar placeholder */}
                  <div className="w-32 h-32 rounded-full bg-amber-500/20 border-2 border-amber-400/40 flex items-center justify-center">
                    <img
                      src="/profile.jpeg"
                      alt="Kumodi Bogahawatte"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="text-center space-y-1">
                    <p className="font-display text-xl font-semibold text-white">
                      Kumodi Bogahawatte
                    </p>
                    <p className="text-sm text-slate-400">
                      B.Sc (Hons) Information Technology (SLIIT) <br />Specializing in Software
                      Engineering
                    </p>
                    <p className="text-xs text-amber-400 font-mono">
                      Year 4 · SLIIT
                    </p>
                  </div>
                  <div className="w-full space-y-2">
                    {[
                      ["GPA", "2.86 / 4.0"],
                      ["Specialisation", "Software Engineering"],
                      ["Expected", "2026"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between text-sm">
                        <span className="text-slate-500 font-body">{k}</span>
                        <span className="text-slate-200 font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="flex justify-center mt-20 animate-bounce no-print">
          <a
            href="#journal"
            className="text-slate-400 hover:text-amber-500 transition-colors"
          >
            <ChevronDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
