// Destructuring: Phá vỡ cấu trúc

let account = {
    id: 1,
    name: "nvh",
    age: 18
};
// let v_id = account.id;
// let v_name = account.name;
// let v_age = account.age;
// Tách các thuộc tính của đối tượng ra thành các thuộc tính nhỏ, gán vào các biến
let { id: v_id, name: v_name, age: v_age } = account;

console.log("v_age ", v_age);
console.log("v_id ", v_id);
console.log("v_name ", v_name);

//Array
let numberArray = ["a", "b", "c"];
// let v_name1 = numberArray[0];
// let v_name2 = numberArray[1];
// let v_name3 = numberArray[2];

let [v_name1, v_name2, v_name3] = numberArray;
console.log(v_name1);


// Toán tử Spread... Copy các thuộc tính của đối tượng ban đầu.


// let account2 = {
//     id: 1,
//     name: "nvh",
//     age: 18,
//     rank:10
// };

let account2 = {
   ...account,
    rank:10,
};


// Template String: Cộng chuỗi

console.log(`Tên tôi là: ${v_name}, tuổi tôi là: ${v_age}`);
