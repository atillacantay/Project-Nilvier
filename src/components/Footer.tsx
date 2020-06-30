import React, { FC } from 'react'
import { makeStyles, createStyles, Theme, Paper, Link } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footerRoot: {},
    content: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      padding: theme.spacing(2),
    },
  }),
)

const Footer: FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.footerRoot}>
      <Paper elevation={4} className={classes.content}>
        <Link href="https://www.linkedin.com/in/atillacantay/" target="_blank" color="textSecondary">
          <LinkedInIcon />
        </Link>
        <Link href="https://github.com/atillacantay" target="_blank" color="textSecondary">
          <GitHubIcon />
        </Link>
      </Paper>
    </div>
  )
}

export default Footer
