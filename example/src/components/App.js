import { useRef, render } from 'not-react';
import Card from './Card';
import createCards from '../utils/createCards';

function App() {
  const cards = createCards(1024);

  useRef(ref => {
    cards.forEach(
      card => render(ref, `#${card.id}`, Card, card)
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
