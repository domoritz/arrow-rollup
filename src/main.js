import {Table, FloatVector} from 'apache-arrow'

// Toggle this code. When it's there, the code below works. Why???
Table.new([FloatVector.from(new Float32Array([]))], ['a'])

const bytes2 = Uint8Array.from([65,82,82,79,87,49,0,0,255,255,255,255,120,0,0,0,16,0,0,0,0,0,10,0,12,0,6,0,5,0,8,0,10,0,0,0,0,1,4,0,12,0,0,0,8,0,8,0,0,0,4,0,8,0,0,0,4,0,0,0,1,0,0,0,20,0,0,0,16,0,20,0,8,0,0,0,7,0,12,0,0,0,16,0,16,0,0,0,0,0,0,2,16,0,0,0,28,0,0,0,4,0,0,0,0,0,0,0,1,0,0,0,49,0,0,0,8,0,12,0,8,0,7,0,8,0,0,0,0,0,0,1,32,0,0,0,255,255,255,255,136,0,0,0,20,0,0,0,0,0,0,0,12,0,22,0,6,0,5,0,8,0,12,0,12,0,0,0,0,3,4,0,24,0,0,0,8,0,0,0,0,0,0,0,0,0,10,0,24,0,12,0,4,0,8,0,10,0,0,0,60,0,0,0,16,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,255,255,255,255,0,0,0,0,16,0,0,0,12,0,20,0,6,0,8,0,12,0,16,0,12,0,0,0,0,0,4,0,60,0,0,0,40,0,0,0,4,0,0,0,1,0,0,0,136,0,0,0,0,0,0,0,144,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,8,0,0,0,4,0,8,0,0,0,4,0,0,0,1,0,0,0,20,0,0,0,16,0,20,0,8,0,0,0,7,0,12,0,0,0,16,0,16,0,0,0,0,0,0,2,16,0,0,0,28,0,0,0,4,0,0,0,0,0,0,0,1,0,0,0,49,0,0,0,8,0,12,0,8,0,7,0,8,0,0,0,0,0,0,1,32,0,0,0,168,0,0,0,65,82,82,79,87,49]);

const table2 = Table.from(bytes2);

console.log("table2", table2);
// thows error: Uncaught TypeError: chunks[0].toArray is not a function
console.log("table2", table2.toArray());