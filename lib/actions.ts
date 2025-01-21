"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  description: z.string(),
  datasheet: z.string(),
  images: z.array(z.string()),
  price: z.coerce.number(),
  stock: z.coerce.number(),
  categories: z.array(z.string()),
  isActive: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const CreateComp = FormSchema.omit({ id: true, createdAt: true, updatedAt: true });

export async function createComp(formData: FormData) {
  const data = CreateComp.parse({
    name: formData.get("name"),
    type: formData.get("type"),
    description: formData.get("description"),
    datasheet: formData.get("datasheet"),
    images: JSON.parse(formData.get("images") as string),
    price: formData.get("price"),
    stock: formData.get("stock"),
    categories: JSON.parse(formData.get("categories") as string),
    isActive: formData.get("status") === "Out of Stock" ? false : true,
  });

  try {
    await prisma.comp.create({ data });
  } catch (error) {
    console.error(error);
  }

  revalidatePath("/dashboard/comps");
  redirect("/dashboard/comps");
}

const UpdateComp = FormSchema.omit({ id: true, createdAt: true, updatedAt: true });

export async function updateComp(id: string, formData: FormData) {
  const data = UpdateComp.parse({
    name: formData.get("name"),
    type: formData.get("type"),
    description: formData.get("description"),
    datasheet: formData.get("datasheet"),
    images: JSON.parse(formData.get("images") as string),
    price: formData.get("price"),
    stock: formData.get("stock"),
    categories: JSON.parse(formData.get("categories") as string),
    isActive: formData.get("status") === "Out of Stock" ? false : true,
  });

  try {
    await prisma.comp.update({ where: { id }, data });
  } catch (error) {
    console.error(error);
  }

  revalidatePath("/dashboard/comps");
  redirect("/dashboard/comps");
}

export async function deleteComp(id: string) {
  throw new Error("Failed to Delete Component");
  
  await prisma.comp.delete({ where: { id } });
  revalidatePath("/dashboard/comps");
}