import { Input, Select, Checkbox, Space } from "antd";

const { Search } = Input;

export default function Filters({
  search,
  debouncedSearch,
  setSearch,
  category,
  setCategory,
  categories,
  showFavOnly,
  setShowFavOnly,
}: any) {
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
        options={categories.map((c: any) => ({ value: c, label: c }))}
        style={{ width: 260 }}
      />

      <Checkbox
        checked={showFavOnly}
        onChange={() => setShowFavOnly((prev: any) => !prev)}
      >
        Show favourites only
      </Checkbox>
    </Space>
  );
}
