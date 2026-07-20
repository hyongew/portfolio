import type { RainbowCardProps } from './RainbowCard.types';
import './RainbowCard.scss';

export default function RainbowCard(cardProps: RainbowCardProps) {
	return (
		<div
			className="card rainbow-card"
			style={
				cardProps?.borderGradientColour
					? {
							backgroundImage:
								'linear-gradient(var(--bs-body-bg), var(--bs-body-bg)), ' +
								cardProps.borderGradientColour,
						}
					: {}
			}
		>
			<div className="card-body">
				<h6 className="card-title">
					<strong>{cardProps.title}</strong>
				</h6>
				<p className="card-text mb-2">{cardProps.description}</p>
			</div>
		</div>
	);
}
