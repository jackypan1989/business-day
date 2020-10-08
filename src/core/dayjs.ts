import { config, setConfig } from '../config'

import { Core } from '../type'
import dayjs from 'dayjs'

const isSameDay = (date1: Date, date2: Date) => {
  return dayjs(date1).isSame(dayjs(date2), 'day')
}

const isWorkingDay = (date: Date) => {
  const workingDays = config.workingDays

  return workingDays.filter(workingDay => {
    return dayjs(date).day() === workingDay
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
  let current = dayjs(date).startOf('d')

  while (restAmount > 0) {
    current = current.clone().add(1, 'd')
    if (isBusinessDay(current.toDate())) {
      restAmount = restAmount - 1
    }
  }

  return current.toDate()
}

const subtractBusinessDays = (date: Date, amount: number) => {
  let restAmount = amount
  let current = dayjs(date).startOf('d')

  while (restAmount > 0) {
    current = current.clone().subtract(1, 'd')
    if (isBusinessDay(current.toDate())) {
      restAmount = restAmount - 1
    }
  }

  return current.toDate()
}

const core: Core = {
  setConfig,
  isBusinessDay,
  addBusinessDays,
  subtractBusinessDays
}

export default core