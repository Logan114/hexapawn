
<h1 class="paragraph-P3">Hexapawn</h1>
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
<br>
<p>Libreoffice office szöveg HTML exporttal készült a readme</p>
</body>

</html>
