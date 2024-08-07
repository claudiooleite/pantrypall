import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { PantryProvider } from "./utilities/PantryContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        <PantryProvider>{children}</PantryProvider>
        <Navbar />
      </body>
    </html>
  );
}
