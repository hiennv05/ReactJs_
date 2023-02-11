import { Department } from "./Department";

class Account {
    private id: number;
    private fullName: string;
    private email: string;
    private position: string;
    private department: Department;

    // Getter, Setter
    public getId() {
        return this.id;
    }
    public setId(id) {
        this.id = id;
    }
    public getFullName() {
        return this.fullName;
    }
    public setFullName(fullName) {
        this.fullName = fullName;
    }
    public getEmail() {
        return this.email;
    }
    public setEmail(email) {
        this.email = email;
    }
    public getDepartment() {
        return this.department;
    }
    public setDepartment(department) {
        this.department = department;
    }

}

export { Account };