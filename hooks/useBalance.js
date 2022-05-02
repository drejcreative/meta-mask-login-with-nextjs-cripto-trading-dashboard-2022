import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function useBalance() {
  const { data, error } = useSWR(`api/getBalances`, (url) => fetcher(url), {
    refreshInterval: 1000,
  });

  return {
    balance: data,
    loading: !error && !data,
    error,
  };
}

export default useBalance;
