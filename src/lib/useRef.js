import contextManager from './contextManager';

function useRef(cb) {
  const context = contextManager.current();
  
  context.refCb = cb;
}

export default useRef;
