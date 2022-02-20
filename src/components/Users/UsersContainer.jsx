import { connect } from "react-redux";
import {
  followToggle,
  setCurrentPage,
  setIsFetching,
  setTotalUserCount,
  setUsers,
} from "../../redux/usersReducer";
import Users from "./Users";
import React from "react";
import axios from "axios";
import Loader from "../UI/Loader/Loader";
import { useEffect } from "react";

const UsersContainerAPI = (props) => {
  useEffect(() => {
    props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        props.setIsFetching(false);
        props.setUsers(response.data.items);
        props.setTotalUserCount(response.data.totalCount);
      });
  }, []);

  const onPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        props.setIsFetching(false);
        props.setUsers(response.data.items);
      });
  };

  return (
    <>
      {props.isFetching ? (
        <Loader />
      ) : (
        <Users
          totalUsersCount={props.totalUsersCount}
          pageSize={props.pageSize}
          followToggle={props.followToggle}
          currentPage={props.currentPage}
          selectedPage={props.selectedPage}
          users={props.users}
          onPageChanged={onPageChanged}
        />
      )}
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

const UsersContainer = connect(mapStateToProps, {
  followToggle,
  setUsers,
  setCurrentPage,
  setTotalUserCount,
  setIsFetching,
})(UsersContainerAPI);

export default UsersContainer;
