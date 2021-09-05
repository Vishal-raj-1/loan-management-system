import React from "react";
import { connect } from "react-redux";
import { createLoan } from "../Actions";
import LoanForm from "./LoanForm";

class LoanCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createLoan(formValues);
  };

  render() {
    return (
      <div>
        <LoanForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createLoan })(LoanCreate);
