const authenticate = require('../authenticate')

module.exports = {
  Organization: {
    async users(parent, { id }, { app, req, postgres }, info) {
      authenticate(app, req)

      const findUsersQuery = {
        text: 'SELECT * FROM foostown.users',
        values: [],
      }

      const users = await postgres.query(findUsersQuery)

      return users.rows
    },
    async tournaments(parent, { id }, { app, req, postgres }, info) {
      authenticate(app, req)

      const findTournamentsQuery = {
        text: 'SELECT * FROM foostown.tournaments WHERE tournaments.organization_id = $1',
        values: [parent.id],
      }

      const tournaments = await postgres.query(findTournamentsQuery)
      // console.log(tournaments.rows)


      return tournaments.rows
    },
  },
}
