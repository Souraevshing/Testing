const { default: axios } = require('axios')

const functions = {
  add: (number1, number2) => number1 + number2,
  substract: (number1, number2) => Math.abs(number1 - number2),
  isNull: () => null,
  checkValue: (value) => value,
  createUser: () => {
    const user = { firstName: 'sourav', lastName: 'kr' }
    return user
  },
  fetchUser: async () =>
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.data)
      .catch((error) => error.message),
}

module.exports = functions
