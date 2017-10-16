const utils = {
  generateRandomString (length, characters = 'all') {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let possible = uppercase + lowercase + numbers
    let string = ''

    if (characters === 'lowercase') {
      possible = lowercase
    } else if (characters === 'uppercase') {
      possible = uppercase
    } else if (characters === 'numbers') {
      possible = numbers
    } else if (characters === 'lowercasenumbers') {
      possible = lowercase + numbers
    }
    // i NEEDS to be a var, not a let, or else minification asdfasgsadfdsa
    for (var i = 0; i < length; i++) {
      string += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return string
  },
  generateTimestamp () {
    let now = new Date()
    return now.toISOString()
  }
}

module.exports = utils
