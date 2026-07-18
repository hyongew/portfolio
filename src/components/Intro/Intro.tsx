import './Intro.scss';

export default function Intro({ showResume = false }) {
	return (
		<>
			<h6 className="intro-description">
				Software Engineer
				{showResume ? (
					<span className="fade-in">
						{' '}
						at Jeppesen
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
				) : (
					<span>&nbsp;</span>
				)}
			</h6>
			<h6 style={{ textAlign: 'start' }}>
				I like building clean and straightforward user experiences
				{showResume ? <span className="fade-in">.</span> : <span>&nbsp;</span>}
			</h6>
		</>
	);
}
