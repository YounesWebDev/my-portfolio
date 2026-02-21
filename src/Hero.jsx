import { useEffect, useState } from 'react'
import ShinyText from './components/ShinyText'
import TrueFocus from './components/TrueFocus'


export default function Hero() {
  return (
    <section id="home" className="grid min-h-screen place-items-center px-6 pb-12 pt-28">
      <div className="flex flex-col items-center gap-1 md:gap-2">
        <ShinyText
          text="Hi, I'm Younes"
          className=" mb-10 text-center text-4xl font-bold md:text-6xl"
          speed={2}
          delay={0}
          color="#ffffff"
          shineColor="#66e0ff"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
        />
        <div className="mb-10">
          <TrueFocus
            className="text-xs"
            sentence="Frontend Backend FullStack"
            manualMode={false}
            blurAmount={5}
            borderColor="#88d2f2"
            animationDuration={0.5}
            pauseBetweenAnimations={1}
          />
          </div>
          <TrueFocus
            className="text-xs"
            sentence="Developer"
            manualMode={false}
            blurAmount={5}
            borderColor="#88d2f2"
            animationDuration={0.5}
            pauseBetweenAnimations={1}
          />
      </div>
    </section>
  )
}
