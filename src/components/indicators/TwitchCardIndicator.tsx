import React, { FC } from 'react'
import { Skeleton } from '@material-ui/lab'
import { Box, Grid } from '@material-ui/core'

type StateProps = {
  size: number
}

const TwitchCardIndicator: FC<StateProps> = ({ size }) => {
  const items = Array(size)
    .fill(null)
    .map((_, i) => i)

  return (
    <Grid container spacing={4}>
      {items.map((item, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Skeleton variant="rect" height={411} animation="wave" />
          <Box pt={1} display="flex" justifyContent="space-between">
            <Skeleton variant="text" width={120} height={24} animation="wave" />
            <Box>
              <Skeleton variant="text" width={70} animation="wave" />
              <Skeleton variant="text" width={70} animation="wave" />
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}
export default TwitchCardIndicator
