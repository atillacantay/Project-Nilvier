import React, { useState, useEffect, FC } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { LinearProgress, Theme, Box } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      alignItems: 'center',
      backgroundColor: theme.palette.background.default,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      minHeight: '100%',
      padding: theme.spacing(3),
    },
    indicator: {
      height: 5,
    },
  }),
)

const LoadingScreen: FC = ({ children }) => {
  const classes = useStyles()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (isLoading)
    return (
      <div className={classes.root}>
        <Box width={400}>
          <LinearProgress className={classes.indicator} />
        </Box>
      </div>
    )

  return <>{children}</>
}

export default LoadingScreen
