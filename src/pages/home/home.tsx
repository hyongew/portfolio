import { LinkedinIcon, EmailIcon } from "../../assets";
import RainbowCard from "../../components/rainbowCard/rainbowCard";
import "./home.scss";

const GRADIENT_STYLES = {
  1: "linear-gradient(90deg, #DED1EB, #A4ABE4)",
  2: "linear-gradient(90deg, #A6E5D0, #6D89CC, #B586E0)",
  3: "linear-gradient(90deg, #F8EEC2, #EFC3C3, #ECD2D2)"
}

export default function Home() {
  return (
    <>
      <section>
        <h1>Hong Yew <span>Tan</span></h1>
        <p>Software Engineer at DBS Bank</p>
        <p>I like building purposeful applications and writing clean, maintainable code.</p>
        <p>React · TypeScript · Python · FastAPI · Docker</p>
      </section>
      <section>
        <h2>Featured projects</h2>
        <div className="row">
          <div className="col">
            <RainbowCard
              title="Workout Tracker"
              description="Track your exercises and rest days."
              techStack={["React", "Firebase"]}
              borderGradientStyle={"linear-gradient(white, white), " + GRADIENT_STYLES[1]}
            />
          </div>
          <div className="col">
            <RainbowCard
              title="Workout Tracker"
              description="Track your exercises and rest days."
              techStack={["React", "Firebase"]}
              borderGradientStyle={"linear-gradient(white, white), " + GRADIENT_STYLES[2]}
            />
          </div>
          <div className="col">
            <RainbowCard
              title="Workout Tracker"
              description="Track your exercises and rest days."
              techStack={["React", "Firebase"]}
              borderGradientStyle={"linear-gradient(white, white), " + GRADIENT_STYLES[3]}
            />
          </div>
        </div>
      </section>
      <section>
        <h2>Contact me</h2>
        <div className="contact">
          <a href="https://linkedin.com/in/hongyewtan" aria-label="LinkedIn">
            <LinkedinIcon className="contact__icon contact__icon--linkedin"/>
            <span className="contact__icon-label">in/hongyewtan</span>
          </a>
          <a href="mailto:hongyew98@gmail.com" aria-label="Email">
            <EmailIcon className="contact__icon contact__icon--email"/>
            <span className="contact__icon-label">hongyew98@gmail.com</span>
          </a>
        </div>
      </section>
    </>
  )
}
