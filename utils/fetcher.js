const fetcher = async (url, method, data) => {
  const res = await fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
  return await res.json();
};

export default fetcher;
