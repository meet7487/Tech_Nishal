import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { Button, Chip, Dialog, DialogContent, IconButton, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function CourseDetailDialog({ course, onClose }) {
  const isOpen = Boolean(course);

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="lg" fullWidth className="course-dialog">
      {course ? (
        <DialogContent className="course-dialog-content">
          <IconButton className="course-dialog-close" onClick={onClose} aria-label="Close course details">
            <CloseRoundedIcon />
          </IconButton>

          <div className="course-dialog-grid">
            <div className="course-dialog-media">
              <img src={course.image} alt={course.imageAlt} />
            </div>

            <div className="course-dialog-copy">
              <span className="eyebrow">Course Details</span>
              <h2>{course.name}</h2>
              <p className="course-dialog-lead">{course.description}</p>
              <div className="course-meta">
                <span>{course.duration}</span>
                <span>{course.level}</span>
              </div>
              <Stack direction="row" gap={1} flexWrap="wrap" className="chip-row">
                {course.skills.map((skill) => (
                  <Chip key={skill} label={skill} size="small" />
                ))}
              </Stack>
              {course.longDescription.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="course-dialog-actions">
                <Button component={RouterLink} to="/contact" onClick={onClose} className="btn-gradient">
                  Let's Connect
                </Button>
                <Button
                  component={RouterLink}
                  to={`/courses/${course.slug}`}
                  onClick={onClose}
                  className="text-link"
                  endIcon={<LaunchRoundedIcon />}
                >
                  Full Details Page
                </Button>
              </div>
            </div>
          </div>

          <div className="course-dialog-sections">
            <section>
              <h3>Syllabus</h3>
              <div className="module-list">
                {course.syllabus.map((module, index) => (
                  <span key={module}>
                    {index + 1}. {module}
                  </span>
                ))}
              </div>
            </section>
            <section>
              <h3>Tools Covered</h3>
              <Stack direction="row" gap={1} flexWrap="wrap" className="chip-row">
                {course.tools.map((tool) => (
                  <Chip key={tool} label={tool} />
                ))}
              </Stack>
            </section>
            <section>
              <h3>Projects</h3>
              <div className="project-grid">
                {course.projects.map((project) => (
                  <div key={project}>
                    <WorkspacePremiumOutlinedIcon />
                    <span>{project}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </DialogContent>
      ) : null}
    </Dialog>
  );
}
