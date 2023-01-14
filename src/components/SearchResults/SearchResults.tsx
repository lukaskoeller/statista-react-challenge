import { FC, useState } from "react";
import { TQuery, TSearchResult } from "../../types";
import statisticSvg from '../../assets/statistic_icon.svg';
import statisticPremiumSvg from '../../assets/statisticPremium_icon.svg';
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { TSearchResponse } from "../../api";
import { FormKey } from "../../App";
import { Pagination } from "../Pagination";
import { paginate } from "../../utils";

export type SearchResultBoxProps = Pick<
  TSearchResult, 'title' | 'subject' | 'premium' | 'identifier'
>;

export const SearchResultBox: FC<SearchResultBoxProps> = (props) => {
  let [searchParams] = useSearchParams();
  const {
    title,
    subject,
    premium,
    identifier,
  } = props;

  return (
    <Link
      to={{
        pathname: `/${identifier}`,
        search: searchParams.toString(),
      }}
      className="flex !flex-nowrap gap-4 !p-4 hover:bg-brand-neutral-2 rounded cursor-pointer"
    >
      <img
        className="w-7 h-7 block"
        src={premium ? statisticPremiumSvg : statisticSvg}
        alt={premium ? 'Premium Statistik' : 'Free Statistik'}
      />
      <div>
        <h3 className="text-base text-brand-light font-semibold">{title}</h3>
        <p className="text-brand-neutral-4 mt-1">{subject}</p>
      </div>
    </Link>
  );
};

export type SearchResultsProps = {
  searchResults: TSearchResult[] | undefined;
};

const PAGE_SIZE = 10;

export const SearchResults: FC = () => {
  let [searchParams] = useSearchParams();
  const currentPage = searchParams.get('p');
  const { results, q } = useLoaderData() as unknown as {
    results: TSearchResponse,
    q: TQuery;
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