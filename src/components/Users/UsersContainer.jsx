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
import Loader from "../UI/Loader/Loader";
import { useEffect } from "react";
import { usersAPI } from "../../api/Api";

const UsersContainerAPI = (props) => {
  useEffect(() => {
    props.setIsFetching(true);

    usersAPI.getUsers(props.currentPage, props.pageSize).then((data) => {
      props.setIsFetching(false);
      props.setUsers(data.items);
      props.setTotalUserCount(data.totalCount);
    });
  }, []);

  const onPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    props.setIsFetching(true);

    usersAPI.getUsers(pageNumber, props.pageSize).then((data) => {
      props.setIsFetching(false);
      props.setUsers(data.items);
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
