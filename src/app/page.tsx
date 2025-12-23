"use client";

import EmptyState from "@/components/emptyState";
import Filters from "@/components/filters";
import ItemCard from "@/components/item-card";
import Loader from "@/components/loader";
import SortControls from "@/components/sortControls";
import { useDebounce } from "@/hooks/useDebounce";
import { useFavourites } from "@/hooks/useFavourites";
import { useItems } from "@/hooks/useItems";
import { Col, Layout, Row, theme, Typography } from "antd";

import { useState } from "react";

const { Content } = Layout;
const { Title } = Typography;

export default function Home() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { items, loading } = useItems();
  const { favourites, toggleFavourite } = useFavourites();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"price" | "rating" | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [showFavOnly, setShowFavOnly] = useState(false);

  const categories = ["All", ...new Set(items.map((i) => i.category))];

  const debouncedSearch = useDebounce(search, 300);

  const filteredItems = items
    .filter((i) => i.name.toLowerCase().includes(debouncedSearch.toLowerCase()))
    .filter((i) => (category === "All" ? true : i.category === category))
    .filter((i) => (showFavOnly ? favourites.includes(i.id) : true))
    .sort((a, b) => {
      if (!sortBy) return 0;
      return sortDir === "asc" ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
    });

  if (loading) return <Loader />;

  return (
    <>
      <Content
        style={{
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          margin: "24px 16px",
          padding: 32,
        }}
      >
        <Title level={3}>Lists of Products</Title>

        <Filters
          search={search}
          debouncedSearch={debouncedSearch}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          categories={categories}
          showFavOnly={showFavOnly}
          setShowFavOnly={setShowFavOnly}
        />

        <SortControls
          sortBy={sortBy}
          sortDir={sortDir}
          setSortBy={setSortBy}
          setSortDir={setSortDir}
        />

        {filteredItems.length === 0 ? (
          <EmptyState />
        ) : (
          <Row gutter={[16, 16]}>
            {filteredItems.map((item) => (
              <Col xs={24} sm={12} md={8} key={item.id}>
                <ItemCard
                  item={item}
                  isFavourite={favourites.includes(item.id)}
                  onToggleFavourite={() => toggleFavourite(item.id)}
                />
              </Col>
            ))}
          </Row>
        )}
      </Content>
    </>
  );
}
