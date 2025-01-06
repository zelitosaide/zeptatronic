export function getComps(): Promise<string[]> {
  return new Promise((resolve) => {
    resolve(["Diodo", "Transistor"]);
  });
}