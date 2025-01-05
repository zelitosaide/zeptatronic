import { prisma } from "@/db/prisma";
import { Gallery } from "@/components/learn";

export default async function Home() {
  const users = await prisma.account.findMany();
  
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#000000] text-slate-300">
          <h1 className="text-red-300">NextJS Routing Files</h1>
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
        <div className="bg-[#23272F] text-slate-300">
          <h1 className="text-red-300">ReactJS</h1>
          <Gallery />
        </div>
        <div className="bg-slate-300">
          <h1>My App</h1>
          <ul>
            {users.length > 0 ? (
              users.map((user) => (
                <li key={user.id}>
                  Email: {user.email} {user.role}
                </li>
              ))
            ): null}
          </ul>
        </div>
      </div>
    </>
  );
}
