import { Input, Select, Checkbox, Space } from "antd";
import { Dispatch, SetStateAction } from "react";

const { Search } = Input;

interface FiltersProps {
  search: string;
  debouncedSearch: string;
  setSearch: (v: string) => void;
  category: string;
  setCategory: (v: string) => void;
  categories: string[];
  showFavOnly: boolean;
  setShowFavOnly: Dispatch<SetStateAction<boolean>>;
}

export default function Filters({
  search,
  debouncedSearch,
  setSearch,
  category,
  setCategory,
  categories,
  showFavOnly,
  setShowFavOnly,
}: FiltersProps) {
  const isSearching = search !== debouncedSearch;

  return (
    <Space size="middle" wrap style={{ marginBottom: 16 }}>
      <Search
        size="large"
        aria-label="Search items"
        placeholder="Search by name"
        loading={isSearching}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: 260 }}
      />

      <Select
        size="large"
        value={category}
        onChange={setCategory}
        options={categories.map((c) => ({ value: c, label: c }))}
        style={{ width: 260 }}
      />

      <Checkbox
        checked={showFavOnly}
        onChange={() => setShowFavOnly((prev) => !prev)}
      >
        Show favourites only
      </Checkbox>
    </Space>
  );
}
