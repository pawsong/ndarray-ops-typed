declare const require: any;
const compile = require('cwise-compiler');
import ndarray = require('ndarray');

export interface Prod {
  (a: ndarray): number;
}

export default <Prod> compile({
  args: ['array'],
  pre: {args: [], localVars: [], thisVars: ['this_s'], body: 'this_s=1'},
  body: {
    args: [{name: 'a', lvalue: false, rvalue: true, count: 1}],
    body: 'this_s*=a', localVars: [], thisVars: ['this_s'],
  },
  post: {args: [], localVars: [], thisVars: ['this_s'], body: 'return this_s'},
  funcName: 'prod',
});
