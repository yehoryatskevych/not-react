import { METADATA_CURRENT_INSTANCE, METADATA_REF_CONTEXT } from './constants/metadata';

function render(root, selector, component, props = {}) {
  const ref = selector ? root.querySelector(selector) : root;

  Reflect.set(ref, METADATA_REF_CONTEXT, {
    ref,
    props,
    component,
    parent: selector ? root : null,
    children: new Set(),
    shouldUpdate: false
  });

  const context = Reflect.get(ref, METADATA_REF_CONTEXT);

  if (selector) {
    const rootContext = Reflect.get(root, METADATA_REF_CONTEXT);
    rootContext.children.add(context.ref);
  }

  Reflect.set(global, METADATA_CURRENT_INSTANCE, context.ref);
  context.ref.innerHTML = component(props);
}

export default render;
