import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App, { loader as rootLoader } from './App';
import './index.css';
import { DetailPage } from './routes/DetailPage';
import { SearchResults } from './components';
import { FavoritesPage } from './routes/FavoritesPage';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: rootLoader,
    children: [
      {
        path: "/",
        loader: rootLoader,
        element: <SearchResults />,
      },
      {
        path: "/:identifier",
        loader: rootLoader,
        element: <DetailPage />,
      },
    ],
  },
  {
    path: "/favorites",
    loader: rootLoader,
    element: <FavoritesPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
      <RouterProvider router={router} />
    {/* </QueryClientProvider> */}
  </React.StrictMode>,
)
