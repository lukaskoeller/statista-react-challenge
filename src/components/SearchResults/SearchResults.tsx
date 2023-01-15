import { FC } from "react";
import { TQuery, TSearchResult } from "../../types";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { TSearchResponse } from "../../api";
import { Pagination } from "../Pagination";
import { paginate } from "../../utils";
import { SearchResultBox } from "../SearchResultBox";

export type SearchResultsProps = {
  searchResults: TSearchResult[] | undefined;
};

const PAGE_SIZE = 10;

export const SearchResults: FC = () => {
  let [searchParams] = useSearchParams();
  const currentPage = searchParams.get('p');
  const { results } = useLoaderData() as unknown as {
    results: TSearchResponse,
  };
  const { items: searchResults } = results;
  
  if (!searchResults || searchResults?.length === 0) return (
    <strong>
      Keine Suchergebnisse
    </strong>
  );

  const totalPages = Math.ceil(searchResults.length / PAGE_SIZE);

  return (
    <>
      <div className="flex">
        <Link
          className="ml-auto button--primary mb-2 py-2 px-4 rounded-full inline-block"
          to={{
            pathname: '/favorites',
            search: searchParams.toString(),
          }}
        >
          Zu den Favoriten
        </Link>
      </div>
      <hr />
      {paginate<TSearchResult>(
        searchResults,
        PAGE_SIZE,
        parseInt(currentPage || '1')
      )?.map(({ title, subject, premium, identifier }) => (
        <SearchResultBox
          key={title}
          title={title}
          subject={subject}
          premium={premium}
          identifier={identifier}
        />
      ))}
      <Pagination totalPages={totalPages} />
    </>
  );
}