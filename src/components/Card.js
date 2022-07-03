import { render, useState, useEffect, useRef } from '../lib';
import ValueBlock from './ValueBlock';
import randomWord from '../utils/randomWord';

function Card(props) {
  const [step, setStep] = useState(props.step || 1);
  const [wordSize, setWordSize] = useState(props.wordSize || 5);
  const [counter, setCounter] = useState(0);
  const [word, setWord] = useState(props.word);

  useRef(ref => {
    ref.querySelector('#incrementBtn').onclick = () => setCounter(counter + step);

    ref.querySelector('#wordBtn').onclick = () => setWord(randomWord(wordSize));

    render(ref, '#stepValue', ValueBlock, {
      title: 'step',
      value: step,
      editable: true,
      onChange: step => setStep(step)
    });

    render(ref, '#wordSize', ValueBlock, {
      title: 'word size',
      value: wordSize,
      editable: true,
      onChange: size => setWordSize(size)
    });

    render(ref, '#counterValue', ValueBlock, {
      title: 'counter',
      value: counter
    });

    render(ref, '#wordValue', ValueBlock, {
      title: 'word',
      value: word
    });
  });

  useEffect(() => {
    console.log('[EFFECT] COUNTER CHANGED');
  }, [counter]);

  useEffect(() => {
    console.log('[EFFECT] WORD CHANGED');
  }, [word]);

  return /* html */`
    <div class="card__values">
      <span id="stepValue"></span>
      <span id="wordSize"></span>
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
