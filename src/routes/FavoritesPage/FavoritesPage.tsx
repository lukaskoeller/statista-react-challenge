import { FC } from "react";
import { useLoaderData } from "react-router-dom";
import { TSearchResponse } from "../../api";
import { SearchResultBox } from "../../components";

const KEY = 'favorites';

export const FavoritesPage: FC = () => {
  const { results } = useLoaderData() as unknown as { results: TSearchResponse };
  const { items: searchResults } = results;

  const favorites = new Set<string>(JSON.parse(
    window.localStorage.getItem(KEY) || '[]'
  ));
  

  return (
    <>
      <div className="py-8 px-4 md:px-10 bg-gradient-to-br from-brand-gradient-start to-brand-strong">
        <h1 className="font-light text-2xl md:text-6xl leading-tight text-white margin-bottom-10 margin-bottom-s-20">
          Favoriten
        </h1>
      </div>
      <section className="max-w-screen-md mx-auto px-4 py-10">
        {searchResults
          .filter(({ identifier }) => favorites.has(`${identifier}`))
          .map(({ title, subject, premium, identifier }) => (
            <SearchResultBox
              key={title}
              title={title}
              subject={subject}
              premium={premium}
              identifier={identifier}
            />
          ))}
      </section>
    </>
  );
};
