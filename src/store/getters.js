export default {
  user: state => state.user,
  authorization: state => state.authorization,
  isAuthenticated: state => Boolean(state.cognito.authenticated),
  userId: state => state.cognito?.authenticated?.attributes?.sub,
  userEmail: state => state.cognito?.authenticated?.attributes?.email
}
