export default function LogoStrip({ companies }) {
  return (
    <div className="logo-strip" data-aos="fade-up">
      {companies.map((company) => (
        <span key={company}>{company}</span>
      ))}
    </div>
  );
}
