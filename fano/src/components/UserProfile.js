import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";

const UserProfile = (props) => {
  const { profile } = props;
  return (
    <div className="userpage">
      <h5 class="center-align">{`Welcome back, ${profile.firstName}`}</h5>
      <div className="overview-card">
        <div class="row">
          <div class="col s12 m6">
            <div class="card teal lighten-2 hoverable">
              <div class="card-content white-text">
                <span class="card-title">Overview</span>
                <h6 class="left-align">
                  {`Current Annotations: ${profile.annotationsCounter}`}
                </h6>
                <h6 class="left-align">
                  {`Current Points: ${profile.annotationsCounter * 13}`}
                </h6>
              </div>
            </div>
          </div>
          <div class="col s12 m6">
            <div class="card pink lighten-2 hoverable">
              <div class="card-content white-text">
                <span class="card-title">Performance this week</span>
                <h6 class="left-align">
                  {`Current Annotations: ${profile.annotationsCounter}`}
                </h6>
                <h6 class="left-align">
                  {`Current Points: ${profile.annotationsCounter * 13}`}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/test">
        <a class="waves-effect waves-light btn-large">
          <i class="material-icons right">arrow_forward</i>Annotate
        </a>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(UserProfile);
