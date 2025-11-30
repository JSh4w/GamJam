import './style.css'
import { utils, animate as animeAnimate, splitText } from 'animejs'


// Rain background setup
const canvas = document.getElementById('rain');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log('Canvas size:', canvas.width, canvas.height);
// Characters for the rain
const chars = 'ABCDEF0123456789XYZ^-_=[]|:<>?`';
const fontSize = 20;
const columns = Math.floor(canvas.width / fontSize);

console.log('Columns:', columns);


// Title animation setup
const titleElement = document.getElementById('title');
const randomChar = () => chars.charAt(Math.floor(Math.random() * chars.length));

document.fonts.ready.then(() => {
  const originalText = titleElement.textContent;
  const { chars: charElements } = splitText(titleElement, { chars: true });
  const progress = { value: 0 };
  animeAnimate(progress, {
    value: 100,
    duration: 1500,
    ease: 'linear',
    onUpdate: () => {
      const p = progress.value / 100;
      charElements.forEach((el, i) => {
        const start = (i / charElements.length) * 0.8; // each starts at a % complete
        const charP = Math.max(0, Math.min(1, (p - start)*charElements.length));
        el.textContent = charP >= 1 ? originalText[i] : randomChar();
      });
    }
  });
});

// Create drops - multiple per column for more frequent streams
const drops = [];
const dropsPerColumn = 3; // More drops = more frequent
for (let i = 0; i < columns * dropsPerColumn; i++) {
  const col = Math.floor(i / dropsPerColumn);
  drops.push({
    x: col * fontSize,
    y: utils.random(-canvas.height * 2, 0), // Spread them out vertically
    chars: generateChars(),
    speed: utils.random(3, 7)
  });
}

console.log('Drops created:', drops.length);

// Generate random characters for a drop
function generateChars() {
  const length = Math.floor(Math.random() * 10) + 10; // 3-5 characters
  const charArray = [];
  for (let i = 0; i < length; i++) {
    charArray.push(chars[Math.floor(Math.random() * chars.length)]);
  }
  return charArray;
}

// Drawing function
function draw() {
  // Semi-transparent black to create fade effect (higher = shorter trails)
  ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drops.forEach((drop) => {
    // Draw each character in the drop
    drop.chars.forEach((char, j) => {
      const y = drop.y + j * fontSize;
      // Calculate opacity based on position in trail
      const opacity = 1 - (j / drop.chars.length) * 0.8;
      // Brighter green for the leading character
      if (j === 0) {
        ctx.fillStyle = `rgba(0, 255, 70, ${opacity})`;
      } else {
        ctx.fillStyle = `rgba(0, 180, 50, ${opacity})`;
      }
      ctx.font = `${fontSize}px monospace`;
      ctx.fillText(char, drop.x, y);
    });

    // Move drop down
    drop.y += drop.speed;

    // Reset drop when it goes off screen
    if (drop.y - drop.chars.length * fontSize > canvas.height) {
      drop.y = utils.random(-200, -50);
      drop.chars = generateChars();
      drop.speed = utils.random(3, 7);
    }

    // Randomly change characters using utils.random
    if (utils.random(0, 1) > 0.98) {
      const randomIndex = Math.floor(utils.random(0, drop.chars.length));
      //drop.chars[randomIndex] = Math.random() < 0.5 ? '0' : '1';
      drop.chars[randomIndex] = chars[Math.floor(utils.random(0, chars.length-1))];

    }
  });
}

// Animation loop using requestAnimationFrame
function animate() {
  draw();
  requestAnimationFrame(animate);
}

// Wait for font to load before starting animation
document.fonts.ready.then(() => {
  console.log('Font loaded');
  animate();
  console.log('Animation started');
});

// Handle window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Recalculate columns and drops
  const newColumns = Math.floor(canvas.width / fontSize);
  const newDropCount = newColumns * dropsPerColumn;
  const diff = newDropCount - drops.length;

  if (diff > 0) {
    for (let i = 0; i < diff; i++) {
      const col = Math.floor((drops.length + i) / dropsPerColumn);
      const drop = {
        x: col * fontSize,
        y: utils.random(-canvas.height * 2, 0),
        chars: generateChars(),
        speed: utils.random(2, 5)
      };
      drops.push(drop);
    }
  } else if (diff < 0) {
    drops.splice(newDropCount);
  }

  // Update x positions for existing drops
  drops.forEach((drop, i) => {
    const col = Math.floor(i / dropsPerColumn);
    drop.x = col * fontSize;
  });
});
