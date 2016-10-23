declare const require: any;
const compile = require('cwise-compiler');
import ndarray = require('ndarray');

export interface Inf {
  (a: ndarray): number;
}

export default <Inf> compile({
  args: [ 'array' ],
  pre:
   { body: 'this_h=Infinity',
     args: [],
     thisVars: [ 'this_h' ],
     localVars: [] },
  body:
   { body: 'if(_inline_1_arg0_<this_h)this_h=_inline_1_arg0_',
     args: [{'name':'_inline_1_arg0_','lvalue':false,'rvalue':true,'count':2} ],
     thisVars: [ 'this_h' ],
     localVars: [] },
  post:
   { body: 'return this_h',
     args: [],
     thisVars: [ 'this_h' ],
     localVars: [] }
 })
