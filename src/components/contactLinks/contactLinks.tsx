import { LinkedinIcon, EmailIcon } from "@assets";
import "./ContactLinks.scss";

const EMAIL = "hongyew98@gmail.com"
const LINKEDIN_USERNAME = "hongyewtan";

export default function ContactLinks() {
  return (
    <div className="contact">
      <a href={"https://linkedin.com/in/"+LINKEDIN_USERNAME} aria-label="LinkedIn" className="contact__link grow-btn mb-3">
        <LinkedinIcon className="contact__icon contact__icon--linkedin" />
        <span className="contact__icon-label h6">in/{LINKEDIN_USERNAME}</span>
      </a>
      <a href={"mailto:"+EMAIL} aria-label="Email" className="contact__link grow-btn">
        <EmailIcon className="contact__icon contact__icon--email" />
        <span className="contact__icon-label h6">{EMAIL}</span>
      </a>
    </div>
  );
}