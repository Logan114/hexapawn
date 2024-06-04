export default class Cella {
    #id;
    #adat;
    #divElem;

    constructor(id, adat, szuloElem) {
        this.#id = id;
        this.#adat = adat;
        this.#divElem = this.#letrehozas(szuloElem);
        this.#divElem.on("click", () => {
            this.trigger();
        });
        this.#beszuras();
    }

    trigger() {
        const event = new CustomEvent("parasztKattintas", { detail: { id: this.#id, adat: this.#adat } });
        window.dispatchEvent(event);
    }

    #letrehozas(szuloElem) {
        const div = $("<div></div>").addClass(`mezo${this.#id}`).addClass("cella");
        $(szuloElem).append(div);
        return div;
    }

    get divElem() {
        return this.#divElem;
    }

    get adat() {
        return this.#adat;
    }

    set adat(ertek) {
        this.#adat = ertek;
        this.#beszuras();
    }

    #beszuras() {
        this.#divElem.empty();
        if (this.#adat) {
            const img = $("<img>").attr("src", this.#adat === "b" ? "bp.png" : "wp.png");
            this.#divElem.append(img);
        }
    }
}
