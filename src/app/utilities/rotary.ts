/**
 * Some procedural interface for creating a rotary queue in typescript.
 */
export interface Rotary {
  next(): any;
}

export const queue = (base?) => {
  const items = base || [];
  return {
    depth: () => items.length,
    top: () => items[0],
    pop: () => { items.shift(); },
    push: item => { items.push(item); },
  };
};

export const rotary = base => {
  return Object.assign(base, {
    next: () => {
      const item = base.top();
      base.pop();
      base.push(item);
      return item;
    },
  });
};
