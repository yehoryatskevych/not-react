class ContextManager {
  constructor() {
    this.stack = [];
  }

  current() {
    if (!this.stack.length) {
      return null;
    }

    return this.stack[this.stack.length - 1];
  }

  enter(context) {
    this.stack.push(context);
  }

  exit() {
    this.stack.pop();
  }
};

export default new ContextManager();
