import React, { Component } from 'react';
import EmailComposer from './EmailComposer';

class PacientInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patient: '',
      email: '',
      SetsReps: false,
      MotorControl: false,
      IceVsHeat: false,
      SymptomLog: false,
      ActivityModification: false,
      NextStepsEVAL: false,
      NextStepsFollowUp: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Patient:
            <input type="text" value={this.state.patient} name="patient" onChange={this.handleChange} />
          </label>

          <label>
            Email:
            <input type="text" value={this.state.email} name="email" onChange={this.handleChange} />
          </label>

          <label>
            Sets/Reps
            <input name="SetsReps" type="checkbox" checked={this.state.SetsReps} onChange={this.handleChange} />
          </label>

          <label>
            Motor Control
            <input name="MotorControl" type="checkbox" checked={this.state.MotorControl} onChange={this.handleChange} />
          </label>

          <label>
            Ice Vs. Heat
            <input name="IceVsHeat" type="checkbox" checked={this.state.IceVsHeat} onChange={this.handleChange} />
          </label>

          <label>
            Symptom Log
            <input name="SymptomLog" type="checkbox" checked={this.state.SymptomLog} onChange={this.handleChange} />
          </label>

          <label>
            Activity Modification
            <input
              name="ActivityModification"
              type="checkbox"
              checked={this.state.ActivityModification}
              onChange={this.handleChange}
            />
          </label>

          <label>
            NextSteps - EVAL
            <input
              name="NextStepsEVAL"
              type="checkbox"
              checked={this.state.NextStepsEVAL}
              onChange={this.handleChange}
            />
          </label>

          <label>
            NextSteps - Follow Up
            <input
              name="NextStepsFollowUp"
              type="checkbox"
              checked={this.state.NextStepsFollowUp}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <div>
          <EmailComposer
            SetsReps={this.state.SetsReps}
            MotorControl={this.state.MotorControl}
            IceVsHeat={this.state.IceVsHeat}
            SymptomLog={this.state.SymptomLog}
            ActivityModification={this.state.ActivityModification}
            NextStepsEVAL={this.state.NextStepsEVAL}
            NextStepsFollowUp={this.state.NextStepsFollowUp}
            foo={this.state.foo}
            bar={this.state.bar}
            patient={this.state.patient}
            email={this.state.email}
          />
        </div>
      </div>
    );
  }
}

export default PacientInfo;
