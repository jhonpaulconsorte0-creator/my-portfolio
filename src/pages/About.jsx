const skills = [
    { group: 'Languages', items: ['JavaScript', 'Python', 'HTML & CSS', 'SQL'] },
    { group: 'Front-End', items: ['React', 'React Router', 'Vite'] },
    { group: 'Tools', items: ['Git & GitHub', 'Vercel', 'npm'] },
  ];
  
  const experience = [
    {
      role: 'Computer Science Coursework',
      place: 'University of Cabuyao',
      time: '2024 — present',
      detail:
        'Currently studying as a computer science student in University of Cabuyao',
    },
  ];
  
  export default function About() {
    return (
      <div className="page container about">
        <span className="eyebrow"> About</span>
        <h1>About</h1>
        <p className="about-intro">
        I'm a computer science student who's studying the react router and front end skills
        </p>
  
        <section className="about-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((group) => (
              <div className="skills-group" key={group.group}>
                <h3 className="skills-group-title mono">{group.group}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
  
        <section className="about-section">
          <h2>Experience &amp; Education</h2>
          <ul className="timeline">
            {experience.map((entry) => (
              <li key={entry.role} className="timeline-item">
                <div className="timeline-time mono">{entry.time}</div>
                <div>
                  <h3 className="timeline-role">{entry.role}</h3>
                  <p className="timeline-place mono">{entry.place}</p>
                  <p>{entry.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }