import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import PatientModel from "~/type/PatientModel";

export interface HospitalState {
  patients: Array<PatientModel>;
}

const initialState: HospitalState = {
  patients: [
    {
      id: 0,
      name: "小美",
      gender: "female",
      bed: "A380",
      case: "I-DONT-KNOW",
      age: 70,
      day: 5,
      foleyStatus: "removed",
      state: "1A",
    },
    {
      id: 1,
      name: "阿明",
      gender: "other",
      bed: "C8763",
      case: "STARBURST-STREAM",
      age: 16,
      day: 1,
      foleyStatus: "inserted",
      state: "1A",
    },
    {
      id: 2,
      name: "昊哥",
      gender: "male",
      bed: "H168",
      case: "HOW-FUN",
      age: 32,
      day: 9,
      foleyStatus: "none",
      state: "1A",
    },
  ],
};

export const hospitalSlice = createSlice({
  name: "hospital",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<PatientModel>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      action.payload.id = state.patients.length;
      state.patients.push(action.payload);
    },
    update: (state, action: PayloadAction<PatientModel>) => {
      state.patients[action.payload.id] = action.payload;
    },
    remove: (state, action: PayloadAction<PatientModel>) => {
      state.patients.splice(action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, update, remove } = hospitalSlice.actions;

export default hospitalSlice.reducer;
