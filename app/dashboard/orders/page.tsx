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
  console.log({ q, currentPage });

  return <p>Orders Page</p>;
}