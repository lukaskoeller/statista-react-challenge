import { FC } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { TSearchResponse } from "../../api";

export const DetailPage: FC = () => {
  let { identifier } = useParams();
  const { results } = useLoaderData() as unknown as { results: TSearchResponse };
  const { items: searchResults } = results;

  const statistic = searchResults.find((result) => `${result.identifier}` === identifier);

  return (
    <section>
      <h3 className="text-2xl text-brand-strong">{statistic?.title}</h3>
      <hr className="w-16 border-brand-neutral-3 my-3" />
      {statistic?.date && (
        <strong className="block mb-3">
          <time dateTime={statistic?.date}>
            {new Date(statistic?.date).toLocaleDateString([], { day: 'numeric', month: 'short', year: 'numeric' })}
          </time>
        </strong>
      )}
      <article className="my-5">
        <p className="text-lg">{statistic?.description}</p>
      </article>
      {!statistic?.premium && (
        <figure className="my-6">
          <img src={statistic?.image_url} alt={statistic?.title} />
          <figcaption>{statistic?.subject}</figcaption>
        </figure>
      )}
    </section>
  );
};
