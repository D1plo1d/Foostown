import React from 'react'

//router
import { Link } from 'react-router-dom'

//apollo
// import { Query } from 'react-apollo'
// import gql from 'graphql-tag'

//material-ui
import { makeStyles } from '@material-ui/styles'
import {
  Typography,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  Button
} from '@material-ui/core/'

const useStyles = makeStyles({
  homePage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '300px',
  },
  homeTitle: {
    marginTop: 25,
    marginBottom: 25,
    fontSize: 16, 
    color: '#00aa25', 
    fontWeight: 'bold' 
  },
  logoutBtn: {
    marginBottom: 25,
    textDecoration: 'none',
  },
  subHeader: {
    borderBottom: '1px solid #00aa25',
    overflow: 'hidden',
    fontWeight: 'bold' 
  },
  homePageList: {
    height: '175px',
    overflowY: 'scroll',
  },
  createBtn: {
    marginTop: 25,
    textDecoration: 'none',
  }
})


const HomePage = ({
  setCSRFToken,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.homePage}>
      <Typography 
        className= {classes.homeTitle}
        variant='overline'>
          Home
      </Typography>
      <Link className={classes.logoutBtn} to='/'>
        <Button
          color='primary'
          variant='contained'
        >
          Logout
      </Button>
      </Link>
      <ListSubheader
        className={classes.subHeader}
        component='div'
      >
        Players
    </ListSubheader>
      <List className={classes.homePageList}>
        {/* <Divider style={{ background: '#00aa25', height: "0.5px" }}/> */}
        <ListItem button>
          <ListItemIcon>
            Avatar
        </ListItemIcon>
          <ListItemText primary='Player 1' />
          <ListItemSecondaryAction>
            Stats
        </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            Avatar
        </ListItemIcon>
          <ListItemText primary='Player 2' />
          <ListItemSecondaryAction>
            Stats
        </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            Avatar
        </ListItemIcon>
          <ListItemText primary='Player 3' />
          <ListItemSecondaryAction>
            Stats
        </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            Avatar
        </ListItemIcon>
          <ListItemText primary='Player 4' />
          <ListItemSecondaryAction>
            Stats
        </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            Avatar
        </ListItemIcon>
          <ListItemText primary='Player 5' />
          <ListItemSecondaryAction>
            Stats
        </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            Avatar
        </ListItemIcon>
          <ListItemText primary='Player 6' />
          <ListItemSecondaryAction>
            Stats
        </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            Avatar
        </ListItemIcon>
          <ListItemText primary='Player 7' />
          <ListItemSecondaryAction>
            Stats
        </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            Avatar
        </ListItemIcon>
          <ListItemText primary='Player 8' />
          <ListItemSecondaryAction>
            Stats
        </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            Avatar
        </ListItemIcon>
          <ListItemText primary='Player 9' />
          <ListItemSecondaryAction>
            Stats
        </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            Avatar
        </ListItemIcon>
          <ListItemText primary='Player 10' />
          <ListItemSecondaryAction>
            Stats
        </ListItemSecondaryAction>
        </ListItem>
      </List>

      <ListSubheader
        className={classes.subHeader}
        component='div'
      >
        Games
    </ListSubheader>
      <List className={classes.homePageList}>
        <ListItem button >
          <ListItemIcon>
            Icon
        </ListItemIcon>
          <ListItemText primary='Game 1' />
          <ListItemSecondaryAction>
            Scores
        </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            Icon
        </ListItemIcon>
          <ListItemText primary='Game 2' />
          <ListItemSecondaryAction>
            Scores
        </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            Icon
        </ListItemIcon>
          <ListItemText primary='Game 3' />
          <ListItemSecondaryAction>
            Scores
        </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            Icon
        </ListItemIcon>
          <ListItemText primary='Game 4' />
          <ListItemSecondaryAction>
            Scores
        </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            Icon
        </ListItemIcon>
          <ListItemText primary='Game 5' />
          <ListItemSecondaryAction>
            Scores
        </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            Icon
        </ListItemIcon>
          <ListItemText primary='Game 6' />
          <ListItemSecondaryAction>
            Scores
        </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            Icon
        </ListItemIcon>
          <ListItemText primary='Game 7' />
          <ListItemSecondaryAction>
            Scores
        </ListItemSecondaryAction>
        </ListItem>
      </List>

      <Link className={classes.createBtn} to='/create-game'>
        <Button
          variant='contained'
          color='secondary'
        >
          Create Game</Button>
      </Link>

      {/* users/players query
    <Query
      query={gql`
        {
          items(idToOmit:1) {
            id
            title
            description
            tags {
              id
              title
            }
            borrower {
              username
            }
          }              
        }   
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        // const players = data.items.map(({ title, description, borrower }) => (  

        // ))
      }}
    </Query>


    games query
    <Query
      query={gql`
        {
          items(idToOmit:1) {
            id
            title
            description
            tags {
              id
              title
            }
            borrower {
              username
            }
          }              
        }   
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        // const games = data.items.map(({ title, description, borrower }) => (  

        // ))
      }}
    </Query>
    */}

    </div>
  )
};

export default HomePage;