import Loan from "../API";
import { v4 as uuidv4 } from "uuid";
import history from "../history";
import {
  CREATE_LOAN,
  FETCH_LOAN,
  FETCH_LOANS,
  SIGN_IN,
  SIGN_OUT,
} from "./types";

export const signIn = (userId) => {
  history.push("/home");
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  history.push("/");
  return {
    type: SIGN_OUT,
  };
};

export const createLoan = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const id = uuidv4();
  const response = await Loan.post("/loans", {
    ...formValues,
    userId,
    id,
  });

  dispatch({ type: CREATE_LOAN, payload: response.data });
  history.push("/");
};

export const fetchLoans = () => async (dispatch) => {
  const response = await Loan.get("/loans");
  // console.log(response.data);
  dispatch({ type: FETCH_LOANS, payload: response.data });
};

export const fetchLoan = (id) => async (dispatch) => {
  const response = await Loan.get(`loans/${id}`);

  dispatch({ type: FETCH_LOAN, payload: response.data });
};
