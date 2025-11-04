import anime from 'animejs';

export function animateDetails() {
  // Create intersection observer for scroll-triggered animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Grid stagger reveal - anime.js signature effect
          anime({
            targets: '.detail-item',
            opacity: [0, 1],
            scale: [0.8, 1],
            translateY: [50, 0],
            easing: 'easeOutExpo',
            duration: 1200,
            delay: anime.stagger(200, { from: 'center' })
          });

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3
    }
  );

  const detailsSection = document.querySelector('.details-section');
  if (detailsSection) {
    observer.observe(detailsSection);
  }
}

export function animateInfo() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate heading
          anime({
            targets: '.info-section h2',
            opacity: [0, 1],
            translateY: [50, 0],
            easing: 'easeOutExpo',
            duration: 1000
          });

          // Animate text
          anime({
            targets: '.info-text',
            opacity: [0, 1],
            translateY: [50, 0],
            easing: 'easeOutExpo',
            duration: 1000,
            delay: 200
          });

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3
    }
  );

  const infoSection = document.querySelector('.info-section');
  if (infoSection) {
    observer.observe(infoSection);
  }
}

export function animateRSVP() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate button
          anime({
            targets: '.rsvp-button',
            opacity: [0, 1],
            scale: [0.8, 1],
            easing: 'easeOutElastic(1, .6)',
            duration: 1500
          });

          // Animate note
          anime({
            targets: '.rsvp-note',
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1000,
            delay: 500
          });

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3
    }
  );

  const rsvpSection = document.querySelector('.rsvp-section');
  if (rsvpSection) {
    observer.observe(rsvpSection);
  }
}
