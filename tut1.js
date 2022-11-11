'use strict';
function hello()
{
    console.clear();
    let a=5;
    let b=3;
    console.log(a+b);
    // let array=[1,2.34,'hello',23,567,'world'];
    // console.log(array,array.length)
    // console.log(array,array.push(213));
    // console.log(array,array.pop());
    // console.log(array.indexOf('hello'));
    // console.log(array.indexOf(1));
    // console.log(array.reverse());
    // console.log(array.slice(2,5));
    // array=['aaa','zzz','bbb','aab','zyz','zzy'];
    // console.log(array.sort());
    let array=[2,4,6,8,10];
    let otherarray = [...array];
    console.log(array);
    otherarray[2] = 200;
    console.log(otherarray , array);
    let array1 = [...array, ...otherarray , ...['ABC','DEF']];
    console.log(array1);

    console.log(Math.min(array));
    console.log(Math.min(...array))//spread opretor.
    
}
