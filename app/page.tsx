// import { prisma } from "./db/prisma";

export default function Home() {
  // const users = await prisma.account.findMany();
  // console.log({ users });

  return (
    <>
      <h1>Zeptatronic</h1>
      <div>
        <h1 className="text-red-300">Routing Files</h1>
        <p>layout ✅</p>
        <p>page ✅</p>
        <p>loading: Loading UI</p>
        <p>not-found: Not found UI</p>
        <p>error: Error UI</p>
        <p>global-error: Global error UI</p>
        <p>route: API endpoint</p>
        <p>template: Re-rendered layout</p>
        <p>default: Parallel route fallback page</p>
      </div>
    </>
  );
}
