import { useEffect, useRef, useState } from 'react';
import './CareerJourney.css';
import { Container, Typography } from '@mui/material';
import profile from '../../../shared/constants/profile';

const withEmphasis = (text, className) =>
  text.split('**').map((fragment, index) =>
    index % 2 === 1 ? (
      <strong key={index} className={className}>
        {fragment}
      </strong>
    ) : (
      fragment
    )
  );

const CareerJourney = () => {
  const { thesis, axis, spans } = profile.careerJourney;
  const traceRef = useRef(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const node = traceRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setEntered(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const at = (year) => ((year - axis.from) / (axis.to - axis.from)) * 100;

  const barStyle = (span, index) => {
    if (span.state === 'next') {
      return { '--bar-left': '88%', '--bar-width': '12%', '--bar-index': index };
    }
    const left = at(span.from);
    return {
      '--bar-left': `${left}%`,
      '--bar-width': `${at(span.to ?? axis.to) - left}%`,
      '--bar-index': index,
    };
  };

  return (
    <section className="story-root">
      <Container maxWidth="lg" className="about-section">
        <div className="section-header">
          <Typography variant="h4" component="h2" className="section-title">
            The Story So Far
          </Typography>
        </div>

        <p className="story-thesis">{withEmphasis(thesis, 'story-thesis-accent')}</p>

        <figure
          ref={traceRef}
          className={['story-trace', entered ? 'story-trace--entered' : ''].filter(Boolean).join(' ')}
        >
          <figcaption className="story-trace-caption">scope over time</figcaption>

          <div className="story-axis" aria-hidden="true">
            <span className="story-axis-track">
              {axis.ticks.map((tick) => (
                <span key={tick.label} className="story-tick" style={{ left: `${at(tick.at)}%` }}>
                  {tick.label}
                </span>
              ))}
              <span className="story-tick story-tick--now">now</span>
            </span>
          </div>

          <ol className="story-spans">
            {spans.map((span, index) => (
              <li key={span.scope} className={`story-span story-span--${span.state}`}>
                <span className="story-scope">{span.scope}</span>
                <span className="story-track" aria-hidden="true" style={barStyle(span, index)}>
                  <span className={`story-bar story-bar--${span.tone}`} />
                </span>
                <span className="story-duration">{span.duration}</span>
                <p className="story-detail">
                  {span.period && <span className="story-period">{span.period}</span>}
                  {withEmphasis(span.detail, 'story-detail-accent')}
                  {span.org && <span className="story-org">{span.org}</span>}
                </p>
              </li>
            ))}
          </ol>
        </figure>
      </Container>
    </section>
  );
};

export default CareerJourney;
