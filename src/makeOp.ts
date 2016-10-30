declare const require: any;
const compile = require('cwise-compiler');
import EmptyProc from './EmptyProc';

function fixup(x) {
  if (!x) {
    return EmptyProc;
  }
  for (let i = 0; i < x.args.length; ++i) {
    const a = x.args[i];
    if (i === 0) {
      x.args[i] = {name: a, lvalue: true, rvalue: !!x.rvalue, count: x.count || 1 };
    } else {
      x.args[i] = {name: a, lvalue: false, rvalue: true, count: 1};
    }
  }
  if (!x.thisVars) {
    x.thisVars = [];
  }
  if (!x.localVars) {
    x.localVars = [];
  }
  return x;
}

function pcompile(userArgs) {
  return compile({
    args:     userArgs.args,
    pre:      fixup(userArgs.pre),
    body:     fixup(userArgs.body),
    post:     fixup(userArgs.proc),
    funcName: userArgs.funcName,
  });
}

function makeOp(userArgs) {
  const args = [];
  for (let i = 0; i < userArgs.args.length; ++i) {
    args.push('a' + i);
  }
  const wrapper = new Function('P', [
    'return function ', userArgs.funcName, '_ndarrayops(', args.join(','), ') {P(', args.join(','), ');return a0}',
  ].join(''));
  return wrapper(pcompile(userArgs));
}

export default makeOp;
