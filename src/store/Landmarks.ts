import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Landmark } from '../constants';

const landmarkSlice = createSlice({
  name: "landmark",
  initialState: require('./data/londonLandmarks.json') as Array<Landmark>,
  reducers: {
    setLandmarkHeart: (state, action: PayloadAction<{index: number}>) => {
      state[action.payload.index].hearted = !state[action.payload.index].hearted;
    },
  }
})

export const { setLandmarkHeart } = landmarkSlice.actions
export default landmarkSlice.reducer;
