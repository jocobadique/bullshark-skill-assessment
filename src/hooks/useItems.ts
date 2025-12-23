"use client";

import { useEffect, useState } from "react";
import itemsData from "@/data/items.json";
import type { Item } from "@/types/item";

export function useItems() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setItems(itemsData as Item[]);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return { items, loading };
}
