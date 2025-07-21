import type { RainbowCardProps } from "./RainbowCard.types"
import "./RainbowCard.scss"

export default function RainbowCard(cardProps: RainbowCardProps) {
  return (
    <div className="card project-card" style={cardProps?.borderGradientColour ? { backgroundImage: ("linear-gradient(var(--bs-body-bg), var(--bs-body-bg)), "+cardProps.borderGradientColour) } : {}}>
      <div className="card-body">
        <h5 className="card-title">{cardProps.title}</h5>
        <p className="card-text">{cardProps.description}</p>
      </div>
    </div>
  )
}