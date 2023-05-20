import { useQuery } from "@tanstack/react-query";
import { Planet, PlanetsListResponse } from "./types";
import { axiosInstance } from "./axios-setup";

interface UseGetPlanetsProps {
  page: number | null;
  search: string;
}

export function useGetPlanets({ page, search }: UseGetPlanetsProps) {
  return useQuery<PlanetsListResponse>(
    ["get-planets", { page, search }],
    async () => {
      const response = await axiosInstance.get<PlanetsListResponse>(
        "/planets",
        {
          params: { page, search },
        }
      );

      return response.data;
    }
  );
}

interface UseGetPlanetByIdProps {
  planetId: string;
}

export function useGetPlanetById({ planetId }: UseGetPlanetByIdProps) {
  return useQuery<Planet>(["get-planet", planetId], async () => {
    const response = await axiosInstance.get<Planet>(`/planets/${planetId}`);

    return response.data;
  });
}
