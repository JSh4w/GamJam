import anime from 'animejs';

export function animateButton() {
  const button = document.querySelector('.rsvp-button') as HTMLElement;

  if (!button) return;

  // Hover animation
  button.addEventListener('mouseenter', () => {
    anime({
      targets: button,
      scale: 1.05,
      rotate: '2deg',
      easing: 'easeOutElastic(1, .6)',
      duration: 600
    });
  });

  button.addEventListener('mouseleave', () => {
    anime({
      targets: button,
      scale: 1,
      rotate: '0deg',
      easing: 'easeOutElastic(1, .6)',
      duration: 600
    });
  });

  // Continuous subtle pulse
  anime({
    targets: button,
    boxShadow: [
      '0 0 0 0 rgba(218, 213, 208, 0)',
      '0 0 0 10px rgba(218, 213, 208, 0)',
      '0 0 0 20px rgba(218, 213, 208, 0)'
    ],
    easing: 'easeOutExpo',
    duration: 2000,
    loop: true
  });
}
