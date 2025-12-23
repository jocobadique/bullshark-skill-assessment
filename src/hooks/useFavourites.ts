"use client";

import { useEffect, useState } from "react";

const KEY = "bullshark-favourites";

export function useFavourites() {
  const [favourites, setFavourites] = useState<number[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(KEY);
    if (stored) setFavourites(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(favourites));
  }, [favourites]);

  const toggleFavourite = (id: number) => {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return { favourites, toggleFavourite };
}
