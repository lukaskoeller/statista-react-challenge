import { TSearchResult } from "../types";

export type TSearchResponse = {
  items: TSearchResult[];
}

export const readSearch = (query: string | undefined | null): Promise<TSearchResponse> | TSearchResponse => {
  if (query === 'Statista') return fetch(
    'https://cdn.statcdn.com/static/application/search_results.json'
  ).then((response) => response.json());

  return { items: [] };
}