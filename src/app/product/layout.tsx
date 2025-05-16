import { ReactNode } from "react";

export default function ProductLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2>Seção de Produtos</h2>
      {children}
    </div>
  );
}
