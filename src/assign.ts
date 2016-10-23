declare const require: any;
const compile = require('cwise-compiler');
import ndarray = require('ndarray');

import makeOp from './makeOp';

export interface Assign {
  (dest: ndarray, src: ndarray): ndarray;
}

export default <Assign> makeOp({
  args:['array', 'array'],
  body: {args:['a', 'b'], body:'a=b'},
  funcName: 'assign',
});
