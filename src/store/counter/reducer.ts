import {
  decrementCount,
  incrementByAmount,
  incrementCount,
  fetchCountReq,
  fetchCountSucc,
  fetchCountFail,
} from "./action";
import { createReducer, PayloadAction } from "@reduxjs/toolkit";

export enum STATUS {
  idle = "idle",
  loading = "loading",
  failed = "failed",
}

export interface CounterState {
  value: number;
  status: STATUS;
}

export const CounterInitialState = {
  value: 0,
  status: STATUS.idle,
};

export const counterReducer = createReducer(CounterInitialState, {
  [incrementCount.toString()]: (draft) => {
    draft.value = draft.value + 1;
  },
  [decrementCount.toString()]: (draft) => {
    draft.value = draft.value - 1;
  },
  [incrementByAmount.toString()]: (draft, action: PayloadAction<number>) => {
    draft.value = draft.value + action.payload;
  },
  [fetchCountReq.toString()]: (draft) => {
    draft.status = STATUS.loading;
  },
  [fetchCountSucc.toString()]: (draft, action: PayloadAction<number>) => {
    draft.status = STATUS.idle;
    draft.value = action.payload;
  },
  [fetchCountFail.toString()]: (draft) => {
    draft.status = STATUS.failed;
  },
});
