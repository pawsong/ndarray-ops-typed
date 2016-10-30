declare const require: any;
const compile = require('cwise-compiler');
import ndarray = require('ndarray');
import EmptyProc from './EmptyProc';

export interface All {
  (a: ndarray): boolean;
}

export default <All> compile({
  args: ['array'],
  pre: EmptyProc,
  body: {
    args: [{name: 'x', lvalue: false, rvalue: true, count: 1}],
    body: 'if(!x){return false}', localVars: [], thisVars: [],
  },
  post: {args: [], localVars: [], thisVars: [], body: 'return true'},
  funcName: 'all',
});
