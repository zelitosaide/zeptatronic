import Link from "next/link";

export function Comp({ name }: { name: string }) {
  return (
    <li>
      <Link href={`/comps/${name.toLocaleLowerCase()}`}>👉 {name}</Link>
    </li>
  );
}