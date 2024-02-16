import { useState } from "react";
import { QueryParam } from "../utils/types";

const availableParams = ["page", "per_page", "id"];

const parseParams = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const queryParams: QueryParam[] = [];

  availableParams.forEach((key) => {
    if (params.has(key) && params.get(key)) {
      queryParams.push({ key: key, value: params.get(key) });
    }
  });

  return queryParams;
};

export const useQueryParams = () => {
  const [queryParams, setQueryParams] = useState<QueryParam[]>(parseParams());

  const handleSetQueryParams = (params: QueryParam[]) => {
    const url = new URL(document.location.pathname, document.location.origin);

    //If id is not present in params array, add previous params to the array
    if (!params.hasOwnProperty("id")) params = [...queryParams, ...params];

    //Add params to url.searchParams
    params.forEach((param) => {
      if (param.value) url.searchParams.set(param.key, String(param.value));
      else url.searchParams.delete(param.key);
    });

    window.history.pushState({}, "", url);
    setQueryParams(parseParams());
  };

  return { queryParams, handleSetQueryParams };
};
