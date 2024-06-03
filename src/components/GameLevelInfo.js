// src/utils/GameLevels.js
const gameLevels = {
  beginner: {
    name: 'Beginner',
    price: 0.1,
    bullets: 1,
    payoutMultiplier: 2,
    attempts: 3,
    message: 'Better odds than picking a winner on pump.fun, you know it.',
  },
  intermediate: {
    name: 'Intermediate',
    price: 0.2,
    bullets: 2,
    payoutMultiplier: 3,
    attempts: 3,
    message: 'Better odds than making money before "king of the hill" but you can always try.',
  },
  advanced: {
    name: 'Advanced',
    price: 0.3,
    bullets: 3,
    payoutMultiplier: 4,
    attempts: 3,
    message: 'Better odds than making money before "bonding curve," but you can always dream.',
  },
  expert: {
    name: 'Expert',
    price: 0.4,
    bullets: 4,
    payoutMultiplier: 5,
    attempts: 3,
    message: 'Better odds of making money than on dexscreener, we are all degens, destined to lose it all.',
  },
};

export default gameLevels;
