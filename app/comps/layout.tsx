import Link from "next/link";

export default function CompsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Link href="/comps">CompsLayout</Link>
      {children}
    </section>
  );
}