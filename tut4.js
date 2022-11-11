'use strict';
function hello()
{
    console.clear();
    // let emp =
    // [{
    //     name: 'Bill',
    //     empno: '24',
    //     fulltime: true,
    //     salary: 15,
    //     shifts: [0,8,8,0,8,4,4]
    // }];
    // for(let i=0;i<emp.shifts.length;i++)
    // {
    //     emp.shifts[i] *= 0.9;
    // }
    
    // emp.salary *= 1.05;
    // let Total_pay=0;
    // for(let s of emp.shifts)
    // {
    //     Total_pay += s * emp.salary;


    // }
    // console.log("total salary per week :",Total_pay);
    // let abc= JSON.stringify(emp)
    // console.log(abc);

    let abc=prompt("Enter names of employes :");
    let abccobj= JSON.parse(abc);

    let newemp ={
        name: "BOSS",
        id: "24635",
        fulltime: true,
        salary:11,
        shifts: [8,8,8,0,0,4,4]
    
    };
    abccobj.push(newemp);


    console.log(abccobj);
    // let cba= JSON.parse(abc);
    console.log(abc);
}