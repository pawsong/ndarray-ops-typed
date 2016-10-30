declare const require: any;
const compile = require('cwise-compiler');
import ndarray = require('ndarray');

export interface Norm1 {
  (a: ndarray): number;
}

export default <Norm1> compile({
  args: ['array'],
  pre: {args: [], localVars: [], thisVars: ['this_s'], body: 'this_s=0'},
  body: {
    args: [{name: 'a', lvalue: false, rvalue: true, count: 3}],
    body: 'this_s+=a<0?-a:a', localVars: [], thisVars: ['this_s'],
  },
  post: {args: [], localVars: [], thisVars: ['this_s'], body: 'return this_s'},
  funcName: 'norm1',
});
