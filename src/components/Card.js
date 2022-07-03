import { render, useState, useEffect, useRef } from '../lib';
import ValueBlock from './ValueBlock';
import randomWord from '../utils/randomWord';

function Card(props) {
  const createWord = () => randomWord(5);

  const [step, setStep] = useState(props.step);
  const [counter, setCounter] = useState(0);
  const [word, setWord] = useState(createWord());

  useRef(ref => {
    ref.querySelector('#incrementBtn').onclick = () => setCounter(counter + step);

    ref.querySelector('#wordBtn').onclick = () => setWord(createWord());

    render(ref.querySelector('#stepValue'), ValueBlock, {
      title: 'step',
      value: step,
      editable: true,
      onChange: step => setStep(step)
    });

    render(ref.querySelector('#counterValue'), ValueBlock, {
      title: 'counter',
      value: counter
    });

    render(ref.querySelector('#wordValue'), ValueBlock, {
      title: 'word',
      value: word
    });
  });

  useEffect(() => {
    console.log('INITIAL');
  }, []);

  useEffect(() => {
    console.log('COUNTER CHANGED');
  }, [counter]);

  useEffect(() => {
    console.log('WORD CHANGED');
  }, [word]);

  return /* html */`
    <div class="card__values">
      <span id="stepValue"></span>
      <span id="counterValue"></span>
      <span id="wordValue"></span>
    </div>
    <div class="card__actions">
      <button id="incrementBtn">Increment</button>
      <button id="wordBtn">Word</button>
    </div>
  `;
}

export default Card;
