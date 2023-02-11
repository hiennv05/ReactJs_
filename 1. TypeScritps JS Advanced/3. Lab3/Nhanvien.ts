import { Canbo, Gender } from "./Canbo";

export class Nhanvien extends Canbo {
    private work: string;

    constructor(
        name: string,
        age: number,
        gender: Gender,
        address: string,
        work: string
    ) {
        super(name, age, gender, address);
        this.work = work;
    }

    /**
     * Getter work
     * @return {string}
     */
    public getWork(): string {
        return this.work;
    }

    /**
     * Setter work
     * @param {string} value
     */
    public setWork(value: string) {
        this.work = value;
    }
}
