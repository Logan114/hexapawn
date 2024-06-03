    export default class Cella {
        #id;
        #adat;
        #divElem;

        constructor(id, adat, szuloElem) {
            this.#id = id;
            this.#adat = adat;

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
