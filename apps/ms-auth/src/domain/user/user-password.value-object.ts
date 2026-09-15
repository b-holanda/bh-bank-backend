import { ValueObject } from '@shared/domain/value-object.js';

export class UserPassword implements ValueObject<string> {
  public constructor(public readonly value: string) {}

  public validate(): boolean {
    return this.value.length > 5;
  }
}
