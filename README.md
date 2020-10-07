[![](https://img.shields.io/npm/v/business-day)](https://www.npmjs.com/package/business-day)
[![](https://img.shields.io/npm/dt/business-day)](https://www.npmjs.com/package/business-day)
![CI](https://github.com/jackypan1989/business-day/workflows/CI/badge.svg)
[![](https://img.shields.io/github/license/jackypan1989/business-day)](https://github.com/jackypan1989/business-day)

# business-day

Let your date libaray like [Moment.js](https://momentjs.com/) can count holidays! 

## features

- [x] configurable workdays (default: Mon. -> Fri.)
- [x] configurable holidays
- [x] configurable make-up days
- [x] support [Moment.js](https://momentjs.com/)
- [ ] support [Day.js](https://day.js.org/)
- [ ] support [date-fns](https://date-fns.org/)
- [ ] fully tests

## install

```
yarn add business-day
npm install business-day
```

## usage

```js
import moment from 'moment'
import BusinessDay from 'business-day'

// 2020-12-01 (Tuesday), 2020-12-02 (Wednesday)

BusinessDay.setConfig({ holidays: ['2020-12-01'] })
const day1 = moment('2020-11-30')
console.log(BusinessDay.addBusinessDays(day1, 1))
// Moment<2020-12-02T00:00:00+08:00>

BusinessDay.setConfig({ holidays: ['2020-12-01', '2020-12-02'] })
const day2 = moment('2020-11-30')
console.log(BusinessDay.addBusinessDays(day2, 1))
// Moment<2020-12-03T00:00:00+08:00>

```
