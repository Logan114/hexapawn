export default class Cella {
    #id;
    #adat;
    #divElem;

    constructor(id, adat, szuloElem) {
        this.#id = id;
        this.#adat = adat;
        this.#divElem = this.#letrehozas(szuloElem);
    }

    #letrehozas(szuloElem) {
        const div = $('<div></div>');
        $(szuloElem).append(div);
        return div;
    }
/*
    setAllapot() {
    
    }

    szinBeallit() {
     
    }
    kattintasTrigger() {
    }
    */
}
