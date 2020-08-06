import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { Container, Typography, Box, makeStyles, Theme, createStyles, Button } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    notFoundRoot: {
      display: 'flex',
      padding: theme.spacing(3),
      minHeight: '100%',
      alignItems: 'center',
      paddingTop: '80px',
      paddingBottom: '80px',
    },
    image: {
      width: '560px',
      height: 'auto',
      maxWidth: '100%',
      maxHeight: '300px',
    },
  }),
)

const NotFound = () => {
  const classes = useStyles()
  return (
    <div className={classes.notFoundRoot}>
      <Container maxWidth="lg">
        <Typography align="center" variant="h3" color="textPrimary">
          404: The page you are looking for isn’t here
        </Typography>
        <Typography align="center" variant="subtitle2" color="textSecondary">
          You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation.
        </Typography>
        <Box mt={6} display="flex" justifyContent="center">
          <img
            alt="404"
            src="https://react-material-kit.devias.io/static/images/undraw_page_not_found_su7k.svg"
            className={classes.image}
          />
        </Box>
        <Box mt={6} display="flex" justifyContent="center">
          <Button component={RouterLink} to="/" color="default" variant="outlined">
            back to home
          </Button>
        </Box>
      </Container>
    </div>
  )
}
export default NotFound
