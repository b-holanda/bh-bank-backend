import { ValueObject } from '@shared/domain/value-object.js'

export class UserEmail implements ValueObject<string> {
    public constructor(public readonly value: string) {}

    public validate(): boolean {
        return this.value.includes('@');
    }
}
