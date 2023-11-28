import {configureStore} from '@reduxjs/toolkit';
import getMP3FilesReduser from './tracksMP3/tracksMP3Slice';
export const store = configureStore({
  reducer: {
    tracks: getMP3FilesReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
