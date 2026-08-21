import { useState } from 'react';
import { Alert, Button, MenuItem, Snackbar, TextField } from '@mui/material';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  interest: 'Courses',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+\-\s()]{7,18}$/;

export default function ContactForm({ title = 'Start a Conversation' }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [name]: '' }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = 'Name is required';
    if (!emailPattern.test(form.email)) nextErrors.email = 'Enter a valid email';
    if (form.phone.trim() && !phonePattern.test(form.phone.trim())) {
      nextErrors.phone = 'Enter a valid phone number';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) return;

    setSent(true);
    setForm(initialForm);
  };

  return (
    <form className="contact-form glass-card" onSubmit={handleSubmit} noValidate data-aos="fade-up">
      <h3>{title}</h3>
      <div className="form-grid">
        <TextField
          label="Full Name"
          name="name"
          value={form.name}
          onChange={updateField}
          error={Boolean(errors.name)}
          helperText={errors.name}
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          value={form.email}
          onChange={updateField}
          error={Boolean(errors.email)}
          helperText={errors.email}
          fullWidth
        />
        <TextField
          label="Phone"
          name="phone"
          value={form.phone}
          onChange={updateField}
          error={Boolean(errors.phone)}
          helperText={errors.phone}
          fullWidth
        />
        <TextField select label="Interest" name="interest" value={form.interest} onChange={updateField} fullWidth>
          {['Courses', 'Internship', 'Software Project', 'Placement Support', 'General Inquiry'].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <TextField
        label="Message"
        name="message"
        value={form.message}
        onChange={updateField}
        error={Boolean(errors.message)}
        helperText={errors.message}
        multiline
        minRows={4}
        fullWidth
      />
      <Button type="submit" className="btn-gradient">
        Send Message
      </Button>
      <Snackbar open={sent} autoHideDuration={3600} onClose={() => setSent(false)}>
        <Alert severity="success" variant="filled" onClose={() => setSent(false)}>
          Thanks. Tech Nishal will get back to you soon.
        </Alert>
      </Snackbar>
    </form>
  );
}
