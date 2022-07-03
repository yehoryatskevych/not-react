import render from './render';
import { METADATA_REF_CONTEXT } from './constants/metadata';

function update(ref) {
  const context = Reflect.get(ref, METADATA_REF_CONTEXT);
  if (context.shouldUpdate) {
    render(ref, null, context.component, context.props);
  } else {
    context.children.forEach(child => update(child));
  }
}

export default update;
