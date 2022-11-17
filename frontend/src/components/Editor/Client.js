import React from "react";
import Avatar from "react-avatar";
import { useEffect, useState } from "react";
import "./Editor_HTML_CSS_JS.css";
import { UserClients, UserName } from "./StyledEditorHTML_CSS_JS";

const Client = ({ username }) => {
  const [token, setToken] = useState(localStorage.getItem("auth"));
  const [users, setUsers] = useState([]);

  const fetchProfile = () => {
    const url =
      "https://code-media.propulsion-learn.ch/backend/api/social/users/me/";

    const config = {
      method: "GET",
      headers: new Headers({
        Authorization: token,
      }),
    };
    if (token) {
      fetch(url, config)
        .then(response => response.json())
        .then(result => setUsers(result[0]))
        .catch(error => console.log("error", error));
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [token]);

  return (
    <UserClients>
      {users.avatar ? (
        <img src={users.avatar} name={username} />
      ) : (
        <Avatar name={username} size={50} round="14px" />
      )}
      <UserName>{username}</UserName>
    </UserClients>
  );
};

export default Client;
