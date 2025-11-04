import anime from 'animejs';

export function animateHero() {
  // Animate title letters with stagger
  anime.timeline()
    .add({
      targets: '.letter',
      translateY: [100, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1400,
      delay: (_el: Element, i: number) => 100 + 50 * i
    })
    .add({
      targets: '.subtitle',
      opacity: [0, 1],
      translateY: [30, 0],
      easing: 'easeOutExpo',
      duration: 1000
    }, '-=800');

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
