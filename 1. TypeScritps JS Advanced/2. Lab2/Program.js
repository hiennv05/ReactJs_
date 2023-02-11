"use strict";
// import { myName } from "./Department";
// import  {myName} from "./Department";
exports.__esModule = true;
var Account_1 = require("./Account");
var Department_1 = require("./Department");
// import { myName } from "./Department";
// console.log(myName);
// Tạo ra 1 vài phòng ban
// var dep1 = new Department();
// dep1.setId(1);
// dep1.setName("Sale");
var dep1 = new Department_1.Department(1, "Sale");
var dep2 = new Department_1.Department(2, "Marketing");
var dep3 = new Department_1.Department(3, "BOT");
var dep4 = new Department_1.Department(4, "sBOT");
// console.log("Id: ", dep1.getId(), "name: ", dep1.getName());
var acc1 = new Account_1.Account();
acc1.setId(1);
acc1.setFullName("NVH");
acc1.setEmail("bg.hien@gmail.com");
acc1.setDepartment(dep1);
// console.log("ID: ", acc1.getId(), " FullName: ", acc1.getFullName(), " Email: ", acc1.getEmail()
//             , " Dep: ", acc1.getDepartment().getName());
// In thông tin  thông qua toString;
dep1.toString();
//  Sử dụng hàm in thông tin trong phòng ban;
(0, Department_1.printInfoDep)(dep2);
(0, Department_1.printInfoDep)(dep3);
console.log("---Arrow function");
(0, Department_1.printInfoDep2)(dep4);
// Sử dụng hàm tham chiếu bởi 1 biến
console.log("------print3-----");
(0, Department_1.printInfoDep3)(dep2);
