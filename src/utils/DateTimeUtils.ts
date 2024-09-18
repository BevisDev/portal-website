export function toMilliseconds(
  value: number,
  unit: "hours" | "minutes" | "seconds"
): number {
  switch (unit) {
    case "hours":
      return value * 60 * 60 * 1000;
    case "minutes":
      return value * 60 * 1000;
    case "seconds":
      return value * 1000;
    default:
      return value;
  }
}
