import _ from "lodash";
import { FETCH_LOAN, FETCH_LOANS, CREATE_LOAN } from "../Actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_LOANS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_LOAN:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_LOAN:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
