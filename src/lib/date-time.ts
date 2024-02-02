export const weekdays = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
] as const;

export type Weekday = (typeof weekdays)[number];

export const timeRegexp: RegExp = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/;