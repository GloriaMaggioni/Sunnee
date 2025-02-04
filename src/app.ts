interface IProdotto{
    tipo: string,
    id: number,
    taglia: string,
    colore: string,
    stato: string,

    assegnaCliente(cliente: ICliente): void;
};

interface ICliente{
    nome: string,
    cognome: string,
    email: string,
    metodoPagamento: string,

    ordinaProdotto(prodotto: IProdotto): void;
};

interface IProcessoProduzione{
    nomeProcesso: string,
    descrizione: string,
    prodottiInProduzione: IProdotto[],

    aggiungiProdotto(prodotto: IProdotto): void;
}; 


class Cliente implements ICliente{
    nome:string;
    cognome:string;
    email: string;
    metodoPagamento: string;

    constructor(nome:string, cognome:string, email:string, metodoPagamento:string){
        this.nome = nome,
        this.cognome = cognome,
        this.email = email,
        this.metodoPagamento = metodoPagamento
    }

    ordinaProdotto(prodotto: IProdotto):void{
         console.log(`${this.nome} ${this.cognome} ha  ordinato il ${prodotto.tipo} numero ${prodotto.id} di colore ${prodotto.colore} e taglia ${prodotto.taglia}`);
       
       
    }
}

class Prodotto implements IProdotto{
    tipo: string;
    id: number;
    taglia: string;
    colore: string;
    stato: string;

    constructor(tipo:string, id:number,taglia:string,colore:string, stato:string){
        this.tipo = tipo
        this.id = id;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = stato
    }

    assegnaCliente(cliente: ICliente): void{
       if(this.stato === 'esaurito'){
        console.log (` ${this.id} è stato ordinato da ${cliente.nome} ${cliente.cognome}`)
       }else{
        console.log(`${this.id} è ancora disponibile`)
       }
       
    }
}


class ProcessoProduzione implements IProcessoProduzione {
    nomeProcesso: string;
    descrizione: string;
    prodottiInProduzione: IProdotto[];

    constructor(  nomeProcesso: string,descrizione: string,prodottiInProduzione: IProdotto[]){
        this.nomeProcesso = nomeProcesso;
        this.descrizione = descrizione;
        this.prodottiInProduzione = prodottiInProduzione
    }

    aggiungiProdotto(prodotto: IProdotto): void {
        this.prodottiInProduzione.push(prodotto)
        console.log(`${prodotto.id} è stato aggiunto al ${this.nomeProcesso}`)
    }
}

//Istanza Prodotto
const prodotto1 = new Prodotto('costume da bagno', 34, 'L', 'rosso', 'disponibile');
const prodotto2  = new Prodotto('cappello', 122, 'M', 'verde', 'esaurito');
const prodotto3 = new Prodotto('pareo', 2, 'unica', 'nero', 'disponibile',);


//Istanza Clienti

const cliente1 = new Cliente('Luca', 'Rossi', 'lucaRossi@gmail.com', 'carta');
const cliente2 = new Cliente('Anna', 'Neri', 'anna.neri@gmail.it', 'contanti');
const cliente3 = new Cliente('Andrea', 'Silva', 'andreasilva@outlook.it', 'carta')


//Istanza ProcessoProduzione

const processo1 = new ProcessoProduzione('smistamento', 'smista i prodotti da quelli di plastica a quelli non di plastica',[prodotto1, prodotto2, prodotto3]  );
const processo2 = new ProcessoProduzione('selezione del rifiuto', ' vengono scelti i prodotti che possono essere riciclati',[prodotto1, prodotto2, prodotto3]);
const processo3 = new ProcessoProduzione('frantumazione', ' i prodotti scelti vengono frantumati',[prodotto1, prodotto2, prodotto3] );

//Testare la logica
console.log(processo1.aggiungiProdotto(prodotto1));
console.log(cliente1.ordinaProdotto(prodotto2));
console.log(cliente3.ordinaProdotto(prodotto2));