export class UniqueVisitors {

    private visitorList: Set<string>;

    constructor() {
        this.visitorList = new Set();
    }

    public visit(userId: string): void {
        this.visitorList.add(userId);
    }
    public hasVisited(userId: string): boolean {
        return this.visitorList.has(userId);
    }
    public getTotalVisitors(): number {
        return this.visitorList.size;
    }
    public removeVisitor(userId: string): boolean {
        return this.visitorList.delete(userId);
    }
    public getVisitors(): string[] {
        return Array.from(this.visitorList);
    }

}