declare const require: any;
import ndarray = require('ndarray');

import makeOp from './makeOp';

export interface Map {
  (dest: ndarray, src: ndarray, callback: (v: number) => number): ndarray;
}

export default <Map> makeOp({
  args:['array', 'array', 'scalar'],
  body: {args:['a', 'b', 'f'], body:'a=f(b)'},
  funcName: 'map',
});
