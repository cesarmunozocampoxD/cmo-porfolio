import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Box,
  TextField,
  Button,
  MenuItem,
  CircularProgress,
  Snackbar,
  Alert,
  Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const SUBJECTS = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'consulting', label: 'Consulting Request' },
  { value: 'course', label: 'Course Enrollment' },
  { value: 'hiring', label: 'Job Opportunity' },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

const initialForm = { name: '', email: '', subject: 'general', message: '' };
const initialErrors = { name: '', email: '', message: '' };

const ContactForm = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, severity: 'success', message: '' });
  const formRef = useRef(null);

  const validate = () => {
    const next = { name: '', email: '', message: '' };
    let valid = true;
    if (!form.name.trim()) {
      next.name = 'Name is required.';
      valid = false;
    }
    if (!form.email.trim()) {
      next.email = 'Email is required.';
      valid = false;
    } else if (!EMAIL_REGEX.test(form.email)) {
      next.email = 'Please enter a valid email address.';
      valid = false;
    }
    if (!form.message.trim()) {
      next.message = 'Message is required.';
      valid = false;
    } else if (form.message.trim().length < 10) {
      next.message = 'Message must be at least 10 characters.';
      valid = false;
    }
    setErrors(next);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // If EmailJS is configured use it, otherwise fall back to mailto
    if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
      setLoading(true);
      try {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY,
        );
        setSnackbar({ open: true, severity: 'success', message: 'Message sent! I\'ll get back to you soon.' });
        setForm(initialForm);
        setErrors(initialErrors);
      } catch {
        setSnackbar({ open: true, severity: 'error', message: 'Failed to send message. Please try emailing me directly.' });
      } finally {
        setLoading(false);
      }
    } else {
      // Fallback: open pre-filled mailto link
      const subjectLabel = SUBJECTS.find((s) => s.value === form.subject)?.label || form.subject;
      const mailtoUrl = `mailto:cesar_munozocampo@hotmail.com?subject=${encodeURIComponent(subjectLabel)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
      window.location.href = mailtoUrl;
    }
  };

  return (
    <Box component="form" ref={formRef} onSubmit={handleSubmit} noValidate>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Fill in the form below and I'll get back to you within 1–2 business days.
      </Typography>

      <TextField
        fullWidth
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        error={Boolean(errors.name)}
        helperText={errors.name}
        sx={{ mb: 2 }}
        inputProps={{ maxLength: 100 }}
      />

      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        error={Boolean(errors.email)}
        helperText={errors.email}
        sx={{ mb: 2 }}
        inputProps={{ maxLength: 200 }}
      />

      <TextField
        fullWidth
        select
        label="Subject"
        name="subject"
        value={form.subject}
        onChange={handleChange}
        sx={{ mb: 2 }}
      >
        {SUBJECTS.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        fullWidth
        multiline
        rows={5}
        label="Message"
        name="message"
        value={form.message}
        onChange={handleChange}
        error={Boolean(errors.message)}
        helperText={errors.message}
        sx={{ mb: 3 }}
        inputProps={{ maxLength: 2000 }}
      />

      <Button
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        disabled={loading}
        endIcon={loading ? <CircularProgress size={18} color="inherit" /> : <SendIcon />}
        sx={{ textTransform: 'none', fontWeight: 700, py: 1.5 }}
      >
        {loading ? 'Sending…' : 'Send Message'}
      </Button>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;
