export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, index) => {
        const entry = typeof item === 'string' ? { title: item, subtitle: '', description: '' } : item;

        return (
          <div className="timeline-item" key={`${entry.title}-${index}`} data-aos="fade-up">
            <span className="timeline-number">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{entry.title}</h3>
              {entry.subtitle ? <span className="timeline-subtitle">{entry.subtitle}</span> : null}
              {entry.description ? <p>{entry.description}</p> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
