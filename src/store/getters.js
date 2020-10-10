export default {
  user: state => state.user,
  authorization: state => state.authorization,
  isAuthenticated: state => Boolean(state.authorization) && Boolean(state.user.id)
}
