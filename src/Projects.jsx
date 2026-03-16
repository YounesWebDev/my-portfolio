import { ArrowUpRight } from 'lucide-react'
import { FaGithub, FaLaravel, FaReact } from 'react-icons/fa6'
import { GrMysql } from 'react-icons/gr'
import { MdAnimation } from 'react-icons/md'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiInertia, SiShadcnui } from 'react-icons/si'
import { TbBrandTypescript } from 'react-icons/tb'
import ScrollFloat from './components/ScrollFloat'
import ScrollStack, { ScrollStackItem } from './components/ScrollStack'

const makePreview = (title, startColor, endColor) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${startColor}" />
          <stop offset="100%" stop-color="${endColor}" />
        </linearGradient>
      </defs>
      <rect width="1200" height="900" fill="#050817" />
      <rect x="42" y="42" width="1116" height="816" rx="38" fill="url(#bg)" opacity="0.82" />
      <rect x="102" y="142" width="998" height="74" rx="18" fill="rgba(2, 6, 23, 0.45)" />
      <rect x="102" y="254" width="562" height="430" rx="26" fill="rgba(2, 6, 23, 0.45)" />
      <rect x="696" y="254" width="404" height="200" rx="26" fill="rgba(2, 6, 23, 0.4)" />
      <rect x="696" y="484" width="404" height="200" rx="26" fill="rgba(2, 6, 23, 0.4)" />
      <text x="112" y="188" fill="#e5f6ff" font-size="34" font-family="Arial, sans-serif" font-weight="700">${title}</text>
      <text x="112" y="760" fill="#e5f6ff" font-size="28" font-family="Arial, sans-serif">Project Preview</text>
    </svg>
  `

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

const projects = [
  {
    title: 'Mojito Landing Page',
    technologies: [
      { name: 'React', icon: FaReact },
      {name: 'JavaScript', icon: TbBrandTypescript },
      { name: 'GSAP', icon: MdAnimation },
      { name: 'Tailwind CSS', icon: RiTailwindCssFill },
    ],
    description:
      'A modern and responsive landing page for a mojito-themed website. It focuses on clean design, smooth animations, and a user-friendly experience on both desktop and mobile',
    githubUrl: 'https://github.com/YounesWebDev/mojito_landingPage',
    demoUrl: 'https://mojito-landing-page-two.vercel.app/',
    image: '/mojito.png'
  },
  {
    title: 'Multi-Hotel Management System',
    technologies: [
      { name: 'React', icon: FaReact },
      {name: 'TypeScript', icon: TbBrandTypescript },
      {name: 'Inertia.js', icon: SiInertia},
      { name: 'Shadcn UI', icon: SiShadcnui },
      { name: 'Laravel', icon: FaLaravel },
      { name: 'MySQL', icon: GrMysql }
    ],
    description:
      'A full-stack hotel management system designed to manage multiple hotels from a single platform. It uses a Laravel backend and a React-based frontend to deliver a modern, responsive, and organized management experience.',
    githubUrl: 'https://github.com/YounesWebDev/Multi-hotels-management-system',
    demoUrl: 'https://Multi-hotels-management-system.vercel.app',
    image: "/hotels.png"
  },
  {
    title: 'Algerian services marketplace',
    technologies: [
      { name: 'React', icon: FaReact },
      {name: 'TypeScript', icon: TbBrandTypescript },
      {name: 'inertia.js', icon: SiInertia},
      { name: 'Laravel', icon: FaLaravel },
      { name: 'Shadcn UI', icon: SiShadcnui },
      { name: 'MySQL', icon: GrMysql }
    ],
    description:
      'A web marketplace for offering and discovering services in Algeria. It provides a modern platform where users can browse services, interact with providers, and use a clean, responsive interface.',
    githubUrl: 'https://github.com/YounesWebDev/Services-Algerian-Marketplace',
    demoUrl: 'https://Services-Algerian-Marketplace.vercel.app',
    image: makePreview('Coming Soon', '#475569', '#0ea5e9')
  }
]

export default function Projects() {
  return (
    <section id="projects" className="px-3 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <ScrollFloat
          animationDuration={1.4}
          ease="back.inOut(2)"
          scrollStart="center bottom+=45%"
          scrollEnd="bottom bottom-=35%"
          stagger={0.05}
          containerClassName="text-center"
          textClassName="text-3xl font-bold text-white sm:text-4xl"
        >
          Projects
        </ScrollFloat>
      </div>

      <div className="mx-auto mt-10 w-full max-w-6xl sm:mt-14">
        <ScrollStack
          className="mx-auto max-w-6xl"
          useWindowScroll
          itemDistance={200}
          itemScale={0.03}
          itemStackDistance={40}
          stackPosition="10%"
          scaleEndPosition="40%"
          baseScale={0.80}
          rotationAmount={1}
          blurAmount={7}
        >
          {projects.map(project => (
            <ScrollStackItem
              key={project.title}
              itemClassName="h-auto min-h-[26rem] border border-white/20 bg-white/10 px-4 py-5 backdrop-blur-xl sm:min-h-[30rem] sm:px-6 sm:py-7 md:min-h-[24rem] md:px-8"
            >
              <article className="grid gap-5 sm:gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
                <div>
                  <h3 className="text-lg font-semibold text-white sm:text-2xl">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-200 sm:mt-3 sm:text-base sm:leading-7">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                    {project.technologies.map(tech => {
                      const TechIcon = tech.icon

                      return (
                        <span
                          key={tech.name}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-medium tracking-wide text-slate-100 sm:text-xs"
                        >
                          {TechIcon ? <TechIcon className="h-3.5 w-3.5" /> : null}
                          {tech.name}
                        </span>
                      )
                    })}
                  </div>

                  <div className="mt-5 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:flex-wrap sm:gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20 sm:w-auto"
                    >
                      <FaGithub className="h-4 w-4" />
                      Source Code
                    </a>

                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/20 px-4 py-2 text-sm font-medium text-cyan-50 transition hover:bg-cyan-300/30 sm:w-auto"
                    >
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="h-48 overflow-hidden rounded-2xl border border-white/20 bg-white/10 sm:h-56 md:h-full">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover object-center opacity-90"
                    loading="lazy"
                  />
                </div>
              </article>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  )
}
