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
      id: "sola",
      yt: "cu9kqyb11gA",
      events: [
        {
          sec: 15,
          txt: "Gamble"
        },
        {
          sec: 30,
          txt: "Lottery"
        },
        {
          sec: 50,
          txt: "Before"
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
