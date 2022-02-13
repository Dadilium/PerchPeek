import { combineReducers, configureStore } from '@reduxjs/toolkit';
import landmarkReducer from './Landmarks';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer, REHYDRATE, PERSIST } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const reducers = combineReducers({
  landmarks: landmarkReducer,
});

export const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PERSIST],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
