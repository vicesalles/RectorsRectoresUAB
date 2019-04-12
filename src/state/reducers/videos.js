import { SET_CURRENT_VIDEO } from "../actions/types";

const initialState = {
  currentVideo: "z",
  videos: [
    {
      id: "valles",
      yt: "1zy3QoW8ohM",
      events: [
        {
          sec: 1069,
          txt: "Comença a parlar el rector"
        },
        { sec: 1693, txt: "Doctor Laporte" }
      ]
    },
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
      yt: "AfhBkUCSTWc",
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
      console.log("Setting current video");
      return {
        ...state,
        currentVideo: payload
      };
    default:
      return state;
  }
}

export default videos;
