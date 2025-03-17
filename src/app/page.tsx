import ThemeToggler from "@/components/ThemeToggler";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
    <header>
      <h1 className="header">Welcome to the Themed Page</h1>
      <div className="mb-4">
        <ThemeToggler />
      </div>
    </header>

    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="card">
        <h2 className="text-2xl font-semibold">Card 1</h2>
        <p>This is a card with content in the current theme.</p>
        <button className="btn-primary">Primary Button</button>
      </div>

      <div className="card">
        <h2 className="text-2xl font-semibold">Card 2</h2>
        <p>This is another card with content.</p>
        <button className="btn-secondary">Secondary Button</button>
      </div>
    </section>

    <footer>
      <p>Footer content here</p>
    </footer>
  </div>
);
};
