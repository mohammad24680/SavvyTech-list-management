import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  modalName: string;
}

const initialState = { modalName: "" } as ModalState;

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state,
      action: {
        payload: string;
        type: string;
      },
    ) => {
      return { ...state, modalName: action.payload };
    },
    closeModal: (state) => {
      return { ...state, modalName: "" };
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
