import { prisma } from "@/lib/prisma";

export async function generateStaticParams() {
  const comps = await prisma.comp.findMany({
    where: { isActive: true }
  });

  return comps.map((comp) => {
    return { slug: comp.id };
  });
}

export default async function Page({
  params
}: { 
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const comp = await prisma.comp.findUnique({
    where: { id: slug }
  });

  return (
    <>
      <h1>📀 {comp?.name}</h1>
    </>
  );
}