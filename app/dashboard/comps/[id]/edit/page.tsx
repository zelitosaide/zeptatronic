import ChipsInput from "@/components/chips-input";
import DropdownList from "@/components/dropdown-list";
import { RadioGroup } from "@/components/radio-group";
import Select from "@/components/select";
import { TextInput } from "@/components/text-input";
import { Textarea } from "@/components/textarea";
import { categories, statuses, types } from "@/lib/component-data";
import { fetchCompById } from "@/lib/data";
import Breadcrumbs from "@/ui/dashboard/breadcrumbs";
import { CpuChipIcon, CurrencyDollarIcon, GlobeAltIcon, HashtagIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const comp = await fetchCompById(id);

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
      <form>
        <div className="rounded-md bg-slate-50 p-4 md:p-6">
          {/* Grid for compact layout */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {/* Component Name */}
            <TextInput
              label="Component Name"
              name="name"
              type="text"
              placeholder="Enter component name"
              defaultValue={comp.name}
              icon={CpuChipIcon}
              className="md:col-span-2"
            />
            
            {/* Component Price */}
            <TextInput
              label="Component Price"
              name="price"
              type="number"
              placeholder="Enter component price"
              defaultValue={comp.price}
              icon={CurrencyDollarIcon}
              className="md:col-span-1"
            />

            {/* Component Stock */}
            <TextInput
              label="Component Stock"
              name="stock"
              type="number"
              placeholder="Enter component stock"
              defaultValue={comp.stock}
              icon={HashtagIcon}
              className="md:col-span-1"
            />
          </div>

          {/* Grid for compact layout */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Component Type */}
            <Select
              label="Component Type"
              name="type"
              items={types}
              defaultValue={comp.type}
            />

            {/* Component Categories */}
            <DropdownList
              label="Component Categories"
              name="categories"
              items={categories}
              defaultValues={comp.categories}
            />

            {/* Component Datasheet URL */}
            <TextInput
              label="Component Datasheet URL"
              name="datasheet"
              type="url"
              placeholder="Enter component datasheet URL"
              defaultValue={comp.datasheet}
              icon={GlobeAltIcon}
            />
          </div>

          <Textarea
            label="Component Description"
            name="description"
            placeholder="Enter component description"
            defaultValue={comp.description}
            icon={InformationCircleIcon}
          />

          {/* Component Images */}
          <ChipsInput
            label="Component Images"
            name="images"
            placeholder="Enter component images URLs"
          />

          {/* Component Status */}
          <RadioGroup
            label="Set the component status"
            name="status"
            options={statuses}
          />
        </div>
      </form>
    </main>
  );
}