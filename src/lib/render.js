import contextManager from './contextManager';

function render(ref, component, props = {}) {
  const context = {
    component: component,
    stateIndex: 0,
    effectIndex: 0,
    ref: null,
    props: props,
    refCb: null
  };
  
  contextManager.enter(context);

  context.ref = typeof ref === 'string' ? document.querySelector(ref) : ref;

  if (context.ref) {
    context.ref.innerHTML = component(props);

    if (context.refCb) {
      context.refCb(context.ref);
    }
  }

  contextManager.exit();
}

export default render;
