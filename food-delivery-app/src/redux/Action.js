import { SEARCH_ITEM, ADD_ITEM, LOG_IN } from "./ActionTypes";

export const searchItem = (payload) => ({
  type: SEARCH_ITEM,
  payload,
});

export const addItem = (payload) => ({
  type: ADD_ITEM,
  payload,
});
export const logIn = (payload) => ({
  type: LOG_IN,
  payload,
});
