import {SET_CURRENT_VIDEO} from '../actions/types';


const initialState = {
  currentVideo: "z",
  videos: [
    {
      id: "z",
      yt: "cwQgjq0mCdE",
      events: [
        {
          sec: 24,
          txt: "Boyfriend"
        },
        {
          sec: 57,
          txt: "Hook"
        },
        {
          sec: 77,
          txt: "I'm a sick fuck"
        },
        {
          sec: 104,
          txt: "Bitch"
        }
      ]
    },
    {
      id: "valles",
      yt: "1zy3QoW8ohM",
      events: [
        {
          sec: 1069,
          txt: "Comença a parlar el rector"
        },
        {sec:1693,
        txt:"Doctor Laporte"}
      ]
    },
    {
        id: "pascual",
        yt: "qmK9LFKDfUw",
        events: [
          {
            sec: 1069,
            txt: "Comença a parlar el rector"
          },
          {sec:1693,
          txt:"Doctor Laporte"}
        ]
      }
  ]
};

function videos(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_VIDEO:
        console.log('Setting current video');
        return {
            ...state,
            currentVideo:payload
        }
    default:
      return state;
  }
}

export default videos;
