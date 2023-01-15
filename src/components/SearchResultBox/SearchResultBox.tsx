import { FC } from "react";
import { Link, useSearchParams } from "react-router-dom";
import statisticSvg from '../../assets/statistic_icon.svg';
import statisticPremiumSvg from '../../assets/statisticPremium_icon.svg';
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { TSearchResult } from "../../types";

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
    <div className="flex !flex-nowrap gap-4 !p-4 hover:bg-brand-neutral-2 rounded cursor-pointer">
      <Link
        className="flex !flex-nowrap gap-4"
        to={{
          pathname: `/${identifier}`,
          search: searchParams.toString(),
        }}
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
      <div className="ml-auto">
        <FavoriteButton id={identifier} />
      </div>
    </div>
  );
};