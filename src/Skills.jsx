import { cloneElement, isValidElement } from 'react'
import ScrollFloat from './components/ScrollFloat'
import LogoLoop from './components/LogoLoop'
import Folder from './components/Folder'
import { FaGitAlt, FaGithub, FaJava, FaReact } from 'react-icons/fa6'
import { RiPhpFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiShadcnui } from 'react-icons/si'
import { TbBrandTypescript } from 'react-icons/tb'
import { FaLaravel } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { MdAnimation } from 'react-icons/md'
import { IoLogoJavascript } from 'react-icons/io'

const SKILL_LOGOS = [
  {
    title: 'React',
    className: 'text-white hover:text-cyan-300 transition-all duration-500',
    node: <FaReact className="w-12 h-12" />
  },
  {
    title: 'TypeScript',
    className: 'text-white hover:text-blue-500 transition-all duration-500',
    node: <TbBrandTypescript className="w-12 h-12" />
  },
  {
    title: 'Laravel',
    className: 'text-white hover:text-red-500 transition-all duration-500',
    node: <FaLaravel className="w-12 h-12" />
  },
  {
    title: 'GSAP',
    className: 'text-white hover:text-green-500 transition-all duration-500',
    node: <MdAnimation className="w-12 h-12" />
  },
  {
    title: 'Tailwind CSS',
    className: 'text-white hover:text-cyan-300 transition-all duration-500',
    node: <RiTailwindCssFill className="w-12 h-12" />
  },
  {
    title: 'Shadcn UI',
    className: 'text-white hover:text-purple-600 transition-all duration-500',
    node: <SiShadcnui className="w-12 h-12" />
  },
  {
    title: 'MySQL',
    className: 'text-white hover:text-blue-500 transition-all duration-500',
    node: <GrMysql className="w-12 h-12" />
  },
  {
    title: 'Git',
    className: 'text-white hover:text-orange-500 transition-all duration-500',
    node: <FaGitAlt className="w-12 h-12" />
  },
  {
    title: 'GitHub',
    className: 'text-white hover:text-[#6e6d6d] transition-all duration-500',
    node: <FaGithub className="w-12 h-12" />
  },
  {
    title: 'JavaScript',
    className: 'text-white hover:text-yellow-300 transition-all duration-500',
    node: <IoLogoJavascript className="w-12 h-12" />
  },
  {
    title: 'Java',
    className: 'text-white hover:text-orange-300 transition-all duration-500',
    node: <FaJava className="w-12 h-12" />
  },
  {
    title: 'PHP',
    className: 'text-white hover:text-purple-500 transition-all duration-500',
    node: <RiPhpFill className="w-12 h-12" />
  },
];

const toFolderItem = skill => {
  const iconNode = isValidElement(skill.node)
    ? cloneElement(skill.node, {
        className: `${skill.node.props.className ?? ''} w-6 h-6`
      })
    : skill.node;

  return (
    <div
      key={`folder-skill-${skill.title}`}
      className={`flex h-full w-full flex-col items-center justify-center gap-1 text-center text-[10px] font-bold leading-tight ${skill.className}`}
    >
      <span className="flex items-center justify-center">{iconNode}</span>
      <span>{skill.title}</span>
    </div>
  );
};

const FOLDER_SKILL_GROUPS = [
  SKILL_LOGOS.slice(0, 3),
  SKILL_LOGOS.slice(3, 6),
  SKILL_LOGOS.slice(6, 9)
].map(group => group.map(toFolderItem));



export default function Skills() {
  return (
    <section id="skills" className="flex flex-col items-center px-6 py-20">
      <ScrollFloat
        animationDuration={1.5}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.06}
      >
        Tech Stack
      </ScrollFloat>
      <div className="mt-20 h-55 w-screen max-w-screen overflow-hidden">
        <LogoLoop
          logos={SKILL_LOGOS}
          speed={100}
          direction="right"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          fadeOut
          fadeOutColor="#000000"
        />
      </div>
      <div className='mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-50'>
        <div className='mt-30 flex flex-col items-center justify-center'>
          <Folder 
            size={1.5}
            color="#75f6ff"
            items={FOLDER_SKILL_GROUPS[0]}
          />
          <p className='mt-10 font-bold text-2xl'>Core Stack i use</p>
        </div>
        <div className='mt-30 flex flex-col items-center justify-center'>
          <Folder 
            size={1.5}
            color="#75f6ff"
            items={FOLDER_SKILL_GROUPS[1]}
          />
          <p className='mt-10 font-bold text-2xl'>Styling & UI</p>
        </div>
        <div className='mt-30 flex flex-col items-center justify-center'>
          <Folder 
            size={1.5}
            color="#75f6ff"
            items={FOLDER_SKILL_GROUPS[2]}
          />
          <p className='mt-10 font-bold text-2xl'>Database & DevOps</p>
        </div>
      </div>
    </section>
  )
}
