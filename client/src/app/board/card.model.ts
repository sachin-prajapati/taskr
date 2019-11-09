export class Cards {
    public cname : string;
    public date : number;
    public priority : string;
    public desc : string;

    constructor(cname:string, date:number, priority:string, desc:string) {
        this.cname=cname;
        this.date=date;
        this.priority=priority;
        this.desc=desc;
    }
}