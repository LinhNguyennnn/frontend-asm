import * as type from "../constants/actionTypes";

let initialState = null;

export default (state = initialState, action) => {
  if (action.type === type.SHOW_LIST_PRODUCTS) return { ...state, data: action.data };
  return state
}
