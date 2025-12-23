"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Cookies from "js-cookie";
import { Button, Spin } from "antd";
import { MoonFilled, SunFilled } from "@ant-design/icons";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const isDarkMode = resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Spin size="small" />;
  }

  const toggleTheme = () => {
    const nextTheme = isDarkMode ? "light" : "dark";
    setTheme(nextTheme);
    Cookies.set("theme", nextTheme);
  };

  return (
    <Button
      type="text"
      size="large"
      aria-label="Toggle theme"
      icon={isDarkMode ? <SunFilled /> : <MoonFilled />}
      onClick={toggleTheme}
    />
  );
};

export default ThemeSwitcher;
