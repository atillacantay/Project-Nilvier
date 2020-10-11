import React, { FC } from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { makeStyles, createStyles } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'hidden',
    },
    wrapper: {
      display: 'flex',
      flex: '1 1 auto',
      overflow: 'hidden',
    },
    contentContainer: {
      display: 'flex',
      flex: '1 1 auto',
      overflow: 'hidden',
    },
    content: {
      flex: '1 1 auto',
      height: '100%', //not important
      overflow: 'auto',
    },
  }),
)

const Layout: FC = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.wrapper}>
        {/* <div className={classes.contentContainer}> */}
        <div className={classes.content}>{children}</div>
        {/* </div> */}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
