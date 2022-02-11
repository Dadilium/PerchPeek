import { createSlice } from '@reduxjs/toolkit'
import { Landmark } from '../constants';

const landmarkSlice = createSlice({
  name: "landmark",
  initialState: require('./data/londonLandmarks.json') as Array<Landmark>,
  reducers: {}
})

export default landmarkSlice.reducer;
