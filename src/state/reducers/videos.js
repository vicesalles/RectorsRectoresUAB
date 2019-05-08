import { SET_CURRENT_VIDEO } from "../actions/types";

const initialState = {
  currentVideo: "z",
  videos: [
    {
        id: "ferrer",        
        yt: "esbrXKHGrl8",
          temes: [
            {
              id:00,
              sec: 5,
              txt: "Primer rector escollit en vigència de la LOU",
              tags:["LOU","PP"]
            },{
              id:01,
              sec: 84,
              txt: "Conseqüències de l'aprovació de la LOU",
              tags:["LOU","conseqüències"]
            },{
              id:02,
              sec: 184,
              txt: "Modificacions del marc legal",
              tags:["LOU","LUC"]
            },{
              id:03,
              sec: 243,
              txt: "Aprovació de nous estatuts",
              tags:["estatuts","LOU"]
            },{
              id:04,
              sec: 323,
              txt: "Aprovació d'un nou pla director",
              tags:["pla director","canvis"]
            },{
              id:05,
              sec: 486,
              txt: "Interacció amb la Conselleria d'Universitats",
              tags:["conselleria","Solà"]
            },{
              id:06,
              sec: 569,
              txt: "Adaptació al Pla Bolonya",
              tags:["Bolonya","homologació"]
            },{
              id:07,
              sec: 946,
              txt: "Pla pilot de titulacions adaptades",
              tags:["reestructuració","flexibilitat"]
            },{
              id:08,
              sec: 1211,
              txt: "Noves titulacions",
              tags:["innovació","titulacions"]
            },{
              id:09,
              sec: 1389,
              txt: "Creació de la facultat de Biociències i reestructuració d'altres facultats",
              tags:["Biociències","reestructuració"]
            },{
              id:10,
              sec: 1714,
              txt: "Ampliació de la unitat docent Germans Trias i Pujol",
              tags:["Ampliació","Can Ruti"]
            },{
              id:11,
              sec: 1804,
              txt: "Internacionalització i creació de l'Aliança 4 Universitats",
              tags:["internacionalització","aliança"]
            },{
              id:12,
              sec: 2140,
              txt: "Programa 'Study Abroad'",
              tags:["internacionalització","intercanvi"]
            },{
              id:13,
              sec: 2220,
              txt: "Impulsos a la recerca",
              tags:["recerca","innovació"]
            },{
              id:14,
              sec: 2422,
              txt: "Nous centres de recerca",
              tags:["recerca","CReSA"]
            },{
              id:15,
              sec: 2509,
              txt: "Parc de Recerca i Esfera UAB",
              tags:["recerca","Esfera"]
            },{
              id:16,
              sec: 2855,
              txt: "Fòrum de la Recerca UAB 2006",
              tags:["recerca","fòrum"]
            },{
              id:17,
              sec: 3016,
              txt: "Creació de l'Observatori per la Igualtat",
              tags:["observatori","igualtat","drets","gènere"]
            },{
              id:18,
              sec: 3220,
              txt: "Primers actes institucionals del Dia de la Dona Treballadora",
              tags:["Institucional","dona","8M","transparència"]
            },{
              id:19,
              sec: 3306,
              txt: "Campus Ítaca",
              tags:["Ítaca","integració","igualtat","talent"]
            },{
              id:20,
              sec: 3688,
              txt: "Els 'Anys Temàtics'",
              tags:["cultura","participació"]
            },{
              id:21,
              sec: 3861,
              txt: "Compromís amb el medi ambient",
              tags:["compromís","medi ambient"]
            },{
              id:22,
              sec: 4037,
              txt: "Moviment contra la Guerra d'Iraq",
              tags:["protestes","guerra","Iraq"]
            },{
              id:23,
              sec: 4162,
              txt: "Els doctors 'Honoris Causa'",
              tags:["doctors","honoris"]
            },{
              id:24,
              sec: 4317,
              txt: "Ocupacions de les facultats",
              tags:["ocupacions","protestes","Bolonya"]
            },{
              id:25,
              sec: 4538,
              txt: "Balanç del mandat",
              tags:["balanç","mandat"]
            }
          ]
        }
   ,
    {
      id: "pascual",
      yt: "cwQgjq0mCdE",
      events: [
        {
          sec: 24,
          txt: "Dork"
        },
        { sec: 58, txt: "You such a.." },
        ,
        { sec: 76, txt: "I'm a sick.." }
      ]
    },
    {
      id: "serra",
      yt: "bSXbW2a4IIk",
      events: [
        {
          sec: 21,
          txt: "Back to this..."
        },
        {
          sec: 82,
          txt: "Back to this...(2)"
        },
        { sec: 93, txt: "Oh my God" }
      ]
    },
    {
      id:"sola", 
      nom:"Carles",
      cognoms:"Solà Ferrando",
      mandat:"25.3.1994 – 21.3.2002",
      anys:[1994,2002],
      bio:"",
      vikipedia:"https://ca.wikipedia.org/wiki/Carles_Sol%C3%A0_i_Ferrando",
      yt: "rmes_G5iwnY",
      events: [
          {
            id:0,
            sec: 5,
            txt: "Fundació Escola Enginyeria",
            tags:["enginyeria"]
          },{
            id:1,
            sec: 86,
            txt: "Innovacions acadèmiques",
            tags:["titulacions","innovació"]
          },{
            id:2,
            sec: 286,
            txt: "Escola de doctorat i de formació contínua",
            tags:["doctorat","formació"]
          },{
            id:3,
            sec: 385,
            txt: "Recursos per a la recerca",
            tags:["recerca","finançament"]
          },{
            id:4,
            sec: 512,
            txt: "Nous centres de recerca",
            tags:["recerca","centres"]
          },{
            id:5,
            sec: 644,
            txt: "Creació de la Institució Catalana de Recerca i Estudis Avançats (ICREA)",
            tags:["recerca","ICREA"]
          },{
            id:6,
            sec: 733,
            txt: "Tensions pressupostàries",
            tags:["finançament","pressupostos"]
          },{
            id:7,
            sec: 1035,
            txt: "Informe Universitat 2000",
            tags:["informe","protestes"]
          },{
            id:8,
            sec: 1266,
            txt: "Llei Orgànica d'Universitats (LOU)",
            tags:["LOU","PP"]
          },{
            id:9,
            sec: 1344,
            txt: "Crisi institucional: la visita de José María Aznar",
            tags:["Aznar","càrregues"]
          },{
            id:10,
            sec: 1713,
            txt: "Inauguració de les columnes de la UAB",
            tags:["columnes","monument"]
          },{
            id:11,
            sec: 1957,
            txt: "El camí cap al Pla Bolonya",
            tags:["Bolonya","ensenyament"]
          },{
            id:12,
            sec: 2190,
            txt: "La universitat de l'Estat amb més programes d'intercanvi europeus",
            tags:["intercanvi","mobilitat"]
          },{
            id:13,
            sec: 2374,
            txt: "Creació del programa 'Universitat a l'Abast'",
            tags:["formació","integració"]
          },{
            id:14,
            sec: 2424,
            txt: "Nous espais per a biblioteques",
            tags:["biblioteques"]
          },{
            id:15,
            sec: 2483,
            txt: "Els Doctors 'Honoris Causa'",
            tags:["doctors","honoris"]
          },{
            id:16,
            sec: 2521,
            txt: "Connexió ferroviària amb Sabadell",
            tags:["connexió","Sabadell"]
          },{
            id:17,
            sec: 2726,
            txt: "Accident mortal a França d'un autocar amb estudiants de Psicologia",
            tags:["accident","estudiants"]
          },{
            id:18,
            sec: 2745,
            txt: "Balanç del mandat",
            tags:["balanç","mandat"]
          },{
            id:19,
            sec: 2872,
            txt: "L'anècdota",
            tags:["anècdota","migrants"]
          }
        ]
      },
    {
      id: "ripoll",
      yt: "rK62UIZOvGM",
      events: [
        {
          sec: 15,
          txt: "Gamble"
        }
      ]
    },
    {
      id: "ferrer",
      yt: "CQqf4GgZ-Is",
      events: []
    },
    {
      id: "sancho",
      yt: "Ev5nFBN9xHI",
      events: [
        {
          sec: 15,
          txt: "Gamble"
        }
      ]
    }
  ]
};

function videos(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_VIDEO:      
      return {
        ...state,
        currentVideo: payload
      };
    default:
      return state;
  }
}

export default videos;
