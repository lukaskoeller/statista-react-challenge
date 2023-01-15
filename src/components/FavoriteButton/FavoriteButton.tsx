import { FC, useEffect, useState } from "react";

const KEY = 'favorites';

const updateStorage = (favorites: Set<string>) => window.localStorage.setItem(KEY, JSON.stringify([...favorites]));

export type FavoriteButtonProps = {
  id: number;
}

export const FavoriteButton: FC<FavoriteButtonProps> = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { id } = props;
  const idStr = `${id}`;

  const toggleFavorite = (id: string) => {
    const favorites = new Set<string>(JSON.parse(
      window.localStorage.getItem(KEY) || '[]'
    ));

    if (favorites.has(id)) {
      favorites.delete(id);
      setIsActive(false);
    } else {
      favorites.add(id);
      setIsActive(true);
    }

    updateStorage(favorites);
  }

  useEffect(() => {
    const favorites = new Set<string>(JSON.parse(
      window.localStorage.getItem(KEY) || '[]'
    ));
    
    if (favorites.has(idStr)) setIsActive(true);
  });

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(idStr)}
      className="h-full"
    >
      <svg className={isActive ? "stroke-brand-light fill-brand-light" : "stroke-brand-neutral-3"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    </button>
  );
};