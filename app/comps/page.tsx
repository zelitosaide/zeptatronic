import { getComps } from "@/lib/comps";
import { Comp } from "@/ui/comp";

export default async function Page() {
  const comps = await getComps();

  return (
    <>
      <h1>Comps</h1>
      <ul>
        {comps.map((comp) => (
          <Comp key={comp} name={comp} />
        ))}
      </ul>
    </>
  );
}