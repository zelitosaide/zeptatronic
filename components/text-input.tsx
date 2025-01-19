import clsx from "clsx";

interface TextInputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

export function TextInput({ label, name, type, placeholder, icon, className }: TextInputProps) {
  const Icon = icon;

  return (
    <div className={clsx("mb-4", className)}>
      <label htmlFor={name} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <div className="relative mt-2 rounded-md">
        <div className="relative">
          <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            className="peer block w-full rounded-md border border-slate-200 py-2 pl-10 text-sm outline-2 placeholder:text-slate-500  focus:border-teal-500 focus:border-opacity-60 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
          />
          <Icon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-500 peer-focus:text-slate-900" />
        </div>
      </div>
    </div>
  );
}