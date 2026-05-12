import { whatWeOffer } from '@/data/services';
import ServiceOfferIcon, { BlueCheck } from '@/components/ServiceOfferIcons';

export default function WhatWeOfferSection() {
  return (
    <section id="services" className="pts-section-mint">
      <div className="pts-section-mint-inner" style={{ width: '100%', maxWidth: 'var(--pts-content-max)', margin: '0 auto' }}>
        <div style={{ marginBottom: '2.5rem', textAlign: 'left' }}>
          <h2 className="pts-landing-title">
            <span className="pts-landing-title__accent">What</span> We Offer
          </h2>
        </div>

        <div className="offer-grid" style={{ marginBottom: '2.5rem' }}>
          <style>{`
            .offer-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 1.5rem;
              width: 100%;
            }
            @media (min-width: 1024px) {
              .offer-grid {
                grid-template-columns: repeat(3, minmax(0, 1fr));
              }
            }
          `}</style>
          {whatWeOffer.map((service) => (
            <div key={service.id} className="pts-card-glass" style={{ padding: '2rem 1.75rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <ServiceOfferIcon id={service.icon} />
              </div>
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--pts-forest)',
                  marginBottom: '0.75rem',
                  lineHeight: 1.35,
                }}
              >
                {service.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--pts-text-muted)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                {service.description}
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                }}
              >
                {service.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      color: 'var(--pts-text)',
                    }}
                  >
                    <BlueCheck />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
