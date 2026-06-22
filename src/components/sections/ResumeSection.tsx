import { motion } from 'framer-motion'
import { Printer, ExternalLink } from 'lucide-react'
import { profile } from '../../data/profile'

const experience = [
  {
    title: 'Principal Software Product Manager, Energy Transition',
    company: 'Eaton Corporation',
    period: 'February 2024 – April 2026',
    bullets: [
      'Led strategic initiative to build SaaS product platforms, monetizing software, APIs, and data — targeting $50M+ recurring revenue within 3 years.',
      'Served as Portfolio Product Owner across all software and firmware teams; created and executed strategic roadmaps for mobile apps, B2B APIs, web portals, and firmware.',
      'Built and deployed agentic AI pipelines to accelerate product artifact creation (PRDs, Epics, User Stories) and explored cradle-to-grave automation from user journey to deployed product.',
      'Launched AbleEdge API Platform, Developer Portal, and Installer App; successfully on-boarded Tesla, Lunar Energy, and Generac (potential $100M+ annual revenue).',
      'Introduced Working Backwards methodology and formal Product Ownership practices into a waterfall-dominated engineering culture.',
    ],
  },
  {
    title: 'Sr. Engineering Manager, Software & IoT',
    company: 'Eaton Corporation',
    period: 'March 2021 – February 2024',
    bullets: [
      'Grew a global engineering team from zero to 45+ engineers across US and India, spanning frontend/backend, mobile, QA, DevOps, UI/UX, and cybersecurity.',
      'Scaled Brightlayer Home consumer IoT app to 100K+ devices and 60K users, improving App Store rating to 4.7 stars while reducing cloud costs ~30%.',
      'Launched AbleEdge Smart Breaker Gen 2; built data ingestion pipelines, B2B APIs, and developer tools supporting mass market and partner ecosystem.',
      'Established CICD, TDD, DORA metrics, architectural review boards, and agile practices across all teams; improved release cadence from quarterly to 2–3x/month.',
    ],
  },
  {
    title: 'IoT Solution Architecture Manager',
    company: 'Eaton Corporation',
    period: 'July 2019 – March 2021',
    bullets: [
      'Built Eaton\'s first internal IoT platform from scratch; hired and led a new multi-disciplined team (frontend, backend, DevOps, mobile, embedded communications).',
      'Launched Wi-Fi Wiring Devices platform (Switches, Dimmers, Receptacles) nationwide through Lowe\'s, Amazon, and distribution — generating ~$10M in annual revenue.',
      'Architected Azure-based cloud infrastructure (IoT Hub, Event Grid, CosmosDB, APIM, SignalR) and developed first-party React Native mobile app for iOS/Android.',
    ],
  },
  {
    title: 'System Architect / Lead Software Engineer',
    company: 'Eaton Corporation',
    period: '2013 – 2019',
    bullets: [
      'Led NPD projects across connected technology products (Z-Wave, Wi-Fi, USB-C, Alexa-integrated); helped grow technology product revenue nearly 10x to ~$30M annually.',
      'Developed modular Wi-Fi hardware architecture and led Amazon ACK partnership for Alexa-native wiring devices; ~$10M annual revenue.',
      'Created the strategy and org plan for Eaton\'s internal IoT platform; secured funding and started building the team.',
      'Supported Lowe\'s national exclusivity win — a $300M incremental revenue event for the broader business.',
    ],
  },
  {
    title: 'Lead Analyst / R&D Engineer, Emerging Technologies',
    company: 'Eaton Corporation',
    period: '2006 – 2013',
    bullets: [
      'Co-invented the Energy Management Circuit Breaker (smart breaker with metering/controls/comms); filed multiple patents, secured $2M EPRI funding, deployed ~1,000 units across 12 utilities nationally.',
      'Co-invented the EV Breaker; led the initiative that spun up Eaton\'s EV Charging Infrastructure business, which reached ~$100M in annual revenue within 3 years.',
      'Represented Eaton at SAE, IEEE, ZigBee Alliance, NEMA, and EPRI IWC; participated in standards committees (J1772, J2836, OpenADR, ZigBee).',
      'Served 6-month international assignment in Vienna, Austria to grow EMEA EV charging strategy.',
    ],
  },
]

