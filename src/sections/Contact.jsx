
export default function Contact() {
  const contactItems = [
    {
      id: 'email-card',
      label: 'Email',
      value: 'arshishayan@gmail.com',
      note: 'Send me an email',
      href: 'mailto:arshishayan@gmail.com',
      isActive: false,
    },
    {
      id: 'phone-card',
      label: 'Phone / WhatsApp',
      value: '+91-8406024234',
      note: 'Get in touch directly',
      href: 'https://wa.me/918406024234',
      isActive: true,
    },
    {
      id: 'linkedin-card',
      label: 'LinkedIn',
      value: 'linkedin.com/in/shayanarshi',
      note: 'Connect with me professionally',
      href: 'https://linkedin.com/in/shayanarshi',
      isActive: false,
    },
    {
      id: 'github-card',
      label: 'GitHub',
      value: 'github.com/shayanarshi',
      note: 'Explore my projects and code',
      href: 'https://github.com/shayanarshi',
      isActive: false,
    },
    {
      id: 'location-card',
      label: 'Location',
      value: 'Hyderabad, Telangana, India',
      note: 'Open to suitable opportunities',
      href: null,
      isActive: false,
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <span className="section-label">Contact</span>

        <h2 className="contact-title">Let's talk.</h2>

        <p className="contact-subtitle">
          I'm open to entry-level Java Developer, Backend Developer,
          and Full Stack Developer opportunities, including internships
          and freelance projects. Feel free to reach out!
        </p>

        <div className="contact-grid">
          {contactItems.map((item) => (
            <div
              key={item.id}
              className={`contact-card${
                item.isActive ? ' active-card' : ''
              }`}
            >
              <div className="contact-card-label">
                {item.label}
              </div>

              {item.href ? (
                <a
                  href={item.href}
                  className="contact-card-value"
                  style={{
                    color: '#1a1a1a',
                    textDecoration: 'none',
                  }}
                  target={
                    item.href.startsWith('http')
                      ? '_blank'
                      : undefined
                  }
                  rel={
                    item.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  {item.value}
                </a>
              ) : (
                <div className="contact-card-value">
                  {item.value}
                </div>
              )}

              <div className="contact-card-note">
                {item.note}
              </div>
            </div>
          ))}
        </div>

        <div className="contact-email-cta">
          <div className="contact-email-cta-text">
            <h4>Let's connect</h4>
            <p>
              Have an opportunity or want to discuss a project?
              I'd be happy to hear from you.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="https://wa.me/918406024234"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-resume"
            >
              WhatsApp
            </a>

            <a
              href="mailto:arshishayan@gmail.com"
              className="btn-resume"
              style={{ backgroundColor: '#4b5563' }}
            >
              Email Me
            </a>

            <a
              href="https://github.com/shayanarshi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-resume"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
