import Cella from "./cella.js";
export default class JatekTer {
    #db;
    #allapotLista;
    #elemLista;
    #lepes;
    #szuloElem;

    constructor(db, allapotLista, elemLista, szuloElem) {
        this.#db = db;
        this.#allapotLista = allapotLista;
        this.#elemLista = elemLista;
        this.#szuloElem = szuloElem;
    }

    jatekter() {
        let txt = "";
        for (let i = 0; i < 9; i++) {
            if (i <= 2) {
                txt += this.parasztElhelyezes(i, "b", "wp.png");
            } else if (i >= 6) {
                txt += this.parasztElhelyezes(i, "w", "bp.jpg");
            } else {
                txt += `<div class="kocka,mezo${i}  style="border: 5px solid black;""> </div>`; //CSSre nem reagál, késő van
            }
        }
        this.#szuloElem.append(txt);
    }

    parasztElhelyezes(i, szin, kep) {
        return `<div class="kocka,mezo${i},${szin}${i}"  style="border: 5px solid black;"><img src="${kep}" alt="${szin}"></div>`;
    }

    lepesekkeresese(kivalasztottIndex) {
        console.log(`Lehetséges lépések keresése a(z) ${kivalasztottIndex} indexű bábuhoz`);
    }

    init() {
        this.#db = 0;
        this.#allapotLista = [];
        this.#elemLista = [];
        this.#lepes = 0;
        this.#szuloElem.empty();
    }

    ellenorzes() {
        console.log('Győzelem ellenőrzése');
        return 0;
    }
}
