import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {CityDataState} from '../../types/state';
import {cities} from '../../mocks/cities.ts';
import {City} from '../../types/city.ts';

const initialState: CityDataState = {
  city: cities[0]
};

export const cityData = createSlice({
  name: NameSpace.City,
  initialState,
  reducers: {
    updateCity : (state, action : {payload: City}) => {
      state.city = action.payload;
    },
  }
});

export const {updateCity} = cityData.actions;
