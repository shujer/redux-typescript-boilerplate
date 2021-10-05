import { counterReducer, CounterState, STATUS } from "./reducer";
import { incrementCount, decrementCount, incrementByAmount } from "./action";

describe("counter reducer", () => {
  const initialState: CounterState = {
    value: 3,
    status: STATUS.idle,
  };
  it("should handle initial state", () => {
    expect(counterReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
      status: "idle",
    });
  });

  it("should handle increment", () => {
    const actual = counterReducer(initialState, incrementCount());
    expect(actual.value).toEqual(4);
  });

  it("should handle decrement", () => {
    const actual = counterReducer(initialState, decrementCount());
    expect(actual.value).toEqual(2);
  });

  it("should handle incrementByAmount", () => {
    const actual = counterReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});
