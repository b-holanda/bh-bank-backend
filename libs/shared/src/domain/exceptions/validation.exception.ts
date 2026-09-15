import { DomainException } from "./domain.exeception.js";

export class ValidationException extends DomainException {
  constructor(public readonly erros: Array<string>) {
    super('Validation exception');
  }

  hasErrors(): boolean {
    return this.erros.length > 0;
  }
}
