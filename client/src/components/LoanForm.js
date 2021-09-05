import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import "./LoanForm.css";

class LoanForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div class="ui floating message">
          <p>{error}</p>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta, type }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input
          {...input}
          autoComplete="off"
          type={type}
          required
          placeholder={label}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    validate(formValues);
    this.props.onSubmit(formValues);
  };

  render() {
    //   console.log(this.props);
    return (
      <div className="ui  segment container" style={{ marginTop: "3rem" , boxShadow: "#888787 1px 1px 9px"}}>
        <div className="ui huge  header"> Create Your Loan</div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <div className="two fields">
            <div className="five wide field">
              <Field
                name="F_Name"
                component={this.renderInput}
                label="Enter First Name"
              />
            </div>
            <div className="five wide field">
              <Field
                type="text"
                name="S_Name"
                component={this.renderInput}
                label="Enter Second Name"
              />
            </div>
          </div>
          <div className="seven wide field">
            <Field
              name="Address"
              type="text"
              component={this.renderInput}
              label="Enter your Address"
            />
          </div>
          <div class="two wide fields">
            <div className="eight wide field">
              <Field
                name="Email"
                type="email"
                component={this.renderInput}
                label="Enter your Email"
              />
            </div>
            <div className="three wide field">
              <Field
                name="ContactNo"
                type="number"
                component={this.renderInput}
                label="Contact Number"
              />
            </div>
          </div>

          <div className="three fields">
            <Field
              name="LoanAmt"
              type="number"
              component={this.renderInput}
              label="Loan Amount"
            />

            <Field
              name="LoanStartD"
              type="date"
              component={this.renderInput}
              label="Loan Start Date"
            />

            <Field
              type="date"
              name="LoanExpiryD"
              component={this.renderInput}
              label="Loan Expiry Date"
            />
          </div>
          <div className="one fields">
            <Field
              name="emi"
              type="number"
              component={this.renderInput}
              label="Monthly Installments"
            />
          </div>

          <br />
          <button className="ui submit green button">Submit</button>
          <Link to={`/home`}><button className="ui primary button">Back to View List</button></Link>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (formValues.ContactNo) {
    const No = formValues.ContactNo;
    if (No.length !== 10) {
      errors.ContactNo = "Invalid Mobile No.";
    }
  }

  if (formValues.LoanAmt) {
    const amt = formValues.LoanAmt;
    if (amt < 5000) {
      errors.LoanAmt = "Amount must be greater than 5000";
    }
  }

  if (formValues.emi) {
    const EMI = formValues.emi;
    if (EMI < 1000) {
      errors.emi = "EMI must be greater than 1000";
    }
  }

  return errors;
};

export default reduxForm({
  form: "LoanForm",
  validate,
})(LoanForm);
