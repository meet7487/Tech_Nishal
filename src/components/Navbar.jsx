import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { AppBar, Button, Container, IconButton, Toolbar } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import logo from '../assets/TN_Logo.png';
import { contactDetails } from '../services/siteData';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Training Courses', path: '/courses' },
  { label: 'Internships', path: '/internships' },
  { label: 'Placement', path: '/placement-support' },
  { label: 'Software Development', path: '/software-development' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (path) => (path === '/' ? pathname === '/' : pathname.startsWith(path));

  return (
    <AppBar position="sticky" className="navbar" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className="navbar-toolbar">
          <RouterLink to="/" className="brand" onClick={() => setOpen(false)}>
            <img src={logo} alt="Tech Nishal logo" />
            <span>Tech Nishal</span>
          </RouterLink>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={RouterLink}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="nav-actions">
            <Button
              component="a"
              href={contactDetails.phoneHref}
              className="nav-phone"
              startIcon={<PhoneOutlinedIcon />}
            >
              {contactDetails.phone}
            </Button>
            <Button component={RouterLink} to="/contact" className="btn-gradient nav-cta">
              Let's Connect
            </Button>
            <IconButton
              className="menu-button"
              onClick={() => setOpen((current) => !current)}
              aria-label={open ? 'Close navigation' : 'Open navigation'}
              aria-expanded={open}
              aria-controls="mobile-navbar"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </div>
        </Toolbar>
      </Container>

      {open ? (
        <div className="mobile-nav-shell" id="mobile-navbar">
          <Container maxWidth="xl">
            <nav className="mobile-nav-panel" aria-label="Mobile navigation">
              <a className="mobile-nav-contact" href={contactDetails.phoneHref}>
                <PhoneOutlinedIcon />
                {contactDetails.phone}
              </a>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  className={`mobile-nav-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                component={RouterLink}
                to="/contact"
                className="btn-gradient mobile-nav-cta"
                onClick={() => setOpen(false)}
              >
                Start Inquiry
              </Button>
            </nav>
          </Container>
        </div>
      ) : null}
    </AppBar>
  );
}
