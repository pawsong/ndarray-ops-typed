declare const require: any;
const compile = require('cwise-compiler');
import ndarray = require('ndarray');
import EmptyProc from './EmptyProc';

export interface Any {
  (a: ndarray): boolean;
}

export default <Any> compile({
  args: ['array'],
  pre: EmptyProc,
  body: {
    args: [{name: 'a', lvalue: false, rvalue: true, count: 1}],
    body: 'if(a){return true}', localVars: [], thisVars: [],
  },
  post: {args: [], localVars: [], thisVars: [], body: 'return false'},
  funcName: 'any',
});
