export class Products {
    id:number;
    prodname:string;
    description:string;
    prodprice:number;
    available:string;

    constructor(pi:number,pn:string,desc:string,pp:number,a:string){
        this.id=pi;
        this.prodname=pn;
        this.description=desc;
        this.prodprice=pp;
        this.available=a;

    }
}
