import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, getUsers2 } from "../../redux/actions/user";
import s from "./User.module.css";

const User = () => {
  const dispatch = useDispatch();
  const user1Handler = () => {
    dispatch(getUsers());
  };
  const user2Handler = () => {
    dispatch(getUsers2());
  };

  const user1 = useSelector((state) => state.user.users);
  const user2 = useSelector((state) => state.user2.users2);
  return (
    <div>
      <i className="fa-solid fa-user"></i>
      
      <div>User</div>

      <button onClick={user1Handler}>GETUSERS1</button>
      <button onClick={user2Handler}>GETUSERS2</button>

    

      <div className={`flex ${s.border} w-100`}>
        <div className="flex flex-col w-2/4">
          {user1?.map((user, index) => (
            <div key={index} className="bg-blue-300">
              <div className="flex">
                <label>{"ID: "}</label>
                <div>{user.id}</div>
              </div>
              <div className="flex">
                {" "}
                <label>{"Name: "}</label>
                <div>{user.name}</div>
              </div>
              <div className="flex">
                <label>{"IsAdmin: "}</label>
                <div>{user.isAdmin ? "true" : "false"}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-2/4">
          {user2?.map((user, index) => (
            <div key={index} className="bg-red-700">
              <div className="flex">
                <label>{"ID: "}</label>
                <div>{user.id}</div>
              </div>
              <div className="flex">
                {" "}
                <label>{"Name: "}</label>
                <div>{user.name}</div>
              </div>
              <div className="flex">
                <label>{"IsAdmin: "}</label>
                <div>{user.isAdmin ? "true" : "false"}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
