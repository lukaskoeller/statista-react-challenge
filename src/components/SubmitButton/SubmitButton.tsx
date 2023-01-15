import { FC } from "react";
import searchSvg from '../../assets/search_icon.svg';

export const SubmitButton: FC = () => (
  <button
    type="submit"
    className="flex items-center flex-nowrap gap-2 md:gap-4 button--primary !px-9 !my-0 !rounded-l-full"
  >
    <span className="hidden md:!block md:!visible text-white font-semibold">Statista-Suche</span>
    <img className="inline" src={searchSvg} alt="Search" />
  </button>
);