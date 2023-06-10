import { configureStore, createSlice } from "@reduxjs/toolkit";

const myList = createSlice({
  name: "myList",
  initialState: {
    selectedLists: [{
        name: 'badgy',
        backdrop_path: '/jgGP3HxKUrYM7sPIFVH7L0k8Mmq.jpg',
        id: 'hdfjd',
        release_date: '1998',
        vote_average: 2.4,
        overview: 'lorem ipsum',
        genre_ids: [122,3,45]
    }, {
        name: 'badgy',
        backdrop_path: '/jgGP3HxKUrYM7sPIFVH7L0k8Mmq.jpg',
        id: 'hdfjd',
        release_date: '1998',
        vote_average: 2.4,
        overview: 'lorem ipsum',
        genre_ids: [122,3,45]
    }, 
],
  },
  reducers: {
    addToList(state, action) {
      if (state.selectedLists.length > 0) {
        const index = state.selectedLists.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index === -1) {
          state.selectedLists.push(action.payload);
        } else {
          return;
        }
      }else{
        state.selectedLists.push(action.payload);    
    }
    },
  },
});

const store = configureStore({
  reducer: {
    myList: myList.reducer,
  },
});

export default store;
