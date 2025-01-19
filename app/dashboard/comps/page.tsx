import { fetchCompsPages } from "@/lib/data";
import { CreateComp } from "@/ui/dashboard/buttons";
import { CompsTableSkeleton } from "@/ui/dashboard/skeletons";
import { lusitana } from "@/ui/fonts";
import { Suspense } from "react";
import Search from "@/ui/dashboard/search";
import CompsTable from "@/ui/dashboard/table";
import Pagination from "@/ui/dashboard/pagination";

interface PageProps {
  searchParams?: Promise<{
    q: string;
    page: string;
  }>
}

export default async function Page(props: PageProps) {
  const searchParams = await props.searchParams;
  const q = searchParams?.q || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchCompsPages(q);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Components</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search Components..." />
        <CreateComp />
      </div>
      <Suspense key={q + currentPage} fallback={<CompsTableSkeleton />}>
        <CompsTable q={q} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}