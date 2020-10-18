import { stored } from '../utils/store'
export default {
  user: stored('user'),
  authorization: stored('authorization'),
  lastMessage: '',
  lastError: ''
}
