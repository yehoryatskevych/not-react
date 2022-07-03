import { METADATA_CURRENT_INSTANCE, METADATA_REF_CONTEXT } from '../constants/metadata';

const METADATA_INSTANCE_EFFECTS = Symbol('METADATA_INSTANCE_EFFECTS');

function useEffect(cb, dependencies) {
  const ref = Reflect.get(global, METADATA_CURRENT_INSTANCE);
  const context = Reflect.get(ref, METADATA_REF_CONTEXT);
  const { effectIndex = 0 } = context;
  
  if (!Reflect.has(ref, METADATA_INSTANCE_EFFECTS)) {
    Reflect.set(ref, METADATA_INSTANCE_EFFECTS, new Map());
  }

  const effects = Reflect.get(ref, METADATA_INSTANCE_EFFECTS)
  const isInitial = !effects.has(effectIndex);

  window.requestAnimationFrame(() => {
    const effect = effects.get(effectIndex);

    if (dependencies) {
      if (dependencies.length) {
        const isUpdated = dependencies.some(
          (dependency, i) => effect.dependencies[i] !== dependency
        );

        if (isUpdated) {
          return;
        }
      } else if (!isInitial) {
        return;
      }
    }

    effect.cb.call(null);
  });
  
  effects.set(effectIndex, { cb, dependencies });
  context.effectIndex = effectIndex + 1;
}

export default useEffect;
