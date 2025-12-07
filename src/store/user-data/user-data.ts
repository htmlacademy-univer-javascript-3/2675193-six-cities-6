import {createSlice} from '@reduxjs/toolkit';
import {AuthorizationStatus, NameSpace} from '../../const';
import {UserDataState} from '../../types/state';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';

const initialState: UserDataState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  email: '',
  loadingStatus: false,
};

export const userData = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.email = action.payload.email;
        state.loadingStatus = false;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.loadingStatus = false;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(checkAuthAction.pending,(state) =>{
        state.loadingStatus = true;
      })

      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.email = action.payload.email;
        state.loadingStatus = true; // redirect to route
        state.loadingStatus = false;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.pending,(state) => {
        state.loadingStatus = true;
      })

      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.loadingStatus = false;
      })
      .addCase(logoutAction.pending, (state)=> {
        state.loadingStatus = true;
      });
  }
});
