"use strict";
exports.__esModule = true;
exports.printInfoDep3 = exports.printInfoDep2 = exports.printInfoDep = exports.myName = exports.Department = void 0;
// Khai báo class
var Department = /** @class */ (function () {
    // Khai báo constructor
    function Department(id, name) {
        this.id = id;
        this.name = name;
    }
    // Khai báo  Getter, Setter
    Department.prototype.getId = function () {
        return this.id;
    };
    Department.prototype.getName = function () {
        return this.name;
    };
    Department.prototype.setId = function (id) {
        this.id = id;
    };
    Department.prototype.setName = function (name) {
        this.name = name;
    };
    // Khai báo phương thức in thông tin phòng ban
    Department.prototype.toString = function () {
        console.log("Thông tin phòng ban là ID: ", this.id, ", Name: ", this.name);
    };
    return Department;
}());
exports.Department = Department;
var myName = "nvh";
exports.myName = myName;
/**
 * printInfoDep
dep: Department */
//  Khai báo hàm in thông tin phòng ban trong department
// Cách 1
function printInfoDep(dep) {
    console.log("Thông tin phòng ban là ID: ", dep.getId(), ", Name: ", dep.getName());
}
exports.printInfoDep = printInfoDep;
//Cách 2
var printInfoDep2 = function (dep) {
    console.log("Thông tin phòng ban là ID: ", dep.getId(), ", Name: ", dep.getName());
};
exports.printInfoDep2 = printInfoDep2;
// Cách 3
var printInfoDep3 = function (dep) {
    console.log("Thông tin phòng ban là ID: ", dep.getId(), ", Name: ", dep.getName());
};
exports.printInfoDep3 = printInfoDep3;
