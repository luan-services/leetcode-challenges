import { User } from "./User";

export class UserDatabase {

    private userList: Map<string, User>;

    constructor() {
        this.userList = new Map();
    }

    public add(user: User): boolean {
        if (this.userList.has(user.id)) {
            return false;
        }

        this.userList.set(user.id, user);
        return true;
    }

    public get(id: string): User | null {
        const user = this.userList.get(id);

        if (user === undefined) {
            return null;
        }

        return user;
    }

    public remove(id: string): boolean {
        return this.userList.delete(id);
    }

    public exists(id: string): boolean {
        return this.userList.has(id);
    }

    public getCount(): number {
        return this.userList.size;
    }
}