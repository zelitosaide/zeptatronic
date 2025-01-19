import { fetchCompById } from "@/lib/data";
import Breadcrumbs from "@/ui/dashboard/breadcrumbs";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const comp = await fetchCompById(id);

  console.log(comp);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { 
            label: "Components", 
            href: "/dashboard/comps" 
          },
          { 
            label: "Edit Component", 
            href: `/dashboard/comps/${id}/edit`,
            active: true
          }
        ]}
      />

      {/* CompForm */}
    </main>
  );
}