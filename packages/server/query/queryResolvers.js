const authenticate = require('../authenticate')
module.exports = {
  Query: {
    async user(parent, args, { req, app }) {
      return "Success"
    }
  }
}