import React, { useState, useRef } from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';
import {
  TextField,
  Button,
  MenuItem,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const SUBJECTS = [
  { value: 'general', label: 'Consulta general' },
  { value: 'consulting', label: 'Solicitud de consultoría' },
  { value: 'course', label: 'Inscripción a un curso' },
  { value: 'hiring', label: 'Oportunidad laboral' },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || '';

const initialForm   = { name: '', email: '', subject: 'general', message: '' };
const initialErrors = { name: '', email: '', message: '' };

const ContactForm = () => {
  const [form,     setForm]     = useState(initialForm);
  const [errors,   setErrors]   = useState(initialErrors);
  const [loading,  setLoading]  = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, severity: 'success', message: '' });
  const formRef = useRef(null);

  const validate = () => {
    const next = { name: '', email: '', message: '' };
    let valid = true;
    if (!form.name.trim()) {
      next.name = 'El nombre es obligatorio.'; valid = false;
    }
    if (!form.email.trim()) {
      next.email = 'El correo electrónico es obligatorio.'; valid = false;
    } else if (!EMAIL_REGEX.test(form.email)) {
      next.email = 'Ingresa una dirección de correo válida.'; valid = false;
    }
    if (!form.message.trim()) {
      next.message = 'El mensaje es obligatorio.'; valid = false;
    } else if (form.message.trim().length < 10) {
      next.message = 'El mensaje debe tener al menos 10 caracteres.'; valid = false;
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

    if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
      setLoading(true);
      try {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          { publicKey: EMAILJS_PUBLIC_KEY },
        );
        setSnackbar({ open: true, severity: 'success', message: 'Mensaje enviado. Me pondré en contacto contigo pronto.' });
        setForm(initialForm);
        setErrors(initialErrors);
      } catch (error) {
        console.error(
          `EmailJS no pudo enviar el mensaje. Estado: ${error?.status ?? 'desconocido'}. Detalle: ${error?.text ?? 'sin detalle'}`,
        );
        setSnackbar({ open: true, severity: 'error', message: 'No fue posible enviar el mensaje. Intenta escribirme directamente por correo.' });
      } finally {
        setLoading(false);
      }
    } else {
      const subjectLabel = SUBJECTS.find((s) => s.value === form.subject)?.label || form.subject;
      const mailtoUrl = `mailto:cesar_munozocampo@hotmail.com?subject=${encodeURIComponent(subjectLabel)}&body=${encodeURIComponent(`Nombre: ${form.name}\nCorreo electrónico: ${form.email}\n\n${form.message}`)}`;
      window.location.href = mailtoUrl;
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="contact-form">
      <TextField
        fullWidth
        label="Nombre"
        name="name"
        value={form.name}
        onChange={handleChange}
        error={Boolean(errors.name)}
        helperText={errors.name}
        inputProps={{ maxLength: 100 }}
      />
      <TextField
        fullWidth
        label="Correo electrónico"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        error={Boolean(errors.email)}
        helperText={errors.email}
        inputProps={{ maxLength: 200 }}
      />
      <TextField
        fullWidth
        select
        label="Asunto"
        name="subject"
        value={form.subject}
        onChange={handleChange}
      >
        {SUBJECTS.map((option) => (
          <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
        ))}
      </TextField>
      <TextField
        fullWidth
        multiline
        rows={5}
        label="Mensaje"
        name="message"
        value={form.message}
        onChange={handleChange}
        error={Boolean(errors.message)}
        helperText={errors.message}
        inputProps={{ maxLength: 2000 }}
      />
      <Button
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        disabled={loading}
        endIcon={loading ? <CircularProgress size={18} color="inherit" /> : <SendIcon />}
        className="contact-form-submit"
      >
        {loading ? 'Enviando\u2026' : 'Enviar mensaje'}
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
          className="contact-form-alert"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </form>
  );
};

export default ContactForm;
