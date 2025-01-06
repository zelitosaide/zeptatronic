"use server";

import { prisma } from "@/db/prisma";

export async function createComp(formData: FormData) {
  const comp = await prisma.comp.create({
    data: {
      name: "5V DC Relay Module",
      type: "Relay",
      description: "Electromechanical relay module with a 5V coil, suitable for switching AC and DC loads.",
      datasheet: "https://example.com/datasheets/5v-dc-relay.pdf",
      images: [
        "https://example.com/images/5v-dc-relay-front.jpg",
        "https://example.com/images/5v-dc-relay-back.jpg",
      ],
      price: 2.00,
      stock: 300,
      categories: ["Relays", "Switching Components"],
      isActive: true,
    },
  });
  console.log({ comp });
}

export async function deleteComp(formData: FormData) {}