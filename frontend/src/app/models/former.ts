export class Former {
    former_id: number;
    fullname: string;
    speciality: string;
    direction: string;

    constructor(
        former_id: number,
        fullname: string,
        speciality: string,
        direction: string
    ) {
        this.former_id = former_id;
        this.fullname = fullname;
        this.speciality = speciality;
        this.direction = direction;
    }
}