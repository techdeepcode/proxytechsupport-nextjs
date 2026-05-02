import { WHATSAPP_ME_URL } from '@/lib/whatsapp';

const TEAL = 'var(--pts-accent)';
const NAVY_DEEP = 'var(--pts-dark)';

function PhoneIcon({ color }: { color: string }) {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill={color} aria-hidden>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function MailIcon({ color }: { color: string }) {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill={color} aria-hidden>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function WhatsAppIcon({ color }: { color: string }) {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill={color} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="contact-cta-section"
      style={{
        padding: '5rem 1rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <style>{`
        .contact-cta-section {
          background:
            radial-gradient(ellipse 70% 55% at 0% 0%, rgba(var(--pts-accent-rgb), 0.14) 0%, transparent 55%),
            radial-gradient(ellipse 65% 50% at 100% 100%, rgba(var(--pts-forest-rgb), 0.18) 0%, transparent 50%),
            linear-gradient(180deg, var(--pts-surface-dark-raised) 0%, ${NAVY_DEEP} 55%, var(--pts-dark) 100%);
        }
        .contact-cta-inner {
          width: 100%;
          max-width: var(--pts-content-max);
          margin: 0 auto;
        }
        .contact-cta-eyebrow {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${TEAL};
          margin-bottom: 1rem;
        }
        .contact-cta-title {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(1.5rem, 3.2vw, 2.35rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.25;
          margin-bottom: 0.85rem;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }
        .contact-cta-sub {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.65;
          margin-bottom: 2rem;
          max-width: 560px;
          margin-left: auto;
          margin-right: auto;
        }
        .contact-cta-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 2rem;
        }
        .contact-cta-btn-wa {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #25d366;
          color: #ffffff;
          padding: 0.85rem 1.75rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          border: none;
          transition: transform 0.2s, box-shadow 0.2s, filter 0.2s;
        }
        .contact-cta-btn-wa:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(37, 211, 102, 0.45);
          filter: brightness(1.05);
        }
        .contact-cta-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          color: #ffffff;
          padding: 0.85rem 1.75rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.85);
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .contact-cta-btn-ghost:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: #ffffff;
          transform: translateY(-2px);
        }
        .contact-cta-contact-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 1.5rem 2.5rem;
          margin-bottom: 2rem;
        }
        .contact-cta-contact-item {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.92);
        }
        .contact-cta-contact-item a {
          color: inherit;
          text-decoration: none;
        }
        .contact-cta-contact-item a:hover {
          color: ${TEAL};
        }
        .contact-cta-rule {
          border: none;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          margin: 0 auto 1.25rem;
          max-width: 720px;
        }
        .contact-cta-disclaimer {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.45);
          line-height: 1.65;
          max-width: 640px;
          margin: 0 auto;
        }
      `}</style>

      <div className="contact-cta-inner">
        <p className="contact-cta-eyebrow">Ready to get started?</p>
        <h2 className="contact-cta-title">Contact us today and let our experts help you succeed</h2>
        <p className="contact-cta-sub">
          In your IT career with our IT job support and interview assistance services
        </p>

        <div className="contact-cta-btns">
          <a
            href={WHATSAPP_ME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-cta-btn-wa"
          >
            <WhatsAppIcon color="#ffffff" />
            WhatsApp Now
          </a>
          <a href="tel:+919660614469" className="contact-cta-btn-ghost">
            <PhoneIcon color="#ffffff" />
            Call Now
          </a>
          <a href="mailto:support@proxytechsupport.com" className="contact-cta-btn-ghost">
            <MailIcon color="#ffffff" />
            Email Us
          </a>
        </div>

        <div className="contact-cta-contact-row">
          <div className="contact-cta-contact-item">
            <PhoneIcon color={TEAL} />
            <a href="tel:+919660614469">+91 96606 14469</a>
          </div>
          <div className="contact-cta-contact-item">
            <MailIcon color={TEAL} />
            <a href="mailto:support@proxytechsupport.com">support@proxytechsupport.com</a>
          </div>
        </div>

        <hr className="contact-cta-rule" />

        <p className="contact-cta-disclaimer">
          Proxy Tech Support provides interview preparation, technical guidance, and job support services. We do not impersonate candidates or violate employer policies. All services are advisory and educational in nature.
        </p>
      </div>
    </section>
  );
}
