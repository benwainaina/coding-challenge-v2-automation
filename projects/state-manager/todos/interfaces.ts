export const ITodosFeatureKey = 'todos';

export interface ITodo {
  content: string;
  id: string;

  // this will be the identifier for the todo, for example a class name, id etc
  identifier: string;
}
