import { Cards } from './card.model';

export class Lists {
    public name : string;
    public cards:Cards[]=[]

    constructor(name:string, cards:Cards[]) {
        this.name=name;
        this.cards=cards;
    }
}