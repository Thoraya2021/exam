
# exam



1-C:\Users\Thoraya\Downloads\backend_debugging\backend_debugging\todoback\node_modules\express\lib\router\route.js:202
        throw new Error(msg);
        ^
Error: Route.get() requires a callback function but got a [object Undefined]
    at Route.<computed> [as get] (C:\Users\Thoraya\Downloads\backend_debugging\backend_debugging\todoback\node_modules\express\lib\router\route.js:202:15)
    at Function.proto.<computed> [as get] (C:\Users\Thoraya\Downloads\backend_debugging\backend_debugging\todoback\node_modules\express\lib\router\index.js:510:19)
    at Object.<anonymous> (C:\Users\Thoraya\Downloads\backend_debugging\backend_debugging\todoback\routers\routes\todos.js:14:12) 


>>>>>>>>>>>debugging


module.exports >>in controllers file

2- [as put] (C:\Users\Thoraya\Downloads\backend_debugging\backend_debugging\todoback\node_modules\express\lib\router\index.js:510:19)
    at Object.<anonymous> (C:\Users\Thoraya\Downloads\backend_debugging\backend_debugging\todoback\routers\routes\todos.js:25:12)


>>>>>>>>>>debugging

not defined in controlls file in module.exports


3-Error: Cannot find module '../db'
Require stack:
- C:\Users\Thoraya\Downloads\backend_debugging\backend_debugging\todoback\index.js

>>require("../db");

>>>>>>>>>>debugging

require("./db/index");


4-C:\Users\Thoraya\Downloads\backend_debugging\backend_debugging\todoback\index.js:14
app.use(morgan("dev"));
    ^

ReferenceError: morgan is not defined
    at Object.<anonymous> (C:\Users\Thoraya\Downloads\backend_debugging\backend_debugging\todoback\index.js:14:5)   


>>>>>>>>>>debugging

npm i morgan
const morgan = require("morgan");


5-Emitted 'error' event on Server instance at:
    at emitErrorNT (node:net:1361:8)
    at processTicksAndRejections (node:internal/process/task_queues:83:21) {
  code: 'EACCES',
  errno: -4092,
  syscall: 'listen',
  address: '5000;',
  port: -1
}



>>>>>>>>>>debugging

config >>>>>>>>>>.env 

6-const createTodo = (req, res) => {
  const task = req.body.todo;

  const newTodo = new todoSchema({
    todo,
  });


>>>>>>>>>>debugging

in schema 
