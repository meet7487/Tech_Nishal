import { Container } from '@mui/material';
import { useState } from 'react';
import CourseCard from '../components/CourseCard';
import CourseDetailDialog from '../components/CourseDetailDialog';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import { courses } from '../services/siteData';

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <>
      <Hero
        compact
        visual="none"
        eyebrow="Courses"
        title="Practical technology courses for career growth."
        description="Explore job-oriented programs in React.js, Node.js, Python, MERN Stack, Full Stack Development, Generative AI, SQL, and Basic Coding."
        actions={[
          { label: 'Apply Now', to: '/contact' },
          { label: 'Placement Support', to: '/placement-support', variant: 'outlined' },
        ]}
      />

      <section className="section">
        <Container maxWidth="xl">
          <SectionHeader
            eyebrow="All Courses"
            title="Click a course to open its full detail card."
            description="Each course includes an image, overview, syllabus, tools, projects, certificate, placement support, and instructor details."
          />
          <div className="card-grid four">
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} onSelect={setSelectedCourse} />
            ))}
          </div>
        </Container>
      </section>

      <CourseDetailDialog course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </>
  );
}
