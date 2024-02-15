import axios from "axios";
import { useQuery } from "react-query";

interface QueryParam {
  key: string;
  value: string | number | null;
}
interface QueryParamObject {
  [key: string]: string | number | null;
}

const parseParams = (queryParams: QueryParam[]) => {
  const obj: QueryParamObject = {};
  const perPage = 5;

  obj["per_page"] = perPage;

  queryParams.forEach((param) => {
    obj[param.key] = param.value;
  });

  console.log(obj);

  return obj;
};

const useProductList = (queryParams: QueryParam[]) => {
  const parsedParams = parseParams(queryParams);
  const url = "https://reqres.in/api/products";
  const { isLoading, data, isError, error, status, isPreviousData } = useQuery({
    queryKey: ["productList", parsedParams],
    queryFn: async () => {
      try {
        const response = await axios.get(url, {
          params: parsedParams,
        });
        return response.data;
      } catch (error) {
        console.error(error);
        return error;
      }
    },
    keepPreviousData: true,
  });

  return { data, isLoading, isError, error, status, isPreviousData };
};

export default useProductList;
