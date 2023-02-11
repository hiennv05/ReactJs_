// import { myName } from "./Department";
// import  {myName} from "./Department";

import { Account } from "./Account";
import {
    Department,
    myName,
    printInfoDep,
    printInfoDep2,
    printInfoDep3,
} from "./Department";

// import { myName } from "./Department";

// console.log(myName);

// Tạo ra 1 vài phòng ban

// var dep1 = new Department();
// dep1.setId(1);
// dep1.setName("Sale");
var dep1 = new Department(1, "Sale");
var dep2 = new Department(2, "Marketing");
var dep3 = new Department(3, "BOT");
var dep4 = new Department(4, "sBOT");
// console.log("Id: ", dep1.getId(), "name: ", dep1.getName());
// console.log("Id: ", dep1.getId(), "name: ", dep1.getName());

var acc1 = new Account();
acc1.setId(1);
acc1.setFullName("NVH");
acc1.setEmail("bg.hien@gmail.com");
acc1.setDepartment(dep1);

// console.log("ID: ", acc1.getId(), " FullName: ", acc1.getFullName(), " Email: ", acc1.getEmail()
//             , " Dep: ", acc1.getDepartment().getName());

// In thông tin  thông qua toString;

// dep1.toString();

// //  Sử dụng hàm in thông tin trong phòng ban;

// printInfoDep(dep2);
// printInfoDep(dep3);

// console.log("---Arrow function---");

// printInfoDep2(dep4);

// // Sử dụng hàm tham chiếu bởi 1 biến
// console.log("------print3-----");

// printInfoDep3(dep2);

console.log("Loop");
var departmentList: Department[];
departmentList = [dep1, dep2, dep3];

for (let index = 0; index < departmentList.length; index++) {
    departmentList[index].toString();
}

console.log("===2===");
departmentList.forEach((dep) => {
    printInfoDep3(dep);
});

console.log("===for in===");

for (const index in departmentList) {
    departmentList[index].toString();
}

console.log("===for of ====");
// For each == for of

for (const dep of departmentList) {
    // itertator la 1 phan tu
    dep.toString();
}

console.log("===map===");

var numberArray = [1, 2, 3, 4];
// var numberNew: number[] = [];
// numberArray.forEach((num) => {
//     numberNew.push(num + 3);
// });
var numNew = numberArray.map((num, index) => {
    return num * 3;
})
// numNew.forEach((num) => {
//     console.log(num);
// });

var newA = numNew.filter((value, index, ) => {
    console.log(value);
    console.log(index);
})