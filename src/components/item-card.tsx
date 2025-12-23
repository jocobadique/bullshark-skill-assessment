import { Card, Typography, Button } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Item } from "@/types/item";

const { Text } = Typography;

export interface ItemCardProps {
  item: Item;
  isFavourite: boolean;
  onToggleFavourite: () => void;
}

export default function ItemCard({
  item,
  isFavourite,
  onToggleFavourite,
}: ItemCardProps) {
  return (
    <Card
      title={item.name}
      actions={[
        <Button
          aria-label="Toggle favourite"
          type="text"
          icon={isFavourite ? <StarFilled /> : <StarOutlined />}
          onClick={onToggleFavourite}
        />,
      ]}
    >
      <Text>Category: {item.category}</Text>
      <br />
      <Text>Price: ${item.price}</Text>
      <br />
      <Text>Rating: {item.rating}</Text>
    </Card>
  );
}
