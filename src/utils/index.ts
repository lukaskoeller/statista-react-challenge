import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const paginate = <T>(array: T[], pageSize: number, pageNumber: number) => array
  .slice((pageNumber - 1) * pageSize, pageNumber * pageSize);


export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
