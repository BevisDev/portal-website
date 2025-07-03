enum MonthEnum {
  January = "January",
  February = "February",
  March = "March",
  April = "April",
  May = "May",
  June = "June",
  July = "July",
  August = "August",
  September = "September",
  October = "October",
  November = "November",
  December = "December",
}

// days of week
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// get list values month
const months = Object.values(MonthEnum);

// get range year descreasing
const rangeYear = (count = 100) =>
  Array.from({ length: count }, (_, index) => new Date().getFullYear() - index);

// get range day 1 to 31
const rangeDay = (count = 31) =>
  Array.from({ length: count }, (_, index) => index + 1);

function toMilliseconds(
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

// export enum
export { MonthEnum, months, daysOfWeek };

// export function
export { rangeYear, rangeDay, toMilliseconds };
