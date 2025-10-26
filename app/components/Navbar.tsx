import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <h1 className="text-2xl font-bold">Decentralearn</h1>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/student">Student</Link>
        <Link href="/teacher">Teacher</Link>
      </div>
    </nav>
  );
}
