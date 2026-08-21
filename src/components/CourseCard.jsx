import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { Button, Chip, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import IconBadge from './IconBadge';

export default function CourseCard({ course, onSelect }) {
  const isInteractive = Boolean(onSelect);

  const handleOpen = () => {
    if (onSelect) {
      onSelect(course);
    }
  };

  const handleKeyDown = (event) => {
    if (!isInteractive || (event.key !== 'Enter' && event.key !== ' ')) {
      return;
    }

    event.preventDefault();
    handleOpen();
  };

  return (
    <motion.article
      className={`course-card ${isInteractive ? 'course-card-clickable' : ''}`}
      onClick={isInteractive ? handleOpen : undefined}
      onKeyDown={handleKeyDown}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      aria-label={isInteractive ? `Open ${course.name} course details` : undefined}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      data-aos="fade-up"
    >
      <div className="course-card-media">
        <img src={course.image} alt={course.imageAlt} />
      </div>
      <div className="course-card-head">
        <span>{course.duration}</span>
        <IconBadge icon={course.icon} size="lg" />
      </div>
      <div className="course-card-body">
        <h3>{course.name}</h3>
        <p>{course.description}</p>
        <div className="course-meta">
          <span>{course.duration}</span>
          <span>{course.level}</span>
        </div>
        <Stack direction="row" gap={1} flexWrap="wrap" className="chip-row">
          {course.skills.slice(0, 4).map((skill) => (
            <Chip key={skill} label={skill} size="small" />
          ))}
        </Stack>
        <Button
          component={isInteractive ? 'button' : RouterLink}
          to={isInteractive ? undefined : `/courses/${course.slug}`}
          className="course-btn"
          endIcon={<ArrowForwardRoundedIcon />}
          onClick={(event) => {
            if (!isInteractive) {
              return;
            }

            event.stopPropagation();
            handleOpen();
          }}
        >
          View Details
        </Button>
      </div>
    </motion.article>
  );
}
