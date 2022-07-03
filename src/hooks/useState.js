import { METADATA_CURRENT_INSTANCE, METADATA_REF_CONTEXT } from '../constants/metadata';

const METADATA_INSTANCE_STATES = Symbol('INSTANCE_STATES');

function useState(defaultValue) {
  const ref = Reflect.get(global, METADATA_CURRENT_INSTANCE);
  const context = Reflect.get(ref, METADATA_REF_CONTEXT);
  const { stateIndex = 0 } = context;

  if (!Reflect.has(ref, METADATA_INSTANCE_STATES)) {
    Reflect.set(ref, METADATA_INSTANCE_STATES, new Map());
  }

  const states = Reflect.get(ref, METADATA_INSTANCE_STATES)

  if (!states.has(stateIndex)) {
    states.set(stateIndex, defaultValue);
  }

  const value = states.get(stateIndex);

  const setValue = newValue => {
    states.set(stateIndex, newValue);
    context.shouldUpdate = true;
  }

  context.stateIndex = stateIndex + 1;

  return [value, setValue];
}

export default useState;
