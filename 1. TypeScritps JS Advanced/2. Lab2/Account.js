"use strict";
exports.__esModule = true;
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account() {
    }
    // Getter, Setter
    Account.prototype.getId = function () {
        return this.id;
    };
    Account.prototype.setId = function (id) {
        this.id = id;
    };
    Account.prototype.getFullName = function () {
        return this.fullName;
    };
    Account.prototype.setFullName = function (fullName) {
        this.fullName = fullName;
    };
    Account.prototype.getEmail = function () {
        return this.email;
    };
    Account.prototype.setEmail = function (email) {
        this.email = email;
    };
    Account.prototype.getDepartment = function () {
        return this.department;
    };
    Account.prototype.setDepartment = function (department) {
        this.department = department;
    };
    return Account;
}());
exports.Account = Account;
