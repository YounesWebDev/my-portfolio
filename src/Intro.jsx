import './Intro.css'
import FallingText from './components/FallingText'

export default function Intro({ onIntroClick, isClosing }) {
  return (
    <section
      className={`intro-screen ${isClosing ? 'intro-screen--closing' : ''}`}
      onClickCapture={onIntroClick}
    >
      <div className="intro-prompt" aria-hidden="true">
        <p className="intro-prompt__text">click to explore</p>
        <div className="loader-wrapper">
          <div className="loader-circle" />
          <div className="loader-circle" />
          <div className="loader-circle" />
          <div className="loader-shadow" />
          <div className="loader-shadow" />
          <div className="loader-shadow" />
        </div>
      </div>

      <div className="w-screen h-screen absolute ">
        <FallingText
          className=" z-10 absolute"
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
