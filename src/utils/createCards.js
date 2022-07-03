import random from '../utils/random';
import randomWord from './randomWord';

function createCards(amount) {
  const cards = [];
  
  for (let i = 0; i < amount; ++i) {
    const wordSize = random(3, 10);

    cards.push({
      id: `card${i}`,
      word: randomWord(wordSize),
      step: random(1, 10),
      wordSize
    });
  }

  return cards;
}

export default createCards;
