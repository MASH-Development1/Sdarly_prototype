import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white fixed">
      <div className="p-4 text-lg font-bold border-b border-gray-700">
        Dashboard
      </div>
      <ul className="p-4 space-y-4">
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/seller">
            Seller
          </Link>
        </li>
        <li>
          <Link href="/admin">
            Admin
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
      </ul>
    </aside>
  );
}