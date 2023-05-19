import { useQuery } from "@tanstack/react-query";
import { Planet } from "./types";
import { axiosInstance } from "./axios-setup";

interface UseGetPlanetsProps {
  page: number | null;
  search: string;
}

export function useGetPlanets({ page, search }: UseGetPlanetsProps) {
  return useQuery(["get-planets", { page, search }], async () => {
    const response = await axiosInstance.get("/planets", {
      params: { page, search },
    });

    console.log("response", response);

    return response.data;
  });
}

interface UseGetPlanetByIdProps {
  planetId: string;
}

export function useGetPlanetById({ planetId }: UseGetPlanetByIdProps) {
  return useQuery<Planet>(["get-planet", planetId], async () => {
    const response = await axiosInstance.get(`/planets/${planetId}`);

    return response.data;
  });
}
