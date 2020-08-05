import React, { FC } from 'react'

import { Box, Grid, CircularProgress } from '@material-ui/core'

const FetchMoreIndicator: FC = () => {
  return (
    <Grid item xs={12}>
      <Box m={1} display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    </Grid>
  )
}
export default FetchMoreIndicator
