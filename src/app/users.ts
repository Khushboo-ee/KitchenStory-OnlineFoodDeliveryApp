export class Users {
    id:string;
    fullname:string;
    contact:number;
    username:string;
    password:string;


    constructor(i:string,fn:string,co:number,un:string,pwd:string){
        this.id = i;
        this.fullname = fn;
        this.contact = co;
        this.username = un;
        this.password = pwd;
    }
}


