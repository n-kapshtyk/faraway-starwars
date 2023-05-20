import nock from "nock";
import { BASE_URL } from "../api/axios-setup";

export function getNock(): nock.Scope {
  return nock(BASE_URL);
}
