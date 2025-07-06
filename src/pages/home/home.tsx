import { ContactLinks, RainbowCard } from "@components";
import "./home.scss";

export const projectList = [
  {
    title: "Workout Tracker",
    description: "Track your exercises and rest days.",
    techStack: ["React", "Firebase"],
    borderGradientStyle:
      "linear-gradient(white, white), linear-gradient(90deg, #DED1EB, #A4ABE4)",
  },
  {
    title: "Workout Tracker",
    description: "Track your exercises and rest days.",
    techStack: ["React", "Firebase"],
    borderGradientStyle:
      "linear-gradient(white, white), linear-gradient(90deg, #A6E5D0, #6D89CC, #B586E0)",
  },
  {
    title: "Workout Tracker",
    description: "Track your exercises and rest days.",
    techStack: ["React", "Firebase"],
    borderGradientStyle:
      "linear-gradient(white, white), linear-gradient(90deg, #F8EEC2, #EFC3C3, #ECD2D2)",
  },
];

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
          {projectList.map((proj, idx) => (
            <div key={idx} className="col">
              <RainbowCard {...proj} />
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Contact me</h2>
        <ContactLinks />
      </section>
    </>
  )
}
