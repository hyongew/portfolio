import './Intro.scss';

export default function Intro({ showResume = false }) {
	return (
		<>
			<h1 className="display-4 mt-4 title">
				<strong>Hong Yew</strong> Tan
			</h1>
			<p className="intro-description">
				<span className="h3">Software Engineer</span>
				{showResume && (
					<span className="fade-in">
						<span className="hide-on-mobile">&nbsp; </span>at Jeppesen
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
			{!showResume && (
				<p className="fade-in">
					Angular · React · TypeScript · Python · Java · Docker
				</p>
			)}
		</>
	);
}
