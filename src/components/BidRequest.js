import React from 'react';
import PropTypes, { string } from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ConsumerForm from './ConsumerForm';
import MedicineForm from './MedicineForm';
import Review from './Review';
import Confirmation from './Confirmation';
import axios from 'axios';
import { conditionalExpression } from '@babel/types';

const styles = theme => ({
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2,
      [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 3,
      padding: theme.spacing.unit * 2,
      [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
        marginTop: theme.spacing.unit * 6,
        marginBottom: theme.spacing.unit * 6,
        padding: theme.spacing.unit * 3,
      },
    },
    stepper: {
      padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing.unit * 3,
      marginLeft: theme.spacing.unit,
    },
  });

const steps = ['Consumer Information', 'Medicine Details', 'Review your request', 'Submitted'];

class BidRequest extends React.Component {

    state = {
      activeStep: 0,
      firstName: '',
      lastName: '',
      city: '',
      state: '',
      zipCode: '',
      medicineName:'',
      medicineQuantity: 0
    };

    handleChange = event => {
      // const name = event.target.name;
      // const value = event.target.value;
      this.setState({
        [event.target.name]: event.target.value
      })
    };

    handleNext = () => {
      this.setState(state => ({
        activeStep: state.activeStep + 1,
      }));
    };

    handleSubmit = () => {
      event.preventDefault();
      const { firstName, lastName, city, state, zipCode, medicineName, medicineQuantity} = this.state;

      const bidRequest = {
        firstName: firstName,
        lastName: lastName,
        city: city,
        state: state,
        zipCode: zipCode,
        medicineName: medicineName,
        medicineQuantity: medicineQuantity
      }

      axios
        .post('/api', { bidRequest })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        .catch(err => {
          console.log("There was an error with your post request: ", err);
        })
      }

    handleBack = () => {
      this.setState(state => ({
        activeStep: state.activeStep - 1,
      }));
    };

    handleReset = () => {
      this.setState({
        activeStep: 0,
      });
    };

    render() {
      const { classes } = this.props;
      const { activeStep } = this.state;
      const { firstName, lastName, city, state, zipCode, medicineName, medicineQuantity} = this.state;
      const values = { firstName, lastName, city, state, zipCode, medicineName, medicineQuantity }
      const handleChange = this.handleChange;

      function getStepContent(step) {
        switch (step) {
          case 0:
            return (
              <ConsumerForm
                handleChange={handleChange}
                values={values}
              />
            )
          case 1:
            return (
              <MedicineForm
                handleChange={handleChange}
                values={values}
              />
            )
          case 2:
            return (
              <Review
                handleChange={handleChange}
                values={values}
              />
            )
          case 3:
            return (
              <Confirmation
                handleChange={handleChange}
                values={values}
              />
            )
          default:
            throw new Error('Unknown step');
        }
      }

      return (
        <React.Fragment>
          <CssBaseline />
          <main className={classes.layout}>
            <Paper className={classes.paper}>
              <Typography component="h1" variant="h4" align="center">
                Request A Bid
              </Typography>
              <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <React.Fragment>
                {activeStep === 3 ? (
                  <React.Fragment>
                    {getStepContent(activeStep)}
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {getStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button onClick={this.handleBack} className={classes.button}>
                          Back
                        </Button>
                      )}
                      {activeStep === 2 ? (
                        <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={this.handleSubmit}
                        className={classes.button}
                        >
                          Submit
                        </Button>
                      ) : (
                        <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                        >
                          Next
                        </Button>
                      )
                      }

                    </div>
                  </React.Fragment>
                )}
              </React.Fragment>
            </Paper>
          </main>
        </React.Fragment>
      );
    }
  }

  BidRequest.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(BidRequest);