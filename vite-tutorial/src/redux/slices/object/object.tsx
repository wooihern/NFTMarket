import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface Object {
  Fname?: string;
  Lname?: string;
  Email?: string;
  valid?: boolean;
}

const ObjectData: Object = {
  Fname: "",
  Lname: "",
  Email: "",
  valid: false,
};

export const objectSlice = createSlice({
  name: "ObjectSlice",
  initialState: ObjectData,
  reducers: {
    setObjectData: (state, action: PayloadAction<Object>) => {
      state.Fname = action.payload?.Fname;
      state.Lname = action.payload?.Lname;
      state.Email = action.payload?.Email;
      state.valid = action.payload?.valid;
    },
  },
});

export const { setObjectData } = objectSlice.actions;
