<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 plus MathML 2.0//EN" "http://www.w3.org/Math/DTD/mathml2/xhtml-math11-f.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-US">
<!--This file was converted to xhtml by LibreOffice - see https://cgit.freedesktop.org/libreoffice/core/tree/filter/source/xslt for the code.-->

<head profile="http://dublincore.org/documents/dcmi-terms/">
<meta http-equiv="Content-Type" content="application/xhtml+xml; charset=utf-8"/>
<title xml:lang="en-US">- no title specified</title>
<meta name="DCTERMS.title" content="" xml:lang="en-US"/>

<meta name="DCTERMS.language" content="en-US" scheme="DCTERMS.RFC4646"/>
<meta name="DCTERMS.source" content="http://xml.openoffice.org/odf2xhtml"/>

<meta name="DCTERMS.issued" content="2024-06-05T23:35:15.781550420" scheme="DCTERMS.W3CDTF"/>

<meta name="DCTERMS.modified" content="2024-06-06T00:43:37.382877380" scheme="DCTERMS.W3CDTF"/>


<meta name="xsl:vendor" content="libxslt"/>
<link rel="schema.DC" href="http://purl.org/dc/elements/1.1/" hreflang="en"/>
<link rel="schema.DCTERMS" href="http://purl.org/dc/terms/" hreflang="en"/>
<link rel="schema.DCTYPE" href="http://purl.org/dc/dcmitype/" hreflang="en"/>
<link rel="schema.DCAM" href="http://purl.org/dc/dcam/" hreflang="en"/>

