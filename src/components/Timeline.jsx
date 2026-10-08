export default function Timeline({ experience = [], education = [] }) {
  return (
    <div className="timeline-wrap">
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.role + e.org}>
            <div className="tl-head">
              <h3>{e.role}</h3>
              <span className="period">{e.period}</span>
            </div>
            <p className="org">{e.org}</p>
            <ul>{e.points.map((p, i) => <li key={i}>{p}</li>)}</ul>
          </li>
        ))}
      </ol>
      {education.length > 0 && (
        <div className="edu">
          <h3>Education</h3>
          {education.map((e) => (
            <div key={e.degree} className="edu-item">
              <strong>{e.degree}</strong>
              <span>{e.school} · {e.period}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
