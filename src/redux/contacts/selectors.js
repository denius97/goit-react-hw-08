import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterValue) => {
    return contacts.filter(({ name, number }) => {
      return (
        name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()) ||
        number.includes(filterValue)
      );
    });
  }
);
