import { useCountUp } from '../hooks/useCountUp';

const numberFormatter = new Intl.NumberFormat('en-IN');

export default function StatCounter({ stat }) {
  const { ref, value } = useCountUp(stat.value);

  return (
    <div className="stat-card" ref={ref} data-aos="zoom-in">
      <strong>
        {numberFormatter.format(value)}
        {stat.suffix}
      </strong>
      <span>{stat.label}</span>
    </div>
  );
}
