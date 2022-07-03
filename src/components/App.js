import { useRef, render } from '../lib';
import Card from './Card';

function App() {
  const cards = [
    { id: 'card1', step: 1 },
    { id: 'card2', step: 10 },
    { id: 'card3', step: 100 },
    { id: 'card4', step: 1000 }
  ];

  useRef(ref => {
    cards.forEach(
      card => render(ref.querySelector(`#${card.id}`), Card, card)
    )
  });

  return /* html */`
    <div class="card-list">
      ${
        cards
          .map(card => /* html */`
            <div class="card" id="${card.id}"></div>
          `)
          .join('')
      }
    </div>
  `;
}

export default App;
