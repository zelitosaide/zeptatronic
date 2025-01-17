import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function CreateComp() {
  return (
    <Link
      href="/dashboard/comps/create"
      className="flex h-10 items-center rounded-lg bg-teal-500 px-4 text-sm font-medium text-white transition-colors hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
    >
      <span className="hidden md:block">Create Component</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}