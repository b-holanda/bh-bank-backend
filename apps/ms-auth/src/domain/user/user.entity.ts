import { Entity } from "@shared/domain/entity.js";
import { Validator } from "@shared/domain/validation/validator.js";
import { UserEmail } from "./user-email.value-object.js";
import { UserMfaStrategy } from "./user-mfa-strategy.enum.js";

export class User extends Entity {
    public constructor(
        private fistName: string,
        private lastName: string,
        private email: UserEmail,
        private password: string,
        private mfaEnabledStrategies: Array<UserMfaStrategy>,
        private group: string,
        id?: string,
        active: boolean = true
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
}
