import { Entity } from "../domain/entity.js";

export enum FilterOperation {
  EQUAL,
  NOT_EQUAL,
  GREATER_THAN,
  GREATER_THAN_OR_EQUAL,
  LESS_THAN,
  LESS_THAN_OR_EQUAL,
  IN,
  BETWEEN,
};

export type FilterClause<T = unknown> = {
  field: string;
  operation: FilterOperation;
  value: T;
}

export abstract class Filter<E extends Entity> {
  private clauses: Array<FilterClause> = [];

  public getClauses(): Array<FilterClause> {
    return this.clauses;
  }
}
