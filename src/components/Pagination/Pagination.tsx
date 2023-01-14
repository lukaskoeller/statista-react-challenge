import { FC } from "react";
import { useSearchParams } from "react-router-dom";

export type PaginationProps = {

  /**
   * Total number of pages.
   */
  totalPages: number;
}

export const Pagination: FC<PaginationProps> = (props) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('p');
  
  const {
    totalPages,
  } = props;

  return (
    <div className="flex gap-3 items-center justify-center my-6">
      <button
        className="rounded-full text-brand-strong p-3 shadow-md hover:text-brand-light disabled:bg-brand-neutral-2 disabled:cursor-not-allowed disabled:hover:text-brand-neutral-3 disabled:text-brand-neutral-3"
        type="button"
        // rel="prev"
        aria-label="Vorherige Seite"
        disabled={currentPage === '1'}
        onClick={() => {
          setSearchParams(
            (prevParams) => {
              prevParams.set('p', `${Math.max(parseInt(currentPage || '1') - 1, 1)}` || '1');
              return prevParams;
            }
          )
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 16 16">
          <path fillRule="evenodd" clipRule="evenodd" d="M4.293 8.707a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L6.414 8l4.293 4.293a1 1 0 01-1.414 1.414l-5-5z" fill="currentColor"></path>
        </svg>
      </button>
      <div>
        <strong>{currentPage || '1'}</strong>
        {' / '}
        {totalPages}
      </div>
      <button
        className="rounded-full text-brand-strong p-3 shadow-md hover:text-brand-light disabled:bg-brand-neutral-2 disabled:cursor-not-allowed disabled:hover:text-brand-neutral-3 disabled:text-brand-neutral-3"
        type="button"
        // rel="next"
        aria-label="Nächste Seite"
        disabled={`${totalPages}` === currentPage}
        onClick={() => {
          setSearchParams(
            (prevParams) => {
              prevParams.set('p', `${parseInt(currentPage || '1') + 1}` || '1');
              return prevParams;
            }
          )
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" height="13" width="13" viewBox="0 0 16 16">
          <path fillRule="evenodd" clipRule="evenodd" d="M11.707 7.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L9.586 8 5.293 3.707a1 1 0 011.414-1.414l5 5z" fill="currentColor"></path>
        </svg>
      </button>
    </div>
  );
};

// export const usePagination = (totalPages: number) => {
  

//   return {
//     Pagination,
//   }
// };