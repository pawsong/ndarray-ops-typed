declare const require: any;
const compile = require('cwise-compiler');
import ndarray = require('ndarray');

import makeOp from './makeOp';

export interface Assigns {
  (dest: ndarray, val: number): ndarray;
}

export default <Assigns> makeOp({
  args:['array', 'scalar'],
  body: {args:['a', 'b'], body:'a=b'},
  funcName: 'assigns',
});
