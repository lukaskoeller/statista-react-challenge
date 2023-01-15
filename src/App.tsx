// import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { readSearch } from './api';
import './App.css';
import searchSvg from './assets/search_icon.svg';
import { Form, Outlet, useLoaderData, useSubmit } from 'react-router-dom';
import { TQuery } from './types';

export enum FormKey {
  SearchQuery = 'q',
}

// @todo
// const handleSubmit = (e: FormEvent): string | null => {
//   // e.preventDefault();
//   const form = e.target as HTMLFormElement;
//   const formData = new FormData(form);
//   const searchQuery = formData.get(FormKey.SearchQuery);
//   if (!(typeof searchQuery === 'string')) return null;
//   return searchQuery;
// }

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get(FormKey.SearchQuery);
  const results = await readSearch(q);
  
  return { results, q };
}

function App() {
  const submit = useSubmit();
  const { q } = useLoaderData() as unknown as { q: TQuery };
  
  // @todo
  // const [searchQuery, setSearchQuery] = useState<string>();

  // @todo
  // const query = useQuery({ queryKey: ['search', searchQuery], queryFn: () => readSearch(searchQuery) });
  // const searchResults = query?.data?.items;
  // console.log(searchResults);
  
  useEffect(() => {
    if (!document || !q) return;
    (document?.getElementById("q") as HTMLInputElement).value = q;
  }, [q]);

  return (
    <div className="App 2xl:grid 2xl:grid-cols-2">
      <section>
        <div className="2xl:sticky 2xl:top-0 2xl:h-screen px-4 md:px-10 py-12 md:py-36 bg-gradient-to-br from-brand-gradient-start to-brand-strong">
          <div className="grid justify-items-center 2xl:justify-items-start">
            <h1 className="font-light text-2xl md:text-6xl leading-tight text-white margin-bottom-10 margin-bottom-s-20">
              Empowering people with data
            </h1>
            <h2 className="font-normal text-brand-neutral-3 text-lg md:text-3xl mt-7">
              Insights und Fakten aus 170 Branchen und 150+ Ländern
            </h2>
            <Form
              id="search-form"
              role="search"
              className="bg-white h-16 !mt-16 rounded-full overflow-hidden flex flex-nowrap items-stretch border border-solid border-brand-light"
              // @todo
              // onSubmit={(e: FormEvent) => {
              //   const query = handleSubmit(e);
              //   if (query === null) return;
              //   setSearchQuery(query);
              // }}
            >
              <input
                className="placeholder:italic placeholder:font-normal placeholder:text-brand-neutral-4 px-6 grow"
                placeholder="Statistiken, Prognosen und Umfragen finden"
                aria-label="Suche"
                type="search"
                name={FormKey.SearchQuery}
                id={FormKey.SearchQuery}
                defaultValue={q || ''}
                onChange={(event) => {
                  const isFirstSearch = q == null;
                  submit(event.currentTarget.form, {
                    replace: !isFirstSearch,
                  });
                }}
              />
              <button
                type="submit"
                className="flex items-center flex-nowrap gap-2 md:gap-4 button--primary !px-9 !my-0 !rounded-l-full"
              >
                <span className="hidden md:!block md:!visible text-white font-semibold">Statista-Suche</span>
                <img className="inline" src={searchSvg} alt="Search" />
              </button>
            </Form>
          </div>
        </div>
      </section>
      <section className="max-w-screen-md mx-auto px-4 py-10">
        <Outlet />
      </section>
    </div>
  )
}

export default App
