export class Piatto{
    id: number;
    nome: string;
    descrizione: string;
    prezzo: number;
    categoria: string;

    constructor(id: number, nome: string, descrizione: string, prezzo: number, categoria: string){
        this.id = id;
        this.nome = nome;
        this.descrizione = descrizione;
        this.prezzo = prezzo;
        this.categoria = categoria;
    }
}