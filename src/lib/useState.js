import render from './render';
import contextManager from './contextManager';

const componentsStateMap = new Map();

function useState(defaultValue) {
  const context = contextManager.current();
  const { stateIndex, component, ref, props } = context;

  if (!componentsStateMap.has(ref)) {
    componentsStateMap.set(ref, new Map());
  }

  const states = componentsStateMap.get(ref);

  if (!states.has(stateIndex)) {
    states.set(stateIndex, defaultValue);
  }

  const value = states.get(stateIndex);

  const setValue = newValue => {
    states.set(stateIndex, newValue);
    render(ref, component, props);
  }

  context.stateIndex++;

  return [value, setValue];
}

export default useState;
