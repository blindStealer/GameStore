import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setIsFetchingAC,
  setTotalUserCountAC,
  setUsersAC,
} from "../../redux/usersReducer";
import Users from "./Users";
import React from "react";
import axios from "axios";
import Loader from "../UI/Loader/Loader";

class UsersContainerAPI extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUserCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Loader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            followToggle={this.props.followToggle}
            currentPage={this.props.currentPage}
            selectedPage={this.props.selectedPage}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
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
    setIsFetching: (isFetching) => {
      dispatch(setIsFetchingAC(isFetching));
    },
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainerAPI);

export default UsersContainer;
