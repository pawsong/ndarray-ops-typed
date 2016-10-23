declare const require: any;
const compile = require('cwise-compiler');
import ndarray = require('ndarray');
import EmptyProc from './EmptyProc';

export interface Equals {
  (a: ndarray, b: ndarray): boolean;
}

export default <Equals> compile({
  args:['array', 'array'],
  pre: EmptyProc,
  body: {args:[{name:'x', lvalue:false, rvalue:true, count:1},
               {name:'y', lvalue:false, rvalue:true, count:1}],
        body: 'if(x!==y){return false}',
        localVars: [],
        thisVars: []},
  post: {args:[], localVars:[], thisVars:[], body:'return true'},
  funcName: 'equals',
});
