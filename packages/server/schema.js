const { gql } = require('apollo-server-express')

module.exports = gql`
  type User {
    id: ID!
    fullname: String
    email: String!
    password: String!
    teams: [Team]!
    stats: Stat!
  }

  type Stat {
    matches_played: Int!
    goals_for: Int!
    goals_against: Int!
  }

  type Organization {
    id: ID!
    name: String!
    owner_id: ID!
    is_active: Boolean!
    users: [User!]!
  }

  type Team {
    id: ID!
    organization_id: ID!
    team_name: String!
    matches: [Match]!
  }

  type Match {
    match_id: ID!
    team_id: ID!
    goals_for: Int!
    goals_against: Int!
  }

  input NewUserInput {
    fullname: String
    email: String!
    password: String!
  }

  input NewMatchInput {
    team_id: ID!
    goals_for: Int!
    goals_against: Int!
    organization_id: ID!
  }

  input NewTeamInput {
    organization_id: ID!
    team_name: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Query {
    teams: [Team]!
    user(id: ID!): User!
    viewer: User
    organization(id: ID!): Organization!
  }

  type LoginResponse {
    csrfToken: String!
    user: User!
  }

  type Mutation {
    signup(input: NewUserInput!): LoginResponse!
    login(input: LoginInput!): LoginResponse!
    createTeam(input: NewTeamInput!): Team!
    createMatch(input: NewMatchInput): Match!
  }
`
