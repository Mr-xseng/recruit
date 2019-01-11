import storage from 'good-storage'
const POSITION_CITY = '__CITY__'
export function setCity (city) {
  storage.set(POSITION_CITY, city)
  return city
}

export function cityLoad () {
  return storage.get(POSITION_CITY, '广州')
}
