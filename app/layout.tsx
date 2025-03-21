
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Navbar from "./components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        <Toaster />
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
