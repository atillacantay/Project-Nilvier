import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core'

const useStyles = makeStyles({
  title: {
    padding: 0,
  },
  content: {
    padding: 0,
  },
})

export interface MyDialogProps {
  open: boolean
  onClose: () => void
  title?: string
  content: JSX.Element
}

const MyDialog = (props: MyDialogProps) => {
  const classes = useStyles()
  const { onClose, open, title, content } = props

  return (
    <Dialog onClose={onClose} aria-labelledby="my-dialog" open={open}>
      <DialogTitle id="my-dialog" className={classes.title}>
        {title}
      </DialogTitle>
      <DialogContent className={classes.content}>{content}</DialogContent>
    </Dialog>
  )
}
export default MyDialog
