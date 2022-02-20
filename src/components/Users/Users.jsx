import React from "react";
import userPhoto from "../../assets/images/user.png";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize / 300);

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
                props.onPageChanged(item);
              }}
              className={props.currentPage === item && s.selectedPage}
              key={item}
            >
              {item}
            </span>
          );
        })}
      </div>
      {props.users.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <div>
                <NavLink to={`/profile/${item.id}`}>
                  <img
                    style={{ height: 100 }}
                    src={
                      item.photos.small === null ? userPhoto : item.photos.small
                    }
                    alt="ava"
                  />
                </NavLink>
              </div>
              <div>
                {item.followed ? (
                  <button
                    onClick={() => {
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${item.id}`,
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "51bd7e29-08d6-41be-b59b-00fef99413fe",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.followToggle(item.id);
                          }
                        });
                    }}
                  >
                    unfollowed
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${item.id}`,
                          {},
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "51bd7e29-08d6-41be-b59b-00fef99413fe",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.followToggle(item.id);
                          }
                        });
                    }}
                  >
                    followed
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
};

export default Users;
