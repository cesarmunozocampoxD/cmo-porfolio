import React from 'react';
import './AboutMe.css';
import { Avatar, Button, Container, Stack, Typography } from '@mui/material';
import { Email, GitHub, LinkedIn, PictureAsPdf } from '@mui/icons-material';
import profile from '../../../shared/constants/profile';

const AboutMe = () => (
  <main className="biography-page">
    <header className="biography-cover">
      <Container maxWidth="lg" className="biography-cover-inner">
        <div className="biography-cover-copy">
          <Typography component="p" variant="overline" className="biography-eyebrow">
            Una autobiografía profesional
          </Typography>
          <Typography component="h1" variant="h1" className="biography-name">
            {profile.personalInfo.name}
          </Typography>
          <Typography component="p" variant="h5" className="biography-role">
            {profile.personalInfo.title}
          </Typography>
          <Typography component="p" variant="body1" className="biography-cover-intro">
            Una historia de curiosidad, aprendizaje constante y una carrera que evolucionó
            desde la creación de sitios web hasta el diseño de servicios para la nube.
          </Typography>
        </div>

        <div className="biography-portrait-frame">
          <Avatar
            alt={profile.personalInfo.name}
            src={profile.personalInfo.photo}
            className="biography-portrait"
          />
          <Typography component="p" variant="caption" className="biography-portrait-caption">
            Desarrollador, colaborador y aprendiz permanente
          </Typography>
        </div>
      </Container>
    </header>

    <Container maxWidth="md" className="biography-reading-column">
      <article className="biography-story">
        <Typography component="p" variant="overline" className="biography-story-label">
          Mi historia
        </Typography>
        <Typography component="h2" variant="h3" className="biography-story-title">
          Cómo aprendí a crear soluciones
        </Typography>

        <div className="biography-prose">
          {profile.personalInfo.biography.map((paragraph, index) => (
            <Typography
              component="p"
              variant="body1"
              className={index === 0 ? 'biography-paragraph biography-paragraph--lead' : 'biography-paragraph'}
              key={paragraph}
            >
              {paragraph}
            </Typography>
          ))}
        </div>

        <blockquote className="biography-quote">
          <Typography component="p" variant="h5">
            “Java ha sido uno de los pilares más sólidos de mi carrera. Python y la
            infraestructura como código están ampliando mi manera de diseñar servicios y pensar
            en la nube.”
          </Typography>
        </blockquote>

        <Typography component="p" variant="body1" className="biography-closing">
          En el siguiente capítulo de mi historia quiero continuar creciendo hacia la arquitectura
          de software mientras comparto lo que he aprendido mediante cursos y enseñanza. También
          busco ofrecer consultoría técnica y desarrollar proyectos independientes en los que pueda
          reunir mi experiencia, perspectiva de nube y enfoque colaborativo para crear soluciones
          útiles con un propósito claro.
        </Typography>

        <footer className="biography-footer">
          <Typography component="h2" variant="h6" className="biography-footer-title">
            Sigamos conversando
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={1.5} className="biography-links">
            <Button variant="contained" startIcon={<Email />} href={`mailto:${profile.contact.email}`}>
              Escríbeme
            </Button>
            <Button
              variant="outlined"
              startIcon={<LinkedIn />}
              onClick={() => window.open(profile.contact.social.linkedin, '_blank')}
            >
              LinkedIn
            </Button>
            <Button
              variant="outlined"
              startIcon={<GitHub />}
              onClick={() => window.open(profile.contact.social.github, '_blank')}
            >
              GitHub
            </Button>
            <Button
              variant="text"
              startIcon={<PictureAsPdf />}
              onClick={() => window.open(profile.contact.cvPdf, '_blank')}
            >
              Ver mi CV
            </Button>
          </Stack>
        </footer>
      </article>
    </Container>
  </main>
);

export default AboutMe;
