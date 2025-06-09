import { createSlice, nanoid } from "@reduxjs/toolkit";

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
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
    setContacts(state, action) {
      state.items = action.payload;
    },
  },
});

export const { addContact, deleteContact, setContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
