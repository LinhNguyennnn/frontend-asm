import * as type from "../constants/actionTypes";

const initialState = { data: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case type.GET_PRODUCT_DETAIL:
      return { ...state, data: action.data }
    default:
      return state;
  }
}