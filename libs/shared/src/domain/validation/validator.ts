export abstract class Validator<T> {
  public readonly errors: Array<string> = [];

  abstract validate(value: T): void;

  protected addError(error: string): void {
    this.errors.push(error);
  }
}
