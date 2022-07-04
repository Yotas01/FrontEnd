export class ABETSystemError {
    constructor(public issue: string, public status: number){
        this.issue = issue;
        this.status = status;
    }
}
