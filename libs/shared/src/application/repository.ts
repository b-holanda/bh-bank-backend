import { Entity } from '../domain/entity.js'
import { Filter } from './filter.js'
import { Pagination } from './pagination.js';

export interface Repository<E extends Entity> {
  find(filter: Filter<E>, page: number, size: number): Promise<Pagination<E>>;
  findById(id: string): Promise<E | undefined>;
  save(entity: E): Promise<E>;
  delete(id: string): void;
}
