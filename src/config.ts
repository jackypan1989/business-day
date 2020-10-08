import { Config, Day } from "./type"

const defaultConfig: Config = {
  workingDays: [Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday],
  holidays: [],
  makeupDays: []
}

let config = defaultConfig

const setConfig = (newConfig: Config) => {
  config = Object.assign(config, newConfig)
}

export {
  config,
  setConfig
}