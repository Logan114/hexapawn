import JatekTer from "./jatekter.js";

$(document).ready(() => {
    const szuloElem = $(".jatekter");
    const jatekter = new JatekTer(0, [], [], szuloElem);

    jatekter.init();
});
