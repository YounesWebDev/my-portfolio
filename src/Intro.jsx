import './Intro.css'
import FallingText from './components/FallingText'

export default function Intro({ onIntroClick, isClosing }) {
  return (
    <section
      className={`intro-screen ${isClosing ? 'intro-screen--closing' : ''}`}
      onClick={onIntroClick}
    >

      <div className="loader-wrapper" aria-hidden="true">
        <div className="loader-circle" />
        <div className="loader-circle" />
        <div className="loader-circle" />
        <div className="loader-shadow" />
        <div className="loader-shadow" />
        <div className="loader-shadow" />
      </div>
      <p className="absolute top-[calc(50%+4.5rem)] left-1/2 -translate-x-1/2 m-0 font-mono tracking-[0.08em] lowercase text-white">
        click to explore
      </p>

      <div className="w-screen h-screen absolute ">
        <FallingText
          className=" z-10 absolute "
          text={`Thanks for visiting my portfolio. Welcome to my website.`}
          highlightWords={['Thanks', 'portfolio', 'Welcome']}
          highlightClass="highlighted"
          trigger="click"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.5}
          fontSize="2rem"
          mouseConstraintStiffness={0.2}
        />
      </div>
    </section>
  )
}
