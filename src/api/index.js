import { get } from "./apiUtils";

const BASE_URL = "https://api.spacexdata.com/v3/launches?limit=100";

export function getSpaceLaunches(queryParams) {
  let url = BASE_URL;
  if (queryParams) {
    url += `&${queryParams}`;
  }
  return get(url);
}
