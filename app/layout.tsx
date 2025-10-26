"use client"
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Provider store={store}>

        <Navbar />
        <main className="p-6">{children}</main>
        <Footer />
        </Provider>
      </body>
    </html>
  );
}
