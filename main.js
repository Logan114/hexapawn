import JatekTer from "./jatekter.js";
    const szuloElem = $(".jatekter");
    const jatekter = new JatekTer(0, [], [], szuloElem);

    jatekter.init();

    jatekter.jatekter();

$(window).on("parasztkattintas",(event)=>{
    console.log(event.detail)
})
