import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {SearcMediaFiles} from '../../lib/SearcMediaFiles';
import {ReturnSearchMP3Type} from '../../interface';

interface IInitialState {
  loading: boolean;
  tracksCollection: ReturnSearchMP3Type | {};
}
const initialState: IInitialState = {
  loading: false,
  tracksCollection: {},
};

export const fethTracks = createAsyncThunk(
  'tracks/fethTracks',
  async (): Promise<ReturnSearchMP3Type | boolean> => {
    try {
      const response = await SearcMediaFiles();
      if (!response) throw new Error('Permission is' + response);
      return response;
    } catch (error) {
      console.log('eee', error);
      return false;
    }
  },
);

export const tracksMP3Slice = createSlice({
  name: 'tracksMP3',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fethTracks.pending, state => {
      state.loading = true;
    });
    builder.addCase(fethTracks.fulfilled, (state, action) => {
      state.tracksCollection = action.payload;
      state.loading = false;
    });
    builder.addCase(fethTracks.rejected, state => {
      state.loading = false;
      console.log('first');
    });
  },
});

export default tracksMP3Slice.reducer;
