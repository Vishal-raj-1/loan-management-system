import React from "react";
import { connect } from "react-redux";
import { fetchLoans } from "../Actions";
import { Link } from "react-router-dom";
import GoogleAuth from "../Auth";

class LoanList extends React.Component {
  componentDidMount() {
    this.props.fetchLoans();
    // this.print();
  }

  print() {
    console.log(this.props.loans);
  }

  renderList() {
    return this.props.loans.map((loan) => {
      if (loan.userId === this.props.currentUserId) {
        return (
          <tr key={loan.id}>
            <td>{loan.LoanAmt}</td>
            <td>{loan.emi}</td>
            <td>{loan.LoanStartD}</td>
            <td>{loan.LoanExpiryD}</td>
            <td className="text-primary"><Link to={`/loans/${loan.id}`}>Receipt</Link></td>
          </tr>
        );
      }
    });
  }

  renderCreate() {
    // if (this.props.isSignedIn) {
    return (
      <div style={{ textAlign: "right" }}>
        <Link to="/loans/new" className="ui button primary">
          Create Loan
        </Link>
      </div>
    );
    // }
  }

  render() {
    const navStyle = {
      paddingTop: "2rem",
      display: "flex",
      justifyContent: "space-between"
    };
    return (
      <div className="ui container">
        <nav style={navStyle}>
          <h2>Loans</h2>
          <GoogleAuth />
        </nav>
        <table class="ui teal table">
          <thead>
            <tr>
              <th>Loan Amount</th>
              <th>EMI</th>
              <th>Loan Start Date</th>
              <th>Loan Expiry Date</th>
              <th>Receipt</th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loans: Object.values(state.loans),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchLoans })(LoanList);
