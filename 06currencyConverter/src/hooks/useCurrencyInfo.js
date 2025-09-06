import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    let cancelled = false;

    // ✅ NEW endpoint (working in 2025)
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if (!cancelled) {
          setData(json[currency] || {});
        }
      })
      .catch((err) => {
        console.error("Error fetching currency data:", err);
        if (!cancelled) setData({});
      });

    return () => {
      cancelled = true;
    };
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
