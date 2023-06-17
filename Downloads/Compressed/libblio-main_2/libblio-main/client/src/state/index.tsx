import { createSlice } from "@reduxjs/toolkit";

interface StateProps {
  state: {
    mode: "light" | "dark";
  };
}

const initialState: StateProps["state"] = {
  mode: "light",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload.mode;
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
