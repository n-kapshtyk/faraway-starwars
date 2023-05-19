import { BASE_URL } from "../api/axios-setup";

export function getPlanetIdFromUrl(url: string) {
  return url.replace(`${BASE_URL}/planets/`, "");
}