const skills = [
  { category: 'Cloud & Infrastructure', items: 'Azure (IoT Hub, APIM, Functions, CosmosDB, Event Grid, SignalR, AKS), AWS, GCP, Firebase, Serverless' },
  { category: 'Languages & Frameworks', items: 'TypeScript, JavaScript, React, React Native, Node.js, Python, C, C++, HTML/CSS' },
  { category: 'IoT & Protocols', items: 'Wi-Fi, BLE, Z-Wave, ZigBee, Matter, OpenADR, DERMS, Demand Response' },
  { category: 'Product & Process', items: 'Agile/Scrum (Certified ScrumMaster), Working Backwards, Design Thinking, HCD, Phase-Gate/PMP' },
  { category: 'AI & Data', items: 'Agentic AI Pipelines, LLM Integration, Data Science, Analytics, A/B Testing' },
]

export function ResumeSection() {
  return (
    <section id="resume" className="py-24 px-6 border-t border-slate-800/40">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-start justify-between flex-wrap gap-4 mb-12"
        >
          <div>
            <p className="text-blue-400 text-xs tracking-widest uppercase font-semibold mb-3">Resume</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Full Career Summary</h2>
          </div>
          <div className="flex gap-3 no-print">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-all text-sm font-medium"
            >
              <Printer size={15} />
              Save as PDF
            </button>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-all text-sm font-medium"
            >
              <ExternalLink size={15} />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <div className="resume-print-area">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-xl bg-[#111827] border border-slate-800 mb-8"
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-1">{profile.name}</h3>
            <p className="text-blue-400 text-sm font-medium mb-3">
              Software Technical Leader · Product Manager · IoT Architect · Full-Stack Developer
            </p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
              Software technical leader, product owner, system architect, business development
              analyst, and full-stack developer focused on IoT and emerging technologies — who
              believes in customer-obsessed solutions, extreme ownership, and being an agent for
              change. 20 years at Eaton building platforms, teams, and businesses in connected
              products, energy transition, EV charging, and smart home.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500">
              <span>{profile.email}</span>
              <span>{profile.location}</span>
              <a href={profile.linkedin} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={profile.github} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Experience */}
          <div className="mb-8">
            <h4 className="text-xs tracking-widest uppercase text-slate-500 font-semibold mb-5 flex items-center gap-3">
              <span className="flex-1 h-px bg-slate-800" />
              Work Experience
              <span className="flex-1 h-px bg-slate-800" />
            </h4>
            <div className="space-y-6">
              {experience.map((role, i) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="grid md:grid-cols-[1fr_auto] gap-2 md:gap-6"
                >
                  <div>
                    <h5 className="text-slate-100 font-semibold text-sm">{role.title}</h5>
                    <p className="text-blue-400 text-xs font-medium mb-3">{role.company}</p>
                    <ul className="space-y-1.5">
                      {role.bullets.map((bullet, j) => (
                        <li key={j} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                          <span className="text-slate-600 shrink-0 leading-relaxed">–</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-slate-600 text-xs whitespace-nowrap text-right md:text-left">{role.period}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h4 className="text-xs tracking-widest uppercase text-slate-500 font-semibold mb-5 flex items-center gap-3">
              <span className="flex-1 h-px bg-slate-800" />
              Special Skills
              <span className="flex-1 h-px bg-slate-800" />
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div key={skill.category} className="p-4 rounded-lg bg-[#111827] border border-slate-800">
                  <p className="text-slate-300 font-semibold text-xs mb-1">{skill.category}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{skill.items}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education + Awards */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs tracking-widest uppercase text-slate-500 font-semibold mb-4 flex items-center gap-3">
                Education
                <span className="flex-1 h-px bg-slate-800" />
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="text-slate-200 text-sm font-semibold">Master of Science, Electrical & Computer Engineering</p>
                  <p className="text-slate-500 text-xs">University of Tennessee · 2007 · Graduated with honors</p>
                </div>
                <div>
                  <p className="text-slate-200 text-sm font-semibold">Bachelor of Science, Electrical & Computer Engineering</p>
                  <p className="text-slate-500 text-xs">University of Tennessee · 2005 · Graduated with honors</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs tracking-widest uppercase text-slate-500 font-semibold mb-4 flex items-center gap-3">
                Recognitions
                <span className="flex-1 h-px bg-slate-800" />
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>6 patents awarded, 1 patent pending</li>
                <li>2024 Eaton Flex Award — Best New Mobile App</li>
                <li>2023 Eaton Flex Award — UI Execution</li>
                <li>2021 Product of the Year finalist, EC&M</li>
                <li>2021 iF Design Award, iF World Design Guide</li>
                <li>2018 Best Indoor Product, International Builders Show</li>
                <li>2011 Eaton Pinnacle Award — Exceptional Performance</li>
                <li>Certified ScrumMaster</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
