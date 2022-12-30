import React, { useEffect } from "react";

// redux
import { fetchAllUsers } from "../store/slices/users";
import { useDispatch, useSelector } from "react-redux";


const UserList = () => {

  const dispatch = useDispatch();
  const { list: users } = useSelector(state => state.users);

  // const users = [];

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch])

  return (
    <div className="container" style={{ marginTop: "45px" }}>
      <div className="row">
        {users.map((user, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card">
              <img src={user.avatar} alt="placeholder" />
              <div className="card-body">
                <h5>{`${user.first_name} ${user.last_name}`}</h5>
                <p className="card-text">{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
