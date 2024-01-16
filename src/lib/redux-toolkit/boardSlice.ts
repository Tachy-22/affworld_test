import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface BoardState {
  secrets: SecretType[] | null;
  userData: any;
}

// Define the initial state using that type
const initialState: BoardState = {
  secrets: null,
  userData: null,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    updateSecrets: (state, action: PayloadAction<SecretType[]>) => ({
      ...state,
      secrets: action.payload,
    }),
    updateUserData: (state, action: PayloadAction<any>) => ({
      ...state,
      userData: action.payload,
    }),
  },
});

export const { updateSecrets, updateUserData } = boardSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export default boardSlice.reducer;
