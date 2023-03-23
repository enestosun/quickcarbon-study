class APIResponse {
  constructor(status, data, error) {
    this.status = status; // string: 'success', 'error', 'loading'
    this.data = data; // object: yanıt verileri
    this.error = error; // object: hatanın nedeni
  }

  static success(data) {
    return new APIResponse("success", data, null);
  }

  static error(error) {
    return new APIResponse("error", null, error);
  }

  static loading() {
    return new APIResponse("loading", null, null);
  }
}
