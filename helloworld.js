'use strict';
function hello() {
    console.clear();
	//console.log('hello world');
	  //  console.log("bye bye world...see you soon");
	    //let a = prompt('whats up man...??');
	    //console.log("whats up man...??:", a);
	    //let b = confirm("you want to continue??")
	    //console.log('do you want to continue?:', b);
	    //alert("all done");

    let c=6;
    let d='hello world';
    console.log('hello world is a :',typeof(d));
    let strg1="hello";
    let strg2="world";
    console.log(strg1+' '+strg2);
    let a="hello world";
    console.log(a.length);
    console.log(`${strg1} ${strg2}`);
    console.log(a.padStart(30,'@'));
    console.log(a.repeat(10));
    console.log(a.slice(2,8));
    console.log(a.toLocaleUpperCase());

}

 




