import contextManager from './contextManager';

const componentsEffectMap = new Map();

function useEffect(cb, dependencies) {
  const context = contextManager.current();
  const { ref, effectIndex } = context;

  if (!componentsEffectMap.has(ref)) {
    componentsEffectMap.set(ref, new Map());
  }

  const effects = componentsEffectMap.get(ref);

  if (effects.has(effectIndex)) {
    const effect = effects.get(effectIndex);

    const isUpdated = dependencies.some((dependency, i) => effect.dependencies[i] !== dependency);
    if (isUpdated) {
      effect.cb();
    }
  } else if (!dependencies.length) {
    cb();
  }

  effects.set(effectIndex, { cb, dependencies });

  context.effectIndex++;
}

export default useEffect;
