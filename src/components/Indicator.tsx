import React, { useState, useEffect, FC } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { LinearProgress } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    indicator: {
      height: 5,
    },
  }),
)

const Indicator: FC = ({ children }) => {
  const classes = useStyles()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (isLoading) return <LinearProgress className={classes.indicator} />

  return <>{children}</>
}

export default Indicator
