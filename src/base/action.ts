const actions: { [key: string]: Action[] } = {};

class Action {
  handler: Function;
  one: boolean;
  constructor(handler: Function, one = false) {
    this.handler = handler;
    this.one = one;
  }
  getHandler() {
    return this.handler;
  }
}
/**
 * 名字
 */
export function registerAction(
  name: string,
  handler: Function,
  one = false,
  strict = true
) {
  let container: Action[] = actions[name];
  if (!container) {
    container = [];
    actions[name] = container;
  }
  if (strict) {
    deleteAction(name, handler);
  }
  actions[name].push(new Action(handler, one));
}

export function getActions(name: string) {
  return actions[name];
}

export function clearActions(name: string) {
  delete actions[name];
}

export function deleteAction(name: string, fun: Function) {
  const ac: Action[] = getActions(name);
  if (ac) {
    const nac: Action[] = ac.filter((a) => {
      return a.handler !== fun;
    });
    actions[name] = nac;
  }
}

export function triggerAction(name: string, ...args: any[]) {
  const ac: Action[] = getActions(name);
  if (ac) {
    const nac: Action[] = ac.filter((a) => {
      a.handler(...args);
      return !a.one;
    });
    actions[name] = nac;
  }
}
