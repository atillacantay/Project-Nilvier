import React, { useState, useEffect } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { LinearProgress } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    indicator: {
      height: 5,
    },
  }),
)

const Indicator = (props: any) => {
  const classes = useStyles()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (isLoading) return <LinearProgress className={classes.indicator} />

  return props.children
}

export default Indicator
