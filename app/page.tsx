import { prisma } from "@/lib/prisma";
import DescribingTheUI from "@/components/describing-the-ui";
import Link from "next/link";

export default async function Home() {
  const users = await prisma.account.findMany();
  
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#000000] text-slate-300 p-4">
          <h1 className="text-red-300">NextJS Routing Files</h1>
          <Link target="_blank" className="text-orange-300" href="https://nextjs.org/learn/dashboard-app/setting-up-your-database">
            👉 https://nextjs.org/learn/dashboard-app/setting-up-your-database
          </Link>
          <Link target="_blank" className="text-orange-300" href="https://nextjs.org/docs/app/getting-started/images-and-fonts">
            👉 https://nextjs.org/docs/app/getting-started/images-and-fonts
          </Link>

          <p>layout ✅</p>
          <p>page ✅</p>
          <p>loading: Loading UI ❌</p>
          <p>not-found: Not found UI ❌</p>
          <p>error: Error UI ❌</p>
          <p>global-error: Global error UI ❌</p>
          <p>route: API endpoint ❌</p>
          <p>template: Re-rendered layout ❌</p>
          <p>default: Parallel route fallback page ❌</p>
        </div>
        <div className="bg-[#23272F] text-slate-300 p-4">
          <h1 className="text-red-300">ReactJS</h1>
          <Link target="_blank" className="text-orange-300" href="https://react.dev/learn/adding-interactivity">
            👉 https://react.dev/learn/adding-interactivity
          </Link>
          <p>To review ❌</p>
          <Link target="_blank" className="text-orange-300 block" href="https://codesandbox.io/p/sandbox/8yjwkf?file=%2Fsrc%2FApp.js%3A5%2C3-5%2C54">
            👉 https://codesandbox.io/p/sandbox/8yjwkf?file=%2Fsrc%2FApp.js%3A5%2C3-5%2C54
          </Link>
          <Link target="_blank" className="text-orange-300 block" href="https://codesandbox.io/p/sandbox/d75p49">
            👉 https://codesandbox.io/p/sandbox/d75p49
          </Link>
          <DescribingTheUI />
        </div>
        <div className="bg-slate-600 p-4">
          <h1>My App</h1>
          <Link href="/comps">👉 Componentes</Link>
          <Link className="block" href="/dashboard">👉 Dashboard</Link>
          <ul>
            {Boolean(users.length) ? (
              users.map((user) => (
                <li key={user.id}>Email: {user.email} {user.role}</li>
              ))
            ): (
              <p>No users found.</p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
