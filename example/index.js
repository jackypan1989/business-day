const { MomentCore, DateFnsCore } = require('../dist/business-day.cjs')
const moment = require('moment')

// 2020-12-01 (Tuesday), 2020-12-02 (Wednesday)

MomentCore.setConfig({ holidays: ['2020-12-01'] })
const day1 = new Date('2020-11-30')
console.log(moment(MomentCore.addBusinessDays(day1, 1)))

// Moment<2020-12-02T00:00:00+08:00>

DateFnsCore.setConfig({ holidays: ['2020-12-01', '2020-12-02'] })
const day2 = new Date('2020-11-30')
console.log(moment(DateFnsCore.addBusinessDays(day2, 1)))

// Moment<2020-12-03T00:00:00+08:00>