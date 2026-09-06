import React, { useState } from 'react';
import './CareerJourney.css';
import {
  Button,
  Card,
  Chip,
  Container,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import {
  ArchitectureOutlined,
  ArrowBackRounded,
  ArrowForwardRounded,
  ChevronRightRounded,
  CloudQueueOutlined,
  HubOutlined,
  SchoolOutlined,
  TerminalOutlined,
  WorkOutline,
} from '@mui/icons-material';
import profile from '../../../shared/constants/profile';

const CHAPTER_ICONS = {
  foundations: SchoolOutlined,
  fullstack: TerminalOutlined,
  backend: CloudQueueOutlined,
  scale: HubOutlined,
  next: ArchitectureOutlined,
};

const CareerJourney = () => {
  const { headline, summary, chapters } = profile.careerJourney;
  const [active, setActive] = useState(0);

  const chapter = chapters[active];
  const previous = chapters[active - 1];
  const next = chapters[active + 1];
  const subtitle = [chapter.role, chapter.organization].filter(Boolean).join(' \u00B7 ');

  return (
    <section className="journey-root">
      <Container maxWidth="lg" className="about-section">
        <div className="section-header">
          <Typography variant="h4" component="h2" className="section-title">
            Career Journey
          </Typography>
          <Typography variant="h6" component="p" className="journey-headline">
            {headline}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="journey-summary">
            {summary}
          </Typography>
        </div>

        <Tabs
          value={active}
          onChange={(event, value) => setActive(value)}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          selectionFollowsFocus
          aria-label="Career chapters"
          className="journey-rail"
        >
          {chapters.map((item, index) => {
            const Icon = CHAPTER_ICONS[item.id] || WorkOutline;
            return (
              <Tab
                key={item.id}
                id={`journey-tab-${item.id}`}
                aria-controls={`journey-panel-${item.id}`}
                disableRipple
                className={[
                  'journey-stop',
                  index === 0 ? 'journey-stop--first' : '',
                  index === chapters.length - 1 ? 'journey-stop--last' : '',
                  index <= active ? 'journey-stop--reached' : '',
                  index < active ? 'journey-stop--passed' : '',
                  item.future ? 'journey-stop--future' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                label={
                  <>
                    <span className="journey-stop-years">{item.years}</span>
                    <span className="journey-stop-track">
                      <span className="journey-stop-dot">
                        <Icon fontSize="small" />
                      </span>
                    </span>
                    <span className="journey-stop-title">{item.title}</span>
                  </>
                }
              />
            );
          })}
        </Tabs>

        <Card
          key={chapter.id}
          elevation={0}
          role="tabpanel"
          tabIndex={0}
          id={`journey-panel-${chapter.id}`}
          aria-labelledby={`journey-tab-${chapter.id}`}
          className={[
            'journey-panel',
            'animate-fadeIn',
            chapter.future ? 'journey-panel--future' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="journey-panel-top"
          >
            <span className="journey-panel-step">
              Chapter {active + 1} of {chapters.length}
            </span>
            <span className="journey-panel-years">{chapter.years}</span>
          </Stack>

          <Typography variant="h5" component="h3" className="journey-panel-title">
            {chapter.shift}
          </Typography>

          {subtitle && (
            <Typography variant="body2" color="text.secondary" className="journey-panel-meta">
              {subtitle}
            </Typography>
          )}

          <div className="journey-panel-body">
            <Typography variant="body1" color="text.secondary" className="journey-narrative">
              {chapter.narrative}
            </Typography>

            <ul className="journey-highlights">
              {chapter.highlights.map((highlight) => (
                <li key={highlight} className="journey-highlight">
                  <ChevronRightRounded className="journey-highlight-icon" />
                  <Typography variant="body2" color="text.secondary" component="span">
                    {highlight}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>

          <div className="journey-stack">
            <Typography variant="overline" className="journey-stack-label">
              {chapter.future ? 'Going deeper on' : 'Working with'}
            </Typography>
            <div className="journey-stack-chips">
              {chapter.stack.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  variant="outlined"
                  className="journey-chip"
                />
              ))}
            </div>
          </div>

          <div className="journey-panel-nav">
            {previous ? (
              <Button
                size="small"
                startIcon={<ArrowBackRounded />}
                className="journey-nav-button"
                onClick={() => setActive(active - 1)}
              >
                {previous.title}
              </Button>
            ) : (
              <span />
            )}
            {next && (
              <Button
                size="small"
                endIcon={<ArrowForwardRounded />}
                className="journey-nav-button"
                onClick={() => setActive(active + 1)}
              >
                {next.title}
              </Button>
            )}
          </div>
        </Card>
      </Container>
    </section>
  );
};

export default CareerJourney;
