import type { Metadata } from "next";
import "./globals.css";
import { cookies } from "next/headers";
import AntDesignProviders from "@/providers/ant-design-providers";
import AppLayout from "@/providers/app-layout";

export const metadata: Metadata = {
  title: "Bullshark",
  description: "Bullshark Software Engineer Assessment",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const themeCookie = await cookieStore.get("theme");
  const defaultTheme = themeCookie?.value || "light";

  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <body suppressHydrationWarning suppressContentEditableWarning>
        <AntDesignProviders defaultTheme={defaultTheme}>
          <AppLayout>{children}</AppLayout>
        </AntDesignProviders>
      </body>
    </html>
  );
}
