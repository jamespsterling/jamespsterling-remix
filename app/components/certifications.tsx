import type { Certifications } from '~/data/types';

export default function Certifications({ certifications }: { certifications: Certifications }) {
  return (
    <div id="certifications">
      <h2 className="heading mb-8 md:mb-10">Certifications</h2>
      {certifications.map((certification, i) => (
        <div className="certification-block shadow-large" key={i}>
          <div className="certification-header">
            <img src={certification.badge.src} alt={certification.badge.alt} />
            <div className="certification-text-header">
              <h3>
                <a target="_blank" rel="noopener noreferrer" href={certification.link}>
                  {certification.name}
                </a>
              </h3>
              <h4 className="mb-1" dangerouslySetInnerHTML={{ __html: certification.issued }}></h4>
              <h5>{certification.description}</h5>
            </div>
          </div>
          <span className="certification-date">{certification.date}</span>
        </div>
      ))}
    </div>
  );
}
