import { 
  CpuChipIcon, 
  CurrencyDollarIcon, 
  GlobeAltIcon, 
  HashtagIcon, 
  InformationCircleIcon, 
} from "@heroicons/react/24/outline";
import { createComp } from "@/lib/actions";
import { Button } from "@/components/button";
import { TextInput } from "@/components/text-input";
import { Textarea } from "@/components/textarea";
import { RadioGroup } from "@/components/radio-group";
import Breadcrumbs from "@/ui/dashboard/breadcrumbs";
import Link from "next/link";
import DropdownList from "@/components/dropdown-list";
import ChipsInput from "@/components/chips-input";
import Select from "@/components/select";
import { categories, statuses, types } from "@/lib/component-data";

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
      <form action={createComp}>
        <div className="rounded-md bg-slate-50 p-4 md:p-6">
          {/* Grid for compact layout */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {/* Component Name */}
            <TextInput
              label="Component Name"
              name="name"
              type="text"
              placeholder="Enter component name"
              icon={CpuChipIcon}
              className="md:col-span-2"
            />
            
            {/* Component Price */}
            <TextInput
              label="Component Price"
              name="price"
              type="number"
              placeholder="Enter component price"
              icon={CurrencyDollarIcon}
              className="md:col-span-1"
            />

            {/* Component Stock */}
            <TextInput
              label="Component Stock"
              name="stock"
              type="number"
              placeholder="Enter component stock"
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
            />

            {/* Component Categories */}
            <DropdownList 
              label="Component Categories"
              name="categories"
              items={categories}
            />

            {/* Component Datasheet URL */}
            <TextInput
              label="Component Datasheet URL"
              name="datasheet"
              type="url"
              placeholder="Enter component datasheet URL"
              icon={GlobeAltIcon}
            />
          </div>

          {/* Component Description */}
          <Textarea 
            label="Component Description"
            name="description"
            placeholder="Enter component description"
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
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/comps"
            className="flex h-10 items-center rounded-lg bg-slate-100 px-4 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-200"
          >
            Cancel
          </Link>
          <Button type="submit">Create Component</Button>
        </div>
      </form>
    </main>
  );
}