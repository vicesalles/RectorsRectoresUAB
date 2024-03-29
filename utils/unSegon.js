// Aquesta funció afegeix un segon al principi dels videos

const tempsVells = [
  {
      id: "ferrer",      
      nom:"Lluís",
      cognoms:"Ferrer Caubet",
      anys:[2002,2009],  
      yt: "esbrXKHGrl8",
        events: [
          {
            id:0,
            sec: 5,
            txt: "Primer rector escollit en vigència de la LOU",
            tags:["LOU","PP","marc legal"]
          },{
            id:1,
            sec: 84,
            txt: "Conseqüències de l'aprovació de la LOU",
            tags:["LOU","conseqüències","marc legal"]
          },{
            id:2,
            sec: 184,
            txt: "Modificacions del marc legal",
            tags:["LOU","LUC","marc legal"]
          },{
            id:3,
            sec: 243,
            txt: "Aprovació de nous estatuts",
            tags:["estatuts","LOU","marc legal"]
          },{
            id:4,
            sec: 323,
            txt: "Aprovació d'un nou pla director",
            tags:["pla director","canvis"]
          },{
            id:5,
            sec: 486,
            txt: "Interacció amb la Conselleria d'Universitats",
            tags:["conselleria","universitats","Carles Solà","Generalitat"]
          },{
            id:6,
            sec: 569,
            txt: "Adaptació al Pla Bolonya",
            tags:["Pla Bolonya","homologació","Espai Europeu","reforma","universitats"]
          },{
            id:7,
            sec: 946,
            txt: "Pla pilot de titulacions adaptades",
            tags:["titulacions","reestructuració","flexibilitat","pla pilot"]
          },{
            id:8,
            sec: 1211,
            txt: "Noves titulacions",
            tags:["innovació","titulacions"]
          },{
            id:9,
            sec: 1389,
            txt: "Creació de la facultat de Biociències i reestructuració d'altres facultats",
            tags:["facultats","Biociències","reestructuració"]
          },{
            id:10,
            sec: 1714,
            txt: "Ampliació de la unitat docent Germans Trias i Pujol",
            tags:["unitat docent","Can Ruti","Germans Trias i Pujol"]
          },{
            id:11,
            sec: 1804,
            txt: "Aliança 4 Universitats",
            tags:["internacionalització","Aliança 4 Universitats"]
          },{
            id:12,
            sec: 2140,
            txt: "Programa Study Abroad",
            tags:["internacionalització","intercanvi","Study Abroad","estudiants"]
          },{
            id:13,
            sec: 2220,
            txt: "Impulsos a la recerca",
            tags:["recerca","innovació"]
          },{
            id:14,
            sec: 2422,
            txt: "Nous centres de recerca",
            tags:["recerca","CReSA","campus"]
          },{
            id:15,
            sec: 2509,
            txt: "Parc de Recerca i Esfera UAB",
            tags:["recerca","Esfera UAB","campus"]
          },{
            id:16,
            sec: 2855,
            txt: "Fòrum de la Recerca UAB 2006",
            tags:["recerca","fòrum"]
          },{
            id:17,
            sec: 3016,
            txt: "Creació de l'Observatori per la Igualtat",
            tags:["observatori","igualtat","drets","gènere","campus"]
          },{
            id:18,
            sec: 3220,
            txt: "Primer acte institucional del Dia de la Dona",
            tags:["institucional","dona","8M","transparència","drets","igualtat"]
          },{
            id:19,
            sec: 3306,
            txt: "Campus Ítaca",
            tags:["Campus Ítaca","integració","igualtat","talent"]
          },{
            id:20,
            sec: 3688,
            txt: "Els anys temàtics",
            tags:["cultura","participació","campus"]
          },{
            id:21,
            sec: 3861,
            txt: "Compromís amb el medi ambient",
            tags:["compromís","medi ambient","sostenibilitat","campus"]
          },{
            id:22,
            sec: 4037,
            txt: "Moviment de protesta contra la guerra d'Iraq",
            tags:["protestes","mobilitzacions","guerra d'Iraq","campus"]
          },{
            id:23,
            sec: 4162,
            txt: "Els doctors 'honoris causa'",
            tags:["doctors","honoris causa","reconeixement","talent"]
          },{
            id:24,
            sec: 4317,
            txt: "Ocupacions de les facultats",
            tags:["ocupacions","protestes","vaga","estudiants","Pla Bolonya","campus"]
          },{
            id:25,
            sec: 4538,
            txt: "Balanç del mandat",
            tags:["balanç","mandat","rector"]
          }
        ]
      }
 ,
  {
    id: "pascual",
    nom:"Ramon",
    cognoms:"Pascual de Sans",   
    anys:[1986,1990],
    yt: "cwQgjq0mCdE",
    events: [
      {
        id:0,
        sec: 5,
        txt: "Breu període com a rector en funcions (1980)",
        tags:["rector","Josep Laporte","Serra Ramoneda"]
      },{
        id:1,
        sec: 68,
        txt: "Director general d'Ensenyament Universitari en el primer govern Pujol",
        tags:["política","Generalitat","Jordi Pujol"]
      },{
        id:2,
        sec: 221,
        txt: "Reformes en l'estructura de la UAB",
        tags:["canvis","reformes","estructura","LRU"]
      },{
        id:3,
        sec: 304,
        txt: "Augment notable del finançament per a les universitats",
        tags:["finançament","universitats","progrés"]
      },{
        id:4,
        sec: 458,
        txt: "Noves facultats",
        tags:["facultat","polítiques","campus Sabadell","progrés","campus"]
      },{
        id:5,
        sec: 603,
        txt: "Un pressupost 'expansiu'",
        tags:["finançament","pressupost","recerca","biblioteques","rehabilitació","progrés"]
      },{
        id:6,
        sec: 841,
        txt: "Nous centres de recerca",
        tags:["recerca","CSIC","CNM","consorcis","campus"]
      },{
        id:7,
        sec: 1022,
        txt: "Impuls a les unitats docents hospitalàries",
        tags:["unitats docents","Germans Trias","Hospital del Mar","Sant Pau"]
      },{
        id:8,
        sec: 1170,
        txt: "El programa Erasmus",
        tags:["Erasmus","intercanvi","Unió Europea","estudiants","internacionalització"]
      },{
        id:9,
        sec: 1265,
        txt: "Orígens del sincrotró Alba",
        tags:["sincrotró Alba","accelerador de partícules","CELLS","CERN"]
      },{
        id:10,
        sec: 1531,
        txt: "El sincrotró dins del campus, una ubicació inviable",
        tags:["sincrotró Alba","accelerador de partícules","campus","CELLS"]
      },{
        id:11,
        sec: 1650,
        txt: "Protestes estudiantils",
        tags:["protestes","mobilitzacions","estudiants","servei social substitutori","ocupació","rectorat"]
      },{
        id:12,
        sec: 1819,
        txt: "Condicions laborals del PAS",
        tags:["condicions laborals","personal","PAS"]
      },{
        id:13,
        sec: 2010,
        txt: "Celebració del 20è aniversari",
        tags:["20è aniversari","UAM","festa major","exposició","campus"]
      },{
        id:14,
        sec: 2132,
        txt: "Introducció de la Festa Major",
        tags:["festa major","campus","cultura"]
      },{
        id:15,
        sec: 2174,
        txt: "Efectes de la fundació d'altres universitats catalanes",
        tags:["UDL","UDG","URV","UPF","URL","universitats"]
      },{
        id:16,
        sec: 2393,
        txt: "Balanç del mandat",
        tags:["balanç","mandat","rector"]
      },{
        id:17,
        sec: 2489,
        txt: "Bons records del mandat",
        tags:["records","urbanització","campus","reformes","biblioteques","recerca","mandat"]
      }
    ]
  },{
    id: "valles",
    nom:"Josep Maria",
    cognoms:"Vallès Casadevall",        
    anys:[1986,1990],
    yt: "3-BIS1HEtrQ",
    events: [
      {
        id:0,
        sec: 5,
        txt: "Les adversitats de l'inici del mandat",
        tags:["finançament","docència","mandat"]
      },{
        id:1,
        sec: 130,
        txt: "Noves facultats",
        tags:["polítiques","sociologia","traducció","educació","facultats","campus","progrés"]
      },{
        id:2,
        sec: 410,
        txt: "Noves titulacions",
        tags:["titulacions","innovació","docència"]
      },{
        id:3,
        sec: 515,
        txt: "Una forta restricció financera",
        tags:["finançament","crisi","retallades","pressupost"]
      },{
        id:4,
        sec: 597,
        txt: "Edificació de la Vila Universitària",
        tags:["Vila Universitària","residència","estudiants","policia"]
      },{
        id:5,
        sec: 904,
        txt: "Consolidació dels centres de recerca",
        tags:["recerca","CREAF","CVC"]
      },{
        id:6,
        sec: 981,
        txt: "Gestió de la recerca",
        tags:["recerca","gestió"]
      },{
        id:7,
        sec: 1030,
        txt: "Conveni amb l'Hospital Parc Taulí",
        tags:["conveni","Parc Taulí","Sabadell"]
      },{
        id:8,
        sec: 1163,
        txt: "Desenvolupament de la xarxa de biblioteques",
        tags:["biblioteques","xarxa","coneixement","campus","progrés"]
      },{
        id:9,
        sec: 1296,
        txt: "Revisió integral dels plans d'estudis",
        tags:["reformes","plans d'estudis","docència"]
      },{
        id:10,
        sec: 1381,
        txt: "Reducció de les llicenciatures de 5 a 4 anys",
        tags:["reformes","llicenciatures","titulacions"]
      },{
        id:11,
        sec: 1701,
        txt: "Presencia de la UAB als rankings internacionals",
        tags:["rankings","classificació","qualitat"]
      },{
        id:12,
        sec: 1729,
        txt: "Creació de Cultura en Viu i origen de la Fundació Autònoma Solidària",
        tags:["cultura","FAS","voluntariat","campus","igualtat"]
      },{
        id:13,
        sec: 1931,
        txt: "Una matrícula un 0,5% més cara per millorar la docència",
        tags:["matrícula","cost","docència","ocupació","estudiants","protestes"]
      },{
        id:14,
        sec: 2294,
        txt: "Reimpuls de les publicacions informatives de la UAB",
        tags:["publicacions","comunicació"]
      },{
        id:15,
        sec: 2415,
        txt: "Balanç del mandat",
        tags:["balanç","mandat","rector"]
      },{
        id:16,
        sec: 2667,
        txt: "El lligam personal amb la UAB",
        tags:["records","vincles"]
      }
    ]
  },
  {
    id: "serra",
    nom:"Antoni",
    cognoms:"Serra Ramoneda",
    anys:[1980,1985],
    yt: "bSXbW2a4IIk",
    events: [
      {
        id:0,
        sec: 5,
        txt: "Secretari de la Comissió Promotora de la UAB",
        tags:["comissió promotora","fundació","UAB"]
      },{
        id:1,
        sec: 148,
        txt: "Participació en el Manifest de Bellaterra (1975)",
        tags:["Manifest de Bellaterra","UAB"]
      },{
        id:2,
        sec: 304,
        txt: "Entrega de la medalla UAB a l'exrector Josep Laporte",
        tags:["medalla","UAB","Josep Laporte","rector","fundació","homenatge"]
      },{
        id:3,
        sec: 326,
        txt: "Efectes de l'aprovació de la Llei de Reforma Universitària (LRU)",
        tags:["LRU","reformes","marc legal"]
      },{
        id:4,
        sec: 449,
        txt: "Estabilització del personal numerari",
        tags:["personal numerari","docència","condicions laborals"]
      },{
        id:5,
        sec: 535,
        txt: "Aprovació de nous estatuts adaptats a la LRU",
        tags:["estatuts","LRU","marc legal"]
      },{
        id:6,
        sec: 567,
        txt: "Disconformitat dels estudiants i el PAS amb els nous estatuts",
        tags:["protestes","estatuts","marc legal","estudiants","PAS"]
      },{
        id:7,
        sec: 597,
        txt: "Creixement progressiu de la universitat",
        tags:["creixement","progrés","campus","estudiants","professors","marc legal","protestes","tren","FGC"]
      },{
        id:8,
        sec: 847,
        txt: "Creació de la facultat de Veterinària",
        tags:["facultat","veterinària","conferència de rectors","campus"]
      },{
        id:9,
        sec: 1025,
        txt: "Inauguració del pavelló poliesportiu",
        tags:["inauguració","poliesportiu","campus","esports"]
      },{
        id:10,
        sec: 1110,
        txt: "El procés d'informatització",
        tags:["informatització","modernització","ordinadors","càlcul"]
      },{
        id:11,
        sec: 1224,
        txt: "Novetats acadèmiques",
        tags:["innovació","titulacions","facultats","ciències de la informació","traducció"]
      },{
        id:12,
        sec: 1334,
        txt: "Projecte d'una sola biblioteca a l'edifici del rectorat",
        tags:["projecte","biblioteques","rectorat","coneixement"]
      },{
        id:13,
        sec: 1422,
        txt: "Creació de l'Institut de Ciències de l'Educació (ICE)",
        tags:["ICE","Josep Laporte","formació","educació","innovació","coneixement"]
      },{
        id:14,
        sec: 1458,
        txt: "Nous centres de recerca",
        tags:["centres","recerca","CED","CNM","microelectrònica","IAE","CSIC","progrés"]
      },{
        id:15,
        sec: 1599,
        txt: "Relació amb la Direcció General d'Ensenyament Universitari de Ramon Pascual",
        tags:["Ramon Pascual","Generalitat","Jordi Pujol"]
      },{
        id:16,
        sec: 1615,
        txt: "Converses sobre internacionalització",
        tags:["internacionalització","convenis"]
      },{
        id:17,
        sec: 1678,
        txt: "Protestes estudiantils",
        tags:["LRU","mobilitzacions","protestes","estudiants","ocupació","rectorat","campus"]
      },{
        id:18,
        sec: 1813,
        txt: "Reimpuls de l'activitat cultural",
        tags:["cultura","campus","aula de teatre","cor de la UAB"]
      },{
        id:19,
        sec: 1868,
        txt: "Gran èxit del concert de Lluís Llach",
        tags:["concert","Lluís Llach","cultura","música","campus"]
      },{
        id:20,
        sec: 1921,
        txt: "Balanç del mandat",
        tags:["balanç","mandat","rector"]
      },{
        id:21,
        sec: 2001,
        txt: "Records del cop d'Estat del 23-F",
        tags:["anècdota","records","cop d'Estat","23-F","Tejero","marxa sobre Cerdanyola","campus"]
      }
    ]
  },
  {
    id:"sola", 
    nom:"Carles",
    cognoms:"Solà Ferrando",      
    anys:[1994,2002],      
    yt: "vaYZM82tkT8",
    events: [
      {
        id:0,
        sec: 5,
        txt: "Fundació de l'Escola d'Enginyeria",
        tags:["escola d'enginyeria","facultats","campus","progrés"]
      },{
        id:1,
        sec: 85,
        txt: "Innovacions acadèmiques",
        tags:["titulacions","innovació","progrés"]
      },{
        id:2,
        sec: 286,
        txt: "Escola de doctorat i de formació contínua",
        tags:["escola de doctorat","formació","campus"]
      },{
        id:3,
        sec: 384,
        txt: "Recursos per a la recerca",
        tags:["recerca","finançament"]
      },{
        id:4,
        sec: 511,
        txt: "Nous centres de recerca",
        tags:["recerca","centres","campus","progrés"]
      },{
        id:5,
        sec: 643,
        txt: "Constitució de l'ICREA",
        tags:["recerca","ICREA","talent","excel·lència","internacionalització"]
      },{
        id:6,
        sec: 720,
        txt: "Tensions pressupostàries",
        tags:["finançament","pressupost","tensions"]
      },{
        id:7,
        sec: 1020,
        txt: "Informe Universitat 2000",
        tags:["informe","estudi","finançament","PP","protestes","estudiants"] 
      },{
        id:8,
        sec: 1252,
        txt: "Llei Orgànica d'Universitats (LOU)",
        tags:["LOU","PP","universitats","marc legal"]
      },{
        id:9,
        sec: 1330,
        txt: "Crisi institucional: la visita d'Aznar",
        tags:["crisi","Aznar","càrregues","policia","estudiants","protestes","campus"]
      },{
        id:10,
        sec: 1699,
        txt: "Inauguració de les columnes de la UAB",
        tags:["columnes","monument","campus","UAB","Andreu Alfaro"]
      },{
        id:11,
        sec: 1932,
        txt: "El camí cap al Pla Bolonya",
        tags:["Pla Bolonya","marc legal","reforma","Espai europeu","ensenyament","universitats"]
      },{
        id:12,
        sec: 2165,
        txt: "La universitat amb més programes d'intercanvi europeus de tot l'Estat",
        tags:["intercanvi","mobilitat","internacionalització","estudiants"]
      },{
        id:13,
        sec: 2350,
        txt: "Creació del programa Universitat a l'Abast",
        tags:["Universitat a l'Abast","formació","integració","igualtat"]
      },{
        id:14,
        sec: 2399,
        txt: "Nous espais per a biblioteques",
        tags:["biblioteques","coneixement","campus","estudiants","progrés"]
      },{
        id:15,
        sec: 2458,
        txt: "Els doctors 'honoris causa'",
        tags:["doctors","honoris causa","reconeixement","talent"]
      },{
        id:16,
        sec: 2496,
        txt: "Connexió ferroviària amb Sabadell",
        tags:["connexió","Sabadell","transport","tren","FGC","campus"]
      },{
        id:17,
        sec: 2701,
        txt: "Accident mortal a França d'estudiants de Psicologia",
        tags:["accident","estudiants","psicologia","França"]
      },{
        id:18,
        sec: 2720,
        txt: "Balanç del mandat",
        tags:["balanç","mandat","rector"]
      },{
        id:19,
        sec: 2847,
        txt: "L'anècdota dels migrants",
        tags:["anècdota","records","migrants"]
      }
    ]
 },
  {
    id: "ripoll",
    nom:"Ana",
    cognoms:"Ripoll Aracil",  
    anys:[2009,2012], 
    yt: "rK62UIZOvGM",
    events: [
      {
        id:0,
        sec: 5,
        txt: "Vicerectora de Professorat durant el mandat de Lluís Ferrer",
        tags:["personal acadèmic","professorat","associats","becaris","Lluís Ferrer"]
      },{
        id:1,
        sec: 246,
        txt: "La primera dona rectora de la UAB",
        tags:["dona","rectora","igualtat"]
      },{
        id:2,
        sec: 363,
        txt: "Programació acadèmica en el marc de la consolidació de l'EEES",
        tags:["planificació","titulacions","anglès","internacionalització","mobilitat","Pla Bolonya","Espai Europeu"]
      },{
        id:3,
        sec: 360,
        txt: "Noves titulacions en anglès",
        tags:["titulacions","Pla Bolonya","graus","màsters","anglès","internacionalització","progrés"]
      },{
        id:4,
        sec: 440,
        txt: "Constitució del Consell d'Estudiants",
        tags:["consell d'estudiants","participació","alumnat"]
      },{
        id:5,
        sec: 535,
        txt: "Modalitat de matrícula per via lenta",
        tags:["matrícula","via lenta","estudiants","planificació","feina","temps parcial","igualtat"]
      },{
        id:6,
        sec: 554,
        txt: "Creació de les beques-salari Ítaca",
        tags:["beques","Ítaca","estudiants","talent","igualtat"]
      },{
        id:7,
        sec: 573,
        txt: "UAB Campus d'Excel·lència Internacional",
        tags:["campus","excel·lència","internacionalització","Universitat de Corea","recerca","Ortelius","B-30","coneixement","innovació"]
      },{
        id:8,
        sec: 771,
        txt: "Creació de l'Escola d'Enginyeria i la Facultat d'Economia i Empresa",
        tags:["noves facultats","enginyeria","economia","empresa","Pla Bolonya","progrés","campus"]
      },{
        id:9,
        sec: 1135,
        txt: "Nous centres de recerca",
        tags:["centres","recerca","projecte Melissa","CRAG","sincrotró Alba","Ortelius","internacionalització","progrés","campus"]
      },{
        id:10,
        sec: 1293,
        txt: "Les relacions amb Àsia i Amèrica Llatina",
        tags:["internacionalització","recerca","titulacions","Àsia","Corea","Amèrica Llatina","Lluís Ferrer"]
      },{
        id:11,
        sec: 1360,
        txt: "Crisi financera global i restriccions pressupostàries",
        tags:["crisi financera","finançament","retallades","pressupost"]
      },{
        id:12,
        sec: 1557,
        txt: "Protestes estudiantils",
        tags:["estudiants","protestes","mobilitzacions","campus"]
      },{
        id:13,
        sec: 1594,
        txt: "Balanç del mandat",
        tags:["balanç","mandat","rectora","crisi financera"]
      },{
        id:14,
        sec: 1834,
        txt: "L'anècdota",
        tags:["anècdota","records","Lluís Ferrer"]
      },{
        id:15,
        sec: 1930,
        txt: "Objectiu prioritari: tenir el millor professorat",
        tags:["professorat","personal acadèmic","qualitat","talent"]
      }
    ]
  },
  {
    id: "sancho",
    nom:"Ferran",
    cognoms:"Sancho Pifarré",  
    anys:[2012,2016], 
    yt: "Ev5nFBN9xHI",
    events: [
      {
        id:0,
        sec: 5,
        txt: "Primer rector alumni de la UAB",
        tags:["rector","alumni","exalumne"]
      },{
        id:1,
        sec: 29,
        txt: "Un aspirant a periodista que va acabar estudiant Economia",
        tags:["anècdota","records","periodisme","economia"]
      },{
        id:2,
        sec: 143,
        txt: "Vicerector durant el mandat de Carles Solà",
        tags:["vicerector","Carles Solà"]
      },{
        id:3,
        sec: 207,
        txt: "Noves titulacions",
        tags:["titulacions","graus","innovació","progrés"]
      },{
        id:4,
        sec: 327,
        txt: "Impuls a la formació en anglès",
        tags:["formació","anglès"]
      },{
        id:5,
        sec: 380,
        txt: "L'aposta pels MOOC amb la plataforma Coursera",
        tags:["cursos online","formació","Coursera","coneixement","participació"]
      },{
        id:6,
        sec: 456,
        txt: "El programa UAB Emprèn",
        tags:["UAB Emprèn","emprenedoria","coneixement","campus"]
      },{
        id:7,
        sec: 511,
        txt: "El Projecte B30",
        tags:["Projecte B30","Àmbit 30","recerca","innovació","campus"]
      },{
        id:8,
        sec: 572,
        txt: "Integració de la UAB a la YERUN",
        tags:["YERUN","universitats","Europa","recerca","qualitat"]
      },{
        id:9,
        sec: 676,
        txt: "Altres iniciatives d'internacionalització de la UAB",
        tags:["internacionalització","COFUND","recursos","talent"]
      },{
        id:10,
        sec: 742,
        txt: "Model de dedicació variable del PDI",
        tags:["dedicació variable","PDI","docència","recerca","condicions laborals"]
      },{
        id:11,
        sec: 880,
        txt: "Restriccions pressupostàries durant la crisi financera",
        tags:["retallades","pressupost","crisi financera","finançament"]
      },{
        id:12,
        sec: 958,
        txt: "La polèmica taxa de reposició d'efectius",
        tags:["taxa de reposició","places","personal","condicions laborals","marc legal"]
      },{
        id:13,
        sec: 1109,
        txt: "Manca de relleu generacional",
        tags:["relleu generacional","envelliment","jubilació","personal","condicions laborals"]
      },{
        id:14,
        sec: 1140,
        txt: "Mesures per pal·liar la precarització del personal",
        tags:["mesures","precarització","personal","condicions laborals"]
      },{
        id:15,
        sec: 1206,
        txt: "Creació del programa de beques Finestreta",
        tags:["beques","Finestreta","ajudes","igualtat"]
      },{
        id:16,
        sec: 1276,
        txt: "Les beques Equitat i l'augment del 66% en les taxes",
        tags:["beques","Equitat","taxes","ajudes","igualtat","marc legal"]
      },{
        id:17,
        sec: 1357,
        txt: "Protestes estudiantils",
        tags:["protestes","estudiants","mobilitzacions","vaga","campus"]
      },{
        id:18,
        sec: 1407,
        txt: "Ocupació del rectorat",
        tags:["ocupació","rectorat","protestes","mobilitzacions","estudiants","campus"]
      },{
        id:19,
        sec: 1490,
        txt: "Conseqüències de la crisi financera per a la recerca",
        tags:["crisi financera","retallades","finançament","pressupost","recerca"]
      },{
        id:20,
        sec: 1603,
        txt: "Èxit de la recerca malgrat les adversitats",
        tags:["recerca","talent","èxit","adversitats"]
      },{
        id:21,
        sec: 1702,
        txt: "Noves instal·lacions per a recerca",
        tags:["recerca","inauguració","ICTA","campus","progrés"]
      },{
        id:22,
        sec: 1915,
        txt: "El Campus Saludable i Sostenible (SiS)",
        tags:["campus","medi ambient","sostenibilitat"]
      },{
        id:23,
        sec: 1984,
        txt: "Recuperació de la Festa Major",
        tags:["Festa Major","campus","cultura"]
      },{
        id:24,
        sec: 2058,
        txt: "Implantació del vot electrònic a les eleccions",
        tags:["eleccions","rectorat","vot electrònic","participació"]
      },{
        id:25,
        sec: 2193,
        txt: "Els Doctors Honoris Causa",
        tags:["doctors","honoris causa","reconeixement","talent"]
      },{
        id:26,
        sec: 2335,
        txt: "L'anècdota dels representants de la Universitat de Corea",
        tags:["anècdota","records","Universitat de Corea","internacionalització"]
      },{
        id:27,
        sec: 2395,
        txt: "Balanç del mandat",
        tags:["balanç","mandat","rector"]
      }
    ]
  }
]

