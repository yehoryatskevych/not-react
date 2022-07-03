import render from './render';
import update from './update';

function createRoot(refOrSelector) {
  const ref = typeof refOrSelector === 'string'
    ? document.querySelector(refOrSelector)
    : refOrSelector;

  return {
    ref,
    render: component => {
      render(ref, null, component);
      setInterval(() => update(ref), 10);
    }
  };
}

export default createRoot;
