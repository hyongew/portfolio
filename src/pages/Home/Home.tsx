import { ContactLinks, Intro, RainbowCard } from '@components';
import type { RainbowCardProps } from '../../components/RainbowCard/RainbowCard.types';
import './Home.scss';

export default function Home() {
	const projectList: RainbowCardProps[] = [
		{
			title: 'Local AI Lab',
			description:
				"My local LLM setup, models I've been testing, and all things AI.",
			borderGradientColour: 'linear-gradient(90deg, #C084FC, #6366F1)',
		},
		{
			title: 'My Linux Machine',
			description: 'My main Linux setup, daily workflow, and system tweaks.',
			borderGradientColour: 'linear-gradient(90deg, #2FF4A0, #4C6EF5, #D96BF5)',
		},
		{
			title: 'Other Projects',
			description: "Things I've built, am building, and want to explore next",
			borderGradientColour: 'linear-gradient(90deg, #FFD66B, #FF7E7E, #FFB4B4)',
		},
	];

	return (
		<>
			<section>
				<Intro />
			</section>
			<section className="fade-in__down" style={{ animationDelay: '0.1s' }}>
				<h3 className="mt-5 mb-4">What I'm Building</h3>
				<div className="row">
					{projectList.map((proj, i) => (
						<div key={i} className="col">
							<RainbowCard {...proj} />
						</div>
					))}
				</div>
			</section>
			<section className="fade-in__down" style={{ animationDelay: '0.2s' }}>
				<h3 className="mt-5 mb-3">Contact me</h3>
				<ContactLinks />
			</section>
		</>
	);
}
