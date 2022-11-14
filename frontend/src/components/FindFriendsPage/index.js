import React, {useEffect, useState} from "react";
import UserCard from "./UserCard";
import { Gridding } from "./friends-style.js";


// symbol mark done for button (Friend use);
// import markDone from "../../images/icons/svgs/mark-done-symbol.svg";

const FindFriends = () => {
  const [friends, setFriends] = useState([])
  let token = localStorage.getItem("auth")

  useEffect(() => {
    fetchFriends()
  }, []);

  const fetchFriends = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Cookie", "csrftoken=P5a0t1xsSr5oyG3RWjUVpWo4BCzKYNkF");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://code-media.propulsion-learn.ch/backend/api/social/users/list/", requestOptions)
      .then(response => response.json())
      .then(result => setFriends(result))
      .catch(error => console.log('error', error));
  }

  return (
        <Gridding>
          {friends.map((user) => (<UserCard user={user} key={user.id}/>))}
        </Gridding>
  );
};

export default FindFriends;
