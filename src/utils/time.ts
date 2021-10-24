import dateFormat from 'dateformat'

export const getTimeFromUnixTimestamp = (unixTs: number) => {
  return dateFormat(new Date(unixTs), 'dddd, mmmm dS, yyyy, h:MM:ss TT')
}
