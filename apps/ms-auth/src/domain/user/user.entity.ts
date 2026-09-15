import { Entity } from '@shared/domain/entity.js';
import { Validator } from '@shared/domain/validation/validator.js';
import { UserEmail } from './user-email.value-object.js';
import { UserMfaStrategy } from './user-mfa-strategy.enum.js';
import { UserPassword } from './user-password.value-object.js';
import { DomainException } from '@shared/domain/exceptions/domain.exeception.js';

export class User extends Entity {
  public constructor(
    private fistName: string,
    private lastName: string,
    private email: UserEmail,
    private mfaEnabledStrategies: Array<UserMfaStrategy>,
    private group: string,
    private password?: UserPassword,
    private totpSecret?: string,
    private recoveryCodes?: Array<string>,
    id?: string,
    active: boolean = true,
  ) {
    super(id, active);
  }

  public validate(validator: Validator<this>): void {
    validator.validate(this);
  }

  public getFirstName(): string {
    return this.fistName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public getEmail(): UserEmail {
    return this.email;
  }

  public getPassword(): UserPassword | undefined {
    return this.password;
  }

  public getMfaEnabledStrategies(): Array<UserMfaStrategy> {
    return this.mfaEnabledStrategies;
  }

  public getGroup(): string {
    return this.group;
  }

  public getTotpSecret(): string | undefined {
    return this.totpSecret;
  }

  public getRecoveryCodes(): Array<string> | undefined {
    return this.recoveryCodes;
  }

  public recovery(code: string): boolean {
    if (!this.recoveryCodes || this.recoveryCodes?.length == 0) {
      return false;
    }

    if (!this.recoveryCodes?.includes(code)) {
      return false;
    }

    this.recoveryCodes = this.recoveryCodes?.filter((c) => c != code);

    return true;
  }

  public rename(firstName: string, lastName: string): void {
    this.fistName = firstName;
    this.lastName = lastName;
  }

  public addMfaStrategy(mfaStrategy: UserMfaStrategy): void {
    if (this.mfaEnabledStrategies.includes(mfaStrategy)) {
      throw new DomainException('Strategy already added');
    }

    this.mfaEnabledStrategies.push(mfaStrategy);
  }
}
