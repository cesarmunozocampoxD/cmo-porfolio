import './CareerJourney.css';
import { Container, Typography } from '@mui/material';
import { TrendingFlatRounded } from '@mui/icons-material';
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
  const { lead, story, growth } = profile.careerJourney;

  return (
    <section className="journey-root">
      <Container maxWidth="lg" className="about-section">
        <div className="section-header">
          <Typography variant="h4" component="h2" className="section-title">
            The Story So Far
          </Typography>
        </div>

        <div className="journey-body">
          <Typography variant="h5" component="p" className="journey-lead">
            {withEmphasis(lead, 'journey-lead-accent')}
          </Typography>

          <div className="journey-story">
            {story.map((paragraph, index) => (
              <Typography key={index} variant="body1" className="journey-paragraph">
                {withEmphasis(paragraph, 'journey-strong')}
              </Typography>
            ))}
          </div>
        </div>

        <div className="journey-growth">
          {growth.map((row) => (
            <div key={row.label} className="journey-growth-row">
              <Typography variant="overline" className="journey-growth-label">
                {row.label}
              </Typography>
              <div className="journey-growth-steps">
                {row.steps.map((step, index) => (
                  <span key={step} className="journey-growth-item">
                    <span
                      className={[
                        'journey-growth-step',
                        index === row.steps.length - 1 ? 'journey-growth-step--now' : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      {step}
                    </span>
                    {index < row.steps.length - 1 && (
                      <TrendingFlatRounded className="journey-growth-arrow" aria-hidden />
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CareerJourney;
