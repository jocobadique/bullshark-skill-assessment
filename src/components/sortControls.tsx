import { Button, Space, Tooltip } from "antd";
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";
import { Dispatch, SetStateAction } from "react";

type SortBy = "price" | "rating" | null;
type SortDirection = "asc" | "desc";

interface SortControlsProps {
  sortBy: SortBy;
  sortDir: SortDirection;
  setSortBy: Dispatch<SetStateAction<SortBy>>;
  setSortDir: Dispatch<SetStateAction<SortDirection>>;
}

export default function SortControls({
  sortBy,
  sortDir,
  setSortBy,
  setSortDir,
}: SortControlsProps) {
  return (
    <Space size="middle" wrap style={{ marginBottom: 16 }}>
      <Button
        size="large"
        type={sortBy === "price" ? "primary" : "default"}
        onClick={() => setSortBy("price")}
      >
        Sort by Price
      </Button>

      <Button
        size="large"
        type={sortBy === "rating" ? "primary" : "default"}
        onClick={() => setSortBy("rating")}
      >
        Sort by Rating
      </Button>

      <Tooltip
        title={sortDir === "asc" ? "Ascending order" : "Descending order"}
      >
        <Button
          size="large"
          aria-label="Toggle sort direction"
          icon={
            sortDir === "asc" ? (
              <SortAscendingOutlined />
            ) : (
              <SortDescendingOutlined />
            )
          }
          onClick={() =>
            setSortDir((prev) => (prev === "asc" ? "desc" : "asc"))
          }
        />
      </Tooltip>
    </Space>
  );
}
