import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
  PreloadedState,
} from "@reduxjs/toolkit";
import { dronesReducer } from "./features/dronesSlice/dronesSlice";
import { uiReducer } from "./features/uiSlice/uiSlice";
import { userReducer } from "./features/user/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
  drones: dronesReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const store = setupStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
