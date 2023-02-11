// Khai báo class
class Department {

    // Khai báo thuộc tính
    private id: number;
    private name: string;
    // Khai báo constructor
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    // Khai báo  Getter, Setter
    public getId(): number {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public setId(id: number): void {
        this.id = id;
    }
    public setName(name: string) {
        this.name = name;
    }
    // Khai báo phương thức in thông tin phòng ban
    public toString(): void {
        console.log("Thông tin phòng ban là ID: ", this.id, ", Name: ", this.name);
    }
}
var myName: string = "nvh";

/**
 * printInfoDep
dep: Department */
//  Khai báo hàm in thông tin phòng ban trong department
// Cách 1
function printInfoDep(dep: Department) {
        console.log(
        "Thông tin phòng ban là ID: ",
        dep.getId(),
        ", Name: ",
        dep.getName()
        );
}

//Cách 2
const printInfoDep2 = (dep: Department) => {
    console.log(
        "Thông tin phòng ban là ID: ",
        dep.getId(),
        ", Name: ",
        dep.getName()
    );
}
// Cách 3

var printInfoDep3 = function (dep: Department) {
    console.log(
        "Thông tin phòng ban là ID: ",
        dep.getId(),
        ", Name: ",
        dep.getName()
    );
}

export { Department, myName, printInfoDep, printInfoDep2, printInfoDep3 };
