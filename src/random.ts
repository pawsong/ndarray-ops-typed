declare const require: any;
const compile = require('cwise-compiler');
import ndarray = require('ndarray');

import makeOp from './makeOp';

export interface Random {
  (a: ndarray): ndarray;
}

export default <Random> makeOp({
  args: ['array'],
  pre: {args:[], body:'this_f=Math.random', thisVars:['this_f']},
  body: {args: ['a'], body:'a=this_f()', thisVars:['this_f']},
  funcName: 'random',
});