<style>
    table { border-collapse:collapse; border-spacing:0; empty-cells:show }
    td, th { vertical-align:top; font-size:12pt;}
    h1, h2, h3, h4, h5, h6 { clear:both;}
    ol, ul { margin:0; padding:0;}
    li { list-style: none; margin:0; padding:0;}
    span.footnodeNumber { padding-right:1em; }
    span.annotation_style_by_filter { font-size:95%; font-family:Arial; background-color:#fff000;  margin:0; border:0; padding:0;  }
    span.heading_numbering { margin-right: 0.8rem; }* { margin:0;}
    .paragraph-P1{ font-size:10pt; margin-left:0.2362in; text-indent:-0.2362in; font-family:'Liberation Serif'; writing-mode:horizontal-tb; direction:ltr;}
    .paragraph-P10{ font-size:12pt; font-family:'Liberation Serif'; writing-mode:horizontal-tb; direction:ltr;line-height:200%; }
    .paragraph-P11{ font-size:12pt; font-family:'Liberation Serif'; writing-mode:horizontal-tb; direction:ltr;line-height:200%; }
    .paragraph-P12{ font-size:12pt; font-family:'Liberation Serif'; writing-mode:horizontal-tb; direction:ltr;line-height:200%; }
    .paragraph-P13{ font-size:12pt; font-family:'Liberation Serif'; writing-mode:horizontal-tb; direction:ltr;line-height:200%; }
    .paragraph-P14{ font-size:12pt; font-family:'Liberation Serif'; writing-mode:horizontal-tb; direction:ltr;line-height:200%; text-align:center ! important; }
    .paragraph-P2{ font-size:12pt; font-family:'Liberation Serif'; writing-mode:horizontal-tb; direction:ltr;line-height:200%; }
    .paragraph-P3{ font-size:12pt; font-family:'Liberation Serif'; writing-mode:horizontal-tb; direction:ltr;line-height:200%; text-align:center ! important; }
    .paragraph-P4{ font-size:12pt; font-family:'Liberation Serif'; writing-mode:horizontal-tb; direction:ltr;line-height:200%; }
    .paragraph-P5{ font-size:12pt; font-family:'Liberation Serif'; writing-mode:horizontal-tb; direction:ltr;line-height:200%; }
    .paragraph-P6{ font-size:12pt; font-family:'Liberation Serif'; writing-mode:horizontal-tb; direction:ltr;line-height:200%; }
    .paragraph-P7{ font-size:12pt; font-family:'Liberation Serif'; writing-mode:horizontal-tb; direction:ltr;line-height:200%; }
    .paragraph-P8{ font-size:12pt; font-family:'Liberation Serif'; writing-mode:horizontal-tb; direction:ltr;line-height:200%; }
    .paragraph-P9{ font-size:12pt; font-family:'Liberation Serif'; writing-mode:horizontal-tb; direction:ltr;line-height:200%; text-align:center ! important; }
    .text-Bullet_20_Symbols{ font-family:OpenSymbol; }
    /* ODF styles with no properties representable as CSS:
    .Endnote_20_Symbol .Footnote_20_Symbol .T1 .T2  { } */
</style>
</head>

<body dir="ltr" style="max-width:8.2701in;margin-top:0.7874in; margin-bottom:0.9799in; margin-left:0.7874in; margin-right:0.7874in; ">

<p class="paragraph-P3">Hexapawn</p>
<p class="paragraph-P2"> </p>
<p class="paragraph-P4">A program az alábbi fájlszerkezetet használja:</p>
<ul><li><p class="P5" style="margin-left:0cm;"><span class="Bullet_20_Symbols" style="display:block;float:left;min-width:0cm;">•</span>index.html – A vászon melyre a main festi fel a játékteret<span class="odfLiEnd"/> </p></li><li><p class="P5" style="margin-left:0cm;"><span class="Bullet_20_Symbols" style="display:block;float:left;min-width:0cm;">•</span>main.js – A játékot inicializálja, jatekter.js-t hívja meg<span class="odfLiEnd"/> </p></li><li><p class="P5" style="margin-left:0cm;"><span class="Bullet_20_Symbols" style="display:block;float:left;min-width:0cm;">•</span>jatekter.js – A játéktér legenerálásáért felel<span class="odfLiEnd"/> </p></li><li><p class="P5" style="margin-left:0cm;"><span class="Bullet_20_Symbols" style="display:block;float:left;min-width:0cm;">•</span>cella.js – <span class="text-T1">Cellák működése, bábuk elhelyezése, játékmenet</span><span class="odfLiEnd"/> </p></li></ul><p class="paragraph-P6"> </p>
<p class="paragraph-P9">JatekTer <span class="text-T2">osztály</span></p>

<p class="paragraph-P6">Ez az osztály kezeli a játék logikáját és a játéktér megjelenítését</p>

<p class="paragraph-P6">Az alábbi adattagokkal van ellátva:</p>
<ul><li><p class="P7" style="margin-left:0cm;"><span class="Bullet_20_Symbols" style="display:block;float:left;min-width:0cm;">•</span>db: A lépések száma<span class="odfLiEnd"/> </p></li><li><p class="P7" style="margin-left:0cm;"><span class="Bullet_20_Symbols" style="display:block;float:left;min-width:0cm;">•</span>allalpotLista: A játéktér állapotát tároló lista amely minden cella állapotát tartalmazza<span class="odfLiEnd"/> </p></li><li><p class="P7" style="margin-left:0cm;"><span class="Bullet_20_Symbols" style="display:block;float:left;min-width:0cm;">•</span>ellemLista: A játéktér celláit tároló lista, amely minden cella objektumát tartalmazza.<span class="odfLiEnd"/> </p></li><li><p class="P7" style="margin-left:0cm;"><span class="Bullet_20_Symbols" style="display:block;float:left;min-width:0cm;">•</span>SzuloElem: A játéktér HTML eleme ide kerrül eltárolásra<span class="odfLiEnd"/> </p></li><li><p class="P7" style="margin-left:0cm;"><span class="Bullet_20_Symbols" style="display:block;float:left;min-width:0cm;">•</span>kiválasztottCella: Az éppen kiválasztott, azaz kattintott cella azonosítója<span class="odfLiEnd"/> </p></li><li><p class="P7" style="margin-left:0cm;"><span class="Bullet_20_Symbols" style="display:block;float:left;min-width:0cm;">•</span>feketePontszam és feherPontszam: a két játékos pontszámát tárolja<span class="odfLiEnd"/> </p></li></ul>
<p class="paragraph-P6">illetve a konstruktorron kívül az alábbi metódusokkal:</p>
<ul><li><p class="P8" style="margin-left:0cm;"><span class="Bullet_20_Symbols" style="display:block;float:left;min-width:0cm;">•</span>init: Oldal betöltésekor inicializálja a játékot, megjeleníti a játéktér celláit a jatekter metódus meghívásával és beállítja a kezdőállapotot “tiszta lappal”<span class="odfLiEnd"/> </p></li><li><p class="P8" style="margin-left:0cm;"><span class="Bullet_20_Symbols" style="display:block;float:left;min-width:0cm;">•</span>jatekter: Létrehozza a játéktér celláit és inicializálja azok állapotát. Ez a metódus felel a játéktér kirajzolásáért és a bábuk elhelyezéséért<span class="odfLiEnd"/> </p></li><li><div class="P8" style="margin-left:0cm;"><span class="Bullet_20_Symbols" style="display:block;float:left;min-width:0cm;">•</span>#cellaKattintás<span class="Footnote_20_anchor" title="Footnote: AI segítségét kellett hozzá használnom"><a href="#ftn0" id="body_ftn0">1</a></span> Kezeli a celllákra történő kattintásokat, illetve ez kezeli az eseteket bábura történő kattintásoknál.<span class="odfLiEnd"/> </div></li><li><p class="P10" style="margin-left:0cm;"><span class="Bullet_20_Symbols" style="display:block;float:left;min-width:0cm;">•</span>#updatePontszamok: frissíti a pontszámokat, az adott játékosok pontjai alapján<span class="odfLiEnd"/> </p></li><li><p class="P10" style="margin-left:0cm;"><span class="Bullet_20_Symbols" style="display:block;float:left;min-width:0cm;">•</span>#ellenörzés: a győzelmi feltételeknek megfeleően ellenörzi a játék állapotát. Ellenörzihogy egy bábu átjutott e az ellenfél túloldalárra, vagy ha egy játékos az ellenfél legalább két bábuját kiütötte. A játék végéhez vezet és alerttel jelzi ki a győzelmet<span class="odfLiEnd"/> </p></li></ul><p class="paragraph-P11"> </p>
<p class="paragraph-P14">Cella osztály</p>

<p class="paragraph-P11">Ez az osztály kezeli az egyes cellák működését a játéktéren</p>

<p class="paragraph-P11">Az alábbi adattagokkal van ellátva:</p>
<ul><li><p class="P12" style="margin-left:0cm;"><span class="Bullet_20_Symbols" style="display:block;float:left;min-width:0cm;">•</span>id: A cella azonosítója<span class="odfLiEnd"/> </p></li><li><div class="P12" style="margin-left:0cm;"><span class="Bullet_20_Symbols" style="display:block;float:left;min-width:0cm;">•</span>adat: A cella állapota. Lehet üres (null), fekete (b) vagy fehér (w)<span class="Footnote_20_anchor" title="Footnote: A színeket egy darab betűvel akartam jelölni, mivel a Fehér és a Fekete ugyanúgy kezdődik maradtam az angol Black és White-nál"><a href="#ftn1" id="body_ftn1">2</a></span><span class="odfLiEnd"/> </div></li></ul>
<p class="paragraph-P11">Illetve az alábbi metódusokkal a konstruktor kivételével:</p>
<ul><li><p class="P13" style="margin-left:0cm;"><span class="Bullet_20_Symbols" style="display:block;float:left;min-width:0cm;">•</span>#létrehozas: létrehozza a cella HTML elemét, hozzáadja a szülő elemhez és visszaadja a létrehozott ddiv elemet. Ez a metódus a cella megjelenítéséért felelős<span class="odfLiEnd"/> </p></li><li><p class="P13" style="margin-left:0cm;"><span class="Bullet_20_Symbols" style="display:block;float:left;min-width:0cm;">•</span>trigger(): Kattintási eseményt vált ki, ez a cella azonosítóját adja vissza<span class="odfLiEnd"/> </p></li><li><p class="P13" style="margin-left:0cm;"><span class="Bullet_20_Symbols" style="display:block;float:left;min-width:0cm;">•</span>getDivElem,getAdat<span class="odfLiEnd"/> </p></li><li><p class="P13" style="margin-left:0cm;"><span class="Bullet_20_Symbols" style="display:block;float:left;min-width:0cm;">•</span>setAdat: Beállitja a cella új állapotát, majd frissíti a cella megjelenését. Ez a setter metódus lehetővé teszi a cella állapotának megváltozását<span class="odfLiEnd"/> </p></li><li><p class="P13" style="margin-left:0cm;"><span class="Bullet_20_Symbols" style="display:block;float:left;min-width:0cm;">•</span>#updateView: Frissíti a cella megjelenését az állapota alapján<span class="odfLiEnd"/> </p></li></ul><p class="paragraph-P11"> </p>
<p class="paragraph-P1"><span class="footnodeNumber"><a class="Footnote_20_Symbol" id="ftn0" href="#body_ftn0">1</a></span>AI segítségét kellett hozzá használnom</p>

<p class="paragraph-P1"><span class="footnodeNumber"><a class="Footnote_20_Symbol" id="ftn1" href="#body_ftn1">2</a></span>A színeket egy darab betűvel akartam jelölni, mivel a Fehér és a Fekete ugyanúgy kezdődik maradtam az angol Black és White-nál</p>
</body>

</html>
