import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Dialog, Typography, IconButton } from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import CloseIcon from '@material-ui/icons/Close'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const AboutDialog = (props) => {

  const [open, setOpen] = React.useState(false)

  const handleClickClose = () => {
    setOpen(false)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  return (
    <Dialog aria-labelledby="simple-dialog-title" open={false}>
      <DialogTitle id="simple-dialog-title" onClose={handleClickClose}>About the United Way Funding Dashboard</DialogTitle>
      <Typography style={{padding: '20px'}}>
      This report is a summary of the distribution of the year 2017 and the funding throughout the 16 county region that falls within United Way's own funding region. This allows you to look at who else, besides United Way, is also funding this region in the same impact areas as United Way. These impact areas include; Basic Needs, Financial Stability, Foster Learning, Improve Health, Strengthen Communities, and Others. Within these impact areas are topics that further specify what a given grant/award was used for. Each dashboard of this report will take you through different levels of detail, so you can explore the data whichever way you like. You may look at an overall summary as on this page, or the amount of each award for the organization that received it. This report will help provide not only a better idea of which organizations are receiving funding and how much, but also which organizations are providing the funding.
      </Typography>
    </Dialog>
  );
}

export default AboutDialog