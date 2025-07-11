export function formatDate(date) {
  const parsed = new Date(date);
  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
