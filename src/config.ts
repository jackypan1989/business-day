import { Config, Day } from "./type"

const defaultConfig: Config = {
  workingDays: [Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday],
  holidays: [],
  makeupDays: []
}

const config = defaultConfig

const setConfig = (newConfig: Config) => {
  Object.assign(config, newConfig)
}

export {
  config,
  setConfig
}