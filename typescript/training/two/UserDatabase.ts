import { User } from "./User";

export class UserDatabase {

    private userList: User[];

    constructor() {
        this.userList = [];
    }


    private add(user: User): boolean {
        for (const u of this.userList) {
            if (user.id === u.id) {
                return false;
            }
        }
        this.userList.push(user);
        return true;
    }

    private get(id: string): User | null {
        for (const u of this.userList) {
            if (u.id === id) {
                return u;
            }
        }
        return null;
    }

    private remove(id: string): boolean {
        for (let i = 0; i < this.userList.length ; i++) {
            if (this.userList[i].id === id) {
                this.userList.splice(i, 1);
                return true;
            }
        }
        return false;

    }

    private exists(id: string): boolean {
        for (const u of this.userList) {
            if (u.id === id) {
                return true;
            }
        }
        return false;
    }

    private getCount(): number {
        return this.userList.length;
    }
}