import clsx from "clsx";

interface RadioGroupProps {
  label: string;
  name: string;
  options: { 
    id: number,
    value: string,
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
  }[];
}

export function RadioGroup({ label, name, options }: RadioGroupProps) {
  return (
    <fieldset>
      <legend className="mb-2 block text-sm font-medium">
        {label}
      </legend>
      <div className="rounded-md border border-slate-200 bg-white px-[14px] py-3">
        <div className="flex gap-4">
          {options.map((option) => {
            const Icon = option.icon;

            return (
              <div key={option.id} className="flex items-center">
                <input
                  id={option.value}
                  name={name}
                  type="radio"
                  value={option.value}
                  className="h-4 w-4 cursor-pointer border-slate-300 bg-slate-100 text-slate-600 focus:border-teal-500 focus:border-opacity-60 focus:ring-2 focus:ring-teal-500"
                />
                <label
                  htmlFor={option.value}
                  className={clsx(
                    "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium",
                    {
                      "bg-slate-100 text-slate-600": option.value === "Out of Stock",
                      "bg-green-500 text-white": option.value === "In Stock",
                    }
                  )}
                >
                  {option.value} <Icon className="h-4 w-4" />
                </label>
              </div>
            )
          })}
        </div>
      </div>
    </fieldset>
  );
}