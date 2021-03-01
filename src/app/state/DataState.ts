export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR
}
export interface DataState<T> {
  dataState?:DataStateEnum,
  data?:T,
  errorMessage?:string
  error_code?:string
}
