class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  public readonly module: string;

  constructor(message: string, statusCode = 400, module = 'default') {
    this.message = message;
    this.statusCode = statusCode;
    this.module = module;
  }
}

export default AppError;
