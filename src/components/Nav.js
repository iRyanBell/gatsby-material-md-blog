import React from 'react'
import { rhythm } from '../utils/typography'
import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import HomeIcon from '@material-ui/icons/Home'

const Nav = () => (
  <AppBar
    position="static"
    color="inherit"
    elevation={0}
    style={{ borderBottom: '1px solid #00000220' }}
  >
    <Toolbar
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(36),
        width: `100%`,
        padding: `0 ${rhythm(3 / 4)}`,
      }}
    >
      <Grid spacing={4} container justify="space-evenly">
        <Grid item xs={3}>
          <Link
            to="/"
            style={{
              boxShadow: 'none',
              fontFamily: 'Roboto',
              color: '#252527',
              display: 'flex',
            }}
          >
            <HomeIcon />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              Home
            </div>
          </Link>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'center', color: '#555557', fontFamily: 'Merriweather' }}>iRyanBell</Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Toolbar>
  </AppBar>
)

export default Nav