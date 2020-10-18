/*eslint-disable no-useless-escape*/

export default {
  required: value => Boolean(value) || 'Required',
  email: value =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    ) || 'Invalid email',
  phone: value => /^(\+7|8)[0-9\-\+]{10}$/.test(value) || 'Invalid phone',
  min: len => value => String(value).length >= len || `Min ${len} characters`,
  max: len => value => String(value).length <= len || `Max ${len} characters`
}
