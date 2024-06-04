import Cella from "./cella.js";

export default class JatekTer {
    #db;
    #allapotLista;
    #elemLista;
    #lepes;
    #szuloElem;
    #kivalasztottCella;
    #feketePontszam;
    #feherPontszam;

    constructor(db, allapotLista, elemLista, szuloElem) {
        this.#db = db;
        this.#allapotLista = allapotLista;
        this.#elemLista = elemLista;
        this.#szuloElem = szuloElem;
        this.#kivalasztottCella = null;
        this.#feketePontszam = 0;
        this.#feherPontszam = 0;

        window.addEventListener('parasztKattintas', (event) => this.#cellaKattintas(event.detail));
    }

    jatekter() {
        this.#allapotLista = ["b", "b", "b", null, null, null, "w", "w", "w"];
        this.#elemLista = [];

        this.#szuloElem.empty();
        for (let i = 0; i < 9; i++) {
            const cella = new Cella(i, this.#allapotLista[i], this.#szuloElem);
            this.#elemLista.push(cella);
        }

        console.log("Kezdő állapot:", this.#allapotLista);
    }

    #cellaKattintas(detail) {
        const { id, adat } = detail;
        if (this.#kivalasztottCella === null && adat !== null) {
            this.#kivalasztottCella = id;
            console.log(`Kiválasztott bábu: ${id}, szín: ${adat}`);
        } else if (this.#kivalasztottCella !== null && (this.#allapotLista[id] === null || this.#allapotLista[id] !== this.#allapotLista[this.#kivalasztottCella])) {
            const kijeloltSzin = this.#allapotLista[this.#kivalasztottCella];
            const ellenfelSzin = kijeloltSzin === "b" ? "w" : "b";

            if (this.#isValidMove(this.#kivalasztottCella, id, kijeloltSzin, ellenfelSzin)) {
                if (this.#allapotLista[id] === ellenfelSzin) {
                    if (kijeloltSzin === "b") {
                        this.#feketePontszam++;
                    } else {
                        this.#feherPontszam++;
                    }
                }

                this.#allapotLista[id] = this.#allapotLista[this.#kivalasztottCella];
                this.#allapotLista[this.#kivalasztottCella] = null;
                this.#elemLista[id].adat = this.#allapotLista[id];
                this.#elemLista[this.#kivalasztottCella].adat = null;
                this.#kivalasztottCella = null;
                this.#pontszamok();
                this.#ellenorzes();
                console.log("Lépés után:", this.#allapotLista);
            } else {
                this.#kivalasztottCella = null;
            }
        }
    }

    #isValidMove(fromIndex, toIndex, kijeloltSzin, ellenfelSzin) {
        const rowDiff = Math.floor(toIndex / 3) - Math.floor(fromIndex / 3);
        const colDiff = (toIndex % 3) - (fromIndex % 3);

        if (kijeloltSzin === "b" && rowDiff === 1 && Math.abs(colDiff) <= 1) {
            if (colDiff === 0 && this.#allapotLista[toIndex] === null) return true;
            if (Math.abs(colDiff) === 1 && this.#allapotLista[toIndex] === ellenfelSzin) return true;
        } else if (kijeloltSzin === "w" && rowDiff === -1 && Math.abs(colDiff) <= 1) {
            if (colDiff === 0 && this.#allapotLista[toIndex] === null) return true;
            if (Math.abs(colDiff) === 1 && this.#allapotLista[toIndex] === ellenfelSzin) return true;
        }
        return false;
    }

    #pontszamok() {
        $("#feketePontszam").text(this.#feketePontszam);
        $("#feherPontszam").text(this.#feherPontszam);
    }

    #ellenorzes() {
        if (this.#feketePontszam >= 2 || this.#allapotLista.slice(0, 3).includes("w")) {
            alert("Fehér győzött!");
            this.init();
        } else if (this.#feherPontszam >= 2 || this.#allapotLista.slice(6, 9).includes("b")) {
            alert("Fekete győzött!");
            this.init();
        }
    }

    init() {
        this.#db = 0;
        this.#allapotLista = [];
        this.#elemLista = [];
        this.#lepes = 0;
        this.#feketePontszam = 0;
        this.#feherPontszam = 0;
        this.#szuloElem.empty();
        this.jatekter();
        this.#pontszamok();
    }
}
