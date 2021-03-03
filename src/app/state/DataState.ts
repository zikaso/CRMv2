

export enum ProductActionEventTypes{
  "GET_ALL_PRODUCT",
  "ADD_NEW_PRODUCT",
  "EDIT_PRODUCT",
  "DELETE_PRODUCT",

}


export interface ProductActionEvent{
    type:ProductActionEventTypes,
    payload?: any;
}

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
