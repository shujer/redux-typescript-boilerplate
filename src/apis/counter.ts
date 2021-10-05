export class CounterAPI {
  static fetchCount(amount = 1) {
    return new Promise<API.FetchCountRes>((resolve) =>
      setTimeout(() => resolve({ data: amount }), 500)
    );
  }
}
