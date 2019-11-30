export class AuthError extends Error {
  public readonly cause?: Error;

  constructor(message: string, cause?: Error) {
    super(message);
    this.name = 'AuthError';
    this.cause = cause;
  }
}
