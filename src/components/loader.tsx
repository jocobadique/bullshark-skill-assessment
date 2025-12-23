import { Layout, Spin, theme, Typography } from "antd";

const { Content } = Layout;
const { Title } = Typography;

export default function Loader() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Content
      style={{
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
        margin: "24px 16px",
        padding: 32,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Spin />
    </Content>
  );
}
