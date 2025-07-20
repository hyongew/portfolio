import "./Resume.scss"

export default function Resume() {

  return (
    <>
      <section>
        <h5 className="mb-4">Software Engineer <span className="fade-line" style={{animationDelay: "0.1s"}}>at DBS Bank. <a>Resume</a></span></h5>
        <p className="h5">I like building clean and straightforward user experiences. <span className="fade-line" style={{animationDelay: "0.1s"}}>That extends to building systems that are not just functional, but also maintainable and scalable. To me, that starts with writing clean, readable code, supported by good test coverage.</span></p>
        <br />
        <p className="h5 fade-line" style={{animationDelay: "0.2s"}}>One of my favourite things about programming is seeing the different components of a well-structured system come together. I also enjoy solving problems through logical thinking. Over time, however, I've learned that <strong>the best solutions don't just depend on technical elegance</strong>. They also need to consider real-world constraints like time, maintainability, and how easily it can be communicated to others.</p>
        <br />
        <p className="h5 fade-line" style={{animationDelay: "0.3s"}}>I believe that good teams have a <strong>clear purpose</strong> and <strong>clearly defined roles</strong> so that everyone is able to make their highest level of contribution. Feel free to reach out if you are building a team with this in mind!</p>
      </section>
    </>
  )
}