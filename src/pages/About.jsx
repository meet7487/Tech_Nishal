import { Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Hero from '../components/Hero';
import IconBadge from '../components/IconBadge';
import InfoCard from '../components/InfoCard';
import SectionHeader from '../components/SectionHeader';
import StatCounter from '../components/StatCounter';
import Timeline from '../components/Timeline';
import { companyStats, companyTimeline, contactDetails, values, whyChoose } from '../services/siteData';

const officeGallery = [
  { src: '/office-gallary/img6.jpg', alt: 'Tech Nishal office workspace' },
  { src: '/office-gallary/img7.jpg', alt: 'Tech Nishal learning and mentoring area' },
  { src: '/office-gallary/img3.jpg', alt: 'Tech Nishal office environment' },
  { src: '/office-gallary/img8.jpg', alt: 'Tech Nishal team workspace' },
  { src: '/office-gallary/img4.jpg', alt: 'Tech Nishal office interior' },
  { src: '/office-gallary/img9.jpg', alt: 'Tech Nishal training space' },
];

export default function About() {
  return (
    <>
      <Hero
        compact
        eyebrow="About Us"
        title="Tech Nishal helps people learn technology and companies build software."
        description="We are an IT training and software development company focused on practical education, live project exposure, professional digital products, and career-focused support."
        actions={[
          { label: 'Contact Us', to: '/contact' },
          { label: 'Explore Courses', to: '/courses', variant: 'outlined' },
        ]}
        visual="none"
      />

      <div className="about-page">
      <section className="section about-intro-section">
        <div className="about-orb about-orb-one" aria-hidden="true" />
        <Container maxWidth="xl" className="split-grid about-intro-grid">
          <div data-aos="fade-right">
            <span className="eyebrow">Company Introduction</span>
            <h2>Built for students, professionals, and businesses that want practical technology outcomes.</h2>
            <p>
              Tech Nishal brings training, internships, software development, and placement support together so learners
              and businesses can move from ideas to execution with confidence.
            </p>
          </div>
          <div className="mission-grid about-mission-grid" data-aos="fade-left">
            <article className="glass-card">
              <IconBadge icon="growth" />
              <h3>Mission</h3>
              <p>Make practical technology learning and reliable software delivery accessible, structured, and useful.</p>
            </article>
            <article className="glass-card">
              <IconBadge icon="verified" />
              <h3>Vision</h3>
              <p>Become a trusted technology growth partner for learners, teams, startups, and modern businesses.</p>
            </article>
          </div>
        </Container>
      </section>

      <section className="section section-band about-values-section">
        <Container maxWidth="xl">
          <SectionHeader eyebrow="Our Values" title="The principles behind our learning and delivery culture." />
          <div className="card-grid four">
            {values.map((value) => (
              <InfoCard key={value.title} item={value} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section about-journey-section">
        <Container maxWidth="xl">
          <SectionHeader eyebrow="Our Journey" title="A steady path from training batches to full technology support." />
          <Timeline items={companyTimeline} />
        </Container>
      </section>

      <section className="section about-choose-section">
        <Container maxWidth="xl">
          <SectionHeader eyebrow="Why Choose Us" title="A professional blend of training depth and delivery discipline." />
          <div className="check-grid">
            {whyChoose.map((item) => (
              <div className="check-item" key={item} data-aos="fade-up">
                <span />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section stats-section section-band impact-stats-section">
        <Container maxWidth="xl">
          <SectionHeader
            eyebrow="Our Impact"
            title="Our Impact in Numbers"
            description="A quick look at our training, placement, and workshop reach."
          />
          <div className="stat-grid">
            {companyStats.map((stat) => (
              <StatCounter key={stat.label} stat={stat} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section about-recognition-section">
        <Container maxWidth="xl">
          <SectionHeader eyebrow="Awards & Recognition" title="Recognized through student outcomes and project delivery." />
          <div className="recognition-grid">
            {['Project-Based Training', 'Live Internship Mentoring', 'Placement Readiness', 'Business Software Delivery'].map(
              (item) => (
                <article key={item} className="recognition-card" data-aos="fade-up">
                  <IconBadge icon="workspace" />
                  <h3>{item}</h3>
                </article>
              ),
            )}
          </div>
        </Container>
      </section>

      <section className="section section-band about-gallery-section">
        <Container maxWidth="xl">
          <SectionHeader eyebrow="Office Gallery" title="A modern workspace for learning, mentoring, and delivery." />
          <div className="gallery-grid" data-aos="fade-up">
            {officeGallery.map((image) => (
              <figure key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="section about-contact-section">
        <Container maxWidth="xl" className="contact-strip glass-card">
          <div>
            <span className="eyebrow">Contact Information</span>
            <h2>
              <a href={contactDetails.mapLink} target="_blank" rel="noreferrer">
                {contactDetails.address}
              </a>
            </h2>
            <p>
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a> |{' '}
              <a href={contactDetails.phoneHref}>{contactDetails.phone}</a>
            </p>
          </div>
          <Button component={RouterLink} to="/contact" className="btn-gradient">
            Contact Tech Nishal
          </Button>
        </Container>
      </section>
      </div>
    </>
  );
}
