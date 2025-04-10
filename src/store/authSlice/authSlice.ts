import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface UserState {
  isLoggedIn: boolean;
  userInfo: any;
  toastMessage: any;
}

const initialState = {
  isLoggedIn: false,
  userInfo: {},
  toastMessage: '',
};

const authSlice = createSlice({
  name: 'AuthSlice',
  initialState: initialState,
  reducers: {
    setIsLoggedIn: (
      state: {isLoggedIn: any},
      action: PayloadAction<boolean>,
    ) => {
      state.isLoggedIn = action.payload;
    },
    setUserInfo: (state: {userInfo: any}, action: PayloadAction<boolean>) => {
      state.userInfo = action.payload;
    },
    showToastMessage: (
      state: {toastMessage: any},
      action: PayloadAction<string>,
    ) => {
      state.toastMessage = action.payload;
    },
  },
});

export const {setIsLoggedIn, setUserInfo, showToastMessage} = authSlice.actions;
export default authSlice.reducer;
