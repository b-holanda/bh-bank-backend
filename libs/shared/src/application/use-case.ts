export interface UseCase<I, O> {
  execute(command: I): Promise<O>;
}
