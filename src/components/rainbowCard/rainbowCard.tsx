import './rainbowCard.scss'

type RainbowCardProps = {
  title: string;
  description: string;
  techStack: string[];
  borderGradientStyle?: string; // Just the linear-gradient value
};

export default function RainbowCard(cardProps: RainbowCardProps) {
  return (
    <div className="card project-card" style={cardProps?.borderGradientStyle ? { backgroundImage: cardProps.borderGradientStyle } : {}}>
      <div className="card-body">
        <h5 className="card-title">{cardProps.title}</h5>
        <p className="card-text">{cardProps.description}</p>
      </div>
    </div>
  )
}