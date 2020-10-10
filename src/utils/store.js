import config from '../config'
import { getStored, putStored, deleteStored } from './LocalStorage'

export function stored(key, defVal) {
  return getStored(config.appId + '-' + key, defVal)
}

export function store(key, value) {
  return putStored(config.appId + '-' + key, value)
}

export function destroy(key) {
  return deleteStored(config.appId + '-' + key)
}
