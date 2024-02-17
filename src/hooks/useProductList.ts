import axios from "axios";
import { useQuery } from "react-query";
import { QueryParam, QueryParamObject } from "../utils/types";
import { useMemo } from "react";

const parseParams = (queryParams: QueryParam[]) => {
  const obj: QueryParamObject = {};
  const perPage = 5;

  obj["per_page"] = perPage;

  queryParams.forEach((param) => {
    obj[param.key] = param.value;
  });

  return obj;
};

const useProductList = (queryParams: QueryParam[]) => {
  const parsedParams = useMemo(() => parseParams(queryParams), [queryParams]);

  const url = "https://reqres.in/api/products";

  const { isLoading, data, isError, error, status, isPreviousData } = useQuery({
    queryKey: [parsedParams],
    queryFn: async () => {
      try {
        const response = await axios.get(url, {
          params: parsedParams,
        });
        return response.data;
      } catch (error) {
        return error;
      }
    },
    keepPreviousData: true,
  });

  return { data, isLoading, isError, error, status, isPreviousData };
};

export default useProductList;
