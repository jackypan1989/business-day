export enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

export interface Config {
  workingDays?: Day[],
  holidays?: string[],
  makeupDays?: string[]
}