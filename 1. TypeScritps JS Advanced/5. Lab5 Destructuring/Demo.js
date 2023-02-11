// Destructuring: Phá vỡ cấu trúc
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var account = {
    id: 1,
    name: "nvh",
    age: 18
};
// let v_id = account.id;
// let v_name = account.name;
// let v_age = account.age;
// Tách các thuộc tính của đối tượng ra thành các thuộc tính nhỏ, gán vào các biến
var v_id = account.id, v_name = account.name, v_age = account.age;
console.log("v_age ", v_age);
console.log("v_id ", v_id);
console.log("v_name ", v_name);
//Array
var numberArray = ["a", "b", "c"];
// let v_name1 = numberArray[0];
// let v_name2 = numberArray[1];
// let v_name3 = numberArray[2];
var v_name1 = numberArray[0], v_name2 = numberArray[1], v_name3 = numberArray[2];
console.log(v_name1);
// Toán tử Spread... Copy các thuộc tính của đối tượng ban đầu.
// let account2 = {
//     id: 1,
//     name: "nvh",
//     age: 18,
//     rank:10
// };
var account2 = __assign(__assign({}, account), { rank: 10 });
// Template String: Cộng chuỗi
console.log("T\u00EAn t\u00F4i l\u00E0: ".concat(v_name, ", tu\u1ED5i t\u00F4i l\u00E0: ").concat(v_age));
