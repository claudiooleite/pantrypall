import Navbar from "@/components/Navbar";

export default function PantryLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>

      {children}
      <Navbar />
    </section>
  );
}
