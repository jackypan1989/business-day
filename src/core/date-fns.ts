import { addDays, getDay, isSameDay, startOfDay, subDays } from 'date-fns'
import { config, setConfig } from '../config'

import { Core } from '../type'

const isWorkingDay = (date: Date) => {
  const workingDays = config.workingDays

  return workingDays.filter(workingDay => {
    return getDay(date) === workingDay
  }).length > 0
}

const isHoliday = (date: Date) => {
  const holidays = config.holidays

  return holidays.filter(holiday => {
    return isSameDay(new Date(holiday), date)
  }).length > 0
}

const isMakeupDay = (date: Date) => {
  const makeupDays = config.makeupDays

  return makeupDays.filter(makeupDay => {
    return isSameDay(new Date(makeupDay), date)
  }).length > 0
}

const isBusinessDay = (date: Date) => {
  if (isMakeupDay(date)) return true
  if (isHoliday(date)) return false
  if (isWorkingDay(date)) return true
  else return false
}

const addBusinessDays = (date: Date, amount: number) => {
  let restAmount = amount
  let current = startOfDay(date)

  while (restAmount > 0) {
    current = addDays(current, 1)
    if (isBusinessDay(current)) {
      restAmount = restAmount - 1
    }
  }

  return current
}

const subtractBusinessDays = (date: Date, amount: number) => {
  let restAmount = amount
  let current = startOfDay(date)

  while (restAmount > 0) {
    current = subDays(current, 1)
    if (isBusinessDay(current)) {
      restAmount = restAmount - 1
    }
  }

  return current
}

const core: Core = {
  setConfig,
  isBusinessDay,
  addBusinessDays,
  subtractBusinessDays,
}

export default core