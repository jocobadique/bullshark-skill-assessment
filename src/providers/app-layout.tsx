"use client";

import React, { ReactNode } from "react";
import Logo from "@/components/logo";
import ThemeSwitcher from "@/components/theme-switcher";
import { Layout, theme } from "antd";
const { Header, Footer } = Layout;

interface Props {
  children: ReactNode;
}

export default function AppLayout({ children }: Props) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: colorBgContainer,
          boxShadow: "0 1px 4px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Logo />
        <ThemeSwitcher />
      </Header>
      {children}
      <Footer style={{ background: colorBgContainer, textAlign: "center" }}>
        Joco Badique ©{new Date().getFullYear()} Bullshark Digital
      </Footer>
    </Layout>
  );
}
