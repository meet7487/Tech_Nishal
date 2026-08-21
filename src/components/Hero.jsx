import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { Button, Container, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/TN_Logo.png';

const heroHighlights = ['Career-focused training', 'Placement assistance', 'Software solutions'];

export default function Hero({
  eyebrow,
  title,
  tagline,
  description,
  actions = [],
  compact = false,
  visual = 'none',
}) {
  const hasVisual = visual !== 'none';

  return (
    <section className={`hero ${compact ? 'hero-compact' : ''}`}>
      <div className="hero-pattern" aria-hidden="true" />
      <Container maxWidth="xl" className={`hero-container ${!hasVisual ? 'hero-container-no-visual' : ''}`}>
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {eyebrow ? <span className="eyebrow hero-eyebrow">{eyebrow}</span> : null}
          <h1>{title}</h1>
          {tagline ? <p className="hero-tagline">{tagline}</p> : null}
          {description ? <p className="hero-description">{description}</p> : null}
          {actions.length ? (
            <Stack direction="row" gap={1.5} flexWrap="wrap" className="hero-actions">
              {actions.map((action) => (
                <Button
                  key={action.label}
                  component={RouterLink}
                  to={action.to}
                  variant={action.variant || 'contained'}
                  color={action.color || 'primary'}
                  className={action.variant === 'outlined' ? 'btn-outline' : 'btn-gradient'}
                  endIcon={!action.variant ? <ArrowForwardRoundedIcon /> : null}
                >
                  {action.label}
                </Button>
              ))}
            </Stack>
          ) : null}
          {!compact ? (
            <div className="hero-proof-row" aria-label="Training benefits">
              {heroHighlights.map((item) => (
                <span key={item}>
                  <CheckCircleOutlineRoundedIcon />
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </motion.div>

        {hasVisual ? (
          <motion.div
            className={`hero-visual ${visual === 'logo' ? 'hero-visual-logo' : ''}`}
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: 'easeOut' }}
          >
            <div className="hero-photo-card">
              {visual === 'logo' ? (
                <img src={logo} alt="Tech Nishal brand mark" />
              ) : (
                <div className="hero-product-preview" aria-hidden="true">
                  <div className="hero-preview-bar"><span /><span /><span /></div>
                  <div className="hero-preview-main">
                    <span className="preview-label">DIGITAL DELIVERY</span>
                    <strong>Build. Scale.<br />Evolve.</strong>
                    <div className="preview-bars"><i /><i /><i /></div>
                  </div>
                  <div className="hero-preview-stat"><span>Delivery readiness</span><strong>98%</strong></div>
                </div>
              )}
            </div>
            <div className="hero-floating hero-floating-top">
              <WorkspacePremiumOutlinedIcon />
              <div>
                <strong>ISO</strong>
                <span>Certified training</span>
              </div>
            </div>
            <div className="hero-floating hero-floating-bottom">
              <StarRoundedIcon />
              <div>
                <strong>4.8</strong>
                <span>Student rating</span>
              </div>
            </div>
            <div className="hero-floating hero-floating-side">
              <strong>100%</strong>
              <span>Placement support</span>
            </div>
          </motion.div>
        ) : null}
      </Container>
    </section>
  );
}
