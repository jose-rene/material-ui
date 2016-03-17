import React from 'react';

import Stepper from 'material-ui/lib/Stepper/Stepper';
import Step from 'material-ui/Stepper/VerticalStep';

import Paper from 'material-ui/lib/paper';
import FontIcon from 'material-ui/lib/font-icon';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import SeatIcon from 'material-ui/lib/svg-icons/action/event-seat';
import PrintIcon from 'material-ui/lib/svg-icons/action/print';

const iconStyle = {
  width: 15,
  height: 15,
};

const VerticalLinearStepper = React.createClass({
  getInitialState() {
    return {
      activeStepIndex: -1,
      lastActiveStepIndex: 0,
      statusSteps: [],
    };
  },

  selectStep(stepIndex, step) {
    const {
      lastActiveStepIndex,
      activeStepIndex,

    } = this.state;

    if (stepIndex > lastActiveStepIndex && lastActiveStepIndex < step.props.previousStepOptionalIndex) {
      return;
    }

    this.setState({
      activeStepIndex: stepIndex,
      lastActiveStepIndex: Math.max(lastActiveStepIndex, activeStepIndex),
    });
  },

  updateCompletedSteps(stepIndex) {
    return this.state.statusSteps[stepIndex];
  },

  createIcon(step) {
    if (step.props.isCompleted) {
      return (
        <FontIcon className="material-icons" style={{fontSize: 14}}>
          flight_takeoff
        </FontIcon>
      );
    }

    return <span>{step.props.orderStepLabel}</span>;
  },

  continue() {
    const {
      activeStepIndex,
      lastActiveStepIndex,
      statusSteps,
    } = this.state;

    statusSteps[activeStepIndex] = true;

    this.setState({
      activeStepIndex: activeStepIndex + 1,
      statusSteps: statusSteps,
      lastActiveStepIndex: Math.max(lastActiveStepIndex, activeStepIndex + 1),
    });
  },

  render() {
    return (
      <Paper style={{width: 500, margin: 'auto'}}>
        <div style={{
          textAlign: 'center',
          padding: 10,
          fontSize: 20,
        }}
        >
          Online check-in
        </div>
        <Stepper
          activeStepIndex={this.state.activeStepIndex}
          onStepHeaderTouch={this.selectStep}
          updateCompletedStatusOfStep={this.updateCompletedSteps}
          createIcon={this.createIcon}
        >
          <Step
            orderStepLabel={
              <FontIcon className="material-icons" style={{fontSize: 15}}>
                flight
              </FontIcon>
            }
            stepLabel="Flight details"
            controlButtonsGroup={[
              <RaisedButton key={0} label="Continue" primary={true}
                onClick={this.continue}
              />,
              <FlatButton key={1} label="Cancel" />,
            ]}
          >
            <div>
              Please enter your booking reference, last name, and flight number.
            </div>
          </Step>

          <Step
            orderStepLabel={<SeatIcon style={iconStyle} />}
            isCompleted={false}
            optional={true}
            stepLabel={
              <div>
                <div>Seat selection</div>
                <div style={{fontSize: 10, lineHeight: '5px'}}>optional</div>
              </div>
            }
            stepHeaderStyle={{
              alignItems: 'center',
            }}
            controlButtonsGroup={[
              <RaisedButton key={0} label="Continue" primary={true}
                onClick={this.continue}
              />,
              <FlatButton key={1} label="Cancel" />,
            ]}
          >
            <div>
              If you wish to change your assigned seat, please select an alternative seat,
              or click Finish below to skip this step.
            </div>
          </Step>

          <Step
            orderStepLabel={<PrintIcon style={iconStyle} />}
            stepLabel="Boarding pass"
            controlButtonsGroup={[
              <RaisedButton key={0} label="Finish" primary={true}
                onClick={this.continue}
              />,
              <FlatButton key={1} label="Cancel" />,
            ]}
          >
            <div>
              Please print your boarding pass.
            </div>
          </Step>
        </Stepper>
      </Paper>
    );
  },
});

export default VerticalLinearStepper;
