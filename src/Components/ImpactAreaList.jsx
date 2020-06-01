import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ListSubheader, List, ListItem, ListItemText, Collapse } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 1,
    position: 'sticky'
  },
  nested: {
    paddingLeft: theme.spacing(4),
    zIndex: 1
  }
}))

const ImpactAreaList = () => {
  const classes = useStyles()
  const [basicOpen, setBasicOpen] = React.useState(false)
  const [fosterOpen, setFosterOpen] = React.useState(false)
  const [financeOpen, setFinanceOpen] = React.useState(false)
  const [healthOpen, setHealthOpen] = React.useState(false)
  const [strengthOpen, setStrengthOpen] = React.useState(false)
  const [otherOpen, setOtherOpen] = React.useState(false)

  const handleBasicClick = () => {
    setBasicOpen(!basicOpen)
    setFosterOpen(false)
    setFinanceOpen(false)
    setHealthOpen(false)
    setStrengthOpen(false)
    setOtherOpen(false);
  }
  const handleFosterClick = () => {
    setBasicOpen(false)
    setFosterOpen(!fosterOpen)
    setFinanceOpen(false)
    setHealthOpen(false)
    setStrengthOpen(false)
    setOtherOpen(false);
  }
  const handleFinanceClick = () => {
    setBasicOpen(false)
    setFosterOpen(false)
    setFinanceOpen(!financeOpen)
    setHealthOpen(false)
    setStrengthOpen(false)
    setOtherOpen(false);
  }
  const handleHealthClick = () => {
    setBasicOpen(false)
    setFosterOpen(false)
    setFinanceOpen(false)
    setHealthOpen(!healthOpen)
    setStrengthOpen(false)
    setOtherOpen(false);
  }
  const handleStrengthClick = () => {
    setBasicOpen(false)
    setFosterOpen(false)
    setFinanceOpen(false)
    setHealthOpen(false)
    setStrengthOpen(!strengthOpen)
    setOtherOpen(false);
  }
  const handleOtherClick = () => {
    setBasicOpen(false)
    setFosterOpen(false)
    setFinanceOpen(false)
    setHealthOpen(false)
    setStrengthOpen(false)
    setOtherOpen(!otherOpen);
  }

  return (
    <List
      className={classes.root}
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Impact Areas
        </ListSubheader>
      }
    >
      <ListItem button onClick={handleBasicClick}>
        <ListItemText primary='Basic Needs' />
        {basicOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={basicOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Crisis Intervention" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Food Security" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Housing Security" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Transportation" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Legal Assistance" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleFosterClick}>
        <ListItemText primary='Foster Learning' />
        {fosterOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={fosterOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Early Childhood Education" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Child Welfare" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="K-12 Education and Out-of-School Time" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Post-Secondary Education" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleFinanceClick}>
        <ListItemText primary='Financial Stability' />
        {financeOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={financeOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Jobs" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Income" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Debt" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Financial Education" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Financial Safety Net" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleHealthClick}>
        <ListItemText primary='Improve Health' />
        {healthOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={healthOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Access to Healthcare" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Physical Health" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Substance Abuse" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleStrengthClick}>
        <ListItemText primary='Strengthen Communities' />
        {strengthOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={strengthOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Disaster Preparedness &amp; Response" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Safety" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Justice System" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Built Environment" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Community Building" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Aging &amp; Senior Support" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Services for Individuals with Disabilities" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleOtherClick}>
        <ListItemText primary='Other' />
        {otherOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={otherOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Animals &amp; Environment" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Arts &amp; Culture" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Farming" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Faith" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Fundraising" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Research" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Uncategorizable" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  )
}

export default ImpactAreaList