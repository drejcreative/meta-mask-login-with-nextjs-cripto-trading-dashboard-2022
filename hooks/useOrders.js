import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function useOrders() {
  const { data, error } = useSWR(`api/getOrders`, (url) => fetcher(url), {
    refreshInterval: 1000,
  });

  return {
    orders: data,
    loading: !error && !data,
    error,
  };
}

export default useOrders;
