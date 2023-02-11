class Canbo {
    private name: string;
    private age: number;
    private gender: Gender;
    private address: string;

    constructor(name: string, age: number, Gender: Gender, address: string) {
        this.name = name;
        this.age = age;
        this.gender = Gender;
        this.address = address;
    }

	public getName(): string {
		return this.name;
	}

	public getAge(): number {
		return this.age;
	}

	public getGender(): Gender {
		return this.gender;
	}

	public getAddress(): string {
		return this.address;
	}

	public setName(value: string) {
		this.name = value;
	}

	public setAge(value: number) {
		this.age = value;
	}

	public setGender(value: Gender) {
		this.gender = value;
	}

	public setAddress(value: string) {
		this.address = value;
	}

}
enum Gender {
    MALE, FEMALE, OTHER
}
export { Canbo, Gender };
