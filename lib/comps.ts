// export function getComps(): Promise<string[]> {
//   return new Promise((resolve) => {
//     resolve(["Diodo", "Transistor"]);
//   });
// }

import { prisma } from "@/db/prisma";

export async function getComps() {
  return await prisma.comp.findMany({
    where: {
      isActive: true
    }
  });
}