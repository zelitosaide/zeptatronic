import { prisma } from "@/lib/prisma";
import { escapeRegex } from "./utils";

/**
 * The number of items to display
 * per page in the comps table.
 * 
 * @constant ITEMS_PER_PAGE
 * @type {number} The number of items per page.
 * @default 8 items per page
 */
const ITEMS_PER_PAGE = 8;

/**
 * Fetches the total number of comps in the database.
 */
export async function fetchCompsPages(q: string) {
  const query = escapeRegex(q);

  try {
    const count = await prisma.comp.count({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive"
            }
          },
          {
            description: {
              contains: query,
              mode: "insensitive"
            }
          },
          {
            type: {
              contains: query,
              mode: "insensitive"
            }
          }
        ]
      }
    });

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of comps.');
  }
}

/**
 * Fetches a list of comps from the database.
 * 
 * @param q The search query.
 * @param currentPage The current page number.
 * @returns A list of comps.
 */
export async function fetchFilteredComps(q: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const query = escapeRegex(q);

  try {
    // ORDER BY comps.createdAt DESC
    return await prisma.comp.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive"
            }
          },
          {
            description: {
              contains: query,
              mode: "insensitive"
            }
          },
          {
            type: {
              contains: query,
              mode: "insensitive"
            }
          }
        ]
      },
      orderBy: {
        createdAt: "desc"
      },
      skip: offset,
      take: ITEMS_PER_PAGE
    });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch comps.");
  }
}

/**
 * Fetches a single comp from the database.
 * 
 * @param id The ID of the comp.
 * @returns A single comp.
 */
export async function fetchCompById(id: string) {
  try {
    return await prisma.comp.findUnique({
      where: {
        id
      }
    });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch comp.");
  }
}