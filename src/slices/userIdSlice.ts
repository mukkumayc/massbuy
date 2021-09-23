import { createSlice } from "@reduxjs/toolkit";

export const userIdSlice = createSlice({
  name: "userId",
  initialState: {
    value: parseInt(
      (typeof window !== "undefined" &&
        window.localStorage.getItem("userId")) ||
        ""
    ),
  } as { value: number },
  reducers: {
    set: (state, { payload }: { payload: number }) => {
      window.localStorage.setItem("userId", payload.toString());
      state.value = payload;
    },
    remove: (state) => {
      window.localStorage.removeItem("userId");
      state.value = NaN;
    },
  },
});

export const { set, remove } = userIdSlice.actions;
export default userIdSlice.reducer;
