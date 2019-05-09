import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

function Confirmation() {
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
            Thank you for using bidRx.
        </Typography>
        <Typography variant="subtitle1">
            Your request has been dispatched.  Pharmacies within the geographic location you selected will send you bids.
        </Typography>
      </React.Fragment>
    );
  }

export default Confirmation;