import { useEffect, useRef, useState } from 'react';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  location: string;
  service: string;
  residence: string;
  timeline: string;
  investment: string;
  details: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const INITIAL_FORM: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  location: '',
  service: '',
  residence: '',
  timeline: '',
  investment: '',
  details: '',
};

const FIELD_ORDER: Array<keyof ContactFormData> = [
  'name',
  'email',
  'phone',
  'location',
  'service',
  'residence',
  'timeline',
  'investment',
  'details',
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateForm = (formData: ContactFormData): ContactFormErrors => {
  const errors: ContactFormErrors = {};

  if (formData.name.trim().length < 2) {
    errors.name = 'Enter your full name.';
  }

  if (!EMAIL_PATTERN.test(formData.email.trim())) {
    errors.email = 'Enter an email address in the format name@example.com.';
  }

  if (formData.location.trim().length < 2) {
    errors.location = 'Enter the city or neighborhood where the residence is located.';
  }

  if (!formData.service) {
    errors.service = 'Select the service that best fits your project.';
  }

  if (!formData.timeline) {
    errors.timeline = 'Select when you would like the project to begin.';
  }

  if (!formData.investment) {
    errors.investment = 'Select the investment range you are considering.';
  }

  if (formData.details.trim().length < 40) {
    errors.details = 'Share at least 40 characters about the home and what you would like to change.';
  }

  return errors;
};

export function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!submitted) return;

    const frame = requestAnimationFrame(() => {
      successHeadingRef.current?.focus({ preventScroll: true });
      successHeadingRef.current?.scrollIntoView({ block: 'start', behavior: 'auto' });
    });

    return () => cancelAnimationFrame(frame);
  }, [submitted]);

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const nextErrors = { ...current };
      delete nextErrors[field];
      return nextErrors;
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm(formData);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstInvalidField = FIELD_ORDER.find((field) => nextErrors[field]);
      if (firstInvalidField) {
        requestAnimationFrame(() => {
          document.getElementById(`contact-${firstInvalidField}`)?.focus();
        });
      }
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM);
    setErrors({});
    setSubmitted(false);
    requestAnimationFrame(() => document.getElementById('contact-name')?.focus());
  };

  const errorProps = (field: keyof ContactFormData) => ({
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': errors[field] ? `contact-${field}-error` : undefined,
  });

  return (
    <main id="main-content" className="contact-page">
      <header className="contact-head">
        <p className="about-eyebrow">08 / Contact</p>
        <div className="contact-head__grid">
          <h1>
            Begin with the way<br />{' '}
            <em>you want to live.</em>
          </h1>
          <div className="contact-head__intro">
            <p>
              Every project starts with a clear conversation. Share the residence,
              timing, and scope you have in mind, and we will consider how Atelier 87°
              can best support the work.
            </p>
            <span>New residential inquiries / New York and select locations</span>
          </div>
        </div>
      </header>

      <section className="contact-intake" aria-labelledby="contact-form-title">
        <div className="contact-intake__context">
          <div className="contact-intake__context-copy">
            <p className="about-eyebrow">Initial conversation</p>
            <h2 id="contact-form-title">Tell us about your home.</h2>
            <p>
              The more context you share, the more useful our first conversation can be.
              A concise overview is enough—we will guide the details from there.
            </p>

            <dl>
              <div>
                <dt>Response</dt>
                <dd>Within three business days</dd>
              </div>
              <div>
                <dt>Consultation</dt>
                <dd>One hour with a senior partner</dd>
              </div>
              <div>
                <dt>Primary region</dt>
                <dd>New York City and nearby areas</dd>
              </div>
            </dl>
          </div>

          <figure className="contact-intake__image">
            <img
              src="/images/service-build.webp"
              alt="A quiet dining room with sculptural furniture and warm timber flooring"
            />
            <figcaption>Fifth Avenue residence / Interior architecture</figcaption>
          </figure>
        </div>

        <div className="contact-intake__form-panel">
          {submitted ? (
            <div className="contact-success" role="status">
              <p className="about-eyebrow">Inquiry received</p>
              <h2 ref={successHeadingRef} tabIndex={-1}>Thank you for the introduction.</h2>
              <p>
                We review each project personally and will respond to {formData.email}{' '}
                within three business days with the most useful next step.
              </p>
              <button type="button" onClick={resetForm}>Send another inquiry</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__heading">
                <p>Project inquiry</p>
                <span>Fields marked * are required</span>
              </div>

              <div className="contact-form__group" aria-labelledby="contact-about-you">
                <h3 id="contact-about-you"><span>01</span> About you</h3>
                <div className="contact-form__grid">
                  <div className="contact-field">
                    <label htmlFor="contact-name">Full name *</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={(event) => updateField('name', event.target.value)}
                      placeholder="Eleanor Vance"
                      {...errorProps('name')}
                    />
                    {errors.name ? <p id="contact-name-error" className="contact-field__error">{errors.name}</p> : null}
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email">Email address *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={(event) => updateField('email', event.target.value)}
                      placeholder="eleanor@example.com"
                      {...errorProps('email')}
                    />
                    {errors.email ? <p id="contact-email-error" className="contact-field__error">{errors.email}</p> : null}
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-phone">Phone number</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(event) => updateField('phone', event.target.value)}
                      placeholder="+1 212 555 0187"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-location">Project location *</label>
                    <input
                      id="contact-location"
                      name="location"
                      type="text"
                      autoComplete="address-level2"
                      required
                      value={formData.location}
                      onChange={(event) => updateField('location', event.target.value)}
                      placeholder="Upper East Side, New York"
                      {...errorProps('location')}
                    />
                    {errors.location ? <p id="contact-location-error" className="contact-field__error">{errors.location}</p> : null}
                  </div>
                </div>
              </div>

              <div className="contact-form__group" aria-labelledby="contact-about-project">
                <h3 id="contact-about-project"><span>02</span> About the project</h3>
                <div className="contact-form__grid">
                  <div className="contact-field">
                    <label htmlFor="contact-service">Service of interest *</label>
                    <select
                      id="contact-service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={(event) => updateField('service', event.target.value)}
                      {...errorProps('service')}
                    >
                      <option value="">Select a service</option>
                      <option value="Decoration">Decoration</option>
                      <option value="Interior architecture">Interior architecture</option>
                      <option value="Renovation and build">Renovation and build</option>
                      <option value="Furniture commission">Furniture commission</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                    {errors.service ? <p id="contact-service-error" className="contact-field__error">{errors.service}</p> : null}
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-residence">Residence type</label>
                    <select
                      id="contact-residence"
                      name="residence"
                      value={formData.residence}
                      onChange={(event) => updateField('residence', event.target.value)}
                    >
                      <option value="">Select a residence</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Townhouse">Townhouse</option>
                      <option value="House">House</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-timeline">Preferred start *</label>
                    <select
                      id="contact-timeline"
                      name="timeline"
                      required
                      value={formData.timeline}
                      onChange={(event) => updateField('timeline', event.target.value)}
                      {...errorProps('timeline')}
                    >
                      <option value="">Select a timeframe</option>
                      <option value="Within 3 months">Within 3 months</option>
                      <option value="3–6 months">3–6 months</option>
                      <option value="6–12 months">6–12 months</option>
                      <option value="More than 12 months">More than 12 months</option>
                      <option value="Still exploring">Still exploring</option>
                    </select>
                    {errors.timeline ? <p id="contact-timeline-error" className="contact-field__error">{errors.timeline}</p> : null}
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-investment">Anticipated investment *</label>
                    <select
                      id="contact-investment"
                      name="investment"
                      required
                      value={formData.investment}
                      onChange={(event) => updateField('investment', event.target.value)}
                      {...errorProps('investment')}
                    >
                      <option value="">Select a range</option>
                      <option value="$40k–$99k">$40k–$99k</option>
                      <option value="$100k–$249k">$100k–$249k</option>
                      <option value="$250k–$499k">$250k–$499k</option>
                      <option value="$500k+">$500k+</option>
                      <option value="Furniture commission">Furniture commission</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                    {errors.investment ? <p id="contact-investment-error" className="contact-field__error">{errors.investment}</p> : null}
                  </div>

                  <div className="contact-field contact-field--wide">
                    <label htmlFor="contact-details">Tell us about the home *</label>
                    <textarea
                      id="contact-details"
                      name="details"
                      rows={5}
                      required
                      minLength={40}
                      value={formData.details}
                      onChange={(event) => updateField('details', event.target.value)}
                      placeholder="Share the rooms involved, what is no longer working, and what you hope the finished home will feel like."
                      {...errorProps('details')}
                    />
                    {errors.details ? <p id="contact-details-error" className="contact-field__error">{errors.details}</p> : null}
                  </div>
                </div>
              </div>

              <div className="contact-form__submit">
                <p>Your information is used only to respond to this project inquiry.</p>
                <button type="submit">Send project inquiry <span aria-hidden="true">↗</span></button>
              </div>
            </form>
          )}
        </div>
      </section>

      <section className="contact-details" aria-labelledby="contact-details-title">
        <div className="contact-details__head">
          <p className="about-eyebrow">Studio details</p>
          <h2 id="contact-details-title">A considered first step.</h2>
          <p>
            We accept a limited number of projects each year so every engagement
            receives direct senior attention from concept through completion.
          </p>
        </div>

        <dl className="contact-details__grid">
          <div>
            <dt>Project focus</dt>
            <dd>Residences, apartments, townhouses, and select country homes</dd>
          </div>
          <div>
            <dt>Primary region</dt>
            <dd>New York City, Westchester, and nearby areas</dd>
          </div>
          <div>
            <dt>New inquiries</dt>
            <dd>Reviewed Monday through Friday within three business days</dd>
          </div>
          <div>
            <dt>Trade and press</dt>
            <dd><a href="mailto:studio@atelier87.com">studio@atelier87.com</a></dd>
          </div>
        </dl>

        <div className="contact-details__note">
          <span>Atelier 87° Interior Design</span>
          <p>Interior architecture, decoration, renovation, and collectible furniture.</p>
        </div>
      </section>
    </main>
  );
}
