import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logOut } from "../../redux/auth-reducer";

class HeaderConteiner extends React.Component {
  

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { logOut })(HeaderConteiner);
