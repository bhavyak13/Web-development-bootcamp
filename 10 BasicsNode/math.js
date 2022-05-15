const add=(x,y)=>(x+y);
const PI=3.14159;
const square=x=>(x*x);

//The module.exports object is created by the Module system.


// module.exports.add=add;
// module.exports.square=square;
// module.exports.pi=PI;

const obj={
    pi: PI,
    add: add,
    square: square
}
module.exports=obj;


//basically module.export want an object to be exported
//so we first created a object call obj then assign module.exports object to obj
/*
and in the first case we added properties to obj separatly!!
*/