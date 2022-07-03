import { useRef } from '../lib';

function ValueBlock(props) {
  const { title, value, editable, onChange } = props;

  useRef(ref => {
    if (editable && onChange) {
      const input = ref.querySelector('input');
      input.onchange = () => onChange(+input.value || 0);
    }
  });

  return /* html */`
    <div class="value-block">
      <div class="value-block__title">${title}:</div>
      <div class="value-block__value">${
        editable
          ? `<input value="${value}">`
          : value
      }</div>
    </div>
  `;
}

export default ValueBlock;
