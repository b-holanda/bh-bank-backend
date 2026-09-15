import { Validator } from "@shared/domain/validation/validator.js";
import { UserGroup } from "./user-group.entity.js";

export class UserGroupValidator extends Validator<UserGroup> {
    public validate(value: UserGroup): void {
        if (!value.getName()) {
            this.addError('Group name is required!');
        }
    }
}
