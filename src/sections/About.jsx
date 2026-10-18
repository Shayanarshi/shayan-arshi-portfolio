
export default function About() {
  const skills = [
    {
      label: 'Languages & Fundamentals',
      value:
        'Java, JavaScript, OOP, Collections, Exception Handling, Multithreading, Java 8',
    },
    {
      label: 'Backend Development',
      value:
        'Spring Core, Spring MVC, Spring Boot, Spring Data JPA, Spring JDBC, REST APIs, Microservices',
    },
    {
      label: 'Frontend Development',
      value: 'HTML5, CSS3, JavaScript, React.js, Thymeleaf',
    },
    {
      label: 'Databases',
      value: 'MySQL, Oracle SQL',
    },
    {
      label: 'Tools & Cloud',
      value:
        'Git, GitHub, Maven, Postman, Docker, Linux Basics, AWS Cloud Fundamentals',
    },
  ];

  const certs = [
    {
      name: 'Generative AI Certification',
      issuer: 'OutSkill',
    },
    {
      name: 'Deloitte Australia - Cyber Job Simulation',
      issuer: 'Forage · July 2025',
    },
    {
      name: 'AWS Academy Graduate - Cloud Foundations',
      issuer: 'Amazon Web Services · July 2023',
    },
    {
      name: 'Cloud Virtual Internship (10 Weeks)',
      issuer: 'EduSkills / AWS Academy · May–July 2023',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text-column">
                        <p>
              I'm a Java Full Stack Developer currently undergoing
              hands-on training at Ashok IT, Hyderabad. My training
              focuses on Core Java, OOP, Collections, Spring Core,
              Spring MVC, Spring Boot, JDBC, Spring Data JPA, REST APIs,
              and SQL. I'm gaining practical experience developing
              CRUD applications, managing entity relationships,
              integrating MySQL databases, and testing APIs using Postman.
            </p>

            <p>
              I also work with HTML, CSS, JavaScript, React.js, Git,
              and GitHub. My projects include an Employee Management
              System and Mainline, a responsive fashion e-commerce
              application. I graduated from BCET, Durgapur, in 2025
              with a B.Tech in Computer Science and Engineering and
              a CGPA of 8.06. I'm seeking entry-level Java Backend
              and Full Stack Developer opportunities.
            </p>

            <div className="about-history">
              <div className="history-item">
                <span className="history-date">
                  Mar 2026 – Present
                </span>
                <div className="history-details">
                  <strong>Full Stack Java Trainee</strong>
                  <span>Ashok IT · Hyderabad · On-site</span>
                </div>
              </div>

              <div className="history-item">
                <span className="history-date">
                  Sep 2023 – Jan 2026
                </span>
                <div className="history-details">
                  <strong>Technical Intern</strong>
                  <span>SAGECAMP, INC · Remote</span>
                </div>
              </div>

              <div className="history-item">
                <span className="history-date">
                  May – Jul 2023
                </span>
                <div className="history-details">
                  <strong>Cloud Virtual Intern</strong>
                  <span>EduSkills Academy · Remote</span>
                </div>
              </div>

              <div className="history-item">
                <span className="history-date">
                  Jun 2022 – Apr 2023
                </span>
                <div className="history-details">
                  <strong>Operations & Technology Intern</strong>
                  <span>PedalsGo · NIT Durgapur</span>
                </div>
              </div>

              <div className="history-item">
                <span className="history-date">
                  Mar – May 2022
                </span>
                <div className="history-details">
                  <strong>Campus Ambassador</strong>
                  <span>TRYST, IIT Delhi · Remote</span>
                </div>
              </div>

              <div className="history-item">
                <span className="history-date">
                  Sep 2021 – Jul 2025
                </span>
                <div className="history-details">
                  <strong>
                    B.Tech Computer Science & Engineering
                  </strong>
                  <span>
                    Bengal College of Engineering and Technology
                    (BCET), Durgapur · CGPA: 8.06
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-details-column">
            <div className="detail-block">
              <h3>Technical Skills</h3>
              <ul className="skills-list">
                {skills.map((skill) => (
                  <li key={skill.label}>
                    <strong>{skill.label}</strong>
                    <span>{skill.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-block">
              <h3>Certifications & Training</h3>
              <ul className="certs-list">
                {certs.map((cert) => (
                  <li key={cert.name}>
                    <strong>{cert.name}</strong>
                    <span>{cert.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
