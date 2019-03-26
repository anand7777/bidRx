import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

class MedicineForm extends Component {
  render () {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Medicine Details
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} md={6}>
            <TextField required id="medName" name="medicineName" label="Name of medicine" fullWidth onChange={handleChange} defaultValue={values.medicineName} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="quantity" name="medicineQuantity" label="Quantity" fullWidth onChange={handleChange} defaultValue={values.medicineQuantity} />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default MedicineForm;