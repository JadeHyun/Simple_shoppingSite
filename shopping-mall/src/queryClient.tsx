import { QueryClient } from "react-query";
// import { getTodos, postTodo } from "../my-api";

type AnyOBJ = { [key: string]: any };

export const getClient = (() => {
  let client: QueryClient | null = null;

  return () => {
    if (!client)
      client = new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: 1000 * 60 * 60 * 24,
            staleTime: 1000 * 60,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
          },
        },
      });
    return client;
  };
})();

const BASE_API = "https://fakestoreapi.com";

export const fetcher = async ({
  method,
  path,
  body,
  params,
}: {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  body?: AnyOBJ;
  params?: AnyOBJ;
}) => {
  try {
    let url = `${BASE_API}${path}`;
    const fetchOption: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": BASE_API,
      },
    };

    if (params) {
      const searchParams = new URLSearchParams(params);
      url += "?" + searchParams.toString();
    }

    if (body) fetchOption.body = JSON.stringify(body);

    const res = await fetch(url, fetchOption);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
  }
};

export const QueryKeys = {
  PRODUCTS: "PRODUCTS",
};
