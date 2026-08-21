import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/TN_Logo.png';
import { contactDetails } from '../services/siteData';

const footerGroups = [
  {
    title: 'Quick Links',
    links: [
      ['Home', '/'],
      ['Courses', '/courses'],
      ['Internships', '/internships'],
      ['Placement Support', '/placement-support'],
    ],
  },
  {
    title: 'Services',
    links: [
      ['Software Development', '/software-development'],
      ['Web Development', '/software-development?service=website-development#service-details'],
      ['Mobile App Development', '/software-development?service=mobile-app-development#service-details'],
      ['AI-Based Applications', '/software-development?service=ai-based-applications#service-details'],
    ],
  },
  {
    title: 'Courses',
    links: [
      ['React.js', '/courses/react-js'],
      ['MERN Stack', '/courses/mern-stack'],
      ['Python', '/courses/python'],
      ['Generative AI', '/courses/generative-ai'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About Us', '/about'],
      ['Contact', '/contact'],
      ['Student Stories', '/placement-support'],
      ['Project Inquiry', '/contact'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <Container maxWidth="xl">
        <div className="footer-grid">
          <div className="footer-brand">
            <RouterLink to="/" className="brand">
              <img src={logo} alt="Tech Nishal logo" />
              <span>Tech Nishal</span>
            </RouterLink>
            <p>
              Training, placement, and software development company for practical learning, internships, digital products, and career support.
            </p>
            <div className="footer-actions" aria-label="Contact actions">
              <a href={contactDetails.phoneHref}>Call</a>
              <a href={`mailto:${contactDetails.email}`}>Email</a>
              <a href={contactDetails.mapLink} target="_blank" rel="noreferrer">
                Map
              </a>
            </div>
          </div>

          {footerGroups.map((group) => (
            <div className="footer-group" key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map(([label, path]) => (
                <RouterLink key={label} to={path}>
                  {label}
                </RouterLink>
              ))}
            </div>
          ))}

          <div className="footer-contact">
            <h3>Contact Information</h3>
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
            <div className="footer-map">
              <iframe
                title="Tech Nishal map"
                loading="lazy"
                src={contactDetails.mapEmbed}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Copyright 2026 Tech Nishal. All rights reserved.</span>
        </div>
      </Container>
    </footer>
  );
}
