import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Landmark } from '../types';

const landmarkSlice = createSlice({
  name: 'landmark',
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  initialState: require('./data/londonLandmarks.json') as Array<Landmark>,
  reducers: {
    setLandmarkHeart: (state, action: PayloadAction<{ index: number }>) => {
      state[action.payload.index].hearted =
        !state[action.payload.index].hearted;
    },
  },
});

export const { setLandmarkHeart } = landmarkSlice.actions;
export default landmarkSlice.reducer;
