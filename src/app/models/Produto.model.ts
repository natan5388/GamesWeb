export class Produto{
    id: number;
    produto: string;
    descricao: string;
    foto: string;
    preco: number;
    
    constructor(Id: number, Prod: string, Desc: string, Fot: string, Prec: number){
        this.id = Id;
        this.produto = Prod;
        this.descricao = Desc;
        this.foto = Fot;
        this.preco = Prec;
    }
}