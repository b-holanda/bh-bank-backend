import { Entity } from "@shared/domain/entity.js";
import { PolicieEffect } from "./policie-effect.enum.js";
import { PolicieAction } from "./policie-action.enum.js";
import { PolicieValidator } from "./policie.validator.js";

export class Policie extends Entity {
    public constructor(
        private effect: PolicieEffect,
        private resource: string,
        private action: PolicieAction,
        id: string,
        active: boolean = true
    ) {
        super(id, active);
    }

    public validate(validator: PolicieValidator): void {
        validator.validate(this);
    }

    public getEffect(): PolicieEffect {
        return this.effect;
    }

    public getResource(): string {
        return this.resource;
    }

    public getAction(): PolicieAction {
        return this.action;
    }

    public isAllowed(resource: string, action: PolicieAction): boolean {
        return this.effect === PolicieEffect.ALLOW && this.resource === resource && this.action === action;
    }

    public isDenied(resource: string, action: PolicieAction): boolean {
        return this.effect === PolicieEffect.DENY && this.resource === resource && this.action === action;
    }

    public isAllowedOrDenied(resource: string, action: PolicieAction): boolean {
        return this.isAllowed(resource, action) || this.isDenied(resource, action);
    }

    public updateEffect(effect: PolicieEffect): void {
        this.effect = effect;
    }

    public updateResource(resource: string): void {
        this.resource = resource;
    }

    public updateAction(action: PolicieAction): void {
        this.action = action;
    }
}