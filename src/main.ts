import { config, setConfig } from './config'

import moment from 'moment'

const isSameDay = (date1: moment.Moment, date2: moment.Moment) => {
  return date1.isSame(date2, 'day')
}

const isWorkingDay = (date: moment.Moment) => {
  const workingDays = config.workingDays

  return workingDays.filter(workingDay => {
    return date.weekday() === workingDay
  }).length > 0
}

const isHoliday = (date: moment.Moment) => {
  const holidays = config.holidays

  return holidays.filter(holiday => {
    return isSameDay(moment(holiday), date)
  }).length > 0
}

const isMakeupDay = (date: moment.Moment) => {
  const makeupDays = config.makeupDays

  return makeupDays.filter(makeupDay => {
    return isSameDay(moment(makeupDay), date)
  }).length > 0
}

const isBusinessDay = (date: moment.Moment) => {
  if (isMakeupDay(date)) return true
  if (isHoliday(date)) return false
  if (isWorkingDay(date)) return true
  else return false
}

const addBusinessDays = (date: moment.Moment, amount: number) => {
  let restAmount = amount
  let current = date.clone().startOf('d')

  while (restAmount > 0) {
    current = current.clone().add(1, 'd')
    if (isBusinessDay(current)) {
      restAmount = restAmount - 1
    }
  }

  return current
}

const subtractBusinessDays = (date: moment.Moment, amount: number) => {
  let restAmount = amount
  let current = date.clone().startOf('d')

  while (restAmount > 0) {
    current = current.clone().subtract(1, 'd')
    if (isBusinessDay(current)) {
      restAmount = restAmount - 1
    }
  }

  return current
}

export {
  setConfig,
  isBusinessDay,
  addBusinessDays,
  subtractBusinessDays
}