import { createAction } from "@reduxjs/toolkit";
import { CounterAPI } from "@/apis/counter";
import { AppDispatch, RootState } from "..";
import {
  FETCH_COUNT_REQ,
  FETCH_COUNT_SUCC,
  FETCH_COUNT_FAIL,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  INCREMENT_BY_AMOUNT,
} from "./constants";

export const fetchCountReq = createAction(FETCH_COUNT_REQ);
export const fetchCountSucc = createAction<number>(FETCH_COUNT_SUCC);
export const fetchCountFail = createAction(FETCH_COUNT_FAIL);
export const incrementCount = createAction(INCREMENT_COUNT);
export const decrementCount = createAction(DECREMENT_COUNT);
export const incrementByAmount = createAction<number>(INCREMENT_BY_AMOUNT);

export const fetchCount =
  (amount: number) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(fetchCountReq());
      const res = await CounterAPI.fetchCount(amount);
      dispatch(fetchCountSucc(res.data));
    } catch (err) {
      dispatch(fetchCountFail());
    }
  };
