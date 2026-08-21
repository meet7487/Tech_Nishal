import { Container } from '@mui/material';
import Hero from '../components/Hero';
import InfoCard from '../components/InfoCard';
import SectionHeader from '../components/SectionHeader';
import StatCounter from '../components/StatCounter';
import Timeline from '../components/Timeline';
import {
  placementProcess,
  placementServices,
  placementStats,
} from '../services/siteData';

export default function PlacementSupport() {
  return (
    <>
      <Hero
        compact
        eyebrow="Placement Support"
        title="Prepare for interviews with structure and confidence."
        description="Tech Nishal supports students through resume building, LinkedIn optimization, aptitude training, technical preparation, HR preparation, mock interviews, communication skills, company referrals, and job assistance."
        actions={[
          { label: 'Apply for Placement Support', to: '/contact' },
          { label: 'Explore Courses', to: '/courses', variant: 'outlined' },
        ]}
        visual="none"
      />

      <section className="section">
        <Container maxWidth="xl">
          <SectionHeader eyebrow="Placement Services" title="End-to-end support for job readiness." />
          <div className="card-grid three">
            {placementServices.map((service) => (
              <InfoCard key={service.title} item={service} />
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
            {placementStats.map((stat) => (
              <StatCounter key={stat.label} stat={stat} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container maxWidth="xl">
          <SectionHeader eyebrow="Placement Process Timeline" title="A guided path from profile audit to offer support." />
          <Timeline items={placementProcess} />
        </Container>
      </section>

    </>
  );
}
