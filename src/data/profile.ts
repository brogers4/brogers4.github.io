import type { Competency } from '../types'

export const profile = {
  name: 'Brandon Rogers',
  title: 'Principal Software Product Manager · Engineering Leader · IoT Architect',
  location: 'Senoia, GA (Atlanta Metro)',
  email: 'brogers4@gmail.com',
  linkedin: 'https://www.linkedin.com/in/brandon-rogers-98727b3/',
  github: 'https://github.com/brogers4',
  bio: [
    'I build things that haven\'t been built before. Almost everything I\'ve done in twenty years at Eaton has been 0-to-1 — taking ideas from a whiteboard, a patent filing, or a napkin sketch all the way to products used by hundreds of thousands of people. Whether growing a software team from zero to forty-five engineers, architecting a cloud IoT platform from scratch, or co-inventing a smart circuit breaker that spawned a $100M+ and growing business, I\'ve always operated at the intersection of deep technical craft and strategic business thinking.',
    'My career has been defined by doing hard things in emerging spaces — IoT before it had a name, energy management before the grid was "smart," agentic AI workflows before most teams knew where to start. I\'m drawn to problems that require you to invent the solution, not just implement it. That means building not just the product, but the team, the process, the roadmap, and sometimes the market itself. That\'s what 0-to-1 really looks like.',
    'Outside of work, I live in Senoia, GA with my wife, our son (14) and daughter (9), and our Australian Shepherd, S\'mores. I love sports, photography, art, and traveling — and I try to bring the same curiosity I have on those adventures into everything I build.',
  ],
  jobsQuote: 'Here\'s to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They\'re not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can\'t do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.',
}

export const competencies: Competency[] = [
  {
    title: 'IoT Platform Architecture',
    description: 'Designed and built enterprise IoT platforms from scratch — cloud, firmware, mobile, and APIs — supporting 100K+ devices across consumer and B2B applications.',
    icon: 'cpu',
  },
  {
    title: 'Software Product Management',
    description: 'Portfolio product owner across mobile apps, B2B APIs, developer portals, and SaaS platforms. Built and led the PO function where none existed before.',
    icon: 'layout-dashboard',
  },
  {
    title: 'Engineering Leadership',
    description: 'Grew global software teams from 0 to 45+ engineers across US and India. Established agile practices, CICD pipelines, TDD, DORA metrics, and architectural governance.',
    icon: 'users',
  },
  {
    title: 'Energy Transition & DERMS',
    description: 'Deep domain expertise in demand response, distributed energy resources, VPP integrations, and grid-edge software. Launched with Tesla, Lunar Energy, and Generac.',
    icon: 'zap',
  },
  {
    title: 'Agentic AI Workflows',
    description: 'Built AI-driven product pipelines — from voice memos to shovel-ready user stories — and explored end-to-end agentic systems from user journey to deployed product.',
    icon: 'bot',
  },
  {
    title: 'Full-Stack Development',
    description: 'Hands-on across the stack: TypeScript/React/Node.js, Azure cloud services, React Native mobile apps, embedded firmware, and RESTful APIs. 6 patents filed.',
    icon: 'code-2',
  },
  {
    title: 'Business Development & Strategy',
    description: 'Launched multiple 0-to-1 businesses generating $300M+ in incremental revenue. Built go-to-market strategies, monetization models, and evaluated acquisition targets.',
    icon: 'trending-up',
  },
  {
    title: 'Design Thinking & UX',
    description: 'Certified practitioner of Human-Centered Design. Led VOC programs, user research, A/B testing, and design system development that drove app ratings to 4.7 stars.',
    icon: 'lightbulb',
  },
]