const videos = [ { id: 'ferrer',
nom: 'Lluís',
cognoms: 'Ferrer Caubet',
anys: [ 2002, 2009 ],
yt: 'esbrXKHGrl8',
events:
 [ { id: 0,  sec: 6,  txt: 'Primer rector escollit en vigència de la LOU',  tags: [ 'LOU', 'PP', 'marc legal' ] },
   { id: 1,  sec: 86,  txt: 'Conseqüències de l\'aprovació de la LOU',  tags: [ 'LOU', 'conseqüències', 'marc legal' ] },
   { id: 2,  sec: 187,  txt: 'Modificacions del marc legal',  tags: [ 'LOU', 'LUC', 'marc legal' ] },
   { id: 3,  sec: 247,  txt: 'Aprovació de nous estatuts',  tags: [ 'estatuts', 'LOU', 'marc legal' ] },
   { id: 4,  sec: 328,  txt: 'Aprovació d\'un nou pla director',  tags: [ 'pla director', 'canvis' ] },
   { id: 5,  sec: 492,  txt: 'Interacció amb la Conselleria d\'Universitats',  tags:   [ 'conselleria', 'universitats', 'Carles Solà', 'Generalitat' ] },
   { id: 6,  sec: 576,  txt: 'Adaptació al Pla Bolonya',  tags:   [ 'Pla Bolonya',     'homologació',     'Espai Europeu',     'reforma',     'universitats' ] },
   { id: 7,  sec: 954,  txt: 'Pla pilot de titulacions adaptades',  tags:   [ 'titulacions', 'reestructuració', 'flexibilitat', 'pla pilot' ] },
   { id: 8,  sec: 1220,  txt: 'Noves titulacions',  tags: [ 'innovació', 'titulacions' ] },
   { id: 9,  sec: 1399,  txt:  'Creació de la facultat de Biociències',  tags: [ 'facultats', 'Biociències', 'reestructuració' ] },
   { id: 10,  sec: 1725,  txt: 'Ampliació de la unitat docent Germans Trias i Pujol',  tags: [ 'unitat docent', 'Can Ruti', 'Germans Trias i Pujol' ] },
   { id: 11,  sec: 1816,  txt: 'Aliança 4 Universitats',  tags: [ 'internacionalització', 'Aliança 4 Universitats' ] },
   { id: 12,  sec: 2153,  txt: 'Programa Study Abroad',  tags:   [ 'internacionalització',     'intercanvi',     'Study Abroad',     'estudiants' ] },
   { id: 13,  sec: 2234,  txt: 'Impulsos a la recerca',  tags: [ 'recerca', 'innovació' ] },
   { id: 14,  sec: 2437,  txt: 'Nous centres de recerca',  tags: [ 'recerca', 'CReSA', 'campus' ] },
   { id: 15,  sec: 2525,  txt: 'Parc de Recerca i Esfera UAB',  tags: [ 'recerca', 'Esfera UAB', 'campus' ] },
   { id: 16,  sec: 2872,  txt: 'Fòrum de la Recerca UAB 2006',  tags: [ 'recerca', 'fòrum' ] },
   { id: 17,  sec: 3034,  txt: 'Creació de l\'Observatori per la Igualtat',  tags: [ 'observatori', 'igualtat', 'drets', 'gènere', 'campus' ] },
   { id: 18,  sec: 3239,  txt: 'Primer acte institucional del Dia de la Dona',  tags:   [ 'institucional',     'dona',     '8M',     'transparència',     'drets',     'igualtat' ] },
   { id: 19,  sec: 3326,  txt: 'Campus Ítaca',  tags: [ 'Campus Ítaca', 'integració', 'igualtat', 'talent' ] },
   { id: 20,  sec: 3709,  txt: 'Els anys temàtics',  tags: [ 'cultura', 'participació', 'campus' ] },
   { id: 21,  sec: 3883,  txt: 'Compromís amb el medi ambient',  tags: [ 'compromís', 'medi ambient', 'sostenibilitat', 'campus' ] },
   { id: 22,  sec: 4060,  txt: 'Moviment de protesta contra la guerra d\'Iraq',  tags:   [ 'protestes', 'mobilitzacions', 'guerra d\'Iraq', 'campus' ] },
   { id: 23,  sec: 4186,  txt: 'Els doctors \'honoris causa\'',  tags: [ 'doctors', 'honoris causa', 'reconeixement', 'talent' ] },
   { id: 24,  sec: 4342,  txt: 'Ocupacions de les facultats',  tags:   [ 'ocupacions',     'protestes',     'vaga',     'estudiants',     'Pla Bolonya',     'campus' ] },
   { id: 25,  sec: 4564,  txt: 'Balanç del mandat',  tags: [ 'balanç', 'mandat', 'rector' ] } ] },
{ id: 'pascual',
nom: 'Ramon',
cognoms: 'Pascual de Sans',
anys: [ 1986, 1990 ],
yt: 's0Zs2G1MTt0',
events:
 [ { id: 0,  sec: 6,  txt: 'Breu període com a rector en funcions (1980)',  tags: [ 'rector', 'Josep Laporte', 'Serra Ramoneda' ] },
   { id: 1,  sec: 70,  txt:  'Director general d\'Ensenyament Universitari en el primer govern Pujol',  tags: [ 'política', 'Generalitat', 'Jordi Pujol' ] },
   { id: 2,  sec: 224,  txt: 'Reformes en l\'estructura de la UAB',  tags: [ 'canvis', 'reformes', 'estructura', 'LRU' ] },
   { id: 3,  sec: 308,  txt: 'Augment notable del finançament per a les universitats',  tags: [ 'finançament', 'universitats', 'progrés' ] },
   { id: 4,  sec: 463,  txt: 'Noves facultats',  tags:   [ 'facultat',     'polítiques',     'campus Sabadell',     'progrés',     'campus' ] },
   { id: 5,  sec: 609,  txt: 'Un pressupost \'expansiu\'',  tags:   [ 'finançament',     'pressupost',     'recerca',     'biblioteques',     'rehabilitació',     'progrés' ] },
   { id: 6,  sec: 848,  txt: 'Nous centres de recerca',  tags: [ 'recerca', 'CSIC', 'CNM', 'consorcis', 'campus' ] },
   { id: 7,  sec: 1030,  txt: 'Impuls a les unitats docents hospitalàries',  tags:   [ 'unitats docents',     'Germans Trias',     'Hospital del Mar',     'Sant Pau' ] },
   { id: 8,  sec: 1179,  txt: 'El programa Erasmus',  tags:   [ 'Erasmus',     'intercanvi',     'Unió Europea',     'estudiants',     'internacionalització' ] },
   { id: 9,  sec: 1275,  txt: 'Orígens del sincrotró Alba',  tags:   [ 'sincrotró Alba', 'accelerador de partícules', 'CELLS', 'CERN' ] },
   { id: 10,  sec: 1542,  txt: 'El sincrotró dins del campus, una ubicació inviable',  tags:   [ 'sincrotró Alba',     'accelerador de partícules',     'campus',     'CELLS' ] },
   { id: 11,  sec: 1662,  txt: 'Protestes estudiantils',  tags:   [ 'protestes',     'mobilitzacions',     'estudiants',     'servei social substitutori',     'ocupació', 'vaga',  'rectorat' ] },
   { id: 12,  sec: 1832,  txt: 'Condicions laborals del PAS',  tags: [ 'condicions laborals', 'personal', 'PAS' ] },
   { id: 13,  sec: 2024,  txt: 'Celebració del 20è aniversari',  tags:   [ '20è aniversari', 'UAM', 'festa major', 'exposició', 'campus' ] },
   { id: 14,  sec: 2147,  txt: 'Introducció de la Festa Major',  tags: [ 'festa major', 'campus', 'cultura' ] },
   { id: 15,  sec: 2190,  txt: 'Efectes de la fundació d\'altres universitats catalanes',  tags: [ 'UDL', 'UDG', 'URV', 'UPF', 'URL', 'universitats' ] },
   { id: 16,  sec: 2410,  txt: 'Balanç del mandat',  tags: [ 'balanç', 'mandat', 'rector' ] },
   { id: 17,  sec: 2507,  txt: 'Bons records del mandat',  tags:   [ 'records',     'urbanització',     'campus',     'reformes',     'biblioteques',     'recerca',     'mandat' ] } ] },
{ id: 'valles',
nom: 'Josep Maria',
cognoms: 'Vallès Casadevall',
anys: [ 1986, 1990 ],
yt: '3-BIS1HEtrQ',
events:
 [ { id: 0,  sec: 6,  txt: 'Les adversitats de l\'inici del mandat',  tags: [ 'finançament', 'docència', 'mandat' ] },
   { id: 1,  sec: 132,  txt: 'Noves facultats',  tags:   [ 'polítiques',     'sociologia',     'traducció',     'educació',     'facultats',     'campus',     'progrés' ] },
   { id: 2,  sec: 413,  txt: 'Noves titulacions',  tags: [ 'titulacions', 'innovació', 'docència' ] },
   { id: 3,  sec: 519,  txt: 'Una forta restricció financera',  tags: [ 'finançament', 'crisi', 'retallades', 'pressupost' ] },
   { id: 4,  sec: 602,  txt: 'Edificació de la Vila Universitària',  tags:   [ 'Vila Universitària', 'residència', 'estudiants', 'policia' ] },
   { id: 5,  sec: 910,  txt: 'Consolidació dels centres de recerca',  tags: [ 'recerca', 'CREAF', 'CVC' ] },
   { id: 6,  sec: 988,  txt: 'Gestió de la recerca',  tags: [ 'recerca', 'gestió' ] },
   { id: 7,  sec: 1038,  txt: 'Conveni amb l\'Hospital Parc Taulí',  tags: [ 'conveni', 'Parc Taulí', 'Sabadell' ] },
   { id: 8,  sec: 1172,  txt: 'Desenvolupament de la xarxa de biblioteques',  tags:   [ 'biblioteques', 'xarxa', 'coneixement', 'campus', 'progrés' ] },
   { id: 9,  sec: 1306,  txt: 'Revisió integral dels plans d\'estudis',  tags: [ 'reformes', 'plans d\'estudis', 'docència' ] },
   { id: 10,  sec: 1392,  txt: 'Reducció de les llicenciatures de 5 a 4 anys',  tags: [ 'reformes', 'llicenciatures', 'titulacions' ] },
   { id: 11,  sec: 1713,  txt: 'Presencia de la UAB als rankings internacionals',  tags: [ 'rankings', 'classificació', 'qualitat' ] },
   { id: 12,  sec: 1742,  txt: 'Creació de Cultura en Viu i origen de la Fundació Autònoma Solidària',  tags: [ 'cultura', 'FAS', 'voluntariat', 'campus', 'igualtat' ] },
   { id: 13,  sec: 1945,  txt: 'Una matrícula un 0,5% més cara per millorar la docència',  tags:   [ 'matrícula',     'cost',     'docència',     'ocupació',     'estudiants',     'protestes' ] },
   { id: 14,  sec: 2309,  txt: 'Reimpuls de les publicacions informatives de la UAB',  tags: [ 'publicacions', 'comunicació' ] },
   { id: 15,  sec: 2431,  txt: 'Balanç del mandat',  tags: [ 'balanç', 'mandat', 'rector' ] },
   { id: 16,  sec: 2684,  txt: 'El lligam personal amb la UAB',  tags: [ 'records', 'vincles' ] } ] },
{ id: 'serra',
nom: 'Antoni',
cognoms: 'Serra Ramoneda',
anys: [ 1980, 1985 ],
yt: 'bSXbW2a4IIk',
events:
 [ { id: 0,  sec: 6,  txt: 'Secretari de la Comissió Promotora de la UAB',  tags: [ 'comissió promotora', 'fundació', 'UAB' ] },
   { id: 1,  sec: 150,  txt: 'Participació en el Manifest de Bellaterra (1975)',  tags: [ 'Manifest de Bellaterra', 'UAB' ] },
   { id: 2,  sec: 307,  txt: 'Entrega de la medalla UAB a l\'exrector Josep Laporte',  tags:   [ 'medalla',     'UAB',     'Josep Laporte',     'rector',     'fundació',     'homenatge' ] },
   { id: 3,  sec: 330,  txt:  'Efectes de l\'aprovació de la Llei de Reforma Universitària (LRU)',  tags: [ 'LRU', 'reformes', 'marc legal' ] },
   { id: 4,  sec: 454,  txt: 'Estabilització del personal numerari',  tags: [ 'personal numerari', 'docència', 'condicions laborals' ] },
   { id: 5,  sec: 541,  txt: 'Aprovació de nous estatuts adaptats a la LRU',  tags: [ 'estatuts', 'LRU', 'marc legal' ] },
   { id: 6,  sec: 574,  txt:  'Disconformitat dels estudiants i el PAS amb els nous estatuts',  tags:   [ 'protestes', 'estatuts', 'marc legal', 'estudiants', 'PAS' ] },
   { id: 7,  sec: 605,  txt: 'Creixement progressiu de la universitat',  tags:   [ 'creixement',     'progrés',     'campus',     'estudiants',     'professors',     'marc legal',     'protestes',     'tren',     'FGC' ] },
   { id: 8,  sec: 856,  txt: 'Creació de la facultat de Veterinària',  tags:   [ 'facultat', 'veterinària', 'conferència de rectors', 'campus' ] },
   { id: 9,  sec: 1035,  txt: 'Inauguració del pavelló poliesportiu',  tags: [ 'inauguració', 'poliesportiu', 'campus', 'esports' ] },
   { id: 10,  sec: 1121,  txt: 'El procés d\'informatització',  tags:   [ 'informatització', 'modernització', 'ordinadors', 'càlcul' ] },
   { id: 11,  sec: 1236,  txt: 'Novetats acadèmiques',  tags:   [ 'innovació',     'titulacions',     'facultats',     'ciències de la informació',     'traducció' ] },
   { id: 12,  sec: 1347,  txt: 'Projecte d\'una sola biblioteca a l\'edifici del rectorat',  tags: [ 'projecte', 'biblioteques', 'rectorat', 'coneixement' ] },
   { id: 13,  sec: 1436,  txt: 'Creació de l\'Institut de Ciències de l\'Educació (ICE)',  tags:   [ 'ICE',     'Josep Laporte',     'formació',     'educació',     'innovació',     'coneixement' ] },
   { id: 14,  sec: 1473,  txt: 'Nous centres de recerca',  tags:   [ 'centres',     'recerca',     'CED',     'CNM',     'microelectrònica',     'IAE',     'CSIC',     'progrés' ] },
   { id: 15,  sec: 1615,  txt: 'Relació amb la Direcció General d\'Ensenyament Universitari de Ramon Pascual',  tags: [ 'Ramon Pascual', 'Generalitat', 'Jordi Pujol' ] },
   { id: 16,  sec: 1632,  txt: 'Converses sobre internacionalització',  tags: [ 'internacionalització', 'convenis' ] },
   { id: 17,  sec: 1696,  txt: 'Protestes estudiantils',  tags:   [ 'LRU',     'mobilitzacions',     'protestes',     'estudiants',     'vaga',  'ocupació',     'rectorat',     'campus' ] },
   { id: 18,  sec: 1832,  txt: 'Reimpuls de l\'activitat cultural',  tags: [ 'cultura', 'campus', 'aula de teatre', 'cor de la UAB' ] },
   { id: 19,  sec: 1888,  txt: 'Gran èxit del concert de Lluís Llach',  tags: [ 'concert', 'Lluís Llach', 'cultura', 'música', 'campus' ] },
   { id: 20,  sec: 1942,  txt: 'Balanç del mandat',  tags: [ 'balanç', 'mandat', 'rector' ] },
   { id: 21,  sec: 2023,  txt: 'Records del cop d\'Estat del 23-F',  tags:   [ 'anècdota',     'records',     'cop d\'Estat',     '23-F',     'Tejero',     'marxa sobre Cerdanyola',     'campus' ] } ] },
{ id: 'sola',
nom: 'Carles',
cognoms: 'Solà Ferrando',
anys: [ 1994, 2002 ],
yt: 'CQ6yaAQhPMg',
events:
 [ { id: 0,  sec: 6,  txt: 'Fundació de l\'Escola d\'Enginyeria',  tags: [ 'escola d\'enginyeria', 'facultats', 'campus', 'progrés' ] },
   { id: 1,  sec: 87,  txt: 'Innovacions acadèmiques',  tags: [ 'titulacions', 'innovació', 'progrés' ] },
   { id: 2,  sec: 289,  txt: 'Escola de doctorat i de formació contínua',  tags: [ 'escola de doctorat', 'formació', 'campus' ] },
   { id: 3,  sec: 388,  txt: 'Recursos per a la recerca',  tags: [ 'recerca', 'finançament' ] },
   { id: 4,  sec: 516,  txt: 'Nous centres de recerca',  tags: [ 'recerca', 'centres', 'campus', 'progrés' ] },
   { id: 5,  sec: 649,  txt: 'Constitució de l\'ICREA',  tags:   [ 'recerca',     'ICREA',     'talent',     'excel·lència',     'internacionalització' ] },
   { id: 6,  sec: 727,  txt: 'Tensions pressupostàries',  tags: [ 'finançament', 'pressupost', 'tensions' ] },
   { id: 7,  sec: 1028,  txt: 'Informe Universitat 2000',  tags:   [ 'informe',     'estudi',     'finançament',     'PP',     'protestes',     'estudiants' ] },
   { id: 8,  sec: 1261,  txt: 'Llei Orgànica d\'Universitats (LOU)',  tags: [ 'LOU', 'PP', 'universitats', 'marc legal' ] },
   { id: 9,  sec: 1340,  txt: 'Crisi institucional: la visita d\'Aznar',  tags:   [ 'crisi',     'Aznar',     'càrregues',     'policia',     'estudiants',     'protestes',    'mobilitzacions',  'campus' ] },
   { id: 10,  sec: 1710,  txt: 'Inauguració de les columnes de la UAB',  tags: [ 'columnes', 'monument', 'campus', 'UAB', 'Andreu Alfaro' ] },
   { id: 11,  sec: 1944,  txt: 'El camí cap al Pla Bolonya',  tags:   [ 'Pla Bolonya',     'marc legal',     'reforma',     'Espai europeu',     'ensenyament',     'universitats' ] },
   { id: 12,  sec: 2178,  txt: 'La universitat amb més programes d\'intercanvi europeus de tot l\'Estat',  tags:   [ 'intercanvi',     'mobilitat',     'internacionalització',     'estudiants' ] },
   { id: 13,  sec: 2364,  txt: 'Creació del programa Universitat a l\'Abast',  tags:   [ 'Universitat a l\'Abast', 'formació', 'integració', 'igualtat' ] },
   { id: 14,  sec: 2414,  txt: 'Nous espais per a biblioteques',  tags:   [ 'biblioteques',     'coneixement',     'campus',     'estudiants',     'progrés' ] },
   { id: 15,  sec: 2474,  txt: 'Els doctors \'honoris causa\'',  tags: [ 'doctors', 'honoris causa', 'reconeixement', 'talent' ] },
   { id: 16,  sec: 2513,  txt: 'Connexió ferroviària amb Sabadell',  tags:   [ 'connexió', 'Sabadell', 'transport', 'tren', 'FGC', 'campus' ] },
   { id: 17,  sec: 2719,  txt: 'Accident mortal a França d\'estudiants de Psicologia',  tags: [ 'accident', 'estudiants', 'psicologia', 'França' ] },
   { id: 18,  sec: 2739,  txt: 'Balanç del mandat',  tags: [ 'balanç', 'mandat', 'rector' ] },
   { id: 19,  sec: 2867,  txt: 'L\'anècdota dels migrants',  tags: [ 'anècdota', 'records', 'migrants' ] } ] },
{ id: 'ripoll',
nom: 'Ana',
cognoms: 'Ripoll Aracil',
anys: [ 2009, 2012 ],
yt: 'rK62UIZOvGM',
events:
 [ { id: 0,  sec: 6,  txt:   'Vicerectora de Professorat durant el mandat de Lluís Ferrer',  tags:   [ 'personal acadèmic',     'professorat',     'associats',     'becaris',     'Lluís Ferrer' ] },
   { id: 1,  sec: 248,  txt: 'La primera dona rectora de la UAB',  tags: [ 'dona', 'rectora', 'igualtat' ] },
   { id: 2,  sec: 366,  txt: 'Programació acadèmica en el marc de la consolidació de l\'EEES',  tags:   [ 'planificació',     'titulacions',     'anglès',     'internacionalització',     'mobilitat',     'Pla Bolonya',     'Espai Europeu' ] },
   { id: 3,  sec: 364,  txt: 'Noves titulacions en anglès',  tags:   [ 'titulacions',     'Pla Bolonya',     'graus',     'màsters',     'anglès',     'internacionalització',     'progrés' ] },
   { id: 4,  sec: 445,  txt: 'Constitució del Consell d\'Estudiants',  tags: [ 'consell d\'estudiants', 'participació', 'alumnat' ] },
   { id: 5,  sec: 541,  txt: 'Modalitat de matrícula per via lenta',  tags:   [ 'matrícula',     'via lenta',     'estudiants',     'planificació',     'feina',     'temps parcial',     'igualtat' ] },
   { id: 6,  sec: 561,  txt: 'Creació de les beques-salari Ítaca',  tags: [ 'beques', 'Ítaca', 'estudiants', 'talent', 'igualtat' ] },
   { id: 7,  sec: 581,  txt: 'UAB Campus d\'Excel·lència Internacional',  tags:   [ 'campus',     'excel·lència',     'internacionalització',     'Universitat de Corea',     'recerca',     'Ortelius',     'B-30',     'coneixement',     'innovació' ] },
   { id: 8,  sec: 780,  txt: 'Creació de l\'Escola d\'Enginyeria i la Facultat d\'Economia i Empresa',  tags:   [ 'noves facultats',     'enginyeria',     'economia',     'empresa',     'Pla Bolonya',     'progrés',     'campus' ] },
   { id: 9,  sec: 1145,  txt: 'Nous centres de recerca',  tags:   [ 'centres',     'recerca',     'projecte Melissa',     'CRAG',     'sincrotró Alba',     'Ortelius',     'internacionalització',     'progrés',     'campus' ] },
   { id: 10,  sec: 1304,  txt: 'Les relacions amb Àsia i Amèrica Llatina',  tags:   [ 'internacionalització',     'recerca',     'titulacions',     'Àsia',     'Corea',     'Amèrica Llatina',     'Lluís Ferrer' ] },
   { id: 11,  sec: 1372,  txt: 'Crisi financera global i restriccions pressupostàries',  tags:   [ 'crisi financera', 'finançament', 'retallades', 'pressupost' ] },
   { id: 12,  sec: 1570,  txt: 'Protestes estudiantils',  tags: [ 'estudiants', 'protestes', 'mobilitzacions', 'vaga', 'campus' ] },
   { id: 13,  sec: 1608,  txt: 'Balanç del mandat',  tags: [ 'balanç', 'mandat', 'rectora', 'crisi financera' ] },
   { id: 14,  sec: 1849,  txt: 'L\'anècdota',  tags: [ 'anècdota', 'records', 'Lluís Ferrer' ] },
   { id: 15,  sec: 1946,  txt: 'Objectiu prioritari: tenir el millor professorat',  tags: [ 'professorat', 'personal acadèmic', 'qualitat', 'talent' ] } ] },
{ id: 'sancho',
nom: 'Ferran',
cognoms: 'Sancho Pifarré',
anys: [ 2012, 2016 ],
yt: 'cE8hmWXA9Cw',
events:
 [ { id: 0,  sec: 6,  txt: 'Primer rector alumni de la UAB',  tags: [ 'rector', 'alumni', 'exalumne' ] },
   { id: 1,  sec: 31,  txt: 'Un aspirant a periodista que va acabar estudiant Economia',  tags: [ 'anècdota', 'records', 'periodisme', 'economia' ] },
   { id: 2,  sec: 146,  txt: 'Vicerector durant el mandat de Carles Solà',  tags: [ 'vicerector', 'Carles Solà' ] },
   { id: 3,  sec: 211,  txt: 'Noves titulacions',  tags: [ 'titulacions', 'graus', 'innovació', 'progrés' ] },
   { id: 4,  sec: 332,  txt: 'Impuls a la formació en anglès',  tags: [ 'formació', 'anglès' ] },
   { id: 5,  sec: 386,  txt: 'L\'aposta pels MOOC amb la plataforma Coursera',  tags:   [ 'cursos online',     'formació',     'Coursera',     'coneixement',     'participació' ] },
   { id: 6,  sec: 463,  txt: 'El programa UAB Emprèn',  tags: [ 'UAB Emprèn', 'emprenedoria', 'coneixement', 'campus' ] },
   { id: 7,  sec: 519,  txt: 'El Projecte B30',  tags:   [ 'Projecte B30', 'Àmbit 30', 'recerca', 'innovació', 'campus' ] },
   { id: 8,  sec: 581,  txt: 'Integració de la UAB a la YERUN',  tags: [ 'YERUN', 'universitats', 'Europa', 'recerca', 'qualitat' ] },
   { id: 9,  sec: 686,  txt: 'Altres iniciatives d\'internacionalització de la UAB',  tags: [ 'internacionalització', 'COFUND', 'recursos', 'talent' ] },
   { id: 10,  sec: 753,  txt: 'Model de dedicació variable del PDI',  tags:   [ 'dedicació variable',     'PDI',     'docència',     'recerca',     'condicions laborals' ] },
   { id: 11,  sec: 892,  txt: 'Restriccions pressupostàries durant la crisi financera',  tags:   [ 'retallades', 'pressupost', 'crisi financera', 'finançament' ] },
   { id: 12,  sec: 971,  txt: 'La polèmica taxa de reposició d\'efectius',  tags:   [ 'taxa de reposició',     'places',     'personal',     'condicions laborals',     'marc legal' ] },
   { id: 13,  sec: 1123,  txt: 'Manca de relleu generacional',  tags:   [ 'relleu generacional',     'envelliment',     'jubilació',     'personal',     'condicions laborals' ] },
   { id: 14,  sec: 1155,  txt: 'Mesures per pal·liar la precarització del personal',  tags:   [ 'mesures', 'precarització', 'personal', 'condicions laborals' ] },
   { id: 15,  sec: 1222,  txt: 'Creació del programa de beques Finestreta',  tags: [ 'beques', 'Finestreta', 'ajudes', 'igualtat' ] },
   { id: 16,  sec: 1293,  txt: 'Les beques Equitat i l\'augment del 66% en les taxes',  tags:   [ 'beques', 'Equitat', 'taxes', 'ajudes', 'igualtat', 'marc legal' ] },
   { id: 17,  sec: 1375,  txt: 'Protestes estudiantils',  tags:   [ 'protestes', 'estudiants', 'mobilitzacions', 'vaga', 'campus' ] },
   { id: 18,  sec: 1426,  txt: 'Ocupació del rectorat',  tags:   [ 'ocupació',     'rectorat',     'protestes',     'mobilitzacions',  'vaga',   'estudiants',     'campus' ] },
   { id: 19,  sec: 1510,  txt: 'Conseqüències de la crisi financera per a la recerca',  tags:   [ 'crisi financera',     'retallades',     'finançament',     'pressupost',     'recerca' ] },
   { id: 20,  sec: 1624,  txt: 'Èxit de la recerca malgrat les adversitats',  tags: [ 'recerca', 'talent', 'èxit', 'adversitats' ] },
   { id: 21,  sec: 1724,  txt: 'Noves instal·lacions per a recerca',  tags: [ 'recerca', 'inauguració', 'ICTA', 'campus', 'progrés' ] },
   { id: 22,  sec: 1938,  txt: 'El Campus Saludable i Sostenible (SiS)',  tags: [ 'campus', 'medi ambient', 'sostenibilitat' ] },
   { id: 23,  sec: 2008,  txt: 'Recuperació de la Festa Major',  tags: [ 'Festa Major', 'campus', 'cultura' ] },
   { id: 24,  sec: 2083,  txt: 'Implantació del vot electrònic a les eleccions',  tags:   [ 'eleccions', 'rectorat', 'vot electrònic', 'participació' ] },
   { id: 25,  sec: 2219,  txt: 'Els doctors \'honoris causa\'',  tags: [ 'doctors', 'honoris causa', 'reconeixement', 'talent' ] },
   { id: 26,  sec: 2362,  txt: 'L\'anècdota dels representants de la Universitat de Corea',  tags:   [ 'anècdota',     'records',     'Universitat de Corea',     'internacionalització' ] },
   { id: 27,  sec: 2423,  txt: 'Balanç del mandat',  tags: [ 'balanç', 'mandat', 'rector' ] } ] } ]


  
const fs = require('fs');
const util = require('util');

function afegeixSegon(videos,temps){

    const resposta = videos.map((r,i)=>{
        const events = r.events.map((ev,j)=>{
           const sec = temps[i].events[j].sec+1;
           return util.inspect(Object.assign({},{...ev,sec}))           
        })

        return {
            ...r,
            events
        }

    })

    fs.writeFileSync('videos.js',util.inspect(resposta),'utf-8');

}

afegeixSegon(videos,tempsVells);