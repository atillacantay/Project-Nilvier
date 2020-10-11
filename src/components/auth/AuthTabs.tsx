import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { AppBar, Tabs, Tab, Box } from '@material-ui/core'

import Auth from './Auth'
import { registerUser, loginUser } from '../../store/auth/actions'

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`auth-tabpanel-${index}`}
      aria-labelledby={`auth-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `auth-tab-${index}`,
    'aria-controls': `auth-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsIndicator: {
    backgroundColor: '#9146FF',
  },
}))

const AuthTabs = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="auth tabs"
          centered
          classes={{ indicator: classes.tabsIndicator }}
        >
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="Register" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Auth action={loginUser} type="login" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Auth action={registerUser} type="register" />
      </TabPanel>
    </div>
  )
}
export default AuthTabs
