import { Entity } from '@shared/domain/entity.js';
import { Policie } from '../policie/policie.entity.js';
import { UserGroupValidator } from './user-group.validator.js';

export class UserGroup extends Entity {
  public constructor(
    private name: string,
    private policies: Array<Policie>,
    private users: Array<string>,
    id?: string,
    active: boolean = true,
  ) {
    super(id, active);
  }

  public validate(validator: UserGroupValidator): void {
    validator.validate(this);
  }

  public getName(): string {
    return this.name;
  }

  public getPolicies(): Array<Policie> {
    return this.policies;
  }

  public getUsers(): Array<string> {
    return this.users;
  }

  public updateName(name: string): void {
    this.name = name;
  }

  public addPolicy(policy: Policie): void {
    this.policies.push(policy);
  }

  public removePolicy(policy: Policie): void {
    this.policies = this.policies.filter((p) => p.getId() !== policy.getId());
  }

  public addUser(userId: string): void {
    this.users.push(userId);
  }

  public removeUser(userId: string): void {
    this.users = this.users.filter((uid) => uid !== userId);
  }
}
