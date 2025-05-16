"use client";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const params = useParams<{ id: string }>();
  const { id } = params;

  return (
    <main>
      <h3>Detalhe do Produto</h3>
      <p>ID do produto: {id}</p>
    </main>
  );
}
