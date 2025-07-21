export default function About() {

  return (
    <>
      <section className="mb-3" style={{textAlign: "justify"}}>
        <h6 className="intro-description">Software Engineer <span className="fade-in">at DBS Bank.<a href="/portfolio/blank.pdf" target="_blank" aria-label="Resume" rel="noopener noreferrer" style={{textDecoration: "unset"}} className="underline-btn ms-4">Resume</a></span></h6>
        <p className="h5 fst-italic" style={{textAlign: "start"}}>I like building clean and straightforward user experiences.</p>
        <br />
        <p className="h6 fade-in__down" style={{animationDelay: "0.1s"}}>That extends to building systems that are not just functional, but also maintainable and scalable. To me, it starts with writing clean, readable code, supported by good test coverage.</p>
        <br />
        <p className="h6 fade-in__down" style={{animationDelay: "0.2s"}}>One of my favourite things about programming is seeing the different components of a well-structured system come together. I also enjoy solving problems through logical thinking. Over time, however, I've learned that <strong>the best solutions don't just depend on technical elegance</strong>. They also need to consider real-world constraints like time, maintainability, and how easily it can be communicated to others.</p>
        <br />
        <p className="h6 fade-in__down" style={{animationDelay: "0.3s"}}>I believe that good teams have a <strong>clear purpose</strong> and <strong>clearly defined roles</strong> so that everyone is able to make their highest level of contribution. Feel free to reach out if you are building a team with this in mind!</p>
      </section>
    </>
  )
}