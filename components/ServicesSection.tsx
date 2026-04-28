import { Fragment } from 'react';
import { whatWeOffer, careerServices, careerFlowSteps } from '@/data/services';
import ServiceOfferIcon, { BlueCheck } from '@/components/ServiceOfferIcons';
import FeaturedSection from '@/components/FeaturedSection';
import { CareerServiceIcon } from '@/components/CareerServiceIcons';
import { FlowStepIcon } from '@/components/FlowStepIcons';

export default function ServicesSection() {
  return (
    <>
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

      <FeaturedSection embedded />

      <section className="pts-section-mint">
        <div className="pts-section-mint-inner" style={{ width: '100%', maxWidth: 'var(--pts-content-max)', margin: '0 auto' }}>
        <div style={{ width: '100%', marginBottom: '2rem' }}>
          <h2 className="pts-landing-title" style={{ textAlign: 'left', marginBottom: '0.65rem' }}>
            Career <span className="pts-landing-title__accent">Support</span> Services
          </h2>
          <p style={{ color: 'var(--pts-text-muted)', fontSize: '1rem', lineHeight: 1.65, maxWidth: '100%' }}>
            From resume optimization to interview success — we support developers and IT professionals at every stage of their job search.
          </p>
        </div>

        <div className="career-services-grid" style={{ marginBottom: '3rem' }}>
          <style>{`
            .career-services-grid {
              display: grid;
              gap: 1.5rem;
              width: 100%;
              grid-template-columns: 1fr;
            }
            @media (min-width: 768px) {
              .career-services-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
              }
            }
          `}</style>
          {careerServices.map((cs) => (
            <div key={cs.id} className="pts-card-glass" style={{ padding: '2rem 1.75rem', height: '100%' }}>
              <div style={{ marginBottom: '1rem' }}>
                <CareerServiceIcon id={cs.icon} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--pts-forest)', marginBottom: '0.65rem', lineHeight: 1.35 }}>
                {cs.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--pts-text-muted)', lineHeight: 1.65, marginBottom: '1.25rem' }}>{cs.description}</p>
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
                {cs.features.map((f) => (
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

        <div style={{ marginBottom: '0.25rem' }}>
          <h4
            className="pts-landing-title pts-landing-title--center"
            style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)', marginBottom: '0.5rem' }}
          >
            End-to-End Career Support
          </h4>
          <p
            style={{
              textAlign: 'center',
              color: 'var(--pts-text-muted)',
              marginBottom: '1.75rem',
              fontSize: '0.95rem',
              lineHeight: 1.6,
            }}
          >
            Our complete service flow — from application to onboarding.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem 0.2rem',
            }}
          >
            {careerFlowSteps.map((step, i) => (
              <Fragment key={step.id}>
                <div
                  className="pts-card-glass"
                  style={{
                    flex: '1 1 120px',
                    maxWidth: 220,
                    minWidth: 100,
                    padding: '1.25rem 0.65rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '0.65rem',
                  }}
                >
                  <FlowStepIcon id={step.icon} />
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: 'clamp(0.68rem, 1.65vw, 0.8rem)',
                      color: 'var(--pts-text)',
                      lineHeight: 1.35,
                    }}
                  >
                    {step.label}
                  </span>
                </div>
                {i < careerFlowSteps.length - 1 && (
                  <span
                    style={{
                      color: 'var(--pts-forest)',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      lineHeight: 1,
                      padding: '0 0.1rem',
                      flexShrink: 0,
                    }}
                    aria-hidden
                  >
                    ›
                  </span>
                )}
              </Fragment>
            ))}
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
