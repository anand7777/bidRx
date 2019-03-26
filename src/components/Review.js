import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
  title: {
    marginTop: theme.spacing.unit * 2,
  },
});

class Review extends Component {
  render() {
    const { classes } = this.props;
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Request summary
      </Typography>
      <List disablePadding>
          <ListItem className={classes.listItem} key={values.name}>
            <ListItemText primary={values.medicineName} />
            <Typography variant="body2">Quantity: {values.medicineQuantity}</Typography>
          </ListItem>
      </List>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Location
          </Typography>
          <Typography gutterBottom>City:  {values.city}</Typography>
          <Typography gutterBottom>ZipCode:  {values.zipCode}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Patient Info
          </Typography>
          <Grid container>
              <React.Fragment>
                <Grid item xs={6}>
                  <Typography gutterBottom>First Name</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{values.firstName}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Last Name</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{values.lastName}</Typography>
                </Grid>
              </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
 }
}

Review.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Review);