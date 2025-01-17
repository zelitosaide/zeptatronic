import { createComp } from "@/lib/actions";
import { getComps } from "@/lib/data";
import { Comp } from "@/ui/comp";
import { lusitana } from "@/ui/fonts";

export default async function Page() {
  const comps = await getComps();

  return (
    <>
      <form action={createComp}>
        <button disabled type="submit">Create Comp (disabled)</button>
        {/* <button type="submit">Create Comp</button> */}
      </form>

      <h1 className={`${lusitana.className} bg-red-300`}>Pesquise componentes aqui</h1>
      <input 
        type="search" 
        name="q" 
        id="" 
      />
      <ul>
        {comps.map((comp) => (
          <Comp key={comp.id} {...comp} />
        ))}
      </ul>
    </>
  );
}