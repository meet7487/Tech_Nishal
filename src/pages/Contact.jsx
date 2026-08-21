import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { Container } from '@mui/material';
import FAQ from '../components/FAQ';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import { contactDetails, faqs } from '../services/siteData';

export default function Contact() {
  return (
    <>
      <Hero
        compact
        eyebrow="Contact"
        title="Let us plan your next course, internship, placement path, or software project."
        description="The Tech Nishal team will help you choose the right next step."
        actions={[
          { label: 'Explore Courses', to: '/courses' },
          { label: 'Software Services', to: '/software-development', variant: 'outlined' },
        ]}
        visual="none"
      />

      <section className="section contact-page-main">
        <Container maxWidth="xl" className="contact-grid contact-grid-single">
          <div className="contact-info-panel" data-aos="fade-right">
            <span className="eyebrow">Contact Information</span>
            <h2>Connect with Tech Nishal.</h2>
            <div className="contact-info-list">
              <p>
                <EmailOutlinedIcon /> <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
              </p>
              <p>
                <PhoneOutlinedIcon /> <a href={contactDetails.phoneHref}>{contactDetails.phone}</a>
              </p>
              <p>
                <LocationOnOutlinedIcon />
                <a href={contactDetails.mapLink} target="_blank" rel="noreferrer">
                  {contactDetails.address}
                </a>
              </p>
            </div>
            <div className="map-panel">
              <iframe
                title="Tech Nishal location map"
                loading="lazy"
                src={contactDetails.mapEmbed}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section section-band">
        <Container maxWidth="lg">
          <SectionHeader eyebrow="FAQ" title="Questions before you start?" />
          <FAQ items={faqs} />
        </Container>
      </section>
    </>
  );
}
