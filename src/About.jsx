import ScrollFloat from './components/ScrollFloat'
import ScrollReveal from './components/ScrollReveal'

const ABOUT_HIGHLIGHT_WORDS = [
  'fullstack',
  'reliable',
  'smooth',
  'modern',
  'ui',
  'fast',
  'maintainable',
  'performance-focused',
  'clean',
  'good',
]

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center gap-6 px-6 py-20 md:gap-12">
      <ScrollFloat
        animationDuration={1.5}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.06}
      >
        About Me
      </ScrollFloat>

      <ScrollReveal
        baseOpacity={1}
        enableBlur
        baseRotation={8}
        blurStrength={9}
        highlightWords={ABOUT_HIGHLIGHT_WORDS}
        highlightClassName="text-cyan-300"
      >
        Hi, I'm Younes, a Fullstack Developer (Backend and Frontend) who builds reliable web
        applications end-to-end, scalable backends, clean responsive frontends, and smooth user
        experiences. I work with APIs, databases, and modern UI to ship features that are fast,
        maintainable, and performance-focused, with a strong emphasis on clean code and good
        architecture.
      </ScrollReveal>
    </section>
  )
}