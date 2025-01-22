import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
 
export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-slate-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested component.</p>
      <Link
        href="/dashboard/comps"
        className="mt-4 rounded-md bg-teal-500 px-4 py-2 text-sm text-white transition-colors hover:bg-teal-600"
      >
        Go Back
      </Link>
    </main>
  );
}