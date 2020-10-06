# business-day

Let your date libaray like [Moment.js](https://momentjs.com/) can count holidays! 

## features

- [x] customized workdays (default: Mon. -> Fri.)
- [x] customized holidays 
- [x] customized make-up working days
- [x] support [Moment.js](https://momentjs.com/)
- [ ] support [Day.js](https://day.js.org/)
- [ ] support [date-fns](https://date-fns.org/)
- [ ] muliple locale
- [ ] fully test

## install

```
yarn add business-day
npm install business-day
```

## usage

```js
import moment from 'moment'
import { addBusinessDay } from 'business-day'

const today = moment('2020-01-01')
console.log(addBusinessDay(today, 3))
```
