import { IconGithub, IconLinkedIn } from './Icon.jsx';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <span className="footer-copy">© 2026 Shayan Arshi</span>
        <div className="footer-links">
          <a
            href="mailto:arshishayan@gmail.com"
            className="footer-link"
          >
            Email
          </a>
          <a
            href="https://github.com/Shayanarshi"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link footer-icon-link"
            title="GitHub"
          >
            <IconGithub />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shayanarshi/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link footer-icon-link"
            title="LinkedIn"
          >
            <IconLinkedIn />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
