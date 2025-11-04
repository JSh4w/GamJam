import anime from 'animejs';

export function animateHero() {
  // Race track animation
  const timeline = anime.timeline();

  // 1. Draw the race track outline
  timeline.add({
    targets: '.track-outline',
    strokeDashoffset: [2000, 0],
    easing: 'easeInOutQuad',
    duration: 2000,
    delay: 300
  })
  // 2. Fade in the racing text
  .add({
    targets: '.race-text',
    opacity: [0, 1],
    easing: 'easeInQuad',
    duration: 500
  }, '-=500')
  // 3. Animate text moving around the track (startOffset)
  .add({
    targets: '.text-path',
    startOffset: ['0%', '100%'],
    easing: 'linear',
    duration: 6000,
    loop: true
  }, '-=200')
  // 4. After one loop, fade in the static center text
  .add({
    targets: '.main-title-static',
    opacity: [0, 1],
    scale: [0.8, 1],
    easing: 'easeOutExpo',
    duration: 1000
  }, 6000);

  // Animate shapes - floating entrance
  anime({
    targets: '.shape',
    opacity: [0, 0.6],
    scale: [0, 1],
    rotate: (_el: Element, i: number) => [0, 45 * (i + 1)],
    easing: 'easeOutElastic(1, .8)',
    duration: 2000,
    delay: anime.stagger(200, { start: 500 })
  });

  // Continuous floating animation for shapes
  anime({
    targets: '.shape-1',
    translateY: ['-10px', '10px'],
    rotate: ['0deg', '15deg'],
    easing: 'easeInOutSine',
    duration: 3000,
    loop: true,
    direction: 'alternate'
  });

  anime({
    targets: '.shape-2',
    translateX: ['-15px', '15px'],
    rotate: ['0deg', '-20deg'],
    easing: 'easeInOutSine',
    duration: 4000,
    loop: true,
    direction: 'alternate'
  });

  anime({
    targets: '.shape-3',
    translateY: ['10px', '-10px'],
    translateX: ['-5px', '5px'],
    easing: 'easeInOutSine',
    duration: 3500,
    loop: true,
    direction: 'alternate'
  });

  anime({
    targets: '.shape-4',
    translateX: ['10px', '-10px'],
    rotate: ['0deg', '25deg'],
    easing: 'easeInOutSine',
    duration: 4500,
    loop: true,
    direction: 'alternate'
  });
}
