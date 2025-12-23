import { Button, Space } from "antd";

export default function SortControls({ sortDir, setSortBy, setSortDir }: any) {
  return (
    <Space size="middle" wrap style={{ marginBottom: 16 }}>
      <Button size="large" onClick={() => setSortBy("price")}>
        Sort by Price
      </Button>
      <Button size="large" onClick={() => setSortBy("rating")}>
        Sort by Rating
      </Button>
      <Button
        size="large"
        onClick={() => setSortDir(sortDir === "asc" ? "desc" : "asc")}
      >
        Direction: {sortDir.toUpperCase()}
      </Button>
    </Space>
  );
}
