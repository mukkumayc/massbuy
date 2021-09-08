import { createSlice } from "@reduxjs/toolkit";

export interface MessageModalProps {
  show: boolean;
  header: string;
  message: string;
}

export const messageModalSlice = createSlice({
  name: "messageModal",
  initialState: {
    value: {
      show: false,
      header: "Message Header",
      message: "Message",
    },
  },
  reducers: {
    show: (
      state,
      { payload }: { payload: Omit<MessageModalProps, "show"> }
    ) => {
      state.value = { show: true, ...payload };
    },
    hide: (state) => {
      state.value.show = false;
    },
  },
});

export const { show, hide } = messageModalSlice.actions;
export default messageModalSlice.reducer;
