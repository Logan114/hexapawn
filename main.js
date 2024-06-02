import JatekTer from "./jatekter.js";

$(document).ready(() => {
    const szuloElem = $(".jatekter");
    const jatekter = new JatekTer(0, [], [], szuloElem);

    jatekter.init();

    jatekter.jatekter();

    jatekter.lepesekkeresese(0);

    const győzelem = jatekter.ellenorzes();
    console.log(`Győzelmi állapot: ${győzelem}`);
});
