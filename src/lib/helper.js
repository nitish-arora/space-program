export function getQueryParams(queryString) {
  const urlSearchParams = new URLSearchParams(queryString);
  const queryParams = {};
  for (const [key, value] of urlSearchParams) {
    queryParams[key] = value;
  }
  return queryParams;
}

export function getQueryString(queryParams) {
  const urlSearchParams = new URLSearchParams();
  for (let key in queryParams) {
    urlSearchParams.set(key, queryParams[key]);
  }
  return urlSearchParams.toString();
}
