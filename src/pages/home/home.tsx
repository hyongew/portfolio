import { ContactLinks, RainbowCard } from "@components";
import type { RainbowCardProps } from "../../components/RainbowCard/RainbowCard.types";
import "./Home.scss";

export default function Home() {

  const projectList: RainbowCardProps[] = [
    {
      title: "Project 1",
      description: "This is a sample project description.",
      techStack: ["React", "Springboot"],
      borderGradientColour: "linear-gradient(90deg, #C084FC, #6366F1)",
    },
    {
      title: "Project 2",
      description: "This is a sample project description.",
      techStack: ["React", "Springboot"],
      borderGradientColour: "linear-gradient(90deg, #2FF4A0, #4C6EF5, #D96BF5)",
    },
    {
      title: "Project 3",
      description: "This is a sample project description.",
      techStack: ["React", "Springboot"],
      borderGradientColour: "linear-gradient(90deg, #FFD66B, #FF7E7E, #FFB4B4)",
    },
  ];

  return (
    <>
      <section>
        <h6 className="resume-intro">Software Engineer<span>&nbsp;</span></h6>
        <p className="h5 fst-italic">I like building clean and straightforward user experiences.</p>
        
        {/* <p>Angular · React · TypeScript · Python · FastAPI · Docker</p> */}
      </section>
      <section className="fade-in__down" style={{animationDelay: "0.1s"}}>
        <h2 className="mt-5 mb-3">Featured projects</h2>
        <div className="row">
          {projectList.map((proj, i) => (
            <div key={i} className="col">
              <RainbowCard {...proj} />
            </div>
          ))}
        </div>
      </section>
      <section className="fade-in__down" style={{animationDelay: "0.2s"}}>
        <h2 className="mt-5 mb-3">Contact me</h2>
        <ContactLinks />
      </section>
    </>
  )
}