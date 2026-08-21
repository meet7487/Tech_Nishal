import { Button, Chip, Container } from '@mui/material';
import { Link as RouterLink, useSearchParams } from 'react-router-dom';
import Hero from '../components/Hero';
import InfoCard from '../components/InfoCard';
import SectionHeader from '../components/SectionHeader';
import Timeline from '../components/Timeline';
import { developmentProcess, developmentServices, technologies, whyChoose } from '../services/siteData';

export default function SoftwareDevelopment() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSlug = searchParams.get('service') || developmentServices[0].slug;
  const selectedService =
    developmentServices.find((service) => service.slug === selectedSlug) || developmentServices[0];

  const handleSelectService = (service) => {
    setSearchParams({ service: service.slug });
    requestAnimationFrame(() => {
      document.getElementById('service-details')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <>
      <Hero
        compact
        visual="none"
        eyebrow="Software Development"
        title="Custom software that moves business forward."
        description="Tech Nishal designs and develops websites, web applications, mobile apps, ERP, CRM, e-commerce systems, APIs, cloud solutions, AI-based applications, and long-term maintenance plans."
        actions={[
          { label: 'Contact for Project', to: '/contact' },
          { label: 'View Courses', to: '/courses', variant: 'outlined' },
        ]}
      />

      <section className="section" id="services">
        <Container maxWidth="xl">
          <SectionHeader
            eyebrow="Services"
            title="Development services for startups, teams, and growing companies."
            description="Click any service to see what Tech Nishal can build for that requirement."
          />
          <div className="card-grid three">
            {developmentServices.map((service) => (
              <InfoCard
                key={service.title}
                item={service}
                cta={selectedService.slug === service.slug ? 'Showing Details' : 'View Details'}
                active={selectedService.slug === service.slug}
                onClick={() => handleSelectService(service)}
              />
            ))}
          </div>

          <article className="service-detail-panel detail-panel" id="service-details" data-aos="fade-up">
            <div>
              <span className="eyebrow">Selected Service</span>
              <h2>{selectedService.title}</h2>
              <p>{selectedService.detail}</p>
              {selectedService.deepDetails?.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </div>
            <div className="service-detail-list">
              {selectedService.includes.map((item) => (
                <span key={item}>{item}</span>
              ))}
              {selectedService.outcomes?.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <Button component={RouterLink} to="/contact" className="btn-gradient">
              Discuss {selectedService.title}
            </Button>
          </article>
        </Container>
      </section>

      <section className="section section-band">
        <Container maxWidth="xl">
          <SectionHeader
            eyebrow="Development Process"
            title="A clear delivery timeline from idea to launch."
            description="Each project moves through focused checkpoints so strategy, design, development, testing, and support stay aligned."
          />
          <Timeline items={developmentProcess} />
        </Container>
      </section>

      <section className="section">
        <Container maxWidth="xl">
          <SectionHeader eyebrow="Technologies We Use" title="Modern tools selected around project goals." />
          <div className="tech-grid">
            {technologies.map((group) => (
              <article className="tech-card" key={group.group} data-aos="fade-up">
                <h3>{group.group}</h3>
                <div className="tech-chip-list">
                  {group.items.map((item) => (
                    <Chip key={item} label={item} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section-band">
        <Container maxWidth="xl">
          <SectionHeader eyebrow="Why Choose Tech Nishal" title="A practical team with training and delivery experience." />
          <div className="check-grid">
            {whyChoose.map((item) => (
              <div className="check-item" key={item} data-aos="fade-up">
                <span />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="section-actions">
            <Button component={RouterLink} to="/contact" className="btn-gradient">
              Contact for Project
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
