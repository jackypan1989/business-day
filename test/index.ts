import { addBusinessDays, setConfig } from '../src/main'

import { config } from '../src/config'
import configTW from '../src/locale/TW'
import configUS from '../src/locale/US'
import moment from 'moment'

console.log('start test')

setConfig(configUS)
const day1 = moment('2020-07-02')
console.log(config)
console.log('origin : ' + day1.format('YYYY-MM-DD'))
console.log('target : ' + addBusinessDays(day1, 1).format('YYYY-MM-DD'))

setConfig(configTW)
const day2 = moment('2020-09-30')
console.log(config)
console.log('origin : ' + day2.format('YYYY-MM-DD'))
console.log('target : ' + addBusinessDays(day2, 1).format('YYYY-MM-DD'))

setConfig({ holidays: ['2020-12-02'] })
const day3 = moment('2020-12-01')
console.log(config)
console.log('origin : ' + day3.format('YYYY-MM-DD'))
console.log('target : ' + addBusinessDays(day3, 1).format('YYYY-MM-DD'))

console.log('end test')