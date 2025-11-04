import './style.css';
import { animateHero } from './animations/hero';
import { animateDetails, animateInfo, animateRSVP } from './animations/stagger';
import { animateButton } from './animations/button';

// Initialize all animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Start hero animations immediately
  animateHero();

  // Set up scroll-triggered animations
  animateDetails();
  animateInfo();
  animateRSVP();

  // Set up button interactions
  animateButton();
});
