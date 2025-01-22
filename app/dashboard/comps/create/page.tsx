import Breadcrumbs from "@/ui/dashboard/breadcrumbs";
import CreateForm from "@/ui/dashboard/create-form";

const breadcrumbs = [
  { 
    label: "Components", 
    href: "/dashboard/comps" 
  },
  {
    label: "Create Component",
    href: "/dashboard/comps/create",
    active: true,
  },
];

export default function Page() {
  return (
    <main>
      {/* Breadcrumbs */}
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      {/* CompForm */}
      <CreateForm />
    </main>
  );
}