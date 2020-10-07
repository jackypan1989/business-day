const BusinessDay = require('../dist/business-day.cjs')
const moment = require('moment')

// 2020-12-01 (Tuesday), 2020-12-02 (Wednesday)

BusinessDay.setConfig({ holidays: ['2020-12-01'] })
const day1 = moment('2020-11-30')
console.log(BusinessDay.addBusinessDays(day1, 1))

// Moment<2020-12-02T00:00:00+08:00>

BusinessDay.setConfig({ holidays: ['2020-12-01', '2020-12-02'] })
const day2 = moment('2020-11-30')
console.log(BusinessDay.addBusinessDays(day2, 1))

// Moment<2020-12-03T00:00:00+08:00>