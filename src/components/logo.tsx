import { Typography } from "antd";

const { Title } = Typography;

export default function Logo() {
  return (
    <>
      <Title level={2} style={{ marginBottom: 0, fontWeight: "bolder" }}>
        bullshark.
      </Title>
    </>
  );
}
