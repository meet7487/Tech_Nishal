import { useState } from 'react';
import { Button, TextField } from '@mui/material';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submit = (event) => {
    event.preventDefault();
    setMessage(email.includes('@') ? 'You are subscribed to Tech Nishal updates.' : 'Enter a valid email address.');
    if (email.includes('@')) setEmail('');
  };

  return (
    <section className="newsletter section-band">
      <div className="container newsletter-inner" data-aos="fade-up">
        <div>
          <span className="eyebrow">Newsletter</span>
          <h2>Get course, internship, and placement updates.</h2>
        </div>
        <form onSubmit={submit}>
          <TextField label="Email address" value={email} onChange={(event) => setEmail(event.target.value)} />
          <Button type="submit" className="btn-gradient">
            Subscribe
          </Button>
        </form>
        {message ? <p className="newsletter-message">{message}</p> : null}
      </div>
    </section>
  );
}
