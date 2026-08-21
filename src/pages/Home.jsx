import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { Button, Container } from '@mui/material';
import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import Hero from '../components/Hero';
import InfoCard from '../components/InfoCard';
import SectionHeader from '../components/SectionHeader';
import StatCounter from '../components/StatCounter';
import {
  companyStats,
  courses,
  homeServices,
} from '../services/siteData';

const featuredCourseSlugs = ['react-js', 'python', 'generative-ai', 'mern-stack'];
const courseFilters = [
  { label: 'Popular Courses', match: (course) => featuredCourseSlugs.includes(course.slug) },
  { label: 'Coding', match: (course) => ['python', 'basic-coding'].includes(course.slug) },
  { label: 'Frontend', match: (course) => course.slug === 'react-js' },
  { label: 'Backend', match: (course) => ['node-js', 'python'].includes(course.slug) },
  { label: 'Full Stack', match: (course) => ['mern-stack', 'full-stack-development'].includes(course.slug) },
  { label: 'Database', match: (course) => course.slug === 'sql' },
  { label: 'AI/ML', match: (course) => course.slug === 'generative-ai' },
];
export default function Home() {
  const [activeFilter, setActiveFilter] = useState(courseFilters[0].label);
  const activeCourseFilter = courseFilters.find((filter) => filter.label === activeFilter) || courseFilters[0];
  const visibleCourses = useMemo(
    () => courses.filter((course) => activeCourseFilter.match(course)).slice(0, 4),
    [activeCourseFilter],
  );

  return (
    <>
      <Hero
        eyebrow="Web, App, AI & Career Solutions"
        title="Leading IT training and software development company in Ahmedabad."
        tagline="Build skills. Launch products. Grow with practical technology."
        description="Tech Nishal helps students grow through job-ready IT training, internships, and placement support while helping businesses build websites, web apps, AI tools, ERP, CRM, and custom software."
        actions={[
          { label: 'Explore Courses', to: '/courses' },
          { label: 'Build Software', to: '/software-development', variant: 'outlined' },
        ]}
      />

      <section className="section trust-intro">
        <Container maxWidth="xl">
          <div className="intro-grid">
            <SectionHeader
              align="left"
              eyebrow="Trusted Technology Partner"
              title="Practical training and custom software delivery under one roof."
              description="From career-focused courses to reliable business applications, Tech Nishal keeps learning, delivery, and support connected with clear communication and modern technology."
            />
            <div className="intro-proof-panel">
              <strong>Built for students, startups, and growing teams</strong>
              <p>
                Get guidance for courses, internships, placements, websites, mobile apps, AI-based tools, and long-term product support.
              </p>
              <div className="intro-proof-list">
                <span>Live project culture</span>
                <span>Mentor-led delivery</span>
                <span>Business-ready software</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section service-ribbon">
        <Container maxWidth="xl">
          <SectionHeader
            eyebrow="What We Do"
            title="Training, placements, internships, and software services."
            description="A compact set of services for learners and businesses who want useful outcomes, not only presentations."
          />
          <div className="card-grid four">
            {homeServices.map((service) => (
              <InfoCard
                key={service.title}
                item={service}
                cta={service.title === 'Software Development' ? 'View Services' : 'Learn More'}
                to={
                  service.title === 'Software Development'
                    ? '/software-development'
                    : service.title === 'Internships'
                      ? '/internships'
                      : service.title === 'Placement Support'
                        ? '/placement-support'
                        : '/courses'
                }
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="section section-band course-showcase">
        <Container maxWidth="xl">
          <SectionHeader
            eyebrow="Explore Courses"
            title="Our most in-demand courses"
            description="Choose a practical career track and build work you can proudly show in interviews."
          />
          <div className="course-filter-row" aria-label="Course categories">
            {courseFilters.map((filter) => (
              <button
                aria-pressed={activeFilter === filter.label}
                className={activeFilter === filter.label ? 'active' : ''}
                key={filter.label}
                onClick={() => setActiveFilter(filter.label)}
                type="button"
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="card-grid four">
            {visibleCourses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
          <div className="section-actions">
            <Button component={RouterLink} to="/courses" className="btn-gradient" endIcon={<ArrowForwardRoundedIcon />}>
              View All Courses
            </Button>
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
            {companyStats.map((stat) => (
              <StatCounter key={stat.label} stat={stat} />
            ))}
          </div>
        </Container>
      </section>

    </>
  );
}
