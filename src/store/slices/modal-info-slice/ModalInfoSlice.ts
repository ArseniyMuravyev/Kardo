import { createSlice } from "@reduxjs/toolkit";

interface IModal {
  isActive: boolean
  title: string
  subtitle: string
  replace: string | null
}

interface IInitialState {
  modal: IModal
}

const initialState: IInitialState = {
  modal: {
    isActive: false,
    title: '',
    subtitle: '',
    replace: null
  }
};

const modalInfoSlice = createSlice({
  name: 'modalInfo',
  initialState,
  reducers: {
    setModalInfo(state, action) {
      state.modal = action.payload
    },
    closeModal(state) {
      state.modal = initialState.modal
    }
  },
})

export const { setModalInfo, closeModal } = modalInfoSlice.actions;
export default modalInfoSlice.reducer;