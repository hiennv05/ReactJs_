import { Canbo, Gender } from "./Canbo";

export class Engineer extends Canbo {
    private type: string;

    constructor(
        name: string,
        age: number,
        gender: Gender,
        address: string,
        type: string
    ) {
        super(name, age, gender, address);
        this.type = type;
    }

    /**
     * Getter type
     * @return {string}
     */
    public getType(): string {
        return this.type;
    }

    /**
     * Setter type
     * @param {string} value
     */
    public setType(value: string) {
        this.type = value;
    }
}
