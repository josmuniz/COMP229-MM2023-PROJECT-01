console.log("t1:hello ");
let hello = "t2 hello world from node.js";
console.log(hello);
//EX.-3
let justNode = hello.slice(17);
console.log(justNode);
//EX.-4
console.log(`Who let the ${justNode} out? `);
//EX.- environment variable
//console.log(__dirname);
//console.log(__filename);

//WE NEED A SERVER RUNNING
import {half0f, multiply} from './lib.js';
console.log(half0f(84));
console.log(multiply(22, 2));




