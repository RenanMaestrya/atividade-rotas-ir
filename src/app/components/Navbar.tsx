"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "10px",
        padding: "10px",
        borderBottom: "1px solid gray",
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/about">Sobre</Link>
      <Link href="/product/123">Produto 123</Link>
    </nav>
  );
}
