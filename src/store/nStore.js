import { configureStore, createSlice } from "@reduxjs/toolkit";

const createEmail = createSlice({
  name: "email",
  initialState: {
    signUpSucessful: null,
  },
  reducers: {
    updateEmailState(state, action){
      state.signUpSucessful = action.payload
    }
  },
});

const myList = createSlice({
  name: "myList",
  initialState: {
    fetchedLists: [],
    selectedLists: [],
  },
  reducers: {
    addToFetchedLists(state, action) {
      state.fetchedLists = action.payload;
    },
    addOrRemoveFromList(state, action) {
      if (state.selectedLists.length > 0) {
        const index = state.selectedLists.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index === -1) {
          state.selectedLists.push({ ...action.payload, hasBeenAdded: true });
        } else {
          //if there is an index already, that means we remove it from the lists
          state.selectedLists = state.selectedLists.filter(
            (el) => el.id !== state.selectedLists[index].id
          );
        }
      } else {
        state.selectedLists.push({ ...action.payload, hasBeenAdded: true });
      }
      //we then change the hasBeenAdded state from the fetchedLists
      const selectedArrayIndex = state.fetchedLists.findIndex(
        (el) => el.categoryName === action.payload.originalCategoryName
      );
      const itemToBeChangedIndex = state.fetchedLists[
        selectedArrayIndex
      ].results.findIndex((el) => el.id === action.payload.id);
      //we then change the state
      state.fetchedLists[selectedArrayIndex].results[
        itemToBeChangedIndex
      ].hasBeenAdded =
        !state.fetchedLists[selectedArrayIndex].results[itemToBeChangedIndex]
          .hasBeenAdded;
    },
  },
});

export const listActions = myList.actions;
export const emailActions = createEmail.actions;

const store = configureStore({
  reducer: {
    myList: myList.reducer,
    email: createEmail.reducer
  },
});

export default store;
