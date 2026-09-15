import { Validator } from '@shared/domain/validation/validator.js';
import { Policie } from './policie.entity.js';

export class PolicieValidator extends Validator<Policie> {
  public validate(value: Policie): void {
    if (!value.getEffect()) {
      this.addError('Effect is required');
    }
    if (!value.getResource()) {
      this.addError('Resource is required');
    }
    if (!value.getAction()) {
      this.addError('Action is required');
    }
  }
}
