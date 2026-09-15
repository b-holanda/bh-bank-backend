import { Validator } from "./validation/validator.js";

export abstract class Entity {
    public constructor(
        private id?: string,
        private active: boolean = true
    ) {}

    public abstract validate(validator: Validator<this>): void;

    public getId(): string | undefined {
        return this.id;
    }

    public isActive(): boolean {
        return this.active;
    }
    
    public activate(): void {
        this.active = true;
    }

    public deactivate(): void {
        this.active = false;
    }
}
