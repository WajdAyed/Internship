import { Former } from "./former";
import { Participant } from "./participant";

export class Cycle {
    cycle_id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    roomNumber: number;
    Formers: Former[];
    Participants: Participant[];

    constructor(
        cycle_id: number,
        name: string,
        startDate: Date,
        endDate: Date,
        roomNumber: number,
        Formers: Former[],
        Participants: Participant[]
    ) {
        this.cycle_id = cycle_id;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.roomNumber = roomNumber;
        this.Formers = Formers;
        this.Participants = Participants;
    }
}