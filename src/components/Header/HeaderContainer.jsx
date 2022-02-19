import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from "../../redux/authReducer";

const HeaderContainer = (props) => {
  useEffect(() => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((response) => {
        let { id, login, email } = response.data.data;
        props.setAuthUserData(id, login, email);
      });
  }, []);

  return <Header {...props} />;
};

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, {
  setAuthUserData,
})(HeaderContainer);
