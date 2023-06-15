import { configureStore, createSlice } from "@reduxjs/toolkit";

const myList = createSlice({
  name: "myList",
  initialState: {
    fetchedLists: [],
    selectedLists: [
      {
        name: "badgy",
        backdrop_path: "/jgGP3HxKUrYM7sPIFVH7L0k8Mmq.jpg",
        id: "hdfjd",
        release_date: "1998",
        vote_average: 2.4,
        overview: "lorem ipsum",
        genre_ids: [122, 3, 45],
        hasBeenAdded: true,
      },
      {
        name: "badgy",
        backdrop_path: "/jgGP3HxKUrYM7sPIFVH7L0k8Mmq.jpg",
        id: "hdfjd",
        release_date: "1998",
        vote_average: 2.4,
        overview: "lorem ipsum",
        genre_ids: [122, 3, 45],
        hasBeenAdded: true,
      },
    ],
  },
  reducers: {
    addToFetchedLists(state,action){
       state.fetchedLists = action.payload
    },
    addToList(state, action) {
      if (state.selectedLists.length > 0) {
        const index = state.selectedLists.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index === -1) {
          state.selectedLists.push({ ...action.payload, hasBeenAdded: true });
        } else{
            //if there is an index already, that means we remove it from the lists
            state.selectedLists = state.selectedLists.filter(
                (el) => el.id !==  state.selectedLists[index].id
              );  
        }
      } else {
        state.selectedLists.push({ ...action.payload, hasBeenAdded: true });
      }
    },
    removeFromList(state, action) {
      state.selectedLists = state.selectedLists.filter(
        (el) => el.id !== action.payload.id
      );
    },
  },
});

export const listActions = myList.actions;

const store = configureStore({
  reducer: {
    myList: myList.reducer,
  },
});

export default store;


