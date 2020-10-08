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
  core?: 'moment' | 'date-fns'
  workingDays?: Day[],
  holidays?: string[],
  makeupDays?: string[]
}

export interface Core {
  setConfig: (newConfig: Config) => void
  isBusinessDay: (date: Date) => boolean,
  addBusinessDays: (date: Date, amount: number) => Date,
  subtractBusinessDays: (date: Date, amount: number) => Date,
}