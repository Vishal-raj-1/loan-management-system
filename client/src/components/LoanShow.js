import React from "react";
import { connect } from "react-redux";
import { fetchLoans } from "../Actions";
import { Link } from "react-router-dom";
import "./loanShow.css"
class LoanDisplay extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchLoans(id);
  }

  render() {
    if (!this.props.loan) {
      return <div>Loading...</div>;
    }
    return (
      <div className="cardContainer">
        <div className="card">
          <div className="content">
            <div className="header">Loan Detail</div>
            <div className="description">
              <h4><strong>Address:</strong> {this.props.loan.Address}</h4>
              <h4><strong>ContactNo:</strong> {this.props.loan.ContactNo}</h4>
              <h4><strong>Email:</strong> {this.props.loan.Email}</h4>
              <h4><strong>Loan Amount:</strong> {this.props.loan.LoanAmt}</h4>
              <h4><strong>Emi:</strong> {this.props.loan.emi}</h4>
              <h4><strong>Loan Start Date:</strong> {this.props.loan.LoanStartD}</h4>
              <h4><strong>Loan Expirt Date:</strong> {this.props.loan.LoanExpiryD}</h4>
            </div>
            <div className="backtoList">
            <Link to={`/home`}><button className="ui primary button">Back to View List</button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { loan: state.loans[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchLoans })(LoanDisplay);
