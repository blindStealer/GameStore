import axios from "axios";
import React from "react";
import userPhoto from "../../assets/images/user.png";
import s from "./Users.module.css";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUserCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize / 300
    );

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map((item) => {
            return (
              <span
                onClick={() => {
                  this.onPageChanged(item);
                }}
                className={this.props.currentPage === item && s.selectedPage}
                key={item}
              >
                {item}
              </span>
            );
          })}
        </div>
        {this.props.users.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <div>
                  <img
                    style={{ height: 100 }}
                    src={
                      item.photos.small === null ? userPhoto : item.photos.small
                    }
                    alt="ava"
                  />
                </div>
                <div>
                  {item.followed ? (
                    <button onClick={() => this.props.followToggle(item.id)}>
                      followed
                    </button>
                  ) : (
                    <button onClick={() => this.props.followToggle(item.id)}>
                      unfollowed
                    </button>
                  )}
                </div>
              </div>

              <div className="wrapperContent">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.status}</p>
                </div>

                <div>
                  <p>{"item.location.city"}</p>
                  <p>{"item.location.country"}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Users;
