declare const require: any;
const compile = require('cwise-compiler');
import ndarray = require('ndarray');

export interface Sum {
  (a: ndarray): number;
}

export default <Sum> compile({
  args: ['array'],
  pre: {args: [], localVars: [], thisVars: ['this_s'], body: 'this_s=0'},
  body: {
    args: [{name: 'a', lvalue: false, rvalue: true, count: 1}],
    body: 'this_s+=a', localVars: [], thisVars: ['this_s'],
  },
  post: {args: [], localVars: [], thisVars: ['this_s'], body: 'return this_s'},
  funcName: 'sum',
});
