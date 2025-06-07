import { createSlice, nanoid } from "@reduxjs/toolkit";

const savedContacts = JSON.parse(localStorage.getItem("contacts"));

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
        localStorage.setItem("contacts", JSON.stringify(state.items));
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
        localStorage.setItem("contacts", JSON.stringify(state.items));
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
