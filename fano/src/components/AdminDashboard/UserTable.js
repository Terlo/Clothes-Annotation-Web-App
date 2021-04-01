import React, { Component } from "react";
import { connect } from "react-redux";
import { uploadImages } from "../../store/actions/imageActions";
import { Redirect, withRouter } from "react-router-dom";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { makeAdmin } from "../../store/actions/authActions";

class UserTable extends Component {
  state = {

  }

  makeAdmin = (user) => {
    console.log(user.email)
    this.props.makeAdmin(user)
  }

  render() {
    const { auth } = this.props;
    const {users} = this.props;
    const usersList = users && users.map(user => {
      return (
        <UserRow user={user} handleMakeAdmin={this.makeAdmin}/>
      )
    })
    if (!auth.uid) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <table class="highlight responsive-table" id="dataTable">
          <thead>
            <tr>
              <th> </th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Annotations</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            {usersList}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    users: state.firestore.ordered.users
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    makeAdmin: (user) => dispatch(makeAdmin(user))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => {
    return props.auth.uid ? ([
      {
        collection: "users",
        storeAs: "users"
      }
    ]) : ([])
  })
  )(UserTable)

const UserRow = (props) => {
  const {user} = props
  return (
 
      <tr>
        <td>
          <label>
            <input type="checkbox" class="filled-in" />
            <span></span>
          </label>
        </td>
        <td>{user.email}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.annotationsCounter}</td>
        <td>
          {user.isAdmin ? "Admin" : "User"}
        </td>
        <td>
          {
            !user.isAdmin ? 
              (
                <button className="btn btn-small"
                        onClick={() => props.handleMakeAdmin(user)}>
                  Make Admin
                </button>
              ) :
              (
                <button className="btn btn-small red">
                  Remove Admin
                </button>
              )
          }
        </td>
      </tr>
  )
}