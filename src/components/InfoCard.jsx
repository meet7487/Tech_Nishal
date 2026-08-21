import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import IconBadge from './IconBadge';

export default function InfoCard({ item, cta, to, compact = false, children, active = false, onClick }) {
  const isInteractive = Boolean(onClick);

  const handleKeyDown = (event) => {
    if (!isInteractive || (event.key !== 'Enter' && event.key !== ' ')) {
      return;
    }

    event.preventDefault();
    onClick();
  };

  return (
    <motion.article
      className={`info-card ${compact ? 'info-card-compact' : ''} ${active ? 'info-card-active' : ''} ${
        isInteractive ? 'info-card-clickable' : ''
      }`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      aria-pressed={isInteractive ? active : undefined}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      data-aos="fade-up"
    >
      <IconBadge icon={item.icon} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      {children}
      {cta && to ? (
        <Button component={RouterLink} to={to} size="small" className="text-link">
          {cta}
        </Button>
      ) : cta && onClick ? (
        <Button
          size="small"
          className="text-link"
          onClick={(event) => {
            event.stopPropagation();
            onClick();
          }}
        >
          {cta}
        </Button>
      ) : null}
    </motion.article>
  );
}
