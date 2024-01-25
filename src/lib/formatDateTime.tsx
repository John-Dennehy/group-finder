export function formatDateTime(date: Date) {
  return new Intl.DateTimeFormat(["en-GB", "en-US"], {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}
