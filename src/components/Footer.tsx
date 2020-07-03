import React, { FC } from 'react'
import { makeStyles, createStyles, Theme, Paper, Link, Grid } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footerRoot: {},
    content: {
      padding: theme.spacing(2),
    },
  }),
)

const Footer: FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.footerRoot}>
      <Paper elevation={4} className={classes.content}>
        <Grid container spacing={2} justify="center">
          {items.map(item => (
            <Grid item key={item.key}>
              <Link href={item.href} target="_blank" color="textSecondary">
                {item.icon}
              </Link>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  )
}

export default Footer

const items = [
  { key: 0, href: 'https://www.linkedin.com/in/atillacantay', icon: <LinkedInIcon /> },
  { key: 1, href: 'https://github.com/atillacantay', icon: <GitHubIcon /> },
]
