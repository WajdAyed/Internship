export class Admin {
    admin_id: number;
    username: string;
    password: string;

    constructor(admin_id: number, username: string, password: string) {
        this.admin_id = admin_id;
        this.username = username;
        this.password = password;
    }
}
