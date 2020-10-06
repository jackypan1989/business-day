import { addBusinessDays } from '../src/main'
import moment from 'moment'

console.log('start test')

const day1 = moment('2020-09-30')
console.log(addBusinessDays(day1, 3))

const day2 = moment('2020-10-08')
console.log(addBusinessDays(day2, 5))

console.log('end test')