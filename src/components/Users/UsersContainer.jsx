import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setTotalUserCountAC,
  setUsersAC,
} from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    followToggle: (userId) => {
      dispatch(followAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUserCount: (totalUserCount) => {
      dispatch(setTotalUserCountAC(totalUserCount));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
