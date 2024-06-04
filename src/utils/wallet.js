// src/utils/wallet.js
export const connectWallet = async () => {
  if (window.solana && window.solana.isPhantom) {
    try {
      const response = await window.solana.connect();
      console.log('Wallet connected:', response.publicKey.toString());
      return response.publicKey.toString();
    } catch (err) {
      console.error('Wallet connection failed:', err);
      return null;
    }
  } else {
    alert('Please install the Phantom wallet extension');
    return null;
  }
};

export const playGame = (level) => {
  const levels = {
    beginner: { price: 0.1, bullets: 1, payout: 1 },
    intermediate: { price: 0.25, bullets: 2, payout: 2.5 },
    advanced: { price: 0.5, bullets: 3, payout: 5 },
    expert: { price: 1, bullets: 4, payout: 10 },
  };

  const game = levels[level];
  const chambers = 6;
  const bulletPosition = Math.floor(Math.random() * chambers);

  if (bulletPosition < game.bullets) {
    return 'lose';
  } else {
    return 'win';
  }
};

const walletUtils = {
  connectWallet,
  playGame,
};

export default walletUtils;
