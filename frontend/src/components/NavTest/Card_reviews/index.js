import React from "react";
import styled from "styled-components";
import profile from "../../../images/users/profile-face.png";
import star from "../../../images/other/star.jpg";

// STYLED COMPONENTS -start

const Card_ = styled.div`
  border-top: 5px solid #492d71;
  margin: 8px;
  width: 880px;
  height: 400px;
  background-color: #1e1f26;
  .wrap {
    display: flex;
  }

  p {
    margin: 8px;
    font-size: 12px;
  }
  .star {
    width: 60%;
  }
  img {
    width: 60px;
  }
  .grey-btn {
    margin: 8px;
    display: flex;
    color: white;
    width: 170px;
    background-color: rgba(145, 145, 145, 0.6);
    padding: 8px 0 8px 0;
    border-radius: 20px;
    .login,
    .signup {
      margin: 0 16px 0 16px;
      font-size: 10px;
    }
    .line {
      border-right: 1px solid white;
      margin-top: -8px;
      margin-bottom: -8px;
    }
  }
  h5 {
    margin: 8px 0 0 8px;
    color: #492d71;
  }
  h4 {
    margin: 8px;
    font-weight: 300;
  }
  .color-orange {
    color: #492d71;
    font-weight: 900;
  }
`;

// STYLED COMPONENTS -end

const Card_review = () => {
  return (
    <Card_>
      <div className="wrap">
        <div className="img">
          <img src={profile}></img>
        </div>
        <div class="subtitle">
          <h5>Laurent H.</h5>
          <p>6 review in total</p>
        </div>
      </div>
      <div class="subtitle">
        <h5>Colinz Bar</h5>
        <p>
          Ugh. Don't waste your time. Pizza dough good, thin crust but
          ingredients so so. Side of mixed vegetables{" "}
        </p>
      </div>
      <div className="grey-btn">
        <a className="signup">Like 63</a>
        <a className="line"></a>
        <a className="login">Comment 23</a>
      </div>
      <div class="subtitle">
        <h4>Latest Comments</h4>
        <p className="color-orange">Colin Wirz</p>
        <p>Actually ahve no taste </p>
        <p className="color-orange">Cpolin Wirz</p>
        <p>Sorry Bro!</p>
      </div>
    </Card_>
  );
};
export default Card_review;
