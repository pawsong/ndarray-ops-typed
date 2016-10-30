declare const require: any;
const compile = require('cwise-compiler');
import ndarray = require('ndarray');

export interface NormInf {
  (a: ndarray): number;
}

export default <NormInf> compile({
  args: ['array'],
  pre: {args: [], localVars: [], thisVars: ['this_s'], body: 'this_s=0'},
  body: {
    args: [{name: 'a', lvalue: false, rvalue: true, count: 4}],
    body: 'if(-a>this_s){this_s=-a}else if(a>this_s){this_s=a}', localVars: [], thisVars: ['this_s'],
  },
  post: {args: [], localVars: [], thisVars: ['this_s'], body: 'return this_s'},
  funcName: 'norminf',
});
