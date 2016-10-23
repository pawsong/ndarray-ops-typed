declare const require: any;
const compile = require('cwise-compiler');
import ndarray = require('ndarray');

export interface Norm2 {
  (a: ndarray): number;
}

export default <Norm2> compile({
  args:['array'],
  pre: {args:[], localVars:[], thisVars:['this_s'], body:'this_s=0'},
  body: {args:[{name:'a', lvalue:false, rvalue:true, count:2}], body: 'this_s+=a*a', localVars: [], thisVars: ['this_s']},
  post: {args:[], localVars:[], thisVars:['this_s'], body:'return Math.sqrt(this_s)'},
  funcName: 'norm2',
});
