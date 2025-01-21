export interface Comp {
  id: string; // MongoDB ObjectId as a string
  name: string; // Component name
  type: string; // Component type (e.g., resistor, capacitor, transistor)
  description: string; // Component description
  datasheet?: string; // URL or path to the datasheet
  images: string[]; // Array of URLs for component images
  price: number; // Component price
  stock: number; // Stock quantity
  createdAt: Date; // Date the record was created
  updatedAt: Date; // Date the record was last updated
  categories: string[]; // Related categories (e.g., "Resistors", "Sensors")
  isActive: boolean; // Availability for sale
}