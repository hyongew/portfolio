import { Intro } from '@components';

export default function About() {
	return (
		<>
			<section className="mb-3" style={{ textAlign: 'justify' }}>
				<Intro showResume={true} />
				<br />
				<p className="h6 fade-in__down" style={{ animationDelay: '0.1s' }}>
					I like building clean and straightforward user experiences.
				</p>
				<p className="h6 fade-in__down" style={{ animationDelay: '0.2s' }}>
					That extends to building systems that are not just functional, but
					also maintainable and scalable. To me, it starts with writing clean,
					readable code, supported by good test coverage.
				</p>
				<br />
				<p className="h6 fade-in__down" style={{ animationDelay: '0.3s' }}>
					One of my favourite things about programming is seeing the different
					components of a well-structured system come together. I also enjoy
					solving problems through logical thinking. Over time, however, I've
					learned that{' '}
					<strong>
						the best solutions don't just depend on technical elegance
					</strong>
					. They also need to consider real-world constraints like time,
					maintainability, and how easily it can be communicated to others.
				</p>
				<br />
				<p className="h6 fade-in__down" style={{ animationDelay: '0.4s' }}>
					I believe that good teams have a <strong>clear purpose</strong> and{' '}
					<strong>clearly defined roles</strong> so that everyone is able to
					make their highest level of contribution. Feel free to reach out if
					you are building a team with this in mind!
				</p>
			</section>
		</>
	);
}
