"use strict";
exports.__esModule = true;
exports.Gender = exports.Canbo = void 0;
var Canbo = /** @class */ (function () {
    function Canbo(name, age, Gender, address) {
        this.name = name;
        this.age = age;
        this.gender = Gender;
        this.address = address;
    }
    /**
     * Getter name
     * @return {string}
     */
    Canbo.prototype.getName = function () {
        return this.name;
    };
    /**
     * Getter age
     * @return {number}
     */
    Canbo.prototype.getAge = function () {
        return this.age;
    };
    /**
     * Getter gender
     * @return {Gender}
     */
    Canbo.prototype.getGender = function () {
        return this.gender;
    };
    /**
     * Getter address
     * @return {string}
     */
    Canbo.prototype.getAddress = function () {
        return this.address;
    };
    /**
     * Setter name
     * @param {string} value
     */
    Canbo.prototype.setName = function (value) {
        this.name = value;
    };
    /**
     * Setter age
     * @param {number} value
     */
    Canbo.prototype.setAge = function (value) {
        this.age = value;
    };
    /**
     * Setter gender
     * @param {Gender} value
     */
    Canbo.prototype.setGender = function (value) {
        this.gender = value;
    };
    /**
     * Setter address
     * @param {string} value
     */
    Canbo.prototype.setAddress = function (value) {
        this.address = value;
    };
    return Canbo;
}());
exports.Canbo = Canbo;
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender || (Gender = {}));
exports.Gender = Gender;
