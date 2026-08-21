import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { Button, Chip, Container, Stack } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Hero from '../components/Hero';
import IconBadge from '../components/IconBadge';
import SectionHeader from '../components/SectionHeader';
import { courses } from '../services/siteData';

export default function CourseDetails() {
  const { slug } = useParams();
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return (
      <section className="section not-found">
        <Container maxWidth="md">
          <h1>Course not found</h1>
          <p>The course you opened is not available.</p>
          <Button component={RouterLink} to="/courses" className="btn-gradient">
            Back to Courses
          </Button>
        </Container>
      </section>
    );
  }

  return (
    <>
      <Hero
        compact
        eyebrow="Course Details"
        title={course.name}
        tagline={`${course.duration} | ${course.level}`}
        description={course.overview}
        actions={[
          { label: "Let's Connect", to: '/contact' },
          { label: 'All Courses', to: '/courses', variant: 'outlined' },
        ]}
        visual="none"
      />

      <section className="section">
        <Container maxWidth="xl" className="course-detail-grid">
          <aside className="course-summary glass-card" data-aos="fade-right">
            <div className="course-detail-image">
              <img src={course.image} alt={course.imageAlt} />
            </div>
            <IconBadge icon={course.icon} size="lg" />
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <Stack direction="row" gap={1} flexWrap="wrap" className="chip-row">
              {course.skills.map((skill) => (
                <Chip key={skill} label={skill} />
              ))}
            </Stack>
            <Button component={RouterLink} to="/contact" className="btn-gradient">
              Let's Connect
            </Button>
            <Button component={RouterLink} to="/courses" startIcon={<ArrowBackIcon />} className="text-link">
              Back to Courses
            </Button>
          </aside>

          <div className="detail-stack">
            <article className="detail-panel" data-aos="fade-up">
              <SectionHeader align="left" eyebrow="Overview" title="What you will learn." />
              <p>{course.overview}</p>
            </article>

            <article className="detail-panel" data-aos="fade-up">
              <SectionHeader align="left" eyebrow="Syllabus" title="Course modules." />
              <div className="module-list">
                {course.syllabus.map((module, index) => (
                  <span key={module}>
                    {index + 1}. {module}
                  </span>
                ))}
              </div>
            </article>

            <article className="detail-panel" data-aos="fade-up">
              <SectionHeader align="left" eyebrow="Tools Covered" title="Practice with modern tools." />
              <Stack direction="row" gap={1} flexWrap="wrap" className="chip-row">
                {course.tools.map((tool) => (
                  <Chip key={tool} label={tool} />
                ))}
              </Stack>
            </article>

            <article className="detail-panel" data-aos="fade-up">
              <SectionHeader align="left" eyebrow="Projects" title="Build portfolio-ready work." />
              <div className="project-grid">
                {course.projects.map((project) => (
                  <div key={project}>
                    <WorkspacePremiumOutlinedIcon />
                    <span>{project}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="detail-panel two-column" data-aos="fade-up">
              <div>
                <SectionHeader align="left" eyebrow="Certificate" title="Completion certificate." />
                <p>Eligible students receive a course certificate after completing assessments and projects.</p>
              </div>
              <div>
                <SectionHeader align="left" eyebrow="Placement Support" title="Career-ready guidance." />
                <p>Resume review, mock interviews, project explanation practice, and job assistance are available.</p>
              </div>
            </article>

            <article className="detail-panel" data-aos="fade-up">
              <SectionHeader align="left" eyebrow="Instructor Details" title={course.instructor} />
              <p>Mentors focus on practical explanation, code review, project delivery, and interview readiness.</p>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
