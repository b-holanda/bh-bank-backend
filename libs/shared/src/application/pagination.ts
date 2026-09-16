import { Entity } from "../domain/entity";

export interface Pagination<E extends Entity> {
  data: Array<E>;
  page: number;
  next: number;
  end: number;
  size: number;
}
