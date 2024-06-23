import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/components/Provider";
import {Providers} from '@/redux/Provider.redux';

export const metadata: Metadata = {
  title: "Travel Planner",
  description: "Travel Planner next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Provider>
        <Providers>
          {children}
        </Providers>
      </Provider>
          
      </body>
    </html>
  );
}
