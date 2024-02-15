import { useState } from "react";

const availableParams = ["page", "per_page", "id"];

interface QueryParam {
  key: string;
  value: string | number | null;
}

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
    if (params.hasOwnProperty("page")) params = [...queryParams, ...params];

    params.forEach((param) => {
      if (param.value) url.searchParams.set(param.key, String(param.value));
      else url.searchParams.delete(param.key);
    });

    console.log(queryParams);

    window.history.pushState({}, "", url);
    setQueryParams(parseParams());
  };

  return { queryParams, handleSetQueryParams };
};
