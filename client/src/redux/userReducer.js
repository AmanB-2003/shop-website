import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: undefined,
    //userData: {},
    //isLoading: false,
  },
  reducers: {
    setUser: (state,action) => {
        if(!state.user){
            state.user = action.payload.username;
            //state.userData = action.payload;
        }
    },
    removeUser: (state,action) => {
      if(state.user){
          state.user = null;
          //state.userData = action.payload;
      }
  },
  }
})

// Action creators are generated for each case reducer function
export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;