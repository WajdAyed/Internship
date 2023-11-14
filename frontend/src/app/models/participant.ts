export class Participant {
    par_id: number;
    fullname: string;
    foundation: string;
    landLine: number;
    fax: number;
    mobilePhone: number;
    email: string;

    constructor(
        par_id: number,
        fullname: string,
        foundation: string,
        landLine: number,
        fax: number,
        mobilePhone: number,
        email: string
    ) {
        this.par_id = par_id;
        this.fullname = fullname;
        this.foundation = foundation;
        this.landLine = landLine;
        this.fax = fax;
        this.mobilePhone = mobilePhone;
        this.email = email;
    }
}
