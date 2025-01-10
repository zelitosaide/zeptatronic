import Link from "next/link";

interface CompProps {
  id: string
  name: string
  type: string
  isActive: boolean
  description: string
  datasheet: string | null
  images: string[]
  price: number
  stock: number
  createdAt: Date
  updatedAt: Date
  categories: string[]
}

export function Comp({ id, name }: CompProps) {
  return (
    <li>
      <Link href={`/comps/${id}`}>👉 {name}</Link>
    </li>
  );
}