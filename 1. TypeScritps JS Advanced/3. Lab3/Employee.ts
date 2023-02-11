import { Canbo, Gender } from "./Canbo";

export class Employee extends Canbo {
    private lever: number;

    constructor(
        name: string,
        age: number,
        gender: Gender,
        address: string,
        lever: number
    ) {
        super(name, age, gender, address);
        this.lever = lever;
    }

    /**
     * Getter lever
     * @return {number}
     */
    public getLever(): number {
        return this.lever;
    }

    /**
     * Setter lever
     * @param {number} value
     */
    public setLever(value: number) {
        this.lever = value;
    }
}
