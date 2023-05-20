import { useEffect, useState } from "react";
import { useGetPlanets } from "../../api/planet.api";

export function usePlanetsList() {
  const [page, setPage] = useState<number | null>(1);
  const [search, setSearch] = useState("");
  const [count, setCount] = useState<number | null>(null);

  const { isLoading, isError, data, refetch } = useGetPlanets({
    page: search.length > 0 ? null : page,
    search,
  });

  useEffect(() => {
    if (data?.count) {
      setCount((prev) => (prev !== data.count ? data.count : prev));
    }
  }, [data]);

  return {
    search,
    setSearch,
    setPage,
    count,
    isLoading,
    data,
    refetch,
    isError,
  };
}
