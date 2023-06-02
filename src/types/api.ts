export interface IRequest<T> {
  data?: T;
}

export interface IResponse<T> {
  data?: T;
  error?: string;
}