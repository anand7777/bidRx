import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class ConsumerForm extends Component {
  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Patient's Info
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="fname"
              onChange={handleChange}
              defaultValue={values.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="lname"
              onChange={handleChange}
              defaultValue={values.lastName}
            />
          </Grid>
          <Typography variant="h6" gutterBottom>
            Search area
          </Typography>
          <Grid item xs={24} sm={12}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="billing address-level2"
              onChange={handleChange}
              defaultValue={values.city}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="state" name="state" label="State" fullWidth onChange={handleChange} defaultValue={values.state} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zipCode"
              label="Zip / Postal code"
              fullWidth
              autoComplete="billing postal-code"
              onChange={handleChange}
              defaultValue={values.zipCode}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default ConsumerForm;