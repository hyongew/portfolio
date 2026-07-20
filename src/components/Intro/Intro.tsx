import './Intro.scss';

export default function Intro({ showResume = false }) {
	return (
		<>
			<p className="intro-description">
				<span className="h3">Software Engineer</span>
				{showResume && (
					<span className="fade-in">
						&nbsp; at Jeppesen
						<a
							href="/portfolio/blank.pdf"
							target="_blank"
							aria-label="Resume"
							rel="noopener noreferrer"
							style={{ textDecoration: 'unset' }}
							className="underline-btn ms-4"
						>
							Resume
						</a>
					</span>
				)}
			</p>
			<p>Angular · React · TypeScript · Python · Java · Docker</p>
		</>
	);
}
