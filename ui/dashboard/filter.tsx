"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const statuses = ["All", "In Stock", "Out of Stock"]; // Status options

export default function Filter() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleFilterChange = (status: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1"); // Reset to the first page
    if (status === "All") {
      params.delete("status"); // Remove the filter if 'All' is selected
    } else {
      params.set("status", status);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const currentStatus = searchParams.get("status") || "All"; // Default to 'All'

  return (
    <div className="relative w-64">
      <select
        value={currentStatus}
        onChange={(e) => handleFilterChange(e.target.value)}
        className="block w-full rounded-md border border-slate-300 bg-white py-2 px-3 text-sm shadow-sm focus:border-teal-500 focus:ring-teal-500 focus:ring-opacity-50"
      >
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
}