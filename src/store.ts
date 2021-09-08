import { configureStore } from "@reduxjs/toolkit";
import userIdReducer from "./slices/userIdSlice";
import messageModalReducer from "./slices/messageModalSlice";

const store = configureStore({
  reducer: {
    userId: userIdReducer,
    messageModal: messageModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
