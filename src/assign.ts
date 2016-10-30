declare const require: any;
import ndarray = require('ndarray');

import makeOp from './makeOp';

export interface Assign {
  (dest: ndarray, src: ndarray): ndarray;
}

export default <Assign> makeOp({
  args: ['array', 'array'],
  body: {args: ['a', 'b'], body: 'a=b'},
  funcName: 'assign',
});
