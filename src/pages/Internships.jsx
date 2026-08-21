import { Button, Chip, Container, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Hero from '../components/Hero';
import InfoCard from '../components/InfoCard';
import SectionHeader from '../components/SectionHeader';
import Timeline from '../components/Timeline';
import { internshipBenefits, internshipProcess, internshipPrograms } from '../services/siteData';

export default function Internships() {
  return (
    <>
      <Hero
        compact
        eyebrow="Professional Internship Program"
        title="Internships built around mentorship and live projects."
        description="Join structured programs in React.js, Node.js, Python, MERN Stack, Full Stack Development, Generative AI, and SQL with weekly assessments and career support."
        actions={[
          { label: 'Apply Internship', to: '/contact' },
          { label: 'Explore Courses', to: '/courses', variant: 'outlined' },
        ]}
        visual="none"
      />

      <section className="section">
        <Container maxWidth="xl">
          <SectionHeader eyebrow="Internship Programs" title="Choose the internship path that matches your goals." />
          <div className="card-grid three">
            {internshipPrograms.map((program) => (
              <InfoCard key={program.title} item={program} cta="Apply Now" to="/contact" />
            ))}
          </div>
        </Container>
      </section>

      <section className="section section-band">
        <Container maxWidth="xl" className="split-grid">
          <div data-aos="fade-right">
            <span className="eyebrow">Benefits</span>
            <h2>Everything a serious internship should include.</h2>
            <p>
              The program combines practical exposure, mentor support, assessments, portfolio building, and placement
              readiness.
            </p>
            <Button component={RouterLink} to="/contact" className="btn-gradient">
              Apply Internship
            </Button>
          </div>
          <Stack direction="row" gap={1} flexWrap="wrap" className="benefit-cloud" data-aos="fade-left">
            {internshipBenefits.map((benefit) => (
              <Chip key={benefit} label={benefit} />
            ))}
          </Stack>
        </Container>
      </section>

      <section className="section">
        <Container maxWidth="xl">
          <SectionHeader
            eyebrow="Internship Process"
            title="A simple process from registration to placement support."
          />
          <Timeline items={internshipProcess} />
        </Container>
      </section>
    </>
  );
}
