import BusinessDayOfDateFns from '../src/core/date-fns'
import BusinessDayOfMoment from '../src/core/moment'
import { config } from '../src/config'
import configTW from '../src/locale/TW'
import configUS from '../src/locale/US'
import { format } from 'date-fns'
import moment from 'moment'

console.log('start test')

BusinessDayOfMoment.setConfig(configUS)
const day1 = moment('2020-07-02')
console.log(config)
console.log('origin : ' + day1.format('YYYY-MM-DD'))
console.log('target : ' + moment(BusinessDayOfMoment.addBusinessDays(day1.toDate(), 1)).format('YYYY-MM-DD'))

BusinessDayOfMoment.setConfig(configTW)
const day2 = moment('2020-09-30')
console.log(config)
console.log('origin : ' + day2.format('YYYY-MM-DD'))
console.log('target : ' + moment(BusinessDayOfMoment.addBusinessDays(day2.toDate(), 1)).format('YYYY-MM-DD'))

BusinessDayOfMoment.setConfig({ holidays: ['2020-12-02'] })
const day3 = moment('2020-12-01')
console.log(config)
console.log('origin : ' + day3.format('YYYY-MM-DD'))
console.log('target : ' + moment(BusinessDayOfMoment.addBusinessDays(day3.toDate(), 1)).format('YYYY-MM-DD'))

BusinessDayOfDateFns.setConfig(configUS)
const day4 = new Date('2020-07-02')
console.log(config)
console.log('origin : ' + format(day4, 'yyyy-MM-dd'))
console.log('target : ' + format(BusinessDayOfDateFns.addBusinessDays(day4, 1), 'yyyy-MM-dd'))

console.log('end test')