import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.jpg",
   };
   
   const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "0h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0
   }
   

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits,
 reducers: {
    deleteTuit(state, action) {
        const index = state.findIndex(tuits =>
              tuits._id === action.payload);
        state.splice(index, 1);
      },
   
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    },

    likeButton(state, action) {
      console.log(action.payload);
      const tuit = state.find((tuit) => tuit._id === action.payload.tuitId);
      console.log(tuit);
    }

  }
 
});

export const {createTuit,deleteTuit,likeButton} = tuitsSlice.actions;
export default tuitsSlice.reducer;
