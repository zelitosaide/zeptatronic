import { lusitana } from "@/ui/fonts";
import Link from "next/link";

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <Link target="_blank" href="https://nextjs.org/learn/dashboard-app/fetching-data">
        To create this page see this link: <span className="text-orange-600">👉 https://nextjs.org/learn/dashboard-app/fetching-data</span>
      </Link>
      <Link className="block" target="_blank" href="https://nextjs.org/learn/dashboard-app/static-and-dynamic-rendering">
        To create this page see this link: <span className="text-orange-600">👉 https://nextjs.org/learn/dashboard-app/static-and-dynamic-rendering</span>
      </Link>
      <Link className="block" target="_blank" href="https://nextjs.org/learn/dashboard-app/streaming">
        To create this page see this link: <span className="text-orange-600">👉 https://nextjs.org/learn/dashboard-app/streaming</span>
      </Link>
      <Link className="block" target="_blank" href="https://nextjs.org/learn/dashboard-app/partial-prerendering">
        To create this page see this link: <span className="text-orange-600">👉 https://nextjs.org/learn/dashboard-app/partial-prerendering</span>
      </Link>
      <Link target="_blank" className="text-orange-600" href="https://www.partialprerendering.com/">
        👉 https://www.partialprerendering.com/
      </Link>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <RevenueChart revenue={revenue}  /> */}
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
}