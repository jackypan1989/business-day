enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

const defaultWorkingDays = [
  Days.Monday,
  Days.Tuesday,
  Days.Wednesday,
  Days.Thursday,
  Days.Friday
]

const defaultConfig = {
  workingDays: defaultWorkingDays,
  holidays: [
    '2020-01-01',
    '2020-01-23',
    '2020-01-24',
    '2020-01-25',
    '2020-01-26',
    '2020-01-27',
    '2020-01-28',
    '2020-01-29',
    '2020-02-28',
    '2020-02-29',
    '2020-03-01',
    '2020-04-02',
    '2020-04-03',
    '2020-04-04',
    '2020-04-05',
    '2020-05-01',
    '2020-05-02',
    '2020-05-03',
    '2020-06-25',
    '2020-06-26',
    '2020-06-27',
    '2020-06-28',
    '2020-10-01',
    '2020-10-02',
    '2020-10-03',
    '2020-10-04',
    '2020-10-09',
    '2020-10-10',
    '2020-10-11'
  ],
  makeupDays: [
    '2020-02-15',
    '2020-06-20',
    '2020-09-26'
  ]
}

export {
  defaultConfig
}