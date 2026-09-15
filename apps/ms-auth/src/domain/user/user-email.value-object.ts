import { ValueObject } from '@shared/domain/value-object.js';

export class UserEmail implements ValueObject<string> {
  public constructor(
    public readonly value: string,
    public readonly token?: string,
    public readonly tokenExpiration?: Date,
    public readonly validatedAt?: Date,
  ) {}

  public validate(): boolean {
    return this.value.includes('@');
  }

  public isValidated(): boolean {
    return !!this.validatedAt;
  }

  public tokenIsValid(): boolean {
    return (
      !!this.token &&
      (this.tokenExpiration?.getTime() ?? 0) + 30 * 60 * 1000 > Date.now()
    );
  }
}
