export interface Product {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface QueryParam {
  key: string;
  value: string | number | null;
}
export interface QueryParamObject {
  [key: string]: string | number | null;
}
