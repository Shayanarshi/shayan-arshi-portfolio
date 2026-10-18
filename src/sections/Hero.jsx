
export default function Hero() {
  const techStack = [
    'Java',
    'Spring Boot',
    'React.js',
    'MySQL',
    'REST APIs',
    'Docker',
    'AWS',
  ];

  return (
    <section id="home" className="hero-section">
      <div className="hero-content-wrapper">
        <div className="hero-inner">

          {/* Role chip */}
          <div className="hero-role-label animate-fade-in-up delay-1">
            Java Full Stack Developer
          </div>

          {/* Headline */}
          <h1 className="hero-title animate-fade-in-up delay-2">
            Hi, I'm Shayan.
            <br />
            <span className="hero-title-muted">
              I build practical web applications.
            </span>
          </h1>

          {/* Bio */}
          <p className="hero-description animate-fade-in-up delay-3">
            Java Full Stack Developer skilled in Java, Spring Boot,
            REST APIs, SQL, and React.js. I enjoy building
            database-driven applications and creating reliable,
            user-friendly web experiences.
          </p>

          {/* CTAs */}
          <div className="hero-cta-group animate-fade-in-up delay-4">
            <a href="#work" className="btn-primary-solid">
              View work
            </a>
            <a href="#contact" className="btn-text-link">
              Get in touch →
            </a>
          </div>

          {/* Tech stack pills */}
          <div className="hero-stack animate-fade-in-up delay-5">
            <span className="hero-stack-label">Stack:</span>
            {techStack.map((t) => (
              <span key={t} className="hero-stack-pill">
                {t}
              </span>
            ))}
          </div>

        </div>

        {/* Right side visual element */}
        <div className="hero-visual animate-fade-in-up delay-4">
          <div className="profile-card">

            {/* Faint horizontal lines */}
            <div className="profile-card-lines">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>

            <div className="profile-card-top">
              <span className="profile-pill blue">
                FULL STACK
              </span>
            </div>

            <div className="profile-card-center">
              <span className="profile-initials">SA</span>
            </div>

            <div className="profile-card-bottom">
              <span className="profile-pill outline">
                JAVA • SPRING BOOT • REACT • SQL
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
