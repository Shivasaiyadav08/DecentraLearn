"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Navbar() {
  const cartCount = useSelector((state: RootState) => state.cart.items.length);

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <h1 className="text-2xl font-bold">Decentralearn</h1>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/student">Student</Link>
        <Link href="/teacher">Teacher</Link>
        <span className="bg-white text-blue-600 px-2 rounded">🛒 {cartCount}</span>
      </div>
    </nav>
  );
}
