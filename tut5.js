'use strict'
function hello()
{
    console.clear();

    // let obj=
    // {
    //     name: ' Boss',
    //     age: 33,
    //     abc:{ name: 'Prajju',exp: 10}
    // };
    // let myobj={...obj};
    // myobj.age++;
    // myobj.abc.exp++;
    // console.log(obj,myobj );

    let obj={name : 'BOSS',age:28};
    let obj2={name: 'PRAJJU',exp:5};

    let myobj={...obj,...obj2};
    console.log(myobj);
}