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
    this.handleResetCheckbox = this.handleResetCheckbox.bind(this);
  }

  handleResetCheckbox() {
    this.setState({
      patient: '',
      email: '',
      SetsReps: false,
      MotorControl: false,
      IceVsHeat: false,
      SymptomLog: false,
      ActivityModification: false,
      NextStepsEVAL: false,
      NextStepsFollowUp: false
    });
  }

  handleChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
  }

  render() {
    return (
      <div>
        <form class="form">
          <h2>Patient Info</h2>
          <label>
            <input
            type="text"
            value={this.state.patient}
            name="patient"
            placeholder="enter patient username"
            onChange={this.handleChange} />
          </label>
          <label>
            <input
            type="text"
            value={this.state.email}
            name="email"
            placeholder="enter patient email"
            onChange={this.handleChange} />
          </label>

          <br/>
          <br/>
          <h2>select the checkbox bellow to creare your email</h2>

          <div class="checkbox" >

            <div class="pretty p-default p-curve p-fill">
              <input
                name="SetsReps"
                type="checkbox"
                checked={this.state.SetsReps}
                onChange={this.handleChange}
              />
              <div class="state">
                <label>Sets/Reps</label>
              </div>
            </div>
            <br/>
            <br/>

            <div class="pretty p-default p-curve p-fill">
              <input
                name="MotorControl"
                type="checkbox"
                checked={this.state.MotorControl}
                onChange={this.handleChange}
              />
              <div class="state">
                <label>
                  Motor Control
                </label>
              </div>
            </div>
            <br/>
            <br/>

            <div class="pretty p-default p-curve p-fill">
              <input
                name="IceVsHeat"
                type="checkbox"
                checked={this.state.IceVsHeat}
                onChange={this.handleChange}
              />
              <div class="state">
                <label>
                  Ice Vs. Heat
                </label>
              </div>
            </div>
            <br/>
            <br/>

            <div class="pretty p-default p-curve p-fill">
              <input
                name="SymptomLog"
                type="checkbox"
                checked={this.state.SymptomLog}
                onChange={this.handleChange}
              />
              <div class="state">
                <label>
                  Symptom Log
                </label>
              </div>
            </div>
            <br/>
            <br/>

            <div class="pretty p-default p-curve p-fill">
              <input
                name="ActivityModification"
                type="checkbox"
                checked={this.state.ActivityModification}
                onChange={this.handleChange}
              />
              <div class="state">
                <label>
                  Activity Modification
                </label>
              </div>
            </div>
            <br/>
            <br/>

            <div class="pretty p-default p-curve p-fill">
              <input
                name="NextStepsEVAL"
                type="checkbox"
                checked={this.state.NextStepsEVAL}
                onChange={this.handleChange}
              />
              <div class="state">
                <label>
                  NextSteps - EVAL
                </label>
              </div>
            </div>
            <br/>
            <br/>


            <div class="pretty p-default p-curve p-fill">
              <input
                name="NextStepsFollowUp"
                type="checkbox"
                checked={this.state.NextStepsFollowUp}
                onChange={this.handleChange}
              />
              <div class="state">
                <label>
                  NextSteps - Follow Up
                </label>
              </div>
            </div>
          </div>
        </form>

        <div>
          <EmailComposer
            handleResetCheckbox={this.handleResetCheckbox}
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
