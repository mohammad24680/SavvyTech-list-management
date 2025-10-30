export interface QueryParams {
  [key: string]: string | number | boolean | undefined | null;
}

const convertJSONToQueryString = (json?: QueryParams): string => {
  if (!json) return "";

  const keys = Object.keys(json).filter(
    (key) => json[key] !== "" && json[key] != null,
  );
  if (keys.length === 0) return "";

  const queryString = keys
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(json[key]))}`,
    )
    .join("&");

  return `?${queryString}`;
};

export default convertJSONToQueryString;
