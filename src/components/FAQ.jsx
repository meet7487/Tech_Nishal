import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

export default function FAQ({ items }) {
  return (
    <div className="faq-list" data-aos="fade-up">
      {items.map((item, index) => (
        <Accordion key={item.question} className="faq-item" defaultExpanded={index === 0}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h3>{item.question}</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>{item.answer}</p>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
